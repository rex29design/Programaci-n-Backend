const fs = require("fs")

try {
    const data = fs.readFileSync("fyh.txt", "utf-8")
    console.log(data)
} catch(err) {
    console.log("No se encontró el archivo")
}

console.log("FIN") //En programación bloqueante o sincrónica se usa el Try - Catch, en Asincrónico no