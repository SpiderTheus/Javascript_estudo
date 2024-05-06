let numero = 1234567.890

console.log(numero.toFixed(4)) //aumenta as casas flutuantes

console.log(numero.toPrecision(7)) //aumenta os numero inteiro

// tudo vira string 
numero = 12

console.log(numero.toString(16)) // tranforma em string, o parametro são as casas, binario decimal e hexadecimal

numero = 1234567

console.log(numero.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))

let numeroString = "a12345"

console.log(isNaN(numeroString)) //verifica se dá pra tranformar a stting em número
