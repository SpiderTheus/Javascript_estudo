(function () {
    const nameUser =  null
    
    if(nameUser) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p> Olá, <em>${nameUser}</em> </p>`


       // elementoPai.insertBefore(novoElemento, elementoReferecia)
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)

        


    }
})()