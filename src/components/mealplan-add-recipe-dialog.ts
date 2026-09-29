import { html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { ADD_RECIPE_RESULT_LIMIT, SEARCH_DEBOUNCE_MS } from '../config.card.js';
import { addToMealplan, getMealieRecipes } from '../utils/mealie-api.js';
import { getLocalDateString } from '../utils/date.js';
import { MEALPLAN_UPDATED } from '../utils/events.js';
import { fireEvent } from '../utils/fire-event.js';
import { renderRecipeImageTemplate } from '../utils/recipe-render-mixin';
import type { EntryType, MealieRecipe, ValueChangedEvent } from '../types';
import { MealieBaseDialog } from './base-dialog.js';
import { defineOnce } from '../utils/define-once.js';
import './recipe-search';

type PickerView = 'list' | 'grid';

type SelectableRecipe = MealieRecipe & { recipe_id: string };

const PICKER_VIEW_STORAGE_KEY = 'mealie-card:add-recipe-view';

function loadPickerView(): PickerView {
  try {
    return localStorage.getItem(PICKER_VIEW_STORAGE_KEY) === 'grid' ? 'grid' : 'list';
  } catch {
    return 'list';
  }
}

function savePickerView(view: PickerView): void {
  try {
    localStorage.setItem(PICKER_VIEW_STORAGE_KEY, view);
  } catch {
    return;
  }
}

function selectableRecipes(recipes: MealieRecipe[]): SelectableRecipe[] {
  return recipes.filter((recipe): recipe is SelectableRecipe => !!recipe.recipe_id);
}

function toRecipeOptions(recipes: SelectableRecipe[]): { value: string; label: string }[] {
  return recipes.map((recipe) => ({ value: recipe.recipe_id, label: recipe.name }));
}

@defineOnce('mealie-mealplan-add-recipe-dialog')
export class MealieMealplanAddRecipeDialog extends MealieBaseDialog {
  @property() date: string | null = null;
  @property() effectiveUrl: string | undefined;
  @property({ type: Boolean }) showImage = false;

  @state() private _date = '';
  @state() private _entryType: EntryType = 'dinner';
  @state() private _recipes: SelectableRecipe[] = [];
  @state() private _recipeId = '';
  @state() private _searching = false;
  @state() private _view: PickerView = loadPickerView();

  private _searchDebounce: ReturnType<typeof setTimeout> | null = null;
  private _searchRequest = 0;

  protected onOpen(): void {
    this._date = this.date ?? getLocalDateString(new Date());
    this._entryType = 'dinner';
    this._recipes = [];
    this._recipeId = '';
    this._cancelPendingSearch();
    void this._search('');
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._cancelPendingSearch();
  }

  private _cancelPendingSearch(): void {
    if (!this._searchDebounce) return;
    clearTimeout(this._searchDebounce);
    this._searchDebounce = null;
  }

  private _onSearch(value: string): void {
    this._cancelPendingSearch();
    this._searchDebounce = setTimeout(() => {
      this._searchDebounce = null;
      void this._search(value.trim());
    }, SEARCH_DEBOUNCE_MS);
  }

  private async _search(query: string): Promise<void> {
    const request = ++this._searchRequest;
    this._searching = true;

    let recipes: MealieRecipe[] = [];
    try {
      recipes = await getMealieRecipes(this.hass, {
        configEntryId: this.configEntryId ?? undefined,
        resultLimit: ADD_RECIPE_RESULT_LIMIT,
        search: query || undefined,
      });
    } catch (error) {
      if (this.open && request === this._searchRequest) fireEvent(this, 'hass-notification', { message: this.localizeError(error) });
    }

    if (request !== this._searchRequest) return;
    this._searching = false;
    this._showRecipes(recipes);
  }

  private _showRecipes(recipes: MealieRecipe[]): void {
    this._recipes = selectableRecipes(recipes);
    if (!this._recipes.some((recipe) => recipe.recipe_id === this._recipeId)) this._recipeId = '';
  }

  private _toggleView = (): void => {
    this._view = this._view === 'list' ? 'grid' : 'list';
    savePickerView(this._view);
  };

  private _handleAdd = () => {
    const recipeId = this._recipeId;
    if (!recipeId || !this._date || !this._entryType || !this.hass) return;

    void this.submit({
      run: () =>
        addToMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          recipeId,
          configEntryId: this.configEntryId ?? undefined,
        }),
      success: 'dialog.recipe_added_success',
      errorKey: 'error.error_adding_recipe',
      signal: MEALPLAN_UPDATED,
    });
  };

  private _renderViewToggle(): TemplateResult | typeof nothing {
    if (!this.showImage) return nothing;

    const isList = this._view === 'list';
    return html`
      <ha-icon-button .label=${this.localize(isList ? 'dialog.view_as_grid' : 'dialog.view_as_list')} @click=${this._toggleView}>
        <ha-icon icon=${isList ? 'mdi:view-grid-outline' : 'mdi:view-list-outline'}></ha-icon>
      </ha-icon-button>
    `;
  }

  private _renderRecipeSelector(): TemplateResult {
    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: 'list', options: toRecipeOptions(this._recipes) } }}
        .value=${this._recipeId}
        .label=${this.localize('dialog.select_recipe')}
        .required=${false}
        @value-changed=${(e: ValueChangedEvent<string>) => {
          this._recipeId = e.detail.value;
        }}
      ></ha-selector>
    `;
  }

  private _renderThumbnail(recipe: SelectableRecipe): TemplateResult {
    const image = renderRecipeImageTemplate(this.hass, recipe, {
      url: this.effectiveUrl,
      variant: 'tiny',
      containerClass: 'recipe-thumb',
      imgClass: 'recipe-thumb-img',
    });
    return image === nothing ? html`<div class="recipe-thumb image-error"></div>` : image;
  }

  private _renderRecipeOption(recipe: SelectableRecipe): TemplateResult {
    const selected = recipe.recipe_id === this._recipeId;
    return html`
      <button
        type="button"
        role="radio"
        class="recipe-option ${selected ? 'selected' : ''}"
        aria-checked=${selected ? 'true' : 'false'}
        @click=${() => {
          this._recipeId = recipe.recipe_id;
        }}
      >
        ${this._renderThumbnail(recipe)}
        <span class="recipe-option-name">${recipe.name}</span>
      </button>
    `;
  }

  private _renderRecipeOptions(): TemplateResult {
    return html`
      <div class="recipe-options-${this._view}" role="radiogroup" aria-label=${this.localize('dialog.select_recipe')}>
        ${repeat(
          this._recipes,
          (recipe) => recipe.recipe_id,
          (recipe) => this._renderRecipeOption(recipe)
        )}
      </div>
    `;
  }

  private _renderRecipePicker(): TemplateResult {
    if (!this._recipes.length) {
      return this._searching
        ? html`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize('editor.loading')}</div>`
        : html`<ha-alert alert-type="info">${this.localize('common.no_recipe')}</ha-alert>`;
    }

    return html`
      <div class="recipe-picker" aria-busy=${this._searching ? 'true' : 'false'}>
        ${this.showImage ? this._renderRecipeOptions() : this._renderRecipeSelector()}
      </div>
    `;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.open) return nothing;

    return html`
      <ha-dialog .open=${this.open} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize('dialog.add_recipe_to_mealplan')}</span>

        <div class="dialog-body">
          <div class="card-toolbar">
            <mealie-recipe-search
              .placeholder=${this.localize('common.search_placeholder')}
              @search-changed=${(e: ValueChangedEvent<string>) => this._onSearch(e.detail.value)}
            ></mealie-recipe-search>
            ${this._renderViewToggle()}
          </div>
          ${this._renderRecipePicker()} ${this.renderDateSelector(this._date, (v) => (this._date = v))}
          ${this.renderEntryTypeSelector(this._entryType, (v) => (this._entryType = v))}
        </div>

        ${this.renderPrimaryFooter('dialog.add', this._handleAdd, !this._recipeId || !this._date || !this._entryType || this._submitting)}
      </ha-dialog>
    `;
  }
}
