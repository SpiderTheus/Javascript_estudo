const arr = [1,2,3]
const obj = {
    nome: "matheus",
    idade: "19",
    email: "matemora80gmail.com"
}

for(let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}

for(n of arr){
    console.log(n + n)
}