import type { MealieRecipe, MealieRecipeCardConfig, EntryType } from '../types';
import { css, html, unsafeCSS } from 'lit';
import { state } from 'lit/decorators.js';
import { DEFAULT_RECIPE_CONFIG, DEFAULT_RESULT_LIMIT, normalizeRecipeConfig } from '../config.card.js';
import { getMealieRecipes, addToMealplan } from '../utils/helpers';
import { MealieBaseCard } from './base-card';
import mealieStyle from '../styles/style.css';
import localize from '../utils/translate.js';
import './recipes-card-editor';

export class MealieRecipeCard extends MealieBaseCard {
  @state() protected config!: MealieRecipeCardConfig;
  @state() private recipes: MealieRecipe[] = [];
  @state() private showDialog = false;
  @state() private selectedRecipe: MealieRecipe | null = null;
  @state() private selectedDate = '';
  @state() private selectedEntryType: EntryType = 'dinner';

  public setConfig(config: MealieRecipeCardConfig): void {
    this.config = normalizeRecipeConfig(config);
    this._initialized = false;
    this.loadData();
  }

  protected updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('config') && this.config) {
      this._initialized = false;
      this.loadData();
    }
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
    ${unsafeCSS(mealieStyle)}
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
    if (this._loading) return this.renderLoading();
    if (this.error) return this.renderError();
    if (!this.recipes?.length) return this.renderEmptyState(localize('common.no_recipe'));

    return html` ${this.renderRecipes()} ${this.renderDialog()} ${this.renderRecipeIframeDialog()}`;
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

  private renderRecipe(recipe: MealieRecipe) {
    return html`
      <div class="recipe-card">
        <button
          class="add-to-mealplan-button"
          @click=${(e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.openDialog(recipe);
          }}
          title="${localize('dialog.add_to_mealplan')}"
        >
          <ha-icon icon="mdi:calendar-plus"></ha-icon>
        </button>

        ${this.renderRecipeImage(recipe, this.config.clickable, this.config.show_image, this.config.group)}

        <div class="recipe-info">
          ${this.renderRecipeName(recipe, this.config.clickable)} ${this.renderRecipeDescription(recipe.description, this.config.show_description)}
          ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
        </div>
      </div>
    `;
  }

  private openDialog(recipe: MealieRecipe) {
    this.selectedRecipe = recipe;
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
    this.selectedEntryType = 'dinner';
    this.showDialog = true;
  }

  private closeDialog = () => {
    this.showDialog = false;
    this.selectedRecipe = null;
  };

  private handleDateChange = (e: CustomEvent) => {
    this.selectedDate = e.detail.value;
    this.requestUpdate();
  };

  private handleMealTypeChange = (e: CustomEvent) => {
    this.selectedEntryType = e.detail.value;
    this.requestUpdate();
  };

  private handleAddToMealplan = async () => {
    if (!this.selectedRecipe || !this.selectedDate || !this.selectedEntryType || !this.hass) {
      return;
    }
    try {
      await addToMealplan(this.hass, {
        date: this.selectedDate,
        entryType: this.selectedEntryType,
        recipeId: this.selectedRecipe.recipe_id,
        configEntryId: this.config.mealie_config_entry_id
      });
      this.closeDialog();
      this.loadData();
      this.showNotification(localize('dialog.recipe_added_success'));
    } catch (error) {
      this.showNotification(error instanceof Error ? error.message : localize('error.error_adding_recipe'));
    }
  };

  private showNotification(message: string) {
    const event = new CustomEvent('hass-notification', {
      detail: { message },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  private renderDialog() {
    if (!this.selectedRecipe || !this.showDialog) return html``;

    const imageUrl = this.config.url ? `${this.config.url}/api/media/recipes/${this.selectedRecipe.recipe_id}/images/min-original.webp` : '';
    return html`
      <ha-dialog open @closed=${this.closeDialog} .heading=${localize('dialog.add_to_mealplan')}>
        <div class="dialog-content" @closed=${(e: Event) => e.stopPropagation()}>
          <div class="dialog-recipe-info">
            ${imageUrl
              ? html`
                  <img
                    class="dialog-recipe-image"
                    src=${imageUrl}
                    alt=${this.selectedRecipe.name}
                    @error=${(e: Event) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                    }}
                  />
                `
              : ''}
            <div class="dialog-recipe-details">
              <h3 class="dialog-recipe-name">${this.selectedRecipe.name}</h3>
            </div>
          </div>

          <ha-selector .hass=${this.hass} .selector=${{ date: {} }} .value=${this.selectedDate} @value-changed=${this.handleDateChange} .label=${localize('dialog.select_date')}> </ha-selector>

          <div class="dialog-form-field">
            <ha-selector
              .hass=${this.hass}
              .selector=${{
                select: {
                  mode: 'dropdown',
                  options: [
                    { value: 'breakfast', label: localize('common.breakfast') },
                    { value: 'lunch', label: localize('common.lunch') },
                    { value: 'dinner', label: localize('common.dinner') },
                    { value: 'side', label: localize('common.side') }
                  ]
                }
              }}
              .value=${this.selectedEntryType}
              @value-changed=${this.handleMealTypeChange}
              .label=${localize('dialog.select_meal_type')}
            >
            </ha-selector>
          </div>
        </div>

        <ha-button size="small" variant="brand" appearance="accent" slot="primaryAction" @click=${this.handleAddToMealplan} ?disabled=${!this.selectedDate || !this.selectedEntryType || !this.selectedRecipe}> ${localize('dialog.add')} </ha-button>

        <ha-button size="small" variant="brand" appearance="plain" slot="secondaryAction" @click=${this.closeDialog}> ${localize('dialog.cancel')} </ha-button>
      </ha-dialog>
    `;
  }
}
