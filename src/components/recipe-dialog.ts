import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { RecipeRenderMixin } from '../utils/recipe-render-mixin';
import { getRecipe } from '../utils/mealie-api.js';
import { formatIngredientText } from '../utils/format.js';
import { FAVORITE_TOGGLED, RECIPE_RATED, subscribeMealieEvent, Unsubscribe } from '../utils/events.js';
import type { MealieRecipe, MealieRecipeCardConfig, RecipeIngredient, RecipeInstruction, RecipeLike } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import './shopping-list-dialog';
import { defineOnce } from '../utils/define-once.js';
import { openRecipeInBrowser } from '../utils/mealie-url.js';
import type { LovelaceCardElement } from '../types/window';

@defineOnce('mealie-recipe-dialog')
export class MealieRecipeDialog extends RecipeRenderMixin(MealieBaseDialog) {
  @property({ attribute: false }) config: Partial<MealieRecipeCardConfig> = {};
  @property({ attribute: false }) recipe: RecipeLike | null = null;
  @property({ attribute: false }) isFavorite: boolean | null = null;
  @property() defaultShoppingListId: string | null = null;

  @state() private _detail: MealieRecipe | null = null;
  @state() private _servings = 0;
  @state() private _shoppingDialogOpen = false;
  @state() private _webviewCard: LovelaceCardElement | null = null;
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
  }

  protected updated(changedProps: Map<string, unknown>): void {
    super.updated(changedProps);

    if (changedProps.has('hass') && this._webviewCard) this._webviewCard.hass = this.hass;

    if (!this.open || !this.recipe) return;

    if (changedProps.has('recipe')) {
      this._detail = null;
      this._webviewCard = null;
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

  private _renderIngredient(ing: RecipeIngredient): TemplateResult {
    const scale = this._baseServings > 0 ? this._servings / this._baseServings : 1;
    return html`<li>${formatIngredientText(ing, scale, false, this.hass?.locale?.language ?? 'en')}</li>`;
  }

  private _renderInstruction(ins: RecipeInstruction): TemplateResult {
    return html`<li>${ins.title ? html`<strong>${ins.title}: </strong>` : ''}${ins.text ?? ''}</li>`;
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
          ${this.renderServings(recipe.recipe_servings, !!this.config.show_servings)}
        </div>

        ${timeRows.length ? this.renderDetailsSection('mdi:clock-outline', this.localize('dialog.times'), this.renderTimeRows(timeRows)) : nothing}
        ${recipe.ingredients?.length
          ? this.renderDetailsSection(
              'mdi:food-apple',
              this.localize('dialog.ingredients'),
              html`${this._renderServingsControl()}
                <ul>
                  ${recipe.ingredients.map((ing) => this._renderIngredient(ing))}
                </ul>`
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
      <ha-dialog .open=${true} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        ${this._renderOpenInMealieButton()}
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
        ${this._loading ? html`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize('editor.loading')}</div>` : nothing}
        ${this.error ? html`<ha-alert alert-type="error">${this.error}</ha-alert>` : nothing}
        ${this._isWebview ? this._renderWebview() : this._detail ? this._renderDetail() : nothing}
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
