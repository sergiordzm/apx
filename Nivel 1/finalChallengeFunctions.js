function filtrarNumeros (objeto){
    let arrayFinal = []
    for(let indice of objeto){
        if(indice.unNumero % 2 == 0){
            arrayFinal.push(indice)
        }
    }
    console.log(arrayFinal);
 }


function main(){
        let arrayTest = [
            {
                texto: "hola",
                unNumero: 4
            },
            {
                texto: "buenos días",
                unNumero: 15
            },
            {
                texto: "que tal",
                unNumero: 27
            },
            {
                texto: "adiós",
                unNumero: 8
            },
            {
                texto: "hasta luego",
                unNumero: 42
            },
            {
                texto: "bienvenido",
                unNumero: 31
            },
            {
                texto: "gracias",
                unNumero: 16
            },
            {
                texto: "por favor",
                unNumero: 23
            },
            {
                texto: "disculpe",
                unNumero: 11
            },
            {
                texto: "perdón",
                unNumero: 37
            },
            {
                texto: "excelente",
                unNumero: 50
            },
            {
                texto: "genial",
                unNumero: 19
            },
            {
                texto: "fantástico",
                unNumero: 45
            },
            {
                texto: "increíble",
                unNumero: 33
            },
            {
                texto: "maravilloso",
                unNumero: 28
            },
            {
                texto: "estupendo",
                unNumero: 12
            },
            {
                texto: "fenomenal",
                unNumero: 39
            },
            {
                texto: "magnífico",
                unNumero: 21
            },
            {
                texto: "espectacular",
                unNumero: 47
            },
            {
                texto: "impresionante",
                unNumero: 35
            }
        
    ]

    
    return filtrarNumeros(arrayTest)
}

main()
