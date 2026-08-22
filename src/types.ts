export interface LovelaceCardConfig {
  type: string;
  [key: string]: unknown;
}

export interface HassEntityState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}

export interface HassThemes {
  default_theme: string;
  themes: Record<string, Record<string, string>>;
}

export interface HomeAssistant {
  states: Record<string, HassEntityState>;
  entities?: Record<string, HassEntityRegistryEntry>;
  devices?: Record<string, HassDeviceRegistryEntry>;
  services: Record<string, Record<string, unknown>>;
  locale: { language: string };
  themes: HassThemes;
  selectedTheme?: string | null;
  auth: { data: { hassUrl: string } };
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: { entity_id?: string | string[] },
    notifyOnError?: boolean,
    returnResponse?: boolean
  ): Promise<{ response?: unknown }>;
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
}

export type ValueChangedEvent<T> = CustomEvent<{ value: T }>;

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

export type RecipeViewMode = 'dialog' | 'webview' | 'browser';

export interface BaseMealieCardConfig extends LovelaceCardConfig {
  type: string;
  config_entry_id: string | null;
  url?: string;
  recipe_view?: RecipeViewMode;
  mealie_group_slug?: string;
}

export interface MealieMealplanCardConfig extends BaseMealieCardConfig, DisplayOptions {
  type: 'custom:mealie-mealplan-card';
  entry_types?: string[];
  recipes_layout: LayoutType;
  days_layout?: LayoutType;
  days_to_show?: number;
  day_offset?: number | string;
  recipes_columns?: number;
  days_columns?: number;
  show_random_button?: boolean;
  show_note_button?: boolean;
  show_view_recipe_button?: boolean;
  show_shopping_list_button?: boolean;
  show_edit_mealplan_button?: boolean;
  show_delete_mealplan_button?: boolean;
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
  rating?: number | null;
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
