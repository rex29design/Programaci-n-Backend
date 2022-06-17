// Callbacks: Es una función que se envía como argumento a otra función.//

const ejecutar = unaFuncion => unaFuncion()

const saludar = () => console.log("Saludos a toda la clase!")

ejecutar( saludar )

//Otro ejemplo//

const ejecutar2 = (estoEsUnaFuncionCualquiera, nombre2) => {  //Aquí "ejecutar2" es la función que hará que "saludar2" se ejecute al final//
    estoEsUnaFuncionCualquiera(nombre2)  //El argumento "nombre2" es lo que al momento de ejecutar "ejecutar2" se agrega a "saludar2"
}
const saludar2 = (nombre) => { //Este es el callback//
    console.log(`Saludos para mi amigo ${nombre}`)
}

ejecutar2( saludar2, "Sebastian Romero") // "ejecutar2" recibe dos parámetros "función" y el "nombre".//