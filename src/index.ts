import { MealieTodayCard } from './components/mealie-card';
import { MealieRecipeCard } from './components/mealie-recipe-card';
import localize from './utils/translate.js';

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
    name: `${localize('cards.mealplan_name')}`,
    description: `${localize('cards.mealplan_description')}`,
    configurable: true,
    preview: false,
    documentationURL: 'https://github.com/domodom30/mealie-card'
  },
  {
    type: 'mealie-recipe-card',
    name: `${localize('cards.recipes_name')}`,
    description: `${localize('cards.recipes_description')}`,
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

const PKG_VERSION = '2.1.3';
console.info(`%c MEALIE-CARD %c ${PKG_VERSION}`, 'color: white; background: orange; font-weight: 700;', 'color: orange; background: white; font-weight: 700;');

export type { MealieRecipeCardConfig, MealieTodayCardConfig } from './types';
export { MealieRecipeCard, MealieTodayCard };
