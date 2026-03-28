import type { MealiePlanRecipe, MealieMealplanCardConfig } from "../types";
import { html, nothing } from "lit";
import { state } from "lit/decorators.js";
import { DEFAULT_MEALPLAN_CONFIG, normalizeTodayConfig } from "../config.card";
import { getEntryTypeLabel, getMealPlan, getLocalDateString, dateFormatWithDay } from "../utils/helpers.js";
import { MealieBaseCard } from "./base-card";
import { cardStyles } from "../styles/card.styles";

import "./mealplan-card-editor";
import "./recipe-dialog";

type PlanRecipeData = NonNullable<MealiePlanRecipe["recipe"]>;

export class MealieMealplanCard extends MealieBaseCard {
  @state() protected config!: MealieMealplanCardConfig;
  @state() private recipes: MealiePlanRecipe[] = [];
  @state() private _dialogRecipe: any | null = null;

  public setConfig(config: Partial<MealieMealplanCardConfig>): void {
    this.config = normalizeTodayConfig(config);
    this._initialized = false;
    this.error = null;
    if (this.hass) this.loadData();
  }

  static styles = cardStyles;
  public static getConfigElement() {
    return document.createElement("mealie-card-editor");
  }
  public static getStubConfig() {
    return DEFAULT_MEALPLAN_CONFIG as MealieMealplanCardConfig;
  }

  protected async loadData(): Promise<void> {
    if (!this.hass || !this.config || this._loading || this._initialized) return;
    if (!this.config.config_entry_id) return;

    this._loading = true;
    this.error = null;

    try {
      const offset = this.config.day_offset ?? 0;
      const target = new Date();
      target.setDate(target.getDate() + offset);
      const targetDate = getLocalDateString(target);

      const mealPlanData = await getMealPlan(this.hass, {
        configEntryId: this.config.config_entry_id,
        startDate: targetDate,
        endDate: targetDate,
      });

      let recipes: MealiePlanRecipe[] = [...mealPlanData];

      if (this.config.entry_types?.length) {
        recipes = recipes.filter((item) => this.config.entry_types!.includes(item.entry_type));
      }

      this.recipes = recipes;
      this._initialized = true;
    } catch (err) {
      this.handleError(err);
    } finally {
      this._loading = false;
    }
  }

  protected render() {
    if (!this.hass || !this.config) return this.renderLoading();
    if (!this.config.config_entry_id) return this.renderEmptyState(this.localize("error.no_integration"));
    if (this._loading) return this.renderLoading();
    if (this.error) return this.renderError();
    if (!this.recipes?.length) return this.renderEmptyState(this.localize("common.no_mealplan"));

    return html`
      <ha-card>
        ${this.renderDateHeader()}
        <div class="card-content">
          <div class="${this.config.recipes_layout === "horizontal" ? "recipes-horizontal" : "recipes-vertical"}">
            ${this.recipes.map((recipe) => this.renderRecipeCard(recipe))}
          </div>
        </div>
        <mealie-recipe-dialog
          .hass=${this.hass}
          .recipe=${this._dialogRecipe}
          .configEntryId=${this.config.config_entry_id}
          .config=${this.config}
          ?open=${!!this._dialogRecipe}
          @dialog-closed=${() => {
            this._dialogRecipe = null;
          }}
        ></mealie-recipe-dialog>
      </ha-card>
    `;
  }

  private renderDateHeader() {
    const date = this.recipes[0]?.mealplan_date;
    if (!date) return nothing;
    return html`<div class="date-label">${dateFormatWithDay(date, this.hass)}</div>`;
  }

  private renderRecipeCard(planRecipe: MealiePlanRecipe) {
    return html`
      <div class="recipe-card">
        <div class="recipe-card-body">
          <div class="recipe-type">${getEntryTypeLabel(planRecipe.entry_type, this.hass?.locale?.language)}</div>
          ${planRecipe.recipe ? this.renderRecipeWithData(planRecipe.recipe) : this.renderRecipeWithoutData(planRecipe)}
        </div>
      </div>
    `;
  }

  private renderRecipeWithData(recipe: PlanRecipeData) {
    return html`
      ${this.renderCardButtons(recipe)} ${this.renderRecipeImage(recipe, this.config.show_image)}
      <div class="recipe-info">${this.renderRecipeName(recipe)} ${this.renderStarRating(recipe.rating, this.config.show_rating)} ${this.renderRecipeDescription(recipe.description ?? "", this.config.show_description)}</div>
      ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
    `;
  }

  private renderRecipeWithoutData(planRecipe: MealiePlanRecipe) {
    return html` <div class="recipe-info">${this.renderRecipeName(planRecipe)} ${this.renderRecipeDescription(planRecipe.description ?? "", true)}</div> `;
  }

  private renderCardButtons(recipe: PlanRecipeData) {
    return html`
      <div class="card-buttons">
        <button
          class="view-recipe-button"
          title="${this.localize("cards.view_recipe")}"
          @click=${() => {
            this._dialogRecipe = recipe;
          }}
        >
          <ha-icon icon="mdi:book-open-variant"></ha-icon>
        </button>
      </div>
    `;
  }
}
