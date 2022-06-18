

console.log("Inicio programa") //Primero

// Estas funciones "setTimeout" y "setInterval" son funciones no-bloqueantes
setTimeout(()=> {
    console.log("Tic Toc, se acabó el tiempo") //Tercero
}, 2500)  //2500 son 2.5 segundos

setInterval(() => {
    console.log(new Date().toLocaleTimeString())  //muestra la hora actual cada 2.5 seg
}, 2500)  //Cuarto

console.log("Fin del programa") //Segundo
