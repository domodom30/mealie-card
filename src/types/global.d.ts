// src/types/global.d.ts
interface CustomCardDescriptor {
  type: string;
  name?: string;
  description?: string;
  configurable?: boolean;
  preview?: boolean;
  documentationURL?: string;
  [key: string]: any;
}

declare global {
  interface Window {
    customCards?: CustomCardDescriptor[]; // ⚠️ Notez le '?' pour rendre optionnel
  }
}

export {};
