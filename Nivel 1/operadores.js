// Operadores: Son símbolos o plaabras clave speciales que te permiten realizar operaciones entre los datos que vas creando. Desde asignar valores hasta realizar cálculos matemáticos y comparaciones lógicas.

// Operadores de asignación: Asignan valores a variables

let saldo = 1000;
console.log(saldo);
saldo += 500; // Equivale a saldo = saldo + 500
saldo -= 200; // Equivale a saldo = saldo - 200
saldo *= 2;   // Equivale a saldo = saldo * 2
saldo /= 4;   // Equivale a saldo = saldo / 4
saldo %= 3;   // Equivale a saldo = saldo % 3

// Operadores aritméticos: Permiten realizar operaciones artiméticas

const suma = 5 + 3;    // Suma, resultado: 8
const resta = 10 - 4;  // Resta, resultado: 6
const multiplicacion = 2 * 3; // Multiplicación, resultado: 6
const division = 10 / 2;  // División, resultado: 5
const modulo = 7 % 2;     // Módulo, resultado: 1
let contador = 0;
contador++;               // Incremento, contador ahora es 1
contador--;               // Decremento, contador vuelve a ser 0

// Operadores de comparación: Nos permitirán comparar.

const igualdad = 5 == "5";   // true, compara valor
const igualdadEstricta = 5 === "5"; // false, compara valor y tipo
const desigualdad = 5 != "4";       // true
const desigualdadEstricta = 5 !== "5"; // true
const mayorQue = 10 > 5;            // true
const menorQue = 5 < 10;            // true
const mayorOigualQue = 5 >= 5;      // true
const menorOigualQue = 5 <= 5;      // true

// Operadores lógicos: Los operadores lógicos se usan para combinar expresiones booleanas. Son clave para construir condiciones más complejas en tus estructuras de control.

const verdad = true && true; // AND, resultado: true
const falso = true && false;  // AND, resultado: false
const oVerdad = true || false; // OR, resultado: true
const noVerdad = !true;        // NOT, resultado: false

// Exercise 1

// Definición de objetos persona
const personas = [
    {
      nombre: "Alice",
      edad: 30,
    },
    {
      nombre: "Bob",
      edad: 25,
    },
  ];
  
  const resultado = personas[0].edad > personas[1].edad
  console.log(`${personas[0].nombre} es mayor a ${personas[1].nombre}?`, resultado);

//   Exercise 2

  // Estado de cuenta
const estadoDeCuenta = {
    saldoDisponible: 500
  };
  
  // Producto deseado
  const producto = {
    nombre: "Teclado Mecánico",
    precio: 300
  };
  
  const saldoSuficiente = producto.precio <= estadoDeCuenta.saldoDisponible
    
  console.log("Saldo suficiente", saldoSuficiente);

//   Exercise 3

  const precioInicial = 300;

// esto quieren decir que se le aplica el 30% de descuento 
const porcentajeDescuento = 30; 

// cuando la lógica conlleva varios pasos
// es mejor usar datos intermedios
// en este caso podés calcular cuanto significa el descuento
// en base al precio
const valorDelDescuento = precioInicial*porcentajeDescuento*0.01
console.log(valorDelDescuento);

// finalmente calcula cual es el precio con el descuento aplicado
const precioFinal = precioInicial - valorDelDescuento
console.log(`Precio final con descuento aplicado, $${precioFinal}`);

// Exercise 4

// Array con productos en el carrito
const carrito = [
    { descripcion: "Teclado Mecánico", precioUnitario: 100, cantidad: 2 },
    { descripcion: "Mouse Inalámbrico", precioUnitario: 50, cantidad: 1 }
  ];
  
  // calcula el precio de cada producto basado 
  // en el precioUnitario y la cantidad
  const precioProducto1 = carrito[0].precioUnitario * carrito[0].cantidad
  const precioProducto2 = carrito[1].precioUnitario * carrito[1].cantidad
  
  const total = precioProducto1 + precioProducto2
    
  console.log(`El total es $${total}`);
    