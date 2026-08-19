import type { HomeAssistant } from '../types';
import { MEALIE_DOMAIN } from '../config.card.js';

export type MealieFeature =
  | 'shopping_list'
  | 'interactive_rating'
  | 'favorites'
  | 'import_recipe'
  | 'random_mealplan'
  | 'edit_mealplan'
  | 'delete_mealplan';

const FEATURE_SERVICES: Record<MealieFeature, string> = {
  shopping_list: 'add_recipe_to_shopping_list',
  interactive_rating: 'rate_recipe',
  favorites: 'add_recipe_favorite',
  import_recipe: 'import_recipe',
  random_mealplan: 'set_random_mealplan',
  edit_mealplan: 'update_mealplan',
  delete_mealplan: 'delete_mealplan',
};

export function isFeatureSupported(hass: HomeAssistant | undefined, feature: MealieFeature): boolean {
  return !!hass?.services?.[MEALIE_DOMAIN]?.[FEATURE_SERVICES[feature]];
}
