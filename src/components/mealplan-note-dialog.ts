import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { addToMealplan } from '../utils/mealie-api.js';
import { getLocalDateString } from '../utils/date.js';
import { MEALPLAN_UPDATED } from '../utils/events.js';
import type { EntryType } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import { defineOnce } from '../utils/define-once.js';

@defineOnce('mealie-mealplan-note-dialog')
export class MealieMealplanNoteDialog extends MealieBaseDialog {
  @property() date: string | null = null;
  @state() private _date = '';
  @state() private _entryType: EntryType = 'dinner';
  @state() private _title = '';
  @state() private _text = '';

  protected onOpen(): void {
    this._date = this.date ?? getLocalDateString(new Date());
    this._entryType = 'dinner';
    this._title = '';
    this._text = '';
  }

  private _handleAdd = () => {
    if (!this._date || !this._entryType || !this._title.trim() || !this.hass) return;

    void this.submit({
      run: () =>
        addToMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          noteTitle: this._title.trim(),
          noteText: this._text.trim() || undefined,
          configEntryId: this.configEntryId ?? undefined,
        }),
      success: 'dialog.note_added_success',
      errorKey: 'error.error_adding_recipe',
      signal: MEALPLAN_UPDATED,
    });
  };

  protected render(): TemplateResult | typeof nothing {
    if (!this.open) return nothing;

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize('dialog.add_note_to_mealplan')}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date, (v) => (this._date = v))} ${this.renderEntryTypeSelector(this._entryType, (v) => (this._entryType = v))}
          ${this.renderTextSelector(this._title, 'dialog.note_title', (v) => (this._title = v))}
          ${this.renderTextSelector(this._text, 'dialog.note_text', (v) => (this._text = v), true)}
        </div>

        ${this.renderPrimaryFooter('dialog.add', this._handleAdd, !this._date || !this._entryType || !this._title.trim() || this._submitting)}
      </ha-dialog>
    `;
  }
}
