// src/types/window.d.ts
export interface CustomCardConfig {
  type: string;
  name: string;
  description: string;
  configurable?: boolean;
  preview?: boolean;
  documentationURL?: string;
}

declare global {
  interface Window {
    customCards: CustomCardConfig[];
  }
}

// Nécessaire pour que TypeScript traite ce fichier comme un module
export {};
