function escribirYRegistrar(texto, callback) {
    
    console.log("Escribiendo en el archivo...")
    console.log(texto)
    console.log("Termino de escribir :D")

    callback("Archivo escrito con éxito")
    
}

const callback = (mensaje) => {
    const fecha = new Date().toLocaleTimeString()
    console.log(`[${fecha}] ${mensaje}`)
}

escribirYRegistrar("Saludos para Ignacio Rolf", callback)

/////////otra forma con el mismo resultado://///

//  function escribirYRegistrar(texto, callback) {
    
//    console.log("Escribiendo en el archivo...")
//    console.log(texto)
//    console.log("Termino de escribir :D")

//    callback("Archivo escrito con éxito")
    
//}

//  escribirYRegistrar("Saludos para Ignacio Rolf", (mensaje) => {
//    const fecha = new Date().toLocaleTimeString()
//    console.log(`[${fecha}] ${mensaje}`)
//  }

