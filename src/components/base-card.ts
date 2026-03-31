import { HomeAssistant, applyThemesOnElement } from "custom-card-helpers";
import { html, LitElement, nothing, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { cardStyles } from "../styles/card.styles";
import { formatTime, imageOrientation } from "../utils/helpers";
import { buildRecipeImageUrl } from "../utils/image-proxy";
import { localizeForLang } from "../utils/translate";

export abstract class MealieBaseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() protected error: string | null = null;
  @state() protected _loading = false;
  @state() protected _initialized = false;

  static styles = cardStyles;

  protected abstract config: any;
  protected abstract loadData(): Promise<void>;

  protected localize(key: string, search?: string, replace?: string): string {
    return localizeForLang(this.hass?.locale?.language ?? "en", key, search, replace);
  }

  protected willUpdate(changedProps: Map<string, unknown>): void {
    super.willUpdate(changedProps);
    if (changedProps.has("hass") && this.hass) {
      applyThemesOnElement(this, this.hass.themes, this.hass.selectedTheme);
    }
    if (this.hass && !this._initialized && !this._loading) {
      void this.loadData();
    }
  }

  protected renderLoading(): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="loading">${this.localize("editor.loading")}</div>
        </div>
      </ha-card>
    `;
  }

  protected renderError(): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="error">${this.error}</ha-alert>
        </div>
      </ha-card>
    `;
  }

  protected renderEmptyState(message: string): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="info">${message}</ha-alert>
        </div>
      </ha-card>
    `;
  }

  protected renderRecipeImage(recipe: any, showImage: boolean): TemplateResult | typeof nothing {
    if (!showImage) return nothing;

    const imageUrl = buildRecipeImageUrl(recipe, this.config?.url);
    if (!imageUrl) return nothing;

    const src = imageUrl.startsWith("/") ? `${this.hass.auth.data.hassUrl}${imageUrl}` : imageUrl;

    return html`
      <div class="recipe-card-image">
        <img src="${src}" alt="${recipe.name}" class="recipe-image" loading="lazy" @error=${this.handleImageError} @load=${imageOrientation} />
      </div>
    `;
  }

  protected renderRecipeName(recipe: any): TemplateResult {
    return html`<h4 class="recipe-name">${recipe.name ?? recipe.title}</h4>`;
  }

  protected renderRecipeDescription(description: string, showDescription: boolean): TemplateResult | typeof nothing {
    return showDescription && description ? html`<div class="recipe-description">${description}</div>` : nothing;
  }

  protected renderRecipeTimes(recipe: any, showPrepTime: boolean, showPerformTime: boolean, showTotalTime: boolean): TemplateResult | typeof nothing {
    const lang = this.hass?.locale?.language;
    const timeRows = [
      showPrepTime && recipe.prep_time
        ? {
            icon: "mdi:knife",
            label: this.localize("dialog.prep_time"),
            value: formatTime(recipe.prep_time, lang),
          }
        : null,
      showPerformTime && recipe.perform_time
        ? {
            icon: "mdi:pot-steam",
            label: this.localize("dialog.cooking_time"),
            value: formatTime(recipe.perform_time, lang),
          }
        : null,
      showTotalTime && recipe.total_time
        ? {
            icon: "mdi:clock-time-three-outline",
            label: this.localize("dialog.total_time"),
            value: formatTime(recipe.total_time, lang),
          }
        : null,
    ].filter(Boolean) as { icon: string; label: string; value: string }[];

    return html`${timeRows.length
      ? html`<details class="details" open>
          <summary style="display:none"></summary>
          <div class="details-content">
            ${timeRows.map(
              (t) => html`
                <div class="time-row">
                  <ha-icon class="time-row-icon" icon=${t.icon}></ha-icon>
                  <span class="time-row-label">${t.label}</span>
                  <span class="time-row-value">${t.value}</span>
                </div>
              `,
            )}
          </div>
        </details>`
      : nothing}`;
  }

  protected renderTimeBadge(icon: string, label: string): TemplateResult {
    return html`
      <span class="time-badge">
        <ha-icon icon="${icon}"></ha-icon>
        <span class="time-value">${label}</span>
      </span>
    `;
  }

  protected renderStarRating(rating: number | undefined, showRating: boolean): TemplateResult | typeof nothing {
    if (!rating) return nothing;
    return showRating && rating
      ? html`
          <span class="star-rating">
            ${Array.from({ length: 5 }, (_, i) => i + 1).map((i) => {
              const icon = rating >= i ? "mdi:star" : rating >= i - 0.5 ? "mdi:star-half-full" : "mdi:star-outline";
              return html`<ha-icon icon=${icon}></ha-icon>`;
            })}
          </span>
        `
      : nothing;
  }

  protected renderServings(servings: number | undefined, showServings: boolean): TemplateResult | typeof nothing {
    if (!servings) return nothing;
    return showServings && servings
      ? html`<span class="servings-badge">
          <ha-icon icon="mdi:circle-slice-1"></ha-icon>
          <span class="servings-value">${servings}</span>
        </span>`
      : nothing;
  }

  protected handleError(err: unknown): void {
    this.error = err instanceof Error ? err.message : this.localize("error.error_loading");
  }

  protected renderDetailsSection(icon: string, label: string, content: TemplateResult): TemplateResult {
    return html`
      <details open>
        <summary><ha-icon icon=${icon}></ha-icon>${label}</summary>
        <div class="details-content">${content}</div>
      </details>
    `;
  }

  protected handleImageError(e: Event): void {
    const img = e.target as HTMLImageElement;
    const container = img.parentElement;
    if (container) container.remove();
  }
}
