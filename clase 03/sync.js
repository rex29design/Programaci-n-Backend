function funA() {   //primero se imprime funA (1)
    console.log(1)
    funB()   // luego se espera a que el valor de la funB se aplique (3)
    console.log(2)  // Se espera
}

function funB() {  
    console.log(3)
    funC()  // luego pasa a la funC (5) la cual el programa aplica primero antes de console.log(2) y console.log(4)
    console.log(4)
}
function funC() {
    console.log(5)  // Se cumple con el recorrido funA, funB, funC y luego...
}

funA()  //termina de imprimir los console.log pendientes en el orden de la cola...(5) y luego (2) que es el funA 

// ORDEN:
// funA
// funB
// funC
// console.log(5)
// console.log(2)