import { describe, expect, it } from 'vitest';
import { addRecipeToShoppingList, addToMealplan, getMealieRecipes, getMealieShoppingLists, getMealPlan } from './mealie-api.js';
import { MealieActionError } from './mealie-error.js';
import { createHassStub, type HassStubOptions } from '../test-utils/hass-stub.js';

const CONFIG_ENTRY_ID = 'entry-1';

const ALL_ACTIONS = [
  'get_mealplan',
  'get_recipes',
  'get_shopping_lists',
  'set_mealplan',
  'add_recipe_to_shopping_list',
];

function stub(options: HassStubOptions = {}) {
  return createHassStub({ services: { mealie: ALL_ACTIONS }, ...options });
}

describe('getMealPlan', () => {
  it('sorts entries by meal order rather than by response order', async () => {
    const hass = stub({
      serviceResponses: {
        'mealie.get_mealplan': {
          mealplan: [
            { entry_type: 'dinner', mealplan_id: 3 },
            { entry_type: 'breakfast', mealplan_id: 1 },
            { entry_type: 'lunch', mealplan_id: 2 },
          ],
        },
      },
    });

    const plan = await getMealPlan(hass, { configEntryId: CONFIG_ENTRY_ID, startDate: '2026-08-19', endDate: '2026-08-19' });
    expect(plan.map((e) => e.entry_type)).toEqual(['breakfast', 'lunch', 'dinner']);
  });

  it('places unknown entry types last', async () => {
    const hass = stub({
      serviceResponses: {
        'mealie.get_mealplan': {
          mealplan: [{ entry_type: 'brunch' }, { entry_type: 'breakfast' }],
        },
      },
    });

    const plan = await getMealPlan(hass, { configEntryId: CONFIG_ENTRY_ID, startDate: '2026-08-19', endDate: '2026-08-19' });
    expect(plan.map((e) => e.entry_type)).toEqual(['breakfast', 'brunch']);
  });

  it('passes the date range and the config entry to the action', async () => {
    const hass = stub({ serviceResponses: { 'mealie.get_mealplan': { mealplan: [] } } });
    await getMealPlan(hass, { configEntryId: CONFIG_ENTRY_ID, startDate: '2026-08-19', endDate: '2026-08-21' });

    expect(hass.calls[0].serviceData).toEqual({
      config_entry_id: CONFIG_ENTRY_ID,
      start_date: '2026-08-19',
      end_date: '2026-08-21',
    });
  });

  it('returns an empty list when the response carries no mealplan', async () => {
    const hass = stub({ serviceResponses: { 'mealie.get_mealplan': {} } });
    await expect(getMealPlan(hass, { configEntryId: CONFIG_ENTRY_ID, startDate: '2026-08-19', endDate: '2026-08-19' })).resolves.toEqual([]);
  });
});

describe('getMealieRecipes', () => {
  it('applies the default result limit and omits an empty search', async () => {
    const hass = stub({ serviceResponses: { 'mealie.get_recipes': { recipes: { items: [] } } } });
    await getMealieRecipes(hass, { configEntryId: CONFIG_ENTRY_ID });

    expect(hass.calls[0].serviceData).toEqual({ config_entry_id: CONFIG_ENTRY_ID, result_limit: 10 });
  });

  it('forwards the search terms when a query is given', async () => {
    const hass = stub({ serviceResponses: { 'mealie.get_recipes': { recipes: { items: [] } } } });
    await getMealieRecipes(hass, { configEntryId: CONFIG_ENTRY_ID, resultLimit: 5, search: 'tarte' });

    expect(hass.calls[0].serviceData).toEqual({ config_entry_id: CONFIG_ENTRY_ID, result_limit: 5, search_terms: 'tarte' });
  });

  it('returns an empty list when the response is empty', async () => {
    const hass = stub({ serviceResponses: { 'mealie.get_recipes': {} } });
    await expect(getMealieRecipes(hass, { configEntryId: CONFIG_ENTRY_ID })).resolves.toEqual([]);
  });
});

describe('addToMealplan', () => {
  it('builds a recipe payload', async () => {
    const hass = stub();
    await addToMealplan(hass, { configEntryId: CONFIG_ENTRY_ID, date: '2026-08-19', entryType: 'dinner', recipeId: 'abc' });

    expect(hass.calls[0].serviceData).toEqual({
      config_entry_id: CONFIG_ENTRY_ID,
      date: '2026-08-19',
      entry_type: 'dinner',
      recipe_id: 'abc',
    });
  });

  it('builds a note payload and omits an empty note body', async () => {
    const hass = stub();
    await addToMealplan(hass, { configEntryId: CONFIG_ENTRY_ID, date: '2026-08-19', entryType: 'lunch', noteTitle: 'Leftovers' });

    expect(hass.calls[0].serviceData).toEqual({
      config_entry_id: CONFIG_ENTRY_ID,
      date: '2026-08-19',
      entry_type: 'lunch',
      note_title: 'Leftovers',
    });
  });

  it('includes the note body when there is one', async () => {
    const hass = stub();
    await addToMealplan(hass, { configEntryId: CONFIG_ENTRY_ID, date: '2026-08-19', entryType: 'lunch', noteTitle: 'Leftovers', noteText: 'from Sunday' });

    expect(hass.calls[0].serviceData).toMatchObject({ note_text: 'from Sunday' });
  });
});

