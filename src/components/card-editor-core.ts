import { html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { editorStyles } from '../styles/editor.styles';
import type { BaseMealieCardConfig, HomeAssistant, ValueChangedEvent } from '../types';
import { fireEvent } from '../utils/fire-event.js';
import { canonicalLanguage } from '../utils/language.js';
import { LocalizableMixin } from '../utils/localize-mixin';
import { SUPPORTED_LANGUAGES } from '../utils/translate.js';
import { version } from 'virtual:version';

const SUPPORT_URL = 'https://ko-fi.com/A1V11ZZTPI';

export interface EditorFormField {
  name: string;
  selector: Record<string, unknown>;
}

export abstract class MealieCardEditorCore<T extends BaseMealieCardConfig> extends LocalizableMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() protected config!: T;

  static styles = editorStyles;

  public setConfig(config: T): void {
    this.config = { ...config };
  }

  protected integrationFields(): EditorFormField[] {
    return [{ name: 'config_entry_id', selector: { config_entry: { integration: 'mealie' } } }];
  }

  protected fieldLabels(): Record<string, string> {
    return { config_entry_id: this.localize('editor.integration') };
  }

  protected get _schemaTop() {
    return [
      {
        type: 'expandable',
        title: this.localize('editor.integration'),
        icon: 'mdi:connection',
        schema: this.integrationFields(),
      },
    ];
  }

  protected _computeLabel = (schema: { name: string }): string => this.fieldLabels()[schema.name] ?? schema.name;

  protected _commitConfig(config: T): void {
    this.config = config;
    fireEvent(this, 'config-changed', { config });
  }

  protected _setValue(key: keyof T, value: unknown): void {
    this._commitConfig({ ...this.config, [key]: value });
  }

  protected _valueChanged(e: ValueChangedEvent<T>): void {
    this._commitConfig({ ...e.detail.value });
  }

  protected renderEditorLoading(): TemplateResult {
    return html`<div>${this.localize('editor.loading')}</div>`;
  }

  protected renderTopForm(): TemplateResult {
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _languageLabel(tag: string): string {
    try {
      const name = new Intl.DisplayNames([tag], { type: 'language' }).of(tag);
      return name ? `${name.charAt(0).toLocaleUpperCase(tag)}${name.slice(1)} · ${tag}` : tag;
    } catch {
      return tag;
    }
  }

  private _setLanguage(value: string | undefined): void {
    const config = { ...this.config };
    if (value && value !== 'auto') config.language = value;
    else delete config.language;
    this._commitConfig(config);
  }

  protected renderLanguageOptions(): TemplateResult {
    const options = [
      { value: 'auto', label: this.localize('editor.language_auto') },
      ...SUPPORTED_LANGUAGES.map((tag) => ({ value: tag, label: this._languageLabel(tag) })),
    ];
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_language')}>
        <ha-icon slot="leading-icon" icon="mdi:translate"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ select: { mode: 'dropdown', options } }}
            .value=${canonicalLanguage(this.config.language) ?? 'auto'}
            .label=${this.localize('editor.language')}
            .helper=${this.localize('editor.language_helper')}
            .required=${false}
            @value-changed=${(e: ValueChangedEvent<string>) => this._setLanguage(e.detail.value)}
          ></ha-selector>
        </div>
      </ha-expansion-panel>
    `;
  }

  protected renderVersion(): TemplateResult {
    return html`
      <div class="editor-version">
        <span class="editor-version-name">Mealie Card</span>
        <span class="editor-version-number">v${version}</span>
        <a href="${SUPPORT_URL}" target="_blank"
          ><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" border="0" alt="Buy Me a Coffee at ko-fi.com"
        /></a>
      </div>
    `;
  }
}
