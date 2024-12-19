// Este módulo representa al modelo no necesita una función main(). Aquí debes declarar los siguientes datos:

// Un array de objetos (products), que no debe que ser exportado. Cada producto del array debe tener id (number), name (string) y stock (number).
// Además el módulo products.js debe declarar y exportar 3 funciones.
// Una función llamada getOne(id) que obtiene un producto específico de la lista.
// Una función llamada getAll() que devuelve todos los productos.
// Una función llamada getAllWith(minStock) que devuelve solo los productos que tengan al menos esa cantidad de stock.

const products = [
        { id: 1, name: 'Laptop', stock: 45 },
        { id: 2, name: 'Smartphone', stock: 23 },
        { id: 3, name: 'Tablet', stock: 67 },
        { id: 4, name: 'Auriculares', stock: 12 },
        { id: 5, name: 'Monitor', stock: 89 },
        { id: 6, name: 'Teclado', stock: 34 },
        { id: 7, name: 'Mouse', stock: 56 },
        { id: 8, name: 'Impresora', stock: 78 },
        { id: 9, name: 'Router', stock: 90 },
        { id: 10, name: 'Webcam', stock: 43 },
        { id: 11, name: 'SSD', stock: 21 },
        { id: 12, name: 'HDD', stock: 65 },
        { id: 13, name: 'RAM', stock: 32 },
        { id: 14, name: 'GPU', stock: 87 },
        { id: 15, name: 'CPU', stock: 54 },
        { id: 16, name: 'Parlantes', stock: 76 },
        { id: 17, name: 'Batería', stock: 98 },
        { id: 18, name: 'Cargador', stock: 45 },
        { id: 19, name: 'Cable HDMI', stock: 67 },
        { id: 20, name: 'Adaptador', stock: 33 }
  ];
  
  function getProduct(id){
    for(let product of products){
        if(product.id == id){
            return product
        }
    }
  }

  // [Escribir el resto de las funciones]
  
  module.exports = { 
    getProduct, 
    // exportar el resto de las funciones
    // para poder ser importadas desde otros módulos (index.js)
  };
