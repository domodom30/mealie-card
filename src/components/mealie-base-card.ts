import { HomeAssistant } from 'custom-card-helpers';
import { html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { formatTime, getRecipeImageUrl, getRecipeUrl } from '../utils/helpers';
import localize from '../utils/translate.js';

export abstract class MealieBaseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() protected error: string | null = null;
  @state() protected mealieBaseUrl: string = '';
  @state() protected _loading = false;
  @state() protected _initialized = false;

  protected abstract config: any;
  protected abstract loadData(): Promise<void>;

  protected updated(changedProps: Map<string, any>): void {
    super.updated(changedProps);
    if (changedProps.has('hass') && this.hass && !this._initialized && !this._loading) {
      this.loadData();
    }
  }

  protected validateAndSetMealieUrl(): void {
    if (this.config.url) {
      this.mealieBaseUrl = this.config.url.replace(/\/$/, '');
    } else if (this.config.clickable || this.config.show_image) {
      this.config = {
        ...this.config,
        clickable: false,
        show_image: false
      };
    }
  }

  // Méthodes de rendu communes
  protected renderLoading(title: string): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <div class="title">${title}</div>
            </div>
          </div>
          <div class="loading">
            <div class="loading-text">${localize('editor.loading')}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  protected renderError(title: string): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <div class="title">${title}</div>
            </div>
          </div>
          <div class="error">
            <div class="error-text">${this.error}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  protected renderEmptyState(title: string, message: string): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <div class="title">${title}</div>
            </div>
          </div>
          <div class="no-meals">
            <div class="no-meals-text">${message}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  protected renderRecipeImage(recipe: any, clickable: boolean, showImage: boolean): TemplateResult | string {
    if (!showImage) return '';

    const imageUrl = getRecipeImageUrl(this.mealieBaseUrl, recipe.recipe_id, !!recipe.image);
    if (!imageUrl) return '';

    const recipeUrl = getRecipeUrl(this.mealieBaseUrl, recipe.slug, clickable);
    const imageElement = html`
      <div class="recipe-image-container">
        <img src="${imageUrl}" alt="${recipe.name}" class="recipe-image" loading="lazy" @error=${this.handleImageError} />
      </div>
    `;

    return clickable && recipeUrl !== '#' ? html`<a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-image-link">${imageElement}</a>` : imageElement;
  }

  protected renderRecipeName(recipe: any, clickable: boolean): TemplateResult {
    const recipeUrl = getRecipeUrl(this.mealieBaseUrl, recipe.slug, clickable);
    const nameElement = html`<h3 class="recipe-name">${recipe.name}</h3>`;

    return clickable && recipeUrl !== '#' ? html`<a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-name-link">${nameElement}</a>` : nameElement;
  }

  protected renderRecipeDescription(description?: string): TemplateResult | string {
    return description ? html`<p class="recipe-description">${description}</p>` : '';
  }

  protected renderRecipeTimes(recipe: any, showPrepTime: boolean, showPerformTime: boolean, showTotalTime: boolean): TemplateResult | string {
    const timeBadges = [
      showPrepTime && recipe.prep_time ? this.renderTimeBadge('⏱️', formatTime(recipe.prep_time)) : null,
      showPerformTime && recipe.perform_time ? this.renderTimeBadge('🔥', formatTime(recipe.perform_time)) : null,
      showTotalTime && recipe.total_time ? this.renderTimeBadge('⏰', formatTime(recipe.total_time)) : null
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
    img.style.display = 'none';
    const container = img.parentElement;
    if (container) {
      container.innerHTML = '<div></div>';
    }
  }
}
