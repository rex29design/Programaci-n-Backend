const express = require("express")
const { Router } = express

const routerProducts = Router()  //Para exportar Router

routerProducts.get("/", (req, res) => res.send("products list"))
routerProducts.post("/", (req, res) => res.send("products created")) //Que almacena los users
routerProducts.put("/", (req, res) => res.send("products updated"))
routerProducts.delete("/", (req, res) => res.send("products deleted")) 

module.exports = routerProducts