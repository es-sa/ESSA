import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: { main: './lib/js/es-sa.ts', component: './lib/js/SaBox.tsx' },
  output: {
    format: 'esm',
    dir: 'dist',
    sourcemap: true,
    entryFileNames: '[name].js',
    chunkFileNames: '[name].js',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
      rootDir: './',
    }),
    commonjs(),
  ],
  external: ['react'],
};
