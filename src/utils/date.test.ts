import { describe, expect, it } from 'vitest';
import { dateFormatWithDay, getDateRange, getLocalDateString } from './date.js';
import { createHassStub } from '../test-utils/hass-stub.js';

describe('getLocalDateString', () => {
  it('pads month and day to two digits', () => {
    expect(getLocalDateString(new Date(2026, 0, 5))).toBe('2026-01-05');
  });

  it('uses local components rather than UTC ones', () => {
    const lateEvening = new Date(2026, 6, 14, 23, 30);
    expect(getLocalDateString(lateEvening)).toBe('2026-07-14');
  });
});

describe('getDateRange', () => {
  it('returns consecutive days starting today', () => {
    const range = getDateRange(3);
    expect(range).toHaveLength(3);
    expect(range[0]).toBe(getLocalDateString(new Date()));
  });

  it('clamps the count to at least one day', () => {
    expect(getDateRange(0)).toHaveLength(1);
    expect(getDateRange(-5)).toHaveLength(1);
  });

  it('applies the offset to the first day', () => {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    expect(getDateRange(1, 1)[0]).toBe(getLocalDateString(tomorrow));
  });

  it('rolls over month boundaries', () => {
    const base = new Date();
    const dayOfMonth = base.getDate();
    const daysUntilNextMonth = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate() - dayOfMonth + 1;
    const range = getDateRange(1, daysUntilNextMonth);
    const expected = new Date(base.getFullYear(), base.getMonth(), dayOfMonth + daysUntilNextMonth);
    expect(range[0]).toBe(getLocalDateString(expected));
  });

  it('truncates fractional input', () => {
    expect(getDateRange(2.9, 1.7)).toHaveLength(2);
  });
});

describe('dateFormatWithDay', () => {
  it('returns the localized "today" label for the current date', () => {
    const hass = createHassStub({ language: 'fr' });
    expect(dateFormatWithDay(getLocalDateString(new Date()), hass)).toBe("Aujourd'hui");
  });

  it('formats other dates with the weekday', () => {
    const hass = createHassStub({ language: 'en' });
    expect(dateFormatWithDay('2026-07-14', hass)).toBe('Tuesday, July 14');
  });
});
