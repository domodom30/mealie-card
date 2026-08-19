import { html, nothing, TemplateResult } from 'lit';
import type { MealieRecipeCardConfig } from '../types';
import { renderBool, renderNumber } from '../utils/editor-renders';
import { isFeatureSupported } from '../utils/mealie-capabilities';
import { BaseMealieCardEditor } from './base-card-editor';
import { defineOnce } from '../utils/define-once.js';

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

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return this.renderEditorLoading();

    return html`
      ${this.renderTopForm()} ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()}

      <ha-expansion-panel outlined .header=${this.localize('editor.settings_recipes_card')}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderNumber(this.hass, this.config.result_limit, this.localize('editor.number_of_recipes'), 1, 100, (v) => this._setValue('result_limit', v))}
          ${renderBool(!!this.config.show_search, this.localize('editor.show_search'), (v) => this._setValue('show_search', v))}
          ${this._favoritesSupported
            ? renderBool(!!this.config.show_favorites_only, this.localize('editor.show_favorites_only'), (v) => this._setValue('show_favorites_only', v))
            : nothing}
          ${renderBool(!!this.config.show_import_button, this.localize('editor.show_import_button'), (v) => this._setValue('show_import_button', v))}
        </div>
      </ha-expansion-panel>
    `;
  }
}
