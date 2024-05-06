const teste = (function(n){
    // e como se let n = 10

    return function testeInterno(){
        console.log("teste interno chamado", ++n)
        return "retorno de testeInterno" + n
    }
})(10)



let str = teste()
console.log(str)