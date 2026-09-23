// ─────────────────────────────────────────────────────────────
// Contenido único de la landing de Paraíso. Copia adaptada de landing-claret-web
// (23/09/2026). Cambios indicados por Ignacio: colegio, martes fijo de 16:45 a
// 17:45, sin pasaclases, cuarto año en el colegio, Alejandra Gilmartín como
// profesora, grupos por edad y nivel según demanda, mínimo de 6 alumnos.
// Heredados de Claret y pendientes de revalidar: la baja libre avisando, la
// horquilla de 50-65 € por torneo y el calendario de octubre a mayo.
// ─────────────────────────────────────────────────────────────

/** Formulario de inscripción de Paraíso (Google Forms), facilitado por Ignacio el 23/09/2026. */
export const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfV7wiyfOpGDkIpLqFzReKhCWJsuT2aR3bjm2oh4IaUtXjEWQ/viewform'

export const site = {
  title: 'MUN en las aulas · Colegio Paraíso 2026/27',
  description:
    'Debate, oratoria y negociación para alumnos de 1.º de ESO a 1.º de Bachillerato en el Colegio Paraíso. Martes de 16:45 a 17:45, dos semanas de prueba sin coste y 39 € al mes.',
  ogAlt: 'Alumnos del Colegio Paraíso debatiendo en un Modelo de Naciones Unidas',
}

export const hero = {
  pill: 'Curso 2026/27 · Inscripción abierta',
  claim: 'Aprende a debatir.',
  claimEm: 'Compite en MUN.',
  lead:
    'Una actividad práctica de debate, oratoria y negociación para alumnos de 1.º de ESO a 1.º de Bachillerato. Formación semanal en el colegio y preparación para participar en SYMUN, CEUMUN y EstuMUN.',
  cta: 'Reservar 2 semanas de prueba',
  ctaMicro:
    'Sin pago inicial · Dos minutos · La reserva la hace el padre, madre o tutor legal',
  facts: [
    '1.º ESO a 1.º Bachillerato',
    'Martes · 16:45–17:45',
    'En el Colegio Paraíso',
    '39 € al mes, sin permanencia',
  ],
}

export const confianza = [
  { value: '4.º año', label: 'en el Colegio Paraíso', sub: 'Curso tras curso' },
  { value: '+2.000', label: 'alumnos formados', sub: 'En más de 10 colegios desde 2019' },
  { value: '2', label: 'premios a mejor delegación', sub: 'En SYMUN y en CEUMUN el curso pasado' },
  { value: '6-15', label: 'alumnos por grupo', sub: 'Las plazas de cada grupo son limitadas' },
]

export const etapas = {
  eyebrow: 'Antes de nada',
  title: '¿Es para su hijo?',
  lead:
    'Sí, desde 1.º de ESO hasta 1.º de Bachillerato. Los grupos se forman por edad y nivel según las inscripciones, y cada curso compite en los torneos que le corresponden.',
  tituloDerecha: 'Lo que se lleva',
  llevaConsigo: [
    'Habla en público sin que le tiemble la voz.',
    'Defiende una postura que no comparte.',
    'Responde cuando le rebaten, sin bloquearse.',
    'Investiga antes de opinar.',
    'Negocia hasta sacar algo adelante.',
  ],
  cierreDerecha: 'Se nota en la mesa de casa y en la clase del día siguiente.',
}

export const mun = {
  eyebrow: 'La metodología',
  title: '¿Qué es un Modelo de Naciones Unidas?',
  lead:
    'Una simulación académica de Naciones Unidas. Cada alumno representa a un país, investiga su posición sobre un problema internacional y debate con delegados de otros centros hasta acordar una resolución.',
  destacadoStrong: 'No hace falta experiencia previa ni destacar hablando en público.',
  destacadoResto:
    'Casi ningún alumno llega sabiendo hacerlo. Para eso son las clases: se progresa practicando, en un grupo pequeño de compañeros del propio colegio, mucho antes de salir a competir.',
  pasos: [
    {
      n: '01',
      title: 'Investiga',
      text: 'Entiende el problema y qué defiende el país que le ha tocado, aunque no sea lo que él piensa.',
    },
    {
      n: '02',
      title: 'Argumenta',
      text: 'Prepara una intervención, la sostiene ante el comité y responde a quien le rebate.',
    },
    {
      n: '03',
      title: 'Negocia',
      text: 'Busca a quién le interesa lo mismo, cede en lo accesorio y aguanta en lo importante.',
    },
    {
      n: '04',
      title: 'Resuelve',
      text: 'Redacta una propuesta con su bloque y la defiende en la votación final.',
    },
  ],
}

