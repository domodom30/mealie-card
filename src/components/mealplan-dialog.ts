import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { addToMealplan } from '../utils/mealie-api.js';
import { getLocalDateString } from '../utils/date.js';
import { renderRecipeImageTemplate } from '../utils/recipe-render-mixin';
import { MEALPLAN_UPDATED } from '../utils/events.js';
import type { EntryType, RecipeLike } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import { defineOnce } from '../utils/define-once.js';

@defineOnce('mealie-mealplan-dialog')
export class MealieMealplanDialog extends MealieBaseDialog {
  @property({ attribute: false }) recipe: RecipeLike | null = null;
  @property() effectiveUrl: string | undefined;

  @state() private _date = '';
  @state() private _entryType: EntryType = 'dinner';
  @state() private _imageMissing = false;

  protected onOpen(): void {
    this._date = getLocalDateString(new Date());
    this._entryType = 'dinner';
    this._imageMissing = false;
  }

  private _handleAdd = () => {
    const recipeId = this.recipe?.recipe_id;
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

  private _renderImage(): TemplateResult | typeof nothing {
    if (!this.recipe || this._imageMissing) return nothing;
    return renderRecipeImageTemplate(this.hass, this.recipe, {
      url: this.effectiveUrl,
      variant: 'original',
      containerClass: 'detail-image',
      imgClass: 'detail-image-img',
      onImageMissing: () => {
        this._imageMissing = true;
      },
    });
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.recipe) return nothing;

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize('dialog.add_recipe_to_mealplan')}</span>

        <div class="dialog-body">
          ${this._renderImage()} ${this.renderDateSelector(this._date, (v) => (this._date = v))}
          ${this.renderEntryTypeSelector(this._entryType, (v) => (this._entryType = v))}
        </div>

        ${this.renderPrimaryFooter('dialog.add', this._handleAdd, !this.recipe.recipe_id || !this._date || !this._entryType || this._submitting)}
      </ha-dialog>
    `;
  }
}
