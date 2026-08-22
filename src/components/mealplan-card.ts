import type { MealiePlanRecipe, MealieMealplanCardConfig, RecipeLike } from '../types';
import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { DEFAULT_MEALPLAN_CONFIG, normalizeTodayConfig } from '../config.card';
import { getMealPlan } from '../utils/mealie-api.js';
import { getDateRange, dateFormatWithDay, resolveDayRange } from '../utils/date.js';
import { getEntryTypeLabel } from '../utils/format.js';
import { MEALPLAN_UPDATED, RECIPE_RATED, subscribeMealieEvent, type MealieSignalName, type Unsubscribe } from '../utils/events.js';
import { MealieBaseCard } from './base-card';
import type { CardAction } from '../utils/recipe-render-mixin.js';
import type { ConfirmDeleteEntry } from './mealplan-delete-dialog';

import './mealplan-card-editor';
import './recipe-dialog';
import './mealplan-note-dialog';
import './mealplan-random-dialog';
import './mealplan-edit-dialog';
import './shopping-list-dialog';
import './mealplan-delete-dialog';

type PlanRecipeData = NonNullable<MealiePlanRecipe['recipe']>;

export class MealieMealplanCard extends MealieBaseCard {
  @state() protected config!: MealieMealplanCardConfig;
  @state() private recipes: MealiePlanRecipe[] = [];
  @state() private _dialogRecipe: RecipeLike | null = null;
  @state() private _confirmDeleteEntry: ConfirmDeleteEntry | null = null;
  @state() private _noteDialogDate: string | null = null;
  @state() private _randomDialogDate: string | null = null;
  @state() private _editDialogEntry: MealiePlanRecipe | null = null;
  @state() private _shoppingRecipe: RecipeLike | null = null;

  private _midnightTimer?: ReturnType<typeof setTimeout>;

  private get _showRandomButton(): boolean {
    return this.supports('random_mealplan') && (this.config.show_random_button ?? true);
  }

  private get _showNoteButton(): boolean {
    return this.config.show_note_button ?? true;
  }

  private get _showViewRecipeButton(): boolean {
    return this.config.show_view_recipe_button ?? true;
  }

  private get _showShoppingListButton(): boolean {
    return this.supports('shopping_list') && (this.config.show_shopping_list_button ?? true);
  }

  private get _showEditMealplanButton(): boolean {
    return this.supports('edit_mealplan') && (this.config.show_edit_mealplan_button ?? true);
  }

  private get _showDeleteMealplanButton(): boolean {
    return this.supports('delete_mealplan') && (this.config.show_delete_mealplan_button ?? true);
  }

  private get _dateRange(): string[] {
    const { start, count } = resolveDayRange(this.config.day_offset, this.config.days_to_show ?? 1);
    return getDateRange(count, start);
  }

  private get _daysHorizontal(): boolean {
    return this.config.days_layout === 'horizontal';
  }

  private get _recipesHorizontal(): boolean {
    return this.config.recipes_layout === 'horizontal';
  }

  private _columnStyle(horizontal: boolean, property: string, columns: number | undefined) {
    return horizontal ? styleMap({ [property]: String(Math.max(1, Math.floor(columns ?? 2))) }) : nothing;
  }

  private _groupByDate(): Map<string, MealiePlanRecipe[]> {
    const groups = new Map<string, MealiePlanRecipe[]>();
    for (const entry of this.recipes) {
      const existing = groups.get(entry.mealplan_date);
      if (existing) existing.push(entry);
      else groups.set(entry.mealplan_date, [entry]);
    }
    return groups;
  }

