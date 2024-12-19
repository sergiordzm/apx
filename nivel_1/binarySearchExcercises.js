// Challenge 1
// Implementa una función que encuentre si un número existe en un array ordenado
const numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// Encuentra si existe el número 7
// Encuentra si existe el número 10

// Se inicializa la función con los parámetros
const searchFunction = (arr, search) => {
    // Se declaran las variables para usarlas como inicio y fin
    let inicio = 0
    let hasta = arr.length - 1
    // Se declara el loop, para este caso sería while
    while(inicio <= hasta){
        // Se obtiene la mitad del arreglo
        let mitadArr = Math.floor((inicio + hasta) / 2)
        // Se compara el  número ingresado con el de la mitad del array
        if(arr[mitadArr] == search){
            return `El número ${arr[mitadArr]} está en la posición ${mitadArr}`
        }
        if(arr[mitadArr] > search){
            inicio = mitadArr + 1
        } else{
            hasta = mitadArr - 1
        }
    }
    return `El número ${search} no se encuentra en la lista`
}

let test = searchFunction(numeros, 9)

console.log(test);

// Challenge 2

/* 
Dado un array ordenado y un número objetivo, encuentra el índice 
donde se debería insertar el número para mantener el array ordenado
Ejemplo: 
array = [1, 3, 5, 6]
objetivo = 4
Resultado: 2 (porque 4 debería ir en la posición 2)
*/