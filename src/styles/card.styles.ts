import { css } from 'lit';

export const cardStyles = css`
  ha-card {
    background: inherit;
  }

  ha-icon-button {
    --ha-icon-button-size: 35px;
    --mdc-icon-button-size: 35px;
    --mdc-icon-size: 20px;
    background-color: color-mix(in srgb, var(--primary-color) 70%, transparent);
    color: var(--text-primary-color);
    border-radius: 50%;
  }

  .days-vertical {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-3, 12px);
  }

  .days-horizontal {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--ha-space-3, 12px);
    align-items: start;
  }

  .day-section {
    display: flex;
    flex-direction: column;
  }

  .card-content {
    display: grid;
    padding: var(--ha-space-2);
    gap: 10px;
  }

  .card-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px;
    border-radius: 10px;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .date-label {
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-heading);
    padding: 6px 0px 6px 10px;
    color: var(--primary-text-color);
    border-bottom: none;
  }

  .favorite-button {
    background: none;
    color: var(--primary-text-color);
  }

  .recipes-container,
  .recipes-horizontal {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
    gap: 10px;
    padding: 4px;
  }

  .recipes-vertical {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .recipe-card {
    position: relative;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--bar-box-shadow);
    background: var(--wa-color-neutral-fill-normal)
    z-index: 0;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-card-body {
    padding-top: 32px;
  }

  .recipe-card:not(:has(.recipe-card-image)) .card-buttons {
    flex-direction: row;
    justify-content: center;
    order: 2;
    padding: 4px 8px 8px 8px;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-title {
    order: 1;
    padding: 0 8px;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-times {
    order: 3;
    padding: 0 18px;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-name {
    margin-top: 0;
  }

  .recipe-card-body {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0;
  }

  .recipe-card-image {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    height: 0;
    flex-shrink: 0;
    border-radius: 0;
    overflow: hidden;
    background: var(--secondary-background-color);
    z-index: 0;
  }

  .image-loading::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--primary-text-color) 8%, transparent) 50%, transparent 100%);
    animation: mealie-image-shimmer 1.2s ease-in-out infinite;
    z-index: 1;
  }

  .image-error {
    background: var(--secondary-background-color);
  }

  .image-error img {
    display: none;
  }

  .image-error::after {
    content: '';
    position: absolute;
    inset: 0;
    background: no-repeat center / 28%
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23888"><path d="M21.9 21.9l-8.5-8.5L2.1 2.1.69 3.51 3 5.83V19a2 2 0 002 2h13.17l2.31 2.31zM5 18l3.5-4.5 2.5 3L12.17 15l3 3zm16-1.17V5a2 2 0 00-2-2H7.83z"/></svg>');
    opacity: 0.5;
    z-index: 1;
  }

  @keyframes mealie-image-shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .recipe-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    z-index: 0;
  }

  .recipe-type {
    background: var(--primary-color);
    color: var(--text-primary-color);
    padding: 0 5px;
    border-radius: 4px;
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-bold);
    text-transform: uppercase;
    display: inline-block;
    position: absolute;
    z-index: 2;
    top: 8px;
    left: 8px;
  }

  .recipe-name {
    margin: 3px 3px 0px 10px;
    color: var(--ha-color-text-link);
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-body);
  }

  .recipe-description {
    text-align: center;
    margin: 10px;
    font-size: var(--ha-font-size-m);
    color: var(--ha-color-text-secondary);
    line-height: 1.4;
  }

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

  .recipe-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 5px 0;
  }

  .recipe-title {
    display: flex;
    flex-direction: column;
  }

  .servings-badge {
    display: flex;
    align-items: center;
    align-self: center;
  }

  .servings-badge ha-icon {
    --mdc-icon-size: 16px;
  }

  .servings-value {
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-medium);
    margin-top: 2px;
    margin-left: 2px;
    color: var(--primary-text-color);
  }

  .card-buttons {
    display: flex;
    flex-direction: row;
    gap: 2px;
    pointer-events: auto;
    z-index: 2;
  }

  .recipe-card-image .card-buttons {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    flex-direction: row;
    justify-content: center;
  }

  .delete-mealplan-button {
    background-color: var(--error-color);
  }

  .card-toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .card-toolbar mealie-recipe-search {
    flex: 1;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .interactive-rating ha-icon {
    --mdc-icon-size: 20px;
    color: var(--warning-color);
    transition: transform 0.1s;
  }

  .interactive-rating ha-icon:hover {
    transform: scale(1.2);
  }

  .time-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 2px 0;
    border-bottom: 1px solid var(--divider-color, var(--ha-button-neutral-light-color));
  }

  .time-row:last-child {
    border-bottom: none;
  }

  .time-row-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
    flex-shrink: 0;
  }

  .time-row-label {
    flex: 1 1 0%;
    font-size: var(--ha-font-size-m);
    color: var(--ha-color-text-secondary);
  }

  .time-row-value {
    font-size: var(--ha-font-size-m);
    font-weight: var(--ha-font-weight-body);
    color: var(--ha-color-text-secondary);
  }

  .dialog-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .recipe-webview {
    max-height: 70vh;
    overflow: auto;
  }

  .recipe-webview ha-card {
    box-shadow: none;
    border: none;
    background: none;
  }

  .dialog-body-recipe {
    display: flex;
    align-items: center;
    gap: 8px;
}

  .dialog-type {
    background: var(--primary-color);
    color: var(--text-primary-color);
    padding: 0 5px;
    border-radius: 4px;
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-bold);
    text-transform: uppercase;
    display: inline-block;
  }

  .dialog-body ha-selector {
    width: 100%;
    max-width: 100%;
  }

  .recipe-times {
    padding: 0 10px;
    margin: 5px 0;
  }

  .details-title {
    color: var(--secondary-text-color);
  }

  .details-content {
    padding: 5px 10px;
  }

  .details-content ul,
  .details-content ol {
    margin: 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .details-content li {
    font-size: var(--ha-font-size-m);
    color: var(--primary-text-color);
    line-height: 1.4;
  }

  .detail-image {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    margin: 0px auto 20px;
    background-color: var(--secondary-background-color);
  }

  .detail-image-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loading {
    text-align: center;
    padding: 24px;
    color: var(--secondary-text-color);
  }

  .dialog-servings-control {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0 10px 0;
  }

  .dialog-servings-btn {
    --ha-icon-button-size: 30px;
    --mdc-icon-button-size: 30px;
    --mdc-icon-size: 16px;
  }

  .dialog-servings-btn[disabled] {
    color: var(--disabled-color, var(--secondary-text-color));
  }

  .dialog-servings-value {
    font-size: var(--ha-font-size-m, 0.875rem);
    color: var(--primary-text-color);
    min-width: 72px;
    text-align: center;
    user-select: none;
  }

  .ingredient-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0 6px 0;
    border-bottom: 1px solid var(--divider-color, var(--ha-button-neutral-light-color));
    margin-bottom: 4px;
  }

  .ingredient-list-title {
    font-size: var(--ha-font-size-m);
    font-weight: var(--ha-font-weight-bold);
    color: var(--primary-text-color);
    text-transform: uppercase;
  }

  .ingredient-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
  }

  .ingredient-section-title {
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-bold);
    color: var(--secondary-text-color);
    text-transform: uppercase;
    padding: 8px 4px 2px 4px;
  }

  .ingredient-item {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    border-radius: 4px;
    padding: 2px 4px;
    transition: background 0.1s;
  }

  .ingredient-item:hover {
    background: var(--secondary-background-color);
  }

  .ingredient-item-text {
    font-size: var(--ha-font-size-m);
    color: var(--primary-text-color);
    flex: 1;
  }
`;