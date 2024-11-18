// if se traduce como "si" y se utiliza en programación para introducir condiciones. 

// Si el precio es mayor a 1000, me parece caro. If the price is over 1000, it seems expensive to me.

/* si (precio es mayor a 1000) entonces
     muestra en la terminal "es caro"
 [fin del si] */

 //cambia esta variable para ver como se evalua la condicion
const num = 15;
const condicion = num > 3;

if (condicion) {
  console.log("La condición es verdadera");
} 

console.log("esto se ejecuta siempre porque está fuera del if")

// Else: Se utiliza para indicar un bloque de código qué debe ejecutarse si la condición que se ha establecido en el if no se cumple.

//cambia esta variable para ver como se evalua la condicion
const invitados = ["Fache", "Luchito", "Carlitos"];
const condicionTwo = invitados.length > 2;

if (condicionTwo === true) {
  console.log("La condición es verdadera");
} else {
  console.log("La condición es falsa");
}

// Else if: Es una estructura que se usa para agregar más condiciones a una estructura de control de flujo if. Se utiliza para especificar una nueva condición que debe evaluarse si la condición del if es falsa.

const fruta = "manzana";

if (fruta === "manzana") {
  console.log("La fruta es una manzana");
} else if (fruta === "pera") {
  console.log("La fruta es una pera");
} else {
  console.log("La fruta es otra cosa");
}

// ExerciseOne

const laptop = {
    id: "LAP123456",
    marca: "TechBrand",
    modelo: "X200",
    especificaciones: {
      procesador: "Intel Core i7",
      ram: 16, // en GB
      almacenamiento: 512, // en GB
      pantalla: 15.6 // en pulgadas
    },
    precioBase: 1000,
    incluyeSeguro: true,
    esReacondicionado: true,
    fechaFabricacion: { dia: 20, mes: 11, anio: 2023 },
    estado: "nuevo" // puede ser "nuevo" o "usado"
  };
  
  let precioFinal = laptop.precioBase;
  
  if(laptop.incluyeSeguro){
    precioFinal += 100
  }
  
  if(laptop.esReacondicionado){
    precioFinal -= 150
  }

  if(laptop.especificaciones.ram >= 16){
    precioFinal += 50
  }
  
  console.log(precioFinal);

  // ExerciseOne

  const envio = {
    id: "AR123456789",
    destinatario: "Laura González",
    direccion: {
      calle: "Av. Santa Fe",
      numero: 1930,
      ciudad: "CABA",
      provincia: "Buenos Aires"
    },
    productos: [
      { nombre: "Libro", peso: 1, valor: 1200 },
      { nombre: "Maceta", peso: 2, valor: 800 }
    ],
    pesoTotal: 3,
    distancia: 50, // distancia en km
    tipo: "express", // puede ser "estándar" o "express"
    fechaEnvio: { dia: 26, mes: 3, anio: 2024 },
    estado: "en camino", // puede ser "preparación", "en camino", "entregado"
    esInternacional: true
  };
  
  
  let costoDeEnvio = 300;
  
  if(envio.esInternacional){
    costoDeEnvio+=100
  }

  if(envio.tipo === 'express'){
    costoDeEnvio+=200
  }
  
costoDeEnvio += envio.pesoTotal*10

  console.log(costoDeEnvio);