function sum(){
  const somar = []
    /* for(let i = 0; i < arguments.length; i++){
        somar.push(arguments[i])
    }
    console.log(somar)  
 */    
    Array.prototype.forEach.call(arguments, function(arguments){
        somar.push(arguments)
    })
    return somar.reduce( function(ac, at){
        return ac + at
    }, 0)

    console.log(somar)
}
console.log(sum(1 , 2, 3, 4, 5))


//sum.call(null, 1, 2, 3, 4, 5)

function avarege(){
    const soma = sum.apply(null, arguments)
    return soma / arguments.length
}

console.log(avarege(1, 2, 3, 4, 6))

