import type { HomeAssistant } from '../types';
import { DEFAULT_RESULT_LIMIT, MEALIE_DOMAIN } from '../config.card.js';
import type { EntryType, MealiePlanRecipe, MealieRecipe, RecipeIngredient, RecipeRating, ShoppingListItem } from '../types.js';
import { formatIngredientText } from './format.js';
import { MealieActionError } from './mealie-error.js';

interface RecipesResponse {
  recipes?: { items?: MealieRecipe[] };
}
interface MealplanResponse {
  mealplan?: MealiePlanRecipe[];
}
interface RecipeResponse {
  recipe?: MealieRecipe;
}
interface FavoritesResponse {
  favorites?: RecipeRating[];
}

interface ShoppingListsResponse {
  shopping_lists?: { list_id: string; name: string; group_id?: string | null }[];
}

interface EntityRegistryEntry {
  entity_id: string;
  platform: string;
  unique_id: string;
  name: string | null;
  original_name: string | null;
  config_entry_id: string | null;
}

export interface MealieShoppingList {
  id: string;
  name: string;
  entity_id: string;
}

interface MealplanEntryBase {
  configEntryId?: string;
  date: string;
  entryType: EntryType;
}

type MealplanRecipeEntry = MealplanEntryBase & { recipeId: string; noteTitle?: never; noteText?: never };
type MealplanNoteEntry = MealplanEntryBase & { recipeId?: never; noteTitle: string; noteText?: string };

export type MealplanEntryOptions = MealplanRecipeEntry | MealplanNoteEntry;

const ENTRY_TYPE_ORDER: Record<string, number> = {
  breakfast: 1,
  lunch: 2,
  dinner: 3,
  side: 4,
  dessert: 5,
  drink: 6,
  snack: 7,
};

const UNORDERED_ENTRY_TYPE = 999;

async function withMealieError<T>(key: string, run: () => Promise<T>): Promise<T> {
  try {
    return await run();
  } catch (err) {
    throw err instanceof MealieActionError ? err : new MealieActionError(key, err);
  }
}

export async function getMealieConfigEntryId(hass: HomeAssistant): Promise<string> {
  const entries = await hass.callWS<Array<{ entry_id: string; state?: string }>>({
    type: 'config_entries/get',
    domain: MEALIE_DOMAIN,
  });
  const entry_id = (entries.find((e) => e.state === 'loaded') ?? entries[0])?.entry_id;
  if (!entry_id) throw new MealieActionError('error.missing_config');
  return entry_id;
}

async function resolveEntryId(hass: HomeAssistant, configEntryId?: string): Promise<string> {
  const entryId = configEntryId || (await getMealieConfigEntryId(hass));
  if (!entryId) throw new MealieActionError('error.missing_config');
  return entryId;
}

async function callMealieService(hass: HomeAssistant, service: string, serviceData: Record<string, unknown>, configEntryId?: string): Promise<void> {
  const entryId = await resolveEntryId(hass, configEntryId);
  await hass.callService(MEALIE_DOMAIN, service, { config_entry_id: entryId, ...serviceData }, undefined, false);
}

async function callMealieServiceWithResponse<T>(hass: HomeAssistant, service: string, serviceData: Record<string, unknown>, configEntryId?: string): Promise<T> {
  const entryId = await resolveEntryId(hass, configEntryId);
  const result = await hass.callService(MEALIE_DOMAIN, service, { config_entry_id: entryId, ...serviceData }, undefined, false, true);
  return (result?.response ?? null) as T;
}

function unwrapRecipe(response: RecipeResponse | null): MealieRecipe | null {
  return response?.recipe ?? null;
}

function buildMealplanPayload(options: MealplanEntryOptions): Record<string, unknown> {
  const base = { date: options.date, entry_type: options.entryType };
  if (options.recipeId) return { ...base, recipe_id: options.recipeId };
  return { ...base, note_title: options.noteTitle, ...(options.noteText && { note_text: options.noteText }) };
}

