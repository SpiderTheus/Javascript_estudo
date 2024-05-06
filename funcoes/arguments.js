const somar = function ()  {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total

}

console.log(somar.name)

console.log(somar(1, 2, 3))
console.log(somar(1, 2," 3", 76, 32, 22, 0))
console.log(somar(1, 2, 3, 2, 7, 7, 8, 87))