export const symun = {
  eyebrow: 'Primer gran reto del curso · Noviembre de 2026',
  title: 'SYMUN 2026',
  lead:
    'Desde 3.º de ESO, los alumnos del Paraíso pueden representar a un país en uno de los grandes MUN escolares de Madrid, en comités en español o en inglés.',
  award: 'El curso pasado ganamos el premio a mejor delegación',
  temasIntro: 'Los comités de SYMUN 2026:',
  temas: [
    'IA y gobernanza en decisiones públicas',
    'Armas autónomas y drones',
    'Soledad juvenil',
    'Crisis de vivienda europea',
    'Groenlandia y la disputa por el Ártico',
    'Crisis histórica: Tordesillas, 1494',
  ],
}

export const eventos = {
  eyebrow: 'Los tres torneos',
  title: 'Cada etapa tiene su siguiente reto',
  lead:
    'Los tres se celebran en Madrid. Nosotros gestionamos la inscripción, preparamos a los alumnos en clase y les acompañamos durante el evento.',
  lista: [
    {
      nombre: 'SYMUN',
      fecha: 'Noviembre de 2026',
      desde: 'Desde 3.º de ESO',
      texto: 'El torneo con el que abre el curso. Comités en español o en inglés.',
      logro: 'Mejor delegación en la edición anterior',
      destacado: true,
    },
    {
      nombre: 'CEUMUN',
      fecha: 'Febrero de 2027',
      desde: 'Desde 2.º de ESO',
      texto: 'El primer torneo grande para los alumnos de primer ciclo.',
      logro: 'Mejor delegación en la edición anterior',
      destacado: false,
    },
    {
      nombre: 'EstuMUN',
      fecha: 'Abril de 2027',
      desde: 'Desde 1.º de ESO',
      texto: 'Lo organizamos nosotros: dos ediciones celebradas y unos 150 participantes.',
      logro: 'Su último secretariado lo formaron alumnos',
      destacado: false,
    },
  ],
  notaStrong: 'Participar es voluntario.',
  notaResto:
    'Los torneos no están incluidos en la mensualidad: cada uno tiene una cuota aparte de entre 50 y 65 €, y dura de tres a cuatro días con desayunos y comidas incluidos. Esa cuota no altera los 39 € del mes. Cifras de referencia del curso anterior, sujetas a la organización de cada evento.',
}

export const equipo = {
  eyebrow: 'El equipo',
  title: 'Quién da la clase',
  lead:
    'Una profesora que empezó como alumna de MUN en las aulas, coordinada por el fundador de la academia.',
  personas: [
    {
      nombre: 'Alejandra Gilmartín',
      rol: 'Profesora en el Colegio Paraíso',
      bio: 'Antigua alumna de MUN en las aulas y ganadora de varios primeros premios en comités avanzados de los Modelos de Naciones Unidas escolares más exigentes de España. Lleva tres años como profesora de MUN y debate y modera debates escolares.',
      // Foto pendiente: Ignacio la enviará. Al tenerla, guardarla como
      // src/assets/equipo/alejandra-gilmartin.jpg (4:5) y poner aquí su nombre.
      foto: null,
    },
    {
      nombre: 'Ignacio Corroto',
      rol: 'Fundador y coordinador',
      bio: 'Fundó MUN en las aulas en 2019, tras trabajar como consultor de estrategia en KPMG. Dirige el área de Inteligencia Artificial en Spiralia, donde ha formado a equipos de ING, Coca-Cola Europacific Partners y Deloitte.',
      foto: 'ignacio-corroto.jpg',
    },
  ] as { nombre: string; rol: string; bio: string; foto: string | null }[],
  cierre:
    'La academia arrancó en 2019 y ya tiene antiguos alumnos dando clase. Ese es el recorrido completo: se entra aprendiendo a intervenir en un comité y se puede acabar dirigiéndolo.',
}

export const practica = {
  eyebrow: 'Curso 2026/27',
  title: 'Información práctica',
  datos: [
    { label: 'Cursos', value: '1.º de ESO a 1.º de Bachillerato' },
    { label: 'Grupos', value: 'Por edad y nivel, según las inscripciones' },
    { label: 'Día y hora', value: 'Martes, de 16:45 a 17:45' },
    { label: 'Calendario', value: 'De octubre de 2026 a mayo de 2027' },
    { label: 'Lugar', value: 'Colegio Paraíso' },
    { label: 'Tamaño del grupo', value: 'Entre 6 y 15 alumnos' },
    { label: 'Idioma de clase', value: 'Español' },
    { label: 'Cuota', value: '39 € al mes' },
  ],
  precioImporte: '39 €',
  precioPeriodo: 'al mes',
  precioDetalles: [
    'Domiciliación a final de mes, de octubre a mayo.',
    'Sin permanencia: puede darse de baja avisando con antelación.',
    'Las dos primeras semanas no se cobran.',
  ],
}

