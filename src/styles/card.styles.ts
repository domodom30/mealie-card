import { css } from "lit";

export const cardStyles = css`
  ha-card {
    background: inherit;
  }

  a {
    text-decoration: none;
  }

  .card-content {
    display: grid;
    gap: 10px;
    margin: 15px 0px 0px;
  }

  .date-label {
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-heading);
    padding: 8px 0px 0px 8px;
    color: var(--ha-color-text-secondary);
    border-bottom: 1px solid var(--ha-button-neutral-light-color);
  }

  .recipes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
    padding: 4px;
  }

  .recipes-horizontal {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
    overflow: hidden;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
    max-width: 100%;
    z-index: 0;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-name {
    margin-top: 45px;
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
    z-index: 0;
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
    padding: 2px 5px;
    border-radius: 4px;
    font-weight: var(--ha-font-weight-bold);
    text-transform: uppercase;
    display: inline-block;
    position: absolute;
    z-index: 10;
    top: 8px;
    left: 8px;
  }

  .recipe-name {
    margin: 6px;
    margin-left: 14px;
    color: var(--ha-color-text-link);
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-normal);
    line-height: 1.8;
  }

  .recipe-description {
    text-align: center;
    margin: 10px;
    font-size: 13px;
    color: var(--secondary-text-color);
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
    color: var(--warning-color, #ffbc04ff);
  }

  .recipe-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .recipe-info {
    display: flex;
    flex-direction: column;
  }

  .time-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--ha-button-neutral-light-color);
    padding: 4px 5px;
    border-radius: 6px;
    transition: 0.2s;
  }

  .time-value {
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .servings-badge {
    display: flex;
    align-items: center;
    align-self: center;
  }

  .servings-value {
    font-size: 12px;
    font-weight: 500;
    margin-top: 2px;
    margin-left: 2px;
    color: var(--primary-text-color);
  }

  .card-buttons {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    z-index: 10;
    pointer-events: auto;
  }

  .add-to-mealplan-button,
  .view-recipe-button {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  .add-to-mealplan-button:hover,
  .view-recipe-button:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .add-to-mealplan-button ha-icon,
  .view-recipe-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .details {
    border: 0;
  }

  .details-content {
    padding: 5px 15px 10px 15px;
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
    font-size: 13px;
    color: var(--primary-text-color);
    line-height: 1.4;
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
    flex: 1;
    font-size: var(--ha-font-size-m);
    color: var(--secondary-text-color);
  }

  .time-row-value {
    font-size: var(--ha-font-size-m);
    font-weight: 600;
    color: var(--primary-text-color);
  }

  [slot="headerTitle"] {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    font-size: 1.25rem;
  }

  .recipe-name-highlight {
    padding-top: 3px;
    color: var(--primary-color);
    font-weight: var(--ha-font-weight-heading);
    display: block;
    font-size: 1.25rem;
  }

  .dialog-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px 0;
  }

  .detail-image {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin: 0 auto;
    background-color: var(--secondary-background-color);
    transition: height 0.3s ease;
  }

  .dialog-body ha-selector {
    width: 100%;
    max-width: 100%;
  }

  details {
    border: 1px solid var(--divider-color, var(--ha-button-neutral-light-color));
    border-radius: 8px;
    overflow: hidden;
  }

  summary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--secondary-background-color);
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--primary-text-color);
    list-style: none;
    user-select: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "";
    margin-left: auto;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--primary-text-color);
    transition: transform 0.2s;
  }

  details[open] summary::after {
    transform: rotate(180deg);
  }

  summary ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
  }

  .loading {
    text-align: center;
    padding: 24px;
    color: var(--secondary-text-color);
  }
`;
