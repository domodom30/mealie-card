import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { addToMealplan } from '../utils/mealie-api.js';
import { getLocalDateString } from '../utils/date.js';
import { MEALPLAN_UPDATED } from '../utils/events.js';
import type { EntryType, ValueChangedEvent } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import { defineOnce } from '../utils/define-once.js';
import './recipe-picker';

@defineOnce('mealie-mealplan-add-recipe-dialog')
export class MealieMealplanAddRecipeDialog extends MealieBaseDialog {
  @property() date: string | null = null;
  @property({ attribute: false }) imageBaseUrls: string[] = [];
  @property({ type: Boolean }) showImage = false;

  @state() private _date = '';
  @state() private _entryType: EntryType = 'dinner';
  @state() private _recipeId = '';

  protected onOpen(): void {
    this._date = this.date ?? getLocalDateString(new Date());
    this._entryType = 'dinner';
    this._recipeId = '';
  }

  private readonly _handleAdd = () => {
    const recipeId = this._recipeId;
    if (!recipeId || !this._date || !this._entryType || !this.hass) return;

    void this.submit({
      run: () =>
        addToMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          recipeId,
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
      <ha-dialog .open=${this.open} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize('dialog.add_recipe_to_mealplan')}</span>

        <div class="dialog-body">
          <mealie-recipe-picker
            .hass=${this.hass}
            .configEntryId=${this.configEntryId}
            .imageBaseUrls=${this.imageBaseUrls}
            .showImage=${this.showImage}
            .value=${this._recipeId}
            @value-changed=${(e: ValueChangedEvent<string>) => {
              this._recipeId = e.detail.value;
            }}
          ></mealie-recipe-picker>
          ${this.renderDateSelector(this._date, (v) => (this._date = v))}
          ${this.renderEntryTypeSelector(this._entryType, (v) => (this._entryType = v))}
        </div>

        ${this.renderPrimaryFooter('dialog.add', this._handleAdd, !this._recipeId || !this._date || !this._entryType || this._submitting)}
      </ha-dialog>
    `;
  }
}
