import { html, css, unsafeCSS } from 'lit';
import { state } from 'lit/decorators.js';
import type { MealieRecipeCardConfig, MealieRecipe } from '../types';
import { getMealieRecipes } from '../utils/helpers';
import cardStyles from '../styles/recipes.css';
import './mealie-recipe-card-editor';
import localize from '../utils/translate.js';
import { DEFAULT_RECIPE_CONFIG, DEFAULT_RESULT_LIMIT, normalizeRecipeConfig } from '../config.card.js';
import { MealieBaseCard } from './mealie-base-card';

export class MealieRecipeCard extends MealieBaseCard {
  @state() protected config!: MealieRecipeCardConfig;
  @state() private recipes: MealieRecipe[] = [];

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = normalizeRecipeConfig(config);
    this._initialized = false;
    this.error = null;
    if (this.hass) this.loadData();
  }

  protected async loadData(): Promise<void> {
    if (!this.hass || !this.config || this._loading) return;

    this._loading = true;
    this.error = null;

    try {
      this.validateAndSetMealieUrl();
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
  public static getConfigElement() {
    return document.createElement('mealie-recipe-card-editor');
  }
  public static getStubConfig() {
    return { ...DEFAULT_RECIPE_CONFIG } as MealieRecipeCardConfig;
  }

  protected render() {
    const title = this.config?.title || localize('common.recipe_title');

    if (!this.hass || !this.config || this._loading) return this.renderLoading(title);
    if (this.error) return this.renderError(title);
    if (!this.recipes?.length) return this.renderEmptyState(title, localize('common.no_recipes'));

    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <div class="title">${title}</div>
            </div>
          </div>
          <div class="recipes-container">
            ${this.recipes.map(
              (recipe) => html`
                <div class="recipe-card">
                  ${this.renderRecipeImage(recipe, this.config.clickable, this.config.show_image)}
                  <div class="recipe-info">
                    ${this.renderRecipeName(recipe, this.config.clickable)} ${this.renderRecipeDescription(recipe.description)} ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </ha-card>
    `;
  }
}
