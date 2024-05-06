let x = [10];

function mudaX(x){
    x.push(11)
    console.log("x interno", x);
}

mudaX(x);
console.log("x externo", x);