export function getMealieRecipes(
  hass: HomeAssistant,
  options: { configEntryId?: string; resultLimit?: number; search?: string } = {}
): Promise<MealieRecipe[]> {
  return withMealieError('error.error_loading', async () => {
    const serviceData: Record<string, unknown> = { result_limit: options.resultLimit ?? DEFAULT_RESULT_LIMIT };
    if (options.search) serviceData.search_terms = options.search;
    const response = await callMealieServiceWithResponse<RecipesResponse>(hass, 'get_recipes', serviceData, options.configEntryId);
    return response?.recipes?.items ?? [];
  });
}

export function getMealPlan(hass: HomeAssistant, options: { configEntryId?: string; startDate: string; endDate: string }): Promise<MealiePlanRecipe[]> {
  return withMealieError('error.error_loading', async () => {
    const response = await callMealieServiceWithResponse<MealplanResponse>(
      hass,
      'get_mealplan',
      { start_date: options.startDate, end_date: options.endDate },
      options.configEntryId
    );

    return (response?.mealplan ?? []).sort(
      (a, b) => (ENTRY_TYPE_ORDER[a.entry_type] || UNORDERED_ENTRY_TYPE) - (ENTRY_TYPE_ORDER[b.entry_type] || UNORDERED_ENTRY_TYPE)
    );
  });
}

export function getRecipe(hass: HomeAssistant, recipeSlug: string, configEntryId?: string): Promise<MealieRecipe | null> {
  return withMealieError('error.error_loading', async () =>
    unwrapRecipe(await callMealieServiceWithResponse<RecipeResponse>(hass, 'get_recipe', { recipe_id: recipeSlug }, configEntryId))
  );
}

export function importRecipe(hass: HomeAssistant, options: { configEntryId?: string; url: string; includeTags?: boolean }): Promise<MealieRecipe | null> {
  return withMealieError('error.error_loading', async () =>
    unwrapRecipe(
      await callMealieServiceWithResponse<RecipeResponse>(
        hass,
        'import_recipe',
        { url: options.url, ...(options.includeTags && { include_tags: true }) },
        options.configEntryId
      )
    )
  );
}

export function addToMealplan(hass: HomeAssistant, options: MealplanEntryOptions): Promise<void> {
  return withMealieError('error.error_adding_recipe', () => callMealieService(hass, 'set_mealplan', buildMealplanPayload(options), options.configEntryId));
}

export function updateMealplanEntry(hass: HomeAssistant, options: MealplanEntryOptions & { mealplanId: number }): Promise<void> {
  return withMealieError('error.error_updating_mealplan', () =>
    callMealieService(hass, 'update_mealplan', { mealplan_id: options.mealplanId, ...buildMealplanPayload(options) }, options.configEntryId)
  );
}

export function deleteMealplanEntry(hass: HomeAssistant, mealplanId: number, configEntryId?: string): Promise<void> {
  return withMealieError('error.error_deleting_mealplan', () => callMealieService(hass, 'delete_mealplan', { mealplan_id: mealplanId }, configEntryId));
}

export function setRandomMealplan(hass: HomeAssistant, options: { configEntryId?: string; date: string; entryType: EntryType }): Promise<void> {
  return withMealieError('error.error_adding_recipe', () =>
    callMealieService(hass, 'set_random_mealplan', { date: options.date, entry_type: options.entryType }, options.configEntryId)
  );
}

export function getRecipeFavorites(hass: HomeAssistant, configEntryId?: string): Promise<RecipeRating[]> {
  return withMealieError('error.error_loading', async () => {
    const response = await callMealieServiceWithResponse<FavoritesResponse>(hass, 'get_recipe_favorites', {}, configEntryId);
    return response?.favorites ?? [];
  });
}

export function addRecipeFavorite(hass: HomeAssistant, slug: string, configEntryId?: string): Promise<void> {
  return withMealieError('error.error_loading', () => {
    if (!slug) throw new MealieActionError('error.error_loading');
    return callMealieService(hass, 'add_recipe_favorite', { recipe_slug: slug }, configEntryId);
  });
}

export function removeRecipeFavorite(hass: HomeAssistant, slug: string, configEntryId?: string): Promise<void> {
  return withMealieError('error.error_loading', () => {
    if (!slug) throw new MealieActionError('error.error_loading');
    return callMealieService(hass, 'remove_recipe_favorite', { recipe_slug: slug }, configEntryId);
  });
}

