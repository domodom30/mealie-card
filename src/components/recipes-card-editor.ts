import { html, nothing, TemplateResult } from 'lit';
import { RECIPE_SORT_ORDERS, type MealieRecipeCardConfig, type RecipeCardAction, type RecipeSortOrder } from '../types';
import { DEFAULT_DOUBLE_TAP_ACTION, DEFAULT_RECIPE_HOLD_ACTION, DEFAULT_RECIPE_TAP_ACTION, MAX_PAGE_SIZE } from '../config.card';
import { renderBool, renderNumber, renderSelect } from '../utils/editor-renders';
import { isFeatureSupported } from '../utils/mealie-capabilities';
import { BaseMealieCardEditor, type PressActionDefaults } from './base-card-editor';
import { defineOnce } from '../utils/define-once.js';

const RECIPE_CARD_ACTIONS: readonly RecipeCardAction[] = ['view_recipe', 'add_to_mealplan', 'add_to_shopping_list'];

const RECIPE_PRESS_DEFAULTS: PressActionDefaults = {
  recipe_tap_action: DEFAULT_RECIPE_TAP_ACTION,
  recipe_double_tap_action: DEFAULT_DOUBLE_TAP_ACTION,
  recipe_hold_action: DEFAULT_RECIPE_HOLD_ACTION,
};

@defineOnce('mealie-recipe-card-editor')
export class MealieRecipeCardEditor extends BaseMealieCardEditor<MealieRecipeCardConfig> {
  private get _favoritesSupported(): boolean {
    return isFeatureSupported(this.hass, 'favorites');
  }

  protected override renderInfosDisplayFields(): TemplateResult {
    return html`
      ${super.renderInfosDisplayFields()}
      ${this._favoritesSupported
        ? renderBool(!!this.config.show_favorite, this.localize('editor.show_favorite'), (v) => this._setValue('show_favorite', v))
        : nothing}
    `;
  }

  private _sortOptions(): { value: RecipeSortOrder; label: string }[] {
    return RECIPE_SORT_ORDERS.map((value) => ({ value, label: this.localize(`editor.sort_${value}`) }));
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return this.renderEditorLoading();

    return html`
      ${this.renderTopForm()} ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()} ${this.renderTimerOptions()}
      ${this.renderRecipeActionsPanel(RECIPE_CARD_ACTIONS, RECIPE_PRESS_DEFAULTS)} ${this.renderRecipeViewOptions()} ${this.renderLanguageOptions()}

      <ha-expansion-panel outlined .header=${this.localize('editor.settings_recipes_card')}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderNumber(this.hass, this.config.page_size ?? 0, this.localize('editor.page_size'), 0, MAX_PAGE_SIZE, (v) => this._setValue('page_size', v))}
          ${this.config.page_size
            ? nothing
            : renderNumber(this.hass, this.config.result_limit, this.localize('editor.number_of_recipes'), 1, 100, (v) => this._setValue('result_limit', v))}
          ${renderBool(!!this.config.show_search, this.localize('editor.show_search'), (v) => this._setValue('show_search', v))}
          ${this._favoritesSupported
            ? renderBool(!!this.config.show_favorites_only, this.localize('editor.show_favorites_only'), (v) => this._setValue('show_favorites_only', v))
            : nothing}
          ${renderBool(!!this.config.show_import_button, this.localize('editor.show_import_button'), (v) => this._setValue('show_import_button', v))}
          ${renderBool(!!this.config.show_category_filters, this.localize('editor.show_category_filters'), (v) => this._setValue('show_category_filters', v))}
          ${renderBool(!!this.config.show_tag_filters, this.localize('editor.show_tag_filters'), (v) => this._setValue('show_tag_filters', v))}
          ${renderBool(!!this.config.show_surprise_button, this.localize('editor.show_surprise_button'), (v) => this._setValue('show_surprise_button', v))}
          ${renderSelect(this.hass, this.config.sort_by ?? 'none', this.localize('editor.sort_by'), this._sortOptions(), (v) =>
            this._setValue('sort_by', v || 'none')
          )}
        </div>
      </ha-expansion-panel>
      ${this.renderVersion()}
    `;
  }
}
