# Landing de captación — MUN en las aulas · Colegio Paraíso 2026/27

Copia adaptada de `../landing-claret-web` (23/09/2026). El tráfico llega desde el QR
de la diapositiva de MUN en el programa de extraescolares del colegio
(`?utm_source=programa_aaee`) y desde los correos a las familias. Un solo objetivo:
**reservar dos semanas de prueba**.

## Qué cambia respecto a Claret

- Día fijo: martes de 16:45 a 17:45. Grupos por edad y nivel según las inscripciones,
  con un mínimo de 6 alumnos.
- No hay pasaclases: se retira el bloque «Si te lo han contado hoy en clase».
- Cuarto año en el colegio. Cursos de 1.º de ESO a 1.º de Bachillerato.
- Equipo: Alejandra Gilmartín (profesora) e Ignacio Corroto (coordinador).
- Hero con foto fija (`public/hero-poster.jpg`): el vídeo era de Claret.
- Solo fotos de alumnos del Paraíso. Ninguna se repite entre secciones.

## Comandos

```bash
npm run dev      # servidor local en :4323
npm run build    # genera dist/
npm run og       # regenera public/og.jpg
```

## Pendientes antes de publicar

1. **Formulario.** Resuelto: `FORM_URL` apunta al Google Form propio de Paraíso (23/09/2026).
2. **Foto de Alejandra.** Guardarla en `src/assets/equipo/alejandra-gilmartin.jpg`
   (vertical, 4:5) y poner `foto: 'alejandra-gilmartin.jpg'` en `src/data/landing.ts`.
   Mientras tanto se muestran sus iniciales.
3. **Dominio.** Web independiente en `https://landing-paraiso.vercel.app`, sin dominio propio
   (decisión de Ignacio, 23/09/2026). De ahí salen la URL canónica y la imagen de Open Graph.
4. **Textos legales.** El pie enlaza a `#`.
5. **Datos heredados de Claret sin revalidar:** sin permanencia, torneos de 50-65 €,
   calendario de octubre a mayo, grupos de 6 a 15 alumnos.
