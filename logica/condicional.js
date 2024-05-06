/* if(){

} if else(){

} else {

}
*/

let diaSemana = 25;
let l = 2

if(diaSemana === 0) {
    console.log("Hoje é domingo");
} else if (diaSemana === 1) {
    console.log("Hoje é segunda");
} else if (diaSemana === 2) {
    console.log("Hoje é terça");
} else if (diaSemana === 3) {
    console.log("Hoje é quarta");
} else if (diaSemana === 4) {
    console.log("Hoje é quinta");
} else if (diaSemana === 5) {
    console.log("Hoje é sexta");
} else {
    console.log("Hoje é sábado");
}
let dia  = ""
switch( diaSemana ) {
    case 0:
        dia = "Domingo"
        break
    case 1: 
        dia = "Segunda"
        break
    case 2:
        dia = "Terça"
        break
    case 3:
        dia = "Quarta"
        break
    case 4:
        dia = "Quinta"
        break
    case 5:
        dia = "Sexta"
        break
    case (20 > 30):
        dia = "Sábado"
        break
    default:
        dia = " -- "
}
console.log(`Hoje é ${dia}`)