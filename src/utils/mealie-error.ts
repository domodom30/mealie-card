export class MealieActionError extends Error {
  readonly translationKey: string;
  readonly reason: unknown;

  constructor(translationKey: string, reason?: unknown) {
    super(translationKey);
    this.name = 'MealieActionError';
    this.translationKey = translationKey;
    this.reason = reason;
  }

  get detail(): string {
    return this.reason instanceof Error ? this.reason.message : '';
  }
}
