const express = require("express")

const app = express()
const mensajes = [
    {id: 1, emisor: "r2", body: "Esto es un mensaje"},
    {id: 2, emisor: "Diego", body: "Esto es otro mensaje"}
]

//API REST: Para consultas
app.get("/api/mensajes", (req, res) => {  // Se trabaja todo en un solo endpoint 1. el de mandar un mensaje (if) y el 2. mandar todos los mensajes (else)
    
    if( Object.entries(req.query).length > 0) {  //Se manda un parámetro
        console.log(req.query.emisor);
        const mensaje = mensajes.find(m => m.id == req.query.id)
        res.json(mensaje) // si son dos querys es: /mensajes?id:2&emisor:Diego
    } else {
        res.json(mensajes)
    }

})

app.post("/api/mensajes", (req, res) => {
    console.log("POST recibido")

    res.json("[POST] recibido")
})



app.listen(8080)