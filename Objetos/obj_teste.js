

const dataI = new Date();
const dia = dataI.getDate();

const obj_aluno = new Object();
obj_aluno.nome = "Matheus";
obj_aluno["idade"] = 28;
obj_aluno.data = dia;
obj_aluno.updateData = dataI;

function mudarNome(nome){
    this.nome = nome;
    this.updateData = new Date();
}

obj_aluno.mudarNome = mudarNome;

obj_aluno.mudarNome("David");

console.log(obj_aluno);