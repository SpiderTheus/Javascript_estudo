function Animal(tipo){
    if (tipo) this.tipo = tipo;
}

Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

function Cachorro(nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
    //this.constructor = Cachorro
  
}

Cachorro.prototype = new Animal()
Cachorro.prototype.constructor = Cachorro

let rex = new Cachorro("Rex", "mamifero")
console.log(rex)

for(let prop in rex){
    if(rex.hasOwnProperty(prop)){
    console.log(prop)
}}

console.log(rex instanceof Cachorro)
console.log(Cachorro.prototype.isPrototypeOf(rex))
console.log(Object.getPrototypeOf(rex))