import { fireEvent } from '../utils/fire-event.js';
import { html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { cardStyles } from '../styles/card.styles';
import type { EntryType, HomeAssistant, ValueChangedEvent } from '../types';
import { emitMealieSignal, MealieSignalName } from '../utils/events.js';
import { entryTypeOptions } from '../utils/format.js';
import { LocalizableMixin } from '../utils/localize-mixin.js';
import type { ShoppingListsController } from '../utils/shopping-lists-controller.js';

interface SubmitOptions {
  run: () => Promise<void>;
  success: string | (() => string);
  errorKey: string;
  signal?: MealieSignalName;
  closeOnSuccess?: boolean;
}

export class MealieBaseDialog extends LocalizableMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() configEntryId: string | null = null;
  @property({ type: Boolean }) open = false;

  @state() protected _submitting = false;

  static readonly styles = cardStyles;

  protected onOpen(): void {}

  protected updated(changedProps: Map<string, unknown>): void {
    super.updated(changedProps);
    if (changedProps.has('open') && this.open) {
      this._submitting = false;
      this.onOpen();
    }
  }

  protected _close = (): void => {
    this.open = false;
    this.dispatchEvent(new CustomEvent('dialog-closed', { bubbles: false, composed: false }));
  };

  protected async submit(options: SubmitOptions): Promise<void> {
    if (this._submitting) return;
    this._submitting = true;
    try {
      await options.run();
      fireEvent(this, 'hass-notification', {
        message: typeof options.success === 'function' ? options.success() : this.localize(options.success),
      });
      if (options.signal) emitMealieSignal(options.signal);
      if (options.closeOnSuccess !== false) this._close();
    } catch (error) {
      fireEvent(this, 'hass-notification', {
        message: this.localizeError(error, options.errorKey),
      });
    } finally {
      this._submitting = false;
    }
  }

  protected renderLoadingIndicator(): TemplateResult {
    return html`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize('editor.loading')}</div>`;
  }

  protected renderDateSelector(value: string, onChange: (value: string) => void): TemplateResult {
    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ date: {} }}
        .value=${value}
        .label=${this.localize('dialog.select_date')}
        .required=${false}
        @value-changed=${(e: ValueChangedEvent<string>) => onChange(e.detail.value)}
      ></ha-selector>
    `;
  }

  protected renderEntryTypeSelector(value: EntryType, onChange: (value: EntryType) => void): TemplateResult {
    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: 'dropdown', options: entryTypeOptions(this.localize) } }}
        .value=${value}
        .label=${this.localize('dialog.select_meal_type')}
        .required=${false}
        @value-changed=${(e: ValueChangedEvent<EntryType>) => onChange(e.detail.value)}
      ></ha-selector>
    `;
  }

  protected renderTextSelector(value: string, labelKey: string, onChange: (value: string) => void, multiline = false): TemplateResult {
    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ text: multiline ? { multiline: true } : {} }}
        .value=${value}
        .label=${this.localize(labelKey)}
        .required=${false}
        @value-changed=${(e: ValueChangedEvent<string>) => onChange(e.detail.value)}
      ></ha-selector>
    `;
  }

  protected renderShoppingListSelector(controller: ShoppingListsController): TemplateResult {
    if (controller.loading) return this.renderLoadingIndicator();
    if (controller.error) return html`<ha-alert alert-type="error">${this.localizeError(controller.error)}</ha-alert>`;
    if (!controller.lists.length) return html`<ha-alert alert-type="info">${this.localize('dialog.no_shopping_lists')}</ha-alert>`;

    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: 'dropdown', options: controller.lists.map((list) => ({ value: list.id, label: list.name })) } }}
        .value=${controller.selectedId}
        .label=${this.localize('dialog.select_shopping_list')}
        .required=${false}
        @value-changed=${(e: ValueChangedEvent<string>) => controller.select(e.detail.value)}
      ></ha-selector>
    `;
  }

  protected renderPrimaryFooter(labelKey: string, onClick: () => void, disabled: boolean): TemplateResult {
    return html`
      <ha-dialog-footer slot="footer">
        <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${onClick} ?disabled=${disabled}>
          ${this._submitting ? '...' : this.localize(labelKey)}
        </ha-button>
      </ha-dialog-footer>
    `;
  }
}
