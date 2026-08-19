import { describe, expect, it } from 'vitest';
import { DEFAULT_MEALPLAN_CONFIG, normalizeRecipeConfig, normalizeTodayConfig } from './config.card.js';

describe('normalizeTodayConfig', () => {
  it('fills in every documented default', () => {
    const config = normalizeTodayConfig({ config_entry_id: 'abc' });
    expect(config.days_to_show).toBe(1);
    expect(config.day_offset).toBe(0);
    expect(config.days_layout).toBe('vertical');
    expect(config.recipes_layout).toBe('vertical');
    expect(config.show_random_button).toBe(true);
    expect(config.show_note_button).toBe(true);
    expect(config.recipe_view).toBe('dialog');
    expect(config.mealie_group_slug).toBe('home');
  });

  // Cards saved before the option existed must keep opening the in-card dialog.
  it('defaults an existing card without recipe_view to the dialog', () => {
    expect(normalizeTodayConfig({ config_entry_id: 'abc', url: 'https://mealie.example' }).recipe_view).toBe('dialog');
  });

  it('keeps explicit values', () => {
    const config = normalizeTodayConfig({ days_to_show: 5, day_offset: 2, days_layout: 'horizontal' });
    expect(config.days_to_show).toBe(5);
    expect(config.day_offset).toBe(2);
    expect(config.days_layout).toBe('horizontal');
  });

  it('keeps an explicit recipe view and group slug', () => {
    const config = normalizeTodayConfig({ recipe_view: 'webview', mealie_group_slug: 'famille' });
    expect(config.recipe_view).toBe('webview');
    expect(config.mealie_group_slug).toBe('famille');
  });

  it('does not overwrite an explicit false with a true default', () => {
    const config = normalizeTodayConfig({ show_random_button: false, show_note_button: false, show_prep_time: false });
    expect(config.show_random_button).toBe(false);
    expect(config.show_note_button).toBe(false);
    expect(config.show_prep_time).toBe(false);
  });

  it('preserves keys that are not part of the defaults', () => {
    const config = normalizeTodayConfig({ config_entry_id: 'abc' });
    expect(config.config_entry_id).toBe('abc');
  });

  it('does not mutate the shared defaults object', () => {
    normalizeTodayConfig({ days_to_show: 7 });
    expect(DEFAULT_MEALPLAN_CONFIG.days_to_show).toBe(1);
  });
});

describe('normalizeRecipeConfig', () => {
  it('fills in every documented default', () => {
    const config = normalizeRecipeConfig({ type: 'custom:mealie-recipe-card', config_entry_id: 'abc' });
    expect(config.result_limit).toBe(10);
    expect(config.show_search).toBe(false);
    expect(config.show_favorites_only).toBe(false);
    expect(config.show_favorite).toBe(false);
    expect(config.show_import_button).toBe(false);
  });

  it('keeps explicit values', () => {
    const config = normalizeRecipeConfig({ type: 'custom:mealie-recipe-card', result_limit: 50, show_search: true });
    expect(config.result_limit).toBe(50);
    expect(config.show_search).toBe(true);
  });
});
