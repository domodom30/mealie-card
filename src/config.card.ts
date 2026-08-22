import type { MealieRecipeCardConfig, MealieMealplanCardConfig, DisplayOptions, BaseMealieCardConfig } from './types';

export const MEALIE_DOMAIN = 'mealie';
export const DEFAULT_RESULT_LIMIT = 9999;

export const FAVORITES_FETCH_LIMIT = 9999;

const COMMON_DISPLAY_DEFAULTS: DisplayOptions = {
  show_image: false,
  show_rating: false,
  show_servings: false,
  show_prep_time: true,
  show_total_time: true,
  show_perform_time: true,
  show_description: false,
};

export const DEFAULT_MEALIE_GROUP_SLUG = 'home';

const COMMON_BASE_DEFAULTS: Pick<BaseMealieCardConfig, 'url' | 'recipe_view' | 'mealie_group_slug'> = {
  url: '',
  recipe_view: 'dialog',
  mealie_group_slug: DEFAULT_MEALIE_GROUP_SLUG,
};

export const DEFAULT_MEALPLAN_CONFIG: Partial<MealieMealplanCardConfig> = {
  type: 'custom:mealie-mealplan-card',
  entry_types: [],
  recipes_layout: 'vertical',
  days_layout: 'vertical',
  day_offset: 0,
  recipes_columns: 2,
  days_columns: 2,
  show_random_button: true,
  show_note_button: true,
  show_view_recipe_button: true,
  show_shopping_list_button: true,
  show_edit_mealplan_button: true,
  show_delete_mealplan_button: true,
  default_shopping_list_id: '',
  ...COMMON_DISPLAY_DEFAULTS,
  ...COMMON_BASE_DEFAULTS,
};

export const DEFAULT_RECIPE_CONFIG: Partial<MealieRecipeCardConfig> = {
  type: 'custom:mealie-recipe-card',
  result_limit: DEFAULT_RESULT_LIMIT,
  show_search: false,
  show_favorites_only: false,
  show_favorite: false,
  show_import_button: false,
  default_shopping_list_id: '',
  ...COMMON_DISPLAY_DEFAULTS,
  ...COMMON_BASE_DEFAULTS,
};

function normalizeConfig<T extends Record<string, unknown>>(config: Partial<T>, defaults: Partial<T>): T {
  const result = { ...config } as T;
  for (const key of Object.keys(defaults) as (keyof T)[]) {
    result[key] = (result[key] ?? defaults[key]) as T[keyof T];
  }
  return result;
}

export function normalizeTodayConfig(config: Partial<MealieMealplanCardConfig>): MealieMealplanCardConfig {
  return normalizeConfig(config, DEFAULT_MEALPLAN_CONFIG);
}

export function normalizeRecipeConfig(config: Partial<MealieRecipeCardConfig>): MealieRecipeCardConfig {
  return normalizeConfig(config, DEFAULT_RECIPE_CONFIG);
}
