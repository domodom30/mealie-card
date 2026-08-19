import type { EntryType, RecipeIngredient, RecipeUnit } from '../types.js';
import { ENTRY_TYPES } from '../types.js';
import { localizeForLang } from './translate.js';

const FRACTIONS: readonly [number, string][] = [
  [0.125, '⅛'],
  [0.25, '¼'],
  [1 / 3, '⅓'],
  [0.375, '⅜'],
  [0.5, '½'],
  [0.625, '⅝'],
  [2 / 3, '⅔'],
  [0.75, '¾'],
  [0.875, '⅞'],
];

const FRACTION_TOLERANCE = 0.02;

let cachedLang: string | null = null;
let cachedHourPattern: RegExp | null = null;
let cachedMinutePattern: RegExp | null = null;

function escapeRegExp(term: string): string {
  return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getTimePatterns(lang: string): { hourPattern: RegExp; minutePattern: RegExp } {
  if (cachedLang === lang && cachedHourPattern && cachedMinutePattern) {
    return { hourPattern: cachedHourPattern, minutePattern: cachedMinutePattern };
  }

  const hourTerms = [localizeForLang(lang, 'time.hour'), localizeForLang(lang, 'time.hours')].filter(Boolean).map(escapeRegExp);
  const minuteTerms = [localizeForLang(lang, 'time.minute'), localizeForLang(lang, 'time.minutes')].filter(Boolean).map(escapeRegExp);

  cachedLang = lang;
  cachedHourPattern = new RegExp(`(\\d+)\\s*(?:${hourTerms.join('|')})`, 'i');
  cachedMinutePattern = new RegExp(`(\\d+)\\s*(?:${minuteTerms.join('|')})`, 'i');

  return { hourPattern: cachedHourPattern, minutePattern: cachedMinutePattern };
}

export function formatTime(time: string | null, lang: string = 'en'): string {
  if (!time) return '';

  const formatted = time.toLowerCase().trim();
  const { hourPattern, minutePattern } = getTimePatterns(lang);

  const hourMatch = formatted.match(hourPattern);
  const minuteMatch = formatted.match(minutePattern);

  if (!hourMatch && !minuteMatch) {
    return formatted.replace(/\s+/g, ' ').trim();
  }

  const parts: string[] = [];
  if (hourMatch) parts.push(`${hourMatch[1]} ${localizeForLang(lang, 'time.hour_short')}`);
  if (minuteMatch) parts.push(`${minuteMatch[1]} ${localizeForLang(lang, 'time.minute_short')}`);

  return parts.join(' ');
}

export function getEntryTypeLabel(entryType?: string, lang: string = 'en'): string {
  if (!entryType) return '';
  const key = `common.${entryType}`;
  const label = localizeForLang(lang, key);
  return label !== key ? label : entryType.toUpperCase();
}

export function entryTypeOptions(localize: (key: string) => string): { value: EntryType; label: string }[] {
  return ENTRY_TYPES.map((value) => ({ value, label: localize(`common.${value}`) }));
}

export function formatQuantity(n: number, lang: string = 'en'): string {
  const whole = Math.floor(n);
  const decimal = n - whole;
  if (decimal < FRACTION_TOLERANCE) return whole > 0 ? String(whole) : '0';
  const match = FRACTIONS.find(([val]) => Math.abs(decimal - val) < FRACTION_TOLERANCE);
  if (match) return whole > 0 ? `${whole} ${match[1]}` : match[1];
  return new Intl.NumberFormat(lang, { maximumFractionDigits: 2, useGrouping: false }).format(n);
}

export function getUnitName(unit: RecipeUnit | string | null | undefined): string {
  if (!unit) return '';
  if (typeof unit === 'string') {
    if (unit.trimStart().startsWith('{')) {
      try {
        const parsed = JSON.parse(unit) as Partial<RecipeUnit> & { useAbbreviation?: boolean };
        const useAbbrev = parsed.use_abbreviation ?? parsed.useAbbreviation;
        if (useAbbrev && parsed.abbreviation) return parsed.abbreviation;
        return parsed.name ?? '';
      } catch {
        const useAbbrev = /['"]use_abbreviation['"]\s*:\s*True/.test(unit) || /'useAbbreviation'\s*:\s*True/.test(unit);
        if (useAbbrev) {
          const abbrevMatch = unit.match(/['"]abbreviation['"]\s*:\s*'([^']+)'/);
          if (abbrevMatch?.[1]) return abbrevMatch[1];
        }
        const nameMatch = unit.match(/['"]name['"]\s*:\s*'([^']*)'/);
        return nameMatch?.[1] ?? '';
      }
    }
    return unit;
  }
  if (unit.use_abbreviation && unit.abbreviation) return unit.abbreviation;
  return unit.name ?? '';
}

export function formatIngredientText(ing: RecipeIngredient, scale: number = 1, appendNote: boolean = true, lang: string = 'en'): string {
  const unitName = getUnitName(ing.unit);
  const hasQty = ing.quantity != null && ing.quantity !== 0;

  if (!hasQty && !ing.food?.name) return ing.note ?? ing.display ?? '';

  const qtyStr = hasQty ? formatQuantity((ing.quantity as number) * scale, lang) : null;
  const text = [qtyStr, unitName || null, ing.food?.name ?? null].filter(Boolean).join(' ');
  return appendNote && ing.note ? `${text} (${ing.note})` : text;
}
