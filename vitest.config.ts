import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Files needing a DOM opt in with a `@vitest-environment happy-dom` docblock.
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
