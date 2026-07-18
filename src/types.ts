import type { LovelaceCardConfig } from 'custom-card-helpers';

export const ENTRY_TYPES = ['breakfast', 'lunch', 'dinner', 'side', 'dessert', 'drink', 'snack'] as const;
export type EntryType = (typeof ENTRY_TYPES)[number];
export type LayoutType = 'horizontal' | 'vertical';

export interface DisplayOptions {
  show_image: boolean;
  show_rating: boolean;
  show_servings: boolean;
  show_prep_time: boolean;
  show_total_time: boolean;
  show_perform_time: boolean;
  show_description: boolean;
}

export interface BaseMealieCardConfig extends LovelaceCardConfig {
  type: string;
  config_entry_id: string | null;
  url?: string;
}

export interface MealieMealplanCardConfig extends BaseMealieCardConfig, DisplayOptions {
  type: 'custom:mealie-mealplan-card';
  entry_types?: string[];
  recipes_layout: LayoutType;
  days_layout?: LayoutType;
  days_to_show?: number;
  show_random_button?: boolean;
  default_shopping_list_id?: string;
}

export interface MealieRecipeCardConfig extends BaseMealieCardConfig, DisplayOptions {
  type: 'custom:mealie-recipe-card';
  result_limit?: number;
  show_search?: boolean;
  show_favorites_only?: boolean;
  show_favorite?: boolean;
  show_import_button?: boolean;
  default_shopping_list_id?: string;
}

export interface TimeRow {
  icon: string;
  label: string;
  value: string;
}

export interface RecipeTag {
  tag_id: string;
  name: string;
  slug: string;
}

export interface RecipeCategory {
  category_id: string;
  name: string;
  slug: string;
}

export interface RecipeRating {
  recipe_id: string;
  is_favorite: boolean;
  recipe_slug?: string | null;
  rating?: number | null;
}

export interface RecipeFavorite {
  recipe_id: string;
  slug?: string;
  name?: string;
}

export interface ShoppingListItem {
  item_id: string;
  food_id?: string | null;
  note?: string | null;
  display?: string | null;
}

export interface HassEntityRegistryEntry {
  platform?: string;
  config_entry_id?: string | null;
  device_id?: string | null;
}

export interface HassDeviceRegistryEntry {
  config_entries?: string[];
}

export interface HassWithRegistries {
  entities?: Record<string, HassEntityRegistryEntry>;
  devices?: Record<string, HassDeviceRegistryEntry>;
}

export interface RecipeFood {
  food_id: string;
  name: string;
  description: string;
  plural_name?: string | null;
  aliases?: string[];
}

export interface RecipeUnit {
  unit_id?: string;
  name: string;
  plural_name?: string | null;
  abbreviation?: string | null;
  plural_abbreviation?: string | null;
  use_abbreviation?: boolean;
  fraction?: boolean;
}

export interface RecipeIngredient {
  note?: string;
  title?: string | null;
  display?: string | null;
  quantity?: number | null;
  unit?: RecipeUnit | string | null;
  food?: RecipeFood | null;
  reference_id?: string;
  original_text?: string | null;
  is_food?: boolean | null;
}

export interface RecipeInstruction {
  text?: string;
  title?: string | null;
  instruction_id?: string;
  ingredient_references?: string[];
}

interface BaseRecipeData {
  recipe_id?: string;
  name: string;
  slug: string;
  description?: string;
  rating?: number | null;
  recipe_servings?: number | null;
  recipe_yield_quantity?: number | null;
  recipe_yield?: string | null;
  original_url?: string | null;
  image?: string | null;
  total_time?: string | null;
  prep_time?: string | null;
  perform_time?: string | null;
  tags?: RecipeTag[];
  categories?: RecipeCategory[];
}

export interface MealiePlanRecipe {
  mealplan_id: number;
  entry_type: EntryType;
  mealplan_date: string;
  title: string | null;
  description: string | null;
  recipe: BaseRecipeData | null;
}

export interface MealieRecipe extends BaseRecipeData {
  ingredients?: RecipeIngredient[];
  instructions?: RecipeInstruction[];
}

export type RecipeLike = Partial<Omit<BaseRecipeData, 'description'>> & {
  title?: string | null;
  description?: string | null;
  ingredients?: RecipeIngredient[];
};
