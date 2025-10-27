import { formatDateWeekday, HomeAssistant } from 'custom-card-helpers';
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

export function cleanAndValidateUrl(baseUrl: string | undefined): string | null {
  if (!baseUrl) {
    return null;
  }

  try {
    const trimmed = baseUrl.trim();
    let urlWithProtocol = trimmed;

    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      urlWithProtocol = `http://${trimmed}`;
    }

    const url = new URL(urlWithProtocol);
    return url.href.replace(/\/+$/, '');
  } catch (err) {
    console.error('URL invalide:', baseUrl, err);
    return null;
  }
}

function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid.trim().toLowerCase());
}

function isValidSlug(slug: string): boolean {
  const cleanSlug = slug.trim().toLowerCase();

  if (!/^[a-z0-9\-_]+$/i.test(cleanSlug)) {
    return false;
  }

  if (cleanSlug.length === 0 || cleanSlug.length > 200) {
    return false;
  }

  return true;
}

export function getRecipeImageUrl(baseUrl: string | undefined, recipeId: string, hasImage: boolean, imageVersion: string = 'min-original'): string | null {
  if (!hasImage || !recipeId || !baseUrl) {
    return null;
  }

  const validateUrl = cleanAndValidateUrl(baseUrl);
  if (!validateUrl) {
    console.error("URL de base invalide pour l'image:", baseUrl);
    return null;
  }

  if (!isValidUUID(recipeId)) {
    console.warn('Recipe ID invalide (pas un UUID):', recipeId);
    return null;
  }

  try {
    const cleanRecipeId = recipeId.trim().toLowerCase();
    const imageUrl = `${validateUrl}/api/media/recipes/${cleanRecipeId}/images/${imageVersion}.webp`;
    return imageUrl;
  } catch (err) {
    console.error("Erreur lors de la construction de l'URL de l'image:", err);
    return null;
  }
}

export function getRecipeUrl(baseUrl: string | undefined, recipeSlug: string, clickable: boolean, groupSlug: string): string {
  if (!clickable) {
    return '#';
  }
  if (!groupSlug) {
    groupSlug = 'home';
  }
  if (!recipeSlug || !baseUrl) {
    return '#';
  }

  const cleanBaseUrl = cleanAndValidateUrl(baseUrl);
  if (!cleanBaseUrl) {
    console.error('URL de base invalide pour la recette:', baseUrl);
    return '#';
  }

  if (!isValidSlug(recipeSlug)) {
    console.warn('Slug de recette invalide:', recipeSlug);
    return '#';
  }

  try {
    const cleanRecipeSlug = recipeSlug.trim().toLowerCase();
    const cleanGroupSlug = groupSlug.trim().toLowerCase();
    const cleanRecipeUrl = `${cleanBaseUrl}/g/${encodeURIComponent(cleanGroupSlug)}/r/${encodeURIComponent(cleanRecipeSlug)}`;

    return cleanRecipeUrl;
  } catch (err) {
    console.error("Erreur lors de la construction de l'URL de la recette:", err);
    return '#';
  }
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
      resultLimit = parseInt(resultLimit, DEFAULT_RESULT_LIMIT);
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
    const startDate = options.startDate || getLocalDateString(today);

    let endDate = options.endDate;
    if (!endDate && options.days) {
      const end = new Date(today);
      end.setDate(end.getDate() + (options.days - 1));
      endDate = getLocalDateString(end);
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

let cachedLang: string | null = null;
let cachedHourPattern: RegExp | null = null;
let cachedMinutePattern: RegExp | null = null;

function getTimePatterns(hass: HomeAssistant): { hourPattern: RegExp; minutePattern: RegExp } {
  const currentLang = hass?.locale?.language || undefined;

  if (cachedLang === currentLang && cachedHourPattern && cachedMinutePattern) {
    return {
      hourPattern: cachedHourPattern,
      minutePattern: cachedMinutePattern
    };
  }

  const hourTerms = [localize('time.hour'), localize('time.hours')].filter(Boolean);
  const minuteTerms = [localize('time.minute'), localize('time.minutes')].filter(Boolean);

  cachedLang = currentLang;
  cachedHourPattern = new RegExp(`(\\d+)\\s*(?:${hourTerms.join('|')})`, 'i');
  cachedMinutePattern = new RegExp(`(\\d+)\\s*(?:${minuteTerms.join('|')})`, 'i');

  return {
    hourPattern: cachedHourPattern,
    minutePattern: cachedMinutePattern
  };
}

export function formatTime(time: string | null, hass: HomeAssistant): string {
  if (!time) return '';

  const formatted = time.toLowerCase().trim();
  const { hourPattern, minutePattern } = getTimePatterns(hass);

  const hourMatch = formatted.match(hourPattern);
  const minuteMatch = formatted.match(minutePattern);

  if (hourMatch || minuteMatch) {
    const parts: string[] = [];

    if (hourMatch) {
      const hourShort = localize('time.hour_short');
      parts.push(`${hourMatch[1]} ${hourShort}`);
    }

    if (minuteMatch) {
      const minuteShort = localize('time.minute_short');
      parts.push(`${minuteMatch[1]} ${minuteShort}`);
    }

    return parts.join(' ');
  }
  return formatted.replace(/\s+/g, ' ').trim();
}

export function dateFormatWithDay(dateString: string, hass: HomeAssistant): string {
  const date = new Date(dateString + 'T00:00:00');
  return formatDateWeekday(date, hass.locale);
}

function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
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
