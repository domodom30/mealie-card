import { LitElement, html, css, unsafeCSS, TemplateResult, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { fireEvent, HomeAssistant } from 'custom-card-helpers';
import type { MealieTodayCardConfig } from '../types';

import localize from '../utils/translate';
import editorStyles from '../styles/editor.css';

type ConfigElement = HTMLInputElement & {
  configValue?: keyof MealieTodayCardConfig;
};

@customElement('mealie-card-editor')
export class MealieTodayCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MealieTodayCardConfig;
  @state() private mealieCalendars: string[] = [];

  public setConfig(config: MealieTodayCardConfig): void {
    this.config = { ...config };
  }

  protected willUpdate(changedProps: PropertyValues): void {
    super.willUpdate(changedProps);

    if (changedProps.has('hass') && this.hass) {
      this.mealieCalendars = Object.keys(this.hass.states).filter((id) => id.startsWith('calendar.mealie_'));
    }
  }

  static styles = css`
    ${unsafeCSS(editorStyles)}
  `;

  protected render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html`<div>${localize('editor.loading')}</div>`;
    }

    const hasUrl = !!(this.config.mealie_url && this.config.mealie_url.trim() !== '');

    return html`
      <div class="card-config">
        <div class="section-title">${localize('editor.url')}</div>
        <div class="option">
          <ha-textfield label="${localize('editor.url')}" .value=${this.config.mealie_url || ''} .configValue=${'mealie_url'} placeholder="https://mealie.local" @input=${this.valueChanged} helper-text="${localize('editor.mealie_url_helper')}"></ha-textfield>
        </div>

        ${this.renderCalendars()} ${!hasUrl ? html` <div class="warning-message">${localize('warning.no_url')}</div> ` : ''}

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
      </div>
    `;
  }

  private renderCalendars(): TemplateResult {
    const calendarCount = Math.max((this.config.calendars?.length || 0) + 1, 1);

    return html`
      <div class="section-title">${localize('editor.calendars')}</div>
      <div class="calendars-section">
        ${[...Array(calendarCount)].map((_, index) => {
          // Obtenir les calendriers déjà sélectionnés (sauf celui du select actuel)
          const selectedCalendars = (this.config.calendars || []).filter((cal, i) => cal && i !== index);

          // Filtrer les calendriers disponibles
          const availableCalendars = this.mealieCalendars.filter((entityId) => !selectedCalendars.includes(entityId));

          return html`
            <div class="option">
              <ha-select
                .label="${localize('editor.calendar')} ${index + 1}"
                .value=${this.config.calendars?.[index] ?? ''}
                @selected=${(ev: CustomEvent) => {
                  const target = ev.target as any;
                  const newEvent = {
                    detail: { value: target.value }
                  } as CustomEvent;
                  this.calendarChanged(newEvent, index);
                }}
                @closed=${(e: Event) => e.stopPropagation()}
              >
                <mwc-list-item value="">${localize('editor.none')}</mwc-list-item>
                ${availableCalendars.map((entityId) => {
                  const friendlyName = this.hass.states[entityId]?.attributes?.friendly_name || entityId;
                  return html` <mwc-list-item value="${entityId}"> ${friendlyName} </mwc-list-item> `;
                })}
              </ha-select>
            </div>
          `;
        })}
        ${this.mealieCalendars.length === 0 ? html` <div class="warning-message">${localize('editor.no_calendars')}</div> ` : ''}
      </div>
    `;
  }

  private calendarChanged(ev: CustomEvent, index: number): void {
    const value = ev.detail.value;
    const calendars = [...(this.config.calendars || [])];
    calendars[index] = value;

    this.config = {
      ...this.config,
      calendars: calendars.filter((c) => c)
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

    if (target.configValue === 'mealie_url') {
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
