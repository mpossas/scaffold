/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{
      find: '@',
      replacement: fileURLToPath(new URL('./src', import.meta.url))
    }]
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
