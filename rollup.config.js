import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import { defineConfig } from 'rollup';
import { readFileSync } from 'fs';

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'));

const virtualVersionPlugin = {
  name: 'virtual-version',
  resolveId(id) { return id === 'virtual:version' ? '\0virtual:version' : null; },
  load(id)      { return id === '\0virtual:version' ? `export const version = "${version}";` : null; },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@rollup/plugin-terser').Options} */
const terserOptions = {
  format: { comments: false },
  compress: { drop_console: false }
};

export default defineConfig({
  input: 'src/index.ts',

  output: {
    file: 'dist/mealie-card.js',
    format: 'es',
    sourcemap: !isProd,
    inlineDynamicImports: true
  },

  plugins: [
    virtualVersionPlugin,

    resolve({
      browser: true,
      exportConditions: ['browser']
    }),

    json(),

    commonjs(),

    typescript({
      tsconfig: './tsconfig.json'
    }),

    ...(isProd ? [terser(terserOptions)] : [])
  ],

  onwarn(warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    if (warning.plugin === 'typescript' && warning.message.includes('sourcemap')) return;
    warn(warning);
  }
});
