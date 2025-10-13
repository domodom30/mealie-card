import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { normalizeTodayConfig, DEFAULT_TODAY_CONFIG } from '../config.card';
import { getMealPlan, formatTime, formatDate, getEntryTypeLabel, groupRecipesByType, groupRecipesByDate, getRecipeImageUrl, getRecipeUrl } from '../utils/helpers.js';
import localize from '../utils/translate.js';
import type { MealieTodayCardConfig, MealiePlanRecipe } from '../types';
import cardStyles from '../styles/card.css';
import './mealie-card-editor';

export class MealieTodayCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: MealieTodayCardConfig;
  @state() private recipes: MealiePlanRecipe[] = [];
  @state() private error: string | null = null;
  @state() private mealieBaseUrl: string = '';
  @state() private _loading = false;
  @state() private _initialized = false;

  public setConfig(config: Partial<MealieTodayCardConfig>): void {
    this.config = normalizeTodayConfig(config);
    this._initialized = false;
    this.error = null;

    if (this.hass) {
      this.loadRecipes();
    }
  }

  static styles = css`
    ${unsafeCSS(cardStyles)}
  `;

  public static getConfigElement(): HTMLElement {
    return document.createElement('mealie-card-editor');
  }

  public static getStubConfig(): MealieTodayCardConfig {
    return DEFAULT_TODAY_CONFIG as MealieTodayCardConfig;
  }

  protected updated(changedProps: Map<string, any>): void {
    super.updated(changedProps);

    if (changedProps.has('hass') && this.hass && !this._initialized && !this._loading) {
      this.loadRecipes();
    }
  }

  private async loadRecipes(): Promise<void> {
    if (!this.hass) {
      return;
    }

    if (!this.config) {
      return;
    }

    if (this._loading) {
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

      const mealPlanData = await getMealPlan(this.hass, {
        configEntryId: this.config.mealie_config_entry_id,
        days: this.config.days_to_show ?? 1
      });

      const mealPlans = Array.isArray(mealPlanData) ? mealPlanData : [mealPlanData];

      this.recipes = mealPlans
        .filter((item) => item && item.recipe)
        .map((item) => ({
          ...item.recipe,
          entry_type: item.entry_type,
          mealplan_date: item.mealplan_date
        }));

      this._initialized = true;
    } catch (err) {
      this.error = err instanceof Error ? err.message : localize('error.error_loading');
    } finally {
      this._loading = false;
    }
  }

  protected render() {
    if (!this.hass || !this.config) {
      return this.renderLoading();
    }

    if (this.error) {
      return this.renderError();
    }

    if (this._loading) {
      return this.renderLoading();
    }

    if (!this.recipes || this.recipes.length === 0) {
      return this.renderNoMeals();
    }

    return this.renderMeals();
  }

  private renderLoading() {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title-container">
              <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"></path>
              </svg>
              <div class="title">${this.config?.title || `${localize('common.today_title')}`}</div>
            </div>
          </div>
          <div class="loading">
            <div class="loading-text">${localize('editor.loading')}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private renderMeals() {
    const recipesByDate = groupRecipesByDate(this.recipes);
    const sortedDates = Object.entries(recipesByDate).sort(([dateA], [dateB]) => {
      return new Date(dateA).getTime() - new Date(dateB).getTime();
    });

    return html` <div class="dates-horizontal-container">${sortedDates.map(([date, recipes]) => this.renderDateCard(date, recipes))}</div> `;
  }

  private renderDateCard(date: string, recipes: MealiePlanRecipe[]) {
    const formattedDate = formatDate(date);
    const recipesByType = groupRecipesByType(recipes);

    return html`
      <ha-card>
        <div class="card-content">
          <div class="meal-date">${formattedDate}</div>
          <div class="recipes-horizontal">${Object.entries(recipesByType).map(([type, typeRecipes]) => this.renderTypeGroup(type, typeRecipes))}</div>
        </div>
      </ha-card>
    `;
  }

  private renderTypeGroup(type: string, recipes: MealiePlanRecipe[]) {
    const entryTypeLabel = getEntryTypeLabel(type);

    return html`
      <div class="type-group">
        <div class="entry-type-header">${entryTypeLabel}</div>
        ${recipes.map((recipe) => this.renderRecipe(recipe))}
      </div>
    `;
  }

  private renderRecipe(recipe: MealiePlanRecipe) {
    return html`
      <div class="recipe-card">
        <div class="recipe-card-body">${this.renderRecipeImage(recipe)} ${this.renderRecipeInfo(recipe)}</div>
      </div>
    `;
  }

  private renderRecipeImage(recipe: MealiePlanRecipe) {
    if (!this.config.show_image) {
      return html``;
    }

    const imageUrl = getRecipeImageUrl(this.mealieBaseUrl, recipe.recipe_id, !!recipe.image);
    if (!imageUrl) {
      return html``;
    }

    const recipeUrl = getRecipeUrl(this.mealieBaseUrl, recipe.slug, this.config.clickable);
    const imageElement = html`
      <div class="recipe-image-container">
        <img src="${imageUrl}" alt="${recipe.name}" class="recipe-image" loading="lazy" @error=${this.handleImageError} />
      </div>
    `;

    return recipeUrl && recipeUrl !== '#' ? html` <a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-image-link"> ${imageElement} </a> ` : imageElement;
  }

  private renderRecipeInfo(recipe: MealiePlanRecipe) {
    return html` <div class="recipe-info">${this.renderRecipeName(recipe)} ${this.renderRecipeDescription(recipe)} ${this.renderRecipeTimes(recipe)}</div> `;
  }

  private renderRecipeName(recipe: MealiePlanRecipe) {
    const recipeUrl = getRecipeUrl(this.mealieBaseUrl, recipe.slug, this.config.clickable);
    const nameElement = html`<h3 class="recipe-name">${recipe.name}</h3>`;

    return recipeUrl && recipeUrl !== '#' ? html` <a href="${recipeUrl}" target="_blank" rel="noopener noreferrer" class="recipe-name-link"> ${nameElement} </a> ` : nameElement;
  }

  private renderRecipeDescription(recipe: MealiePlanRecipe) {
    return recipe.description ? html`<p class="recipe-description">${recipe.description}</p>` : html``;
  }

  private renderRecipeTimes(recipe: MealiePlanRecipe) {
    const timeBadges = [
      this.config.show_prep_time && recipe.prep_time ? this.renderTimeBadge('⏱️', formatTime(recipe.prep_time)) : null,
      this.config.show_perform_time && recipe.perform_time ? this.renderTimeBadge('🔥', formatTime(recipe.perform_time)) : null,
      this.config.show_total_time && recipe.total_time ? this.renderTimeBadge('⏰', formatTime(recipe.total_time)) : null
    ].filter(Boolean);

    return timeBadges.length > 0 ? html`<div class="recipe-times">${timeBadges}</div>` : html``;
  }

  private renderTimeBadge(icon: string, label: string) {
    return html`
      <div class="time-badge">
        <span class="time-icon">${icon}</span>
        <span class="time-label">${label}</span>
      </div>
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

  private renderNoMeals() {
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
            <div class="no-meals-text">${localize('common.no_recipes_today')}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private renderError() {
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
            <div class="error-text">${this.error}</div>
          </div>
        </div>
      </ha-card>
    `;
  }
}
