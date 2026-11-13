import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { HomeAssistant } from '../types';
import { getMealieShoppingLists, type MealieShoppingList } from './mealie-api.js';

export class ShoppingListsController implements ReactiveController {
  public lists: MealieShoppingList[] = [];
  public loading = false;
  public error: unknown = null;
  public selectedId = '';
  private _request = 0;

  constructor(private readonly _host: ReactiveControllerHost) {
    _host.addController(this);
  }

  public get selected(): MealieShoppingList | undefined {
    return this.lists.find((list) => list.id === this.selectedId);
  }

  public hostDisconnected(): void {
    this._request += 1;
  }

  public select(id: string): void {
    this.selectedId = id;
    this._host.requestUpdate();
  }

  public async load(hass: HomeAssistant, configEntryId: string | null, preferredId: string | null): Promise<void> {
    const request = ++this._request;
    this.loading = true;
    this.error = null;
    this._host.requestUpdate();
    try {
      const lists = await getMealieShoppingLists(hass, configEntryId ?? undefined);
      if (request !== this._request) return;
      this.lists = lists;
      this.selectedId = (lists.find((list) => list.id === preferredId) ?? lists[0])?.id ?? '';
    } catch (err) {
      if (request !== this._request) return;
      this.lists = [];
      this.selectedId = '';
      this.error = err;
    } finally {
      if (request === this._request) {
        this.loading = false;
        this._host.requestUpdate();
      }
    }
  }
}
