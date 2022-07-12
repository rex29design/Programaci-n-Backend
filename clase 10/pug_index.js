const express = require("express")
const { render } = require("pug")

const app = express()

app.set("views", "./views")
app.set("view engine", "pug") //Definimos cúal va a ser nuestro motor de plantilla, en este caso Pug

app.get("/", (req, res) => {
    res.render("hello.pug", {msn: "Saludos a todos"})
})
app.get("/test", (req, res) => res.send("OK"))

app.get("/datos", (req, res) => {
    res.render("datos.pug", {
        title: req.query.title,
        min: req.query.min,
        max: req.query.max,
        level: req.query.level
    })
})
//http://127.0.0.1:8080/datos?title=<b>Regina%20de%20la%20Cruz</b>&min=10&max=20&level=18


app.listen(8080)