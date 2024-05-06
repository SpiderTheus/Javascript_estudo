
(function(){
    function calcularImc(){
        let _imc = 0
        if(arguments.length !== 0){
            
            for(i = 0; i > arguments.length; i++){
                if(typeof arguments[i] !== "number"){
                    throw Error("só números")
                } else if (arguments.length > 2){
                    throw Error("Só dois parâmetros")
                } else {
                    _imc = arguments[0] / (arguments[1] * 2)
                }         
            }
        return _imc
        } else {
            throw Error("sem parametros")
        }
    }
    let imc = calcularImc(68, 1.86)
    console.log(imc)

    




})()