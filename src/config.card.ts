import type { MealieRecipeCardConfig, MealieTodayCardConfig } from './types';

export const MEALIE_DOMAIN = 'mealie';
export const DEFAULT_RESULT_LIMIT = 8;

export const DEFAULT_TODAY_CONFIG: Partial<MealieTodayCardConfig> = {
  type: 'custom:mealie-today-card',
  config_entry_id: null,
  entry_types: [],
  breakfast: 'common.breakfast',
  lunch: 'common.lunch',
  dinner: 'common.dinner',
  side: 'common.side',
  clickable: true,
  days_to_show: 1,
  show_image: true,
  show_prep_time: true,
  show_total_time: true,
  show_perform_time: true,
  show_ingredients: true,
  show_instructions: true,
  url: ''
};

export const DEFAULT_RECIPE_CONFIG: Partial<MealieRecipeCardConfig> = {
  type: 'custom:mealie-recipe-card',
  title: null,
  config_entry_id: null,
  show_image: true,
  show_prep_time: true,
  show_perform_time: true,
  show_total_time: true,
  clickable: true,
  url: '',
  result_limit: DEFAULT_RESULT_LIMIT
};

export function normalizeTodayConfig(config: Partial<MealieTodayCardConfig>): MealieTodayCardConfig {
  if (!config) {
    throw new Error('Invalid configuration for mealie-today-card');
  }

  return {
    type: config.type || DEFAULT_TODAY_CONFIG.type!,
    title: config.title || DEFAULT_TODAY_CONFIG.title!,
    config_entry_id: config.config_entry_id ?? DEFAULT_TODAY_CONFIG.config_entry_id!,
    entry_types: config.entry_types ?? DEFAULT_TODAY_CONFIG.entry_types!,
    url: config.url || DEFAULT_TODAY_CONFIG.url,
    clickable: config.clickable ?? DEFAULT_TODAY_CONFIG.clickable!,
    show_image: config.show_image ?? DEFAULT_TODAY_CONFIG.show_image!,
    show_prep_time: config.show_prep_time ?? DEFAULT_TODAY_CONFIG.show_prep_time!,
    show_total_time: config.show_total_time ?? DEFAULT_TODAY_CONFIG.show_total_time!,
    show_perform_time: config.show_perform_time ?? DEFAULT_TODAY_CONFIG.show_perform_time!,
    show_ingredients: config.show_ingredients ?? DEFAULT_TODAY_CONFIG.show_ingredients!,
    show_instructions: config.show_instructions ?? DEFAULT_TODAY_CONFIG.show_instructions!,
    days_to_show: config.days_to_show ?? DEFAULT_TODAY_CONFIG.days_to_show ?? 1
  };
}

export function normalizeRecipeConfig(config: Partial<MealieRecipeCardConfig>): MealieRecipeCardConfig {
  if (!config) {
    throw new Error('Invalid configuration for mealie-recipe-card');
  }

  return {
    type: config.type || DEFAULT_RECIPE_CONFIG.type!,
    title: config.title !== undefined ? config.title : DEFAULT_RECIPE_CONFIG.title!,
    config_entry_id: config.config_entry_id ?? DEFAULT_RECIPE_CONFIG.config_entry_id!,
    show_image: config.show_image ?? DEFAULT_RECIPE_CONFIG.show_image!,
    show_prep_time: config.show_prep_time ?? DEFAULT_RECIPE_CONFIG.show_prep_time!,
    show_perform_time: config.show_perform_time ?? DEFAULT_RECIPE_CONFIG.show_perform_time!,
    show_total_time: config.show_total_time ?? DEFAULT_RECIPE_CONFIG.show_total_time!,
    clickable: config.clickable ?? DEFAULT_RECIPE_CONFIG.clickable!,
    url: config.url ?? DEFAULT_RECIPE_CONFIG.url!,
    result_limit: config.result_limit ?? DEFAULT_RECIPE_CONFIG.result_limit!
  };
}
