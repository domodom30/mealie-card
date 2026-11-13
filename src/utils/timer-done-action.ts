import type { HomeAssistant, TimerDoneAction } from '../types';

export const TIMER_DURATION_PLACEHOLDER = '{timer}';
export const TIMER_LABEL_PLACEHOLDER = '{label}';
export const TIMER_STEP_PLACEHOLDER = '{step}';
export const TIMER_RECIPE_PLACEHOLDER = '{recipe}';

export interface TimerPlaceholders {
  duration: string;
  label: string;
  step: string;
  recipe: string;
}

interface ServiceId {
  domain: string;
  service: string;
}

export function parseServiceId(action: TimerDoneAction | undefined): ServiceId | null {
  if (!action || action.action === 'none') return null;
  const serviceId = action.perform_action ?? action.service;
  const [domain, service, ...rest] = serviceId?.split('.') ?? [];
  if (!domain || !service || rest.length) return null;
  return { domain, service };
}

function replaceAll(text: string, replacements: Record<string, string>): string {
  return Object.entries(replacements).reduce((result, [token, value]) => result.split(token).join(value), text);
}

export function fillPlaceholders<T>(value: T, replacements: Record<string, string>): T {
  if (typeof value === 'string') return replaceAll(value, replacements) as T;
  if (Array.isArray(value)) return value.map((item: unknown) => fillPlaceholders(item, replacements)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, fillPlaceholders(item, replacements)])) as T;
  }
  return value;
}

export async function runTimerDoneAction(hass: HomeAssistant, action: TimerDoneAction | undefined, placeholders: TimerPlaceholders): Promise<void> {
  const serviceId = parseServiceId(action);
  if (!serviceId) return;
  const replacements = {
    [TIMER_DURATION_PLACEHOLDER]: placeholders.duration,
    [TIMER_LABEL_PLACEHOLDER]: placeholders.label,
    [TIMER_STEP_PLACEHOLDER]: placeholders.step,
    [TIMER_RECIPE_PLACEHOLDER]: placeholders.recipe,
  };
  await hass.callService(serviceId.domain, serviceId.service, fillPlaceholders(action?.data ?? {}, replacements), action?.target, false);
}
