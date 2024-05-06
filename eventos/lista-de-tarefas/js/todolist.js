;(function(){
    "use strict"

    
    //amazenar o DOM em variaveis
    
    const nameTarefa = document.getElementById("item-input");
    const todoForm = document.getElementById("todo-add");
    const listaUl = document.getElementById("todo-list");
    const listaLi = listaUl.getElementsByTagName("li");

    //Estruta de dados

    let arrTask = getSavedData()
    /* [
        {
            name: "exemple",
            createAd: Date.now(),
            complet: false
        }
    ] */



 /*    function addEventLi(li){
        li.addEventListener("click", function(e){
            console.log(this)
        })
    }     */

    function getSavedData(){
        let taskData = localStorage.getItem("tasks")
        taskData = JSON.parse(taskData)
       
        return taskData && taskData.length ? taskData : [
            {
                name: "exemple",
                createAd: Date.now(),
                complet: false
            }
        ] 
    }

    function setNewData(){
        localStorage.setItem("tasks", JSON.stringify(arrTask))
    }

    setNewData()



    function gerarTask(obj){

        const li = document.createElement("li")
        const p = document.createElement("p")
        const btnCheck = document.createElement("button")
        const btnEdit = document.createElement("i")
        const btnDel = document.createElement("i")

        li.className = "todo-item"
        
        btnCheck.className = "button-check"
        btnCheck.innerHTML = 
        `<i class='fas fa-check ${obj.complet ? "" : "displayNone"}' data-action='check'></i>`
        btnCheck.setAttribute("data-action", "check")


        li.appendChild(btnCheck)



        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        btnEdit.className = "fas fa-edit"
        li.appendChild(btnEdit)
        btnEdit.setAttribute("data-action", "edit")

        const containerEdit = document.createElement("div")

        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"
        inputEdit.value = obj.name

        containerEdit.appendChild(inputEdit)
        const editButton = document.createElement("button")
        editButton.className = "editButton"
        editButton.textContent = "Editar"
        editButton.setAttribute("data-action", "editDiv")
        containerEdit.appendChild(editButton)
        const cancelButton = document.createElement("button")
        cancelButton.className = "cancelButton"
        cancelButton.textContent = "Cancelar"
        cancelButton.setAttribute("data-action", "cancel")
        containerEdit.appendChild(cancelButton)


        li.appendChild(containerEdit)



        btnDel.className = "fas fa-trash-alt"
        li.appendChild(btnDel)
        btnDel.setAttribute("data-action", "del")


        //(li)
        return li
    }

    function renderLi(){
        listaUl.innerHTML = ""
        arrTask.forEach(task => {
            listaUl.appendChild(gerarTask(task))
        });
    }

    function addTask(task){

        arrTask.push({
            name: task,
            createAd: Date.now(),
            complet: false
        })
        setNewData()
    }

    function clickedUl(e){
        const dataActions = e.target.getAttribute("data-action")

        
        if(!dataActions) return

        let currentLi = e.target
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement
        }
        

        const currentLiIndex = [...listaLi].indexOf(currentLi)
        


        const actions = {
            edit: function(){

                const editContainer = currentLi.querySelector(".editContainer");
    
                [...listaUl.querySelectorAll(".editContainer")].forEach( container => {
                    container.removeAttribute("style")
                });

                
                editContainer.style.display = 'flex';
                
            
            }, 
            del: function(){
                arrTask.splice(currentLi, 1)
                
                renderLi()
                setNewData()
            },
            editDiv: function(){
                const valI = currentLi.querySelector(".editInput").value
                arrTask[currentLiIndex].name = valI
                renderLi();
                setNewData()
            },
            cancel: function(){
                currentLi.querySelector(".editContainer").removeAttribute("style")

                currentLi.querySelector(".editInput").value = arrTask[currentLiIndex].name
            },
            check: function(){
                arrTask[currentLiIndex].complet = !arrTask[currentLiIndex].complet

                if(arrTask[currentLiIndex].complet){
                    currentLi.querySelector(".fa-check").classList.remove("displayNone")
                } else {
                    currentLi.querySelector(".fa-check").classList.add("displayNone")
                }
                setNewData()

            }
        }

        
        if(actions[dataActions]){
           actions[dataActions]()
        }


    }

   todoForm.addEventListener("submit", function(e){
        e.preventDefault()    

        
      /*   listaUl.innerHTML += `
        <li class="todo-item">
           <p class="task-name">${nameTarefa.value}</p>
       >
       </li>
        ` */
        addTask(nameTarefa.value)
        renderLi();
        nameTarefa.value = ""
        todoForm.focus()
    
    });

    


    listaUl.addEventListener("click", clickedUl)



    renderLi();

})()
