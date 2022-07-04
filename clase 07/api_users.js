const express = require("express")

const app = express()
const users = []  // Lista de usuarios

app.get("/api/usuarios", (req, res) => {
    console.log("request recibido");

    res.json(users) //retorna la lista
})

app.get("/api/usuarios/new", (req, res) => {
    const name = req.query.name
    users.push({name}) //es un objeto que se va a agregar

    res.send("User added") // se agrega nuevo usuario desde api/usuarios/new?name=
})




app.listen(8080)