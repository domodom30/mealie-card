import { html, nothing, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import type { MealieShoppingListCardConfig, TodoItem, ValueChangedEvent } from '../types';
import { DEFAULT_SHOPPING_LIST_CONFIG, normalizeShoppingListConfig } from '../config.card.js';
import { addTodoItem, getTodoItems, removeCompletedTodoItems, removeTodoItems, setTodoItemCompleted } from '../utils/mealie-api.js';
import { MealieActionError } from '../utils/mealie-error.js';
import { SHOPPING_LIST_UPDATED, type MealieSignalName } from '../utils/events.js';
import { fireEvent } from '../utils/fire-event.js';
import { MealieBaseCard } from './base-card';
import './shopping-list-card-editor';

interface ResolvedEntity {
  registry: unknown;
  config: MealieShoppingListCardConfig;
  entityId: string | undefined;
}

function isCompleted(item: TodoItem): boolean {
  return item.status === 'completed';
}

export class MealieShoppingListCard extends MealieBaseCard {
  @state() protected config!: MealieShoppingListCardConfig;
  @state() private _items: TodoItem[] = [];
  @state() private _newItem = '';
  @state() private _adding = false;
  @state() private _pending: ReadonlySet<string> = new Set();

  private _resolvedEntity?: ResolvedEntity;

  public setConfig(config: Partial<MealieShoppingListCardConfig>): void {
    this.config = normalizeShoppingListConfig(config);
    this._items = [];
    this._reload();
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement('mealie-shopping-list-card-editor');
  }

  public static getStubConfig(): MealieShoppingListCardConfig {
    return { ...DEFAULT_SHOPPING_LIST_CONFIG } as MealieShoppingListCardConfig;
  }

  public getCardSize(): number {
    return 2 + this._openItems.length;
  }

  private get _entityId(): string | undefined {
    if (this.config?.entity) return this.config.entity;
    const registry = this.hass?.entities ?? this.hass?.states;
    if (this._resolvedEntity?.registry !== registry || this._resolvedEntity.config !== this.config) {
      this._resolvedEntity = { registry, config: this.config, entityId: this.findMealieEntities('todo')[0] };
    }
    return this._resolvedEntity.entityId;
  }

  private get _openItems(): TodoItem[] {
    return this._items.filter((item) => !isCompleted(item));
  }

  private get _completedItems(): TodoItem[] {
    return this._items.filter(isCompleted);
  }

  private get _title(): string {
    const entityId = this._entityId;
    const friendlyName = entityId ? this.hass?.states[entityId]?.attributes.friendly_name : undefined;
    return this.config.title || (typeof friendlyName === 'string' ? friendlyName : '') || this.localize('cards.name_shopping_list');
  }

  protected canLoad(): boolean {
    return !!this._entityId;
  }

  protected refreshSignal(): MealieSignalName {
    return SHOPPING_LIST_UPDATED;
  }

  protected watchedEntityIds(): string[] {
    const entityId = this._entityId;
    return entityId ? [entityId] : [];
  }

  protected itemCount(): number {
    return this._items.length;
  }

  protected async fetchData(): Promise<void> {
    const entityId = this._entityId;
    if (!entityId) throw new MealieActionError('error.no_shopping_list');
    this._items = await getTodoItems(this.hass, entityId);
  }

  private _setPending(uids: readonly string[], pending: boolean): void {
    const next = new Set(this._pending);
    uids.forEach((uid) => (pending ? next.add(uid) : next.delete(uid)));
    this._pending = next;
  }

  private async _mutate(uids: readonly string[], optimisticItems: TodoItem[], run: (entityId: string) => Promise<void>): Promise<void> {
    const entityId = this._entityId;
    if (!entityId || uids.some((uid) => this._pending.has(uid))) return;

    this._items = optimisticItems;
    this._setPending(uids, true);
    try {
      await run(entityId);
    } catch (err) {
      fireEvent(this, 'hass-notification', { message: this.localizeError(err, 'error.error_updating_shopping_list') });
    } finally {
      this._setPending(uids, false);
      this._reload();
    }
  }

  private _toggleItem(item: TodoItem): void {
    const completed = !isCompleted(item);
    const status = completed ? 'completed' : 'needs_action';
    void this._mutate(
      [item.uid],
      this._items.map((entry) => (entry.uid === item.uid ? { ...entry, status } : entry)),
      (entityId) => setTodoItemCompleted(this.hass, entityId, item.uid, completed)
    );
  }

  private _removeItem(item: TodoItem): void {
    void this._mutate(
      [item.uid],
      this._items.filter((entry) => entry.uid !== item.uid),
      (entityId) => removeTodoItems(this.hass, entityId, [item.uid])
    );
  }

  private _clearCompleted(): void {
    const uids = this._completedItems.map((item) => item.uid);
    if (!uids.length) return;
    void this._mutate(uids, this._openItems, (entityId) => removeCompletedTodoItems(this.hass, entityId));
  }

  private async _addItem(): Promise<void> {
    const entityId = this._entityId;
    const summary = this._newItem.trim();
    if (!entityId || !summary || this._adding) return;

    this._adding = true;
    try {
      await addTodoItem(this.hass, entityId, summary);
      this._newItem = '';
      this._reload();
    } catch (err) {
      fireEvent(this, 'hass-notification', { message: this.localizeError(err, 'error.error_updating_shopping_list') });
    } finally {
      this._adding = false;
    }
  }

  private _onAddKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    void this._addItem();
  };

  private _renderHeader(): TemplateResult {
    return html`
      <div class="card-header-row">
        <div class="date-label">${this._title}</div>
      </div>
    `;
  }

  private _renderAddRow(): TemplateResult | typeof nothing {
    if (!this.config.show_add_item) return nothing;
    return html`
      <div class="shopping-add-row">
        <ha-selector
          .hass=${this.hass}
          .selector=${{ text: {} }}
          .value=${this._newItem}
          .label=${this.localize('dialog.item_name')}
          .required=${false}
          .disabled=${this._adding}
          @value-changed=${(e: ValueChangedEvent<string>) => {
            this._newItem = e.detail.value ?? '';
          }}
          @keydown=${this._onAddKeyDown}
        ></ha-selector>
        <ha-icon-button .label=${this.localize('dialog.add_item')} .disabled=${this._adding || !this._newItem.trim()} @click=${() => void this._addItem()}>
          <ha-icon icon="mdi:plus"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  private _renderItem(item: TodoItem): TemplateResult {
    const pending = this._pending.has(item.uid);
    return html`
      <li class="shopping-item ${isCompleted(item) ? 'completed' : ''}">
        <ha-checkbox .checked=${isCompleted(item)} .disabled=${pending} @change=${() => this._toggleItem(item)}></ha-checkbox>
        <div class="shopping-item-text">
          <span class="shopping-item-summary">${item.summary}</span>
          ${item.description ? html`<span class="shopping-item-description">${item.description}</span>` : nothing}
        </div>
        <ha-icon-button class="shopping-item-remove" .label=${this.localize('dialog.remove_item')} .disabled=${pending} @click=${() => this._removeItem(item)}>
          <ha-icon icon="mdi:delete-outline"></ha-icon>
        </ha-icon-button>
      </li>
    `;
  }

  private _renderOpenItems(): TemplateResult {
    const items = this._openItems;
    if (!items.length) return html`<ha-alert alert-type="info">${this.localize('dialog.empty_shopping_list')}</ha-alert>`;
    return html`<ul class="shopping-items">${items.map((item) => this._renderItem(item))}</ul>`;
  }

  private _renderCompletedItems(): TemplateResult | typeof nothing {
    const items = this._completedItems;
    if (!this.config.show_completed || !items.length) return nothing;
    return html`
      <ha-expansion-panel outlined>
        <span slot="header" class="details-title">${this.localize('dialog.completed_items')} (${items.length})</span>
        <div class="shopping-completed">
          <ul class="shopping-items">
            ${items.map((item) => this._renderItem(item))}
          </ul>
          <ha-button size="small" appearance="plain" variant="danger" @click=${() => this._clearCompleted()}>
            <ha-icon slot="start" icon="mdi:broom"></ha-icon>
            ${this.localize('dialog.clear_completed')}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderContent(): TemplateResult {
    if (this.error) return html`<div class="card-content">${this.renderErrorAlert()}</div>`;
    if (!this._initialized && !this._items.length) return html`<div class="card-content">${this.renderLoadingIndicator()}</div>`;
    return html`<div class="card-content">${this._renderAddRow()} ${this._renderOpenItems()} ${this._renderCompletedItems()}</div>`;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return this.renderLoading();
    if (!this._entityId) return this.renderEmptyState(this.localize('error.no_shopping_list'));

    return html`<ha-card>${this._renderHeader()} ${this._renderContent()}</ha-card>`;
  }
}
