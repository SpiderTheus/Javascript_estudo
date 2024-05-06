//Factories







//ES5
function Animal(tipo){
    if (tipo) this.tipo = tipo;
}

let cat = new Animal("mamifero")
let dog = new Animal("mamifero")
let snake = new Animal("reptil")

let fish = new Animal()

Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

//ES6

class AnimalC{
    constructor(tipo){
        this.tipo = tipo
    }

    obterTipo(){
        return this.tipo
    }
}

let animal = new AnimalC("anfibio")


class GatoC extends AnimalC{
    constructor(nome){
        super("mamifero")
        this.nome = nome
        /* this.comer = function(){
            console.log(`${this.nome}, Está comendo.`)
        } */
    }
}

GatoC.prototype.comer = function(){
    console.log(`${this.nome}, Está comendo.`)
}

let mimgal = new GatoC("mingal")


console.log(mimgal)
/* 
console.log(animal)
console.log(cat) */

console.log(typeof Animal)
console.log(typeof AnimalC)
console.log(animal.obterTipo())
console.log(cat.obterTipo())
console.log(dog)