import { LovelaceCardConfig } from 'custom-card-helpers';

export interface BaseMealieCardConfig extends LovelaceCardConfig {
  type: string;
  title: string;
  config_entry_id: string | null;
}

export interface MealieTodayCardConfig extends BaseMealieCardConfig {
  type: 'custom:mealie-today-card';
  entry_types?: string[];
  clickable: boolean;
  show_image: boolean;
  show_prep_time: boolean;
  show_total_time: boolean;
  show_perform_time: boolean;
  show_description: boolean;
  layout: string;
  days_to_show?: number;
}

export interface MealieRecipeCardConfig extends BaseMealieCardConfig {
  type: 'custom:mealie-recipe-card';
  show_perform_time: boolean;
  show_total_time: boolean;
  show_description: boolean;
  result_limit?: number;
}

export interface MealiePlanRecipe {
  mealplan_id: number;
  user_id: string;
  group_id: string;
  entry_type: 'breakfast' | 'lunch' | 'dinner' | 'side';
  mealplan_date: string;
  title: string | null;
  description: string | null;
  recipe: {
    recipe_id: string;
    user_id: string;
    group_id: string;
    name: string;
    slug: string;
    description: string;
    total_time: string;
    prep_time: string;
    perform_time: string;
    image: string;
    recipe_yield: string;
    original_url: string;
    household_id: string;
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

export interface MealieRecipe {
  recipe_id?: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
  recipeYield?: string;
  prep_time?: string;
  perform_time?: string;
  total_time?: string;
  cook_time?: string;
  ingredients?: RecipeIngredient[];
  instructions?: RecipeInstruction[];
  rating?: number;
  tags?: string[];
  tools?: string[];
  original_url?: string;
}
