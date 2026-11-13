import { html, LitElement, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { cardStyles } from '../styles/card.styles';
import type { HomeAssistant, MealieRecipe, RecipeIngredient, RecipeInstruction, ValueChangedEvent } from '../types';
import type { CookTimerStore } from '../utils/cook-timers.js';
import { defineOnce } from '../utils/define-once.js';
import { fireEvent } from '../utils/fire-event.js';
import { formatIngredientText } from '../utils/format.js';
import { renderCheckableIngredient, renderIngredientSectionTitle } from '../utils/ingredient-render.js';
import { LocalizableMixin } from '../utils/localize-mixin.js';
import { extractStepDurations, formatCountdown, type StepDuration } from '../utils/step-timers.js';
import { ScreenWakeLock } from '../utils/wake-lock.js';
import './cook-timers';

interface DurationValue {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface SwipeStart {
  pointerId: number;
  x: number;
  y: number;
}

const DEFAULT_CUSTOM_DURATION: DurationValue = { hours: 0, minutes: 5, seconds: 0 };
const SWIPE_MIN_DISTANCE_PX = 50;

function durationToSeconds(value: DurationValue): number {
  return (value.hours ?? 0) * 3600 + (value.minutes ?? 0) * 60 + (value.seconds ?? 0);
}

function isTextEntryTarget(event: Event): boolean {
  const origin = event.composedPath()[0];
  return origin instanceof HTMLInputElement || origin instanceof HTMLTextAreaElement || (origin instanceof HTMLElement && origin.isContentEditable);
}

function swipeDirection(start: SwipeStart, end: PointerEvent): -1 | 0 | 1 {
  const dx = end.clientX - start.x;
  const dy = end.clientY - start.y;
  if (Math.abs(dx) < SWIPE_MIN_DISTANCE_PX || Math.abs(dx) <= Math.abs(dy)) return 0;
  return dx < 0 ? 1 : -1;
}

@defineOnce('mealie-cook-mode')
export class MealieCookMode extends LocalizableMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) recipe: MealieRecipe | null = null;
  @property({ type: Number }) scale = 1;
  @property({ attribute: false }) timerStore: CookTimerStore | null = null;
  @property({ attribute: false }) checkedIngredients: ReadonlySet<number> = new Set();

  @state() private _stepIndex = 0;
  @state() private _customDuration: DurationValue = DEFAULT_CUSTOM_DURATION;
  @state() private _showCustomTimer = false;
  @state() private _showAllIngredients = false;

  private _swipeStart: SwipeStart | null = null;
  private readonly _wakeLock = new ScreenWakeLock();

  static readonly styles = cardStyles;

  private get _steps(): RecipeInstruction[] {
    return this.recipe?.instructions ?? [];
  }

  private get _ingredients(): RecipeIngredient[] {
    return this.recipe?.ingredients ?? [];
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
  }

  protected willUpdate(changedProps: Map<string, unknown>): void {
    super.willUpdate(changedProps);
    if (changedProps.has('recipe')) {
      this._stepIndex = 0;
      this._showAllIngredients = false;
    }
  }

  private readonly _onVisibilityChange = (): void => {
    if (document.visibilityState !== 'visible') return;
    this._wakeLock.resume();
  };

  private readonly _onKeyDown = (event: KeyboardEvent): void => {
    if (isTextEntryTarget(event)) return;
    if (event.key === 'ArrowRight') this._goTo(this._stepIndex + 1);
    else if (event.key === 'ArrowLeft') this._goTo(this._stepIndex - 1);
    else return;
    event.preventDefault();
  };

  private readonly _onPointerDown = (event: PointerEvent): void => {
    if (!event.isPrimary || event.pointerType === 'mouse' || isTextEntryTarget(event)) return;
    this._swipeStart = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
  };

  private readonly _onPointerUp = (event: PointerEvent): void => {
    const start = this._swipeStart;
    this._swipeStart = null;
    if (start?.pointerId !== event.pointerId) return;
    const direction = swipeDirection(start, event);
    if (direction) this._goTo(this._stepIndex + direction);
  };

  private readonly _onPointerCancel = (): void => {
    this._swipeStart = null;
  };

  private _goTo(index: number): void {
    this._stepIndex = Math.min(Math.max(0, index), Math.max(0, this._steps.length - 1));
  }

  private _startTimer(seconds: number, label: string): void {
    this.timerStore?.start(seconds, label, { step: this._stepIndex + 1, recipe: this.recipe?.name });
  }

  private _startCustomTimer(): void {
    const seconds = durationToSeconds(this._customDuration);
    this._startTimer(seconds, formatCountdown(seconds));
    this._showCustomTimer = false;
  }

  private _toggleIngredient(index: number): void {
    fireEvent(this, 'ingredient-toggled', { index });
  }

  private _stepIngredientIndexes(step: RecipeInstruction): number[] {
    const references = new Set(step.ingredient_references ?? []);
    if (!references.size) return [];
    return this._ingredients.flatMap((ingredient, index) => (ingredient.reference_id && references.has(ingredient.reference_id) ? [index] : []));
  }

  private _renderIngredient(index: number): TemplateResult {
    const text = formatIngredientText(this._ingredients[index], this.scale, false, this._lang);
    return renderCheckableIngredient(text, this.checkedIngredients.has(index), () => this._toggleIngredient(index));
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
    const indexes = this._stepIngredientIndexes(step);
    if (!indexes.length) return nothing;
    return html`
      <div class="cook-ingredients">
        <span class="cook-section-label">${this.localize('dialog.step_ingredients')}</span>
        <div class="ingredient-list">${indexes.map((index) => this._renderIngredient(index))}</div>
      </div>
    `;
  }

  private _renderAllIngredients(): TemplateResult | typeof nothing {
    if (!this._ingredients.length) return nothing;
    return html`
      <div class="cook-ingredients">
        <ha-button
          size="small"
          appearance="plain"
          aria-expanded=${this._showAllIngredients ? 'true' : 'false'}
          @click=${() => {
            this._showAllIngredients = !this._showAllIngredients;
          }}
        >
          <ha-icon slot="start" icon=${this._showAllIngredients ? 'mdi:chevron-up' : 'mdi:food-apple'}></ha-icon>
          ${this.localize('dialog.all_ingredients')} (${this.checkedIngredients.size} / ${this._ingredients.length})
        </ha-button>
        ${this._showAllIngredients
          ? html`<div class="ingredient-list">
              ${this._ingredients.map((ingredient, index) => html`${renderIngredientSectionTitle(ingredient.title)}${this._renderIngredient(index)}`)}
            </div>`
          : nothing}
      </div>
    `;
  }

  private _renderTimerSuggestion(duration: StepDuration): TemplateResult {
    return html`
      <ha-button
        size="small"
        appearance="outlined"
        .title=${this.localize('dialog.start_timer')}
        @click=${() => this._startTimer(duration.seconds, duration.label)}
      >
        <ha-icon slot="start" icon="mdi:timer-play-outline"></ha-icon>
        ${duration.label}
      </ha-button>
    `;
  }

  private _renderTimerControls(step: RecipeInstruction): TemplateResult | typeof nothing {
    if (!this.timerStore) return nothing;
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
        <ha-button
          size="small"
          variant="brand"
          appearance="accent"
          ?disabled=${durationToSeconds(this._customDuration) <= 0}
          @click=${() => this._startCustomTimer()}
        >
          ${this.localize('dialog.start_timer')}
        </ha-button>
      </div>
    `;
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
      <div class="cook-mode" tabindex="0" @pointerdown=${this._onPointerDown} @pointerup=${this._onPointerUp} @pointercancel=${this._onPointerCancel}>
        ${this._renderProgress(index, steps.length)} ${step.title ? html`<h3 class="cook-step-title">${step.title}</h3>` : nothing}
        <p class="cook-step-text">${step.text ?? ''}</p>
        ${this._renderStepIngredients(step)} ${this._renderTimerControls(step)}
        <mealie-cook-timers .hass=${this.hass} .store=${this.timerStore}></mealie-cook-timers>
        ${this._renderAllIngredients()} ${this._renderNavigation(index, steps.length)}
      </div>
    `;
  }
}
