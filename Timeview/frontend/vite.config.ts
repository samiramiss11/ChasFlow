import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import type { InlineConfig } from 'vitest'
import type { UserConfig } from 'vite'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5100/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    //setupFiles: './src/setupTests.ts', // We'll create this file next
  },
} as VitestConfigExport)
