import type { HomeAssistant } from '../types';

type HassLocale = HomeAssistant['locale'];

// One derived locale object per (HA locale, language) pair, so its identity stays stable
// across hass updates and `oldHass.locale !== hass.locale` checks don't trigger extra renders.
const localeCache = new WeakMap<HassLocale, Map<string, HassLocale>>();

function overrideLocale(locale: HassLocale, language: string): HassLocale {
  let perLanguage = localeCache.get(locale);
  if (!perLanguage) {
    perLanguage = new Map();
    localeCache.set(locale, perLanguage);
  }
  let derived = perLanguage.get(language);
  if (!derived) {
    derived = { ...locale, language };
    perLanguage.set(language, derived);
  }
  return derived;
}

/**
 * Returns `hass` with `locale.language` replaced by the card's `language` option.
 * Everything that reads `hass.locale.language` (labels, dates, times, ingredients, dialogs)
 * then follows the card setting without further plumbing.
 */
export function withLanguage(hass: HomeAssistant, language?: string): HomeAssistant {
  if (!hass?.locale || !language || hass.locale.language === language) return hass;
  return { ...hass, locale: overrideLocale(hass.locale, language) };
}
