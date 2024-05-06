function getRandomNumber(inicio, fim, integer) {
    let numeroSo = Math.random() * fim

    while(numeroSo < inicio){
        numeroSo = Math.random() * fim
    }
    
    if(numeroSo > inicio){
        if(integer){
            return Math.round(numeroSo)
        }

        return numeroSo
    }   
  
}   

    



console.log(getRandomNumber(0, 20, true))