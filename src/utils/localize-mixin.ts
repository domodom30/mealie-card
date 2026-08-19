import type { LitElement } from 'lit';
import type { HomeAssistant } from '../types';
import type { Constructor } from './mixin-types.js';
import { MealieActionError } from './mealie-error.js';
import { localizeForLang } from './translate.js';

export const LocalizableMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class LocalizableElement extends superClass {
    declare hass: HomeAssistant;

    protected localize = (key: string, search?: string, replace?: string): string => localizeForLang(this.hass?.locale?.language ?? 'en', key, search, replace);

    protected localizeError = (err: unknown, fallbackKey = 'error.error_loading'): string => {
      if (err instanceof MealieActionError) {
        const label = this.localize(err.translationKey);
        return err.detail ? `${label}: ${err.detail}` : label;
      }
      return err instanceof Error && err.message ? err.message : this.localize(fallbackKey);
    };
  }
  return LocalizableElement;
};
