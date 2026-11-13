const BEEP_COUNT = 3;
const BEEP_SECONDS = 0.2;
const BEEP_GAP_SECONDS = 0.15;
const BEEP_FREQUENCY_HZ = 880;
const BEEP_VOLUME = 0.25;

export class TimerAlarm {
  private _context: AudioContext | null = null;

  public prime(): void {
    if (this._context || typeof window.AudioContext !== 'function') return;
    try {
      this._context = new window.AudioContext();
    } catch {
      this._context = null;
    }
  }

  public play(): void {
    const context = this._context;
    if (!context) return;
    void context
      .resume()
      .then(() => this._scheduleBeeps(context))
      .catch(() => undefined);
  }

  public dispose(): void {
    void this._context?.close().catch(() => undefined);
    this._context = null;
  }

  private _scheduleBeeps(context: AudioContext): void {
    const start = context.currentTime;
    for (let beep = 0; beep < BEEP_COUNT; beep += 1) {
      const beepStart = start + beep * (BEEP_SECONDS + BEEP_GAP_SECONDS);
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = BEEP_FREQUENCY_HZ;
      gain.gain.value = BEEP_VOLUME;
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(beepStart);
      oscillator.stop(beepStart + BEEP_SECONDS);
    }
  }
}
