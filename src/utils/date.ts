import type { HomeAssistant } from '../types';
import { localizeForLang } from './translate.js';

interface DayRange {
  start: number;
  count: number;
}

const weekdayFormatters = new Map<string, Intl.DateTimeFormat>();

function getWeekdayFormatter(language: string): Intl.DateTimeFormat {
  let formatter = weekdayFormatters.get(language);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(language, { weekday: 'long', month: 'long', day: 'numeric' });
    weekdayFormatters.set(language, formatter);
  }
  return formatter;
}

export function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDateRange(days: number, offset = 0): string[] {
  const count = Math.max(1, Math.floor(days));
  const start = Math.floor(offset);
  const base = new Date();
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(base.getFullYear(), base.getMonth(), base.getDate() + start + index);
    return getLocalDateString(date);
  });
}

const DAY_RANGE_PATTERN = /^(\d{1,3})\s*-\s*(\d{1,3})$/;
const MAX_RANGE_DAYS = 31;

export function resolveDayRange(offset: number | string | undefined, daysToShow: number): DayRange {
  const fallbackCount = Math.max(1, Math.floor(daysToShow || 1));

  if (typeof offset === 'number') return { start: Math.max(0, Math.floor(offset)), count: fallbackCount };
  if (typeof offset !== 'string') return { start: 0, count: fallbackCount };

  const trimmed = offset.trim();
  const range = DAY_RANGE_PATTERN.exec(trimmed);
  if (range) {
    const first = Number(range[1]);
    const last = Number(range[2]);
    return { start: Math.min(first, last), count: Math.min(MAX_RANGE_DAYS, Math.abs(last - first) + 1) };
  }

  if (/^\d{1,3}$/.test(trimmed)) return { start: Number(trimmed), count: fallbackCount };

  return { start: 0, count: fallbackCount };
}

export function dateFormatWithDay(dateString: string, hass: HomeAssistant): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date.getTime() === today.getTime()) {
    return localizeForLang(hass.locale?.language ?? 'en', 'common.today');
  }

  return getWeekdayFormatter(hass.locale?.language ?? 'en').format(date);
}
