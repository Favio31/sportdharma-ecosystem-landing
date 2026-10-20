import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  site: 'https://www.sportdharmaecosystem.com',
  output: 'static',
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
    },
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoupdate',
        manifest: {
          name: 'SportDharma Ecosystem',
          short_name: 'SportDharma',
          description: 'Infraestructura libre para quienes viven en ruta',
          theme_color: '#0f172a',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          icons: [
            {
              src: '/logo.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/logo.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
          // Forzar nueva versión del caché
             cacheId: 'sportdharma-v3', // Cambiamos a v3 para forzar nuevo caché
          skipWaiting: true,
          clientsClaim: true
        }
      })
    ]
  }
});