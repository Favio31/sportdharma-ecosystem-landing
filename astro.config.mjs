import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  site: 'https://www.sportdharmaecosystem.com',
  output: 'static',
  vite: {
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
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
        }
      })
    ],
  },
});