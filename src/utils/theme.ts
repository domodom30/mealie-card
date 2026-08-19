import type { HomeAssistant } from '../types';

type Themes = HomeAssistant['themes'];

interface ThemableElement extends HTMLElement {
  _themes?: Record<string, string>;
  updateStyles?: (styles: Record<string, string>) => void;
}

interface ShadyCSSWindow {
  ShadyCSS?: { styleSubtree: (element: HTMLElement, styles: Record<string, string>) => void };
}

export const applyThemesOnElement = (element: ThemableElement, themes: Themes, localTheme?: string | null): void => {
  if (!element._themes) {
    element._themes = {};
  }

  let themeName = themes.default_theme;
  if (localTheme === 'default' || (localTheme && themes.themes[localTheme])) {
    themeName = localTheme;
  }

  const styles: Record<string, string> = { ...element._themes };
  if (themeName !== 'default') {
    const theme = themes.themes[themeName];
    Object.keys(theme).forEach((key) => {
      const prefixedKey = `--${key}`;
      element._themes![prefixedKey] = '';
      styles[prefixedKey] = theme[key];
    });
  }

  if (element.updateStyles) {
    element.updateStyles(styles);
    return;
  }

  const shady = (window as unknown as ShadyCSSWindow).ShadyCSS;
  if (shady) {
    shady.styleSubtree(element, styles);
  }
};
