import { formatDateWeekday, HomeAssistant } from "custom-card-helpers";
import { DEFAULT_RESULT_LIMIT, MEALIE_DOMAIN } from "../config.card.js";
import type { EntryType } from "../types.js";
import { localizeForLang } from "./translate.js";

interface HassWithResponse {
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: undefined,
    notifyOnError?: undefined,
    returnResponse?: boolean,
  ): Promise<{ response: unknown }>;
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

let cachedLang: string | null = null;
let cachedHourPattern: RegExp | null = null;
let cachedMinutePattern: RegExp | null = null;

export function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDateRange(days?: number, startDate?: string, endDate?: string): { startDate: string; endDate: string } {
  const today = getLocalDateString(new Date());

  if (days !== undefined) {
    const target = new Date();
    target.setDate(target.getDate() + days);
    const targetStr = getLocalDateString(target);

    return days >= 0 ? { startDate: today, endDate: targetStr } : { startDate: targetStr, endDate: today };
  }

  return {
    startDate: startDate ?? today,
    endDate: endDate ?? startDate ?? today,
  };
}

export function dateFormatWithDay(dateString: string, hass: HomeAssistant): string {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date.getTime() === today.getTime()) {
    return localizeForLang(hass.locale?.language ?? "en", "common.today");
  }

  return formatDateWeekday(date, hass.locale);
}

function getTimePatterns(lang: string): {
  hourPattern: RegExp;
  minutePattern: RegExp;
} {
  if (cachedLang === lang && cachedHourPattern && cachedMinutePattern) {
    return {
      hourPattern: cachedHourPattern,
      minutePattern: cachedMinutePattern,
    };
  }

  const hourTerms = [localizeForLang(lang, "time.hour"), localizeForLang(lang, "time.hours")].filter(Boolean);
  const minuteTerms = [localizeForLang(lang, "time.minute"), localizeForLang(lang, "time.minutes")].filter(Boolean);

  cachedLang = lang;
  cachedHourPattern = new RegExp(`(\\d+)\\s*(?:${hourTerms.join("|")})`, "i");
  cachedMinutePattern = new RegExp(`(\\d+)\\s*(?:${minuteTerms.join("|")})`, "i");

  return { hourPattern: cachedHourPattern, minutePattern: cachedMinutePattern };
}

export function formatTime(time: string | null, lang: string = "en"): string {
  if (!time) return "";

  const formatted = time.toLowerCase().trim();
  const { hourPattern, minutePattern } = getTimePatterns(lang);

  const hourMatch = formatted.match(hourPattern);
  const minuteMatch = formatted.match(minutePattern);

  if (!hourMatch && !minuteMatch) {
    return formatted.replace(/\s+/g, " ").trim();
  }

  const parts: string[] = [];
  if (hourMatch) parts.push(`${hourMatch[1]} ${localizeForLang(lang, "time.hour_short")}`);
  if (minuteMatch) parts.push(`${minuteMatch[1]} ${localizeForLang(lang, "time.minute_short")}`);

  return parts.join(" ");
}

export function getEntryTypeLabel(entryType?: string, lang: string = "en"): string {
  if (!entryType) return "";

  const labels: Record<string, string> = {
    breakfast: localizeForLang(lang, "common.breakfast"),
    lunch: localizeForLang(lang, "common.lunch"),
    dinner: localizeForLang(lang, "common.dinner"),
    side: localizeForLang(lang, "common.side"),
    dessert: localizeForLang(lang, "common.dessert"),
    drink: localizeForLang(lang, "common.drink"),
    snack: localizeForLang(lang, "common.snack"),
  };

  return labels[entryType] || entryType.toUpperCase();
}

function createLocalizedError(key: string, err: unknown): Error {
  const message = err instanceof Error ? err.message : localizeForLang("en", "error.error_loading");
  return new Error(`${localizeForLang("en", key)}: ${message}`);
}

export async function getMealieConfigEntryId(hass: HomeAssistant): Promise<string> {
  const entries = await hass.callWS<Array<{ entry_id: string }>>({
    type: "config_entries/get",
    domain: MEALIE_DOMAIN,
  });
  const entry_id = entries[0]?.entry_id;
  if (!entry_id) throw new Error(localizeForLang("en", "error.missing_config"));
  return entry_id;
}

async function callMealieService<T>(hass: HomeAssistant, service: string, serviceData: Record<string, any>, configEntryId?: string): Promise<T> {
  const entryId = configEntryId || (await getMealieConfigEntryId(hass));

  const result = await (hass as unknown as HassWithResponse).callService(
    MEALIE_DOMAIN,
    service,
    { config_entry_id: entryId, ...serviceData },
    undefined,
    undefined,
    true,
  );

  return (result?.response ?? null) as T;
}

export async function getMealieRecipes(hass: HomeAssistant, options: { configEntryId?: string; resultLimit?: number | string } = {}): Promise<any[]> {
  try {
    const response = await callMealieService<any>(hass, "get_recipes", { result_limit: options.resultLimit || DEFAULT_RESULT_LIMIT }, options.configEntryId);
    return response?.recipes?.items || [];
  } catch (err) {
    throw createLocalizedError("error.error_loading", err);
  }
}

export async function getMealPlan(
  hass: HomeAssistant,
  options: {
    configEntryId?: string;
    startDate?: string;
    endDate?: string;
    days?: number;
  } = {},
): Promise<any[]> {
  try {
    const { startDate, endDate } = getDateRange(options.days, options.startDate, options.endDate);
    const response = await callMealieService<any>(hass, "get_mealplan", { start_date: startDate, end_date: endDate }, options.configEntryId);

    const mealplan = response?.mealplan || [];

    return mealplan.sort((a: any, b: any) => {
      const orderA = ENTRY_TYPE_ORDER[a.entry_type] || 999;
      const orderB = ENTRY_TYPE_ORDER[b.entry_type] || 999;
      return orderA - orderB;
    });
  } catch (err) {
    throw createLocalizedError("error.error_loading", err);
  }
}

export async function getRecipe(hass: HomeAssistant, recipeSlug: string, configEntryId?: string): Promise<any> {
  try {
    const response = await callMealieService<any>(hass, "get_recipe", { recipe_id: recipeSlug }, configEntryId);
    return response?.recipe ?? response ?? null;
  } catch (err) {
    throw createLocalizedError("error.error_loading", err);
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
  },
): Promise<void> {
  try {
    const entryId = options.configEntryId || (await getMealieConfigEntryId(hass));
    await hass.callService(MEALIE_DOMAIN, "set_mealplan", {
      config_entry_id: entryId,
      date: options.date,
      entry_type: options.entryType,
      ...(options.recipeId && { recipe_id: options.recipeId }),
      ...(options.noteTitle && { note_title: options.noteTitle }),
      ...(options.noteText && { note_text: options.noteText }),
    });
  } catch (err) {
    throw createLocalizedError("error.error_adding_recipe", err);
  }
}

export function imageOrientation(event: Event): void {
  const img = event.currentTarget as HTMLImageElement;
  if (!img) return;

  img.classList.toggle("portrait", img.naturalHeight > img.naturalWidth);
}
