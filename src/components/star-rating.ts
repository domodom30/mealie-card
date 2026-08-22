import { css, html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { defineOnce } from '../utils/define-once.js';

@defineOnce('mealie-star-rating')
export class MealieStarRating extends LitElement {
  @property({ type: Number }) rating = 0;
  @property({ type: Boolean }) interactive = false;
  @property({ type: Boolean }) updating = false;

  @state() private _hovered = 0;

  static styles = css`
    .star-rating {
      display: inline-flex;
      align-items: center;
      align-self: center;
      gap: 2px;
    }

    .star-rating ha-icon {
      --mdc-icon-size: 16px;
      color: var(--warning-color);
    }

    .interactive-rating ha-icon {
      --mdc-icon-size: 20px;
      color: var(--warning-color);
      transition: transform 0.1s;
    }

    .interactive-rating ha-icon:hover {
      transform: scale(1.2);
    }
  `;
  private static readonly STARS = [1, 2, 3, 4, 5];

  private _emit(rating: number): void {
    if (this.updating) return;
    this.dispatchEvent(new CustomEvent('rate-selected', { detail: { rating }, bubbles: false, composed: false }));
  }

  protected render(): TemplateResult {
    return this.interactive ? this._renderInteractive() : this._renderReadonly();
  }

  private _renderReadonly(): TemplateResult {
    const rating = this.rating;
    return html`
      <span class="star-rating">
        ${MealieStarRating.STARS.map((i) => {
          const icon = rating >= i ? 'mdi:star' : rating >= i - 0.5 ? 'mdi:star-half-full' : 'mdi:star-outline';
          return html`<ha-icon icon=${icon}></ha-icon>`;
        })}
      </span>
    `;
  }

  private _renderInteractive(): TemplateResult {
    const display = this._hovered || this.rating;
    return html`
      <span
        class="star-rating interactive-rating"
        @mouseleave=${() => {
          this._hovered = 0;
        }}
      >
        ${MealieStarRating.STARS.map((i) => {
          const filled = display >= i;
          return html`
            <ha-icon
              class="star-icon ${filled ? 'star-filled' : 'star-empty'}"
              icon=${filled ? 'mdi:star' : 'mdi:star-outline'}
              @mouseenter=${() => {
                this._hovered = i;
              }}
              @click=${() => this._emit(i)}
              style="cursor:${this.updating ? 'wait' : 'pointer'}"
            ></ha-icon>
          `;
        })}
      </span>
    `;
  }
}
