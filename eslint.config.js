import tseslint from 'typescript-eslint';

export default tseslint.config(tseslint.configs.recommendedTypeChecked, {
  languageOptions: {
    parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    // Lit binds template event listeners to the host element.
    '@typescript-eslint/unbound-method': 'off',
  },
});
