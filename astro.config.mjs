import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'pt', 'de', 'it'],
  },
  site: 'https://www.sportdharmaecosystem.com',
  output: 'static',
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
    },
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'SportDharma Ecosystem',
          short_name: 'SportDharma',
          description: 'Infraestructura libre para quienes viven en ruta',
          theme_color: '#0f172a',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          icons: [
            { src: '/logo.jpg', sizes: '192x192', type: 'image/jpeg' },
            { src: '/logo.jpg', sizes: '512x512', type: 'image/jpeg' }
          ]
        },
        workbox: {
          importScripts: ['/push-handler.js'],
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
          globIgnores: ['**/push-handler.js'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
          cacheId: 'sportdharma-FINAL-v13',
          skipWaiting: true,
          clientsClaim: true,
          cleanupOutdatedCaches: true,
          navigateFallbackDenylist: [/^\/api/],
          runtimeCaching: [{
            urlPattern: ({ url }) => url.hostname.endsWith('workers.dev'),
            handler: 'NetworkOnly',
          }],
        }
      })
    ]
  }
});