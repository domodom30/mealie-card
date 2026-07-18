import type { LitElement } from 'lit';
import type { HomeAssistant } from 'custom-card-helpers';
import type { Constructor } from './mixin-types.js';
import { localizeForLang } from './translate.js';

export const LocalizableMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class LocalizableElement extends superClass {
    declare hass: HomeAssistant;

    protected localize = (key: string, search?: string, replace?: string): string => localizeForLang(this.hass?.locale?.language ?? 'en', key, search, replace);
  }
  return LocalizableElement;
};
