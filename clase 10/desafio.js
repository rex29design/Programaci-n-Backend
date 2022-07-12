const express = require("express")

const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const persona = []

app.get("/", (res, res) => {
    res.render("desafio/index", { personas })
})