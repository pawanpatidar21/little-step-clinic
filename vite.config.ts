import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk: React + React DOM + Router
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Smaller chunk size warnings
    chunkSizeWarningLimit: 200,
  },
})
