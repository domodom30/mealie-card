import { fireEvent, HomeAssistant } from "custom-card-helpers";
import { html, LitElement, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cardStyles } from "../styles/card.styles";
import { addToMealplan, getLocalDateString, imageOrientation } from "../utils/helpers";
import { buildRecipeImageUrl } from "../utils/image-proxy";
import type { EntryType } from "../types";
import { localizeForLang } from "../utils/translate.js";

@customElement("mealie-mealplan-dialog")
export class MealieMealplanDialog extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) recipe: any = null;
  @property() configEntryId: string | null = null;
  @property({ type: Boolean }) open = false;
  @property() effectiveUrl: string | undefined;

  @state() private _date = "";
  @state() private _entryType: EntryType = "dinner";
  @state() private _submitting = false;

  static styles = cardStyles;

  private localize(key: string, search?: string, replace?: string): string {
    return localizeForLang(
      this.hass?.locale?.language ?? "en",
      key,
      search,
      replace,
    );
  }

  protected updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);
    if (changedProps.has("open") && this.open) {
      this._date = getLocalDateString(new Date());
      this._entryType = "dinner";
      this._submitting = false;
    }
  }

  private _close() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("dialog-closed", { bubbles: false, composed: false }),
    );
  }

  private _handleAdd = async () => {
    if (!this.recipe || !this._date || !this._entryType || !this.hass) return;

    this._submitting = true;
    try {
      await addToMealplan(this.hass, {
        date: this._date,
        entryType: this._entryType,
        recipeId: this.recipe.recipe_id,
        configEntryId: this.configEntryId ?? undefined,
      });
      fireEvent(this, "hass-notification", {
        message: this.localize("dialog.recipe_added_success"),
      });
      this._close();
    } catch (error) {
      fireEvent(this, "hass-notification", {
        message:
          error instanceof Error
            ? error.message
            : this.localize("error.error_adding_recipe"),
      });
    } finally {
      this._submitting = false;
    }
  };

  private _renderImage(): TemplateResult | typeof nothing {
    const imageUrl = buildRecipeImageUrl(this.recipe, this.effectiveUrl);
    if (!imageUrl) return nothing;

    const src = imageUrl.startsWith('/') ? `${this.hass.auth.data.hassUrl}${imageUrl}` : imageUrl;
    return html`
      <img
        class="detail-image"
        src=${src}
        alt=${this.recipe.name}
        @error=${(e: Event) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
        @load=${(e: Event) => imageOrientation(e)}
      />
    `;
  }

  private _renderDateSelector(): TemplateResult {
    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ date: {} }}
        .value=${this._date}
        .label=${this.localize("dialog.select_date")}
        @value-changed=${(e: CustomEvent) => {
          this._date = e.detail.value;
        }}
      ></ha-selector>
    `;
  }

  private _renderMealTypeSelector(): TemplateResult {
    const options = (
      [
        "breakfast",
        "lunch",
        "dinner",
        "side",
        "dessert",
        "drink",
        "snack",
      ] as const
    ).map((value) => ({ value, label: this.localize(`common.${value}`) }));

    return html`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: "dropdown", options } }}
        .value=${this._entryType}
        .label=${this.localize("dialog.select_meal_type")}
        @value-changed=${(e: CustomEvent) => {
          this._entryType = e.detail.value;
        }}
      ></ha-selector>
    `;
  }

  private _renderFooter(): TemplateResult {
    return html`
      <ha-dialog-footer slot="footer">
        <ha-button
          slot="primaryAction"
          variant="brand"
          appearance="accent"
          @click=${this._handleAdd}
          ?disabled=${!this._date || !this._entryType || this._submitting}
        >
          ${this._submitting ? "..." : this.localize("dialog.add")}
        </ha-button>
      </ha-dialog-footer>
    `;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.recipe) return nothing;

    return html`
      <ha-dialog
        .open=${this.open}
        width="small"
        .hass=${this.hass}
        @closed=${this._close}
      >
        <div slot="headerTitle" class="header-container">
          <span class="title-prefix">
            ${this.localize("dialog.add_recipe_to_mealplan")}
          </span>
          <span class="recipe-name-highlight">${this.recipe.name}</span>
        </div>

        <div class="dialog-body">
          ${this._renderImage()} ${this._renderDateSelector()}
          ${this._renderMealTypeSelector()}
        </div>

        ${this._renderFooter()}
      </ha-dialog>
    `;
  }
}
