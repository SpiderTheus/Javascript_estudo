// replace(), replaceAll(), indexOf(), lastIndex(), includes()
//. slice(), substring()
// toLowerCase() e toUpperCase()
// valueOf()
//  trim()*
// padStart(), padEnd()
// startsWith() endsWith()
// charAt()
// split()

let str = "Testeeee De Pokemon"

console.log(str.replace(/e/g, "u")) // mesma coisa do replaceAll porem mais compativel
console.log(str)

console.log(str.indexOf("e") >= 0) // lastIdexOF é a ultima incidencia e quando não tiver retorna -1, includes é o mesmo que fazer >= 0
console.log(str.slice(-5)) //aceita valores negativos
console.log(str.substring(5, 2)) // consegue inverter o maior

console.log(str.toLowerCase())
console.log(str.toUpperCase())


let strObj = new String("Minha string")
console.log(strObj)
console.log(strObj.valueOf())
console.log(strObj.toString()) // Esse é bem mais usado, o valuoOf é usado internamente


str = "  " + str + "    "
// trim tira os espaços em branco da string
console.log(str.trim()) 
console.log(str.trimStart())
console.log(str.trimEnd())

str = "0123456789"
console.log(str.padStart(10, "*"))
console.log(str.padEnd(20, "*"))

let telefone = "98847-0787"
function mascararNumero(n){
    let numberInicial = telefone.slice(0, hifemPosi)
    let hifemPosi = telefone.indexOf("-")
    let numberFinal = telefone.slice(hifemPosi + 1)
    let doisUltimos = numberFinal.slice(-2)

    return `${numberInicial[0].padEnd(numberInicial.length, "*")}-${doisUltimos.padStart(numberFinal.length, "*")}`

}

console.log(mascararNumero(telefone))


let st2 = "Hoje é domingo"

console.log(st2.startsWith("Hoje", 0)) // Verifica se a string começa com o parametro