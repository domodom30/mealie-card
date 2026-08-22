import { applyThemesOnElement } from '../utils/theme.js';
import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { cardStyles } from '../styles/card.styles';
import { RecipeRenderMixin } from '../utils/recipe-render-mixin';
import type { BaseMealieCardConfig, HomeAssistant } from '../types';
import { mealieSignalRevision, subscribeMealieSignal, type MealieSignalName, type Unsubscribe } from '../utils/events.js';

const STALE_AFTER_MS = 30000;

export abstract class MealieBaseCard extends RecipeRenderMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;

  private _watchedIds: string[] | undefined;
  private _watchedIdsKey: string | null | undefined;
  private _watchedRegistryRef: unknown;
  private _watchSignature = '';
  private _unsubscribers: Unsubscribe[] = [];
  private _seenRevision = 0;
  private _pendingReload = false;
  private _lastLoadedAt = 0;

  static styles = cardStyles;

  protected abstract config: BaseMealieCardConfig;
  protected abstract fetchData(): Promise<void>;
  protected abstract itemCount(): number;

  protected refreshSignal(): MealieSignalName | null {
    return null;
  }

  protected subscribeExtras(): Unsubscribe[] {
    return [];
  }

  protected watchedEntityIds(): string[] {
    return [];
  }

  protected hasOpenDialog(): boolean {
    return false;
  }

  public getCardSize(): number {
    return 1 + (this.itemCount() || 1) * 2;
  }

  public getGridOptions() {
    return { rows: 'auto', min_columns: 6 };
  }

  protected findMealieEntities(domain: string): string[] {
    const hass = this.hass;
    const configEntryId = this.config?.config_entry_id ?? null;
    const entities = hass?.entities;
    const prefix = `${domain}.`;

    if (!entities) {
      const states = hass?.states ?? {};
      return Object.keys(states).filter((id) => id.startsWith(prefix) && id.includes('mealie'));
    }

    const devices = hass?.devices;
    return Object.keys(entities).filter((id) => {
      if (!id.startsWith(prefix)) return false;
      const ent = entities[id];
      if (!ent || ent.platform !== 'mealie') return false;
      if (configEntryId) {
        if (ent.config_entry_id) return ent.config_entry_id === configEntryId;
        const dev = ent.device_id && devices ? devices[ent.device_id] : undefined;
        if (dev?.config_entries) return dev.config_entries.includes(configEntryId);
      }
      return true;
    });
  }

  private _registryRef(): unknown {
    const hass = this.hass;
    return hass?.entities ?? hass?.states;
  }

  private _getWatchedEntityIds(): string[] {
    const key = this.config?.config_entry_id ?? null;
    const registryRef = this._registryRef();

    if (!this._watchedIds || this._watchedIdsKey !== key || this._watchedRegistryRef !== registryRef) {
      this._watchedIdsKey = key;
      this._watchedRegistryRef = registryRef;
      this._watchedIds = this.watchedEntityIds();
    }
    return this._watchedIds;
  }

  private _computeWatchSignature(): string {
    const ids = this._getWatchedEntityIds();
    if (!ids.length) return '';
    const states = this.hass?.states ?? {};
    return ids
      .map((id) => {
        const s = states[id];
        return s ? `${id}=${s.state}@${s.last_updated}` : `${id}=∅`;
      })
      .join('|');
  }

  protected async loadData(): Promise<void> {
    if (!this.hass || !this.config?.config_entry_id) return;
    if (this._loading || this._initialized) return;

    this._loading = true;
    this.error = null;

    try {
      await this.fetchData();
      this._initialized = true;
      this._lastLoadedAt = Date.now();
    } catch (err) {
      this.handleError(err);
    } finally {
      this._loading = false;
      if (this._pendingReload) {
        this._pendingReload = false;
        this._reload();
      }
    }
  }

  protected _reload(): void {
    const signal = this.refreshSignal();
    if (signal) this._seenRevision = mealieSignalRevision(signal);

    if (this._loading) {
      this._pendingReload = true;
      return;
    }

    this._initialized = false;
    void this.loadData();
  }

  private _catchUp(): void {
    const signal = this.refreshSignal();
    const revision = signal ? mealieSignalRevision(signal) : this._seenRevision;
    const missedSignal = revision !== this._seenRevision;
    this._seenRevision = revision;

    if (!this._initialized) return;
    if (missedSignal || Date.now() - this._lastLoadedAt >= STALE_AFTER_MS) this._reload();
  }

  private _onVisibilityChange = (): void => {
    if (document.visibilityState === 'visible') this._catchUp();
  };

  private _watchedStateChanged(): boolean {
    if (this._loading) return false;
    const sig = this._computeWatchSignature();
    return !!sig && sig !== this._watchSignature;
  }

  private _maybeRefreshOnEntityChange(): void {
    if (this._loading) return;
    const sig = this._computeWatchSignature();
    if (!sig) return;

    if (this.error) {
      if (sig !== this._watchSignature) {
        this._watchSignature = sig;
        this.error = null;
        this._reload();
      }
      return;
    }

    if (!this._initialized) return;
    if (!this._watchSignature) {
      this._watchSignature = sig;
      return;
    }
    if (sig !== this._watchSignature) {
      this._watchSignature = sig;
      this._reload();
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    const signal = this.refreshSignal();
    this._unsubscribers = [...(signal ? [subscribeMealieSignal(signal, () => this._reload())] : []), ...this.subscribeExtras()];
    document.addEventListener('visibilitychange', this._onVisibilityChange);
    this._catchUp();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('visibilitychange', this._onVisibilityChange);
    this._unsubscribers.forEach((unsubscribe) => unsubscribe());
    this._unsubscribers = [];
    this._watchSignature = '';
    this._watchedIds = undefined;
    this._watchedIdsKey = undefined;
    this._watchedRegistryRef = undefined;
  }

  protected willUpdate(changedProps: Map<string, unknown>): void {
    super.willUpdate(changedProps);
    if (changedProps.has('hass') && this.hass) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (!oldHass || oldHass.themes !== this.hass.themes || oldHass.selectedTheme !== this.hass.selectedTheme) {
        applyThemesOnElement(this, this.hass.themes, this.hass.selectedTheme);
      }
      this._maybeRefreshOnEntityChange();
    }
    if (this.hass && !this._initialized && !this._loading && !this.error) {
      void this.loadData();
    }
  }

  protected shouldUpdate(changedProps: Map<string, unknown>): boolean {
    if (changedProps.size > 1 || !changedProps.has('hass')) return true;

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass) return true;

    return (
      oldHass.locale !== this.hass.locale ||
      oldHass.themes !== this.hass.themes ||
      oldHass.selectedTheme !== this.hass.selectedTheme ||
      oldHass.services !== this.hass.services ||
      this.hasOpenDialog() ||
      this._watchedStateChanged()
    );
  }

  protected renderLoading(): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize('editor.loading')}</div>
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
}
