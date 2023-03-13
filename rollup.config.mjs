import typescript from '@rollup/plugin-typescript';
import react from 'react';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: { main: './lib/js/es-sa.js', component: './lib/js/SaBox.js' },
  output: {
    format: 'esm',
    dir: 'dist',
    entryFileNames: '[name].js',
    chunkFileNames: '[name].js',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/types',
      rootDir: './lib',
    }),
    terser(),
    commonjs(),
  ],
  external: ['react'],
};
