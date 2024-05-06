var name = "matheus"

function teste(str, n) {
    console.log(this.name)
    console.log(str, n)
}

teste.call({name: "julie"}, "idade:", 19)
teste.apply({name: "matheus"}, ["moraes dias", 20])
teste.call({name: "matheus"}, ...["moraes dias", 20])

const teste2 = teste.bind({name: "jennifer"})

teste2("dos santos", 19)