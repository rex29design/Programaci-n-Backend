const express = require("express")

const app = express()
//




app.use("/static", express.static(__dirname + "/public")) //Esto es un middleware (el __dirname me lleva a la ruta absoluta de mi archivo) Utilizar __dirname es una buena práctica al usar static.
// Resumen: Para servir archivos estáticos (imágenes, CSS, archivos JS, etc.) usaremos la función express.static middleware
app.get("/", (req, res) => res.send(__dirname)) 







//
app.listen(8080)