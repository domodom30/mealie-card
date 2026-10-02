import { customElement } from 'lit/decorators.js';

const noop = () => undefined;

export const defineOnce = (tag: string) => (customElements.get(tag) ? noop : customElement(tag));
