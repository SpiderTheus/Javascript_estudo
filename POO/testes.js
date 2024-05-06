class Carro {
    constructor(cor, marca, nome){
        this.cor = cor
        this.marca = marca
        this.nome = nome
    }

    imprimirDados(){
        console.log("Zero Km")
        console.log(this.marca, this.nome, this.cor)
    }
}

let gol = new Carro("branca", "VW", "Gol")
gol.imprimirDados()
//console.log(gol)
