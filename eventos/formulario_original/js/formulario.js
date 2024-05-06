(function (){
    "use strict";
    
    const title = document.getElementById("txtTitulo");
    const btnAdcionar = document.getElementById("btn");
    const formCadastro = document.querySelector(".formCadastro")

      /* btnAdcionar.addEventListener("click", (e) => {
        
    }) */
    
    
    formCadastro.addEventListener("submit", function(e) {
        if(!title.value){
            showError("Preencha todos os campos", function (){
                title.focus()
            })
            e.preventDefault()
           
       }
    })


    const feedbackMsg = document.getElementById("feedbackMessage")
    const feedbackMsgClose = feedbackMsg.getElementsByTagName("button")[0]

    function showError(msg, cb){
        //alert(msg)
        feedbackMsg.classList.add("show")
        feedbackMsg.getElementsByTagName("p")[0].textContent = msg

        feedbackMsgClose.focus()

        function hideErrorMensage() {
            feedbackMsg.classList.remove("show")

            feedbackMsgClose.removeEventListener("click", hideErrorMensage)
            feedbackMsgClose.removeEventListener("keyup", pressedBtn)

           if(typeof cb === "function"){
            cb()
            }
        }

        feedbackMsgClose.addEventListener("click", hideErrorMensage)
        
        function pressedBtn(e) {
            if(e.keyCode === 27){
                hideErrorMensage()
            }
        }
     
        feedbackMsgClose.addEventListener("keyup", pressedBtn)
        
    }

   

    btnAdcionar.disabled = true
    
    const checkBox = document.getElementById("chkAceito");

    
    checkBox.addEventListener("change", function (){
       btnAdcionar.disabled = !this.checked
    })
    
                                                                        
   
   
    const descricao = document.getElementById("txtDescricao")
    const contContainer = document.getElementById("contador")
    const resta = contContainer.getElementsByTagName("span")[0]
    const maxima = descricao.maxLength
    mostrarNumero(maxima)

    function checkLegth(){
        let letraDigitada = this.value.length
        let letrasRestante = parseInt(maxima) - parseInt(letraDigitada)

        mostrarNumero(letrasRestante)
    }

    function mostrarNumero(n){
        resta.textContent = n
    }

    descricao.addEventListener("input", checkLegth)

    contContainer.removeAttribute("style") 
    //contContainer.style.display = "block"
   
   
   
})()