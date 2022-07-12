const express = require("express")
const fs = require("fs") //Se crea nuestra librería

const app = express()

app.engine("jasmin", function(filePath, data, callback) {
    fs.readFile(filePath, function(err, content) {
        if(err) {
            return callback(new Error(err))
        }

        const rendered = content.toString()
            .replace("#title#", `<h1>${data.title}</h1>`)
            .replace("#message#", `<p>${data.message}</p>`)

        return callback(null, rendered)
    })
})

app.set("views", "./views") //Se define donde está nuestra carpeta donde está la plantilla.
app.set("view engine", "jasmin") //Nuestro motor de plantilla se llama "jasmin"

app.get("/", (req, res) => res.send("OK")) // pruebita, ignorar

app.get("/template", (req, res) => {
    data = {
        title: "Hola Jasmin",
        message: "Saludos desde el template"
    }
    res.render("index", data)
})



app.listen(8080)