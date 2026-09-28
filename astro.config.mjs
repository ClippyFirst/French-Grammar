// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clippyfirst.github.io/French-Grammar',
  base: '/French-Grammar',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  integrations: [sitemap()],
  vite: {
    logLevel: 'info',
  },
});