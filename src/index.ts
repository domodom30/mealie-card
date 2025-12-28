import { MealieMealplanCard } from './components/mealplan-card';
import { MealieRecipeCard } from './components/recipes-card';
import localize from './utils/translate.js';

if (!customElements.get('mealie-mealplan-card')) {
  customElements.define('mealie-mealplan-card', MealieMealplanCard);
}
if (!customElements.get('mealie-recipe-card')) {
  customElements.define('mealie-recipe-card', MealieRecipeCard);
}

window.customCards = window.customCards || [];

const cardConfigs = [
  {
    type: 'mealie-mealplan-card',
    name: `${localize('cards.name_mealplan')}`,
    description: `${localize('cards.description_mealplan')}`,
    configurable: true,
    preview: false,
    documentationURL: 'https://github.com/domodom30/mealie-card'
  },
  {
    type: 'mealie-recipe-card',
    name: `${localize('cards.name_recipes')}`,
    description: `${localize('cards.description_name')}`,
    configurable: true,
    preview: false,
    documentationURL: 'https://github.com/domodom30/mealie-card'
  }
];

// Enregistrement des cartes
cardConfigs.forEach((card) => {
  if (!window.customCards?.some((c) => c.type === card.type)) {
    window.customCards?.push(card);
  }
});

const PKG_VERSION = '2.2';
console.info(`%c MEALIE-CARD %c ${PKG_VERSION}`, 'color: white; background: orange; font-weight: 700;', 'color: orange; background: white; font-weight: 700;');

export type { MealieRecipeCardConfig, MealieMealplanCardConfig } from './types';
export { MealieRecipeCard, MealieMealplanCard };
