var listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

function busquedaBinaria(numeros, busqueda){
  var desde = 0;
  var ultimaPosicion = numeros.length - 1;
  var hasta = ultimaPosicion;

  while(desde <= hasta) {
    var laMitad = Math.floor((desde + hasta) / 2);
    var numeroDelMedio = numeros[laMitad];
    if(numeroDelMedio == busqueda){
      return laMitad;
    }
    if(numeroDelMedio > busqueda){
      hasta = laMitad - 1;
    } else {
      desde = laMitad + 1;
    }
  }
  return -1;
}

const donde = busquedaBinaria(listaDeNumeros, 1024);

console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);

// Explain

// // Se crea una variable llamada listaDeNumeros que contiene un arreglo con una serie de números.
// var listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

// // Se crea una función llamada busquedaBinaria que recibe una lista de números y el número a buscar.
// function busquedaBinaria(numeros, busqueda) {
//   // Se inicializan las variables desde, hasta y ultimaPosicion para representar los índices del arreglo.
//   var desde = 0;
//   var ultimaPosicion = numeros.length - 1;
//   var hasta = ultimaPosicion;

//   // Mientras el índice desde sea menor o igual al índice hasta, se sigue buscando el número en la lista.
//   while (desde <= hasta) {
//     // Se calcula el índice del elemento del medio de la lista.
//     var laMitad = Math.floor((desde + hasta) / 2);
//     // Se obtiene el valor del elemento del medio.
//     var numeroDelMedio = numeros[laMitad];
//     // Si el valor del elemento del medio es igual al número buscado, se devuelve su posición en el arreglo.
//     if (numeroDelMedio == busqueda) {
//       return laMitad;
//     }
//     // Si el valor del elemento del medio es mayor al número buscado, se busca en la mitad izquierda del arreglo.
//     if (numeroDelMedio > busqueda) {
//       hasta = laMitad - 1;
//     }
//     // Si el valor del elemento del medio es menor al número buscado, se busca en la mitad derecha del arreglo.
//     else {
//       desde = laMitad + 1;
//     }
//   }
//   // Si el número no se encuentra en el arreglo, se devuelve -1.
//   return -1;
// }

// // Se crea una variable llamada donde que almacena el resultado de llamar a la función busquedaBinaria con la lista de números y el número a buscar.
// const donde = busquedaBinaria(listaDeNumeros, 987);

// // Se imprime en consola un mensaje indicando la posición donde se encontró el número y el número mismo.
// console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);
