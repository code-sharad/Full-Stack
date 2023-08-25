import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import http from 'http';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Change this to your backend server
        changeOrigin: true,
        secure:false,
        agent: new http.Agent()

      },
      '/todo':{
        target: 'http://localhost:3001', // Change this to your backend server
        changeOrigin: true,
        secure:false,
        agent: new http.Agent()
      }
    }
  }
})