export const prueba = {
  eyebrow: 'Prueba sin riesgo',
  title: 'Dos semanas para conocer la actividad antes de decidir',
  lead:
    'Su hijo o hija asiste con normalidad, conoce a la profesora y ve cómo funciona el grupo. Si al terminar no quiere continuar, no se realiza ningún cobro.',
  pasos: [
    { n: '1', title: 'Reserva la prueba', text: 'Completa el formulario. Dos minutos y sin ningún pago.' },
    { n: '2', title: 'Recibe la confirmación', text: 'Le comunicamos el grupo y el aula asignados.' },
    { n: '3', title: 'Asiste dos semanas', text: 'Participa en las clases como un alumno más.' },
    { n: '4', title: 'Decide después', text: 'Si continúa, 39 € al mes. Si no, se da de baja y no se cobra nada.' },
  ],
  cta: 'Reservar 2 semanas de prueba',
}

export const faq = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Lo que suelen preguntarnos las familias',
  preguntas: [
    {
      q: '¿Qué harán durante las dos semanas de prueba?',
      a: 'Clases normales, con el grupo ya formado: conocerán a la profesora y participarán en las dinámicas de debate, argumentación y negociación como un alumno más.',
    },
    {
      q: '¿Tengo que pagar algo para reservar?',
      a: 'No. La reserva no lleva ningún pago. Si su hijo o hija no continúa después de las dos primeras semanas, no se realiza ningún cobro.',
    },
    {
      q: 'Mi hijo es tímido y le cuesta hablar en clase. ¿Le sirve?',
      a: 'Es justo el perfil con el que mejor funciona. Se empieza en un grupo de entre 6 y 15 compañeros del propio colegio, con intervenciones cortas, y el listón sube poco a poco. Salir a competir es voluntario y llega mucho después.',
    },
    {
      q: '¿Le va a quitar tiempo de estudio?',
      a: 'La clase es una hora a la semana, dentro del colegio. La preparación de los torneos se hace en clase; desde casa solo resolvemos dudas puntuales.',
    },
    {
      q: '¿Y si a mitad de curso quiere dejarlo?',
      a: 'No hay permanencia. Puede darse de baja avisando con antelación y deja de girarse el recibo.',
    },
    {
      q: '¿Es obligatorio ir a los torneos? ¿Cuánto cuestan?',
      a: 'Es voluntario. Quien quiera ir tiene plaza en los torneos de su curso. Cada uno lleva una cuota aparte de entre 50 y 65 €, para tres o cuatro días con desayunos y comidas incluidos, y no está incluida en la mensualidad. Son cifras de referencia del curso anterior.',
    },
    {
      q: '¿Qué torneo le corresponde a cada curso?',
      a: '1.º de ESO participa en EstuMUN. 2.º de ESO, en CEUMUN y EstuMUN. Desde 3.º de ESO, en los tres: SYMUN, CEUMUN y EstuMUN.',
    },
    {
      q: '¿Las clases son en inglés?',
      a: 'No. Las clases semanales en el Paraíso son en español. En algunos torneos el alumno puede elegir un comité en inglés si le apetece, pero no es un requisito para apuntarse.',
    },
    {
      q: '¿Cómo sabré el grupo que le toca?',
      a: 'Se lo comunicamos tras la reserva. Todos los grupos tienen clase los martes de 16:45 a 17:45 y se forman por edad y nivel según las inscripciones. Cada grupo se abre con un mínimo de 6 alumnos; si no se llega, se lo avisamos antes de empezar.',
    },
  ],
}

export const cierre = {
  eyebrow: 'Inscripción abierta para el curso 2026/27',
  title: 'Dos semanas. Y después deciden.',
  lead:
    'Conocer la actividad no cuesta nada y las plazas de cada grupo son limitadas. La reserva la hace el padre, madre o tutor legal y lleva dos minutos.',
  cta: 'Reservar 2 semanas de prueba',
}

export const stickyCta = 'Reservar prueba sin coste'

export const footer = {
  linea: 'MUN en las aulas · Programa para alumnado del Colegio Paraíso · Curso 2026/27',
  legal: 'Aviso legal',
  privacidad: 'Política de privacidad',
}
