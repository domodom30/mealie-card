// @vitest-environment happy-dom
import { describe, expect, it, vi } from 'vitest';
import { FAVORITE_TOGGLED, MEALPLAN_UPDATED, emitMealieEvent, emitMealieSignal, subscribeMealieEvent, subscribeMealieSignal } from './events.js';

describe('signals', () => {
  it('notifies every subscriber', () => {
    const first = vi.fn();
    const second = vi.fn();
    const unsubscribeFirst = subscribeMealieSignal(MEALPLAN_UPDATED, first);
    const unsubscribeSecond = subscribeMealieSignal(MEALPLAN_UPDATED, second);

    emitMealieSignal(MEALPLAN_UPDATED);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);

    unsubscribeFirst();
    unsubscribeSecond();
  });

  it('stops notifying after unsubscribing', () => {
    const handler = vi.fn();
    const unsubscribe = subscribeMealieSignal(MEALPLAN_UPDATED, handler);

    unsubscribe();
    emitMealieSignal(MEALPLAN_UPDATED);

    expect(handler).not.toHaveBeenCalled();
  });
});

describe('events', () => {
  it('hands the detail to the subscriber', () => {
    const handler = vi.fn();
    const unsubscribe = subscribeMealieEvent(FAVORITE_TOGGLED, handler);

    emitMealieEvent(FAVORITE_TOGGLED, { slug: 'tarte', favorite: true });

    expect(handler).toHaveBeenCalledWith({ slug: 'tarte', favorite: true });
    unsubscribe();
  });

  it('stops notifying after unsubscribing', () => {
    const handler = vi.fn();
    const unsubscribe = subscribeMealieEvent(FAVORITE_TOGGLED, handler);

    unsubscribe();
    emitMealieEvent(FAVORITE_TOGGLED, { slug: 'tarte', favorite: false });

    expect(handler).not.toHaveBeenCalled();
  });
});
