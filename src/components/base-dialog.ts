import { fireEvent } from '../utils/fire-event.js';
import { html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { cardStyles } from '../styles/card.styles';
import type { EntryType, HomeAssistant, ValueChangedEvent } from '../types';
import { emitMealieSignal, MealieSignalName } from '../utils/events.js';
import { entryTypeOptions } from '../utils/format.js';
import { LocalizableMixin } from '../utils/localize-mixin.js';

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

  static styles = cardStyles;

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
