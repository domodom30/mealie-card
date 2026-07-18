import type { HomeAssistant } from 'custom-card-helpers';
import { localizeForLang } from './translate.js';

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

export function getDateRange(days: number): string[] {
  const count = Math.max(1, Math.floor(days));
  const base = new Date();
  return Array.from({ length: count }, (_, offset) => {
    const date = new Date(base.getFullYear(), base.getMonth(), base.getDate() + offset);
    return getLocalDateString(date);
  });
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
