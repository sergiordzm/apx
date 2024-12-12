let test = [2, 8, 10, 12, 18, 3, 5]

function genArray () {
    let arrayTWO = []
    for(let i = 0; i < 40; i++ ){
        let random = (Math.random() * 100) + 1
        let randomFloor = Math.floor(random)
        arrayTWO.push(randomFloor)
    }
    return arrayTWO
} 


function ordernarElArray(array){
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
        // En cada iteración, la burbuja más grande llega al final
        for (let j = 0; j < n - i - 1; j++) {
            // Comparar elementos adyacentes
            if (array[j] > array[j + 1]) {
                // Intercambiar si están en el orden incorrecto
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
  }
  
  function main(){
    let final = ordernarElArray(genArray())
    console.log(final);
  }

main()

  // creá tu array de 40 números aleatorios
  // usá función ordenarElArray para ordenar tu nuevo array