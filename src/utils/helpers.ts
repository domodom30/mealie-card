import type { HomeAssistant } from 'custom-card-helpers';
import { DEFAULT_RESULT_LIMIT, MEALIE_DOMAIN } from '../config.card.js';
import type { MealiePlanRecipe } from '../types.js';
import localize from './translate.js';

export interface CalendarEntity {
  entity_id: string;
  friendly_name: string;
  state: string;
  attributes: Record<string, any>;
}

export async function getMealieConfigEntryId(hass: HomeAssistant): Promise<string> {
  try {
    const entries = await hass.callWS<any[]>({
      type: 'config_entries/get'
    });

    const mealieEntry = entries.find((e) => e.domain === MEALIE_DOMAIN);

    if (!mealieEntry?.entry_id) {
      throw new Error(localize('error.missing_config'));
    }

    return mealieEntry.entry_id;
  } catch (err) {
    throw new Error(`${localize('error.missing_config')}: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
  }
}

export function getMealieCalendarStates(hass: HomeAssistant): Array<{
  entity_id: string;
  friendly_name: string;
}> {
  if (!hass?.states) {
    return [];
  }

  const calendarStates: Array<{
    entity_id: string;
    friendly_name: string;
  }> = [];

  Object.keys(hass.states).forEach((entityId) => {
    if (entityId.startsWith('calendar.') && entityId.includes('mealie')) {
      const state = hass.states[entityId];

      calendarStates.push({
        entity_id: entityId,
        friendly_name: state.attributes.friendly_name || entityId
      });
    }
  });

  return calendarStates;
}

export async function getMealieCalendars(hass: HomeAssistant): Promise<CalendarEntity[]> {
  try {
    if (!hass?.states) {
      return [];
    }

    const calendars: CalendarEntity[] = [];

    Object.keys(hass.states).forEach((entityId) => {
      const state = hass.states[entityId];

      if (entityId.startsWith('calendar.') && entityId.includes('mealie')) {
        calendars.push({
          entity_id: entityId,
          friendly_name: state.attributes.friendly_name || entityId,
          state: state.state,
          attributes: state.attributes
        });
      }
    });

    return calendars.sort((a, b) => a.friendly_name.localeCompare(b.friendly_name));
  } catch (err) {
    return [];
  }
}

export async function getMealieCalendarsByType(hass: HomeAssistant): Promise<{
  breakfast?: CalendarEntity;
  lunch?: CalendarEntity;
  dinner?: CalendarEntity;
  side?: CalendarEntity;
  other: CalendarEntity[];
}> {
  try {
    const calendars = await getMealieCalendars(hass);

    const result: {
      breakfast?: CalendarEntity;
      lunch?: CalendarEntity;
      dinner?: CalendarEntity;
      side?: CalendarEntity;
      other: CalendarEntity[];
    } = {
      other: []
    };

    calendars.forEach((calendar) => {
      const entityId = calendar.entity_id.toLowerCase();

      if (entityId.includes('breakfast') || entityId.includes('petit_dejeuner')) {
        result.breakfast = calendar;
      } else if (entityId.includes('lunch') || entityId.includes('dejeuner')) {
        result.lunch = calendar;
      } else if (entityId.includes('dinner') || entityId.includes('diner') || entityId.includes('souper')) {
        result.dinner = calendar;
      } else if (entityId.includes('side') || entityId.includes('accompagnement')) {
        result.side = calendar;
      } else {
        result.other.push(calendar);
      }
    });

    return result;
  } catch (err) {
    return { other: [] };
  }
}

export function hasMealieCalendars(hass: HomeAssistant): boolean {
  if (!hass?.states) {
    return false;
  }

  return Object.keys(hass.states).some((entityId) => entityId.startsWith('calendar.') && entityId.includes('mealie'));
}

export async function getMealieRecipes(
  hass: HomeAssistant,
  options: {
    configEntryId?: string;
    resultLimit?: number | string;
  } = {}
): Promise<any[]> {
  try {
    let configEntryId = options.configEntryId;
    if (!configEntryId) {
      configEntryId = await getMealieConfigEntryId(hass);
    }

    let resultLimit = options.resultLimit ?? DEFAULT_RESULT_LIMIT;
    if (typeof resultLimit === 'string') {
      resultLimit = parseInt(resultLimit, 10);
      if (isNaN(resultLimit)) {
        resultLimit = DEFAULT_RESULT_LIMIT;
      }
    }

    const serviceData: any = {
      config_entry_id: configEntryId,
      result_limit: resultLimit
    };

    const response: any = await hass.callWS({
      type: 'call_service',
      domain: MEALIE_DOMAIN,
      service: 'get_recipes',
      service_data: serviceData,
      return_response: true
    });

    const recipes = response?.response?.recipes?.items || [];
    return recipes;
  } catch (err) {
    throw new Error(`${localize('error.error_loading')}: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
  }
}

export async function getMealPlan(
  hass: HomeAssistant,
  options: {
    configEntryId?: string;
    startDate?: string;
    endDate?: string;
    days?: number;
  } = {}
): Promise<any> {
  try {
    let configEntryId = options.configEntryId;
    if (!configEntryId) {
      configEntryId = await getMealieConfigEntryId(hass);
    }

    const today = new Date();
    const startDate = options.startDate || today.toISOString().split('T')[0];

    let endDate = options.endDate;
    if (!endDate && options.days) {
      const end = new Date(today);
      end.setDate(end.getDate() + (options.days - 1));
      endDate = end.toISOString().split('T')[0];
    } else if (!endDate) {
      endDate = startDate;
    }

    const serviceData: any = {
      config_entry_id: configEntryId,
      start_date: startDate,
      end_date: endDate
    };

    const response: any = await hass.callWS({
      type: 'call_service',
      domain: MEALIE_DOMAIN,
      service: 'get_mealplan',
      service_data: serviceData,
      return_response: true
    });

    const mealplan = response?.response?.mealplan || [];

    return mealplan;
  } catch (err) {
    throw new Error(`${localize('error.error_loading')}: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
  }
}

export async function getMealieRecipe(
  hass: HomeAssistant,
  options: {
    configEntryId?: string;
    recipeId: string;
  }
): Promise<any> {
  try {
    let configEntryId = options.configEntryId;
    if (!configEntryId) {
      configEntryId = await getMealieConfigEntryId(hass);
    }

    const serviceData: any = {
      config_entry_id: configEntryId,
      recipe_id: options.recipeId
    };

    const response: any = await hass.callWS({
      type: 'call_service',
      domain: MEALIE_DOMAIN,
      service: 'get_recipe',
      service_data: serviceData,
      return_response: true
    });

    const recipe = response?.response?.recipe || null;
    return recipe;
  } catch (err) {
    throw new Error(`${localize('error.error_loading')}: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
  }
}

export function formatTime(time: string | null): string {
  if (!time) return '';

  let formatted = time.toLowerCase().trim();

  const hourMatch = formatted.match(/(\d+)\s*(?:heures?|hours?|hrs?)/i);
  const minuteMatch = formatted.match(/(\d+)\s*(?:minutes?|mins?)/i);

  if (hourMatch || minuteMatch) {
    const parts: string[] = [];

    if (hourMatch) {
      parts.push(`${hourMatch[1]} h`);
    }
    if (minuteMatch) {
      parts.push(`${minuteMatch[1]} min`);
    }

    return parts.join(' ');
  }

  const replacements: [RegExp, string][] = [
    [/\s*(?:heures?|hours?|hrs?)\s*/gi, ' h '],
    [/\s*(?:minutes?|mins?)\s*/gi, ' min ']
  ];

  replacements.forEach(([pattern, replacement]) => {
    formatted = formatted.replace(pattern, replacement);
  });

  formatted = formatted.replace(/\s+/g, ' ').trim();

  return formatted;
}

export function formatDate(dateString: string, hass: HomeAssistant): string {
  const locale = hass?.locale?.language || undefined;
  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString(locale, options);
  } catch {
    return dateString;
  }
}

export function groupRecipesByType(recipes: MealiePlanRecipe[]): Record<string, MealiePlanRecipe[]> {
  const typeOrder = ['breakfast', 'lunch', 'dinner', 'side'];

  const grouped = recipes.reduce((acc, recipe) => {
    const type = recipe.entry_type || 'other';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(recipe);
    return acc;
  }, {} as Record<string, MealiePlanRecipe[]>);

  const sorted: Record<string, MealiePlanRecipe[]> = {};
  typeOrder.forEach((type) => {
    if (grouped[type]) {
      sorted[type] = grouped[type];
    }
  });

  Object.keys(grouped).forEach((type) => {
    if (!typeOrder.includes(type)) {
      sorted[type] = grouped[type];
    }
  });

  return sorted;
}

export function getEntryTypeLabel(entryType?: string): string {
  if (!entryType) return '';

  const labels: Record<string, string> = {
    'breakfast': `${localize('common.breakfast')}`,
    'lunch': `${localize('common.lunch')}`,
    'dinner': `${localize('common.dinner')}`,
    'side': `${localize('common.side')}`
  };

  return labels[entryType] || entryType.toUpperCase();
}

export function groupRecipesByDate(recipes: MealiePlanRecipe[]): Record<string, MealiePlanRecipe[]> {
  return recipes.reduce((acc, recipe) => {
    const date = recipe.mealplan_date || 'no-date';
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(recipe);
    return acc;
  }, {} as Record<string, MealiePlanRecipe[]>);
}

export function getRecipeImageUrl(baseUrl: string, recipeId: string, hasImage: boolean): string | null {
  if (!baseUrl || !recipeId || !hasImage) {
    return null;
  }

  try {
    const url = new URL(baseUrl);
    if (!['http:', 'https:'].includes(url.protocol)) {
      return null;
    }
  } catch (error) {
    return null;
  }

  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const cleanRecipeId = recipeId.trim().toLowerCase();

  if (!uuidRegex.test(cleanRecipeId)) {
    return null;
  }

  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  return `${cleanBaseUrl}/api/media/recipes/${cleanRecipeId}/images/min-original.webp`;
}

export function getRecipeUrl(baseUrl: string, slug: string, isClickable: boolean): string {
  if (!isClickable) {
    return '#';
  }

  if (!baseUrl || !slug) {
    return '#';
  }

  try {
    const url = new URL(baseUrl);
    if (!['http:', 'https:'].includes(url.protocol)) {
      return '#';
    }
  } catch (error) {
    return '#';
  }

  const cleanSlug = slug.trim().toLowerCase();

  if (!/^[a-z0-9\-_]+$/i.test(cleanSlug)) {
    return '#';
  }

  if (cleanSlug.length > 200) {
    return '#';
  }

  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  return `${cleanBaseUrl}/g/home/r/${encodeURIComponent(cleanSlug)}`;
}
