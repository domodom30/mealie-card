import type { CardActionId, HomeAssistant, PressAction, RecipeMenuOptions } from '../types';
import { isFeatureSupported, type MealieFeature } from './mealie-capabilities.js';
import type { CardAction } from './recipe-render-mixin.js';
import type { RecipePressHandlers } from './recipe-press.js';

export type ActionHandlers<A extends CardActionId> = Partial<Record<A, () => void>>;

const CARD_ACTION_DISPLAY: Record<CardActionId, Omit<CardAction, 'onClick'>> = {
  view_recipe: { labelKey: 'cards.view_recipe', icon: 'mdi:book-open-variant' },
  add_to_mealplan: { labelKey: 'dialog.add_to_mealplan', icon: 'mdi:calendar-plus' },
  add_to_shopping_list: { labelKey: 'dialog.add_to_shopping_list', icon: 'mdi:cart-plus' },
  edit_mealplan: { labelKey: 'cards.edit_mealplan', icon: 'mdi:pencil' },
  delete_mealplan: { labelKey: 'cards.delete_mealplan', icon: 'mdi:trash-can-outline', variant: 'danger' },
};

const CARD_ACTION_FEATURE: Partial<Record<CardActionId, MealieFeature>> = {
  add_to_shopping_list: 'shopping_list',
  edit_mealplan: 'edit_mealplan',
  delete_mealplan: 'delete_mealplan',
};

const CARD_ACTION_MENU_OPTION: Record<CardActionId, keyof RecipeMenuOptions> = {
  view_recipe: 'show_view_recipe_button',
  add_to_mealplan: 'show_add_to_mealplan_button',
  add_to_shopping_list: 'show_shopping_list_button',
  edit_mealplan: 'show_edit_mealplan_button',
  delete_mealplan: 'show_delete_mealplan_button',
};

export function cardActionMenuOption(action: CardActionId): keyof RecipeMenuOptions {
  return CARD_ACTION_MENU_OPTION[action];
}

export function visibleMenuActions<A extends CardActionId>(menuOrder: readonly A[], options: RecipeMenuOptions): A[] {
  if (options.show_recipe_menu === false) return [];
  return menuOrder.filter((action) => options[CARD_ACTION_MENU_OPTION[action]] ?? true);
}

export function isCardActionSupported(hass: HomeAssistant | undefined, action: CardActionId): boolean {
  const feature = CARD_ACTION_FEATURE[action];
  return !feature || isFeatureSupported(hass, feature);
}

export function cardActionLabelKey(action: CardActionId): string {
  return CARD_ACTION_DISPLAY[action].labelKey;
}

export function buildCardActions<A extends CardActionId>(menuOrder: readonly A[], handlers: ActionHandlers<A>): CardAction[] {
  return menuOrder.flatMap((action) => {
    const onClick = handlers[action];
    return onClick ? [{ ...CARD_ACTION_DISPLAY[action], onClick }] : [];
  });
}

function pressHandler<A extends CardActionId>(handlers: ActionHandlers<A>, action: PressAction<A> | undefined): (() => void) | undefined {
  return action && action !== 'none' ? handlers[action] : undefined;
}

interface PressActionConfig<A extends CardActionId> {
  recipe_tap_action?: PressAction<A>;
  recipe_hold_action?: PressAction<A>;
  recipe_double_tap_action?: PressAction<A>;
}

export function pressHandlers<A extends CardActionId>(handlers: ActionHandlers<A>, config: PressActionConfig<A>): RecipePressHandlers {
  return {
    onTap: pressHandler(handlers, config.recipe_tap_action),
    onHold: pressHandler(handlers, config.recipe_hold_action),
    onDoubleTap: pressHandler(handlers, config.recipe_double_tap_action),
  };
}
