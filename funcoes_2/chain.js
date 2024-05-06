const calc = {
    value: 0,
    soma(n){
        this.value += n
        return this
    },
    sbtrai(n){
        this.value -= n
        return this
    },
    log(){
        console.log(this.value)
        return this
    }
}

calc.soma(10).soma(2).sbtrai(6).soma(100).log().soma(20).log()
