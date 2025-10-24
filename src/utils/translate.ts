import * as de from '../translations/de.json';
import * as en from '../translations/en.json';
import * as es from '../translations/es.json';
import * as fr from '../translations/fr.json';
import * as it from '../translations/it.json';
import * as pl from '../translations/pl.json';
import * as pt_br from '../translations/pt-BR.json';
import * as pt from '../translations/pt.json';
import * as ro from '../translations/ro.json';

const DEFAULT_LANG = 'en';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const languages: Record<string, Translations> = {
  en,
  fr,
  de,
  es,
  it,
  pl,
  pt_br,
  pt,
  ro
};

export default function localize(str: string, search?: string, replace?: string): string | undefined {
  const [section, key] = str.toLowerCase().split('.');

  let langStored: string | null = null;

  try {
    langStored = JSON.parse(localStorage.getItem('selectedLanguage') ?? '');
  } catch (e) {
    langStored = localStorage.getItem('selectedLanguage');
  }

  const lang = (langStored || navigator.language.split('-')[0] || DEFAULT_LANG).replace(/['"]+/g, '').replace('-', '_');

  let translated: string | undefined;

  try {
    translated = languages[lang][section][key];
  } catch (e) {
    translated = languages[DEFAULT_LANG][section][key];
  }

  if (translated === undefined) {
    translated = languages[DEFAULT_LANG][section][key];
  }

  if (translated === undefined) {
    return;
  }

  if (search && replace) {
    translated = translated?.replace(search, replace);
  }

  return translated;
}
