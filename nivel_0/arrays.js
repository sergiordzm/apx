// Arrays: Agrupar datos de manera ordenada y sin necesidad de asignar un nombre a cada elemento
// Los elementos dentro de un array se numeran secuencialmente, comenzando desde el índice 0.

const carritoDeCompras = [
    "Remera negra",
    "Zapas deportivas",
    "Libro 'Demian' de Hermann Hesse",
    "Rompecabezas de 1000 piezas",
  ];
  
  console.log(typeof carritoDeCompras);
  console.log(carritoDeCompras[0]);

  const pelis = [
    "Titanic",
    "Jurassic Park",
    "Matrix",
    "Forrest Gump",
    "Pulp Fiction"
  ];

//   Cambio algo de la lista

pelis[1] = 'Top Gun'
console.log(pelis);

// Agregar un elemento a la lista
pelis[0] = 'Topo Gun 2'
console.log(pelis.length);

// Exercise

const carrito = [
    {
      articulo: 'Maceta',
      price: 500,
      cantidad: 1
    },
    {
      articulo: 'Tierra',
      price: 100,
      cantidad: 3
    }
  ]
  
carrito[carrito.length] = {articulo: 'Bici', price: 1000, cantidad:1}

console.log("Hasta acá hay", carrito.length, "productos en el carrito");

// Yo, objeto

const Yo = {
    Nombre: 'Sergio',
Apellido: 'Rodríguez',
Edad: 24,
Pais: 'México',
Profesión: 'Ingeniero',
Maneja: true,
Mascotas: ['Dog', 'Kevin', 'Clarita', 'Yojis'],
Hobbies: ['Leer', 'Música','Programar'],
Instrumentos: true,
Inglés: 'B2',
Ciudad: 'CDMX',
Redes: false,
Películas: ['Pearl Harbour', 'Top Gun'],
Comida: 'Enchiladas',
cocina: false,
Día: 'Viernea',
Objetivos: ['Programador profesional', 'Música conocida']
}