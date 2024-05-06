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

