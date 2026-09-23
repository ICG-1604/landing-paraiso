// Tarjeta de previsualización para WhatsApp y buscadores: foto real + claim.
import sharp from 'sharp'

const W = 1200, H = 630
const base = await sharp('src/assets/alumnos/symun-2025-paraiso-6.jpg')
  .resize(W, H, { fit: 'cover', position: 'attention' })
  .toBuffer()

const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="v" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#060E1A" stop-opacity=".95"/>
      <stop offset="62%" stop-color="#060E1A" stop-opacity=".80"/>
      <stop offset="100%" stop-color="#060E1A" stop-opacity=".35"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#v)"/>
  <text x="72" y="250" font-family="Georgia,serif" font-size="66" font-weight="600" fill="#FFFFFF">Aprende a debatir.</text>
  <text x="72" y="330" font-family="Georgia,serif" font-size="66" font-weight="600" font-style="italic" fill="#D9B765">Compite en MUN.</text>
  <text x="72" y="400" font-family="Helvetica,Arial,sans-serif" font-size="27" fill="#DFE7F1">Colegio Paraíso · 1.º ESO a 1.º Bachillerato · Martes 16:45</text>
  <rect x="72" y="452" width="466" height="3" fill="#BE9846"/>
  <text x="72" y="516" font-family="Helvetica,Arial,sans-serif" font-size="29" font-weight="bold" fill="#FFFFFF">Dos semanas de prueba sin coste</text>
  <text x="72" y="560" font-family="Helvetica,Arial,sans-serif" font-size="25" fill="#9FB0C4">39 € al mes · Sin permanencia</text>
</svg>`)

await sharp(base).composite([{ input: svg }]).jpeg({ quality: 84, mozjpeg: true }).toFile('public/og.jpg')
console.log('og.jpg', (( await import('node:fs')).statSync('public/og.jpg').size / 1024).toFixed(0) + ' KB')
