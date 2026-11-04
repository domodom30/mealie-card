import { html, TemplateResult } from 'lit';
import type { MealieShoppingListCardConfig } from '../types';
import { defineOnce } from '../utils/define-once.js';
import { renderBool, renderText } from '../utils/editor-renders';
import { MealieCardEditorCore, type EditorFormField } from './card-editor-core';

@defineOnce('mealie-shopping-list-card-editor')
export class MealieShoppingListCardEditor extends MealieCardEditorCore<MealieShoppingListCardConfig> {
  protected override integrationFields(): EditorFormField[] {
    return [...super.integrationFields(), { name: 'entity', selector: { entity: { filter: { domain: 'todo', integration: 'mealie' } } } }];
  }

  protected override fieldLabels(): Record<string, string> {
    return { ...super.fieldLabels(), entity: this.localize('editor.shopping_list_entity') };
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return this.renderEditorLoading();

    return html`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_shopping_list_card')}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderText(this.hass, this.config.title, this.localize('editor.title'), (v) => this._setValue('title', v || undefined))}
          ${renderBool(this.config.show_add_item ?? true, this.localize('editor.show_add_item'), (v) => this._setValue('show_add_item', v))}
          ${renderBool(this.config.show_completed ?? true, this.localize('editor.show_completed'), (v) => this._setValue('show_completed', v))}
        </div>
      </ha-expansion-panel>
      ${this.renderLanguageOptions()} ${this.renderVersion()}
    `;
  }
}