describe('error handling', () => {
  it('wraps a missing action into a MealieActionError carrying a translation key', async () => {
    const hass = createHassStub({ services: { mealie: ['get_mealplan'] } });

    const error = await addRecipeToShoppingList(hass, { configEntryId: CONFIG_ENTRY_ID, shoppingListId: 'l1', recipeId: 'r1' }).catch((e: unknown) => e);

    expect(error).toBeInstanceOf(MealieActionError);
    expect((error as MealieActionError).translationKey).toBe('error.error_loading');
    expect((error as MealieActionError).detail).toBe('Action mealie.add_recipe_to_shopping_list not found');
  });

  it('uses a dedicated key when adding a recipe to the mealplan fails', async () => {
    const hass = createHassStub({ services: { mealie: [] } });

    const error = await addToMealplan(hass, { configEntryId: CONFIG_ENTRY_ID, date: '2026-08-19', entryType: 'dinner', recipeId: 'abc' }).catch(
      (e: unknown) => e
    );

    expect((error as MealieActionError).translationKey).toBe('error.error_adding_recipe');
  });

  it('reports a missing config entry when none can be resolved', async () => {
    const hass = createHassStub({ services: { mealie: ALL_ACTIONS }, wsResponses: { 'config_entries/get': [] } });

    const error = await getMealieRecipes(hass).catch((e: unknown) => e);
    expect((error as MealieActionError).translationKey).toBe('error.missing_config');
  });

  it('discovers a loaded config entry when none is configured on the card', async () => {
    const hass = createHassStub({
      services: { mealie: ALL_ACTIONS },
      serviceResponses: { 'mealie.get_recipes': { recipes: { items: [] } } },
      wsResponses: {
        'config_entries/get': [
          { entry_id: 'broken', state: 'setup_error' },
          { entry_id: 'good', state: 'loaded' },
        ],
      },
    });

    await getMealieRecipes(hass);
    expect(hass.calls[0].serviceData).toMatchObject({ config_entry_id: 'good' });
  });
});

describe('getMealieShoppingLists', () => {
  it('pairs each list with its todo entity', async () => {
    const hass = stub({
      serviceResponses: {
        'mealie.get_shopping_lists': {
          shopping_lists: [
            { list_id: 'aaa', name: 'Weekly' },
            { list_id: 'bbb', name: 'Party' },
          ],
        },
      },
      wsResponses: {
        'config/entity_registry/list': [
          { entity_id: 'todo.mealie_weekly', platform: 'mealie', unique_id: 'entry-1_aaa', config_entry_id: CONFIG_ENTRY_ID },
          { entity_id: 'todo.mealie_party', platform: 'mealie', unique_id: 'entry-1_bbb', config_entry_id: CONFIG_ENTRY_ID },
          { entity_id: 'todo.other', platform: 'local_todo', unique_id: 'x_aaa', config_entry_id: 'another' },
        ],
      },
    });

    const lists = await getMealieShoppingLists(hass, CONFIG_ENTRY_ID);
    expect(lists).toEqual([
      { id: 'aaa', name: 'Weekly', entity_id: 'todo.mealie_weekly' },
      { id: 'bbb', name: 'Party', entity_id: 'todo.mealie_party' },
    ]);
  });

  // An empty entity_id is what makes the dialog fall back to a full add.
  it('leaves the entity id empty when no todo entity matches', async () => {
    const hass = stub({
      serviceResponses: { 'mealie.get_shopping_lists': { shopping_lists: [{ list_id: 'aaa', name: 'Weekly' }] } },
      wsResponses: { 'config/entity_registry/list': [] },
    });

    const lists = await getMealieShoppingLists(hass, CONFIG_ENTRY_ID);
    expect(lists).toEqual([{ id: 'aaa', name: 'Weekly', entity_id: '' }]);
  });

  it('ignores entities belonging to another config entry', async () => {
    const hass = stub({
      serviceResponses: { 'mealie.get_shopping_lists': { shopping_lists: [{ list_id: 'aaa', name: 'Weekly' }] } },
      wsResponses: {
        'config/entity_registry/list': [{ entity_id: 'todo.mealie_weekly', platform: 'mealie', unique_id: 'other_aaa', config_entry_id: 'another-entry' }],
      },
    });

    const lists = await getMealieShoppingLists(hass, CONFIG_ENTRY_ID);
    expect(lists[0].entity_id).toBe('');
  });
});
