// Cómo declarar una función//

function sumar(a, b) {
    return a + b 
}

const resultado = sumar(3, 5)

console.log(resultado) //Para invocar//

console.log( sumar("Arturo", " Verbel")) //Estos son strings//

/// Otros tipos de funciones ///

//Funciones anonimas//

const mostrar = function(nombre) {    //Recuerda "const" es una variable//
    console.log("Mostrando a ", nombre)
}

mostrar("Natalia Moreno")

// Funciones "Arrow"//

const mostrar2 = (nombre) => {
    console.log(nombre)
}

mostrar2("Romina, you rock")

//Simple arrow functions//

const mostrarSimple = nombre => console.log(nombre, "!!")

mostrarSimple("Buenas noches Franco")

// Return implicito//

const promedio = (a, b) => (a + b) / 2  // Se quitan llaves y el "return"//

console.log(promedio(5, 10))

const promedio2 = (a, b) => {  //Aquí no viene el return implicito, sino manual//
    return a + b
}

console.log(promedio2(3, 6))