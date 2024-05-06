function formartarNome(nome){
    nome = nome.trim()
    const posiNome = nome.indexOf(" ")

   if(posiNome === -1){
        return nome

   } else {
        const primeiroNome = nome.slice(0, posiNome)
        const sobrenomes = nome.slice(posiNome + 1)

        const formatacao = `${sobrenomes}, ${primeiroNome}`

        return formatacao
   }

}

console.log(formartarNome("   Matheus Moraes Dias"))


//.split
function formartarNomeSplit(nome){
    nome = nome.trim()
    const arrayNome = nome.split(" ")
    if(arrayNome.lenght === 1){
        return nome
    }

    const primeiroNome = arrayNome.shift()
    
    return arrayNome.join(" ") + ", " + primeiroNome
}

console.log(formartarNomeSplit("Matheus Moraes Dias"))