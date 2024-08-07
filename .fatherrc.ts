import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'lib',
    alias: {
      '@/*': './src/*',
    },
    sourcemap: true,
  },
  esm: {
    output: 'es',
    alias: {
      '@/*': './src/*',
    },
    sourcemap: true,
  },
});
