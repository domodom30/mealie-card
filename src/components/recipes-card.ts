import type { MealieRecipe, MealieRecipeCardConfig, RecipeCardAction, RecipeLike, RecipeSortOrder, ValueChangedEvent } from '../types';
import { html, nothing, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { DEFAULT_RECIPE_CONFIG, DEFAULT_RESULT_LIMIT, FAVORITES_FETCH_LIMIT, normalizeRecipeConfig, SEARCH_DEBOUNCE_MS } from '../config.card.js';
import { getMealieRecipes, getRecipeFavorites } from '../utils/mealie-api.js';
import { imageBaseUrls } from '../utils/mealie-url.js';
import { FAVORITE_TOGGLED, RECIPE_RATED, RECIPES_UPDATED, subscribeMealieEvent, type MealieSignalName, type Unsubscribe } from '../utils/events.js';
import { MealieBaseCard } from './base-card';
import { buildCardActions, pressHandlers, visibleMenuActions, type ActionHandlers } from '../utils/card-actions.js';
import { hasPressHandler } from '../utils/recipe-press.js';
import { collectRecipeLabels, hasAllLabels, labelKinds, type RecipeLabel } from '../utils/recipe-labels.js';
import './recipes-card-editor';
import './recipe-dialog';
import './mealplan-dialog';
import './recipe-search';
import './recipe-import-dialog';
import './shopping-list-dialog';

const RECIPE_MENU_ORDER: readonly RecipeCardAction[] = ['add_to_mealplan', 'add_to_shopping_list', 'view_recipe'];

function compareByName(a: MealieRecipe, b: MealieRecipe): number {
  return (a.name ?? '').localeCompare(b.name ?? '');
}

function compareByRating(a: MealieRecipe, b: MealieRecipe): number {
  return (b.rating ?? 0) - (a.rating ?? 0) || compareByName(a, b);
}

function pickRandom<T>(items: readonly T[]): T | undefined {
  return items[Math.floor(Math.random() * items.length)];
}

export class MealieRecipeCard extends MealieBaseCard {
  @state() protected config!: MealieRecipeCardConfig;
  @state() private recipes: MealieRecipe[] = [];
  @state() private _mealplanRecipe: MealieRecipe | null = null;
  @state() private _dialogRecipe: RecipeLike | null = null;
  @state() private _searchQuery = '';
  @state() private _importDialogOpen = false;
  @state() private _shoppingRecipe: RecipeLike | null = null;
  @state() private _selectedLabels: ReadonlySet<string> = new Set();
  @state() private _pageIndex = 0;

  private _availableLabels: RecipeLabel[] = [];
  private _visibleRecipes: MealieRecipe[] = [];
  private _pageRecipes: MealieRecipe[] = [];
  private readonly _randomRanks = new Map<string, number>();

  private _searchDebounce: ReturnType<typeof setTimeout> | null = null;
  private _favoriteRecipesCache: MealieRecipe[] | null = null;
  private _favoriteIdsCache: Set<string> | null = null;

  protected refreshSignal(): MealieSignalName {
    return RECIPES_UPDATED;
  }

  protected subscribeExtras(): Unsubscribe[] {
    return [
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        this.recipes = this.recipes.map((r) => (r.slug === slug ? { ...r, rating } : r));
      }),
      subscribeMealieEvent(FAVORITE_TOGGLED, ({ slug, favorite }) => {
        this._favoriteIdsCache = null;
        if (this._favorites.get(slug) !== favorite) {
          this._favorites = new Map(this._favorites).set(slug, favorite);
        }
        if (this.config?.show_favorites_only && this._favoriteRecipesCache) {
          this.recipes = this._visibleFavoriteRecipes();
        }
      }),
    ];
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._searchDebounce) {
      clearTimeout(this._searchDebounce);
      this._searchDebounce = null;
    }
  }

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = normalizeRecipeConfig(config);
    this._reload();
  }

  protected watchedEntityIds(): string[] {
    return this.findMealieEntities('sensor').filter((id) => id.endsWith('_recipes'));
  }

  protected itemCount(): number {
    return this._pageRecipes.length || this.recipes.length;
  }

  private get _pageSize(): number {
    return Math.max(0, Math.floor(this.config?.page_size ?? 0));
  }

  private get _pageCount(): number {
    return this._pageSize ? Math.max(1, Math.ceil(this._visibleRecipes.length / this._pageSize)) : 1;
  }

  protected hasOpenDialog(): boolean {
    return !!this._dialogRecipe || !!this._mealplanRecipe || !!this._shoppingRecipe || this._importDialogOpen;
  }

  private _invalidateFavoriteCaches(): void {
    this._favoriteRecipesCache = null;
    this._favoriteIdsCache = null;
  }

  protected override _reload(): void {
    this._invalidateFavoriteCaches();
    super._reload();
  }

  protected async fetchData(): Promise<void> {
    this.recipes = this.config.show_favorites_only && this.supports('favorites') ? await this._loadFavoriteRecipes() : await this._loadAllRecipes();
  }

  private async _favoriteIds(): Promise<Set<string>> {
    if (!this.supports('favorites')) return new Set();
    if (!this._favoriteIdsCache) {
      const favs = await getRecipeFavorites(this.hass, this.config.config_entry_id ?? undefined);
      this._favoriteIdsCache = new Set(favs.map((f) => f.recipe_id));
    }
    return this._favoriteIdsCache;
  }

  private async _loadFavoriteRecipes(): Promise<MealieRecipe[]> {
    if (!this._favoriteRecipesCache) {
      const favIds = await this._favoriteIds();
      const allRecipes = await getMealieRecipes(this.hass, {
        configEntryId: this.config.config_entry_id ?? undefined,
        resultLimit: FAVORITES_FETCH_LIMIT,
      });
      this._favoriteRecipesCache = allRecipes.filter((r) => favIds.has(r.recipe_id ?? ''));

      if (this.config.show_favorite) {
        this._favorites = new Map(this._favoriteRecipesCache.map((r) => [r.slug, true]));
      }
    }
    return this._visibleFavoriteRecipes();
  }

  private _visibleFavoriteRecipes(): MealieRecipe[] {
    const cached = this._favoriteRecipesCache ?? [];
    return this._applyFavoriteSearch(cached.filter((r) => this._favorites.get(r.slug) !== false));
  }

  private async _loadAllRecipes(): Promise<MealieRecipe[]> {
    const withFavorites = this.config.show_favorite && this.supports('favorites');
    const [recipes, favIds] = await Promise.all([
      getMealieRecipes(this.hass, {
        configEntryId: this.config.config_entry_id ?? undefined,
        resultLimit: this._pageSize ? DEFAULT_RESULT_LIMIT : (this.config.result_limit ?? DEFAULT_RESULT_LIMIT),
        search: this._searchQuery || undefined,
      }),
      withFavorites ? this._favoriteIds() : null,
    ]);

    if (favIds) {
      this._favorites = new Map(recipes.map((r) => [r.slug, favIds.has(r.recipe_id ?? '')]));
    }
    return recipes;
  }

  private _applyFavoriteSearch(list: MealieRecipe[]): MealieRecipe[] {
    const query = this._searchQuery.toLowerCase();
    return query ? list.filter((r) => r.name?.toLowerCase().includes(query)) : list;
  }

  private _onSearch(value: string): void {
    this._searchQuery = value;
    this._pageIndex = 0;

    if (this.config.show_favorites_only && this._favoriteRecipesCache) {
      this.recipes = this._visibleFavoriteRecipes();
      return;
    }

    if (this._searchDebounce) clearTimeout(this._searchDebounce);
    this._searchDebounce = setTimeout(() => this._reload(), SEARCH_DEBOUNCE_MS);
  }

  protected willUpdate(changedProps: Map<string, unknown>): void {
    super.willUpdate(changedProps);
    if (changedProps.has('recipes') || changedProps.has('config')) this._refreshLabels();
    if (changedProps.has('config') || changedProps.has('_selectedLabels')) this._pageIndex = 0;
    if (changedProps.has('recipes') || changedProps.has('config') || changedProps.has('_selectedLabels')) {
      this._visibleRecipes = this._sortRecipes(this.recipes.filter((recipe) => hasAllLabels(recipe, this._selectedLabels)));
    }
    this._pageIndex = Math.min(this._pageIndex, this._pageCount - 1);
    this._pageRecipes = this._pageSize
      ? this._visibleRecipes.slice(this._pageIndex * this._pageSize, (this._pageIndex + 1) * this._pageSize)
      : this._visibleRecipes;
  }

  private _goToPage(index: number): void {
    this._pageIndex = Math.min(Math.max(0, index), this._pageCount - 1);
    if (this.getBoundingClientRect().top < 0) this.scrollIntoView({ block: 'start' });
  }

  private _renderPagination(): TemplateResult | typeof nothing {
    if (this._pageCount <= 1) return nothing;
    const first = this._pageIndex * this._pageSize + 1;
    const last = first + this._pageRecipes.length - 1;
    return html`
      <div class="recipe-pagination">
        <ha-icon-button .label=${this.localize('cards.previous_page')} .disabled=${this._pageIndex <= 0} @click=${() => this._goToPage(this._pageIndex - 1)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </ha-icon-button>
        <span class="plan-range-label" aria-live="polite">${first}–${last} / ${this._visibleRecipes.length}</span>
        <ha-icon-button
          .label=${this.localize('cards.next_page')}
          .disabled=${this._pageIndex >= this._pageCount - 1}
          @click=${() => this._goToPage(this._pageIndex + 1)}
        >
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  private _refreshLabels(): void {
    this._availableLabels = collectRecipeLabels(this.recipes, labelKinds(this.config?.show_category_filters, this.config?.show_tag_filters));
    const availableKeys = new Set(this._availableLabels.map((label) => label.key));
    const kept = [...this._selectedLabels].filter((key) => availableKeys.has(key));
    if (kept.length !== this._selectedLabels.size) this._selectedLabels = new Set(kept);
  }

  private _sortRecipes(recipes: MealieRecipe[]): MealieRecipe[] {
    const order: RecipeSortOrder = this.config?.sort_by ?? 'none';
    if (order === 'name') return [...recipes].sort(compareByName);
    if (order === 'rating') return [...recipes].sort(compareByRating);
    if (order === 'random') return [...recipes].sort((a, b) => this._randomRank(a) - this._randomRank(b));
    return recipes;
  }

  private _randomRank(recipe: MealieRecipe): number {
    let rank = this._randomRanks.get(recipe.slug);
    if (rank === undefined) {
      rank = Math.random();
      this._randomRanks.set(recipe.slug, rank);
    }
    return rank;
  }

  private _toggleLabel(key: string): void {
    const next = new Set(this._selectedLabels);
    if (!next.delete(key)) next.add(key);
    this._selectedLabels = next;
  }

  private _openSurpriseRecipe(): void {
    const recipe = pickRandom(this._visibleRecipes);
    if (recipe) this._recipeHandlers(recipe).view_recipe?.();
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement('mealie-recipe-card-editor');
  }

  public static getStubConfig(): MealieRecipeCardConfig {
    return { ...DEFAULT_RECIPE_CONFIG } as MealieRecipeCardConfig;
  }

  protected render() {
    if (!this.config) return this.renderLoading();
    if (!this.config.config_entry_id) return this.renderEmptyState(this.localize('error.no_integration'));

    return html`${this._renderCardShell(this._renderContent())} ${this._renderDialogs()}`;
  }

  private _renderContent(): TemplateResult {
    if (this.error) return this.renderErrorAlert();

    const hasRecipes = !!this.recipes?.length;
    if ((this._loading || !this._initialized) && !hasRecipes) return this.renderLoadingIndicator();
    if (!this._visibleRecipes.length) return html`<ha-alert alert-type="info">${this.localize('common.no_recipe')}</ha-alert>`;

    return html`<div class="recipes-wrapper" aria-busy=${this._loading ? 'true' : 'false'}>
      <div class="recipes-container">${this._pageRecipes.map((recipe) => this._renderRecipe(recipe))}</div>
      ${this._renderPagination()}
    </div>`;
  }

  private _renderDialogs() {
    return html`
      <mealie-mealplan-dialog
        .hass=${this.hass}
        .recipe=${this._mealplanRecipe}
        .configEntryId=${this.config.config_entry_id}
        .imageBaseUrls=${imageBaseUrls(this.config)}
        ?open=${!!this._mealplanRecipe}
        @dialog-closed=${() => {
          this._mealplanRecipe = null;
        }}
      ></mealie-mealplan-dialog>
      <mealie-recipe-dialog
        .hass=${this.hass}
        .recipe=${this._dialogRecipe}
        .configEntryId=${this.config.config_entry_id}
        .config=${this.config}
        .isFavorite=${this._dialogRecipe?.slug ? (this._favorites.get(this._dialogRecipe.slug) ?? false) : null}
        .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
        .timerStore=${this.timerStore}
        ?open=${!!this._dialogRecipe}
        @dialog-closed=${() => {
          this._dialogRecipe = null;
        }}
      ></mealie-recipe-dialog>
      <mealie-recipe-import-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        ?open=${this._importDialogOpen}
        @dialog-closed=${() => {
          this._importDialogOpen = false;
        }}
      ></mealie-recipe-import-dialog>
      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._shoppingRecipe}
        .configEntryId=${this.config.config_entry_id}
        .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
        ?open=${!!this._shoppingRecipe}
        @dialog-closed=${() => {
          this._shoppingRecipe = null;
        }}
      ></mealie-shopping-list-dialog>
    `;
  }

  private _renderCardShell(content: TemplateResult) {
    return html`
      <ha-card>
        ${this.renderCookTimers()}
        <div class="card-content">${this._renderToolbar()} ${this._renderFilters()} ${content}</div>
      </ha-card>
    `;
  }

  private _renderToolbar(): TemplateResult | typeof nothing {
    const showSearch = this.config.show_search ?? false;
    const showImport = this.config.show_import_button && this.supports('import_recipe');
    const showSurprise = !!this.config.show_surprise_button;
    if (!showSearch && !showImport && !showSurprise) return nothing;

    return html`
      <div class="card-toolbar">
        ${showSearch
          ? html`<mealie-recipe-search
              .value=${this._searchQuery}
              .placeholder=${this.localize('common.search_placeholder')}
              @search-changed=${(e: ValueChangedEvent<string>) => this._onSearch(e.detail.value)}
            ></mealie-recipe-search>`
          : nothing}
        ${showImport
          ? html`<ha-icon-button
                    .label=${this.localize('dialog.import_recipe')}
                    @click=${() => {
                      this._importDialogOpen = true;
                    }}
                  >
                    <ha-icon icon="mdi:cloud-download"></ha-icon>
                  </ha-icon-button>`
          : nothing}
        ${showSurprise
          ? html`<ha-icon-button .label=${this.localize('cards.surprise_recipe')} .disabled=${!this._visibleRecipes.length} @click=${() => this._openSurpriseRecipe()}>
              <ha-icon icon="mdi:dice-5"></ha-icon>
            </ha-icon-button>`
          : nothing}
      </div>
    `;
  }

  private _renderFilters(): TemplateResult | typeof nothing {
    if (!this._availableLabels.length) return nothing;
    return html`
      <div class="recipe-filters" role="group" aria-label=${this.localize('cards.filter_recipes')}>
        ${this._availableLabels.map((label) => {
          const selected = this._selectedLabels.has(label.key);
          return html`<button
            type="button"
            class="recipe-tag filter-chip ${label.kind} ${selected ? 'selected' : ''}"
            aria-pressed=${selected ? 'true' : 'false'}
            @click=${() => this._toggleLabel(label.key)}
          >
            ${label.name}
          </button>`;
        })}
      </div>
    `;
  }

  private _recipeHandlers(recipe: MealieRecipe): ActionHandlers<RecipeCardAction> {
    return {
      add_to_mealplan: () => {
        this._mealplanRecipe = recipe;
      },
      add_to_shopping_list: this.supports('shopping_list')
        ? () => {
            this._shoppingRecipe = recipe;
          }
        : undefined,
      view_recipe: () => {
        if (this.openRecipe(recipe)) this._dialogRecipe = recipe;
      },
    };
  }

  private _renderRecipeInfo(recipe: MealieRecipe): TemplateResult {
    return html`
      <div class="recipe-title">${this.renderRecipeName(recipe)}</div>
      <div class="recipe-meta">
        ${this.renderFavoriteButton(recipe, this.config.show_favorite ?? false, this.config.config_entry_id)}
        ${this._renderInteractiveRating(recipe, this.config.show_rating, this.config.config_entry_id)}
        ${this.renderServings(recipe, this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(recipe.description ?? '', this.config.show_description)}
      ${this.renderRecipeTags(recipe, this.config)}
    `;
  }

  private _renderRecipe(recipe: MealieRecipe): TemplateResult {
    const handlers = this._recipeHandlers(recipe);
    const press = pressHandlers(handlers, this.config);

    return html`
      <div class="recipe-card ${hasPressHandler(press) ? 'pressable' : ''}">
        ${this.renderPressSurface(recipe.name, press)}
        ${this.renderRecipeMedia(recipe, this.config.show_image, buildCardActions(visibleMenuActions(RECIPE_MENU_ORDER, this.config), handlers))}
        ${this._renderRecipeInfo(recipe)}
        ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
      </div>
    `;
  }
}
