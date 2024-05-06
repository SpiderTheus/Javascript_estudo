(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText
    
    console.log(dateEventDom)
   
    const dateEvent = getDate(dateEventDom)
    console.log(dateEvent)


    const hoje = new Date() 

    let left = dateEvent.getTime() - hoje.getTime()


    const ONE_MIN = 60 * 1000;
    const ONE_HOUR = 60 * ONE_MIN;
    const ONE_DAY = 24 * ONE_HOUR;

    const diasLefts = parseInt(left / ONE_DAY)
    left = left - diasLefts * ONE_DAY
    console.log(diasLefts)


    const horasLefts = parseInt(left / ONE_HOUR)
    left = left - horasLefts * ONE_HOUR


    const minutosLeft = parseInt(left / ONE_MIN)
    left = left - minutosLeft * ONE_MIN


    const segundosLeft = parseInt(left / 1000)
    addLeftTime(diasLefts, horasLefts, minutosLeft, segundosLeft)

    function addLeftTime(d, h, m, s){
        const p = document.createElement("p")
        p.textContent = `Contagem regressiva ${d} dias, ${h} horas, ${m} minutos, ${s} segundos`

        document.querySelector(".hero-content").appendChild(p)
    }

    function getDate(str){
        const [data, hora] = str.split(" ")
        const [dia, mes, ano] = data.split("/")
        const [h, m] = hora.split("H")

        return new Date(ano, mes - 1, dia, h, m)
    }

})()