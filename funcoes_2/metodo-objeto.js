const dog = {
    name: 'rex',
    raca: 'pit-bull',
    fala() {
        console.log(this.name, "fala au au au")
    }
}
// FUNÇOES EM OBJETOS SÃO *METODOS*

function miar (){
    console.log(this.name, "fala miau miau miau")
}


const cat = {
    name: "Teddy",
    fala() {
        console.log(this)
        miar.call(this)
    }
}
dog.fala()
cat.fala()