import { describe, expect, it } from 'vitest';
import { isFeatureSupported } from './mealie-capabilities.js';
import { createHassStub } from '../test-utils/hass-stub.js';

describe('isFeatureSupported', () => {
  it('returns false when hass is not available yet', () => {
    expect(isFeatureSupported(undefined, 'shopping_list')).toBe(false);
  });

  it('returns false when the mealie domain exposes no action', () => {
    expect(isFeatureSupported(createHassStub(), 'shopping_list')).toBe(false);
  });

  // The Mealie integration shipped in Home Assistant only exposes a subset of these actions,
  // which is what issue #62 surfaced.
  it('returns false when the backing action is missing', () => {
    const hass = createHassStub({ services: { mealie: ['get_mealplan', 'get_recipes', 'import_recipe', 'set_random_mealplan'] } });
    expect(isFeatureSupported(hass, 'shopping_list')).toBe(false);
    expect(isFeatureSupported(hass, 'favorites')).toBe(false);
    expect(isFeatureSupported(hass, 'interactive_rating')).toBe(false);
    expect(isFeatureSupported(hass, 'edit_mealplan')).toBe(false);
    expect(isFeatureSupported(hass, 'delete_mealplan')).toBe(false);
  });

  it('returns true for the actions that are present', () => {
    const hass = createHassStub({ services: { mealie: ['import_recipe', 'set_random_mealplan'] } });
    expect(isFeatureSupported(hass, 'import_recipe')).toBe(true);
    expect(isFeatureSupported(hass, 'random_mealplan')).toBe(true);
  });

  it('maps every feature to its own action', () => {
    const hass = createHassStub({
      services: {
        mealie: [
          'add_recipe_to_shopping_list',
          'rate_recipe',
          'add_recipe_favorite',
          'import_recipe',
          'set_random_mealplan',
          'update_mealplan',
          'delete_mealplan',
        ],
      },
    });
    const features = ['shopping_list', 'interactive_rating', 'favorites', 'import_recipe', 'random_mealplan', 'edit_mealplan', 'delete_mealplan'] as const;
    for (const feature of features) {
      expect(isFeatureSupported(hass, feature)).toBe(true);
    }
  });

  it('ignores actions from another domain', () => {
    const hass = createHassStub({ services: { todo: ['add_recipe_to_shopping_list'] } });
    expect(isFeatureSupported(hass, 'shopping_list')).toBe(false);
  });
});
