import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mealie-recipe-search')
export class MealieRecipeSearch extends LitElement {
  @property() value = '';
  @property() placeholder = '';

  static styles = css`
    ha-textfield {
      width: 100%;
    }
  `;

  private _emit(value: string): void {
    this.value = value;
    this.dispatchEvent(new CustomEvent('search-changed', { detail: { value }, bubbles: false, composed: false }));
  }

  private _onInput(e: Event): void {
    this._emit((e.target as HTMLInputElement).value);
  }

  private _clear(): void {
    this._emit('');
  }

  protected render(): TemplateResult {
    return html`
      <ha-textfield icon .iconTrailing=${!!this.value} .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}>
        <ha-icon slot="leadingIcon" icon="mdi:magnify"></ha-icon>
        ${this.value
          ? html`
              <ha-icon-button slot="trailingIcon" .label=${this.placeholder} @click=${this._clear}>
                <ha-icon icon="mdi:close"></ha-icon>
              </ha-icon-button>
            `
          : nothing}
      </ha-textfield>
    `;
  }
}
