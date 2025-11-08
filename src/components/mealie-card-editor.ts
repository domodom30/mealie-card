import { fireEvent, HomeAssistant } from 'custom-card-helpers';
import { css, html, LitElement, PropertyValues, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { MealieTodayCardConfig } from '../types';

import editorStyles from '../styles/editor.css';
import localize from '../utils/translate';

type ConfigElement = HTMLInputElement & {
  configValue?: keyof MealieTodayCardConfig;
};

@customElement('mealie-card-editor')
export class MealieTodayCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MealieTodayCardConfig;

  public setConfig(config: MealieTodayCardConfig): void {
    this.config = { ...config };
  }

  protected willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);
  }

  static styles = css`
    ${unsafeCSS(editorStyles)}
  `;

  protected render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html`<div>${localize('editor.loading')}</div>`;
    }

    const hasUrl = !!(this.config.url && this.config.url.trim() !== '');

    return html`
        <div class="section-title">${localize('editor.url')}</div>
        <div class="option">
          <ha-textfield label="${localize('editor.url')}" .value=${this.config.url || ''} .configValue=${'url'} placeholder="https://mealie.local" @input=${this.valueChanged} helper-text="${localize('editor.url_helper')}"></ha-textfield>
          <ha-textfield label="${localize('editor.group')}" .value=${this.config.group || 'home'} .configValue=${'group'} placeholder="${localize('common.group')}" @input=${this.valueChanged} helper-text="${localize(
      'editor.group'
    )}" style="max-width: 350px;></ha-textfield>
        </div>
        ${this.renderEntryTypeSelector()} ${!hasUrl ? html` <div class="warning-message">${localize('warning.no_url')}</div> ` : ''}

        <div class="section-title">${localize('editor.section_title_screen')}</div>
        <div class="option ${!hasUrl ? 'disabled' : ''}">
          <ha-switch .checked=${hasUrl && this.config.show_image !== false} .configValue=${'show_image'} .disabled=${!hasUrl} @change=${this.valueChanged}></ha-switch>
          ${localize('editor.show_image')}
        </div>

        <div class="option">
          <ha-switch .checked=${this.config.show_prep_time ?? true} .configValue=${'show_prep_time'} @change=${this.valueChanged}></ha-switch>
          ${localize('editor.show_prep_time')}
        </div>

        <div class="option">
          <ha-switch .checked=${this.config.show_perform_time ?? true} .configValue=${'show_perform_time'} @change=${this.valueChanged}></ha-switch>
          ${localize('editor.show_cooking_time')}
        </div>

        <div class="option">
          <ha-switch .checked=${this.config.show_total_time ?? true} .configValue=${'show_total_time'} @change=${this.valueChanged}></ha-switch>
          ${localize('editor.show_total_time')}
        </div>

        <div class="option ${!hasUrl ? 'disabled' : ''}">
          <ha-switch .checked=${hasUrl && this.config.clickable !== false} .configValue=${'clickable'} .disabled=${!hasUrl} @change=${this.valueChanged}></ha-switch>
          ${localize('editor.clickable')}
        </div>

       <div class="option">
        <ha-switch .checked=${this.config.layout === 'vertical'} .configValue=${'layout'} @change=${this.valueChanged} ></ha-switch>
        ${localize('editor.layout')}
      </div>

        <div class="option">
          <ha-select label="${localize('editor.number_days')}" .value=${(this.config.days_to_show ?? 1).toString()} .configValue=${'days_to_show'} @selected=${this.valueChanged} @closed=${(e: Event) => e.stopPropagation()}>
            <mwc-list-item value="1">${localize('editor.option_numer_1')}</mwc-list-item>
            <mwc-list-item value="2">${localize('editor.option_numer_2')}</mwc-list-item>
            <mwc-list-item value="3">${localize('editor.option_numer_3')}</mwc-list-item>
            <mwc-list-item value="4">${localize('editor.option_numer_4')}</mwc-list-item>
            <mwc-list-item value="5">${localize('editor.option_numer_5')}</mwc-list-item>
            <mwc-list-item value="6">${localize('editor.option_numer_6')}</mwc-list-item>
            <mwc-list-item value="7">${localize('editor.option_numer_7')}</mwc-list-item>
            <mwc-list-item value="14">${localize('editor.option_numer_14')}</mwc-list-item>
          </ha-select>
        </div>
    `;
  }

  private renderEntryTypeSelector() {
    const entryTypes = ['breakfast', 'lunch', 'dinner', 'side'];
    const selectedTypes = this.config.entry_types || [];

    return html`
      <div class="section-title">${localize('editor.entry_types')}</div>
      <div class="option">
        <div class="chips-container">${entryTypes.map((type) => html` <button class="type-chip ${selectedTypes.includes(type) ? 'selected' : ''}" @click=${() => this.toggleEntryType(type)} type="button">${localize(`common.${type}`)}</button> `)}</div>
      </div>
    `;
  }

  private toggleEntryType(type: string): void {
    let entry_types = [...(this.config.entry_types || [])];

    if (entry_types.includes(type)) {
      entry_types = entry_types.filter((t) => t !== type);
    } else {
      entry_types.push(type);
    }

    this.config = {
      ...this.config,
      entry_types
    };

    fireEvent(this, 'config-changed', { config: this.config });
  }

  private valueChanged(event: Event): void {
    if (!this.config || !this.hass || !event.target) {
      return;
    }

    const target = event.target as ConfigElement;
    if (!target.configValue) {
      return;
    }

    let newValue: any = target.checked !== undefined ? target.checked : target.value;

    if (target.configValue === 'layout') {
      newValue = target.checked ? 'vertical' : 'horizontal';
    }

    if ((target.configValue === 'result_limit' || target.configValue === 'days_to_show') && typeof newValue === 'string') {
      const numValue = parseInt(newValue, 10);
      newValue = isNaN(numValue) || numValue <= 0 ? undefined : numValue;
    }

    if (this.config[target.configValue] === newValue) {
      return;
    }

    const newConfig = { ...this.config };

    if (newValue === '' || newValue === undefined) {
      delete newConfig[target.configValue];
    } else {
      newConfig[target.configValue] = newValue;
    }

    if (target.configValue === 'url') {
      const hasUrl = !!(newValue && (newValue as string).trim() !== '');
      if (!hasUrl) {
        newConfig.show_image = false;
        newConfig.clickable = false;
      }
    }

    this.config = newConfig;
    fireEvent(this, 'config-changed', { config: this.config });
  }
}
