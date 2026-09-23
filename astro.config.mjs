import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://paraiso.munenlasaulas.es',
  vite: { plugins: [tailwindcss()] },
  image: { responsiveStyles: true },
})
