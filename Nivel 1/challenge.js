// Array de 87 numeros random (entre 10 y 90) en un array 
// Usar for para contar cuantos numeros pares numeros impares 

// Challenge 1

let arrayNumber = []

let numerosPares = []
let numerosImpares = []

// while(arrayNumber.length < 87)
// {
//     let randomNumber = Math.random()*100
//     arrayNumber.push(Math.floor(randomNumber))
// }

// for(i = 0; i < arrayNumber.length; i++){
    
//     if(arrayNumber[i]% 2 == 0){
//         numerosPares.push(arrayNumber[i])
//     }
//     else{
//         numerosImpares.push(arrayNumber[i])
//     }
// }

// for(i = 0; i < arrayNumber.length; i++){arrayNumber[i]%2 == 0 ? numerosPares.push(arrayNumber[i]) : numerosImpares.push(arrayNumber[i])  }

// let totalNumerosPares = numerosPares.length
// let totalNumerosImpares = numerosImpares.length

// console.log(`En el array hay ${totalNumerosPares} números pares y ${totalNumerosImpares} números impares`);

// Challenge 2

let newArray = [
    [3, 567, 23],
    [23, 54, 23],
    [27, 457, 67],
    [34, 675, 12],
  ];

//   let sumaArray = []

//   for(let i = 0; i < newArray.length; i++){
//     let suma = newArray[i][0] + newArray[i][1] + newArray[i][2]
//     sumaArray.push(suma)
//   }

//   console.log(sumaArray);

// // Challenge 2 option two

//   let sumaOtherLoop = []

//     for(let numero of newArray){
//         let suma = numero[0] + numero[1] + numero[2]
//         sumaOtherLoop.push(suma)
//     }
  
//     console.log(sumaOtherLoop); 

// Challenge 2 option three

let arraySumas = []

for(let indices in newArray){
    let arrayTest = newArray[indices]
    let sumatorio=0;
    for(let num of arrayTest){
        sumatorio += num
       arraySumas[indices] = sumatorio
    }
}

console.log(arraySumas);

let arraySumasTwo = []

for(let x of newArray){
    let arrayTestTwo = x
    let sumando = 0
    for(let y of arrayTestTwo ){
        sumando += y
        arraySumasTwo[x] = sumando
    }
}

console.log(arraySumasTwo);