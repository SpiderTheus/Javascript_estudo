function soma(n1, n2){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error("soma aceita somente números")
    }
    
    return n1 + n2
}

