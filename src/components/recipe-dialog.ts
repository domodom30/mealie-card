import { html, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { RecipeRenderMixin } from '../utils/recipe-render-mixin';
import { getRecipe } from '../utils/mealie-api.js';
import { formatIngredientText } from '../utils/format.js';
import { FAVORITE_TOGGLED, RECIPE_RATED, subscribeMealieEvent, Unsubscribe } from '../utils/events.js';
import type { MealieRecipe, MealieRecipeCardConfig, RecipeIngredient, RecipeInstruction, RecipeLike } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import './shopping-list-dialog';

@customElement('mealie-recipe-dialog')
export class MealieRecipeDialog extends RecipeRenderMixin(MealieBaseDialog) {
  @property({ attribute: false }) config: Partial<MealieRecipeCardConfig> = {};
  @property({ attribute: false }) recipe: RecipeLike | null = null;
  @property({ attribute: false }) isFavorite: boolean | null = null;
  @property() defaultShoppingListId: string | null = null;

  @state() private _detail: MealieRecipe | null = null;
  @state() private _servings = 0;
  @state() private _shoppingDialogOpen = false;
  private _baseServings = 0;
  private _unsubscribers: Unsubscribe[] = [];

  private get _slug(): string | undefined {
    return this._detail?.slug ?? this.recipe?.slug ?? this.recipe?.recipe_id;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._unsubscribers = [
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        if (this._detail && (this._detail.slug === slug || this._detail.recipe_id === slug)) {
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
    this.ensureShoppingListSupport();
  }

  protected updated(changedProps: Map<string, unknown>): void {
    super.updated(changedProps);
    if (!this.open || !this.recipe) return;

    if (changedProps.has('recipe')) this._detail = null;

    if ((changedProps.has('open') || changedProps.has('recipe')) && !this._detail && !this._loading) {
      void this.loadData();
    }
  }

  protected async loadData(): Promise<void> {
    if (!this.open || !this.recipe || !this.hass || this._loading) return;

    const recipeId = this.recipe.slug ?? this.recipe.recipe_id;
    if (!recipeId) return;

    this._loading = true;
    this.error = null;
    try {
      this._detail = await getRecipe(this.hass, recipeId, this.configEntryId ?? undefined);
      this._baseServings = this._detail?.recipe_servings ?? 0;
      this._servings = this._baseServings;

      const slug = this._slug;
      if (slug) {
        this._favorites = new Map(this._favorites).set(slug, this.isFavorite ?? this._favorites.get(slug) ?? false);
      }
      this._initialized = true;
    } catch (err) {
      this.handleError(err);
    } finally {
      this._loading = false;
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

  protected render(): TemplateResult | typeof nothing {
    if (!this.open || !this.recipe) return nothing;

    return html`
      <ha-dialog .open=${true} width="medium" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">
          <div class="header-title-row">
            <div class="dialog-header-title">${this.recipe.name}</div>
            <div class="dialog-header-actions">
              ${this._slug && this._shoppingListSupported
                ? html`
                    <ha-icon-button
                      .label=${this.localize('dialog.add_to_shopping_list')}
                      @click=${() => {
                        this._shoppingDialogOpen = true;
                      }}
                    >
                      <ha-icon icon="mdi:cart-plus"></ha-icon>
                    </ha-icon-button>
                  `
                : nothing}
            </div>
          </div>
        </div>
        ${this._loading ? html`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize('editor.loading')}</div>` : nothing}
        ${this.error ? html`<ha-alert alert-type="error">${this.error}</ha-alert>` : nothing} ${this._detail ? this._renderDetail() : nothing}
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
