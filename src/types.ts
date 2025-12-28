import { LovelaceCardConfig } from 'custom-card-helpers';

export type EntryType = 'breakfast' | 'lunch' | 'dinner' | 'side';
export type LayoutType = 'horizontal' | 'vertical';

interface DisplayOptions {
  show_image: boolean;
  show_prep_time: boolean;
  show_total_time: boolean;
  show_perform_time: boolean;
  show_description: boolean;
  clickable: boolean;
}

export interface BaseMealieCardConfig extends LovelaceCardConfig {
  type: string;
  title: string;
  config_entry_id: string | null;
  url?: string;
  group?: string;
}

export interface MealieMealplanCardConfig extends BaseMealieCardConfig, DisplayOptions {
  type: 'custom:mealie-mealplan-card';
  entry_types?: string[];
  layout: LayoutType;
  recipes_layout: LayoutType;
  day_to_show?: number;
}

export interface MealieRecipeCardConfig extends BaseMealieCardConfig, DisplayOptions {
  type: 'custom:mealie-recipe-card';
  result_limit?: number;
}

interface BaseRecipeData {
  recipe_id?: string;
  user_id?: string;
  group_id?: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  total_time?: string;
  prep_time?: string;
  perform_time?: string;
  household_id?: string;
}

export interface MealiePlanRecipe {
  mealplan_id: number;
  user_id: string;
  group_id: string;
  entry_type: EntryType;
  mealplan_date: string;
  title: string | null;
  description: string | null;
  recipe: BaseRecipeData & {
    recipe_yield?: string;
    original_url?: string;
  };
  household_id: string;
}

export interface RecipeIngredient {
  note?: string;
  display?: string;
  quantity?: number;
  unit?: string;
  food?: string;
}

export interface RecipeInstruction {
  text?: string;
  instruction?: string;
  title?: string;
}

export interface MealieRecipe extends BaseRecipeData {
  recipeYield?: string;
  cook_time?: string;
  ingredients?: RecipeIngredient[];
  instructions?: RecipeInstruction[];
  rating?: number;
  tags?: string[];
  tools?: string[];
  original_url?: string;
}
