import { VitePWA } from "vite-plugin-pwa"
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadConfigFromFile } from 'vite'
import vue from '@vitejs/plugin-vue'
import { IncomingMessage } from "node:http"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
  manifest: {
    name: "Crypto currency quotes using Vue, Vite & Sass",
    short_name: "CryptoQuoter",
    description: "Crypto quoter done using Vue, Vite & Sass",
    theme_color: "#f60de3",
    icons: [
      {
        src: 'logo.svg',
        sizes: '192x192',
        type: 'img/svg',
      }
    ],
  }
})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
