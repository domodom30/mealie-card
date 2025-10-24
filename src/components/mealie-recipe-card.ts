import { css, html, unsafeCSS } from 'lit';
import { state } from 'lit/decorators.js';
import { DEFAULT_RECIPE_CONFIG, DEFAULT_RESULT_LIMIT, normalizeRecipeConfig } from '../config.card.js';
import cardStyles from '../styles/recipes.css';
import type { MealieRecipe, MealieRecipeCardConfig } from '../types';
import { getMealieRecipes } from '../utils/helpers';
import localize from '../utils/translate.js';
import { MealieBaseCard } from './mealie-base-card';
import './mealie-recipe-card-editor';

export class MealieRecipeCard extends MealieBaseCard {
  @state() protected config!: MealieRecipeCardConfig;
  @state() private recipes: MealieRecipe[] = [];

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = normalizeRecipeConfig(config);
    this._initialized = false;
  }

  protected async loadData(): Promise<void> {
    if (!this.hass || this._loading || this._initialized) {
      return;
    }

    this._loading = true;
    this.error = null;

    try {
      this.recipes = await getMealieRecipes(this.hass, {
        configEntryId: this.config.mealie_config_entry_id,
        resultLimit: this.config.result_limit ?? DEFAULT_RESULT_LIMIT
      });
      this._initialized = true;
    } catch (err) {
      this.error = err instanceof Error ? err.message : localize('error.error_loading');
      this._initialized = true;
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
    const title = this.config?.title?.trim() || '';

    // État de chargement
    if (this._loading) {
      return this.renderLoading(title);
    }

    // État d'erreur
    if (this.error) {
      return this.renderError(title);
    }

    // État vide
    if (!this.recipes || this.recipes.length === 0) {
      return this.renderEmptyState(title, localize('common.no_recipes'));
    }

    // Rendu des recettes
    return this.renderRecipes();
  }

  /**
   * Rendu principal de la carte avec la liste des recettes
   */
  private renderRecipes() {
    const title = this.config?.title?.trim();

    return html`
      <ha-card>
        <div class="card-content">
          ${title ? this.renderHeader(title) : ''}
          <div class="recipes-container">${this.recipes.map((recipe) => this.renderRecipe(recipe))}</div>
        </div>
      </ha-card>
    `;
  }

  /**
   * Rendu d'une carte de recette individuelle
   */
  private renderRecipe(recipe: MealieRecipe) {
    return html`
      <div class="recipe-card">
        ${this.renderRecipeImage(recipe, this.config.clickable, this.config.show_image)}

        <div class="recipe-info">
          ${this.renderRecipeName(recipe, this.config.clickable)} 
          ${this.renderRecipeDescription(recipe.description)}
          ${this.renderRecipeTimes(
            recipe,
            this.config.show_prep_time,
            this.config.show_perform_time,
            this.config.show_total_time
          )}
        </div>
      </div>
    `;
  }
}