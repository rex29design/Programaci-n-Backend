const fs = require("fs")

const data = {nombre: "Carlos", apellido: "Henao"}
fs.writeFileSync("data.json", JSON.stringify(data)) //El JSON.stringify convierte el objeto a string

//Para leer el archivo:
const newData = fs.readFileSync("./data.json", "utf-8")
console.log(JSON.parse(newData)) //el JSON.parse convierte un string a objeto nvamente