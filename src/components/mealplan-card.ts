import type { MealiePlanRecipe, MealieMealplanCardConfig } from '../types';
import { css, html, unsafeCSS } from 'lit';
import { state } from 'lit/decorators.js';
import { DEFAULT_MEALPLAN_CONFIG, normalizeTodayConfig } from '../config.card';
import { getEntryTypeLabel, getMealPlan, dateFormatWithDay } from '../utils/helpers.js';
import { MealieBaseCard } from './base-card';
import mealieStyle from '../styles/style.css';
import localize from '../utils/translate.js';

import './mealplan-card-editor';

export class MealieMealplanCard extends MealieBaseCard {
  @state() protected config!: MealieMealplanCardConfig;
  @state() private recipes: MealiePlanRecipe[] = [];

  public setConfig(config: Partial<MealieMealplanCardConfig>): void {
    this.config = normalizeTodayConfig(config);
    this._initialized = false;
    this.error = null;
    if (this.hass) this.loadData();
  }

  static styles = css`
    ${unsafeCSS(mealieStyle)}
  `;
  public static getConfigElement() {
    return document.createElement('mealie-card-editor');
  }
  public static getStubConfig() {
    return DEFAULT_MEALPLAN_CONFIG as MealieMealplanCardConfig;
  }

  protected async loadData(): Promise<void> {
    if (!this.hass || !this.config || this._loading) return;

    this._loading = true;
    this.error = null;

    try {
      const mealPlanData = await getMealPlan(this.hass, {
        configEntryId: this.config.config_entry_id,
        days: this.config.day_to_show ?? 0
      });

      const mealPlans = Array.isArray(mealPlanData) ? mealPlanData : [mealPlanData];

      let recipes: MealiePlanRecipe[] = mealPlans.filter((item) => item);

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
    if (!this.hass || !this.config || this._loading) return this.renderLoading();
    if (this.error) return this.renderError();
    if (!this.recipes?.length) return this.renderEmptyState(localize('common.no_mealplan'));

    const recipesClass = this.config.recipes_layout === 'horizontal' ? 'recipes-horizontal' : 'recipes-vertical';
    const date = this.recipes[0]?.mealplan_date;
    return html`
      <ha-card>
        ${date ? html`<div class="date-label">${dateFormatWithDay(date, this.hass)}</div>` : ''}
        <div class="card-content">
          <div class="${recipesClass}">${this.recipes.map((recipe) => this.renderRecipeCard(recipe))}</div>
        </div>
        ${this.renderRecipeIframeDialog()}
      </ha-card>
    `;
  }

  private renderRecipeCard(planRecipe: MealiePlanRecipe) {
    const hasRecipe = !!planRecipe.recipe;
    const type = planRecipe.entry_type;

    return html`
      <div class="recipe-card">
        <div class="recipe-card-body">
          <div class="recipe-type">${getEntryTypeLabel(type)}</div>
          ${hasRecipe
            ? html`
                ${this.renderRecipeImage(planRecipe.recipe, this.config.clickable, this.config.show_image, this.config.group)}
                <div class="recipe-info">${this.renderRecipeName(planRecipe.recipe, this.config.clickable)} ${this.renderRecipeDescription(planRecipe.recipe.description, this.config.show_description)}</div>
                ${this.renderRecipeTimes(planRecipe.recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
              `
            : html` <div class="recipe-info">${this.renderRecipeName(planRecipe, this.config.clickable)} ${this.renderRecipeDescription(planRecipe.description, this.config.show_description)}</div> `}
        </div>
      </div>
    `;
  }
}
