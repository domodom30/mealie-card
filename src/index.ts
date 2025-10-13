import { MealieTodayCard } from './components/mealie-card';
import { MealieRecipeCard } from './components/mealie-recipe-card';

if (!customElements.get('mealie-today-card')) {
  customElements.define('mealie-today-card', MealieTodayCard);
}
if (!customElements.get('mealie-recipe-card')) {
  customElements.define('mealie-recipe-card', MealieRecipeCard);
}

window.customCards = window.customCards || [];

const cardConfigs = [
  {
    type: 'mealie-today-card',
    name: 'Repas Quotidiens Mealie',
    description: 'Affiche tous les repas du jour (petit-déjeuner, déjeuner, dîner)',
    configurable: true,
    preview: false,
    documentationURL: 'https://github.com/domodom30/mealie-card'
  },
  {
    type: 'mealie-recipe-card',
    name: 'Mealie Recipes',
    description: 'Affiche les recettes de Mealie',
    configurable: true,
    preview: false,
    documentationURL: 'https://github.com/domodom30/mealie-card'
  }
];

cardConfigs.forEach((card) => {
  if (!window.customCards?.some((c) => (c as any).type === card.type)) {
    window.customCards?.push(card as any);
  }
});

const PKG_VERSION = '2.1.0';
console.info(`%c MEALIE-CARD %c ${PKG_VERSION}`, 'color: white; background: orange; font-weight: 700;', 'color: orange; background: white; font-weight: 700;');

export { MealieTodayCard, MealieRecipeCard };
export type { MealieTodayCardConfig, MealieRecipeCardConfig } from './types';
