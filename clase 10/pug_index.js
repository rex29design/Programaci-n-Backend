const express = require("express")

const app = express()

app.get("/test", (req, res) => res.send("OK"))




app.listen(8080)