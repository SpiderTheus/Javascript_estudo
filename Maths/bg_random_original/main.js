function mudarBack(){
    let numberRandom = Math.random() * 5
    numberRandom = Math.round(numberRandom).toString()
    const body = document.querySelector("body")

    body.style.backgroundImage = `url(images/${numberRandom}.jpg)`
}

mudarBack()