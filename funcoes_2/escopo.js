const str = 'global string'

function teste(str){
    console.log("------ this")
    
    console.log(this)
    console.log(str)

    setTimeout(() => {
        console.log("------")
        console.log(this)

    }, 2000) //estrategia para o this não mudar em uma function express
}

//teste("parametro")

const teste2 = () => {
    console.log("arrow function")
    console.log(this)
}

teste2()

const obj = {
    foo: "bar",
    teste,
    teste2
}



obj.teste()
obj.teste2()