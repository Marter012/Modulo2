//(1)Crear elementos // creatElement

const lista = document.getElementById("lista")//elemento creado
console.log(lista)

const li = document.createElement("li")// li creado
li.textContent = "Creamos un li desde JS"// texto creado

lista.appendChild(li) // li incorporado al elemento

//(2)JSON - javascript object notation.
//A diferencia de los objetos el JSON agrega comillas en el par propiedad : valor

//JSON.parse() = convierte un string a un objeto

//JSON.stringify = convierte un objeto a un string

//(3)Objeto Storange 
// local storage guarda datos proporcionados por el usuario en su propio ordenador, no desaparece al recargar.
// sessions storage guarda datos proporcionados por el usuario solo en esa sesion, al recargar desaparece.





//EJERCICIO TODO LIST

const input = document.querySelector(`.input-text`)
const addform = document.querySelector(`.add-form`)
const taskslist = document.querySelector(`.tasks-list`)
const deletebnt = document.querySelector(`.deeleteAll-btn`)


// Definiendo tareas
let tareas = JSON.parse(localStorage.getItem(`tareas`)) || []; 

//Creamos la funcion para guardar las tareas en el localStorage
const saveLocalStorage = taskslist =>{
    localStorage.setItem(`tareas`, JSON.stringify(taskslist))
}

//Funcion para html a crear
const creatTask = tareas => 
    `<li>${tareas.name}<img src="./png1.png" class="btn-delete" data-id=${tareas.tareasId} /></li>`

//Creemos la logica de renderizacion de la lisa de tareas.
const renderTaskList = todolist =>{
    taskslist.innerHTML = todolist.map(tareas => creatTask(tareas)).join(``)
}
//creamos la logica para esconder el boton de borrado.
const mostrarbtnborrar = tareas => {
    if(!tareas.length){
        deletebnt.classList.add(`ocultar`)
        return
    }
    deletebnt.classList.remove(`ocultar`)


}
//Funciona para agregar tareas
const addtask = (e) =>{
    //evitamos la recarga
    e.preventDefault() 
    //guardar en una variable el valor 
    const taskname = input.value.trim()
    // console.log(taskname)
    if(!taskname.length){
        alert(`Por favor, ingresa una taea.`)
        return // corta la ejecucion
    }else if(tareas.some(tarea => tarea.name.toLowerCase() === taskname.toLowerCase())){
        alert(`Ya existe una tarea con ese nombre`)
        return
    }


    tareas = [... tareas, {name: taskname, tareasId : tareas.length+1}]
    input.value = ""    
    renderTaskList(tareas)
    saveLocalStorage(tareas)
    mostrarbtnborrar(tareas)
}
//Creamos la funcion para borrar una tarea

const removeTask = e => {
    if(!e.target.classList.contains(`btn-delete`))return //consultamos si el evento contenia la clase "btn-delete"
    const filterId = Number(e.target.dataset.id) // creamos una variable para almacenar los ID y transformamos el valor a Number
    tareas = tareas.filter(tarea => tarea.tareasId !== filterId) //filttramos la lista de tareas, pero sin el elemento de el ID anterior.
    renderTaskList(tareas) //Actualizamos las funciones.
    saveLocalStorage(tareas)
    mostrarbtnborrar(tareas)
}
const removeAll = () => {
    tareas = [];
    renderTaskList(tareas)
    saveLocalStorage(tareas)
    mostrarbtnborrar(tareas)
}
//Creamos la funcion init para poenr en un solo
//lugar las tareas realizar y los eventos del DOM.
const init = () => {
    mostrarbtnborrar(tareas)
    renderTaskList(tareas) // nos permite mostrar los archivos guarados en el localStorage.
    addform.addEventListener(`submit`, addtask) // boton para agregar tarea
    deletebnt.addEventListener(`click`,removeAll) // boton para borrar todas las tareas
    taskslist.addEventListener(`click`,removeTask) //boton para remover una tarea
};

init()
