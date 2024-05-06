class Animal{
    constructor(tipo){
        console.log(this.constructor)

        if(this.constructor === Animal){
            throw new Error("Animal é uma classe abstratrata") 
        }


        if(tipo){
            this.tipo = tipo
        }
    }

    comer(){
        throw new Error("metodo `comer()` must be impplement ") 
    }

}

class Gato extends Animal{
    constructor(nome){
        if(nome){
            super("mamifero")
            this.nome = nome
        }
    }

    comer(){
        console.log(`${this.nome}, está comendo.`)
     }
    
}

//const animal = new Animal("Mamifero") // não pode
const mingal = new Gato("mingal");