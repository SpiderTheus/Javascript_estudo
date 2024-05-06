const output = document.getElementById("output")
let pessoas = [{}]
let x = 0
function cadastrarPessoas() {
    let name = prompt("Qual o nome da pessoa?")
    let number = parseInt(prompt("Qual é a idade?"))

    const form = {
    nome: name,
    idade: number,
    nasceu: (2022 - number)
}
    pessoas.unshift(form)
    x = 1
}

function mostrarPessoas() {
    let text = ""
    if(x != 0){
        for(let i = 0; i < pessoas.length - 1 ;i++){
            text += `${pessoas[i].nome} nasceu em ${pessoas[i].nasceu} ;)<br>`
           
        }
    } else {
        text = "Você não casdastrou nenhuma pessoa ;("
    }
        output.innerHTML = text
}

function limparPessoas() {
    output.innerHTML = ""
    pessoas = [{}]
    x = 0
}