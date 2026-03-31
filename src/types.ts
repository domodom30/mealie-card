import { LovelaceCardConfig } from "custom-card-helpers";

export type EntryType = "breakfast" | "lunch" | "dinner" | "side" | "dessert" | "drink" | "snack";
export type LayoutType = "horizontal" | "vertical";

export interface DisplayOptions {
  show_image: boolean;
  show_rating: boolean;
  show_servings: boolean;
  show_yield_quantity: boolean;
  show_prep_time: boolean;
  show_total_time: boolean;
  show_perform_time: boolean;
  show_description: boolean;
}

export interface BaseMealieCardConfig extends LovelaceCardConfig {
  type: string;
  config_entry_id: string | null;
  url?: string;
  group?: string;
}

export interface MealieMealplanCardConfig extends BaseMealieCardConfig, DisplayOptions {
  type: "custom:mealie-mealplan-card";
  entry_types?: string[];
  layout: LayoutType;
  recipes_layout: LayoutType;
  day_offset?: number;
}

export interface MealieRecipeCardConfig extends BaseMealieCardConfig, DisplayOptions {
  type: "custom:mealie-recipe-card";
  result_limit?: number;
}

interface BaseRecipeData {
  recipe_id?: string;
  name: string;
  slug: string;
  description?: string;
  rating?: number;
  recipe_servings?: number;
  recipe_yield_quantity?: number;
  image?: string;
  total_time?: string;
  prep_time?: string;
  perform_time?: string;
}

export interface MealiePlanRecipe {
  mealplan_id: number;
  entry_type: EntryType;
  mealplan_date: string;
  title: string | null;
  description: string | null;
  recipe:
    | (BaseRecipeData & {
        recipe_yield?: string;
        original_url?: string;
      })
    | null;
}

export interface RecipeTag {
  tag_id: string;
  name: string;
  slug: string;
}

export interface RecipeFood {
  food_id: string;
  name: string;
  description: string;
}

export interface RecipeIngredient {
  note?: string;
  title?: string | null;
  display?: string | null;
  quantity?: number | null;
  unit?: string | null;
  food?: RecipeFood | null;
}

export interface RecipeInstruction {
  text?: string;
  title?: string | null;
}

export interface MealieRecipe extends BaseRecipeData {
  recipe_yield?: string;
  ingredients?: RecipeIngredient[];
  instructions?: RecipeInstruction[];
  tags?: RecipeTag[];
  original_url?: string;
}
