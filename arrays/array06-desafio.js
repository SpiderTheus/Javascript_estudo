const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
const numerosUnicos = numeros.reduce( function(numeroUnicos, numeroAtual){
    if(numeroUnicos.indexOf(numeroAtual) < 0){
        numeroUnicos.push(numeroAtual)
    }
    return numeroUnicos
}, [])

console.log(numerosUnicos)