import { html, nothing, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import type { BaseMealieCardConfig, CardActionId, DisplayOptions, HomeAssistant, PressAction, RecipeViewMode, TimerDoneAction, ValueChangedEvent } from '../types';
import { renderBool, renderSelect, renderText } from '../utils/editor-renders';
import { cardActionLabelKey, cardActionMenuOption, isCardActionSupported } from '../utils/card-actions.js';
import { getMealieRecipes } from '../utils/mealie-api.js';
import { isDirectImageRef } from '../utils/image-proxy.js';
import { imageBaseUrls, isHttpUrl, isImageSource } from '../utils/mealie-url.js';
import { DEFAULT_MEALIE_GROUP_SLUG } from '../config.card.js';
import { MealieCardEditorCore } from './card-editor-core';

type PressActionKey = 'recipe_tap_action' | 'recipe_double_tap_action' | 'recipe_hold_action';

export type PressActionDefaults = Record<PressActionKey, PressAction>;

const imageFormatCache = new Map<string, boolean>();

async function isHashBasedImage(hass: HomeAssistant, configEntryId: string): Promise<boolean> {
  const cached = imageFormatCache.get(configEntryId);
  if (cached !== undefined) return cached;

  let recipes;
  try {
    recipes = await getMealieRecipes(hass, { configEntryId, resultLimit: 1 });
  } catch {
    return true;
  }

  const image = recipes[0]?.image;
  const isHash = !image || !isDirectImageRef(image);
  imageFormatCache.set(configEntryId, isHash);
  return isHash;
}

export abstract class BaseMealieCardEditor<T extends BaseMealieCardConfig & DisplayOptions> extends MealieCardEditorCore<T> {
  @state() private _imageIsHash: boolean | undefined = undefined;

  private _imageCheckEntry: string | null | undefined = '__unset__';

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

  private get _needsMealieUrl(): boolean {
    return !!this._imageIsHash || this.config.recipe_view !== 'dialog';
  }

  private _isImageAllowed(config: T): boolean {
    if (!config?.config_entry_id) return false;
    if (this._imageIsHash === undefined) return false;
    if (this._imageIsHash) return imageBaseUrls(config).some(isImageSource);
    return true;
  }

  private get _showImageAllowed(): boolean {
    return this._isImageAllowed(this.config);
  }

  protected override _valueChanged(e: ValueChangedEvent<T>): void {
    const newConfig = { ...e.detail.value };
    if (!newConfig.config_entry_id) newConfig.show_image = false;
    this._commitConfig(newConfig);
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
      ${renderBool(!!this.config.show_categories, this.localize('editor.show_categories'), (v) => this._setValue('show_categories', v))}
      ${renderBool(!!this.config.show_tags, this.localize('editor.show_tags'), (v) => this._setValue('show_tags', v))}
    `;
  }

  private _setImageSource(source: Pick<BaseMealieCardConfig, 'url' | 'image_url'>): void {
    const wasAllowed = this._showImageAllowed;
    const config = { ...this.config, ...source };
    const allowed = this._isImageAllowed(config);
    this._commitConfig({ ...config, show_image: allowed && (!wasAllowed || !!config.show_image) });
  }

  protected renderImageDisplayOptions(): TemplateResult {
    const imageAllowed = this._showImageAllowed;
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_image')}>
        <ha-icon slot="leading-icon" icon="mdi:image-outline"></ha-icon>
        <div class="settings-fields">
          ${this._needsMealieUrl
            ? renderText(this.hass, this.config.url, this.localize('editor.mealie_url'), (v) => this._setImageSource({ url: v || undefined }))
            : nothing}
          ${this._imageIsHash
            ? renderText(this.hass, this.config.image_url, this.localize('editor.image_url'), (v) => this._setImageSource({ image_url: v || undefined }))
            : nothing}
          ${renderBool(!!this.config.show_image && imageAllowed, this.localize('editor.show_image'), (v) => this._setValue('show_image', v), !imageAllowed)}
        </div>
      </ha-expansion-panel>
    `;
  }

  protected renderRecipeActionsPanel(actions: readonly CardActionId[], defaults: PressActionDefaults): TemplateResult {
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_recipe_actions')}>
        <ha-icon slot="leading-icon" icon="mdi:gesture-tap-button"></ha-icon>
        <div class="settings-fields">
          ${this._renderPressActionFields(actions, defaults)}
          <ha-expansion-panel outlined class="nested-panel" .header=${this.localize('editor.settings_recipe_menu')}>
            <ha-icon slot="leading-icon" icon="mdi:dots-vertical"></ha-icon>
            <div class="settings-fields">${this._renderMenuFields(actions)}</div>
          </ha-expansion-panel>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderPressActionFields(actions: readonly CardActionId[], defaults: PressActionDefaults): TemplateResult {
    const options: { value: PressAction; label: string }[] = [
      ...actions.filter((action) => isCardActionSupported(this.hass, action)).map((value) => ({ value, label: this.localize(cardActionLabelKey(value)) })),
      { value: 'none', label: this.localize('editor.recipe_action_none') },
    ];
    const fields: { key: PressActionKey; labelKey: string }[] = [
      { key: 'recipe_tap_action', labelKey: 'editor.recipe_tap_action' },
      { key: 'recipe_double_tap_action', labelKey: 'editor.recipe_double_tap_action' },
      { key: 'recipe_hold_action', labelKey: 'editor.recipe_hold_action' },
    ];
    return html`
      <div class="press-action-fields">
        ${fields.map(({ key, labelKey }) =>
          renderSelect(this.hass, this.config[key] ?? defaults[key], this.localize(labelKey), options, (v) => this._setValue(key, v || 'none'))
        )}
      </div>
    `;
  }

  private _renderMenuFields(actions: readonly CardActionId[]): TemplateResult {
    const menuShown = this.config.show_recipe_menu ?? true;
    return html`
      ${renderBool(menuShown, this.localize('editor.show_recipe_menu'), (v) => this._setValue('show_recipe_menu', v))}
      ${actions.map((action) => {
        const option = cardActionMenuOption(action);
        return renderBool(
          this.config[option] ?? true,
          this.localize(cardActionLabelKey(action)),
          (v) => this._setValue(option, v),
          !menuShown || !isCardActionSupported(this.hass, action)
        );
      })}
    `;
  }

  protected renderRecipeViewOptions(): TemplateResult {
    const mode = this.config.recipe_view ?? 'dialog';
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_recipe_view')}>
        <ha-icon slot="leading-icon" icon="mdi:book-open-variant"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{
              select: {
                mode: 'dropdown',
                options: [
                  { value: 'dialog', label: this.localize('editor.recipe_view_dialog') },
                  { value: 'webview', label: this.localize('editor.recipe_view_webview') },
                  { value: 'browser', label: this.localize('editor.recipe_view_browser') },
                ],
              },
            }}
            .value=${mode}
            .label=${this.localize('editor.recipe_view')}
            .required=${false}
            @value-changed=${(e: ValueChangedEvent<RecipeViewMode>) => this._setValue('recipe_view', e.detail.value)}
          ></ha-selector>
          ${mode === 'dialog'
            ? nothing
            : html`
                ${isHttpUrl(this.config.url) ? nothing : html`<ha-alert alert-type="info">${this.localize('info.no_url')}</ha-alert>`}
                ${renderText(this.hass, this.config.mealie_group_slug ?? DEFAULT_MEALIE_GROUP_SLUG, this.localize('editor.mealie_group_slug'), (v) =>
                  this._setValue('mealie_group_slug', v || DEFAULT_MEALIE_GROUP_SLUG)
                )}
              `}
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

  private _setTimerDoneAction(action: TimerDoneAction | undefined): void {
    const { timer_done_action: _removed, ...rest } = this.config;
    this._commitConfig((action && action.action !== 'none' ? { ...rest, timer_done_action: action } : rest) as T);
  }

  protected renderTimerOptions(): TemplateResult {
    return html`
      <ha-expansion-panel outlined .header=${this.localize('editor.settings_timers')}>
        <ha-icon slot="leading-icon" icon="mdi:timer-music-outline"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ ui_action: { actions: ['perform-action', 'none'], default_action: 'none' } }}
            .value=${this.config.timer_done_action}
            .label=${this.localize('editor.timer_done_action')}
            .helper=${this.localize('editor.timer_done_action_help')}
            .required=${false}
            @value-changed=${(e: ValueChangedEvent<TimerDoneAction | undefined>) => this._setTimerDoneAction(e.detail.value)}
          ></ha-selector>
        </div>
      </ha-expansion-panel>
    `;
  }

}
