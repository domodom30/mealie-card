import type { HomeAssistant } from 'custom-card-helpers';
import { fireEvent } from './fire-event.js';
import { html, LitElement, nothing, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import type { RecipeLike, TimeRow } from '../types';
import { RECIPE_RATED, FAVORITE_TOGGLED, emitMealieEvent } from './events.js';
import { formatTime } from './format.js';
import { rateRecipe, getRecipe, addRecipeFavorite, removeRecipeFavorite, isShoppingListSupported } from './mealie-api.js';
import { buildRecipeImageUrl, resolveImageSrc, isSafeImageUrl, ImageVariant } from './image-proxy';
import { LocalizableMixin } from './localize-mixin';
import type { Constructor } from './mixin-types.js';
import '../components/star-rating';

function onRecipeImageLoad(e: Event): void {
  (e.currentTarget as HTMLImageElement).parentElement?.classList.remove('image-loading');
}

function onRecipeImageError(e: Event): void {
  const container = (e.currentTarget as HTMLImageElement).parentElement;
  if (container) {
    container.classList.remove('image-loading');
    container.classList.add('image-error');
  }
}

function isImageInferredFromId(recipe: RecipeLike): boolean {
  return !recipe.image;
}

export function renderRecipeImageTemplate(
  hass: HomeAssistant,
  recipe: RecipeLike,
  opts: { url?: string | null; variant?: ImageVariant; containerClass: string; imgClass: string; onImageMissing?: () => void }
): TemplateResult | typeof nothing {
  const imageUrl = buildRecipeImageUrl(recipe, opts.url, opts.variant ?? 'min');
  if (!imageUrl) return nothing;

  const src = resolveImageSrc(hass, imageUrl);
  if (!isSafeImageUrl(src)) return nothing;

  const handleError = isImageInferredFromId(recipe) && opts.onImageMissing ? opts.onImageMissing : onRecipeImageError;

  return html`
    <div class="${opts.containerClass} image-loading">
      <img
        src=${src}
        alt=${recipe.name ?? recipe.title ?? ''}
        class="${opts.imgClass}"
        loading="lazy"
        decoding="async"
        @load=${onRecipeImageLoad}
        @error=${handleError}
      />
    </div>
  `;
}

export const RecipeRenderMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class RecipeRenderElement extends LocalizableMixin(superClass) {
    @state() protected error: string | null = null;
    @state() protected _loading = false;
    @state() protected _initialized = false;
    @state() protected _ratings: Map<string, number> = new Map();
    @state() protected _updatingRatings: Set<string> = new Set();
    @state() protected _favorites: Map<string, boolean> = new Map();
    @state() protected _missingImages: Set<string> = new Set();
    @state() protected _shoppingListSupported = true;
    private _shoppingSupportChecked = false;

    protected ensureShoppingListSupport(): void {
      if (this._shoppingSupportChecked || !this.hass) return;
      this._shoppingSupportChecked = true;
      void isShoppingListSupported(this.hass).then((supported) => {
        this._shoppingListSupported = supported;
      });
    }

    protected handleError(err: unknown): void {
      this.error = err instanceof Error ? err.message : this.localize('error.error_loading');
    }

    private _markImageMissing(key: string): void {
      if (this._missingImages.has(key)) return;
      this._missingImages = new Set(this._missingImages).add(key);
    }

    protected renderRecipeImage(recipe: RecipeLike, showImage: boolean): TemplateResult | typeof nothing {
      if (!showImage) return nothing;

      const key = recipe.slug ?? recipe.recipe_id;
      if (key && this._missingImages.has(key)) return nothing;

      const url = (this as { config?: { url?: string | null } }).config?.url;
      return renderRecipeImageTemplate(this.hass, recipe, {
        url,
        variant: 'min',
        containerClass: 'recipe-card-image',
        imgClass: 'recipe-image',
        onImageMissing: key ? () => this._markImageMissing(key) : undefined,
      });
    }

    protected renderRecipeName(recipe: RecipeLike): TemplateResult {
      return html`<h4 class="recipe-name">${recipe.name ?? recipe.title}</h4>`;
    }

    protected renderRecipeDescription(description: string, showDescription: boolean): TemplateResult | typeof nothing {
      return showDescription && description ? html`<div class="recipe-description">${description}</div>` : nothing;
    }

    protected buildTimeRows(recipe: RecipeLike, showPrepTime = true, showPerformTime = true, showTotalTime = true): TimeRow[] {
      const lang = this.hass?.locale?.language;
      return [
        showPrepTime && recipe.prep_time ? { icon: 'mdi:knife', label: this.localize('dialog.prep_time'), value: formatTime(recipe.prep_time, lang) } : null,
        showPerformTime && recipe.perform_time
          ? { icon: 'mdi:pot-steam', label: this.localize('dialog.cooking_time'), value: formatTime(recipe.perform_time, lang) }
          : null,
        showTotalTime && recipe.total_time
          ? { icon: 'mdi:clock-time-three-outline', label: this.localize('dialog.total_time'), value: formatTime(recipe.total_time, lang) }
          : null,
      ].filter(Boolean) as TimeRow[];
    }

    protected renderTimeRows(rows: TimeRow[]): TemplateResult {
      return html`${rows.map(
        (t) => html`
          <div class="time-row">
            <ha-icon class="time-row-icon" icon=${t.icon}></ha-icon>
            <span class="time-row-label">${t.label}</span>
            <span class="time-row-value">${t.value}</span>
          </div>
        `
      )}`;
    }

    protected renderRecipeTimes(recipe: RecipeLike, showPrepTime: boolean, showPerformTime: boolean, showTotalTime: boolean): TemplateResult | typeof nothing {
      const timeRows = this.buildTimeRows(recipe, showPrepTime, showPerformTime, showTotalTime);
      if (!timeRows.length) return nothing;
      return html`<div class="recipe-times">${this.renderTimeRows(timeRows)}</div>`;
    }

    protected async _setRating(slug: string, rating: number, configEntryId?: string): Promise<void> {
      if (!slug || !this.hass) return;
      if (this._updatingRatings.has(slug)) return;
      const previous = this._ratings.get(slug) ?? 0;

      this._ratings = new Map(this._ratings).set(slug, rating);
      this._updatingRatings = new Set(this._updatingRatings).add(slug);

      try {
        await rateRecipe(this.hass, slug, rating, configEntryId);

        let confirmed = rating;
        try {
          const fresh = await getRecipe(this.hass, slug, configEntryId);
          confirmed = fresh?.rating ?? rating;
        } catch {
          confirmed = rating;
        }

        this._ratings = new Map(this._ratings).set(slug, confirmed);
        emitMealieEvent(RECIPE_RATED, { slug, rating: confirmed });
      } catch {
        this._ratings = new Map(this._ratings).set(slug, previous);
        fireEvent(this, 'hass-notification', { message: this.localize('error.error_loading') });
      } finally {
        const done = new Set(this._updatingRatings);
        done.delete(slug);
        this._updatingRatings = done;
      }
    }

    protected async _toggleFavorite(slug: string, configEntryId?: string | null): Promise<void> {
      if (!slug || !this.hass) return;
      const current = this._favorites.get(slug) ?? false;
      const newFav = !current;

      this._favorites = new Map(this._favorites).set(slug, newFav);
      emitMealieEvent(FAVORITE_TOGGLED, { slug, favorite: newFav });

      try {
        await (newFav ? addRecipeFavorite(this.hass, slug, configEntryId ?? undefined) : removeRecipeFavorite(this.hass, slug, configEntryId ?? undefined));
      } catch {
        this._favorites = new Map(this._favorites).set(slug, current);
        emitMealieEvent(FAVORITE_TOGGLED, { slug, favorite: current });
        fireEvent(this, 'hass-notification', { message: this.localize('error.error_loading') });
      }
    }

    protected renderFavoriteButton(recipe: RecipeLike, showFavorite: boolean, configEntryId?: string | null): TemplateResult | typeof nothing {
      if (!showFavorite) return nothing;
      const slug = recipe?.slug ?? recipe?.recipe_id;
      if (!slug) return nothing;
      const isFav = this._favorites.get(slug) ?? false;
      return html`
        <ha-icon-button
          class="favorite-button"
          .label=${isFav ? this.localize('dialog.remove_favorite') : this.localize('dialog.add_favorite')}
          @click=${(e: Event) => {
            e.stopPropagation();
            void this._toggleFavorite(slug, configEntryId);
          }}
        >
          <ha-icon icon=${isFav ? 'mdi:heart' : 'mdi:heart-outline'}></ha-icon>
        </ha-icon-button>
      `;
    }

    protected _renderInteractiveRating(recipe: RecipeLike | null, showRating: boolean, configEntryId?: string | null): TemplateResult | typeof nothing {
      if (!showRating) return nothing;
      const slug = recipe?.slug ?? recipe?.recipe_id;
      if (!slug) return this.renderStarRating(recipe?.rating ?? undefined, showRating);

      const updating = this._updatingRatings.has(slug);
      const current = updating ? (this._ratings.get(slug) ?? recipe?.rating ?? 0) : (recipe?.rating ?? 0);

      return html`
        <mealie-star-rating
          interactive
          .rating=${current}
          ?updating=${updating}
          @rate-selected=${(e: CustomEvent<{ rating: number }>) => void this._setRating(slug, e.detail.rating, configEntryId ?? undefined)}
        ></mealie-star-rating>
      `;
    }

    protected renderStarRating(rating: number | undefined, showRating: boolean): TemplateResult | typeof nothing {
      return showRating ? html`<mealie-star-rating .rating=${rating ?? 0}></mealie-star-rating>` : nothing;
    }

    protected renderServings(servings: number | null | undefined, showServings: boolean): TemplateResult | typeof nothing {
      if (!servings || !showServings) return nothing;
      return html`<span class="servings-badge">
        <ha-icon icon="mdi:circle-slice-1"></ha-icon>
        <span class="servings-value">${servings}</span>
      </span>`;
    }

    protected renderDetailsSection(icon: string, label: string, content: TemplateResult): TemplateResult {
      return html`
        <ha-expansion-panel outlined expanded>
          <ha-icon slot="leading-icon" icon=${icon}></ha-icon>
          <span slot="header" class="details-title">${label}</span>
          <div class="details-content">${content}</div>
        </ha-expansion-panel>
      `;
    }
  }
  return RecipeRenderElement;
};
