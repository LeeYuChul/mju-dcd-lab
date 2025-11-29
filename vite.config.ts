import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: isSsrBuild ? {} : {
        manualChunks: {
          // React core
          'vendor-react': ['react', 'react-dom'],
          // Animation libraries
          'vendor-animation': ['framer-motion', 'lottie-react'],
          // UI utilities
          'vendor-ui': ['@radix-ui/react-collapsible', '@radix-ui/react-slot', 'lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
  },
}))
