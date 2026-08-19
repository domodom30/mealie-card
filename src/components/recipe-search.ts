import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { defineOnce } from '../utils/define-once.js';

@defineOnce('mealie-recipe-search')
export class MealieRecipeSearch extends LitElement {
  @property() value = '';
  @property() placeholder = '';

  static styles = css`
    ha-input-search {
      display: block;
      width: 100%;
      --ha-input-search-height: 40px;
    }

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
    return customElements.get('ha-input-search') ? this._renderInputSearch() : this._renderTextfield();
  }

  private _renderInputSearch(): TemplateResult {
    return html`
      <ha-input-search appearance="outlined" .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}></ha-input-search>
    `;
  }

  private _renderTextfield(): TemplateResult {
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
