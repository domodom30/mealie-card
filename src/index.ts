import { MealieMealplanCard } from './components/mealplan-card';
import { MealieRecipeCard } from './components/recipes-card';
import { MealieShoppingListCard } from './components/shopping-list-card';
import { localizeForLang } from './utils/translate.js';
import { version } from 'virtual:version';

if (!customElements.get('mealie-mealplan-card')) {
  customElements.define('mealie-mealplan-card', MealieMealplanCard);
}
if (!customElements.get('mealie-recipe-card')) {
  customElements.define('mealie-recipe-card', MealieRecipeCard);
}
if (!customElements.get('mealie-shopping-list-card')) {
  customElements.define('mealie-shopping-list-card', MealieShoppingListCard);
}

window.customCards = window.customCards || [];

const cardConfigs = [
  {
    type: 'mealie-mealplan-card',
    name: localizeForLang('en', 'cards.name_mealplan'),
    description: localizeForLang('en', 'cards.description_mealplan'),
    configurable: true,
    preview: true,
    documentationURL: 'https://github.com/domodom30/mealie-card',
  },
  {
    type: 'mealie-recipe-card',
    name: localizeForLang('en', 'cards.name_recipes'),
    description: localizeForLang('en', 'cards.description_recipes'),
    configurable: true,
    preview: true,
    documentationURL: 'https://github.com/domodom30/mealie-card',
  },
  {
    type: 'mealie-shopping-list-card',
    name: localizeForLang('en', 'cards.name_shopping_list'),
    description: localizeForLang('en', 'cards.description_shopping_list'),
    configurable: true,
    preview: true,
    documentationURL: 'https://github.com/domodom30/mealie-card',
  },
];

cardConfigs.forEach((card) => {
  if (!window.customCards?.some((c) => c.type === card.type)) {
    window.customCards?.push(card);
  }
});

console.info(`%c MEALIE-CARD %c ${version}`, 'color: white; background: orange; font-weight: 700;', 'color: orange; background: white; font-weight: 700;');

export type { MealieRecipeCardConfig, MealieMealplanCardConfig, MealieShoppingListCardConfig } from './types';
export { MealieRecipeCard, MealieMealplanCard, MealieShoppingListCard };
