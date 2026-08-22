import { css } from 'lit';

export const editorStyles = css`
  ha-expansion-panel + ha-expansion-panel,
  ha-form + ha-expansion-panel,
  ha-expansion-panel + ha-form {
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  ha-formfield {
    display: block;
    width: 100%;
    min-height: 40px;
  }
  .settings-fields {
    padding-bottom: 8px;
  }
  .settings-fields ha-selector:first-child {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .settings-fields ha-formfield:first-child {
    padding-top: 8px;
  }

  .entry-type-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 0;
  }
  .entry-chip {
    padding: 4px 12px;
    border-radius: 16px;
    border: 1px solid var(--outline-color);
    background: none;
    color: var(--primary-text-color);
    cursor: pointer;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    transition:
      background 0.15s,
      color 0.15s,
      border-color 0.15s;
  }
  .entry-chip.active {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-color: var(--primary-color);
  }

  .editor-version {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--ha-space-2, 8px);
    margin-top: 16px;
    padding-top: 12px;
    font-size: var(--ha-font-size-s);
    color: var(--ha-color-text-secondary);
  }

  .editor-version-number {
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--accent-color);
    color: var(--black-color);
    font-weight: var(--ha-font-weight-medium);
  }

  .editor-support {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--ha-color-text-link);
    text-decoration: none;
  }

  .editor-support::before {
    content: '·';
    margin-right: var(--ha-space-2, 8px);
    color: var(--ha-color-text-secondary);
  }

  .editor-support ha-icon {
    --mdc-icon-size: 16px;
  }
`;
