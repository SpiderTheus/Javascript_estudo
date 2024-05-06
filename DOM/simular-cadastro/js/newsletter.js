const txxEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")
 
    
function cadastrarEmail(){
    let email = txxEmail.value 
    msgFeedback.innerHTML = `o email ${email} foi cadastrado com sucesso`
}
