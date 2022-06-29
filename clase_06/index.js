const http = require("http")   //Modulo HTTP instalado

const server = http.createServer( (peticion, respuesta) => {      //Esta función es la que recibe las peticiones al Servidor, no es la petición.
    console.log("New request", new Date().toLocaleTimeString());
    respuesta.end("Saludos a Ignacio Wolf")
})

const connectedServer = server.listen(8080, () => {  // El () => {} es un callback con (argumentos) 8080 es el puerto del servidor. // Esta función inicia el servidor
    console.log(`Server running...`)  //127.0.0.1:8080 (es nuestro local Host)
})