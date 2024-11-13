const titulo = "Jurassic Park";
const sinopsis = "Un multimillonario construye un parque de dinosaurios clonados, pero todo sale mal cuando los dinosaurios escapan y aterrorizan a los visitantes.";
const añoEstreno = 1993;
const mesEstreno = 6;
const diaEstreno = 11;

const director = "Steven Spielberg";
const duracionMinutos = 127;
const calificacionIMDb = 8.1;

// Objeto literal: Se crea de manera muy similar a cualquier otro dato pero en vez de asignarle un valor entre comillas  un número, lo que usamos es usar un formato JSON

// JSON: JavaScript Object Notation. Con ello escribimos objetos literales.

// No necesitamos definir qué tipo de datos son las propiedades del objeto

const miPrimerObjeto = {
    nombre: 'Sergio',
    apellido: 'Rodríguez'
}

console.log(miPrimerObjeto.nombre);

// usando objetos podemos repetir los nombres dentro de los objetos
const jurassicPark = {
    titulo: "Parque Jurásico",
    estreno: 1993,
    duracionMinutos: 127,
  }
  
  const terminator2 = {
    titulo: "Terminator 2: Judgment Day",
    estreno: 1991,
    duracionMinutos: 137,
  };

//   Modificar una propiedad del código

terminator2.estreno = 1994

console.log(terminator2);

// Exercise

const tituloTerminator2 = "Terminator 2: Judgment Day";
const añoEstrenoTerminator2 = 1991;
const duracionMinutosTerminator2 = 137;


let movieOne = {
    tittle : tituloTerminator2,
    year : añoEstrenoTerminator2,
    duracion : duracionMinutos

}

console.log(movieOne);

const yo = {
    name : 'Sergio',
    lastName : 'Rodrìguez',
    age : 28,
    city : 'CDMX'
}

console.log('Datos de:', yo.name);
console.log(yo);