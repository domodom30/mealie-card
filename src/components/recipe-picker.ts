import { html, LitElement, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { ADD_RECIPE_RESULT_LIMIT, SEARCH_DEBOUNCE_MS } from '../config.card.js';
import { cardStyles } from '../styles/card.styles';
import type { HomeAssistant, MealieRecipe, ValueChangedEvent } from '../types';
import { defineOnce } from '../utils/define-once.js';
import { fireEvent } from '../utils/fire-event.js';
import { LocalizableMixin } from '../utils/localize-mixin.js';
import { getMealieRecipes } from '../utils/mealie-api.js';
import { renderRecipeImageTemplate } from '../utils/recipe-render-mixin';
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

@defineOnce('mealie-recipe-picker')
export class MealieRecipePicker extends LocalizableMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() configEntryId: string | null = null;
  @property({ attribute: false }) imageBaseUrls: string[] = [];
  @property({ type: Boolean }) showImage = false;
  @property() value = '';

  @state() private _recipes: SelectableRecipe[] = [];
  @state() private _searching = false;
  @state() private _view: PickerView = loadPickerView();

  private _searchDebounce: ReturnType<typeof setTimeout> | null = null;
  private _searchRequest = 0;

  static readonly styles = cardStyles;

  protected firstUpdated(changedProps: Map<string, unknown>): void {
    super.firstUpdated(changedProps);
    void this._search('');
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._cancelPendingSearch();
    this._searchRequest += 1;
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
      if (request === this._searchRequest) fireEvent(this, 'hass-notification', { message: this.localizeError(error) });
    }

    if (request !== this._searchRequest) return;
    this._searching = false;
    this._recipes = selectableRecipes(recipes);
    if (this.value && !this._recipes.some((recipe) => recipe.recipe_id === this.value)) this._select('');
  }

  private _select(recipeId: string): void {
    this.value = recipeId;
    this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: recipeId } }));
  }

  private readonly _toggleView = (): void => {
    this._view = this._view === 'list' ? 'grid' : 'list';
    savePickerView(this._view);
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
        .value=${this.value}
        .label=${this.localize('dialog.select_recipe')}
        .required=${false}
        @value-changed=${(e: ValueChangedEvent<string>) => {
          e.stopPropagation();
          this._select(e.detail.value);
        }}
      ></ha-selector>
    `;
  }

  private _renderThumbnail(recipe: SelectableRecipe): TemplateResult {
    const image = renderRecipeImageTemplate(this.hass, recipe, {
      urls: this.imageBaseUrls,
      variant: 'tiny',
      containerClass: 'recipe-thumb',
      imgClass: 'recipe-thumb-img',
    });
    return image === nothing ? html`<div class="recipe-thumb image-error"></div>` : image;
  }

  private _renderRecipeOption(recipe: SelectableRecipe): TemplateResult {
    const selected = recipe.recipe_id === this.value;
    return html`
      <button
        type="button"
        role="radio"
        class="recipe-option ${selected ? 'selected' : ''}"
        aria-checked=${selected ? 'true' : 'false'}
        @click=${() => this._select(recipe.recipe_id)}
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

  private _renderResults(): TemplateResult {
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

  protected render(): TemplateResult {
    return html`
      <div class="dialog-body">
        <div class="card-toolbar">
          <mealie-recipe-search
            .placeholder=${this.localize('common.search_placeholder')}
            @search-changed=${(e: ValueChangedEvent<string>) => this._onSearch(e.detail.value)}
          ></mealie-recipe-search>
          ${this._renderViewToggle()}
        </div>
        ${this._renderResults()}
      </div>
    `;
  }
}
