import { css, html, unsafeCSS } from 'lit';
import { state } from 'lit/decorators.js';
import { DEFAULT_TODAY_CONFIG, normalizeTodayConfig } from '../config.card';
import cardStyles from '../styles/card.css';
import type { MealiePlanRecipe, MealieTodayCardConfig } from '../types';
import { formatDate, getEntryTypeLabel, getMealPlan, groupRecipesByDate, groupRecipesByType } from '../utils/helpers.js';
import localize from '../utils/translate.js';
import { MealieBaseCard } from './mealie-base-card';
import './mealie-card-editor';

export class MealieTodayCard extends MealieBaseCard {
  @state() protected config!: MealieTodayCardConfig;
  @state() private recipes: MealiePlanRecipe[] = [];

  public setConfig(config: Partial<MealieTodayCardConfig>): void {
    this.config = normalizeTodayConfig(config);
    this._initialized = false;
    this.error = null;
    if (this.hass) this.loadData();
  }

  static styles = css`
    ${unsafeCSS(cardStyles)}
  `;
  public static getConfigElement() {
    return document.createElement('mealie-card-editor');
  }
  public static getStubConfig() {
    return DEFAULT_TODAY_CONFIG as MealieTodayCardConfig;
  }

  protected async loadData(): Promise<void> {
    if (!this.hass || !this.config || this._loading) return;

    this._loading = true;
    this.error = null;

    try {
      this.validateAndSetMealieUrl();

      const mealPlanData = await getMealPlan(this.hass, {
        configEntryId: this.config.config_entry_id,
        days: this.config.days_to_show ?? 1
      });

      const mealPlans = Array.isArray(mealPlanData) ? mealPlanData : [mealPlanData];
      let recipes: MealiePlanRecipe[] = mealPlans.filter((item) => item?.recipe);

      if (this.config.entry_types?.length) {
        recipes = recipes.filter((item) => this.config.entry_types!.includes(item.entry_type));
      }

      this.recipes = recipes;
      this._initialized = true;
    } catch (err) {
      this.error = err instanceof Error ? err.message : localize('error.error_loading');
    } finally {
      this._loading = false;
    }
  }

  protected render() {
    const title = this.config?.title || localize('common.today_title');

    if (!this.hass || !this.config || this._loading) return this.renderLoading(title);
    if (this.error) return this.renderError(title);
    if (!this.recipes?.length) return this.renderEmptyState(title, localize('common.no_recipes_today'));

    const recipesByDate = groupRecipesByDate(this.recipes);
    const sortedDates = Object.entries(recipesByDate).sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());

    return html` <div class="dates-horizontal-container">${sortedDates.map(([date, recipes]) => this.renderDateCard(date, recipes))}</div> `;
  }

  private renderDateCard(date: string, recipes: MealiePlanRecipe[]) {
    const recipesByType = groupRecipesByType(recipes);

    return html`
      <ha-card>
        <div class="card-content">
          <div class="meal-date">${formatDate(date, this.hass)}</div>
          <div class="recipes-horizontal">${Object.entries(recipesByType).map(([type, typeRecipes]) => this.renderTypeGroup(type, typeRecipes))}</div>
        </div>
      </ha-card>
    `;
  }

  private renderTypeGroup(type: string, recipes: MealiePlanRecipe[]) {
    return html`
      <div class="type-group">
        <div class="entry-type-header">${getEntryTypeLabel(type)}</div>
        ${recipes.map(
          (recipe) => html`
            <div class="recipe-card">
              <div class="recipe-card-body">
                ${this.renderRecipeImage(recipe.recipe, this.config.clickable, this.config.show_image)}
                <div class="recipe-info">
                  ${this.renderRecipeName(recipe.recipe, this.config.clickable)} ${this.renderRecipeDescription(recipe.recipe.description)}
                  ${this.renderRecipeTimes(recipe.recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
                </div>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}
