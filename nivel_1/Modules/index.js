// index es un punto de entrada. Es uno de los archivos que nos ayuda a ejecutar nuestro programa. Recibe los parámetros del exterior.
// Recibe el input
// De esta manera podemos desarrollar una arquitectura

import buscarPelis from "./pelis.js";


function main () {
    const resultadoDeBusqueda = buscarPelis()
    console.log(resultadoDeBusqueda);
}

main()