import { defineConfig } from 'vite';

export default defineConfig({
  base: '/www/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
});
