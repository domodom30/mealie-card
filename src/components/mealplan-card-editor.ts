import { fireEvent } from "custom-card-helpers";
import { html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import type { MealieMealplanCardConfig } from "../types";
import { renderNumber } from "../utils/editor-renders";
import { BaseMealieCardEditor } from "./base-card-editor";

@customElement("mealie-card-editor")
export class MealieMealplanCardEditor extends BaseMealieCardEditor<MealieMealplanCardConfig> {
  private get _entryTypeOptions() {
    return [
      { value: "breakfast", label: this.localize("common.breakfast") },
      { value: "lunch", label: this.localize("common.lunch") },
      { value: "dinner", label: this.localize("common.dinner") },
      { value: "side", label: this.localize("common.side") },
      { value: "dessert", label: this.localize("common.dessert") },
      { value: "drink", label: this.localize("common.drink") },
      { value: "snack", label: this.localize("common.snack") },
    ];
  }

  private _renderEntryTypes() {
    const selected = new Set(this.config.entry_types ?? []);
    return html`
      <div class="entry-type-chips">
        ${this._entryTypeOptions.map(
          ({ value, label }) => html`
            <button class="entry-chip ${selected.has(value) ? "active" : ""}" @click=${() => this._toggleEntryType(value)}>${label}</button>
          `,
        )}
      </div>
    `;
  }

  private get _schemaLayout() {
    return [
      {
        type: "expandable",
        title: this.localize("editor.settings_title_layout"),
        icon: "mdi:view-grid-outline",
        schema: [
          {
            name: "recipes_layout",
            selector: {
              select: {
                options: [
                  {
                    value: "horizontal",
                    label: this.localize("editor.layout_recipes_horizontal"),
                  },
                  {
                    value: "vertical",
                    label: this.localize("editor.layout_recipes_vertical"),
                  },
                ],
              },
            },
          },
        ],
      },
    ];
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return this.renderEditorLoading();
    const hasConfigEntry = !!this.config.config_entry_id;
    return html`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.entry_types")}>
        <ha-icon slot="leading-icon" icon="mdi:silverware-fork-knife"></ha-icon>
        ${this._renderEntryTypes()}
      </ha-expansion-panel>
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${this.renderDisplayOptions(hasConfigEntry)}
          ${renderNumber(this.hass, this.config.day_offset, this.localize("editor.day_offset"), 0, 30, (v) => this._setValue("day_offset", Number(v)))}
        </div>
      </ha-expansion-panel>
      <ha-form .hass=${this.hass} .data=${this.config} .schema=${this._schemaLayout} @value-changed=${this._valueChanged}></ha-form>
    `;
  }

  private _toggleEntryType(type: string): void {
    const current = new Set(this.config.entry_types ?? []);
    if (current.has(type)) {
      current.delete(type);
    } else {
      current.add(type);
    }
    this.config = { ...this.config, entry_types: [...current] };
    fireEvent(this, "config-changed", { config: this.config });
  }
}
