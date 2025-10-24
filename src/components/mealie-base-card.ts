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
      this.validateAndSetMealieUrl();
      this.loadData();
    }
  }

  /**
   * Valide et configure l'URL de base Mealie depuis la config
   */
  protected validateAndSetMealieUrl(): void {
    const configUrl = this.config.url || this.config.mealie_url;

    if (configUrl) {
      this.mealieBaseUrl = configUrl.trim().replace(/\/+$/, '');
    } else if (this.config.clickable || this.config.show_image) {
      console.warn('Mealie URL manquante : désactivation des images et liens cliquables');
      this.config = {
        ...this.config,
        clickable: false,
        show_image: false
      };
    }
  }

  // ========================================
  // Méthodes de rendu communes - États
  // ========================================

  protected renderLoading(title: string): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          ${title ? this.renderHeader(title) : ''}
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
          ${title ? this.renderHeader(title) : ''}
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
          ${title ? this.renderHeader(title) : ''}
          <div class="no-meals">
            <div class="no-meals-text">${message}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  protected renderHeader(title: string): TemplateResult {
    return html`
      <div class="header">
        <div class="title-container">
          <div class="title">${title}</div>
        </div>
      </div>
    `;
  }

  // ========================================
  // Méthodes de rendu communes - Recettes
  // ========================================

  /**
   * Rendu de l'image d'une recette avec gestion du lien cliquable
   */
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

  /**
   * Rendu du nom de la recette avec gestion du lien cliquable
   */
  protected renderRecipeName(recipe: any, clickable: boolean): TemplateResult {
    const recipeUrl = getRecipeUrl(this.mealieBaseUrl, recipe.slug, clickable);
    const nameElement = html`<h3 class="recipe-name">${recipe.name}</h3>`;

    return clickable && recipeUrl !== '#' ? html`<a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-name-link">${nameElement}</a>` : nameElement;
  }

  /**
   * Rendu de la description de la recette
   */
  protected renderRecipeDescription(description?: string): TemplateResult | string {
    return description ? html`<p class="recipe-description">${description}</p>` : '';
  }

  /**
   * Rendu des temps de préparation/cuisson/total
   */
  protected renderRecipeTimes(recipe: any, showPrepTime: boolean, showPerformTime: boolean, showTotalTime: boolean): TemplateResult | string {
    const timeBadges = [
      showPrepTime && recipe.prep_time ? this.renderTimeBadge('⏱️', formatTime(recipe.prep_time, this.hass)) : null,
      showPerformTime && recipe.perform_time ? this.renderTimeBadge('🔥', formatTime(recipe.perform_time, this.hass)) : null,
      showTotalTime && recipe.total_time ? this.renderTimeBadge('⏰', formatTime(recipe.total_time, this.hass)) : null
    ].filter(Boolean);

    return timeBadges.length > 0 ? html`<div class="recipe-times">${timeBadges}</div>` : '';
  }

  /**
   * Rendu d'un badge de temps individuel
   */
  protected renderTimeBadge(icon: string, label: string): TemplateResult {
    return html`
      <span class="time-badge">
        <span class="time-icon">${icon}</span>
        <span class="time-value">${label}</span>
      </span>
    `;
  }

  /**
   * Gestion des erreurs de chargement d'image
   */
  protected handleImageError(e: Event): void {
    const img = e.target as HTMLImageElement;
    const container = img.parentElement;

    if (container) {
      container.remove();
    }
  }
}
