(function () {
    const nameUser = null
    const elemento = document.querySelector(".top-bar p")
    if (nameUser){
        //document.querySelector(".top-bar p").textContent = `Bem-vindo(a), ${nameUser}`
        //elemento.textContent = elemento.textContent + nameUser
        elemento.innerHTML += `<em> ${nameUser} </em>`
    } else {
        //elemento.parentElement.style.display = "none"
        //elemento.parentElement.remove()
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }

    console.log(elemento)

})()