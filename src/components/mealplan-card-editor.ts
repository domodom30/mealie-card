import { fireEvent } from '../utils/fire-event.js';
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { MealieMealplanCardConfig } from '../types';
import { renderBool } from '../utils/editor-renders';
import { entryTypeOptions } from '../utils/format.js';
import { BaseMealieCardEditor } from './base-card-editor';

@customElement('mealie-card-editor')
export class MealieMealplanCardEditor extends BaseMealieCardEditor<MealieMealplanCardConfig> {
  private get _daysToShowOptions() {
    return Array.from({ length: 7 }, (_, index) => {
      const count = index + 1;
      return { value: count, label: count === 1 ? this.localize('common.today') : this.localize('editor.days_count', '{count}', String(count)) };
    });
  }

  private get _schemaLayout() {
    return [
      {
        type: 'expandable',
        title: this.localize('editor.settings_title_layout'),
        icon: 'mdi:view-grid-outline',
        schema: [
          {
            name: 'days_to_show',
            selector: {
              select: {
                mode: 'dropdown',
                options: this._daysToShowOptions,
              },
            },
          },
          {
            name: 'days_layout',
            selector: {
              select: {
                options: [
                  { value: 'vertical', label: this.localize('editor.layout_days_vertical') },
                  { value: 'horizontal', label: this.localize('editor.layout_days_horizontal') },
                ],
              },
            },
          },
          {
            name: 'recipes_layout',
            selector: {
              select: {
                options: [
                  { value: 'horizontal', label: this.localize('editor.layout_recipes_horizontal') },
                  { value: 'vertical', label: this.localize('editor.layout_recipes_vertical') },
                ],
              },
            },
          },
        ],
      },
    ];
  }

  private _toggleEntryType(type: string): void {
    const current = new Set(this.config.entry_types ?? []);
    if (current.has(type)) {
      current.delete(type);
    } else {
      current.add(type);
    }
    this.config = { ...this.config, entry_types: [...current] };
    fireEvent(this, 'config-changed', { config: this.config });
  }

  private _renderEntryTypes(): TemplateResult {
    const selected = new Set(this.config.entry_types ?? []);
    return html`
      <div class="entry-type-chips">
        ${entryTypeOptions(this.localize).map(
          ({ value, label }) => html`
            <button class="entry-chip ${selected.has(value) ? 'active' : ''}" @click=${() => this._toggleEntryType(value)}>${label}</button>
          `
        )}
      </div>
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return this.renderEditorLoading();

    return html`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize('editor.entry_types')}>
        <ha-icon slot="leading-icon" icon="mdi:silverware-fork-knife"></ha-icon>
        ${this._renderEntryTypes()}
      </ha-expansion-panel>

      ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()}

      <ha-expansion-panel outlined .header=${this.localize('editor.settings_recipes_card')}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderBool(this.config.show_random_button ?? true, this.localize('editor.show_random_button'), (v) => this._setValue('show_random_button', v))}
        </div>
      </ha-expansion-panel>
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLayoutLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      days_to_show: this.localize('editor.days_to_show'),
      days_layout: this.localize('editor.days_layout'),
      recipes_layout: this.localize('editor.recipes_layout'),
    };
    return labels[schema.name] ?? schema.name;
  };
}
