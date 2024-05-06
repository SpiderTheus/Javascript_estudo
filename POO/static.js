//ES5
function Animal(){

}

Animal.prototype.wohAmI = function(){
    return this
}

Animal.categoria = "ser vivo"

const dog = new Animal()

//ES6
class Cachorro {
    constructor(nome){
        this.nome = nome
        console.log("chamando metodo de estastico dentro do constructo")
        Cachorro.beber()
    }

    static comer(){
        console.log(this)
        console.log("comendo")
        this.beber()
    }

    static beber(){
        console.log("bebendo")
    }
}

const dog2 = new Cachorro("bob")