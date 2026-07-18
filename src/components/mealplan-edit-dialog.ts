import { html, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { updateMealplanEntry } from '../utils/mealie-api.js';
import { MEALPLAN_UPDATED } from '../utils/events.js';
import type { EntryType, MealiePlanRecipe } from '../types';
import { MealieBaseDialog } from './base-dialog.js';

@customElement('mealie-mealplan-edit-dialog')
export class MealieMealplanEditDialog extends MealieBaseDialog {
  @property({ attribute: false }) planRecipe: MealiePlanRecipe | null = null;

  @state() private _date = '';
  @state() private _entryType: EntryType = 'dinner';
  @state() private _title = '';
  @state() private _text = '';

  private get _isNote(): boolean {
    return !this.planRecipe?.recipe;
  }

  protected onOpen(): void {
    if (!this.planRecipe) return;
    this._date = this.planRecipe.mealplan_date;
    this._entryType = this.planRecipe.entry_type;
    this._title = this.planRecipe.title ?? '';
    this._text = this.planRecipe.description ?? '';
  }

  private _handleSave = () => {
    if (!this.planRecipe || !this._date || !this._entryType || !this.hass) return;
    if (this._isNote && !this._title.trim()) return;

    void this.submit({
      run: () =>
        updateMealplanEntry(this.hass, {
          configEntryId: this.configEntryId ?? undefined,
          mealplanId: this.planRecipe!.mealplan_id,
          date: this._date,
          entryType: this._entryType,
          ...(this._isNote
            ? { noteTitle: this._title.trim(), noteText: this._text.trim() || undefined }
            : { recipeId: this.planRecipe!.recipe?.recipe_id }),
        }),
      success: 'dialog.mealplan_updated_success',
      errorKey: 'error.error_updating_mealplan',
      signal: MEALPLAN_UPDATED,
    });
  };

  protected render(): TemplateResult | typeof nothing {
    if (!this.open || !this.planRecipe) return nothing;

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">${this.localize('dialog.edit_mealplan')}</div>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date, (v) => (this._date = v))} ${this.renderEntryTypeSelector(this._entryType, (v) => (this._entryType = v))}
          ${this._isNote
            ? html`
                ${this.renderTextSelector(this._title, 'dialog.note_title', (v) => (this._title = v))}
                ${this.renderTextSelector(this._text, 'dialog.note_text', (v) => (this._text = v), true)}
              `
            : html`<div class="recipe-name">${this.planRecipe.recipe?.name ?? ''}</div>`}
        </div>

        ${this.renderPrimaryFooter(
          'dialog.save',
          this._handleSave,
          !this._date || !this._entryType || (this._isNote && !this._title.trim()) || this._submitting
        )}
      </ha-dialog>
    `;
  }
}
