import type { HomeAssistant } from '../types';

type HassLocale = HomeAssistant['locale'];

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

export function canonicalLanguage(language?: string): string | undefined {
  if (!language) return undefined;
  try {
    return Intl.getCanonicalLocales(language)[0];
  } catch {
    return undefined;
  }
}

export function withLanguage(hass: HomeAssistant, language?: string): HomeAssistant {
  const canonical = canonicalLanguage(language);
  if (!hass?.locale || !canonical || hass.locale.language === canonical) return hass;
  return { ...hass, locale: overrideLocale(hass.locale, canonical) };
}
