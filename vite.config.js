import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      views: path.resolve(__dirname, 'src/views'),
      router: path.resolve(__dirname, 'src/router'),
      store: path.resolve(__dirname, 'src/store'),
      styles: path.resolve(__dirname, 'src/styles'),
      viewroutes: path.resolve(__dirname, 'src/viewroutes'),
    },
  },
  plugins: [vue()]
})
