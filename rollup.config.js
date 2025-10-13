// rollup.config.js - Configuration finale corrigée
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import { string } from 'rollup-plugin-string';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  output: {
    file: '../../config/www/mealie-card.js',
    format: 'es',
    sourcemap: !isProduction,
    inlineDynamicImports: true
  },
  plugins: [
    string({
      include: ['**/*.css', '**/*.scss', '**/*.sass']
    }),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      target: 'es2018',
      lib: ['es2018', 'dom', 'dom.iterable'],
      moduleResolution: 'node',
      allowSyntheticDefaultImports: true,
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      strict: false,
      skipLibCheck: true,
      declaration: false,
      sourceMap: !isProduction,
      types: []
    }),
    resolve({
      browser: true,
      preferBuiltins: false,
      exportConditions: ['development']
    }),
    commonjs(),
    isProduction &&
      terser({
        format: {
          comments: false
        },
        compress: {
          drop_console: false
        }
      })
  ].filter(Boolean),

  external: [],

  onwarn(warning, warn) {
    // Ignorer les warnings courants
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    if (warning.code === 'EVAL') return;
    if (warning.code === 'UNRESOLVED_IMPORT' && warning.source?.includes('.css')) return;
    if (warning.code === 'MISSING_EXPORT') return;

    warn(warning);
  }
};
