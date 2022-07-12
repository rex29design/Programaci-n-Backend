const express = require("express")
const { engine } = require("express-handlebars") //Importamos la Librería handlebars

const app = express()

const fakeApi = () => [
    {name: "Beers", price: 120},
    {name: "Rum", price: 80},
    {name: "Fernet", price: 115},
    {name: "Whisky", price: 150}
]

// Configuración de Handlebars //

app.engine("hbs", engine ({
    extname: ".hbs",
    defaultLayout: "index.hbs"
}))

app.set("view engine", "hbs")
app.set("views", "./views")

//---//

app.get("/", (req, res) => {
    res.render("main", {  //A continuación son datos inventados para el Render, listExists es inventado.
        products: fakeApi(),
        listExists: true
    })
})




app.listen(8080)