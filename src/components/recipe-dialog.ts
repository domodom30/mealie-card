import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { RecipeRenderMixin } from '../utils/recipe-render-mixin';
import { addTodoItem, getRecipe, type MealieShoppingList } from '../utils/mealie-api.js';
import { ShoppingListsController } from '../utils/shopping-lists-controller.js';
import { formatIngredientText } from '../utils/format.js';
import { FAVORITE_TOGGLED, RECIPE_RATED, SHOPPING_LIST_UPDATED, subscribeMealieEvent, Unsubscribe } from '../utils/events.js';
import type { MealieRecipe, MealieRecipeCardConfig, RecipeIngredient, RecipeInstruction, RecipeLike, ValueChangedEvent } from '../types';
import type { CookTimerStore } from '../utils/cook-timers.js';
import type { HASSDomEvent } from '../utils/fire-event.js';
import { renderCheckableIngredient, renderIngredientSectionTitle } from '../utils/ingredient-render.js';
import { MealieBaseDialog } from './base-dialog.js';
import './shopping-list-dialog';
import './cook-mode';
import { defineOnce } from '../utils/define-once.js';
import { isHttpUrl, openRecipeInBrowser } from '../utils/mealie-url.js';
import type { LovelaceCardElement } from '../types/window';

@defineOnce('mealie-recipe-dialog')
export class MealieRecipeDialog extends RecipeRenderMixin(MealieBaseDialog) {
  @property({ attribute: false }) config: Partial<MealieRecipeCardConfig> = {};
  @property({ attribute: false }) recipe: RecipeLike | null = null;
  @property({ attribute: false }) isFavorite: boolean | null = null;
  @property() defaultShoppingListId: string | null = null;
  @property({ attribute: false }) timerStore: CookTimerStore | null = null;

  @state() private _detail: MealieRecipe | null = null;
  @state() private _servings = 0;
  @state() private _shoppingDialogOpen = false;
  @state() private _webviewCard: LovelaceCardElement | null = null;
  @state() private _cooking = false;
  @state() private _checkedIngredients: ReadonlySet<number> = new Set();
  @state() private _shoppingSelection: ReadonlySet<number> = new Set();
  private readonly _shoppingLists = new ShoppingListsController(this);
  private _baseServings = 0;
  private _loadToken = 0;
  private _unsubscribers: Unsubscribe[] = [];

  private get _slug(): string | undefined {
    return this._detail?.slug ?? this.recipe?.slug;
  }

  private get _webUrl(): string | null {
    return this.recipeWebUrl(this.recipe);
  }

  private get _isWebview(): boolean {
    return this.config.recipe_view === 'webview' && !!this._webUrl && !!window.loadCardHelpers;
  }

  private get _scale(): number {
    return this._baseServings > 0 ? this._servings / this._baseServings : 1;
  }

  private get _lang(): string {
    return this.hass?.locale?.language ?? 'en';
  }

  private get _shoppingTargets(): MealieShoppingList[] {
    return this._shoppingLists.lists.filter((list) => !!list.entity_id);
  }

  private get _shoppingTarget(): MealieShoppingList | undefined {
    const selected = this._shoppingLists.selected;
    return selected?.entity_id ? selected : this._shoppingTargets[0];
  }

