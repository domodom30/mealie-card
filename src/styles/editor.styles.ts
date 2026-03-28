import { css } from "lit";

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
`;
