(function(){
    const divScrol = document.querySelector(".hero")
    const dataParalax = [...document.querySelectorAll("[data-paralax]")    
]
    window.addEventListener("scroll", possitionImage)

    function isGettingOut(container){
        return container.getBoundingClientRect().top <= 0
    }

    function newPosstion(c) {
        const v = parseFloat(c.getAttribute("data-p-velocity")) || .5
        return c.getBoundingClientRect().top * v * -1
    }


    function possitionImage(){
        dataParalax.forEach( c => {
            let originalY = getComputedStyle(c).backgroundPositionY
            let originalX = getComputedStyle(c).backgroundPositionX

            console.log(originalX, originalY)

            if(isGettingOut(c)){
                c.style.backgroundPosition = ` ${originalX} ${newPosstion(c)}px`
            } else {
                c.style.backgroundPosition = ` ${originalX} 0px`
            }
        })
    }

    possitionImage()
})()    