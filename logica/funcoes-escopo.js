let n = "global"

function mostraN(){
    let n = "local"
    console.log(n);
}

console.log(n)
mostraN()