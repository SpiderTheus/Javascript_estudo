const obj1 = {
    nome: "Matheus"

}

const obj2 = new Object()
obj2.nome = "maria";
obj2["idade"] = 65;

console.log(obj1);
console.log(obj2);

const str = "minha string";
console.log(str.length);

const str2 = new String("minha string 2")

console.log(str2);
console.log(str2.length);


const data1 = Date();
console.log(data1);
console.log(typeof data1);

const data2 = new Date();
console.log(data2);
console.log(typeof data2);
console.log(data2.getDate());
