import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MealiePlanRecipe } from '../types';
import { defineOnce } from '../utils/define-once.js';
import { SHOPPING_LIST_UPDATED } from '../utils/events.js';
import { addRecipeToShoppingList } from '../utils/mealie-api.js';
import { ShoppingListsController } from '../utils/shopping-lists-controller.js';
import { MealieBaseDialog } from './base-dialog.js';

interface PlannedRecipe {
  recipeId: string;
  name: string;
  count: number;
}

function plannedRecipes(entries: readonly MealiePlanRecipe[]): PlannedRecipe[] {
  const byId = new Map<string, PlannedRecipe>();
  for (const { recipe } of entries) {
    const recipeId = recipe?.recipe_id;
    if (!recipeId) continue;
    const existing = byId.get(recipeId);
    if (existing) existing.count += 1;
    else byId.set(recipeId, { recipeId, name: recipe.name, count: 1 });
  }
  return [...byId.values()];
}

@defineOnce('mealie-mealplan-shopping-dialog')
export class MealieMealplanShoppingDialog extends MealieBaseDialog {
  @property({ attribute: false }) entries: readonly MealiePlanRecipe[] = [];
  @property() defaultShoppingListId: string | null = null;

  @state() private _recipes: PlannedRecipe[] = [];
  @state() private _excluded: ReadonlySet<string> = new Set();

  private readonly _shoppingLists = new ShoppingListsController(this);

  private get _selectedRecipes(): PlannedRecipe[] {
    return this._recipes.filter((recipe) => !this._excluded.has(recipe.recipeId));
  }

  protected onOpen(): void {
    this._recipes = plannedRecipes(this.entries);
    this._excluded = new Set();
    void this._shoppingLists.load(this.hass, this.configEntryId, this.defaultShoppingListId);
  }

  private _toggleRecipe(recipeId: string): void {
    const next = new Set(this._excluded);
    if (!next.delete(recipeId)) next.add(recipeId);
    this._excluded = next;
  }

  private async _addAll(shoppingListId: string, recipes: PlannedRecipe[]): Promise<void> {
    for (const recipe of recipes) {
      await addRecipeToShoppingList(this.hass, {
        configEntryId: this.configEntryId ?? undefined,
        shoppingListId,
        recipeId: recipe.recipeId,
        quantity: recipe.count,
      });
    }
  }

  private readonly _handleAdd = (): void => {
    const shoppingListId = this._shoppingLists.selectedId;
    const recipes = this._selectedRecipes;
    if (!shoppingListId || !recipes.length) return;

    void this.submit({
      run: () => this._addAll(shoppingListId, recipes),
      success: () => this.localize('dialog.plan_added_to_shopping_list', '{count}', String(recipes.length)),
      errorKey: 'error.error_updating_shopping_list',
      signal: SHOPPING_LIST_UPDATED,
    });
  };

  private _renderRecipe(recipe: PlannedRecipe): TemplateResult {
    const selected = !this._excluded.has(recipe.recipeId);
    return html`
      <label class="ingredient-item">
        <ha-checkbox .checked=${selected} @change=${() => this._toggleRecipe(recipe.recipeId)}></ha-checkbox>
        <span class="ingredient-item-text">${recipe.name}${recipe.count > 1 ? html` <strong>× ${recipe.count}</strong>` : nothing}</span>
      </label>
    `;
  }

  private _renderRecipes(): TemplateResult {
    if (!this._recipes.length) return html`<ha-alert alert-type="info">${this.localize('common.no_mealplan')}</ha-alert>`;
    return html`
      <div class="ingredient-list-header">
        <span class="ingredient-list-title">${this.localize('dialog.planned_recipes')}</span>
      </div>
      <div class="ingredient-list">${this._recipes.map((recipe) => this._renderRecipe(recipe))}</div>
    `;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.open) return nothing;

    const disabled = !this._shoppingLists.selectedId || !this._selectedRecipes.length || this._submitting;

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize('dialog.add_plan_to_shopping_list')}</span>
        <div class="dialog-body">${this.renderShoppingListSelector(this._shoppingLists)} ${this._renderRecipes()}</div>
        ${this.renderPrimaryFooter('dialog.add', this._handleAdd, disabled)}
      </ha-dialog>
    `;
  }
}
