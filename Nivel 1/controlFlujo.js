// Input
const precioInicial = 150; // Precio inicial del producto
const descuento = 0.1; // Descuento general del 10%

// Lógica: Calculando el descuento general
const montoDescuento = precioInicial * descuento;
const precioFinal = precioInicial - montoDescuento;
const esCaro = precioFinal > 1000

// Output
console.log(`El precio final es: ${precioFinal}`);
console.log(`Y es caro?: ${esCaro}`);

const producto = {
    nombre: "Libro de JavaScript",
    precio: 120,
    esBlackFriday: false
  };

descuentoBlackFriday = 0.1

  if (producto.esBlackFriday){
    let descuento = producto.precio * descuentoBlackFriday
    let precioFinal = producto.precio - descuento
    console.log(`El prudcto entra en Black Friday y su precio final es de ${precioFinal}`);
  } else{
    console.log(`Lo siento, el producto no entra en Black Friday, su precio final es de ${producto.esBlackFriday}`);
  }

  producto.esBlackFriday ? console.log('El prudcto entra en Black Friday') : console.log('El prudcto no entra en Black Friday')

  const carrito = [
    {id:1, producto: "Libro de JavaScript", precio: 100, promocion: true },
    {id:2, producto: "Cuaderno", precio: 50, promocion: true  },
    {id:3, producto: "Lápiz", precio: 20, promocion: true  }
  ];

  console.log(`El nombre del producto es ${carrito[0].producto} y su precio es ${carrito[0].precio}`);
