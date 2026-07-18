import type { EntryType, MealiePlanRecipe, MealieMealplanCardConfig, RecipeLike } from '../types';
import { html, nothing, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { fireEvent } from '../utils/fire-event.js';
import { DEFAULT_MEALPLAN_CONFIG, normalizeTodayConfig, MEALIE_DOMAIN } from '../config.card';
import { getMealPlan, deleteMealplanEntry, setRandomMealplan } from '../utils/mealie-api.js';
import { getDateRange, dateFormatWithDay } from '../utils/date.js';
import { getEntryTypeLabel } from '../utils/format.js';
import { MEALPLAN_UPDATED, RECIPE_RATED, subscribeMealieEvent, subscribeMealieSignal, Unsubscribe } from '../utils/events.js';
import { MealieBaseCard } from './base-card';

import './mealplan-card-editor';
import './recipe-dialog';
import './mealplan-note-dialog';
import './mealplan-random-dialog';
import './mealplan-edit-dialog';
import './shopping-list-dialog';

type PlanRecipeData = NonNullable<MealiePlanRecipe['recipe']>;

interface ConfirmDeleteEntry {
  id: number;
  name: string;
  entryType: string;
  date: string;
}

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
  private _unsubscribers: Unsubscribe[] = [];

  private get _canDeleteMealplan(): boolean {
    return !!this.hass?.services?.[MEALIE_DOMAIN]?.['delete_mealplan'];
  }

  private get _canUpdateMealplan(): boolean {
    return !!this.hass?.services?.[MEALIE_DOMAIN]?.['update_mealplan'];
  }

  private get _canRandomMealplan(): boolean {
    return !!this.hass?.services?.[MEALIE_DOMAIN]?.['set_random_mealplan'];
  }

  private get _showRandomButton(): boolean {
    return this._canRandomMealplan && (this.config.show_random_button ?? true);
  }

  private get _dateRange(): string[] {
    return getDateRange(this.config.days_to_show ?? 1);
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

  connectedCallback(): void {
    super.connectedCallback();
    this._initialized = false;
    this._unsubscribers = [
      subscribeMealieSignal(MEALPLAN_UPDATED, () => this._reload()),
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        this.recipes = this.recipes.map((entry) => (entry.recipe?.slug === slug ? { ...entry, recipe: { ...entry.recipe!, rating } } : entry));
      }),
    ];
    this._scheduleMidnightRefresh();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._unsubscribers.forEach((unsubscribe) => unsubscribe());
    this._unsubscribers = [];
    this._clearMidnightTimer();
  }

  public setConfig(config: Partial<MealieMealplanCardConfig>): void {
    this.config = normalizeTodayConfig(config);
    this._initialized = false;
    this.error = null;
    if (this.hass) this.loadData();
  }

  public static getConfigElement() {
    return document.createElement('mealie-card-editor');
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
      const range = this._dateRange;
      const mealPlanData = await getMealPlan(this.hass, {
        configEntryId: this.config.config_entry_id,
        startDate: range[0],
        endDate: range[range.length - 1],
      });

      const entryTypes = this.config.entry_types;
      this.recipes = entryTypes?.length ? mealPlanData.filter((item) => entryTypes.includes(item.entry_type)) : mealPlanData;
      this._initialized = true;
    } catch (err) {
      this.handleError(err);
    } finally {
      this._loading = false;
    }
  }

  private async _handleRandomMealplan(date: string, entryType: EntryType, mealplanId: number): Promise<void> {
    try {
      const configEntryId = this.config.config_entry_id ?? undefined;
      await setRandomMealplan(this.hass, { configEntryId, date, entryType });
      await deleteMealplanEntry(this.hass, mealplanId, configEntryId);
      this._reload();
    } catch {
      fireEvent(this, 'hass-notification', { message: this.localize('error.error_adding_recipe') });
    }
  }

  private async _handleDelete(): Promise<void> {
    const mealplanId = this._confirmDeleteEntry?.id ?? null;
    this._confirmDeleteEntry = null;
    if (mealplanId === null) return;

    try {
      await deleteMealplanEntry(this.hass, mealplanId, this.config.config_entry_id ?? undefined);
      fireEvent(this, 'hass-notification', { message: this.localize('dialog.mealplan_deleted_success') });
      this._reload();
    } catch {
      fireEvent(this, 'hass-notification', { message: this.localize('error.error_deleting_mealplan') });
    }
  }

  protected render() {
    if (!this.hass || !this.config) return this.renderLoading();
    if (!this.config.config_entry_id) return this.renderEmptyState(this.localize('error.no_integration'));
    if (this._loading) return this.renderLoading();
    if (this.error) return this.renderError();

    const groups = this._groupByDate();

    return html`
      <ha-card>
        <div class="${this.config.days_layout === 'horizontal' ? 'days-horizontal' : 'days-vertical'}">
          ${this._dateRange.map((date) => this._renderDaySection(date, groups.get(date) ?? []))}
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
        ${this._renderConfirmDeleteDialog()}
      </ha-card>
    `;
  }

  private _renderIconButton(className: string, titleKey: string, icon: string, onClick: () => void): TemplateResult {
    return html`
      <ha-icon-button class="${className}" .label=${this.localize(titleKey)} @click=${onClick}>
        <ha-icon icon="${icon}"></ha-icon>
      </ha-icon-button>
    `;
  }

  private _renderDaySection(date: string, entries: MealiePlanRecipe[]) {
    return html`
      <div class="day-section">
        ${this._renderDayHeader(date)}
        <div class="card-content">
          ${entries.length
            ? html`<div class="${this.config.recipes_layout === 'horizontal' ? 'recipes-horizontal' : 'recipes-vertical'}">
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
            ? this._renderIconButton('add-note-icon-button', 'cards.random_mealplan', 'mdi:dice-6', () => {
                this._randomDialogDate = date;
              })
            : nothing}
          ${this._renderIconButton('add-note-icon-button', 'dialog.add_note_to_mealplan', 'mdi:note-plus-outline', () => {
            this._noteDialogDate = date;
          })}
        </div>
      </div>
    `;
  }

  private _renderConfirmDeleteDialog() {
    const entry = this._confirmDeleteEntry;
    return html`
      <ha-dialog
        .open=${entry !== null}
        .hass=${this.hass}
        width="small"
        @closed=${() => {
          this._confirmDeleteEntry = null;
        }}
      >
        <div slot="headerTitle">${this.localize('dialog.confirm_delete_title')}</div>
        <div>
          ${entry
            ? html`
                <div class="confirm-delete-body">
                  <div class="confirm-delete-meta">
                    <span class="confirm-delete-type">${getEntryTypeLabel(entry.entryType, this.hass?.locale?.language)}</span>
                    <span class="confirm-delete-date">${dateFormatWithDay(entry.date, this.hass)}</span>
                  </div>
                  <div class="confirm-delete-name">${entry.name}</div>
                </div>
              `
            : nothing}
        </div>
        <ha-dialog-footer slot="footer">
          <ha-button
            size="small"
            variant="danger"
            appearance="accent"
            slot="secondaryAction"
            @click=${() => {
              this._confirmDeleteEntry = null;
            }}
          >
            ${this.localize('dialog.cancel')}
          </ha-button>
          <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${() => this._handleDelete()}>
            ${this.localize('dialog.confirm')}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
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

  private _renderMealplanActions(planRecipe: MealiePlanRecipe, name: string): TemplateResult {
    return html`
      ${this._canUpdateMealplan
        ? this._renderIconButton('edit-mealplan-button', 'cards.edit_mealplan', 'mdi:pencil', () => {
            this._editDialogEntry = planRecipe;
          })
        : nothing}
      ${this._canDeleteMealplan
        ? this._renderIconButton('delete-mealplan-button', 'cards.delete_mealplan', 'mdi:trash-can-outline', () => {
            this._confirmDeleteEntry = {
              id: planRecipe.mealplan_id,
              name,
              entryType: planRecipe.entry_type,
              date: planRecipe.mealplan_date,
            };
          })
        : nothing}
    `;
  }

  private _renderRecipeWithData(recipe: PlanRecipeData, planRecipe: MealiePlanRecipe) {
    return html`
      <div class="card-buttons">
        ${this._renderIconButton('view-recipe-button', 'cards.view_recipe', 'mdi:book-open-variant', () => {
          this._dialogRecipe = recipe;
        })}
        ${this._shoppingListSupported
          ? this._renderIconButton('shopping-list-button', 'dialog.add_to_shopping_list', 'mdi:cart-plus', () => {
              this._shoppingRecipe = recipe;
            })
          : nothing}
        ${this._renderMealplanActions(planRecipe, recipe.name)}
      </div>
      ${this.renderRecipeImage(recipe, this.config.show_image)}
      <div class="recipe-info">
        ${this.renderRecipeName(recipe)}
        <div class="recipe-meta">
          ${this._renderInteractiveRating(recipe, this.config.show_rating, this.config.config_entry_id)}
          ${this.renderServings(recipe.recipe_servings, this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(recipe.description ?? '', this.config.show_description)}
      </div>
      ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
    `;
  }

  private _renderRecipeWithoutData(planRecipe: MealiePlanRecipe) {
    return html`
      <div class="card-buttons">
        ${this._renderMealplanActions(planRecipe, planRecipe.title ?? '')}
        ${this._showRandomButton
          ? this._renderIconButton('random-mealplan-button', 'cards.random_mealplan', 'mdi:dice-6', () =>
              this._handleRandomMealplan(planRecipe.mealplan_date, planRecipe.entry_type, planRecipe.mealplan_id)
            )
          : nothing}
      </div>
      <div class="recipe-info">${this.renderRecipeName(planRecipe)} ${this.renderRecipeDescription(planRecipe.description ?? '', true)}</div>
    `;
  }
}
