// Esta sentencia evalúa una condición y, mientras esta sea verdadera, ejecuta las líneas de código entre llaves ({}). Como tiene la capacidad de repetir x veces el código, se trata de un ciclo o un bucle.
// La esencia de esta sentencia podría definirse como: “mientras se cumpla esta condición, hacé esto”. 

// while(condicion){
//     // codigo a ejecutar
//   }

//   Cuando declaramos una sentencia while, tenemos que indicarle entre los paréntesis () cuál es la condición que tiene que evaluar. Si la condición es verdadera, las líneas de código escritas entre las llaves se ejecutarán, mientras la condición se mantenga true. Si la condición es falsa, el código entre las llaves nunca se ejecutará.

let counter = 0;

while(counter <= 50){
    console.log(counter);
    counter ++
    if(counter>50){
        console.log('Aquí termina la iteración');
    }
 
}

// Exercise