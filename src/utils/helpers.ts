import { formatDateWeekday, HomeAssistant } from 'custom-card-helpers';
import { DEFAULT_RESULT_LIMIT, MEALIE_DOMAIN } from '../config.card.js';
import localize from './translate.js';

export interface CalendarEntity {
  entity_id: string;
  friendly_name: string;
  state: string;
  attributes: {
    mealplan_date?: string;
    entry_type?: EntryType;
    recipe_id?: string;
    [key: string]: unknown;
  };
}

type EntryType = (typeof VALID_ENTRY_TYPES)[number];

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SLUG_REGEX = /^[a-z0-9\-_]+$/i;
const VALID_ENTRY_TYPES = ['breakfast', 'lunch', 'dinner', 'side'] as const;
const ENTRY_TYPE_ORDER: Record<string, number> = {
  breakfast: 1,
  lunch: 2,
  dinner: 3,
  side: 4
};

// Cache pour les patterns de temps
let cachedLang: string | null = null;
let cachedHourPattern: RegExp | null = null;
let cachedMinutePattern: RegExp | null = null;

// === Validation ===

function isValidUUID(uuid: string): boolean {
  return UUID_REGEX.test(uuid);
}

function isValidSlug(slug: string): boolean {
  const cleanSlug = slug.trim().toLowerCase();
  return SLUG_REGEX.test(cleanSlug) && cleanSlug.length > 0 && cleanSlug.length <= 200;
}

function validateMealPlanOptions(options: { date: string; entryType: EntryType }): void {
  if (!options.date) throw new Error('La date est requise');
  if (!options.entryType) throw new Error('Le type de repas est requis');
  if (!VALID_ENTRY_TYPES.includes(options.entryType)) {
    throw new Error(`Type de repas invalide. Valeurs acceptées: ${VALID_ENTRY_TYPES.join(', ')}`);
  }
}

// === URL Helpers ===

export function cleanAndValidateUrl(baseUrl?: string): string | null {
  if (!baseUrl) return null;

  try {
    const trimmed = baseUrl.trim();
    const urlWithProtocol = trimmed.startsWith('http') ? trimmed : `http://${trimmed}`;
    const url = new URL(urlWithProtocol);
    return url.href.replace(/\/+$/, '');
  } catch (err) {
    console.error('URL invalide:', baseUrl, err);
    return null;
  }
}

export function getRecipeImageUrl(baseUrl: string | undefined, recipeId: string, imageVersion: string = 'min-original'): string | null {
  if (!recipeId || !baseUrl) return null;

  const validatedUrl = cleanAndValidateUrl(baseUrl);
  if (!validatedUrl) {
    console.error("URL de base invalide pour l'image:", baseUrl);
    return null;
  }

  const cleanRecipeId = recipeId.trim().toLowerCase();
  if (!isValidUUID(cleanRecipeId)) {
    console.warn('Recipe ID invalide:', recipeId);
    return null;
  }
  return `${validatedUrl}/api/media/recipes/${cleanRecipeId}/images/${imageVersion}.webp`;
}

export function getRecipeUrl(baseUrl: string | undefined, recipeSlug: string, clickable: boolean, group?: string): string {
  if (!clickable || !recipeSlug || !baseUrl || !group) return '#';

  const cleanBaseUrl = cleanAndValidateUrl(baseUrl);
  if (!cleanBaseUrl) {
    console.error('URL de base invalide:', baseUrl);
    return '#';
  }

  if (!isValidSlug(recipeSlug) || !isValidSlug(group)) {
    console.warn('Slug invalide:', { recipeSlug, group });
    return '#';
  }

  const cleanRecipeSlug = encodeURIComponent(recipeSlug.trim().toLowerCase());
  const cleanGroupSlug = encodeURIComponent(group.trim().toLowerCase());
  return `${cleanBaseUrl}/g/${cleanGroupSlug}/r/${cleanRecipeSlug}`;
}

// === Date & Time Helpers ===

function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDateRange(days?: number, startDate?: string, endDate?: string): { startDate: string; endDate: string } {
  if (days !== undefined) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const dateStr = getLocalDateString(date);
    return { startDate: dateStr, endDate: dateStr };
  }

  const today = getLocalDateString(new Date());
  return {
    startDate: startDate || today,
    endDate: endDate || startDate || today
  };
}

export function dateFormatWithDay(dateString: string, hass: HomeAssistant): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
    return localize('common.today');
  }

  return formatDateWeekday(date, hass.locale);
}

function getTimePatterns(hass: HomeAssistant): { hourPattern: RegExp; minutePattern: RegExp } {
  const currentLang = hass?.locale?.language || 'en';

  if (cachedLang === currentLang && cachedHourPattern && cachedMinutePattern) {
    return { hourPattern: cachedHourPattern, minutePattern: cachedMinutePattern };
  }

  const hourTerms = [localize('time.hour'), localize('time.hours')].filter(Boolean);
  const minuteTerms = [localize('time.minute'), localize('time.minutes')].filter(Boolean);

  cachedLang = currentLang;
  cachedHourPattern = new RegExp(`(\\d+)\\s*(?:${hourTerms.join('|')})`, 'i');
  cachedMinutePattern = new RegExp(`(\\d+)\\s*(?:${minuteTerms.join('|')})`, 'i');

  return { hourPattern: cachedHourPattern, minutePattern: cachedMinutePattern };
}

