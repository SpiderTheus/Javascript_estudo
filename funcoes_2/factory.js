function criarCachorro(name){
    let posisao = 0
    return {
        name,
        latir(){
            console.log(this.name, "está latindo")
        },
        andar(distancia){
            posisao += distancia
            console.log(this.name, "andou ", distancia, "m")
        },
        get posicao(){
            console.log(`A possição atual é ${this.name} é ${posisao}`)
            return posisao
        }
    }
}

const rex = criarCachorro("Rex")
rex.andar(30)
rex.andar(15)
console.log("rex.posicao")
console.log(rex.posicao)
console.log(rex)


const toto = criarCachorro("Toto")
toto.andar(20)
toto.andar(-5)
