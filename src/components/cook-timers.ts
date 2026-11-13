import { html, LitElement, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { cardStyles } from '../styles/card.styles';
import type { HomeAssistant } from '../types';
import { COOK_TIMERS_CHANGED, type CookTimer, type CookTimerStore } from '../utils/cook-timers.js';
import { defineOnce } from '../utils/define-once.js';
import { LocalizableMixin } from '../utils/localize-mixin.js';
import { formatCountdown } from '../utils/step-timers.js';

@defineOnce('mealie-cook-timers')
export class MealieCookTimers extends LocalizableMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) store: CookTimerStore | null = null;

  private _subscribedStore: CookTimerStore | null = null;

  static readonly styles = cardStyles;

  connectedCallback(): void {
    super.connectedCallback();
    this._subscribe(this.store);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._subscribe(null);
  }

  protected willUpdate(changedProps: Map<string, unknown>): void {
    super.willUpdate(changedProps);
    if (changedProps.has('store') && this.isConnected) this._subscribe(this.store);
  }

  private _subscribe(store: CookTimerStore | null): void {
    if (store === this._subscribedStore) return;
    this._subscribedStore?.removeEventListener(COOK_TIMERS_CHANGED, this._onTimersChanged);
    this._subscribedStore = store;
    store?.addEventListener(COOK_TIMERS_CHANGED, this._onTimersChanged);
  }

  private readonly _onTimersChanged = (): void => {
    this.requestUpdate();
  };

  private _renderTimer(timer: CookTimer): TemplateResult {
    const done = timer.remaining <= 0;
    return html`
      <div class="cook-timer ${done ? 'done' : ''}" role=${done ? 'alert' : 'timer'}>
        <ha-icon icon=${done ? 'mdi:bell-ring' : 'mdi:timer-sand'}></ha-icon>
        <span class="cook-timer-label">${timer.label}</span>
        <span class="cook-timer-value">${formatCountdown(timer.remaining)}</span>
        <ha-icon-button class="cook-timer-dismiss" .label=${this.localize('dialog.dismiss_timer')} @click=${() => this.store?.dismiss(timer.id)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  protected render(): TemplateResult | typeof nothing {
    const timers = this.store?.timers ?? [];
    if (!timers.length) return nothing;
    return html`<div class="cook-timers">${timers.map((timer) => this._renderTimer(timer))}</div>`;
  }
}
