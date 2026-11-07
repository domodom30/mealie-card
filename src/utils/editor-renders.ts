import { html, TemplateResult } from 'lit';
import type { HomeAssistant, ValueChangedEvent } from '../types';

export function renderBool(value: boolean, label: string, onChange: (checked: boolean) => void, disabled = false): TemplateResult {
  return html`
    <label class="switch-row ${disabled ? 'disabled' : ''}">
      <span class="switch-label">${label}</span>
      <ha-switch
        .checked=${value}
        .disabled=${disabled}
        aria-label=${label}
        @change=${(e: Event) => onChange((e.target as HTMLInputElement).checked)}
      ></ha-switch>
    </label>
  `;
}

export function renderNumber(
  hass: HomeAssistant,
  value: number | undefined,
  label: string,
  min: number,
  max: number,
  onChange: (value: number) => void
): TemplateResult {
  return html`
    <ha-selector
      .hass=${hass}
      .selector=${{ number: { min, max, mode: 'box', step: 1 } }}
      .value=${value ?? min}
      .label=${label}
      .required=${false}
      @value-changed=${(e: ValueChangedEvent<number>) => onChange(e.detail.value)}
    ></ha-selector>
  `;
}

export function renderText(hass: HomeAssistant, value: string | undefined, label: string, onChange: (value: string) => void): TemplateResult {
  return html`
    <ha-selector
      .hass=${hass}
      .selector=${{ text: {} }}
      .value=${value ?? ''}
      .label=${label}
      .required=${false}
      @value-changed=${(e: ValueChangedEvent<string>) => onChange(e.detail.value)}
    ></ha-selector>
  `;
}

export function renderSelect<T extends string>(
  hass: HomeAssistant,
  value: T,
  label: string,
  options: { value: T; label: string }[],
  onChange: (value: T) => void
): TemplateResult {
  return html`
    <ha-selector
      .hass=${hass}
      .selector=${{ select: { mode: 'dropdown', options } }}
      .value=${value}
      .label=${label}
      .required=${false}
      @value-changed=${(e: ValueChangedEvent<T>) => onChange(e.detail.value)}
    ></ha-selector>
  `;
}
