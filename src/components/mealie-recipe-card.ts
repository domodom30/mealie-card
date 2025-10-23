import { HomeAssistant } from 'custom-card-helpers';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { DEFAULT_RECIPE_CONFIG, DEFAULT_RESULT_LIMIT, normalizeRecipeConfig } from '../config.card.js';
import cardStyles from '../styles/recipes.css';
import type { MealieRecipe, MealieRecipeCardConfig } from '../types';
import { formatTime, getMealieRecipes } from '../utils/helpers';
import localize from '../utils/translate.js';
import './mealie-recipe-card-editor';

export class MealieRecipeCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MealieRecipeCardConfig;
  @state() private recipes: MealieRecipe[] = [];
  @state() private error: string | null = null;
  @state() private mealieBaseUrl: string = '';

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = normalizeRecipeConfig(config);
  }

  protected updated(changedProps: Map<string, any>): void {
    super.updated(changedProps);

    if (this.hass && changedProps.has('hass')) {
      this.loadRecipes();
    }
  }

  private async loadRecipes() {
    if (!this.hass) {
      return;
    }

    if (this.config.mealie_url) {
      this.mealieBaseUrl = this.config.mealie_url;
    } else if (this.config.clickable) {
      this.config.clickable = false;
      this.config.show_image = false;
    }

    this.error = null;

    try {
      this.recipes = await getMealieRecipes(this.hass, {
        configEntryId: this.config.mealie_config_entry_id,
        resultLimit: this.config.result_limit ?? DEFAULT_RESULT_LIMIT
      });
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'Impossible de charger les recettes';
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
    if (this.error) {
      return this.renderError(this.error);
    }

    if (!this.recipes || this.recipes.length === 0) {
      return this.renderNoRecipes();
    }

    return this.renderRecipes();
  }

  private renderError(message: string) {
    return html`
      <ha-card>
        <div class="card-content">
          ${this.config?.title
            ? html`
                <div class="header">
                  <div class="title-container">
                    <div class="title">${this.config.title}</div>
                  </div>
                </div>
              `
            : ''}
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
          ${this.config?.title
            ? html`
                <div class="header">
                  <div class="title-container">
                    <div class="title">${this.config.title}</div>
                  </div>
                </div>
              `
            : ''}
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
          ${this.config?.title?.trim()
            ? html`
                <div class="header">
                  <div class="title-container">
                    <div class="title">${this.config.title}</div>
                  </div>
                </div>
              `
            : ''}
          <div class="recipes-container">${this.recipes.map((recipe) => this.renderRecipe(recipe))}</div>
        </div>
      </ha-card>
    `;
  }

  private renderRecipe(recipe: MealieRecipe) {
    const imageUrl = this.mealieBaseUrl && recipe.image ? `${this.mealieBaseUrl}/api/media/recipes/${recipe.recipe_id}/images/min-original.webp` : null;
    const recipeUrl = this.mealieBaseUrl ? `${this.mealieBaseUrl}/g/home/r/${recipe.slug}` : '#';

    return html`
      <div class="recipe-card">
        ${this.config.show_image && imageUrl
          ? html`
              ${this.config.clickable && recipeUrl !== '#'
                ? html`
                    <a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-image-link">
                      <div class="recipe-image-container">
                        <img
                          src="${imageUrl}"
                          alt="${recipe.name}"
                          class="recipe-image"
                          loading="lazy"
                          @error=${(e: Event) => {
                            const img = e.target as HTMLImageElement;
                            img.style.display = 'none';
                            const container = img.parentElement;
                            if (container) {
                              container.innerHTML = '<div class="no-image">🍽️</div>';
                            }
                          }}
                        />
                      </div>
                    </a>
                  `
                : html`
                    <div class="recipe-image-container">
                      <img
                        src="${imageUrl}"
                        alt="${recipe.name}"
                        class="recipe-image"
                        loading="lazy"
                        @error=${(e: Event) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          const container = img.parentElement;
                          if (container) {
                            container.innerHTML = '<div class="no-image">🍽️</div>';
                          }
                        }}
                      />
                    </div>
                  `}
            `
          : ''}

        <div class="recipe-info">
          <h3 class="recipe-name">${recipe.name}</h3>

          ${recipe.description ? html` <p class="recipe-description">${recipe.description}</p> ` : ''}

          <div class="recipe-times">
            ${this.config.show_prep_time && recipe.prep_time
              ? html`
                  <span class="time-badge">
                    <span class="time-icon">⏱️</span>
                    <span class="time-value">${formatTime(recipe.prep_time)}</span>
                  </span>
                `
              : ''}
            ${this.config.show_perform_time && recipe.perform_time
              ? html`
                  <span class="time-badge">
                    <span class="time-icon">🔥</span>
                    <span class="time-value">${formatTime(recipe.perform_time)}</span>
                  </span>
                `
              : ''}
            ${this.config.show_total_time && recipe.total_time
              ? html`
                  <span class="time-badge">
                    <span class="time-icon">⏰</span>
                    <span class="time-value">${formatTime(recipe.total_time)}</span>
                  </span>
                `
              : ''}
          </div>
        </div>
      </div>
    `;
  }
}
