import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  site: 'https://Marquezado.github.io',
  base: '/my_portfolio/',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@cv': path.resolve('./cv.json')
      }
    }
  }
});
