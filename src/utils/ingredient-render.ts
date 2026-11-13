import { html, TemplateResult } from 'lit';

export function renderCheckableIngredient(text: string, checked: boolean, onToggle: () => void): TemplateResult {
  return html`
    <label class="ingredient-item ${checked ? 'checked' : ''}">
      <ha-checkbox .checked=${checked} @change=${onToggle}></ha-checkbox>
      <span class="ingredient-item-text">${text}</span>
    </label>
  `;
}

export function renderIngredientSectionTitle(title: string | null | undefined): TemplateResult | string {
  return title ? html`<div class="ingredient-section-title">${title}</div>` : '';
}
