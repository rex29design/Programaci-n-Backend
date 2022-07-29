import * as operaciones from "./lib/operaciones"

const mensaje:string = "Saludos a Martin De Souza"
console.log(mensaje)

let num1:number = 10
let num2:number = 4

console.log(`La suma de ${num1} y ${num2} es ${operaciones.sumar(num1, num2)}`);
console.log(`La resta de ${num1} y ${num2} es ${operaciones.resta(num1, num2)}`);
console.log(`La multiplicación de ${num1} y ${num2} es ${operaciones.mult(num1, num2)}`);
console.log(`La división de ${num1} y ${num2} es ${operaciones.div(num1, num2)}`);
