// La forma mas sencilla de declarar una funciôn es com la palabra clave function. La cual lleva una 
// Las funciones se utilizan para encapsular lógica, no nada más código
// Las funciones se utilizan para crear bloques de código reutilizable que pueden tomar argumentos y devolver valores. 
// las funciones son una herramienta muy poderosa para crear código limpio, modular y eficiente en JavaScript.
// Por convención, en el mundo del desarrollo, le llamamos main a la función principal de un programa. Esta subrutina será el punto de entrada (entry point) a la aplicación y en su interior se llamarán a las demás funciones.

function main (nombre, apellido){
    console.log('Hola,', nombre, apellido);
    return true
}

// Para indicarle al programa que ejecute ;a función se manda a llamar de la siguiente manera:
main('Sergio', 'Rodríguez')

// 1. declaro la funcion crearSaludo
function crearSaludo(nombre){
    console.log("empieza la función crearSaludo con el parámetro", nombre)
    return "Hola" + nombre;
  }
  
  // 2. declaro la funcion main
  function main(){
    console.log("empieza la función main")
  
    var saludoAMarce = crearSaludo("Sergio");
    var saludoAPau = crearSaludo("Mariana");
    
    console.log("se imprimen los resultados")
    console.log(saludoAMarce);
    console.log(saludoAPau);
    
    console.log("se termina el programa")
  }
  
  // 3. ejecuto la función main
  main();
  
//   Suelen estar formadas por un nombre, unos parámetros, un bloque de código y un resultado.
// En nuestros proyectos vamos a usar una función principal a la que llamamos main.