export function rateRecipe(hass: HomeAssistant, slug: string, rating: number, configEntryId?: string): Promise<void> {
  return withMealieError('error.error_loading', () => {
    if (!slug) throw new MealieActionError('error.error_loading');
    return callMealieService(hass, 'rate_recipe', { recipe_slug: slug, rating }, configEntryId);
  });
}

export function addRecipeToShoppingList(
  hass: HomeAssistant,
  options: { configEntryId?: string; shoppingListId: string; recipeId: string; quantity?: number }
): Promise<void> {
  return withMealieError('error.error_loading', () =>
    callMealieService(
      hass,
      'add_recipe_to_shopping_list',
      {
        shopping_list_id: options.shoppingListId,
        recipe_id: options.recipeId,
        ...(options.quantity !== undefined && { recipe_increment_quantity: options.quantity }),
      },
      options.configEntryId
    )
  );
}

export function addRecipeToShoppingListPartial(
  hass: HomeAssistant,
  options: {
    configEntryId?: string;
    shoppingListId: string;
    shoppingEntityId: string;
    recipeId: string;
    quantity: number;
    deselectedIngredients: RecipeIngredient[];
    language?: string;
  }
): Promise<void> {
  return withMealieError('error.error_loading', async () => {
    const svc = hass;
    const getItems = async (): Promise<ShoppingListItem[]> => {
      const result = await svc.callService(MEALIE_DOMAIN, 'get_shopping_list_items', {}, { entity_id: options.shoppingEntityId }, false, true);
      const byEntity = result.response as Record<string, { items?: ShoppingListItem[] }> | undefined;
      return byEntity?.[options.shoppingEntityId]?.items ?? [];
    };

    const beforeIds = new Set((await getItems()).map((i) => i.item_id));

    await callMealieService(
      hass,
      'add_recipe_to_shopping_list',
      {
        shopping_list_id: options.shoppingListId,
        recipe_id: options.recipeId,
        recipe_increment_quantity: options.quantity,
      },
      options.configEntryId
    );

    const newItems = (await getItems()).filter((i) => !beforeIds.has(i.item_id));
    const toDelete: string[] = [];

    for (const ing of options.deselectedIngredients) {
      const foodId = ing.food?.food_id ?? null;
      let match = foodId ? newItems.find((i) => i.food_id === foodId && !toDelete.includes(i.item_id)) : undefined;

      if (!match) {
        const ingText = formatIngredientText(ing, options.quantity, true, options.language ?? 'en').toLowerCase().trim();
        match = newItems.find((i) => !toDelete.includes(i.item_id) && (i.note?.toLowerCase().trim() === ingText || i.display?.toLowerCase().trim() === ingText));
      }
      if (match) toDelete.push(match.item_id);
    }

    if (toDelete.length > 0) {
      await svc.callService('todo', 'remove_item', { item: toDelete }, { entity_id: options.shoppingEntityId }, false);
    }
  });
}

async function getTodoEntityIdsByListId(hass: HomeAssistant, configEntryId?: string): Promise<Map<string, string>> {
  const entries = await hass.callWS<EntityRegistryEntry[]>({ type: 'config/entity_registry/list' });
  return new Map(
    entries
      .filter((e) => e.platform === MEALIE_DOMAIN && e.entity_id.startsWith('todo.') && (!configEntryId || e.config_entry_id === configEntryId))
      .map((e) => [e.unique_id, e.entity_id])
  );
}

export function getMealieShoppingLists(hass: HomeAssistant, configEntryId?: string): Promise<MealieShoppingList[]> {
  return withMealieError('error.error_loading', async () => {
    const [response, entityIds] = await Promise.all([
      callMealieServiceWithResponse<ShoppingListsResponse>(hass, 'get_shopping_lists', {}, configEntryId),
      getTodoEntityIdsByListId(hass, configEntryId),
    ]);

    const entityIdFor = (listId: string): string => {
      for (const [uniqueId, entityId] of entityIds) {
        if (uniqueId.endsWith(`_${listId}`)) return entityId;
      }
      return '';
    };

    return (response?.shopping_lists ?? []).map((list) => ({
      id: list.list_id,
      name: list.name,
      entity_id: entityIdFor(list.list_id),
    }));
  });
}
