import { describe, expect, it } from 'vitest';
import { formatIngredientText, formatQuantity, formatTime, getEntryTypeLabel, getUnitName } from './format.js';
import type { RecipeIngredient } from '../types.js';

describe('formatQuantity', () => {
  it('renders whole numbers without a fraction', () => {
    expect(formatQuantity(3)).toBe('3');
  });

  it('renders a bare fraction when there is no whole part', () => {
    expect(formatQuantity(0.5)).toBe('½');
    expect(formatQuantity(0.25)).toBe('¼');
  });

  it('combines the whole part and the fraction', () => {
    expect(formatQuantity(1.75)).toBe('1 ¾');
  });

  it('snaps to the nearest fraction within tolerance', () => {
    expect(formatQuantity(0.333)).toBe('⅓');
  });

  it('falls back to a decimal when no fraction matches', () => {
    expect(formatQuantity(0.42)).toBe('0.42');
  });

  it('returns "0" for a zero quantity', () => {
    expect(formatQuantity(0)).toBe('0');
  });
});

describe('getUnitName', () => {
  it('returns an empty string for a missing unit', () => {
    expect(getUnitName(null)).toBe('');
    expect(getUnitName(undefined)).toBe('');
  });

  it('passes plain strings through', () => {
    expect(getUnitName('tbsp')).toBe('tbsp');
  });

  it('prefers the abbreviation when the object asks for it', () => {
    expect(getUnitName({ name: 'tablespoon', abbreviation: 'tbsp', use_abbreviation: true })).toBe('tbsp');
    expect(getUnitName({ name: 'tablespoon', abbreviation: 'tbsp', use_abbreviation: false })).toBe('tablespoon');
  });

  it('parses a JSON-encoded unit', () => {
    expect(getUnitName('{"name": "gram", "abbreviation": "g", "use_abbreviation": true}')).toBe('g');
  });

  it('parses a Python repr unit, which is not valid JSON', () => {
    expect(getUnitName("{'name': 'gram', 'abbreviation': 'g', 'use_abbreviation': True}")).toBe('g');
    expect(getUnitName("{'name': 'gram', 'abbreviation': 'g', 'use_abbreviation': False}")).toBe('gram');
  });
});

describe('formatIngredientText', () => {
  const ingredient: RecipeIngredient = {
    quantity: 2,
    unit: { name: 'gram', abbreviation: 'g', use_abbreviation: true },
    food: { food_id: 'f1', name: 'flour', description: '' },
    note: 'sifted',
  };

  it('joins quantity, unit and food', () => {
    expect(formatIngredientText({ ...ingredient, note: undefined })).toBe('2 g flour');
  });

  it('appends the note in parentheses when asked', () => {
    expect(formatIngredientText(ingredient)).toBe('2 g flour (sifted)');
    expect(formatIngredientText(ingredient, 1, false)).toBe('2 g flour');
  });

  it('scales the quantity', () => {
    expect(formatIngredientText({ ...ingredient, note: undefined }, 2)).toBe('4 g flour');
    expect(formatIngredientText({ ...ingredient, note: undefined }, 0.25)).toBe('½ g flour');
  });

  it('falls back to the note or display text without quantity and food', () => {
    expect(formatIngredientText({ note: 'a pinch of salt' })).toBe('a pinch of salt');
    expect(formatIngredientText({ display: 'salt to taste' })).toBe('salt to taste');
  });
});

describe('getEntryTypeLabel', () => {
  it('localizes a known entry type', () => {
    expect(getEntryTypeLabel('dinner', 'fr')).toBe('Dîner');
  });

  it('uppercases an unknown entry type', () => {
    expect(getEntryTypeLabel('brunch')).toBe('BRUNCH');
  });

  it('returns an empty string for a missing entry type', () => {
    expect(getEntryTypeLabel(undefined)).toBe('');
  });
});

describe('formatTime', () => {
  it('returns an empty string for a missing time', () => {
    expect(formatTime(null)).toBe('');
  });

  it('shortens hours and minutes', () => {
    expect(formatTime('1 hour 30 minutes', 'en')).toBe('1 h 30 min');
  });

  it('keeps unrecognised text, collapsing whitespace', () => {
    expect(formatTime('  overnight   rest ', 'en')).toBe('overnight rest');
  });

  // getTimePatterns memoizes a single language, so alternating must not leak patterns.
  it('rebuilds its patterns when the language alternates', () => {
    expect(formatTime('1 hour', 'en')).toBe('1 h');
    expect(formatTime('30 minutes', 'fr')).toBe('30 min');
    expect(formatTime('2 hours', 'en')).toBe('2 h');
  });
});
