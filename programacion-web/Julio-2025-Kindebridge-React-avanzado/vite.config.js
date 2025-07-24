import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  },
  plugins: [react()],
})
