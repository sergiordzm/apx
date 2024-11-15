const miPlaylist = [{
    titulo: "Mi primera línea de código",
    url: "https://youtu.be/IC4c_XOCDGw?feature=shared",
    resumen: "En este video vamos a hablar sobre el capítulo inicial del Nivel 0 de la carrera de Software Developer de apx.",
    tags: ['video', 'software'],
    visto: true,
    dificultad: 1
  },
  {
    titulo: "Null vs Undefined - Primitivos en JavaScript",
    url: "https://youtu.be/FoDnWun0gPI?feature=shared",
    resumen: "En este video hablamos de primitivos en JavaScript. ",
    tags: ['video', 'software'],
    visto: true,
    dificultad: 3
  },
  {
    titulo: "Plan de estudios",
    url: "https://youtu.be/4sC-Cf_eDHo?feature=shared",
    resumen: "En este video vamos a analizar el plan de estudios de la carrera de Software Developer de apx. ",
    tags: ['video', 'software'],
    visto: true,
    dificultad: 1
  },
  {
    titulo: "El mejor lenguaje de programación para empezar",
    url: "https://youtu.be/bo3AnDcRY3o?feature=shared",
    resumen: "En este video vamos a hablar de JavaScript, el lenguaje que elegimos para iniciarnos en este mundo de la programación y con el cual nos vamos a ir encariñando.",
    tags: ['video', 'software'],
    visto: true,
    dificultad: 4
  },
  {
    titulo: "No aprendas a programar antes de saber esto",
    url: "https://youtu.be/ULMzBlsBeNw?feature=shared",
    resumen: "En este video te cuento cuales son los primeros pasos ideales a la hora de aprender programación.",
    tags: ['video', 'software'],
    visto: true,
    dificultad: 5
  },
  ]
  
  // Número total de videos
  console.log("Total de videos en la playlist:", miPlaylist.length);
  
  // Datos del primer video
  console.log("Primer video - Título:", miPlaylist[0].titulo);
  console.log("Primer video - URL:", miPlaylist[0].url);
  // Imprimir el resumen del primer video
  
  // Datos del último video
  console.log("Último video - Título:", miPlaylist[miPlaylist.length - 1].titulo);
  console.log("Último video - URL:", miPlaylist[miPlaylist.length - 1].url);