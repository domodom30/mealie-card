import type { HomeAssistant } from 'custom-card-helpers';
import { DEFAULT_RESULT_LIMIT, MEALIE_DOMAIN } from '../config.card.js';
import type { MealiePlanRecipe } from '../types.js';
import localize from './translate.js';

// ========================================
// Interfaces et Types
// ========================================

export interface CalendarEntity {
  entity_id: string;
  friendly_name: string;
  state: string;
  attributes: Record<string, any>;
}

// ========================================
// Configuration et Config Entries
// ========================================

/**
 * Récupère l'ID de l'entrée de configuration Mealie
 * @param hass - Instance Home Assistant
 * @returns ID de l'entrée de configuration
 * @throws Error si aucune configuration Mealie n'est trouvée
 */
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

// ========================================
// Gestion des URLs Mealie
// ========================================

/**
 * Nettoie et valide une URL de base Mealie
 * @param baseUrl - URL à nettoyer
 * @returns URL nettoyée ou null si invalide
 */
export function cleanMealieBaseUrl(baseUrl: string | undefined): string | null {
  if (!baseUrl) {
    return null;
  }

  try {
    const trimmed = baseUrl.trim();

    // Ajouter le protocole si manquant
    let urlWithProtocol = trimmed;
    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      urlWithProtocol = `http://${trimmed}`;
    }

    // Valider l'URL
    const url = new URL(urlWithProtocol);

    // Vérifier que le protocole est http ou https
    if (!['http:', 'https:'].includes(url.protocol)) {
      console.warn(`Protocole invalide: ${url.protocol}`);
      return null;
    }

    // Retourner l'URL nettoyée (sans le slash final pour cohérence)
    return url.href.replace(/\/+$/, '');
  } catch (err) {
    console.error('URL invalide:', baseUrl, err);
    return null;
  }
}

/**
 * Valide un UUID au format standard
 * @param uuid - UUID à valider
 * @returns true si l'UUID est valide
 */
function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid.trim().toLowerCase());
}

/**
 * Valide un slug de recette
 * @param slug - Slug à valider
 * @returns true si le slug est valide
 */
function isValidSlug(slug: string): boolean {
  const cleanSlug = slug.trim().toLowerCase();

  // Vérifier le format (lettres, chiffres, tirets, underscores)
  if (!/^[a-z0-9\-_]+$/i.test(cleanSlug)) {
    return false;
  }

  // Vérifier la longueur (max 200 caractères)
  if (cleanSlug.length === 0 || cleanSlug.length > 200) {
    return false;
  }

  return true;
}

/**
 * Construit l'URL complète de l'image d'une recette Mealie
 * @param baseUrl - URL de base de Mealie (ex: https://mealie.local ou http://192.168.1.15)
 * @param recipeId - ID de la recette (UUID)
 * @param hasImage - Indique si la recette a une image
 * @returns URL complète de l'image ou null si pas d'image ou paramètres invalides
 */
export function getRecipeImageUrl(baseUrl: string | undefined, recipeId: string, hasImage: boolean): string | null {
  // Vérifications de base
  if (!hasImage || !recipeId || !baseUrl) {
    return null;
  }

  // Nettoyer l'URL de base
  const cleanBaseUrl = cleanMealieBaseUrl(baseUrl);
  if (!cleanBaseUrl) {
    console.error("URL de base invalide pour l'image:", baseUrl);
    return null;
  }

  // Valider le recipe ID (UUID)
  if (!isValidUUID(recipeId)) {
    console.warn('Recipe ID invalide (pas un UUID):', recipeId);
    return null;
  }

  try {
    const cleanRecipeId = recipeId.trim().toLowerCase();

    // Construire l'URL de l'image selon le format Mealie API
    const imageUrl = `${cleanBaseUrl}/api/media/recipes/${cleanRecipeId}/images/min-original.webp`;

    return imageUrl;
  } catch (err) {
    console.error("Erreur lors de la construction de l'URL de l'image:", err);
    return null;
  }
}

/**
 * Construit l'URL complète pour accéder à une recette Mealie
 * @param baseUrl - URL de base de Mealie
 * @param recipeSlug - Slug de la recette
 * @param clickable - Indique si le lien doit être cliquable
 * @returns URL complète de la recette ou '#' si pas cliquable ou paramètres invalides
 */
