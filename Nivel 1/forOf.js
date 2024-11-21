// Un bucle for of, hace una iteración sobre un objeto iterable (incluídos los objetos) en los cuales cada iteración contará con una variable para el valor de la misma.

// Lo que significa que en cada repetición de la ejecución de nuestro bucle, contaremos con una variable para acceder al valor en el cual se encuentra la iteración actual.

const iterable = [1, 2, 3];
for( var iteracion of iterable){
	console.log(iteracion);
}
//Output esperado:
//1
//2
//3

// Exercise

const computadoras = [
    { nombre: "Asus", sistema_operativo: "Windows" },
    { nombre: "Macbook", sistema_operativo: "macOS" },
    { nombre: "Dell", sistema_operativo: "Windows" },
    { nombre: "Lenovo", sistema_operativo: "Linux" },
    { nombre: "HP", sistema_operativo: "Windows" }
  ];
  
  // Iteramos sobre cada objeto del array "computadoras"
  for (const compu of computadoras) {
    if(compu.sistema_operativo === 'Windows'){
        console.log(compu);
    }
  }

let word = 'hola'

console.log(word[0]);