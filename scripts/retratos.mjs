// Los tres retratos son fotos de evento, no de estudio, y la cara está a
// distinta altura en cada una. Se recortan a 4:5 encuadrando sobre el rostro
// para que las tres tarjetas del equipo tengan la misma jerarquía visual.
import sharp from 'sharp'
import { statSync } from 'node:fs'

const SRC = '../landing_claret/componentes/fotos_equipo'
const RATIO = 4 / 5
const OUT_W = 900

// Punto de la cara en fracciones del original, medido sobre cada foto.
const retratos = [
  { in: 'gonzalo_santamaria.jpeg', out: 'gonzalo-santamaria.jpg', x: 0.50, y: 0.47 },
  { in: 'javier_sanz.jpeg',        out: 'javier-sanz.jpg',        x: 0.47, y: 0.30 },
  { in: 'ignacio_corroto.jpeg',    out: 'ignacio-corroto.jpg',    x: 0.52, y: 0.33 },
]

for (const r of retratos) {
  const img = sharp(`${SRC}/${r.in}`)
  const { width: W, height: H } = await img.metadata()

  // Mayor caja 4:5 que cabe en el original.
  let cw = W, ch = Math.round(W / RATIO)
  if (ch > H) { ch = H; cw = Math.round(H * RATIO) }

  // La cara queda al 42% de la altura de la caja: deja aire arriba sin cortar barbilla.
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v))
  const left = clamp(Math.round(r.x * W - cw / 2), 0, W - cw)
  const top  = clamp(Math.round(r.y * H - ch * 0.42), 0, H - ch)

  const outH = Math.round(OUT_W / RATIO)
  await sharp(`${SRC}/${r.in}`)
    .extract({ left, top, width: cw, height: ch })
    .resize(OUT_W, outH, { withoutEnlargement: false })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`src/assets/equipo/${r.out}`)

  const kb = (statSync(`src/assets/equipo/${r.out}`).size / 1024).toFixed(0)
  console.log(`${r.out}  ${W}x${H} → recorte ${cw}x${ch} en (${left},${top}) → ${OUT_W}x${outH}  ${kb} KB`)
}
