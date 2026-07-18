export const MEALPLAN_UPDATED = 'mealie-mealplan-updated';
export const RECIPES_UPDATED = 'mealie-recipes-updated';
export const RECIPE_RATED = 'mealie-recipe-rated';
export const FAVORITE_TOGGLED = 'mealie-favorite-toggled';

export type MealieSignalName = typeof MEALPLAN_UPDATED | typeof RECIPES_UPDATED;

export interface MealieEventDetail {
  [RECIPE_RATED]: { slug: string; rating: number };
  [FAVORITE_TOGGLED]: { slug: string; favorite: boolean };
}

export type MealieEventName = keyof MealieEventDetail;

export type Unsubscribe = () => void;

export function emitMealieSignal(name: MealieSignalName): void {
  window.dispatchEvent(new CustomEvent(name));
}

export function emitMealieEvent<K extends MealieEventName>(name: K, detail: MealieEventDetail[K]): void {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

export function subscribeMealieSignal(name: MealieSignalName, handler: () => void): Unsubscribe {
  window.addEventListener(name, handler);
  return () => window.removeEventListener(name, handler);
}

export function subscribeMealieEvent<K extends MealieEventName>(name: K, handler: (detail: MealieEventDetail[K]) => void): Unsubscribe {
  const listener = (e: Event) => handler((e as CustomEvent<MealieEventDetail[K]>).detail);
  window.addEventListener(name, listener);
  return () => window.removeEventListener(name, listener);
}
