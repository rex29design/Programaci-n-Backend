//EJEMPLOS DE COMO SE EXPORTA E IMPORTA

class myClass{}
export default myClass   //para exportar mi clase

import myClass from "./myClass.js"

if( true ) {
    const { default: Clase } = await import("./myClass.js")
    const { f } = await import("./libreria.js")
}