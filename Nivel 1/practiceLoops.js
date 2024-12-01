// Exercise 1

// Dado este array de arrays, multiplica los números de cada subarray
let arrays = [
    [2, 4, 3],
    [1, 5, 2],
    [3, 1, 4]
];
// Resultado esperado: [24, 10, 12]
let arrayMult = []

for(let indice in arrays){
    let mainArray = arrays[indice]
    let mult = 1
    for(let number of mainArray){
        mult *= number
        arrayMult[indice] = mult

    }

}

console.log(arrayMult);

// Exercise 2

// Encuentra el número más grande de cada subarray
let numeros = [
    [16, 23, 8],
    [45, 3, 27],
    [12, 91, 3]
];
// Resultado esperado: [23, 45, 91]

function comparar(a,b){
    return b - a
}

let arrayMost = []

for(let value of numeros){
    value.sort(comparar)
    arrayMost.push(value[0])
}

console.log(arrayMost);

// Exercise 3

// Crea un nuevo array con solo los números pares de cada subarray
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
// Resultado esperado: [[2,4], [6,8], [10,12]]

let numPairs = []

for(let indice in matriz){
    let mat = matriz[indice]
    let arrayTemp = []
    for(let par of mat){
        if(par % 2 === 0 ){
            arrayTemp.push(par)
        }
    }
    numPairs.push(arrayTemp)
}

console.log(numPairs);

// Exercise 4

// Crear una matriz similar pero ahora guardando los números impares de cada fila en subarrays. El resultado debería ser algo como: [[1,3], [5,7], [9,11]]

let matrizImp = [
    [1, 4, 7, 2],
    [5, 8, 3, 6],
    [9, 4, 1, 8]
];

let matrizImpTwo = []

for(let ind of matrizImp){
    let arrayTemporal = []
    for(let num of ind){
        if(num % 2 > 0){
            arrayTemporal.push(num)
        }
    }
    matrizImpTwo.push(arrayTemporal)
}

console.log(matrizImpTwo);

// Exercise 5

let matrizMayorCinco = [
    [2, 4, 6, 8],
    [1, 3, 5, 7],
    [10, 20, 30, 40]
];

let matrizMayor = []

for(let ind of matrizMayorCinco){ 
    let arrayTemporal = []
    for(let num of ind){
        if(num > 5){
            arrayTemporal.push(num)
        }
    }
    matrizMayor.push(arrayTemporal)
}

console.log(matrizMayor);

// Exercise 6

let matrizSix = [
    [-1, 2, -3, 4],
    [5, -6, 7, -8],
    [-9, -10, 11, 12]
];

let newArray = []

for(let ind of matrizSix){
    let arrayMult= []
    for(let mult of ind){
        arrayMult.push(mult*2)
    }
    newArray.push(arrayMult)
}

console.log(newArray);