const express = require("express")

const app = express()

// MIDDLEWARE A NIVEL DE APLICACIÓN //

app.use( (req, res, next) => {  //Middleware (primero se ejecuta este y luego pasa a ruta #1 o ruta #2 de acuerdo a la ruta elegida)
    console.log("Time: ", new Date().toLocaleTimeString());
    next()
} )

app.use((req, res, next) => {
    console.log(req.headers);
    if ("admin" in req.headers) {
        next()
    } else {
        res.status(400)
        res.send("Debe ser admin")
    }
})

app.get("/", (req, res) => {  //Ruta #1
    console.log("Entró a /");
    res.send("OK")
})

app.get("/ok", (req, res) => {  //Ruta #2
    console.log("Entró a /ok");
    res.send("OK OK")
})




//
app.listen(8080)