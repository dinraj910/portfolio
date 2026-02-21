import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['00b4-103-189-143-157.ngrok-free.app'],
    host: true,
    port: 5173,
  },
  plugins: [react()],
})
