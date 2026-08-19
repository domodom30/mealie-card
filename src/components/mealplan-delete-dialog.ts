import { html, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { deleteMealplanEntry } from '../utils/mealie-api.js';
import { dateFormatWithDay } from '../utils/date.js';
import { getEntryTypeLabel } from '../utils/format.js';
import { MEALPLAN_UPDATED } from '../utils/events.js';
import { MealieBaseDialog } from './base-dialog.js';
import { defineOnce } from '../utils/define-once.js';

export interface ConfirmDeleteEntry {
  id: number;
  name: string;
  entryType: string;
  date: string;
}

@defineOnce('mealie-mealplan-delete-dialog')
export class MealieMealplanDeleteDialog extends MealieBaseDialog {
  @property({ attribute: false }) entry: ConfirmDeleteEntry | null = null;

  private _handleDelete = () => {
    if (!this.entry || !this.hass) return;

    void this.submit({
      run: () => deleteMealplanEntry(this.hass, this.entry!.id, this.configEntryId ?? undefined),
      success: 'dialog.mealplan_deleted_success',
      errorKey: 'error.error_deleting_mealplan',
      signal: MEALPLAN_UPDATED,
    });
  };

  protected render(): TemplateResult | typeof nothing {
    if (!this.open || !this.entry) return nothing;

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.entry.name}</span>
        <span slot="headerSubtitle">${this.localize('dialog.confirm_delete_title')}</span>

        <div class="dialog-body-recipe">
          <span class="dialog-type">${getEntryTypeLabel(this.entry.entryType, this.hass?.locale?.language)}</span>
          <span class="dialog-label">${dateFormatWithDay(this.entry.date, this.hass)}</span>
        </div>

        <ha-dialog-footer slot="footer">
          <ha-button size="small" variant="danger" appearance="accent" slot="secondaryAction" @click=${this._close}>
            ${this.localize('dialog.cancel')}
          </ha-button>
          <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${this._handleDelete} ?disabled=${this._submitting}>
            ${this._submitting ? '...' : this.localize('dialog.confirm')}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `;
  }
}
