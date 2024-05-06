const arr = new Array()
const arr2 = new Array(true, "Matheus", 28, new Array(1, 3, 150))
const arr3 = ["Matheus", 40, [23, 8, 9], true]
arr3[4] = "a"
arr3[arr3.length] = "b"
arr3.push("push")
arr3.push("a", "b", "c")

console.log(arr)
console.log(arr2[3][arr2[3].length - 1])
console.log(arr3[2][0])
console.log(arr3)
let n = 6
console.log(arr3[n])