export function formatTime(time: string | null, hass: HomeAssistant): string {
  if (!time) return '';

  const formatted = time.toLowerCase().trim();
  const { hourPattern, minutePattern } = getTimePatterns(hass);

  const hourMatch = formatted.match(hourPattern);
  const minuteMatch = formatted.match(minutePattern);

  if (!hourMatch && !minuteMatch) {
    return formatted.replace(/\s+/g, ' ').trim();
  }

  const parts: string[] = [];
  if (hourMatch) parts.push(`${hourMatch[1]} ${localize('time.hour_short')}`);
  if (minuteMatch) parts.push(`${minuteMatch[1]} ${localize('time.minute_short')}`);

  return parts.join(' ');
}

// === Labels ===

export function getEntryTypeLabel(entryType?: string): string {
  if (!entryType) return '';

  const labels: Record<string, string> = {
    breakfast: localize('common.breakfast'),
    lunch: localize('common.lunch'),
    dinner: localize('common.dinner'),
    side: localize('common.side')
  };

  return labels[entryType] || entryType.toUpperCase();
}

// === Error Handling ===

function createLocalizedError(key: string, err: unknown): Error {
  const message = err instanceof Error ? err.message : 'Erreur inconnue';
  return new Error(`${localize(key)}: ${message}`);
}

function getFriendlyErrorMessage(err: Error): string {
  const message = err.message.toLowerCase();

  if (message.includes('config_entry_id')) return 'Entrée de configuration invalide';
  if (message.includes('date')) return 'Format de date invalide (YYYY-MM-DD)';
  if (message.includes('recipe_id')) return 'ID de recette invalide';
  if (message.includes('entry_type')) return 'Type de repas invalide';

  return err.message;
}

// === API Calls ===

export async function getMealieConfigEntryId(hass: HomeAssistant): Promise<string> {

  try {
    const entries = await hass.callWS<any[]>({ type: 'config_entries/get' });
    const mealieEntry = entries.find((e) => e.domain === MEALIE_DOMAIN);

    if (!mealieEntry?.entry_id) {
      throw new Error(localize('error.missing_config'));
    }
    return mealieEntry.entry_id;
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : 'Erreur inconnue';
    throw new Error(`${localize('error.missing_config')}: ${errorMsg}`);
  }
}

async function callMealieService<T>(hass: HomeAssistant, service: string, serviceData: Record<string, any>, configEntryId?: string): Promise<T> {
  const entryId = configEntryId || (await getMealieConfigEntryId(hass));

  const response = await hass.callWS<any>({
    type: 'call_service',
    domain: MEALIE_DOMAIN,
    service,
    service_data: { config_entry_id: entryId, ...serviceData },
    return_response: true
  });

  return response?.response || null;
}

export async function getMealieRecipes(hass: HomeAssistant, options: { configEntryId?: string; resultLimit?: number | string } = {}): Promise<any[]> {
try {
     const response = await callMealieService<any>(hass, 'get_recipes', { result_limit: options.resultLimit || DEFAULT_RESULT_LIMIT }, options.configEntryId);

     return response?.recipes?.items || [];
  } catch (err) {
    throw createLocalizedError('error.error_loading', err);
  }
}

export async function getMealieRecipe(hass: HomeAssistant, options: { configEntryId?: string; recipeId: string }): Promise<any> {
  try {
    const response = await callMealieService<any>(hass, 'get_recipe', { recipe_id: options.recipeId }, options.configEntryId);

    return response || null;
  } catch (err) {
    throw createLocalizedError('error.error_loading', err);
  }
}

export async function getMealPlan(hass: HomeAssistant, options: { configEntryId?: string; startDate?: string; endDate?: string; days?: number } = {}): Promise<any[]> {
  try {
    const { startDate, endDate } = getDateRange(options.days, options.startDate, options.endDate);
    const response = await callMealieService<any>(hass, 'get_mealplan', { start_date: startDate, end_date: endDate }, options.configEntryId);

    const mealplan = response?.mealplan || [];

    // Tri par entry_type (breakfast, lunch, dinner, side)
    return mealplan.sort((a, b) => {
      const orderA = ENTRY_TYPE_ORDER[a.entry_type] || 999;
      const orderB = ENTRY_TYPE_ORDER[b.entry_type] || 999;
      return orderA - orderB;
    });
  } catch (err) {
    throw createLocalizedError('error.error_loading', err);
  }
}

export async function addToMealplan(
  hass: HomeAssistant,
  options: {
    configEntryId?: string;
    date: string;
    entryType: EntryType;
    recipeId?: string;
    noteTitle?: string;
    noteText?: string;
  }
): Promise<void> {
  validateMealPlanOptions(options);

  try {
    const entryId = options.configEntryId || (await getMealieConfigEntryId(hass));
    const serviceData = {
      config_entry_id: entryId,
      date: options.date,
      entry_type: options.entryType,
      ...(options.recipeId && { recipe_id: options.recipeId }),
      ...(options.noteTitle && { note_title: options.noteTitle }),
      ...(options.noteText && { note_text: options.noteText })
    };

    await hass.callService('mealie', 'set_mealplan', serviceData);
  } catch (err) {
    const errorMsg = err instanceof Error ? getFriendlyErrorMessage(err) : 'Erreur inconnue';
    throw new Error(`Erreur lors de l'ajout au plan de repas: ${errorMsg}`);
  }
}

// === UI Helpers ===

export function imageOrientation(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  if (!img) return;

  img.classList.toggle('portrait', img.naturalHeight > img.naturalWidth);
}