export function getRecipeUrl(baseUrl: string | undefined, recipeSlug: string, clickable: boolean): string {
  // Si pas cliquable, retourner '#' directement
  if (!clickable) {
    return '#';
  }

  // Vérifications de base
  if (!recipeSlug || !baseUrl) {
    return '#';
  }

  // Nettoyer l'URL de base
  const cleanBaseUrl = cleanMealieBaseUrl(baseUrl);
  if (!cleanBaseUrl) {
    console.error('URL de base invalide pour la recette:', baseUrl);
    return '#';
  }

  // Valider le slug
  if (!isValidSlug(recipeSlug)) {
    console.warn('Slug de recette invalide:', recipeSlug);
    return '#';
  }

  try {
    const cleanSlug = recipeSlug.trim().toLowerCase();

    // Construire l'URL de la recette selon le format Mealie
    // Format: /g/home/r/{slug}
    const recipeUrl = `${cleanBaseUrl}/g/home/r/${encodeURIComponent(cleanSlug)}`;

    return recipeUrl;
  } catch (err) {
    console.error("Erreur lors de la construction de l'URL de la recette:", err);
    return '#';
  }
}

// ========================================
// API Mealie - Recettes et Plans
// ========================================

/**
 * Récupère la liste des recettes depuis l'API Mealie
 * @param hass - Instance Home Assistant
 * @param options - Options de récupération (configEntryId, resultLimit)
 * @returns Liste des recettes
 */
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

/**
 * Récupère le plan de repas depuis l'API Mealie
 * @param hass - Instance Home Assistant
 * @param options - Options (configEntryId, startDate, endDate, days)
 * @returns Plan de repas
 */
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

/**
 * Récupère une recette spécifique depuis l'API Mealie
 * @param hass - Instance Home Assistant
 * @param options - Options (configEntryId, recipeId)
 * @returns Détails de la recette
 */
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

// ========================================
// Formatage et Utilitaires
// ========================================

let cachedLang: string | null = null;
let cachedHourPattern: RegExp | null = null;
let cachedMinutePattern: RegExp | null = null;

function getTimePatterns(hass: HomeAssistant): { hourPattern: RegExp; minutePattern: RegExp } {
  const currentLang = hass?.locale?.language || undefined;

  // Réutiliser le cache si la langue n'a pas changé
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

/**
 * Formate un temps de préparation/cuisson
 * @param time - Temps à formater (ex: "1 hour 30 minutes")
 * @returns Temps formaté (ex: "1 h 30 min")
 */

export function formatTime(time: string | null, hass: HomeAssistant): string {
  if (!time) return '';

  const formatted = time.toLowerCase().trim();
  const { hourPattern, minutePattern } = getTimePatterns(hass);

  const hourMatch = formatted.match(hourPattern);
  const minuteMatch = formatted.match(minutePattern);

  if (hourMatch || minuteMatch) {
    const parts: string[] = [];

    if (hourMatch) {
      const hourShort = localize('time.hour_short') || 'h';
      parts.push(`${hourMatch[1]} ${hourShort}`);
    }

    if (minuteMatch) {
      const minuteShort = localize('time.minute_short') || 'min';
      parts.push(`${minuteMatch[1]} ${minuteShort}`);
    }

    return parts.join(' ');
  }
  return formatted.replace(/\s+/g, ' ').trim();
}

/**
 * Formate une date selon la locale
 * @param dateString - Date au format ISO
 * @param hass - Instance Home Assistant
 * @returns Date formatée
 */
export function formatDate(dateString: string, hass: HomeAssistant): string {
  const currentLang = hass?.locale?.language || undefined;

  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString(currentLang, options);
  } catch (err) {
    console.error('Erreur lors du formatage de la date:', err);
    return dateString;
  }
}

/**
 * Regroupe les recettes par type de repas
 * @param recipes - Liste des recettes
 * @returns Recettes groupées par type
 */
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

/**
 * Récupère le label localisé d'un type de repas
 * @param entryType - Type de repas (breakfast, lunch, dinner, side)
 * @returns Label localisé
 */
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

/**
 * Regroupe les recettes par date
 * @param recipes - Liste des recettes
 * @returns Recettes groupées par date
 */
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
