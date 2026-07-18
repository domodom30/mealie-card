import type { HomeAssistant } from 'custom-card-helpers';
import { DEFAULT_RESULT_LIMIT, MEALIE_DOMAIN } from '../config.card.js';
import type { EntryType, MealiePlanRecipe, MealieRecipe, RecipeFavorite, RecipeIngredient, ShoppingListItem } from '../types.js';
import { formatIngredientText } from './format.js';
import { localizeForLang } from './translate.js';

interface HassCallServiceWithResponse {
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: { entity_id?: string | string[] },
    notifyOnError?: boolean,
    returnResponse?: boolean
  ): Promise<{ response: unknown }>;
}

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
  favorites?: RecipeFavorite[];
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

interface MealplanEntryOptions {
  configEntryId?: string;
  date: string;
  entryType: EntryType;
  recipeId?: string;
  noteTitle?: string;
  noteText?: string;
}

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

const MIN_SHOPPING_LIST_AIOMEALIE = '1.2.5';

interface IntegrationManifest {
  requirements?: string[];
}

function parseAiomealieVersion(requirements: string[] | undefined): string | null {
  const entry = requirements?.find((req) => req.startsWith('aiomealie'));
  const match = entry?.match(/(\d+(?:\.\d+)*)/);
  return match ? match[1] : null;
}

function isAtLeastVersion(version: string, minimum: string): boolean {
  const current = version.split('.').map(Number);
  const target = minimum.split('.').map(Number);
  for (let i = 0; i < Math.max(current.length, target.length); i++) {
    const a = current[i] ?? 0;
    const b = target[i] ?? 0;
    if (a !== b) return a > b;
  }
  return true;
}

const shoppingListSupportCache = new WeakMap<object, Promise<boolean>>();

export function isShoppingListSupported(hass: HomeAssistant): Promise<boolean> {
  const key = (hass as { connection?: object }).connection ?? hass;
  const cached = shoppingListSupportCache.get(key);
  if (cached) return cached;

  const result = (async () => {
    try {
      const manifest = await hass.callWS<IntegrationManifest>({ type: 'manifest/get', integration: MEALIE_DOMAIN });
      const version = parseAiomealieVersion(manifest?.requirements);
      return version ? isAtLeastVersion(version, MIN_SHOPPING_LIST_AIOMEALIE) : true;
    } catch {
      return true;
    }
  })();

  shoppingListSupportCache.set(key, result);
  return result;
}

function createLocalizedError(key: string, err: unknown): Error {
  const message = err instanceof Error ? err.message : localizeForLang('en', 'error.error_loading');
  return new Error(`${localizeForLang('en', key)}: ${message}`);
}

async function withMealieError<T>(key: string, run: () => Promise<T>, onError?: (err: unknown) => void): Promise<T> {
  try {
    return await run();
  } catch (err) {
    onError?.(err);
    throw createLocalizedError(key, err);
  }
}

export async function getMealieConfigEntryId(hass: HomeAssistant): Promise<string> {
  const entries = await hass.callWS<Array<{ entry_id: string }>>({
    type: 'config_entries/get',
    domain: MEALIE_DOMAIN,
  });
  const entry_id = entries[0]?.entry_id;
  if (!entry_id) throw new Error(localizeForLang('en', 'error.missing_config'));
  return entry_id;
}

async function resolveEntryId(hass: HomeAssistant, configEntryId?: string): Promise<string> {
  const entryId = configEntryId || (await getMealieConfigEntryId(hass));
  if (!entryId) throw new Error(localizeForLang('en', 'error.missing_config'));
  return entryId;
}

async function callMealieService(hass: HomeAssistant, service: string, serviceData: Record<string, unknown>, configEntryId?: string): Promise<void> {
  const entryId = await resolveEntryId(hass, configEntryId);
  await hass.callService(MEALIE_DOMAIN, service, { config_entry_id: entryId, ...serviceData });
}

async function callMealieServiceWithResponse<T>(hass: HomeAssistant, service: string, serviceData: Record<string, unknown>, configEntryId?: string): Promise<T> {
  const entryId = await resolveEntryId(hass, configEntryId);
  const result = await (hass as unknown as HassCallServiceWithResponse).callService(
    MEALIE_DOMAIN,
    service,
    { config_entry_id: entryId, ...serviceData },
    undefined,
    undefined,
    true
  );
  return (result?.response ?? null) as T;
}

