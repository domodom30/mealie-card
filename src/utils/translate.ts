import * as da from '../translations/da.json';
import * as de from '../translations/de.json';
import * as en from '../translations/en.json';
import * as es from '../translations/es.json';
import * as fr from '../translations/fr.json';
import * as it from '../translations/it.json';
import * as nl from '../translations/nl.json';
import * as pl from '../translations/pl.json';
import * as pt_br from '../translations/pt-BR.json';
import * as pt from '../translations/pt.json';
import * as ro from '../translations/ro.json';

const DEFAULT_LANG = 'en';

const languages: Record<string, any> = {
  da,
  de,
  en,
  es,
  fr,
  it,
  nl,
  pl,
  'pt-BR': pt_br,
  pt,
  ro
};

function getTranslation(key: string, lang: string): string | undefined {
  try {
    return key.split('.').reduce((obj: any, k) => obj[k], languages[lang]);
  } catch {
    return undefined;
  }
}

export function localizeForLang(lang: string, key: string, search?: string, replace?: string): string {
  const translation =
    getTranslation(key, lang) ??
    getTranslation(key, DEFAULT_LANG) ??
    key;

  return search && replace ? translation.replace(search, replace) : translation;
}
