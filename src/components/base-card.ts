import { HomeAssistant } from 'custom-card-helpers';
import { html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { formatTime, getRecipeImageUrl, getRecipeUrl, imageOrientation } from '../utils/helpers';
import localize from '../utils/translate.js';

export abstract class MealieBaseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() protected error: string | null = null;
  @state() protected _loading = false;
  @state() protected _initialized = false;
  @state() private showRecipeIframe = false;
  @state() private selectedRecipeUrl = '';
  @state() private selectedRecipeName = '';

  protected abstract config: any;
  protected abstract loadData(): Promise<void>;

  protected updated(changedProps: Map<string, any>): void {
    super.updated(changedProps);
    if (changedProps.has('hass') && this.hass && !this._initialized && !this._loading) {
      this.loadData();
    }
  }

  protected renderLoading(): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="loading">${localize('editor.loading')}</div>
        </div>
      </ha-card>
    `;
  }

  protected renderError(): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="error">${this.error}</div>
        </div>
      </ha-card>
    `;
  }

  protected renderEmptyState(message: string): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="no-recipe">${message}</div>
        </div>
      </ha-card>
    `;
  }

  protected renderRecipeIframeDialog() {
    if (!this.showRecipeIframe || !this.selectedRecipeUrl) return html``;

    return html`
      <ha-dialog open @closed=${this.closeRecipeIframe} .heading=${this.selectedRecipeName} class="recipe-iframe-dialog">
        <div class="iframe-container">
          <iframe src="${this.selectedRecipeUrl}" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups allow-forms" loading="lazy"></iframe>
        </div>
        <ha-button size="small" variant="brand" appearance="plain" slot="secondaryAction" @click=${this.closeRecipeIframe}> ${localize('dialog.close')} </ha-button>
      </ha-dialog>
    `;
  }

  protected renderRecipeImage(recipe: any, clickable: boolean, showImage: boolean, group: string): TemplateResult | string {
    if (!showImage) return '';
    const imageUrl = getRecipeImageUrl(this.config.url, recipe.recipe_id, !!recipe.image);

    const imageElement = html`
      <div class="recipe-card-image">
        <img src="${imageUrl}" alt="${recipe.name}" class="recipe-image" loading="lazy" @error=${this.handleImageError} @load=${imageOrientation} />
      </div>
    `;

    return clickable ? html` <div class="recipe-image-link" @click=${() => this.openRecipeIframe(recipe, group)}>${imageElement}</div> ` : imageElement;
  }

  protected renderRecipeName(recipe: any, clickable: boolean): TemplateResult {
    const nameElement = html`<h4 class="recipe-name">${recipe.name ?? recipe.title}</h4>`;

    return clickable ? html` <div class="recipe-name-link" @click=${() => this.openRecipeIframe(recipe, this.config.group)}>${nameElement}</div> ` : nameElement;
  }

  protected renderRecipeDescription(description: string, showDescription: boolean): TemplateResult | string {
    return showDescription && description ? html`<div class="recipe-description">${description}</div>` : '';
  }

  protected renderRecipeTimes(recipe: any, showPrepTime: boolean, showPerformTime: boolean, showTotalTime: boolean): TemplateResult | string {
    const timeBadges = [
      showPrepTime && recipe.prep_time ? this.renderTimeBadge('⏱️', formatTime(recipe.prep_time, this.hass)) : null,
      showPerformTime && recipe.perform_time ? this.renderTimeBadge('🔥', formatTime(recipe.perform_time, this.hass)) : null,
      showTotalTime && recipe.total_time ? this.renderTimeBadge('⏰', formatTime(recipe.total_time, this.hass)) : null
    ].filter(Boolean);

    return timeBadges.length > 0 ? html`<div class="recipe-times">${timeBadges}</div>` : '';
  }

  protected renderTimeBadge(icon: string, label: string): TemplateResult {
    return html`
      <span class="time-badge">
        <span class="time-icon">${icon}</span>
        <span class="time-value">${label}</span>
      </span>
    `;
  }

  protected handleImageError(e: Event): void {
    const img = e.target as HTMLImageElement;
    const container = img.parentElement;

    if (container) {
      container.remove();
    }
  }

  private openRecipeIframe(recipe: any, group: string) {
    const recipeUrl = getRecipeUrl(this.config.url, recipe.slug, true, group);
    if (recipeUrl === '#') return;

    this.selectedRecipeUrl = recipeUrl;
    this.selectedRecipeName = recipe.name ?? recipe.title;
    this.showRecipeIframe = true;
  }

  private closeRecipeIframe() {
    this.showRecipeIframe = false;
    this.selectedRecipeUrl = '';
    this.selectedRecipeName = '';
  }
}
