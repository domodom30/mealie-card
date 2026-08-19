import type { HomeAssistant, LovelaceCardConfig } from '../types';

export interface CustomCardConfig {
  type: string;
  name: string;
  description: string;
  configurable?: boolean;
  preview?: boolean;
  documentationURL?: string;
}

export type LovelaceCardElement = HTMLElement & { hass?: HomeAssistant };

export interface CardHelpers {
  createCardElement(config: LovelaceCardConfig): Promise<LovelaceCardElement>;
}

declare global {
  interface Window {
    customCards: CustomCardConfig[];
    loadCardHelpers?: () => Promise<CardHelpers>;
  }
}

export {};
