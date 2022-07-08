const express = require("express")
const { Router } = express

const routerUser = Router()  //Para exportar Router

routerUser.get("/", (req, res) => res.send("user list"))
routerUser.post("/", (req, res) => res.send("user created")) //Que almacena los users
routerUser.put("/", (req, res) => res.send("user updated"))
routerUser.delete("/", (req, res) => res.send("user deleted")) 

module.exports = routerUser