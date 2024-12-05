// Las arrow functions son una forma más concisa y expresiva de escribir funciones en JavaScript.
// La sintaxis de una arrow function se ve así:

// (param1, param2, paramN) => { statements }

// Donde param1, param2, etc. son los parámetros de la función y statements es el cuerpo de la función.

// Por ejemplo, si quisiéramos escribir una función que calcule el cuadrado de un número, podríamos hacerlo de la siguiente manera usando una función tradicional:

// function square(num) {
//     return num * num;
//   }

//   Usando una arrow function, se vería así:

// const square = (num) => {
//     return num * num;
//   }

//   Notarás que la arrow function es mucho más corta y concisa que la función tradicional. También hay una forma más corta de escribir arrow functions si solo se necesita una expresión:

// const square = (num) => num * num;

// En este caso, las llaves y la palabra clave return se omiten, ya que solo hay una expresión.

// Challenge

const arrayTest = ["hola", "adios", "bienvenido", "chau", "perro"];

const filtrarNumeros = (objeto, num) => {
    let arrayFinal = []
    for(let indice of objeto){
        if(indice.length >= num){
            arrayFinal.push(indice)
        }
    }
    console.log(arrayFinal);
 }

 filtrarNumeros(arrayTest, 3)

//  Challenge 2

// function obtenerNumerosPares(numeros) {
//     const numerosPares = [];
//     for (let i = 0; i < numeros.length; i++) {
//       if (numeros[i] % 2 === 0) {
//         numerosPares.push(numeros[i]);
//       }
//     }
//     return numerosPares;
//   }

let numbers = [2, 3, 4, 5, 6]

const obtenerNumerosPares = (numeros) => {
    const numerosPares = [];
    for(let num of numeros){
        if(num % 2 == 0){
            numerosPares.push(num)
        }
    }
   return numerosPares
  }

  let yo = obtenerNumerosPares(numbers)
  console.log(yo);

//   La función sí está funcionando correctamente, pero hay una diferencia importante entre console.log() y return:

// console.log() MUESTRA el resultado en la consola
// return DEVUELVE un valor que puedes usar después, pero no lo muestra

// La diferencia clave es que con return puedes usar ese valor más tarde en tu código para otras operaciones, mientras que console.log() solo lo muestra pero no permite reutilizar el valor.