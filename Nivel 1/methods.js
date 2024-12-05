// Los métods en JavaScript son funciones que se aplican a un objeto o a un valor primitivo, y permiten realizar operaciones específicas sobre ellos. 
// Los métodos pueden ser llamados directamente sobre el objeto o valor, y se invocan mediante la notación de punto. Por ejemplo, podemos usar el método "toUpperCase()" en un string para convertir todas sus letras en mayúsculas.
// Los métodos de primitivos se utilizan para manipular valores primitivos, como strings, números y booleanos. Estos métodos no cambian el valor original, sino que devuelven un nuevo valor con la modificación realizada.
// Algunos métodos de primitivos incluyen:

// toUpperCase(): Convierte un string a mayúsculas.
// toLowerCase(): Convierte un string a minúsculas.
// toString(): Convierte un valor en su representación como string.
// toFixed(n): Convierte un número en un string con n decimales.
// parseInt(): Convierte un string en un número entero.

// Los arrays en JavaScript tienen una gran cantidad de métodos que permiten manipular su contenido de diversas formas. Estos métodos pueden agregar o eliminar elementos del array, buscar elementos, realizar operaciones sobre ellos y mucho más.

// let miArray = [1, 2, 3];
// miArray.push(4);
// console.log(miArray); // [1, 2, 3, 4]

// let miOtroArray = ["hola", "mundo"];
// let miNuevoArray = miOtroArray.slice(1);
// console.log(miNuevoArray); // ["mundo"]

// let miStringArray = ["hola", "mundo"];
// let miStringUnido = miStringArray.join(" ");
// console.log(miStringUnido); // "hola mundo"

// let miIndice = miArray.indexOf(3);
// console.log(miIndice); // 2




function revisarSiSeIncliuyeLaPalabra(textoUno, palabra){
    return textoUno.includes(palabra)
}

function main(){
    let str = 'Hola, me llamo Sergio'
    let word = 'me'
    let resultado = revisarSiSeIncliuyeLaPalabra(str, word)
    if(resultado){
        console.log(`El texto si incluye la palabra ${word}`)
    } else{
        console.log(`El texto no incluye la palabra ${word}`)
    }
}

main()