const pessoa = {
    nomes: "maria",
    idade: 18,
    "email": "ela@serve.com"

}

console.log(pessoa)

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}
