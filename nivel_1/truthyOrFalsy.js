const nombreOne = "Marce";

if(nombreOne){
  console.log("el nombre existe")
}

// en el contexto de una condición
// el valor aunque es un string
// es tomando como true
// esto es un valor truthy (verdadero, ponele)

// Los valores que se consideran verdaderos en una condición se llaman "truthy", mientras que los que se consideran falsos se llaman "falsy". En general, todos los valores son truthy, excepto los definidos como falsy: false, 0, -0, 0n, "", null, undefined y NaN.

const nombre = "";
// al inciar una variable con un texto ""
// aunque es string, en una condición
// es tomado como false

console.log(typeof nombre);

if (nombre) {
  console.log("El nombre es", nombre);
} else {
  console.log("No  hay nombre");
}

// Exercise

const numeroA = 10;
const numeroB = 0;
const numeroC = -5;

const textoA = "Hola";
const textoB = "";
const textoC = "Mundo";

const arrayA = [1, 2, 3];
const arrayB = [];

const objeto = { nombre: "Juan", edad: 30 };

const booleanoA = true;
const booleanoB = false;

// # numeroA

console.log("numeroA va a ser truthy");

if (numeroA) {
  console.log("El dato numeroA es truthy");
} else {
  console.log("El dato numeroA es falsy");
}

// Truthy

// # numeroB
console.log("--------");
console.log("numeroB va a ser falsy");

if (numeroB) {
  console.log("El dato numeroB es truthy");
} else {
  console.log("El dato numeroB es falsy");
}

// # textoA
console.log("--------");
console.log("textoA va a ser truthy");

if (textoA) {
  console.log("El dato textoA es truthy");
} else {
  console.log("El dato textoA es falsy");
}

// # textoB
console.log("--------");
console.log("textoB va a ser falsy");

if (textoB) {
  console.log("El dato textoB es truthy");
} else {
  console.log("El dato textoB es falsy");
}

// # textoC
console.log("--------");
console.log("textoC va a ser truthy");

if (textoC) {
  console.log("El dato textoC es truthy");
} else {
  console.log("El dato textoC es falsy");
}

// # arrayA
console.log("--------");
console.log("arrayA va a ser truthy");

if (arrayA) {
  console.log("El dato arrayA es truthy");
} else {
  console.log("El dato arrayA es falsy");
}

// # arrayB
console.log("--------");
console.log("arrayB va a ser falsy");

if (arrayB) {
  console.log("El dato arrayB es truthy");
} else {
  console.log("El dato arrayB es falsy");
}

// # objeto
console.log("--------");
console.log("objeto va a ser truthy");

if (objeto) {
  console.log("El dato objeto es truthy");
} else {
  console.log("El dato objeto es falsy");
}

// # booleanoA
console.log("--------");
console.log("booleanoA va a ser truthy");

if (booleanoA) {
  console.log("El dato booleanoA es truthy");
} else {
  console.log("El dato booleanoA es falsy");
}

// # booleanoB
console.log("--------");
console.log("booleanoB va a ser falsy");

if (booleanoB) {
  console.log("El dato booleanoB es truthy");
} else {
  console.log("El dato booleanoB es falsy");
}