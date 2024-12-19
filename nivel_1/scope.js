// Existen dos tipos de scope en JavaScript: el scope global y el scope local.
// El scope global se refiere a las variables que se declaran fuera de cualquier función, lo que significa que se pueden acceder a ellas desde cualquier parte del programa.
//  el scope local se refiere a las variables que se declaran dentro de una función, lo que significa que solo se pueden acceder a ellas dentro de esa función.
// cuando declaramos variables dentro de una función, JavaScript se encarga de limpiar la memoria RAM y eliminar los datos que ya no se utilizan en nuestro programa. A este proceso se le llama garbage collector y nos ayuda a optimizar nuestro programa.


let numero = 4

function main(){}
console.log(numero);
main()