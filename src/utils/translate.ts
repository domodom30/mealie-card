import * as da from '../translations/da.json';
import * as de from '../translations/de.json';
import * as en from '../translations/en.json';
import * as es from '../translations/es.json';
import * as fr_be from '../translations/fr-BE.json';
import * as fr_ca from '../translations/fr-CA.json';
import * as fr from '../translations/fr.json';
import * as it from '../translations/it.json';
import * as nl from '../translations/nl.json';
import * as pl from '../translations/pl.json';
import * as pt_br from '../translations/pt-BR.json';
import * as pt from '../translations/pt.json';
import * as ro from '../translations/ro.json';

const DEFAULT_LANG = 'en';

type TranslationTree = { [key: string]: string | TranslationTree };

const languages: Record<string, TranslationTree> = {
  da,
  de,
  en,
  es,
  fr,
  'fr-BE': fr_be,
  'fr-CA': fr_ca,
  it,
  nl,
  pl,
  'pt-BR': pt_br,
  pt,
  ro,
};

function getTranslation(key: string, lang: string): string | undefined {
  const tree = languages[lang];
  if (!tree) return undefined;
  const value = key.split('.').reduce<string | TranslationTree | undefined>((obj, k) => (obj && typeof obj === 'object' ? obj[k] : undefined), tree);
  return typeof value === 'string' ? value : undefined;
}

/** Languages the card ships translations for (BCP 47 tags). */
export const SUPPORTED_LANGUAGES = Object.keys(languages).sort();

/**
 * Lookup chain for a language tag: the exact tag, then its base language, then English.
 * Regional files (e.g. fr-CA) therefore only need to contain the strings that differ from the base language.
 */
function languageChain(lang: string): string[] {
  const base = lang.split('-')[0];
  return [...new Set([lang, base, DEFAULT_LANG])];
}

export function localizeForLang(lang: string, key: string, search?: string, replace?: string): string {
  let translation: string | undefined;
  for (const candidate of languageChain(lang)) {
    translation = getTranslation(key, candidate);
    if (translation !== undefined) break;
  }
  translation ??= key;

  return search && replace ? translation.replace(search, replace) : translation;
}
