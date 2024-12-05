

function transformarFrase(frase) {
    // 
    const fraseMayuscula = frase.map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    });
    const oracion = fraseMayuscula.join(" ")
    return oracion
  }
  

function main() {
    const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
    const oracionMayuscula = transformarFrase(frase);
    console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
  }
  
  main();

//  Challenge 2

// Crea una función que reciba un array de palabras y devuelva 
// cuántas vocales tiene cada palabra
const palabras = ["hola", "mundo", "javascript"];
// Resultado esperado: [2, 2, 3]


const funVowels = (arr) => {
  const contadorVowel = arr.map((vocal) =>{
    return vocal.match(/[aeiou]/gi).length
  }
)
return contadorVowel
}

let result = funVowels(palabras)

console.log(result);

//  Challenge 3

// Crea una función que reciba un array de nombres y los devuelva 
// todos en minúsculas usando map
const nombres = ["JUAN", "ANA", "PEDRO"];
// Resultado esperado: ["juan", "ana", "pedro"]

const wordsToLower = (arrTwo) =>{
  const funToLower = arrTwo.map((word)=>{
    return word.toLowerCase()
  })
  return funToLower
}

let resultTwo = wordsToLower(nombres)

console.log(resultTwo);