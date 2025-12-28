import type { MealieRecipeCardConfig, MealieMealplanCardConfig } from './types';

export const MEALIE_DOMAIN = 'mealie';
export const DEFAULT_RESULT_LIMIT = 10;

const COMMON_DISPLAY_DEFAULTS = {
  show_image: false,
  show_prep_time: true,
  show_total_time: true,
  show_perform_time: true,
  show_description: false,
  clickable: false
} as const;

const COMMON_BASE_DEFAULTS = {
  url: '',
  group: 'home'
} as const;

export const DEFAULT_MEALPLAN_CONFIG: Partial<MealieMealplanCardConfig> = {
  type: 'custom:mealie-mealplan-card',
  entry_types: [],
  layout: 'vertical',
  recipes_layout: 'vertical',
  day_to_show: 0,
  ...COMMON_DISPLAY_DEFAULTS,
  ...COMMON_BASE_DEFAULTS
};

export const DEFAULT_RECIPE_CONFIG: Partial<MealieRecipeCardConfig> = {
  type: 'custom:mealie-recipe-card',
  title: null,
  result_limit: DEFAULT_RESULT_LIMIT,
  ...COMMON_DISPLAY_DEFAULTS,
  ...COMMON_BASE_DEFAULTS
};

function normalizeConfig<T extends Record<string, any>>(config: Partial<T>, defaults: Partial<T>, errorMsg: string): T {
  if (!config) {
    throw new Error(errorMsg);
  }

  const normalized = {} as T;

  for (const key in defaults) {
    normalized[key] = config[key] ?? defaults[key];
  }

  return normalized;
}

export function normalizeTodayConfig(config: Partial<MealieMealplanCardConfig>): MealieMealplanCardConfig {
  return normalizeConfig(config, DEFAULT_MEALPLAN_CONFIG, 'Invalid configuration for mealie-mealplan-card');
}

export function normalizeRecipeConfig(config: Partial<MealieRecipeCardConfig>): MealieRecipeCardConfig {
  return normalizeConfig(config, DEFAULT_RECIPE_CONFIG, 'Invalid configuration for mealie-recipe-card');
}
