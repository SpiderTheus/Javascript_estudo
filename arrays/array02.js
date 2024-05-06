let arr = [4, 6, 7, 23, 62, 10, 6]
console.log(arr.lastIndexOf(8) > -1)

console.log(arr.includes(8))
console.log(arr.find( function(el){
    return el > 100
}))
console.log(arr.findIndex(function(el){
    return el > 100
}))