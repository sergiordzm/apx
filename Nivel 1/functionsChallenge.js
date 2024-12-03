// También se puede asignar como valor de una variable una función

function sumarNumberos(a,b){
    let suma = a + b
    return suma
}

function concat(c,b){
    let fullName = c + b
    return fullName
}

const agregarApelllido = function(objeto, apellido){
    objeto.apellido = apellido
    return objeto
}

let persona = {nombre: 'Sergio'}

function main(){
    let finalAdd = sumarNumberos(5,5)
    let finalName = concat('Sergio', 'RM')
    console.log(finalAdd);
    console.log(finalName);
   
    console.log(agregarApelllido(persona, 'Rodriguez'));
}

main()



