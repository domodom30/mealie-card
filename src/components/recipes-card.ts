import type { MealieRecipe, MealieRecipeCardConfig } from "../types";
import { html, TemplateResult } from "lit";
import { state } from "lit/decorators.js";
import { DEFAULT_RECIPE_CONFIG, DEFAULT_RESULT_LIMIT, normalizeRecipeConfig } from "../config.card.js";
import { getMealieRecipes } from "../utils/helpers";
import { MealieBaseCard } from "./base-card";
import { cardStyles } from "../styles/card.styles";
import "./recipes-card-editor";
import "./recipe-dialog";
import "./mealplan-dialog";

export class MealieRecipeCard extends MealieBaseCard {
  @state() protected config!: MealieRecipeCardConfig;
  @state() private recipes: MealieRecipe[] = [];
  @state() private _mealplanRecipe: MealieRecipe | null = null;
  @state() private _dialogRecipe: any | null = null;

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = normalizeRecipeConfig(config);
    this._initialized = false;
    if (this.hass) this.loadData();
  }

  protected async loadData(): Promise<void> {
    if (!this.hass || this._loading || this._initialized) return;
    if (!this.config?.config_entry_id) return;

    this._loading = true;
    this.error = null;

    try {
      this.recipes = await getMealieRecipes(this.hass, {
        configEntryId: this.config.config_entry_id,
        resultLimit: this.config.result_limit ?? DEFAULT_RESULT_LIMIT,
      });
      this._initialized = true;
    } catch (err) {
      this.handleError(err);
      this._initialized = true;
    } finally {
      this._loading = false;
    }
  }

  static styles = cardStyles;

  public static getConfigElement(): HTMLElement {
    return document.createElement("mealie-recipe-card-editor");
  }

  public static getStubConfig(): MealieRecipeCardConfig {
    return {
      ...DEFAULT_RECIPE_CONFIG,
    } as MealieRecipeCardConfig;
  }

  protected render() {
    if (!this.config) return this.renderLoading();
    if (!this.config.config_entry_id) return this.renderEmptyState(this.localize("error.no_integration"));
    if (this._loading) return this.renderLoading();
    if (this.error) return this.renderError();
    if (!this.recipes?.length) return this.renderEmptyState(this.localize("common.no_recipe"));

    return html`
      ${this.renderRecipes()}
      <mealie-mealplan-dialog
        .hass=${this.hass}
        .recipe=${this._mealplanRecipe}
        .configEntryId=${this.config.config_entry_id}
        .effectiveUrl=${this.config.url}
        ?open=${!!this._mealplanRecipe}
        @dialog-closed=${() => {
          this._mealplanRecipe = null;
        }}
      ></mealie-mealplan-dialog>
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
    `;
  }

  private renderRecipes() {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="recipes-container">${this.recipes.map((recipe) => this.renderRecipe(recipe))}</div>
        </div>
      </ha-card>
    `;
  }

  private renderCardButtons(recipe: MealieRecipe): TemplateResult {
    return html`
      <div class="card-buttons">
        <button
          class="add-to-mealplan-button"
          @click=${(e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this._mealplanRecipe = recipe;
          }}
          title="${this.localize("dialog.add_to_mealplan")}"
        >
          <ha-icon icon="mdi:calendar-plus"></ha-icon>
        </button>
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

  private renderRecipeInfo(recipe: MealieRecipe): TemplateResult {
    return html`
      <div class="recipe-info">
        ${this.renderRecipeName(recipe)}
        <div class="recipe-meta">
          ${this.renderStarRating(recipe.rating, this.config.show_rating)}
          ${this.renderServings(recipe.recipe_servings, this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(recipe.description ?? "", this.config.show_description)}
        ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
      </div>
    `;
  }

  private renderRecipe(recipe: MealieRecipe): TemplateResult {
    return html`
      <div class="recipe-card">
        ${this.renderCardButtons(recipe)} ${this.renderRecipeImage(recipe, this.config.show_image)} ${this.renderRecipeInfo(recipe)}
      </div>
    `;
  }
}
