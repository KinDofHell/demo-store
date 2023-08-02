import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'bootstrap/dist/css/bootstrap.min.css': './node_modules/bootstrap/dist/css/bootstrap.min.css',
    },
  },
})
