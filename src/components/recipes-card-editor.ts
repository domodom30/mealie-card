import { html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import type { MealieRecipeCardConfig } from "../types";
import { renderNumber } from "../utils/editor-renders";
import { BaseMealieCardEditor } from "./base-card-editor";

@customElement("mealie-recipe-card-editor")
export class MealieRecipeCardEditor extends BaseMealieCardEditor<MealieRecipeCardConfig> {
  protected render(): TemplateResult {
    if (!this.hass || !this.config) return this.renderEditorLoading();
    const hasConfigEntry = !!this.config.config_entry_id;
    return html`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${this.renderDisplayOptions(hasConfigEntry)}
          ${renderNumber(this.hass, this.config.result_limit, this.localize("editor.number_of_recipes"), 1, 100, (v) => this._setValue("result_limit", v))}
        </div>
      </ha-expansion-panel>
    `;
  }
}
