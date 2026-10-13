import { nothing } from 'lit';
import { AsyncDirective, directive, PartType, type ElementPart, type PartInfo } from 'lit/async-directive.js';

export interface RecipePressHandlers {
  onTap?: () => void;
  onHold?: () => void;
  onDoubleTap?: () => void;
}

export function hasPressHandler(handlers: RecipePressHandlers): boolean {
  return !!(handlers.onTap || handlers.onHold || handlers.onDoubleTap);
}

const HOLD_DELAY_MS = 500;
const DOUBLE_TAP_DELAY_MS = 250;
const MOVE_TOLERANCE_PX = 10;
const PRIMARY_BUTTON = 0;
const ACTIVATION_KEYS = new Set(['Enter', ' ']);

class RecipePressDirective extends AsyncDirective {
  private _element?: HTMLElement;
  private _handlers: RecipePressHandlers = {};
  private _holdTimer: ReturnType<typeof setTimeout> | null = null;
  private _pressOrigin: { x: number; y: number } | null = null;
  private _holdFired = false;
  private _pendingTapTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ELEMENT) throw new Error('recipePress must be bound to an element');
  }

  render(_handlers: RecipePressHandlers) {
    return nothing;
  }

  update(part: ElementPart, [handlers]: [RecipePressHandlers]) {
    this._handlers = handlers;
    if (this._element !== part.element) {
      this._element = part.element as HTMLElement;
      this._listen(this._element);
    }
    return nothing;
  }

  protected disconnected(): void {
    this._cancelHold();
    this._cancelPendingTap();
  }

  private _listen(element: HTMLElement): void {
    element.addEventListener('pointerdown', this._onPointerDown);
    element.addEventListener('pointermove', this._onPointerMove);
    element.addEventListener('pointerup', this._cancelHold);
    element.addEventListener('pointercancel', this._cancelHold);
    element.addEventListener('pointerleave', this._cancelHold);
    element.addEventListener('contextmenu', this._onContextMenu);
    element.addEventListener('click', this._onClick);
    element.addEventListener('keydown', this._onKeyDown);
  }

  private _onPointerDown = (ev: PointerEvent): void => {
    this._holdFired = false;
    this._cancelHold();
    if (!this._handlers.onHold || ev.button !== PRIMARY_BUTTON) return;

    this._pressOrigin = { x: ev.clientX, y: ev.clientY };
    this._holdTimer = setTimeout(this._fireHold, HOLD_DELAY_MS);
  };

  private _onPointerMove = (ev: PointerEvent): void => {
    if (!this._pressOrigin) return;
    if (Math.hypot(ev.clientX - this._pressOrigin.x, ev.clientY - this._pressOrigin.y) > MOVE_TOLERANCE_PX) this._cancelHold();
  };

  private _fireHold = (): void => {
    this._cancelHold();
    this._holdFired = true;
    this._handlers.onHold?.();
  };

  private _cancelHold = (): void => {
    if (this._holdTimer) clearTimeout(this._holdTimer);
    this._holdTimer = null;
    this._pressOrigin = null;
  };

  private _onContextMenu = (ev: Event): void => {
    if (!this._holdTimer && !this._holdFired) return;
    ev.preventDefault();
    if (this._holdTimer) this._fireHold();
  };

  private _onClick = (): void => {
    if (this._holdFired) {
      this._holdFired = false;
      return;
    }
    if (!this._handlers.onDoubleTap) {
      this._handlers.onTap?.();
      return;
    }
    if (this._pendingTapTimer) {
      this._cancelPendingTap();
      this._handlers.onDoubleTap();
      return;
    }
    this._pendingTapTimer = setTimeout(this._firePendingTap, DOUBLE_TAP_DELAY_MS);
  };

  private _firePendingTap = (): void => {
    this._pendingTapTimer = null;
    this._handlers.onTap?.();
  };

  private _cancelPendingTap(): void {
    if (this._pendingTapTimer) clearTimeout(this._pendingTapTimer);
    this._pendingTapTimer = null;
  }

  private _onKeyDown = (ev: KeyboardEvent): void => {
    if (ev.target !== this._element || ev.repeat || !ACTIVATION_KEYS.has(ev.key) || !this._handlers.onTap) return;
    ev.preventDefault();
    this._handlers.onTap();
  };
}

export const recipePress = directive(RecipePressDirective);