function unwrapRecipe(response: RecipeResponse | null): MealieRecipe | null {
  return response?.recipe ?? (response as unknown as MealieRecipe | null) ?? null;
}

function buildMealplanPayload(options: MealplanEntryOptions): Record<string, unknown> {
  return {
    date: options.date,
    entry_type: options.entryType,
    ...(options.recipeId && { recipe_id: options.recipeId }),
    ...(options.noteTitle && { note_title: options.noteTitle }),
    ...(options.noteText && { note_text: options.noteText }),
  };
}

export function getMealieRecipes(
  hass: HomeAssistant,
  options: { configEntryId?: string; resultLimit?: number | string; search?: string } = {}
): Promise<MealieRecipe[]> {
  return withMealieError('error.error_loading', async () => {
    const serviceData: Record<string, unknown> = { result_limit: options.resultLimit || DEFAULT_RESULT_LIMIT };
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

export function getRecipeFavorites(hass: HomeAssistant, configEntryId?: string): Promise<RecipeFavorite[]> {
  return withMealieError('error.error_loading', async () => {
    const response = await callMealieServiceWithResponse<FavoritesResponse>(hass, 'get_recipe_favorites', {}, configEntryId);
    return response?.favorites ?? [];
  });
}

export function addRecipeFavorite(hass: HomeAssistant, slug: string, configEntryId?: string): Promise<void> {
  return withMealieError('error.error_loading', () => {
    if (!slug) throw new Error(localizeForLang('en', 'error.error_loading'));
    return callMealieService(hass, 'add_recipe_favorite', { recipe_slug: slug }, configEntryId);
  });
}

export function removeRecipeFavorite(hass: HomeAssistant, slug: string, configEntryId?: string): Promise<void> {
  return withMealieError('error.error_loading', () => {
    if (!slug) throw new Error(localizeForLang('en', 'error.error_loading'));
    return callMealieService(hass, 'remove_recipe_favorite', { recipe_slug: slug }, configEntryId);
  });
}

export function rateRecipe(hass: HomeAssistant, slug: string, rating: number, configEntryId?: string): Promise<void> {
  return withMealieError('error.error_loading', () => {
    if (!slug) throw new Error(localizeForLang('en', 'error.error_loading'));
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
  }
): Promise<void> {
  return withMealieError('error.error_loading', async () => {
    const svc = hass as unknown as HassCallServiceWithResponse;
    const getItems = async (): Promise<ShoppingListItem[]> => {
      const result = await svc.callService(MEALIE_DOMAIN, 'get_shopping_list_items', {}, { entity_id: options.shoppingEntityId }, undefined, true);
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
        const ingText = formatIngredientText(ing, options.quantity).toLowerCase().trim();
        match = newItems.find((i) => !toDelete.includes(i.item_id) && (i.note?.toLowerCase().trim() === ingText || i.display?.toLowerCase().trim() === ingText));
      }
      if (match) toDelete.push(match.item_id);
    }

    if (toDelete.length > 0) {
      await hass.callService('todo', 'remove_item', { item: toDelete }, { entity_id: options.shoppingEntityId });
    }
  }, (err) => console.error('[mealie-card] addRecipeToShoppingListPartial error:', err));
}

export function getMealieShoppingLists(hass: HomeAssistant, configEntryId?: string): Promise<MealieShoppingList[]> {
  return hass
    .callWS<EntityRegistryEntry[]>({ type: 'config/entity_registry/list' })
    .then((entries) =>
      entries
        .filter((e) => e.platform === MEALIE_DOMAIN && e.entity_id.startsWith('todo.') && (!configEntryId || e.config_entry_id === configEntryId))
        .map((e) => {
          const underscoreIdx = e.unique_id.indexOf('_');
          return {
            id: underscoreIdx > 0 ? e.unique_id.substring(underscoreIdx + 1) : e.unique_id,
            name: e.name ?? e.original_name ?? e.entity_id,
            entity_id: e.entity_id,
          };
        })
    )
    .catch(() => []);
}
