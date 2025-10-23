module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Basic JavaScript rules
    'no-console': 'off', // Allow console logs for debugging
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',

    // Code style
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { avoidEscape: true }]
  },
  overrides: [
    {
      // Specific rules for LitElement components
      files: ['src/components/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off', // Allow any for Home Assistant types
        'class-methods-use-this': 'off' // LitElement methods don't always use this
      }
    },
    {
      // Specific rules for type definitions
      files: ['src/types.ts', 'src/types/*.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-types': 'off'
      }
    }
  ],
  ignorePatterns: ['dist/', 'node_modules/', '*.js.map', 'rollup.config.js'],
  globals: {
    // Home Assistant globals
    'customCards': 'writable',
    'window': 'readonly',
    'document': 'readonly',
    'console': 'readonly',

    // LitElement globals
    'HTMLElement': 'readonly',
    'Event': 'readonly',
    'CustomEvent': 'readonly'
  }
};
