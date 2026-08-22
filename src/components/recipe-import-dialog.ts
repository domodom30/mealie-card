import { html, nothing, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { importRecipe } from '../utils/mealie-api.js';
import { RECIPES_UPDATED } from '../utils/events.js';
import type { ValueChangedEvent } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import { defineOnce } from '../utils/define-once.js';

@defineOnce('mealie-recipe-import-dialog')
export class MealieRecipeImportDialog extends MealieBaseDialog {
  @state() private _url = '';
  @state() private _includeTags = false;
  @state() private _importedName: string | null = null;

  protected onOpen(): void {
    this._url = '';
    this._includeTags = false;
    this._importedName = null;
  }

  private _handleImport = () => {
    if (!this._url.trim() || !this.hass) return;
    this._importedName = null;

    void this.submit({
      run: async () => {
        const recipe = await importRecipe(this.hass, {
          url: this._url.trim(),
          includeTags: this._includeTags,
          configEntryId: this.configEntryId ?? undefined,
        });
        this._importedName = recipe?.name ?? recipe?.slug ?? '';
      },
      success: () => `${this.localize('dialog.recipe_imported_success')}${this._importedName ? `: ${this._importedName}` : ''}`,
      errorKey: 'error.error_loading',
      signal: RECIPES_UPDATED,
      closeOnSuccess: false,
    });
  };

  protected render(): TemplateResult | typeof nothing {
    if (!this.open) return nothing;

    return html`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize('dialog.import_recipe')}</span>

        <div class="dialog-body">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ text: { type: 'url' } }}
            .value=${this._url}
            .label=${this.localize('dialog.import_url')}
            .required=${false}
            @value-changed=${(e: ValueChangedEvent<string>) => {
              this._url = e.detail.value;
            }}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${{ boolean: {} }}
            .value=${this._includeTags}
            .label=${this.localize('dialog.import_include_tags')}
            .required=${false}
            @value-changed=${(e: ValueChangedEvent<boolean>) => {
              this._includeTags = e.detail.value;
            }}
          ></ha-selector>

          ${this._importedName
            ? html`<ha-alert alert-type="success">${this.localize('dialog.recipe_imported_success')}: <strong>${this._importedName}</strong></ha-alert>`
            : nothing}
        </div>

        ${this.renderPrimaryFooter('dialog.import', this._handleImport, !this._url.trim() || this._submitting)}
      </ha-dialog>
    `;
  }
}
