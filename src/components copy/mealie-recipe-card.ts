import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import type { MealieRecipeCardConfig, MealieRecipe } from '../types';
import { formatTime, getMealieRecipes, getRecipeUrl, getRecipeImageUrl } from '../utils/helpers';
import cardStyles from '../styles/recipes.css';
import './mealie-recipe-card-editor';
import localize from '../utils/translate.js';
import { DEFAULT_RECIPE_CONFIG, DEFAULT_RESULT_LIMIT, normalizeRecipeConfig } from '../config.card.js';

export class MealieRecipeCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MealieRecipeCardConfig;
  @state() private recipes: MealieRecipe[] = [];
  @state() private error: string | null = null;
  @state() private mealieBaseUrl: string = '';
  @state() private _loading = false;
  @state() private _initialized = false;

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = normalizeRecipeConfig(config);

    // Réinitialiser l'état lors du changement de configuration
    this._initialized = false;
    this.error = null;

    // Charger si hass est déjà disponible
    if (this.hass) {
      this.loadRecipes();
    }
  }

  protected updated(changedProps: Map<string, any>): void {
    super.updated(changedProps);

    // Charger quand hass devient disponible pour la première fois
    if (changedProps.has('hass') && this.hass && !this._initialized && !this._loading) {
      this.loadRecipes();
    }
  }

  private async loadRecipes(): Promise<void> {
    // Vérifications de sécurité
    if (!this.hass) {
      console.debug('[Mealie Recipe Card] Waiting for hass...');
      return;
    }

    if (!this.config) {
      console.debug('[Mealie Recipe Card] Waiting for config...');
      return;
    }

    if (this._loading) {
      console.debug('[Mealie Recipe Card] Already loading...');
      return;
    }

    this._loading = true;
    this.error = null;

    try {

      if (this.config.mealie_url) {
        this.mealieBaseUrl = this.config.mealie_url;
      } else if (this.config.clickable || this.config.show_image) {

        this.config = {
          ...this.config,
          clickable: false,
          show_image: false
        };
      }

      this.recipes = await getMealieRecipes(this.hass, {
        configEntryId: this.config.mealie_config_entry_id,
        resultLimit: this.config.result_limit ?? DEFAULT_RESULT_LIMIT
      });

      this._initialized = true;

    } catch (err) {

      this.error = err instanceof Error ? err.message : localize('error.error_loading');
    } finally {
      this._loading = false;
    }
  }

  static styles = css`
    ${unsafeCSS(cardStyles)}
  `;

  public static getConfigElement(): HTMLElement {
    return document.createElement('mealie-recipe-card-editor');
  }

  public static getStubConfig(): MealieRecipeCardConfig {
    return {
      ...DEFAULT_RECIPE_CONFIG
    } as MealieRecipeCardConfig;
  }

  protected render() {
    if (!this.hass || !this.config) {
      return this.renderLoading();
    }

    if (this.error) {
      return this.renderError(this.error);
    }

    if (this._loading) {
      return this.renderLoading();
    }

    if (!this.recipes || this.recipes.length === 0) {
      return this.renderNoRecipes();
    }

    return this.renderRecipes();
  }

  private renderLoading() {
    const titleValue = this.config.title || localize('common.recipe_title');
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"></path>
              </svg>
              <div class="title">${titleValue}</div>
            </div>
          </div>
          <div class="loading">
            <div class="loading-text">${localize('editor.loading')}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private renderError(message: string) {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"></path>
              </svg>
              <div class="title">${this.config?.title}</div>
            </div>
          </div>
          <div class="error">
            <div class="error-text">${message}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private renderNoRecipes() {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"></path>
              </svg>
              <div class="title">${this.config?.title}</div>
            </div>
          </div>
          <div class="no-meals">
            <div class="no-meals-text">${localize('common.no_recipes')}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private renderRecipes() {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"></path>
              </svg>
              <div class="title">${this.config?.title}</div>
            </div>
          </div>
          <div class="recipes-container">${this.recipes.map((recipe) => this.renderRecipe(recipe))}</div>
        </div>
      </ha-card>
    `;
  }

  private renderRecipe(recipe: MealieRecipe) {
    const imageUrl = getRecipeImageUrl(this.mealieBaseUrl, recipe.recipe_id, !!recipe.image);
    const recipeUrl = getRecipeUrl(this.mealieBaseUrl, recipe.slug, this.config.clickable);

    return html` <div class="recipe-card">${this.renderRecipeImage(recipe, imageUrl, recipeUrl)} ${this.renderRecipeInfo(recipe)}</div> `;
  }

  private renderRecipeImage(recipe: MealieRecipe, imageUrl: string | null, recipeUrl: string) {
    if (!this.config.show_image || !imageUrl) {
      return html``;
    }

    const imageElement = html`
      <div class="recipe-image-container">
        <img src="${imageUrl}" alt="${recipe.name}" class="recipe-image" loading="lazy" @error=${this.handleImageError} />
      </div>
    `;

    return this.config.clickable && recipeUrl !== '#' ? html` <a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-image-link"> ${imageElement} </a> ` : imageElement;
  }

  private renderRecipeInfo(recipe: MealieRecipe) {
    return html` <div class="recipe-info">${this.renderRecipeName(recipe)} ${recipe.description ? html`<p class="recipe-description">${recipe.description}</p>` : ''} ${this.renderRecipeTimes(recipe)}</div> `;
  }

  private renderRecipeName(recipe: MealieRecipe) {
    const recipeUrl = getRecipeUrl(this.mealieBaseUrl, recipe.slug, this.config.clickable);
    const nameElement = html`<h3 class="recipe-name">${recipe.name}</h3>`;

    return recipeUrl && recipeUrl !== '#' ? html` <a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-name-link"> ${nameElement} </a> ` : nameElement;
  }

  private renderRecipeTimes(recipe: MealieRecipe) {
    const timeBadges = [
      this.config.show_prep_time && recipe.prep_time ? this.renderTimeBadge('⏱️', formatTime(recipe.prep_time)) : null,
      this.config.show_perform_time && recipe.perform_time ? this.renderTimeBadge('🔥', formatTime(recipe.perform_time)) : null,
      this.config.show_total_time && recipe.total_time ? this.renderTimeBadge('⏰', formatTime(recipe.total_time)) : null
    ].filter(Boolean);

    return timeBadges.length > 0 ? html`<div class="recipe-times">${timeBadges}</div>` : html``;
  }

  private renderTimeBadge(icon: string, label: string) {
    return html`
      <span class="time-badge">
        <span class="time-icon">${icon}</span>
        <span class="time-value">${label}</span>
      </span>
    `;
  }

  private handleImageError(e: Event): void {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
    const container = img.parentElement;
    if (container) {
      container.innerHTML = '<div></div>';
    }
  }
}
