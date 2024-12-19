// if

const producto = {
    nombre: "Libro de JavaScript",
    precio: 100,
    esBlackFriday: true
  };
  
  let precioFinal;
  
  if (producto.esBlackFriday) {
    // Aplicamos un 20% de descuento
    const montoDescuento = producto.precio * 0.2;
    precioFinal = producto.precio - montoDescuento;
  } else {
    precioFinal = producto.precio;
  }
  
  console.log(`El precio con descuento es: ${precioFinal}`);

//   Bucles: Nos permiten repetir un bloque de código mientras se cumpla una condición especîfica
// Un ejemplo de bucle es el while

const carrito = [
    { producto: "Libro de JavaScript", precio: 100 },
    { producto: "Cuaderno", precio: 50 },
    { producto: "Lápiz", precio: 20 }
  ];
  
  let total = 0;
  let i = 0;
  
  while (i < carrito.length) {
    total += carrito[i].precio;
    i++;
  }
  
  console.log(`El total a pagar es: ${total}`);
  