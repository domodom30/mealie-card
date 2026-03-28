import { HomeAssistant } from "custom-card-helpers";
import { html, TemplateResult } from "lit";

export function renderBool(_hass: HomeAssistant, value: boolean, label: string, onChange: (checked: boolean) => void, disabled = false): TemplateResult {
  return html`
    <ha-formfield alignEnd spaceBetween .label=${label} .disabled=${disabled}>
      <ha-switch
        .checked=${value}
        .disabled=${disabled}
        @change=${(e: Event) => onChange((e.target as HTMLInputElement).checked)}
      ></ha-switch>
    </ha-formfield>
  `;
}

export function renderNumber(
  hass: HomeAssistant,
  value: number | undefined,
  label: string,
  min: number,
  max: number,
  onChange: (value: number) => void,
): TemplateResult {
  return html`
    <ha-selector
      .hass=${hass}
      .selector=${{ number: { min, max, mode: "box", step: 1 } }}
      .value=${value ?? min}
      .label=${label}
      @value-changed=${(e: CustomEvent) => onChange(e.detail.value)}
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
      @value-changed=${(e: CustomEvent) => onChange(e.detail.value)}
    ></ha-selector>
  `;
}
