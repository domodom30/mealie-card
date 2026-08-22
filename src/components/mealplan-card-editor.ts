import { fireEvent } from '../utils/fire-event.js';
import { html, TemplateResult } from 'lit';
import type { MealieMealplanCardConfig, ValueChangedEvent } from '../types';
import { renderBool } from '../utils/editor-renders';
import { isFeatureSupported } from '../utils/mealie-capabilities';
import { entryTypeOptions } from '../utils/format.js';
import { BaseMealieCardEditor } from './base-card-editor';
import { defineOnce } from '../utils/define-once.js';

function normalizeDayOffset(value: number | string | undefined): number | string {
  const raw = String(value ?? '').trim();
  return /^\d{1,3}$/.test(raw) ? Number(raw) : raw;
}

function formatDaysRange(dayOffset: number | string | undefined, daysToShow: number | undefined): string {
  if (typeof dayOffset === 'string') return dayOffset;
  const start = Math.max(0, Math.floor(dayOffset ?? 0));
  const count = Math.max(1, Math.floor(daysToShow ?? 1));
  return count > 1 ? `${start}-${start + count - 1}` : String(start);
}

@defineOnce('mealie-card-editor')
export class MealieMealplanCardEditor extends BaseMealieCardEditor<MealieMealplanCardConfig> {
  private get _columnsOptions() {
    return [2, 3, 4].map((count) => ({ value: String(count), label: String(count) }));
  }

  private _columnsField(name: string) {
    return {
      name,
      selector: {
        select: {
          mode: 'dropdown',
          options: this._columnsOptions,
        },
      },
    };
  }

  private get _schemaLayout() {
    const daysRangeField = {
      name: 'day_offset',
      selector: { text: {} },
    };

    const layoutModeField = {
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
    };

    return [
      {
        type: 'expandable',
        title: this.localize('editor.settings_title_layout'),
        icon: 'mdi:view-grid-outline',
        schema: [
          daysRangeField,
          layoutModeField,
          ...(this.config.days_layout === 'horizontal' ? [this._columnsField('days_columns')] : []),
          ...(this.config.recipes_layout === 'horizontal' ? [this._columnsField('recipes_columns')] : []),
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

      ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()} ${this.renderRecipeViewOptions()}

      <ha-expansion-panel outlined .header=${this.localize('editor.settings_meal_actions')}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderBool(this.config.show_random_button ?? true, this.localize('editor.show_random_button'), (v) => this._setValue('show_random_button', v))}
          ${renderBool(this.config.show_note_button ?? true, this.localize('editor.show_note_button'), (v) => this._setValue('show_note_button', v))}
        </div>
      </ha-expansion-panel>
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_recipe_actions')}>
        <ha-icon slot="leading-icon" icon="mdi:gesture-tap-button"></ha-icon>
        <div class="settings-fields">
          ${renderBool(this.config.show_view_recipe_button ?? true, this.localize('cards.view_recipe'), (v) => this._setValue('show_view_recipe_button', v))}
          ${renderBool(
            this.config.show_shopping_list_button ?? true,
            this.localize('dialog.add_to_shopping_list'),
            (v) => this._setValue('show_shopping_list_button', v),
            !isFeatureSupported(this.hass, 'shopping_list')
          )}
          ${renderBool(
            this.config.show_edit_mealplan_button ?? true,
            this.localize('cards.edit_mealplan'),
            (v) => this._setValue('show_edit_mealplan_button', v),
            !isFeatureSupported(this.hass, 'edit_mealplan')
          )}
          ${renderBool(
            this.config.show_delete_mealplan_button ?? true,
            this.localize('cards.delete_mealplan'),
            (v) => this._setValue('show_delete_mealplan_button', v),
            !isFeatureSupported(this.hass, 'delete_mealplan')
          )}
        </div>
      </ha-expansion-panel>
      <ha-form
        .hass=${this.hass}
        .data=${{
          ...this.config,
          day_offset: formatDaysRange(this.config.day_offset, this.config.days_to_show),
          days_columns: String(this.config.days_columns ?? 2),
          recipes_columns: String(this.config.recipes_columns ?? 2),
          layout_mode: this._layoutMode(),
        }}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        .computeHelper=${this._computeLayoutHelper}
        @value-changed=${this._layoutChanged}
      ></ha-form>
      ${this.renderVersion()}
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
    newConfig.day_offset = normalizeDayOffset(newConfig.day_offset);
    delete newConfig.days_to_show;
    newConfig.days_columns = Number(newConfig.days_columns ?? 2);
    newConfig.recipes_columns = Number(newConfig.recipes_columns ?? 2);
    newConfig.days_layout = layout_mode === 'side_by_side' || layout_mode === 'both' ? 'horizontal' : 'vertical';
    newConfig.recipes_layout = layout_mode === 'horizontal' || layout_mode === 'both' ? 'horizontal' : 'vertical';
    if (!newConfig.config_entry_id) newConfig.show_image = false;
    this.config = newConfig;
    fireEvent(this, 'config-changed', { config: this.config });
  };

  private _computeLayoutLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      day_offset: this.localize('editor.days_range'),
      layout_mode: this.localize('editor.layout_mode'),
      days_columns: this.localize('editor.days_columns'),
      recipes_columns: this.localize('editor.recipes_columns'),
    };
    return labels[schema.name] ?? schema.name;
  };

  private _computeLayoutHelper = (schema: { name: string }): string | undefined => {
    return schema.name === 'day_offset' ? this.localize('editor.days_range_helper') : undefined;
  };
}
