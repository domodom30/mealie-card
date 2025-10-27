import { fireEvent, HomeAssistant } from 'custom-card-helpers';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { MealieRecipeCardConfig } from '../types';

import editorStyles from '../styles/editor.css';
import localize from '../utils/translate';

type ConfigElement = HTMLInputElement & {
  configValue?: keyof MealieRecipeCardConfig;
};

@customElement('mealie-recipe-card-editor')
export class MealieReceipeCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MealieRecipeCardConfig;

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = { ...config };
  }

  static styles = css`
    ${unsafeCSS(editorStyles)}
  `;

  protected render() {
    if (!this.hass || !this.config) {
      return html`<div>${localize('common.loading')}</div>`;
    }

    const hasUrl = !!(this.config.url && this.config.url.trim() !== '');

    return html`
      <div class="card-config">
        <div class="option">
          <ha-textfield label="${localize('editor.title')}" .value=${this.config.title || ''} .configValue=${'title'} placeholder="${localize('common.recipe_title')}" @input=${this.valueChanged} helper-text="${localize('editor.title_helper')}"></ha-textfield>
        </div>

        <div class="section-title">${localize('editor.url')}</div>
        <div class="option">
          <ha-textfield label="${localize('editor.url')}" .value=${this.config.url || ''} .configValue=${'url'} placeholder="https://mealie.local" @input=${this.valueChanged} helper-text="${localize('editor.url_helper')}"></ha-textfield>
          <ha-textfield
            label="${localize('editor.group')}"
            .value=${this.config.group || 'home'}
            .configValue=${'group'}
            placeholder="${localize('editor.group')}"
            @input=${this.valueChanged}
            helper-text="${localize('editor.group')}"
            style="max-width: 350px;
}"
          ></ha-textfield>
        </div>

        ${!hasUrl ? html` <div class="warning-message">${localize('warning.no_url')}</div> ` : ''}

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
          <ha-textfield
            type="number"
            label="${localize('editor.number_of_recipes')}"
            .value=${this.config.result_limit.toString()}
            .configValue=${'result_limit'}
            min="1"
            max="100"
            @input=${this.valueChanged}
            helper-text="${localize('editor.number_of_recipes_helper')}"
            style="max-width: 200px;"
          ></ha-textfield>
        </div>
      </div>
    `;
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

    if (target.configValue === 'result_limit' && typeof newValue === 'string') {
      const numValue = parseInt(newValue, 10);
      if (isNaN(numValue) || numValue <= 0) {
        newValue = 10;
      } else {
        newValue = numValue;
      }
    }

    if (this.config[target.configValue] === newValue) {
      return;
    }

    const newConfig = { ...this.config };

    if ((newValue === '' || newValue === undefined) && target.configValue !== 'result_limit') {
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
