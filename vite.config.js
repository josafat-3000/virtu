import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    // Otras opciones de Rollup...
    external: ['xlsx','@supabase/supabase-js'],
  },
})
