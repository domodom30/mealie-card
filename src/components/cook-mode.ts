import { html, LitElement, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { cardStyles } from '../styles/card.styles';
import type { HomeAssistant, MealieRecipe, RecipeIngredient, RecipeInstruction, ValueChangedEvent } from '../types';
import { defineOnce } from '../utils/define-once.js';
import { fireEvent } from '../utils/fire-event.js';
import { formatIngredientText } from '../utils/format.js';
import { LocalizableMixin } from '../utils/localize-mixin.js';
import { extractStepDurations, formatCountdown, type StepDuration } from '../utils/step-timers.js';
import { ScreenWakeLock } from '../utils/wake-lock.js';

interface CookTimer {
  id: number;
  label: string;
  endsAt: number;
  remaining: number;
}

interface DurationValue {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const TICK_MS = 1000;
const TIMER_DONE_VIBRATION = [300, 150, 300];
const DEFAULT_CUSTOM_DURATION: DurationValue = { hours: 0, minutes: 5, seconds: 0 };

function durationToSeconds(value: DurationValue): number {
  return (value.hours ?? 0) * 3600 + (value.minutes ?? 0) * 60 + (value.seconds ?? 0);
}

function isTextEntryTarget(event: Event): boolean {
  const origin = event.composedPath()[0];
  return origin instanceof HTMLInputElement || origin instanceof HTMLTextAreaElement || (origin instanceof HTMLElement && origin.isContentEditable);
}

@defineOnce('mealie-cook-mode')
export class MealieCookMode extends LocalizableMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) recipe: MealieRecipe | null = null;
  @property({ type: Number }) scale = 1;

  @state() private _stepIndex = 0;
  @state() private _timers: CookTimer[] = [];
  @state() private _customDuration: DurationValue = DEFAULT_CUSTOM_DURATION;
  @state() private _showCustomTimer = false;

  private _nextTimerId = 0;
  private _tickHandle?: ReturnType<typeof setInterval>;
  private readonly _wakeLock = new ScreenWakeLock();

  static styles = cardStyles;

  private get _steps(): RecipeInstruction[] {
    return this.recipe?.instructions ?? [];
  }

  private get _lang(): string {
    return this.hass?.locale?.language ?? 'en';
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
    document.addEventListener('visibilitychange', this._onVisibilityChange);
    void this._wakeLock.acquire();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
    document.removeEventListener('visibilitychange', this._onVisibilityChange);
    this._wakeLock.release();
    this._stopTicking();
  }

  protected willUpdate(changedProps: Map<string, unknown>): void {
    super.willUpdate(changedProps);
    if (changedProps.has('recipe')) this._stepIndex = 0;
  }

  private _onVisibilityChange = (): void => {
    if (document.visibilityState !== 'visible') return;
    this._wakeLock.resume();
    this._tick();
  };

  private _onKeyDown = (event: KeyboardEvent): void => {
    if (isTextEntryTarget(event)) return;
    if (event.key === 'ArrowRight') this._goTo(this._stepIndex + 1);
    else if (event.key === 'ArrowLeft') this._goTo(this._stepIndex - 1);
    else return;
    event.preventDefault();
  };

  private _goTo(index: number): void {
    this._stepIndex = Math.min(Math.max(0, index), Math.max(0, this._steps.length - 1));
  }

  private _startTimer(seconds: number, label: string): void {
    if (seconds <= 0) return;
    this._nextTimerId += 1;
    this._timers = [...this._timers, { id: this._nextTimerId, label, endsAt: Date.now() + seconds * 1000, remaining: seconds }];
    this._startTicking();
  }

  private _dismissTimer(id: number): void {
    this._timers = this._timers.filter((timer) => timer.id !== id);
    if (!this._hasRunningTimer()) this._stopTicking();
  }

  private _hasRunningTimer(): boolean {
    return this._timers.some((timer) => timer.remaining > 0);
  }

  private _startTicking(): void {
    this._tickHandle ??= setInterval(this._tick, TICK_MS);
  }

  private _stopTicking(): void {
    if (this._tickHandle === undefined) return;
    clearInterval(this._tickHandle);
    this._tickHandle = undefined;
  }

  private _tick = (): void => {
    if (!this._timers.length) return;
    const now = Date.now();
    const finished: CookTimer[] = [];
    this._timers = this._timers.map((timer) => {
      if (timer.remaining <= 0) return timer;
      const remaining = Math.max(0, Math.ceil((timer.endsAt - now) / 1000));
      if (remaining === 0) finished.push(timer);
      return remaining === timer.remaining ? timer : { ...timer, remaining };
    });
    finished.forEach((timer) => this._notifyTimerDone(timer));
    if (!this._hasRunningTimer()) this._stopTicking();
  };

  private _notifyTimerDone(timer: CookTimer): void {
    fireEvent(this, 'hass-notification', { message: this.localize('dialog.timer_done', '{timer}', timer.label) });
    navigator.vibrate?.(TIMER_DONE_VIBRATION);
  }

  private _startCustomTimer(): void {
    const seconds = durationToSeconds(this._customDuration);
    this._startTimer(seconds, formatCountdown(seconds));
    this._showCustomTimer = false;
  }

  private _stepIngredients(step: RecipeInstruction): RecipeIngredient[] {
    const references = new Set(step.ingredient_references ?? []);
    if (!references.size) return [];
    return (this.recipe?.ingredients ?? []).filter((ingredient) => !!ingredient.reference_id && references.has(ingredient.reference_id));
  }

  private _renderProgress(index: number, total: number): TemplateResult {
    return html`
      <div class="cook-progress">
        <span class="cook-step-counter">${this.localize('dialog.step')} ${index + 1} / ${total}</span>
        <div class="cook-progress-track">
          <div class="cook-progress-fill" style=${styleMap({ width: `${((index + 1) / total) * 100}%` })}></div>
        </div>
      </div>
    `;
  }

  private _renderStepIngredients(step: RecipeInstruction): TemplateResult | typeof nothing {
    const ingredients = this._stepIngredients(step);
    if (!ingredients.length) return nothing;
    return html`
      <div class="cook-ingredients">
        <span class="cook-section-label">${this.localize('dialog.step_ingredients')}</span>
        <ul>
          ${ingredients.map((ingredient) => html`<li>${formatIngredientText(ingredient, this.scale, false, this._lang)}</li>`)}
        </ul>
      </div>
    `;
  }

  private _renderTimerSuggestion(duration: StepDuration): TemplateResult {
    return html`
      <ha-button size="small" appearance="outlined" .title=${this.localize('dialog.start_timer')} @click=${() => this._startTimer(duration.seconds, duration.label)}>
        <ha-icon slot="start" icon="mdi:timer-play-outline"></ha-icon>
        ${duration.label}
      </ha-button>
    `;
  }

  private _renderTimerControls(step: RecipeInstruction): TemplateResult {
    const suggestions = extractStepDurations(step.text, this._lang);
    return html`
      <div class="cook-timer-controls">
        ${suggestions.map((duration) => this._renderTimerSuggestion(duration))}
        <ha-button
          size="small"
          appearance="plain"
          @click=${() => {
            this._showCustomTimer = !this._showCustomTimer;
          }}
        >
          <ha-icon slot="start" icon="mdi:timer-plus-outline"></ha-icon>
          ${this.localize('dialog.add_timer')}
        </ha-button>
      </div>
      ${this._showCustomTimer ? this._renderCustomTimer() : nothing}
    `;
  }

  private _renderCustomTimer(): TemplateResult {
    return html`
      <div class="cook-custom-timer">
        <ha-selector
          .hass=${this.hass}
          .selector=${{ duration: { enable_second: true } }}
          .value=${this._customDuration}
          .required=${false}
          @value-changed=${(e: ValueChangedEvent<DurationValue>) => {
            this._customDuration = e.detail.value ?? DEFAULT_CUSTOM_DURATION;
          }}
        ></ha-selector>
        <ha-button size="small" variant="brand" appearance="accent" ?disabled=${durationToSeconds(this._customDuration) <= 0} @click=${() => this._startCustomTimer()}>
          ${this.localize('dialog.start_timer')}
        </ha-button>
      </div>
    `;
  }

  private _renderTimer(timer: CookTimer): TemplateResult {
    const done = timer.remaining <= 0;
    return html`
      <div class="cook-timer ${done ? 'done' : ''}" role=${done ? 'alert' : 'timer'}>
        <ha-icon icon=${done ? 'mdi:bell-ring' : 'mdi:timer-sand'}></ha-icon>
        <span class="cook-timer-label">${timer.label}</span>
        <span class="cook-timer-value">${formatCountdown(timer.remaining)}</span>
        <ha-icon-button class="cook-timer-dismiss" .label=${this.localize('dialog.dismiss_timer')} @click=${() => this._dismissTimer(timer.id)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  private _renderTimers(): TemplateResult | typeof nothing {
    if (!this._timers.length) return nothing;
    return html`<div class="cook-timers">${this._timers.map((timer) => this._renderTimer(timer))}</div>`;
  }

  private _renderNavigation(index: number, total: number): TemplateResult {
    return html`
      <div class="cook-nav">
        <ha-button appearance="plain" ?disabled=${index <= 0} @click=${() => this._goTo(index - 1)}>
          <ha-icon slot="start" icon="mdi:chevron-left"></ha-icon>
          ${this.localize('dialog.previous_step')}
        </ha-button>
        <ha-button variant="brand" appearance="accent" ?disabled=${index >= total - 1} @click=${() => this._goTo(index + 1)}>
          ${this.localize('dialog.next_step')}
          <ha-icon slot="end" icon="mdi:chevron-right"></ha-icon>
        </ha-button>
      </div>
    `;
  }

  protected render(): TemplateResult | typeof nothing {
    const steps = this._steps;
    if (!steps.length) return nothing;

    const index = Math.min(this._stepIndex, steps.length - 1);
    const step = steps[index];

    return html`
      <div class="cook-mode" tabindex="0">
        ${this._renderProgress(index, steps.length)} ${step.title ? html`<h3 class="cook-step-title">${step.title}</h3>` : nothing}
        <p class="cook-step-text">${step.text ?? ''}</p>
        ${this._renderStepIngredients(step)} ${this._renderTimerControls(step)} ${this._renderTimers()} ${this._renderNavigation(index, steps.length)}
      </div>
    `;
  }
}
