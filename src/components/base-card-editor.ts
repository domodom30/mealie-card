import { fireEvent, HomeAssistant } from "custom-card-helpers";
import { html, LitElement, nothing, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { editorStyles } from "../styles/editor.styles";
import type { BaseMealieCardConfig, DisplayOptions } from "../types";
import { renderBool, renderText } from "../utils/editor-renders";
import { getMealieRecipes } from "../utils/helpers";
import { localizeForLang } from "../utils/translate";

type BoolKey = keyof DisplayOptions;

export abstract class BaseMealieCardEditor<T extends BaseMealieCardConfig & DisplayOptions> extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() protected config!: T;
  @state() private _imageIsHash: boolean | undefined = undefined;

  // Tracks which config_entry_id was last checked to avoid redundant calls
  private _imageCheckEntry: string | null | undefined = "__unset__";

  static styles = editorStyles;

  public setConfig(config: T): void {
    this.config = { ...config };
  }

  protected localize(key: string, search?: string, replace?: string): string {
    return localizeForLang(this.hass?.locale?.language ?? "en", key, search, replace);
  }

  protected updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (!this.hass || !this.config) return;
    const currentEntry = this.config.config_entry_id ?? null;
    if (currentEntry !== this._imageCheckEntry) {
      this._imageCheckEntry = currentEntry;
      this._imageIsHash = undefined;
      void this._checkImageFormat();
    }
  }

  private async _checkImageFormat(): Promise<void> {
    try {
      const recipes = await getMealieRecipes(this.hass, {
        configEntryId: this.config?.config_entry_id ?? undefined,
        resultLimit: 1,
      });
      const image = recipes[0]?.image;
      this._imageIsHash = !image || !(image.startsWith("/") || image.startsWith("http"));
    } catch {
      this._imageIsHash = true;
    }
  }

  protected get _schemaTop() {
    return [
      {
        type: "expandable",
        title: this.localize("editor.integration"),
        icon: "mdi:connection",
        schema: [
          {
            name: "config_entry_id",
            selector: { config_entry: { integration: "mealie" } },
          },
        ],
      },
    ];
  }

  protected _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      config_entry_id: this.localize("editor.integration"),
    };
    return labels[schema.name] ?? schema.name;
  };

  protected _toggleBool(key: BoolKey, value: boolean): void {
    this.config = { ...this.config, [key]: value };
    fireEvent(this, "config-changed", { config: this.config });
  }

  protected _setValue(key: keyof T, value: unknown): void {
    this.config = { ...this.config, [key]: value } as T;
    fireEvent(this, "config-changed", { config: this.config });
  }

  protected _valueChanged(e: CustomEvent): void {
    const newConfig = { ...e.detail.value } as T;
    if (!newConfig.config_entry_id) newConfig.show_image = false;
    this.config = newConfig;
    fireEvent(this, "config-changed", { config: this.config });
  }

  protected renderEditorLoading(): TemplateResult {
    return html`<div>${this.localize("editor.loading")}</div>`;
  }

  protected renderTopForm(): TemplateResult {
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  protected renderDisplayOptions(hasConfigEntry: boolean): TemplateResult {
    return html`
      ${this._imageIsHash
        ? renderText(this.hass, this.config.url, this.localize("editor.mealie_url"), (v) => this._setValue("url" as keyof typeof this.config, v || undefined))
        : nothing}
      ${renderBool(this.hass, !!this.config.show_image, this.localize("editor.show_image"), (v) => this._toggleBool("show_image", v), !hasConfigEntry)}
      ${renderBool(this.hass, !!this.config.show_rating, this.localize("editor.show_rating"), (v) => this._toggleBool("show_rating", v))}
      ${renderBool(this.hass, !!this.config.show_servings, this.localize("editor.show_servings"), (v) => this._toggleBool("show_servings", v))}
      ${renderBool(this.hass, !!this.config.show_description, this.localize("editor.show_description"), (v) => this._toggleBool("show_description", v))}
      ${renderBool(this.hass, !!this.config.show_prep_time, this.localize("editor.show_prep_time"), (v) => this._toggleBool("show_prep_time", v))}
      ${renderBool(this.hass, !!this.config.show_perform_time, this.localize("editor.show_cooking_time"), (v) => this._toggleBool("show_perform_time", v))}
      ${renderBool(this.hass, !!this.config.show_total_time, this.localize("editor.show_total_time"), (v) => this._toggleBool("show_total_time", v))}
    `;
  }
}
