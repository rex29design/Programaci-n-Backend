
const total = 50
const obj = {}

for (let i = 0; i < total; i++) {   // El ++ suma 1 al número
    const numero = Math.floor(Math.random() * 20 + 1) // El Math.random tira números al azar.
    console.log(numero)
    
    if(numero in obj) obj[numero]++
    else obj[numero] = 1

}

console.log(obj)