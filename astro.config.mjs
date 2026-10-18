import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sportdharmaecosystem.com',
  integrations: [
    sitemap(),
  ],
  vite: {
    build: {
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 5000,
    },
    ssr: {
      noExternal: ['@astrojs/sitemap'],
    },
  },
});