  private get _canCook(): boolean {
    return !this._isWebview && !!this._detail?.instructions?.length;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._unsubscribers = [
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        if (this._detail?.slug === slug) {
          this._detail = { ...this._detail, rating };
        }
      }),
      subscribeMealieEvent(FAVORITE_TOGGLED, ({ slug, favorite }) => {
        if (this._favorites.get(slug) === favorite) return;
        this._favorites = new Map(this._favorites).set(slug, favorite);
      }),
    ];
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._unsubscribers.forEach((unsubscribe) => unsubscribe());
    this._unsubscribers = [];
  }

  protected onOpen(): void {
    this._shoppingDialogOpen = false;
    this._cooking = false;
    if (this.hass) void this._shoppingLists.load(this.hass, this.configEntryId, this.defaultShoppingListId);
  }

  protected updated(changedProps: Map<string, unknown>): void {
    super.updated(changedProps);

    if (changedProps.has('hass') && this._webviewCard) this._webviewCard.hass = this.hass;

    if (!this.open || !this.recipe) return;

    if (changedProps.has('recipe')) {
      this._detail = null;
      this._webviewCard = null;
      this._cooking = false;
      this._checkedIngredients = new Set();
      this._shoppingSelection = new Set();
    }

    if (!changedProps.has('open') && !changedProps.has('recipe')) return;

    if (this._isWebview) {
      if (!this._webviewCard) void this._loadWebview();
      return;
    }

    if (!this._detail) void this.loadData();
  }

  private async _loadWebview(): Promise<void> {
    const url = this._webUrl;
    const loadHelpers = window.loadCardHelpers;
    if (!url || !loadHelpers) return;

    const token = (this._loadToken += 1);
    this._loading = true;
    this.error = null;
    try {
      const helpers = await loadHelpers();
      const card = await helpers.createCardElement({ type: 'iframe', url, aspect_ratio: '125%' });
      if (token !== this._loadToken) return;

      card.hass = this.hass;
      this._webviewCard = card;
    } catch (err) {
      if (token !== this._loadToken) return;
      this.handleError(err);
    } finally {
      if (token === this._loadToken) this._loading = false;
    }
  }

  protected async loadData(): Promise<void> {
    if (!this.open || !this.recipe || !this.hass) return;

    const recipeId = this.recipe.slug ?? this.recipe.recipe_id;
    if (!recipeId) return;

    const token = (this._loadToken += 1);
    this._loading = true;
    this.error = null;
    try {
      const detail = await getRecipe(this.hass, recipeId, this.configEntryId ?? undefined);
      if (token !== this._loadToken) return;

      this._detail = detail;
      this._baseServings = detail?.recipe_servings ?? 0;
      this._servings = this._baseServings;

      const slug = this._slug;
      if (slug) {
        this._favorites = new Map(this._favorites).set(slug, this.isFavorite ?? this._favorites.get(slug) ?? false);
      }
      this._initialized = true;
    } catch (err) {
      if (token !== this._loadToken) return;
      this.handleError(err);
    } finally {
      if (token === this._loadToken) this._loading = false;
    }
  }

  private _renderServingsControl(): TemplateResult | typeof nothing {
    if (this._baseServings <= 0) return nothing;
    return html`
      <div class="dialog-servings-control">
        <ha-icon-button
          class="dialog-servings-btn"
          .label=${this.localize('dialog.decrease_servings')}
          .disabled=${this._servings <= 1}
          @click=${() => {
            this._servings = Math.max(1, this._servings - 1);
          }}
        >
          <ha-icon icon="mdi:minus"></ha-icon>
        </ha-icon-button>
        <span class="dialog-servings-value">${this._servings} ${this.localize('dialog.servings')}</span>
        <ha-icon-button
          class="dialog-servings-btn"
          .label=${this.localize('dialog.increase_servings')}
          @click=${() => {
            this._servings = this._servings + 1;
          }}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  private _toggleIngredient(index: number): void {
    const next = new Set(this._checkedIngredients);
    if (!next.delete(index)) next.add(index);
    this._checkedIngredients = next;
  }

  private readonly _onIngredientToggled = (event: HASSDomEvent<{ index: number }>): void => {
    event.stopPropagation();
    this._toggleIngredient(event.detail.index);
  };

  private _ingredientText(ingredient: RecipeIngredient): string {
    return formatIngredientText(ingredient, this._scale, false, this._lang);
  }

  private _toggleShoppingIngredient(index: number): void {
    const next = new Set(this._shoppingSelection);
    if (!next.delete(index)) next.add(index);
    this._shoppingSelection = next;
  }

  private _selectedShoppingTexts(recipe: MealieRecipe): string[] {
    return (recipe.ingredients ?? []).flatMap((ingredient, index) => {
      if (!this._shoppingSelection.has(index)) return [];
      const text = this._ingredientText(ingredient).trim();
      return text ? [text] : [];
    });
  }

  private async _addTodoItems(entityId: string, texts: string[]): Promise<void> {
    for (const text of texts) await addTodoItem(this.hass, entityId, text);
    this._shoppingSelection = new Set();
  }

  private _countLabel(singularKey: string, pluralKey: string, count: number): string {
    return count === 1 ? this.localize(singularKey) : this.localize(pluralKey, '{count}', String(count));
  }

  private _addSelectedIngredients(recipe: MealieRecipe): void {
    const entityId = this._shoppingTarget?.entity_id;
    const texts = this._selectedShoppingTexts(recipe);
    if (!entityId || !texts.length) return;

    void this.submit({
      run: () => this._addTodoItems(entityId, texts),
      success: () => this._countLabel('dialog.ingredient_added_to_shopping_list', 'dialog.ingredients_added_to_shopping_list', texts.length),
      errorKey: 'error.error_updating_shopping_list',
      signal: SHOPPING_LIST_UPDATED,
      closeOnSuccess: false,
    });
  }

  private _renderShoppingListChoice(): TemplateResult | typeof nothing {
    const targets = this._shoppingTargets;
    const hasDefault = targets.some((list) => list.id === this.defaultShoppingListId);
    if (hasDefault || targets.length < 2) return nothing;
    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: 'dropdown', options: targets.map((list) => ({ value: list.id, label: list.name })) } }}
        .value=${this._shoppingTarget?.id ?? ''}
        .label=${this.localize('dialog.select_shopping_list')}
        .required=${false}
        @value-changed=${(e: ValueChangedEvent<string>) => this._shoppingLists.select(e.detail.value)}
      ></ha-selector>
    `;
  }

  private _renderShoppingBar(recipe: MealieRecipe): TemplateResult | typeof nothing {
    const count = this._shoppingSelection.size;
    if (!count) return nothing;
    return html`
      <div class="ingredient-shopping-bar">
        ${this._renderShoppingListChoice()}
        <ha-button size="small" variant="brand" appearance="accent" ?disabled=${this._submitting} @click=${() => this._addSelectedIngredients(recipe)}>
          <ha-icon slot="start" icon="mdi:cart-plus"></ha-icon>
          ${this._countLabel('dialog.add_ingredient_to_shopping_list', 'dialog.add_ingredients_to_shopping_list', count)}
        </ha-button>
      </div>
    `;
  }

  private _renderPlainIngredients(ingredients: RecipeIngredient[]): TemplateResult {
    return html`<ul>
      ${ingredients.map((ingredient) => html`${renderIngredientSectionTitle(ingredient.title)}<li>${this._ingredientText(ingredient)}</li>`)}
    </ul>`;
  }

  private _renderIngredients(recipe: MealieRecipe): TemplateResult {
    const ingredients = recipe.ingredients ?? [];
    if (!this._shoppingTargets.length) return this._renderPlainIngredients(ingredients);
    return html`
      <div class="ingredient-list dialog-ingredient-list">
        ${ingredients.map(
          (ingredient, index) =>
            html`${renderIngredientSectionTitle(ingredient.title)}${renderCheckableIngredient(
              this._ingredientText(ingredient),
              this._shoppingSelection.has(index),
              () => this._toggleShoppingIngredient(index)
            )}`
        )}
      </div>
      ${this._renderShoppingBar(recipe)}
    `;
  }

  private _renderSourceLink(recipe: MealieRecipe): TemplateResult | typeof nothing {
    const url = recipe.original_url;
    if (!url || !isHttpUrl(url)) return nothing;
    return html`
      <a class="recipe-source-link" href=${url} target="_blank" rel="noopener noreferrer">
        <ha-icon icon="mdi:link-variant"></ha-icon>${this.localize('dialog.recipe_source')}
      </a>
    `;
  }

  private _renderCookToggle(): TemplateResult | typeof nothing {
    if (!this._canCook) return nothing;
    return html`
      <ha-icon-button
        slot="headerActionItems"
        .label=${this.localize(this._cooking ? 'dialog.exit_cooking' : 'dialog.start_cooking')}
        @click=${() => {
          this._cooking = !this._cooking;
        }}
      >
        <ha-icon icon=${this._cooking ? 'mdi:close-circle-outline' : 'mdi:chef-hat'}></ha-icon>
      </ha-icon-button>
    `;
  }

  private _renderCookMode(): TemplateResult {
    return html`
      <div class="dialog-body">
        ${this._renderServingsControl()}
        <mealie-cook-mode
          .hass=${this.hass}
          .recipe=${this._detail}
          .scale=${this._scale}
          .timerStore=${this.timerStore}
          .checkedIngredients=${this._checkedIngredients}
          @ingredient-toggled=${this._onIngredientToggled}
        ></mealie-cook-mode>
      </div>
    `;
  }

  private _renderBody(): TemplateResult | typeof nothing {
    if (this._isWebview) return this._renderWebview();
    if (!this._detail) return nothing;
    return this._cooking ? this._renderCookMode() : this._renderDetail();
  }

  private _renderInstruction({ title, text }: RecipeInstruction): TemplateResult {
    return html` <li>${title ? html`<strong>${title}: </strong>` : ''} ${text ?? ''}</li> `;
  }

  private _renderDetail(): TemplateResult {
    const recipe = this._detail!;
    const timeRows = this.buildTimeRows(recipe);

    return html`
      <div class="dialog-body">
        ${this.renderRecipeImage(recipe, !!this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderFavoriteButton(recipe, this.config.show_favorite ?? false, this.configEntryId)}
          ${this._renderInteractiveRating(this._detail, !!this.config?.show_rating, this.configEntryId)}
          ${this.renderServings(recipe, !!this.config.show_servings)}
        </div>
        ${this.renderRecipeTags(recipe, this.config)} ${this._renderSourceLink(recipe)}

        ${timeRows.length ? this.renderDetailsSection('mdi:clock-outline', this.localize('dialog.times'), this.renderTimeRows(timeRows)) : nothing}
        ${recipe.ingredients?.length
          ? this.renderDetailsSection(
              'mdi:food-apple',
              this.localize('dialog.ingredients'),
              html`${this._renderServingsControl()} ${this._renderIngredients(recipe)}`
            )
          : nothing}
        ${recipe.instructions?.length
          ? this.renderDetailsSection(
              'mdi:chef-hat',
              this.localize('dialog.instructions'),
              html`<ol>
                ${recipe.instructions.map((ins) => this._renderInstruction(ins))}
              </ol>`
            )
          : nothing}
      </div>
    `;
  }

  private _renderWebview(): TemplateResult | typeof nothing {
    return this._webviewCard ? html`<div class="recipe-webview">${this._webviewCard}</div>` : nothing;
  }

  private _renderOpenInMealieButton(): TemplateResult | typeof nothing {
    const url = this._webUrl;
    if (!url || this.config.recipe_view !== 'webview') return nothing;

    return html`
      <ha-icon-button slot="headerActionItems" .label=${this.localize('dialog.open_in_mealie')} @click=${() => openRecipeInBrowser(url)}>
        <ha-icon icon="mdi:open-in-new"></ha-icon>
      </ha-icon-button>
    `;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.open || !this.recipe) return nothing;

    return html`
      <ha-dialog .open=${true} width="full" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        ${this._renderCookToggle()} ${this._renderOpenInMealieButton()}
        ${this._slug && this.supports('shopping_list')
          ? html`
              <ha-icon-button
                slot="headerActionItems"
                .label=${this.localize('dialog.add_to_shopping_list')}
                @click=${() => {
                  this._shoppingDialogOpen = true;
                }}
              >
                <ha-icon icon="mdi:cart-plus"></ha-icon>
              </ha-icon-button>
            `
          : nothing}
        ${this._loading ? this.renderLoadingIndicator() : nothing} ${this.error ? html`<ha-alert alert-type="error">${this.error}</ha-alert>` : nothing}
        ${this._renderBody()}
      </ha-dialog>

      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._detail ?? this.recipe}
        .configEntryId=${this.configEntryId}
        .defaultShoppingListId=${this.defaultShoppingListId}
        ?open=${this._shoppingDialogOpen}
        @dialog-closed=${() => {
          this._shoppingDialogOpen = false;
        }}
      ></mealie-shopping-list-dialog>
    `;
  }
}
