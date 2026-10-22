import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://task-tracker-3f8o.onrender.com", // backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
