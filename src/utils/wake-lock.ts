export class ScreenWakeLock {
  private _sentinel: WakeLockSentinel | null = null;
  private _requesting = false;
  private _wanted = false;

  public static get isSupported(): boolean {
    return typeof navigator !== 'undefined' && 'wakeLock' in navigator;
  }

  public async acquire(): Promise<void> {
    this._wanted = true;
    if (this._sentinel || this._requesting || !ScreenWakeLock.isSupported || document.visibilityState !== 'visible') return;

    this._requesting = true;
    try {
      const sentinel = await navigator.wakeLock.request('screen');
      if (!this._wanted) {
        await sentinel.release();
        return;
      }
      this._sentinel = sentinel;
      sentinel.addEventListener('release', () => {
        if (this._sentinel === sentinel) this._sentinel = null;
      });
    } catch {
      this._sentinel = null;
    } finally {
      this._requesting = false;
    }
  }

  public resume(): void {
    if (this._wanted) void this.acquire();
  }

  public release(): void {
    this._wanted = false;
    const sentinel = this._sentinel;
    this._sentinel = null;
    sentinel?.release().catch(() => undefined);
  }
}
