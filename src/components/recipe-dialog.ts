import { html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { MealieBaseCard } from "./base-card";
import { cardStyles } from "../styles/card.styles";
import { getRecipe, formatTime } from "../utils/helpers";
import type { MealieRecipe, RecipeIngredient, RecipeInstruction } from "../types";

@customElement("mealie-recipe-dialog")
export class MealieRecipeDialog extends MealieBaseCard {
  @property({ attribute: false }) config: any = {};
  @property({ attribute: false }) recipe: any = null;
  @property() configEntryId: string | null = null;
  @property({ type: Boolean }) open = false;
  @property() effectiveUrl: string | undefined;

  @state() private _detail: MealieRecipe | null = null;

  static styles = cardStyles;

  updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);
    if (changedProps.has("open") && this.open && this.recipe && !this._detail && !this._loading) {
      void this.loadData();
    }
    if (changedProps.has("recipe") && this.recipe && this.open) {
      this._detail = null;
      void this.loadData();
    }
  }

  protected async loadData(): Promise<void> {
    if (!this.open || !this.recipe) return;
    if (!this.hass) return;
    this._loading = true;
    this.error = null;
    try {
      this._detail = await getRecipe(this.hass, this.recipe.slug ?? this.recipe.recipe_id, this.configEntryId ?? undefined);
      this._initialized = true;
    } catch (err) {
      this.handleError(err);
    } finally {
      this._loading = false;
    }
  }

  private _close() {
    this.dispatchEvent(new CustomEvent("dialog-closed", { bubbles: false, composed: false }));
  }

  private _renderIngredient(ing: RecipeIngredient): TemplateResult {
    const text = ing.display ?? ing.note ?? [ing.quantity, ing.unit, ing.food?.name].filter(Boolean).join(" ");
    return html`<li>${text}</li>`;
  }

  private _renderInstruction(ins: RecipeInstruction, _idx: number): TemplateResult {
    const text = ins.text ?? "";
    return html`<li>${ins.title ? html`<strong>${ins.title}: </strong>` : ""}${text}</li>`;
  }

  private _renderDetail(): TemplateResult {
    const r = this._detail!;
    const lang = this.hass?.locale?.language;
    const timeRows = [
      r.prep_time
        ? {
            icon: "mdi:knife",
            label: this.localize("dialog.prep_time"),
            value: formatTime(r.prep_time, lang),
          }
        : null,
      r.perform_time
        ? {
            icon: "mdi:pot-steam",
            label: this.localize("dialog.cooking_time"),
            value: formatTime(r.perform_time, lang),
          }
        : null,
      r.total_time
        ? {
            icon: "mdi:clock-time-three-outline",
            label: this.localize("dialog.total_time"),
            value: formatTime(r.total_time, lang),
          }
        : null,
    ].filter(Boolean) as { icon: string; label: string; value: string }[];

    return html`
      <div class="dialog-body">
        ${this.renderRecipeImage(r, this.config?.show_image)} ${this.renderStarRating(r.rating, this.config?.show_rating)}
        ${timeRows.length
          ? this.renderDetailsSection(
              "mdi:clock-outline",
              this.localize("dialog.times"),
              html`${timeRows.map(
                (t) => html`
                  <div class="time-row">
                    <ha-icon class="time-row-icon" icon=${t!.icon}></ha-icon>
                    <span class="time-row-label">${t!.label}</span>
                    <span class="time-row-value">${t!.value}</span>
                  </div>
                `,
              )}`,
            )
          : nothing}
        ${r.ingredients?.length
          ? this.renderDetailsSection(
              "mdi:food-apple",
              this.localize("dialog.ingredients"),
              html`<ul>
                ${r.ingredients.map((ing) => this._renderIngredient(ing))}
              </ul>`,
            )
          : nothing}
        ${r.instructions?.length
          ? this.renderDetailsSection(
              "mdi:chef-hat",
              this.localize("dialog.instructions"),
              html`<ol>
                ${r.instructions.map((ins, i) => this._renderInstruction(ins, i))}
              </ol>`,
            )
          : nothing}
      </div>
    `;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.open || !this.recipe) return nothing;
    return html`
      <ha-dialog .open=${true} width="medium" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">
          <span class="recipe-name-highlight">${this.recipe.name}</span>
        </div>
        ${this._loading ? html`<div class="loading">${this.localize("editor.loading")}</div>` : nothing}
        ${this.error ? html`<div class="error">${this.error}</div>` : nothing} ${this._detail ? this._renderDetail() : nothing}
      </ha-dialog>
    `;
  }
}
