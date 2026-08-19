import { customElement } from 'lit/decorators.js';

const noop = () => undefined;

// Two bundle versions loaded at once (HACS upgrade without a cache purge) would
// otherwise throw NotSupportedError and break every card on the dashboard.
export const defineOnce = (tag: string) => (customElements.get(tag) ? noop : customElement(tag));
