import { html, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { addRecipeToShoppingList, addRecipeToShoppingListPartial, getRecipe, getMealieShoppingLists, MealieShoppingList } from '../utils/mealie-api.js';
import { formatIngredientText } from '../utils/format.js';
import type { RecipeIngredient, RecipeLike } from '../types.js';
import { MealieBaseDialog } from './base-dialog.js';

interface IngredientItem {
  text: string;
  selected: boolean;
  isTitle: boolean;
}

@customElement('mealie-shopping-list-dialog')
export class MealieShoppingListDialog extends MealieBaseDialog {
  @property({ attribute: false }) recipe: RecipeLike | null = null;
  @property() defaultShoppingListId: string | null = null;

  @state() private _step: 1 | 2 = 1;
  @state() private _shoppingListId = '';
  @state() private _shoppingEntityId = '';
  @state() private _quantity = 1;
  @state() private _lists: MealieShoppingList[] = [];
  @state() private _loadingIngredients = false;
  @state() private _ingredients: IngredientItem[] = [];
  private _rawIngredients: RecipeIngredient[] = [];

  protected onOpen(): void {
    this._step = 1;
    this._quantity = 1;
    this._ingredients = [];
    this._rawIngredients = [];
    void this._loadLists();
  }

  private async _loadLists(): Promise<void> {
    this._lists = await getMealieShoppingLists(this.hass, this.configEntryId ?? undefined);
    if (!this._lists.length) return;

    const preferred = this.defaultShoppingListId ? this._lists.find((l) => l.id === this.defaultShoppingListId) : undefined;
    const selected = preferred ?? this._lists[0];
    this._shoppingListId = selected.id;
    this._shoppingEntityId = selected.entity_id;
  }

  private async _resolveIngredients(): Promise<RecipeIngredient[]> {
    if (this.recipe?.ingredients?.length) return this.recipe.ingredients;

    const slug = this.recipe?.slug ?? this.recipe?.recipe_id;
    if (!slug) return [];

    const fullRecipe = await getRecipe(this.hass, slug, this.configEntryId ?? undefined);
    return fullRecipe?.ingredients ?? [];
  }

  private async _handleNext(): Promise<void> {
    this._step = 2;
    this._loadingIngredients = true;
    try {
      this._rawIngredients = await this._resolveIngredients();
      this._ingredients = this._rawIngredients.map((ing) => {
        const isTitle = !!(ing.title && !ing.food);
        return {
          text: isTitle ? ing.title! : formatIngredientText(ing, this._quantity, true, this.hass?.locale?.language ?? 'en'),
          selected: !isTitle,
          isTitle,
        };
      });
    } catch {
      this._ingredients = [];
      this._rawIngredients = [];
    } finally {
      this._loadingIngredients = false;
    }
  }

  private _toggleIngredient(index: number): void {
    this._ingredients = this._ingredients.map((ing, i) => (i === index ? { ...ing, selected: !ing.selected } : ing));
  }

  private _toggleAll(): void {
    const allSelected = this._selectables.every((i) => i.selected);
    this._ingredients = this._ingredients.map((ing) => (ing.isTitle ? ing : { ...ing, selected: !allSelected }));
  }

  private get _selectables(): IngredientItem[] {
    return this._ingredients.filter((i) => !i.isTitle);
  }

  private _handleAdd = () => {
    if (!this.recipe || !this._shoppingListId || !this.hass) return;
    const recipeId = this.recipe.recipe_id ?? this.recipe.slug;
    if (!recipeId) return;

    const selectables = this._selectables;
    const allSelected = selectables.length === 0 || selectables.every((i) => i.selected);

    void this.submit({
      run: () =>
        allSelected
          ? addRecipeToShoppingList(this.hass, {
              configEntryId: this.configEntryId ?? undefined,
              shoppingListId: this._shoppingListId,
              recipeId,
              quantity: this._quantity,
            })
          : addRecipeToShoppingListPartial(this.hass, {
              configEntryId: this.configEntryId ?? undefined,
              shoppingListId: this._shoppingListId,
              shoppingEntityId: this._shoppingEntityId,
              recipeId,
              quantity: this._quantity,
              deselectedIngredients: this._deselectedIngredients(),
            }),
      success: 'dialog.recipe_added_to_shopping_list',
      errorKey: 'error.error_loading',
    });
  };

  private _deselectedIngredients(): RecipeIngredient[] {
    return this._rawIngredients.filter((_, i) => {
      const item = this._ingredients[i];
      return !!item && !item.isTitle && !item.selected;
    });
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.open || !this.recipe) return nothing;

    const canSubmit =
      this._step === 1
        ? !!this._shoppingListId && this._lists.length > 0
        : !this._submitting && !this._loadingIngredients && (this._ingredients.length === 0 || this._selectables.some((i) => i.selected));

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">
          <div class="dialog-header">${this.localize('dialog.add_to_shopping_list')}</div>
          <div class="dialog-header-title">${this.recipe.name}</div>
        </div>

        <div class="dialog-body">${this._step === 1 ? this._renderStep1() : this._renderStep2()}</div>

        <ha-dialog-footer slot="footer">
          ${this._step === 2
            ? html`
                <ha-button
                  slot="secondaryAction"
                  size="small"
                  variant="brand"
                  appearance="accent"
                  @click=${() => {
                    this._step = 1;
                  }}
                >
                  ${this.localize('dialog.back')}
                </ha-button>
              `
            : nothing}
          <ha-button
            slot="primaryAction"
            size="small"
            variant="brand"
            appearance="accent"
            @click=${this._step === 1 ? () => void this._handleNext() : this._handleAdd}
            ?disabled=${!canSubmit}
          >
            ${this._step === 1 ? this.localize('dialog.next') : this._submitting ? '...' : this.localize('dialog.add')}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `;
  }

  private _renderStep1(): TemplateResult {
    if (!this._lists.length) return html`<ha-alert alert-type="info">${this.localize('dialog.no_shopping_lists')}</ha-alert>`;

    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: 'dropdown', options: this._lists.map((l) => ({ value: l.id, label: l.name })) } }}
        .value=${this._shoppingListId}
        .label=${this.localize('dialog.select_shopping_list')}
        @value-changed=${(e: CustomEvent) => {
          this._shoppingListId = e.detail.value;
          this._shoppingEntityId = this._lists.find((l) => l.id === e.detail.value)?.entity_id ?? '';
        }}
      ></ha-selector>

      <ha-selector
        .hass=${this.hass}
        .selector=${{ number: { min: 0.25, max: 10, step: 0.25, mode: 'slider' } }}
        .value=${this._quantity}
        .label=${this.localize('dialog.shopping_list_quantity')}
        @value-changed=${(e: CustomEvent) => {
          this._quantity = e.detail.value;
        }}
      ></ha-selector>
    `;
  }

  private _renderStep2(): TemplateResult {
    if (this._loadingIngredients) {
      return html`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize('editor.loading')}</div>`;
    }

    if (!this._ingredients.length) {
      return html`<ha-alert alert-type="info">${this.localize('dialog.no_ingredients')}</ha-alert>`;
    }

    const allSelected = this._selectables.every((i) => i.selected);

    return html`
      <div class="ingredient-list-header">
        <span class="ingredient-list-title">${this.localize('dialog.ingredients')}</span>
        <ha-checkbox .checked=${allSelected} @change=${this._toggleAll}>${this.localize('dialog.select_all')}</ha-checkbox>
      </div>
      <div class="ingredient-list">
        ${this._ingredients.map((ing, i) =>
          ing.isTitle
            ? html`<div class="ingredient-section-title">${ing.text}</div>`
            : html`
                <label class="ingredient-item">
                  <ha-checkbox .checked=${ing.selected} @change=${() => this._toggleIngredient(i)}></ha-checkbox>
                  <span class="ingredient-item-text">${ing.text}</span>
                </label>
              `
        )}
      </div>
    `;
  }
}
