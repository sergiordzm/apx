// El bucle for in, es similar al bucle for of, pero en este caso, las iteraciones contendrán una variable para acceder a la key (clave) de cada elemento.

// Esto quiere decir que si iteramos un array, la variable contendrá el índice de su iteración (la posición en la cual nos encontramos).

const iterable = ["instagram", "tiktok", "twitch"];

for(var key in iterable){
	console.log(key);
}
// Output esperado:
// 0
// 1
// 2

for(var key in iterable){
	console.log(iterable[key]);
}

// Output esperado:
// instagram
// tiktok
// twitch

const productos = {
    "p001": {
      nombre: "Laptop",
      marca: "Dell",
      precio: 1200
    },
    "p002": {
      nombre: "Monitor",
      marca: "Samsung",
      precio: 300
    },
    "p003": {
      nombre: "Teclado Mecánico",
      marca: "Logitech",
      precio: 100
    }
  };
  
  // Usando un bucle for...in para recorrer el objeto
  for (const id in productos) {
    console.log(`ID: ${id}`);
    console.log(`Nombre: ${productos[id].nombre}`);
    console.log(`Marca: ${productos[id].marca}`);
    console.log(`Precio: $${productos[id].precio}`);
  }

//   Exercise One

const producto = {
    id: 't0001',
    nombre: 'MacBook Pro',
    descripcion: 'Computadora de merca Apple',
    precio: 32000,
    stock: 4    
  };
  
  for (const detail in producto) {
    console.log(`${detail}: ${producto[detail]}`);
  }
  
//   Exercise Two

// Crea una función que cuente cuántas propiedades tiene un objeto
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "rojo"
};

function contarPropiedades(objeto){
    let contador = 0;
    for(let propiedad in objeto){contador ++}
    return contador
}

let finalFunction = contarPropiedades(coche) 

console.log(finalFunction);

// Exercise three

// Suma todos los valores numéricos en un objeto
const ventas = {
    lunes: 150,
    martes: 300,
    miercoles: 200,
    jueves: "cerrado",
    viernes: 400
};

function sumarValoresNumericos(objeto) {
    let suma = 0;
    for(let valor in objeto){if(typeof(objeto[valor]) === "number"){suma += objeto[valor]}}
    return suma;
}

let valorTotal = sumarValoresNumericos(ventas)

console.log(valorTotal);

// Exercise Four

// Crea una función que convierta todos los valores de un objeto a mayúsculas
// Solo debe convertir los valores que sean strings
const product = {
    nombre: "laptop",
    marca: "hp",
    precio: 800,
    categoria: "electronica"
};

function convertirAMayusculas(objeto) {
    let nuevoObjeto = {};
    for(let propiedad in objeto){
        if(typeof(objeto[propiedad]) === 'string'){
            nuevoObjeto[propiedad] = objeto[propiedad].toUpperCase()
        }
    }
    return nuevoObjeto;
}

let upperObject = convertirAMayusculas(product)

console.log(upperObject);

// Exercise Five

// Crea una función que cree un nuevo objeto solo con las propiedades 
// que empiezan con una letra específica
const ciudades = {
    madrid: "España",
    miami: "USA",
    paris: "Francia",
    munich: "Alemania"
};

function filtrarPorLetra(objeto, letra) {
    let resultado = {};
    for(let city in objeto ){if(city[0] === letra){resultado[city] = ciudades[city]}}
    return Object.keys(resultado).length > 0 ? resultado : 'No hay ciudades' ;
}

let mCities = filtrarPorLetra(ciudades, 'p')

console.log(mCities);