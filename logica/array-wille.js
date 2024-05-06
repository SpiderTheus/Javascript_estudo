function generateRandomInteger(max) {
    return parseInt(Math.random() * max)
}

let arr = []
let i = 0
while(arr.length <= 20){
   let randomNuber = generateRandomInteger(30)
   
    if(arr.indexOf(randomNuber) < 0){
        arr.push(randomNuber)
    } 
    
    i++
}

console.log(arr)
console.log(`O loop foi exucutado ${i} vezes`)