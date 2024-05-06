


function some(){
    const somar = Array.from(arguments)
    return somar.reduce( function(ac, at){
        return ac + at
    }, 0)
    
}

let soma2 = some(1, 2, 3)
console.log(soma2)

function avarege(){
    return some(...arguments) / arguments.length
}

let media = avarege(4, 5, 6, 10)
console.log(media)