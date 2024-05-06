// gera objetos
function Aluno(nome){
    "use strict"
    let _nome = nome;

    this.incio = new Date();
    this.updateAt = null;
    this.mudarNome = function(newNome){
        _nome = newNome;
        this.updateAt = new Date();
    }
    this.getName = function(){
        return _nome;
    }
}

const aluno = new Aluno("David França");
aluno.mudarNome("Luciano Vitor");

console.log(aluno.getName());

const aluno2 = new Aluno("Matheus Dias");

aluno.mudarNome("Isabela Brandão");

console.log(aluno);
console.log(aluno.getName());



console.log(aluno2);