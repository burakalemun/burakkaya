import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/burakkaya.github.io/', // burası senin repo isminle birebir aynı olacak
  plugins: [
    tailwindcss(),
    react()
  ],
})

