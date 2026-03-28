import { LovelaceCardConfig } from "custom-card-helpers";

export type EntryType = "breakfast" | "lunch" | "dinner" | "side" | "dessert" | "drink" | "snack";
export type LayoutType = "horizontal" | "vertical";

export interface DisplayOptions {
  show_image: boolean;
  show_rating: boolean;
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
  recipe_yield?: string;
  ingredients?: RecipeIngredient[];
  instructions?: RecipeInstruction[];
  tags?: string[];
  tools?: string[];
  original_url?: string;
}
