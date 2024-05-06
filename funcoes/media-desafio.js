/* (function(pes, alt){
    let imc = 0
    function calcularImc(){
        if(typeof pes === 'string' || typeof alt === 'string'){
            throw Error("only numbers")
        } else if (typeof pes === undefined || alt === undefined){
            throw Error("somente dois parametros")
        } else{
            imc = pes / (alt * alt)
            return imc
        }
    }
    let calcular = calcularImc()
    console.log(calcular)

    
    function dignosticoImc(n){
        let clas = ""
        if(typeof n === 'number'){
            if(n < 16.9){
                clas = "Muito abaixo do peso"
            } else if(n < 18.4){
                clas = "Abaixo do peso"
            } else if(n < 24.9){
                clas = "Peso normal"
            } else if(n < 29.9){
                clas = "Acima do peso"
            } else if(n < 34.9){
                clas = "Obesidade Grau I"
            } else if(n < 40){
                clas = "Obesidade Grau II"
            } else {
                clas = "Obesidade Grau III"
            }         
        } else if (arguments.length === 0){
            throw Error("sem parametros")
        } else {
            throw Error("só numeros")
        }
        return clas
    }
    let parecer = dignosticoImc(imc)
    console.log(parecer)


})(60, 1.63) */

const imc = function (pes, alt, cb) {
    let res = 0
    res = pes / (alt * alt)
    if(typeof cb !== 'function'){
        console.log(res)
    } else if (typeof cb === 'function'){
        cb(res)
    }
    
    
    
}

const clasificar = function (n) {
    let clas = ""
    if(n < 16.9){
        clas = "Muito abaixo do peso"
    } else if(n < 18.4){
        clas = "Abaixo do peso"
    } else if(n < 24.9){
        clas = "Peso normal"
    } else if(n < 29.9){
        clas = "Acima do peso"
    } else if(n < 34.9){
        clas = "Obesidade Grau I"
    } else if(n < 40){
        clas = "Obesidade Grau II"
    } else {
        clas = "Obesidade Grau III"
    }
    console.log(clas)      
}

imc(60, 1.63)