  private _scheduleMidnightRefresh(): void {
    this._clearMidnightTimer();
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 5, 0);
    this._midnightTimer = setTimeout(() => {
      this._reload();
      this._scheduleMidnightRefresh();
    }, nextMidnight.getTime() - now.getTime());
  }

  private _clearMidnightTimer(): void {
    if (this._midnightTimer) {
      clearTimeout(this._midnightTimer);
      this._midnightTimer = undefined;
    }
  }

  protected watchedEntityIds(): string[] {
    return this.findMealieEntities('calendar');
  }

  protected itemCount(): number {
    return this.recipes?.length ?? 0;
  }

  protected hasOpenDialog(): boolean {
    return (
      !!this._dialogRecipe ||
      !!this._shoppingRecipe ||
      !!this._editDialogEntry ||
      !!this._confirmDeleteEntry ||
      !!this._noteDialogDate ||
      !!this._randomDialogDate
    );
  }

  protected refreshSignal(): MealieSignalName {
    return MEALPLAN_UPDATED;
  }

  protected subscribeExtras(): Unsubscribe[] {
    return [
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        this.recipes = this.recipes.map((entry) => (entry.recipe?.slug === slug ? { ...entry, recipe: { ...entry.recipe, rating } } : entry));
      }),
    ];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._scheduleMidnightRefresh();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearMidnightTimer();
  }

  public setConfig(config: Partial<MealieMealplanCardConfig>): void {
    this.config = normalizeTodayConfig(config);
    this.error = null;
    this._reload();
  }

  public static getConfigElement() {
    return document.createElement('mealie-card-editor');
  }

  public static getStubConfig() {
    return DEFAULT_MEALPLAN_CONFIG as MealieMealplanCardConfig;
  }

  protected async fetchData(): Promise<void> {
    const range = this._dateRange;
    const mealPlanData = await getMealPlan(this.hass, {
      configEntryId: this.config.config_entry_id ?? undefined,
      startDate: range[0],
      endDate: range[range.length - 1],
    });

    const entryTypes = this.config.entry_types;
    this.recipes = entryTypes?.length ? mealPlanData.filter((item) => entryTypes.includes(item.entry_type)) : mealPlanData;
  }

  protected render() {
    if (!this.hass || !this.config) return this.renderLoading();
    if (!this.config.config_entry_id) return this.renderEmptyState(this.localize('error.no_integration'));
    if (this._loading) return this.renderLoading();
    if (this.error) return this.renderError();

    const groups = this._groupByDate();

    return html`
      <ha-card>
        <div class="days-wrapper">
          <div
            class="${this._daysHorizontal ? 'days-horizontal' : 'days-vertical'}"
            style=${this._columnStyle(this._daysHorizontal, '--mealie-day-columns', this.config.days_columns)}
          >
            ${this._dateRange.map((date) => this._renderDaySection(date, groups.get(date) ?? []))}
          </div>
        </div>
        <mealie-recipe-dialog
          .hass=${this.hass}
          .recipe=${this._dialogRecipe}
          .configEntryId=${this.config.config_entry_id}
          .config=${this.config}
          .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
          ?open=${!!this._dialogRecipe}
          @dialog-closed=${() => {
            this._dialogRecipe = null;
          }}
        ></mealie-recipe-dialog>
        <mealie-mealplan-note-dialog
          .hass=${this.hass}
          .configEntryId=${this.config.config_entry_id}
          .date=${this._noteDialogDate}
          ?open=${!!this._noteDialogDate}
          @dialog-closed=${() => {
            this._noteDialogDate = null;
          }}
        ></mealie-mealplan-note-dialog>
        <mealie-mealplan-random-dialog
          .hass=${this.hass}
          .configEntryId=${this.config.config_entry_id}
          .targetDate=${this._randomDialogDate}
          ?open=${!!this._randomDialogDate}
          @dialog-closed=${() => {
            this._randomDialogDate = null;
          }}
        ></mealie-mealplan-random-dialog>
        <mealie-mealplan-edit-dialog
          .hass=${this.hass}
          .planRecipe=${this._editDialogEntry}
          .configEntryId=${this.config.config_entry_id}
          ?open=${!!this._editDialogEntry}
          @dialog-closed=${() => {
            this._editDialogEntry = null;
          }}
        ></mealie-mealplan-edit-dialog>
        <mealie-shopping-list-dialog
          .hass=${this.hass}
          .recipe=${this._shoppingRecipe}
          .configEntryId=${this.config.config_entry_id}
          .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
          ?open=${!!this._shoppingRecipe}
          @dialog-closed=${() => {
            this._shoppingRecipe = null;
          }}
        ></mealie-shopping-list-dialog>
        <mealie-mealplan-delete-dialog
          .hass=${this.hass}
          .entry=${this._confirmDeleteEntry}
          .configEntryId=${this.config.config_entry_id}
          ?open=${!!this._confirmDeleteEntry}
          @dialog-closed=${() => {
            this._confirmDeleteEntry = null;
          }}
        ></mealie-mealplan-delete-dialog>
      </ha-card>
    `;
  }

  private _renderDaySection(date: string, entries: MealiePlanRecipe[]) {
    return html`
      <div class="day-section">
        ${this._renderDayHeader(date)}
        <div class="card-content">
          ${entries.length
            ? html`<div
                class="${this._recipesHorizontal ? 'recipes-horizontal' : 'recipes-vertical'}"
                style=${this._columnStyle(this._recipesHorizontal, '--mealie-recipe-columns', this.config.recipes_columns)}
              >
                ${entries.map((planRecipe) => this._renderRecipeCard(planRecipe))}
              </div>`
            : html`<ha-alert alert-type="info">${this.localize('common.no_mealplan')}</ha-alert>`}
        </div>
      </div>
    `;
  }

  private _renderDayHeader(date: string) {
    return html`
      <div class="card-header-row">
        <div class="date-label">${dateFormatWithDay(date, this.hass)}</div>
        <div class="header-actions">
          ${this._showRandomButton
            ? this.renderIconButton({
                className: 'add-note-icon-button',
                labelKey: 'cards.random_mealplan',
                icon: 'mdi:dice-6',
                onClick: () => {
                  this._randomDialogDate = date;
                },
              })
            : nothing}
          ${this._showNoteButton
            ? this.renderIconButton({
                className: 'add-note-icon-button',
                labelKey: 'dialog.add_note_to_mealplan',
                icon: 'mdi:note-plus-outline',
                onClick: () => {
                  this._noteDialogDate = date;
                },
              })
            : nothing}
        </div>
      </div>
    `;
  }

  private _renderRecipeCard(planRecipe: MealiePlanRecipe) {
    return html`
      <div class="recipe-card">
        <div class="recipe-card-body">
          <div class="recipe-type">${getEntryTypeLabel(planRecipe.entry_type, this.hass?.locale?.language)}</div>
          ${planRecipe.recipe ? this._renderRecipeWithData(planRecipe.recipe, planRecipe) : this._renderRecipeWithoutData(planRecipe)}
        </div>
      </div>
    `;
  }

  private _mealplanActions(planRecipe: MealiePlanRecipe, name: string): CardAction[] {
    const actions: CardAction[] = [];
    if (this._showEditMealplanButton) {
      actions.push({
        className: 'edit-mealplan-button',
        labelKey: 'cards.edit_mealplan',
        icon: 'mdi:pencil',
        onClick: () => {
          this._editDialogEntry = planRecipe;
        },
      });
    }
    if (this._showDeleteMealplanButton) {
      actions.push({
        className: 'delete-mealplan-button',
        labelKey: 'cards.delete_mealplan',
        icon: 'mdi:trash-can-outline',
        onClick: () => {
          this._confirmDeleteEntry = {
            id: planRecipe.mealplan_id,
            name,
            entryType: planRecipe.entry_type,
            date: planRecipe.mealplan_date,
          };
        },
      });
    }
    return actions;
  }

  private _renderRecipeWithData(recipe: PlanRecipeData, planRecipe: MealiePlanRecipe) {
    const actions: CardAction[] = [];
    if (this._showViewRecipeButton) {
      actions.push({
        className: 'view-recipe-button',
        labelKey: 'cards.view_recipe',
        icon: 'mdi:book-open-variant',
        onClick: () => {
          if (this.openRecipe(recipe)) this._dialogRecipe = recipe;
        },
      });
    }
    if (this._showShoppingListButton) {
      actions.push({
        className: 'shopping-list-button',
        labelKey: 'dialog.add_to_shopping_list',
        icon: 'mdi:cart-plus',
        onClick: () => {
          this._shoppingRecipe = recipe;
        },
      });
    }
    actions.push(...this._mealplanActions(planRecipe, recipe.name));

    return html`
      ${this.renderRecipeMedia(recipe, this.config.show_image, actions)}
      <div class="recipe-title">${this.renderRecipeName(recipe)}</div>
      <div class="recipe-meta">
        ${this._renderInteractiveRating(recipe, this.config.show_rating, this.config.config_entry_id)}
        ${this.renderServings(recipe.recipe_servings, this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(recipe.description ?? '', this.config.show_description)}
      ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
    `;
  }

  private _renderRecipeWithoutData(planRecipe: MealiePlanRecipe) {
    return html`
      ${this.renderRecipeMedia(planRecipe, false, this._mealplanActions(planRecipe, planRecipe.title ?? ''))}
      <div class="recipe-title">${this.renderRecipeName(planRecipe)}</div>
      ${this.renderRecipeDescription(planRecipe.description ?? '', true)}
    `;
  }
}
