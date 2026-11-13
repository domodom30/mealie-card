import { TimerAlarm } from './timer-alarm.js';

export interface CookTimer {
  readonly id: number;
  readonly label: string;
  readonly seconds: number;
  readonly step?: number;
  readonly recipe?: string;
  readonly endsAt: number;
  readonly remaining: number;
}

export interface CookTimerContext {
  step?: number;
  recipe?: string;
}

export const COOK_TIMERS_CHANGED = 'cook-timers-changed';

const TICK_MS = 1000;
const TIMER_DONE_VIBRATION = [300, 150, 300];

export class CookTimerStore extends EventTarget {
  private _timers: readonly CookTimer[] = [];
  private _nextId = 0;
  private _tickHandle?: ReturnType<typeof setInterval>;
  private readonly _alarm = new TimerAlarm();

  constructor(private readonly _onDone: (timer: CookTimer) => void) {
    super();
  }

  public get timers(): readonly CookTimer[] {
    return this._timers;
  }

  public start(seconds: number, label: string, context: CookTimerContext = {}): void {
    if (seconds <= 0) return;
    this._alarm.prime();
    this._nextId += 1;
    this._setTimers([...this._timers, { id: this._nextId, label, seconds, ...context, endsAt: Date.now() + seconds * 1000, remaining: seconds }]);
    this._startTicking();
  }

  public dismiss(id: number): void {
    this._setTimers(this._timers.filter((timer) => timer.id !== id));
    if (!this._hasRunningTimer()) this._stopTicking();
  }

  public resume(): void {
    this._tick();
    if (this._hasRunningTimer()) this._startTicking();
  }

  public suspend(): void {
    this._stopTicking();
  }

  public dispose(): void {
    this._stopTicking();
    this._alarm.dispose();
  }

  private _setTimers(timers: readonly CookTimer[]): void {
    this._timers = timers;
    this.dispatchEvent(new Event(COOK_TIMERS_CHANGED));
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

  private readonly _tick = (): void => {
    if (!this._timers.length) return;
    const now = Date.now();
    const finished: CookTimer[] = [];
    let changed = false;
    const next = this._timers.map((timer) => {
      if (timer.remaining <= 0) return timer;
      const remaining = Math.max(0, Math.ceil((timer.endsAt - now) / 1000));
      if (remaining === timer.remaining) return timer;
      changed = true;
      const updated = { ...timer, remaining };
      if (remaining === 0) finished.push(updated);
      return updated;
    });
    if (changed) this._setTimers(next);
    finished.forEach((timer) => this._notifyDone(timer));
    if (!this._hasRunningTimer()) this._stopTicking();
  };

  private _notifyDone(timer: CookTimer): void {
    this._alarm.play();
    navigator.vibrate?.(TIMER_DONE_VIBRATION);
    this._onDone(timer);
  }
}
