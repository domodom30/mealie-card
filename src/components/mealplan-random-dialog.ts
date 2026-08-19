import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { setRandomMealplan } from '../utils/mealie-api.js';
import { getLocalDateString } from '../utils/date.js';
import { MEALPLAN_UPDATED } from '../utils/events.js';
import type { EntryType } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import { defineOnce } from '../utils/define-once.js';

@defineOnce('mealie-mealplan-random-dialog')
export class MealieMealplanRandomDialog extends MealieBaseDialog {
  @property() targetDate = '';

  @state() private _date = '';
  @state() private _entryType: EntryType = 'dinner';

  protected onOpen(): void {
    this._date = this.targetDate || getLocalDateString(new Date());
    this._entryType = 'dinner';
  }

  private _handleAdd = () => {
    if (!this._date || !this._entryType || !this.hass) return;

    void this.submit({
      run: () =>
        setRandomMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          configEntryId: this.configEntryId ?? undefined,
        }),
      success: 'dialog.recipe_added_success',
      errorKey: 'error.error_adding_recipe',
      signal: MEALPLAN_UPDATED,
    });
  };

  protected render(): TemplateResult | typeof nothing {
    if (!this.open) return nothing;

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize('cards.random_mealplan')}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date, (v) => (this._date = v))} ${this.renderEntryTypeSelector(this._entryType, (v) => (this._entryType = v))}
        </div>

        ${this.renderPrimaryFooter('dialog.add', this._handleAdd, !this._date || !this._entryType || this._submitting)}
      </ha-dialog>
    `;
  }
}
