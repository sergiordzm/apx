// switch: La declaración switch es una forma de controlar el flujo del código basándose en el valor de una variable. En otras palabras, utilizamos la declaración switch para tomar decisiones en nuestro código dependiendo del valor de una variable. 

const fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Es una manzana");
    break;
  case "banana":
    console.log("Es una banana");
    break;
  case "orange":
    console.log("Es una naranja");
    break;
  default:
    console.log("No es una fruta conocida");
}

// Exercise 

// day es un valor del 1 al 7
const day = 7;
let dayName = "";

switch(day){
    case 1:
        dayName = 'Lunes';
        break;
    case 2 : 
        dayName = 'Martes';
        break;
    case 3 : 
        dayName = 'Miércoles';
        break;
    case 4 : 
        dayName = 'Jueves';
        break;
    case 5 : 
        dayName = 'Viernes';
        break;
    case 6 : 
        dayName = 'Sábado';
        break;
    case 7 : 
        dayName = 'Domingo';
        break;
}


console.log("Hoy es", dayName);

// a declaración switch funciona de manera similar: evalúa el valor de una variable o condición, y ejecuta el código correspondiente al caso que coincide con ese valor. Si ningún caso coincide, entonces se ejecuta el código del caso por defecto.

// // switch (expression) {
// //     case value1:
// //       // código a ejecutar si expression es igual a value1
// //       break;
// //     case value2:
// //       // código a ejecutar si expression es igual a value2
// //       break;

// //     default:
//       // código a ejecutar si ningún case coincide con el valor de expression
//   }

//   Cada case debe terminar con la palabra clave break, que indica al navegador que debe salir de la declaración switch una vez que se ha ejecutado el código correspondiente. Si no se incluye break, el código de los siguientes cases también se ejecutará.

