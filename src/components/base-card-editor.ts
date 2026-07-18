import type { HomeAssistant } from 'custom-card-helpers';
import { fireEvent } from '../utils/fire-event.js';
import { html, LitElement, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { editorStyles } from '../styles/editor.styles';
import type { BaseMealieCardConfig, DisplayOptions } from '../types';
import { renderBool, renderText } from '../utils/editor-renders';
import { getMealieRecipes } from '../utils/mealie-api.js';
import { LocalizableMixin } from '../utils/localize-mixin';

const imageFormatCache = new Map<string, boolean>();

async function isHashBasedImage(hass: HomeAssistant, configEntryId: string): Promise<boolean> {
  const cached = imageFormatCache.get(configEntryId);
  if (cached !== undefined) return cached;

  let isHash: boolean;
  try {
    const recipes = await getMealieRecipes(hass, { configEntryId, resultLimit: 1 });
    const image = recipes[0]?.image;
    isHash = !image || !(image.startsWith('/') || image.startsWith('http'));
  } catch {
    isHash = true;
  }

  imageFormatCache.set(configEntryId, isHash);
  return isHash;
}

function isValidUrl(url: string | undefined): boolean {
  if (!url) return false;
  try {
    const { protocol } = new URL(url);
    return protocol === 'http:' || protocol === 'https:';
  } catch {
    return false;
  }
}

export abstract class BaseMealieCardEditor<T extends BaseMealieCardConfig & DisplayOptions> extends LocalizableMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() protected config!: T;
  @state() private _imageIsHash: boolean | undefined = undefined;

  private _imageCheckEntry: string | null | undefined = '__unset__';

  static styles = editorStyles;

  public setConfig(config: T): void {
    this.config = { ...config };
  }

  protected updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (!this.hass || !this.config) return;

    const currentEntry = this.config.config_entry_id ?? null;
    if (currentEntry === this._imageCheckEntry) return;

    this._imageCheckEntry = currentEntry;
    this._imageIsHash = undefined;
    if (currentEntry) void this._refreshImageFormat(currentEntry);
  }

  private async _refreshImageFormat(configEntryId: string): Promise<void> {
    const isHash = await isHashBasedImage(this.hass, configEntryId);
    if (this._imageCheckEntry === configEntryId) this._imageIsHash = isHash;
  }

  private get _showImageAllowed(): boolean {
    if (!this.config?.config_entry_id) return false;
    if (this._imageIsHash === undefined) return false;
    if (this._imageIsHash) return isValidUrl(this.config.url);
    return true;
  }

  protected get _schemaTop() {
    return [
      {
        type: 'expandable',
        title: this.localize('editor.integration'),
        icon: 'mdi:connection',
        schema: [
          {
            name: 'config_entry_id',
            selector: { config_entry: { integration: 'mealie' } },
          },
        ],
      },
    ];
  }

  protected _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      config_entry_id: this.localize('editor.integration'),
    };
    return labels[schema.name] ?? schema.name;
  };

  protected _setValue(key: keyof T, value: unknown): void {
    this.config = { ...this.config, [key]: value } as T;
    fireEvent(this, 'config-changed', { config: this.config });
  }

  protected _valueChanged(e: CustomEvent): void {
    const newConfig = { ...e.detail.value } as T;
    if (!newConfig.config_entry_id) newConfig.show_image = false;
    this.config = newConfig;
    fireEvent(this, 'config-changed', { config: this.config });
  }

  protected renderEditorLoading(): TemplateResult {
    return html`<div>${this.localize('editor.loading')}</div>`;
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

  protected renderInfosDisplayOptions(): TemplateResult {
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_infos')}>
        <ha-icon slot="leading-icon" icon="mdi:information-box-outline"></ha-icon>
        <div class="settings-fields">${this.renderInfosDisplayFields()}</div>
      </ha-expansion-panel>
    `;
  }

  protected renderInfosDisplayFields(): TemplateResult {
    return html`
      ${renderBool(!!this.config.show_rating, this.localize('editor.show_rating'), (v) => this._setValue('show_rating', v))}
      ${renderBool(!!this.config.show_servings, this.localize('editor.show_servings'), (v) => this._setValue('show_servings', v))}
      ${renderBool(!!this.config.show_description, this.localize('editor.show_description'), (v) => this._setValue('show_description', v))}
    `;
  }

  protected renderImageDisplayOptions(): TemplateResult {
    const imageAllowed = this._showImageAllowed;
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_image')}>
        <ha-icon slot="leading-icon" icon="mdi:image-outline"></ha-icon>
        <div class="settings-fields">
          ${this._imageIsHash
            ? renderText(this.hass, this.config.url, this.localize('editor.mealie_url'), (v) => {
                const newUrl = v || undefined;
                this.config = { ...this.config, url: newUrl, show_image: isValidUrl(newUrl) ? this.config.show_image : false } as T;
                fireEvent(this, 'config-changed', { config: this.config });
              })
            : nothing}
          ${renderBool(!!this.config.show_image && imageAllowed, this.localize('editor.show_image'), (v) => this._setValue('show_image', v), !imageAllowed)}
        </div>
      </ha-expansion-panel>
    `;
  }

  protected renderTimesDisplayOptions(): TemplateResult {
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_times')}>
        <ha-icon slot="leading-icon" icon="mdi:timer-settings-outline"></ha-icon>
        <div class="settings-fields">
          ${renderBool(!!this.config.show_prep_time, this.localize('editor.show_prep_time'), (v) => this._setValue('show_prep_time', v))}
          ${renderBool(!!this.config.show_perform_time, this.localize('editor.show_cooking_time'), (v) => this._setValue('show_perform_time', v))}
          ${renderBool(!!this.config.show_total_time, this.localize('editor.show_total_time'), (v) => this._setValue('show_total_time', v))}
        </div>
      </ha-expansion-panel>
    `;
  }
}
