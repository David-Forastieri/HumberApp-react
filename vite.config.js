import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api': {
        target: 'https://www.aoepulse.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1/civ_win_rates/'),
        secure: true,
        headers: {
          'Accept': 'application/json',
        },
      },
    },
  },
});
