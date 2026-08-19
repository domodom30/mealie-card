import { fireEvent } from '../utils/fire-event.js';
import { html, TemplateResult } from 'lit';
import type { MealieMealplanCardConfig, ValueChangedEvent } from '../types';
import { renderBool } from '../utils/editor-renders';
import { entryTypeOptions } from '../utils/format.js';
import { BaseMealieCardEditor } from './base-card-editor';
import { defineOnce } from '../utils/define-once.js';

@defineOnce('mealie-card-editor')
export class MealieMealplanCardEditor extends BaseMealieCardEditor<MealieMealplanCardConfig> {
  private get _daysToShowOptions() {
    return Array.from({ length: 7 }, (_, index) => {
      const count = index + 1;
      return { value: String(count), label: count === 1 ? this.localize('common.today') : this.localize('editor.days_count', '{count}', String(count)) };
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
            name: 'day_offset',
            selector: {
              number: {
                min: 0,
                max: 30,
                mode: 'box',
                step: 1,
              },
            },
          },
          {
            name: 'layout_mode',
            selector: {
              select: {
                mode: 'dropdown',
                options: [
                  { value: 'vertical', label: this.localize('editor.layout_vertical') },
                  { value: 'horizontal', label: this.localize('editor.layout_horizontal') },
                  { value: 'side_by_side', label: this.localize('editor.layout_side_by_side') },
                  { value: 'both', label: this.localize('editor.layout_days_and_meals_side_by_side') },
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

      <ha-expansion-panel outlined .header=${this.localize('editor.settings_meal_actions')}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderBool(this.config.show_random_button ?? true, this.localize('editor.show_random_button'), (v) => this._setValue('show_random_button', v))}
          ${renderBool(this.config.show_note_button ?? true, this.localize('editor.show_note_button'), (v) => this._setValue('show_note_button', v))}
        </div>
      </ha-expansion-panel>
      <ha-form
        .hass=${this.hass}
        .data=${{
          ...this.config,
          days_to_show: String(this.config.days_to_show ?? 1),
          layout_mode: this._layoutMode(),
        }}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        @value-changed=${this._layoutChanged}
      ></ha-form>
    `;
  }

  private _layoutMode(): string {
    const daysSideBySide = this.config.days_layout === 'horizontal';
    const mealsSideBySide = this.config.recipes_layout === 'horizontal';
    if (daysSideBySide) return mealsSideBySide ? 'both' : 'side_by_side';
    return mealsSideBySide ? 'horizontal' : 'vertical';
  }

  private _layoutChanged = (e: ValueChangedEvent<MealieMealplanCardConfig & { layout_mode?: string }>): void => {
    const { layout_mode, ...value } = e.detail.value;
    const newConfig = { ...value } as MealieMealplanCardConfig;
    newConfig.days_to_show = Number(newConfig.days_to_show);
    newConfig.days_layout = layout_mode === 'side_by_side' || layout_mode === 'both' ? 'horizontal' : 'vertical';
    newConfig.recipes_layout = layout_mode === 'horizontal' || layout_mode === 'both' ? 'horizontal' : 'vertical';
    if (!newConfig.config_entry_id) newConfig.show_image = false;
    this.config = newConfig;
    fireEvent(this, 'config-changed', { config: this.config });
  };

  private _computeLayoutLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      days_to_show: this.localize('editor.days_to_show'),
      day_offset: this.localize('editor.day_offset'),
      layout_mode: this.localize('editor.days_layout'),
    };
    return labels[schema.name] ?? schema.name;
  };
}
