const fs = require("fs")

fs.mkdir("myFolder", error => {
    if(error) console.log("No pudo crear la carpeta")
    else console.log("Carpeta creada correctamente")
})

console.log("FIN")