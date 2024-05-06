function Cachorro(name){
    let posicao = 0

    this.name = name
    
    this.latir = function (){
        console.log(this.name, "está latindo")
    }

    this.andar = function(distancia){
        posicao += distancia
        console.log(this.name, "andou ", distancia, "m")
        console.log("A possicao atual é", posicao)
    }
}

const rex = new Cachorro("rex")
const toto = new Cachorro("toó")

console.log(rex)
rex.latir()
rex.andar(20)
rex.andar(3)
toto.andar(3)


const laica = new Cachorro("laica")

laica.andar(-16)
laica.andar(20)