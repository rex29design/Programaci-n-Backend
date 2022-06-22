// Promesas asincrónicas

const fs = require("fs")

//MODO 1
const myPromise = fs.promises.readFile("data.txt", "utf-8")

myPromise.then(contenido => {
    console.log(contenido);
})

myPromise.catch(error => {
    console.log("Hubo error leyendo");
})

// otra manera de leer

//MODO 2
fs.promises.readFile("data.txt", "utf-8")
    .then(c => console.log(c))
    .catch(e => console.log("Hubo un error leyendo"))

// Promesas sincrónicas
//const contenido = await fs.promises.readFile("data.txt", "utf-8")
//console.log(contenido); // si se corre este archivo con la promesa sincrónica va a marcar error

//MODO 3
async function leer() {
    try {
        const contenido = await fs.promises.readFile("data.txt", "utf-8")
        console.log(contenido)
    } catch(err) {
        console.log("Se atrapó el error");
    }

    console.log("Nada se bloqueó");
}

leer()