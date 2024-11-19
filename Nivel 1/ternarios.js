// Ternario: Los operadores ternarios son un tipo de operador en JavaScript que se utiliza para evaluar una expresión y devolver un valor específico según el resultado de la evaluación.

// console.log(numero > 0 ? "verde" : "rojo"); 

// En esta sintaxis, la "condición" es una expresión que se evalúa como verdadera o falsa. Si la condición es verdadera, el operador ternario devuelve el "verde"; de lo contrario, devuelve el "rojo".

const x = 10;
const y = 20;

const resultado = x > y ? "x es mayor" : "y es mayor";

console.log(resultado); // "y es mayor"

const edad = 18;


const resultadoTwo = edad >= 18 ? "mayor de edad" : "menor de edad";

console.log(resultado); // "mayor de edad"

// Exercise

const ram = 16; // GB
const almacenamiento = 2; // TB
const nucleosCPU = 8;

const esPotente = ram >= 16 && nucleosCPU > 4 ? true : false

console.log(`La computador es potente: ${esPotente}`);

const capacidad = almacenamiento > 1 ? 'La capacidad de la computadora es alta' : 'La capacidad de la computadora es baja'

console.log(capacidad);

const cpu = nucleosCPU > 4 ? 'El CPUY es muy rápido' : 'El CPU es lento'

console.log(cpu);

