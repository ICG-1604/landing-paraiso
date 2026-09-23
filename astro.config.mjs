import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://landing-paraiso.vercel.app',
  vite: { plugins: [tailwindcss()] },
  image: { responsiveStyles: true },
})
