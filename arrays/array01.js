const arr = [1, 5, 10, "ola", true]
// some, precisa de um elemento pra ser true e every precisa que todos elementos seja true pra retornar true

let soNumeros = arr.some( function (el) {
    
    return typeof el === "number" && el > 20
})

let arr1 = arr.filter(function(el, i, _arr) {

    return typeof el === "number"
})


arr.forEach(function(el, i, _arr){
    console.log(i, ": ", el)
})
let arr2 = arr1.map(function(el, i, _arr){
    return el * el
})




console.log(arr)
console.log(arr1)
console.log(arr2)