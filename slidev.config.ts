import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Disable export functionality to avoid Playwright dependency
  export: false,
  
  // Build configuration
  build: {
    // Disable PDF export
    export: false,
    // Output directory
    out: 'dist'
  },
  
  // Vite configuration
  vite: {
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
  }
})
