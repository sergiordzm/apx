// Datos primitivos`; Datos más básicos con los que podemos asignar valores. Aun siendo solo 7 los tipos de datos primitivos, en la práctica, los más utilizados suelen ser string, number, boolean, y null. 

//String

let nombre = 'Esto es un string'

let saludo = `Hola ${nombre}`
console.log(saludo)

// Number

let edad = 28

// Boolean

let registrado = true

// Undifined 

let myUndifined

// Null

const myNull = null

// Symbol

const simbolo = Symbol('Tierra')


// BigInt

const numeroMuyGrande = BigInt(54654654646546545)

// Exercise 1

let numberOne = 20
let numberTwo = 25

let resultado = numberOne + numberTwo

const firsName = 'Sergio'
const lastName = 'Rodríguez Morales'
const birthYear = 1996
const currentYear = 2024
let fullName = firsName + " " + lastName
const years = currentYear - birthYear

console.log(fullName);
console.log(years);

let variableSinValor;
const primerTipo = typeof variableSinValor;

const name = 'Sergio'
const ciudad = 'CDMX'

console.log(`Hola ${name}. Cómo va todo en ${ciudad}`)