export type ValidHassDomEvent = keyof HASSDomEvents;

export interface HASSDomEvent<T> extends Event {
  detail: T;
}

export interface FireEventOptions {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

export const fireEvent = <HassEvent extends ValidHassDomEvent>(
  node: HTMLElement | Window,
  type: HassEvent,
  detail: HASSDomEvents[HassEvent],
  options?: FireEventOptions,
): HASSDomEvent<HASSDomEvents[HassEvent]> => {
  const opts = options ?? {};
  const event = new Event(type, {
    bubbles: opts.bubbles === undefined ? true : opts.bubbles,
    cancelable: Boolean(opts.cancelable),
    composed: opts.composed === undefined ? true : opts.composed,
  }) as HASSDomEvent<HASSDomEvents[HassEvent]>;
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};
