import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Nebula-Tech-Store/', // <-- Agrega esta línea con el nombre exacto de tu repositorio de GitHub
})