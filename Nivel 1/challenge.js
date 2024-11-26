// Array de 87 numeros random (entre 10 y 90) en un array 
// Usar for para contar cuantos numeros pares numeros impares 

// Challenge 1

let arrayNumber = []

let numerosPares = []
let numerosImpares = []

while(arrayNumber.length < 87)
{
    let randomNumber = Math.random()*100
    arrayNumber.push(Math.floor(randomNumber))
}

for(i = 0; i < arrayNumber.length; i++){
    
    if(arrayNumber[i]% 2 == 0){
        numerosPares.push(arrayNumber[i])
    }
    else{
        numerosImpares.push(arrayNumber[i])
    }
}

let totalNumerosPares = numerosPares.length
let totalNumerosImpares = numerosImpares.length

console.log(`En el array hay ${totalNumerosPares} números pares y ${totalNumerosImpares} números impares`);