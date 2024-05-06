// + - * / %  ** operadores aritimeticos

// = operador de atribuição

// ++ -- operador de incremento e descremento

/*
    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <= , >=
    != valoreres diferentes 
    !== valores e tipos diferentes
*/

// Operedores logicos 
/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
OU 
acompanhado com os pais
E
ter comprado o bilete
*/

let idade =  21;
let paiPresentes = false;
let comprouBilete = false;
const podeViajar = (idade >= 18 || paiPresentes) && comprouBilete;
console.log(`Pode viajar: ${podeViajar}`);