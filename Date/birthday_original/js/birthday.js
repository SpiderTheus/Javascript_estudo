function quantoFaltaPara(m, d) {
    const dataHoje = new Date()
    dataHoje.setHours(0)
    dataHoje.setMinutes(0)
    dataHoje.setMilliseconds(0)

    let anoAtual = dataHoje.getFullYear()

    let dataNiver = new Date(anoAtual, m - 1, d)

    let dataAtualTS = +dataHoje
    let dataNiverTS = +dataNiver

    if(dataAtualTS > dataNiverTS){
        dataNiver.setFullYear(++anoAtual)
        dataNiverTS = +dataNiver
    }

    const ONE_DAY = 24 * 60 * 60 * 1000
    const diferenca = dataNiverTS - dataAtualTS

    return parseInt(diferenca / ONE_DAY)




}

