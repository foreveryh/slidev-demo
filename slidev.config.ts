import { defineConfig } from 'vite'

export default defineConfig({
  // Vite configuration for build optimization
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks: {
          'slidev-theme': ['@slidev/theme-default', '@slidev/theme-seriph'],
          'vue-vendor': ['vue']
        }
      }
    }
  }
})
