const express = require("express")

const app = express()  // Esto nos devuelve un servidor
const PORT = 8080

app.get("/", (request, response)=> {  //Request es lo que viene de afuera, lo que manda el usuario.

    response.send({mensaje: "Saludos a mi amigo Martin"}) //Esto se manda en formato JSON por las {llaves:}

}) // el "/" o path es la ruta raiz de nuestro servidor. // El metodo get es muy popular.

app.get("/tutores", (request, response) => {
    response.send({mensaje: "Saludos a todos los tutores de la clase"})
})


const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on("error", e => console.log("Error on server", e))
