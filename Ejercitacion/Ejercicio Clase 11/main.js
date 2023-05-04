const formulario = document.querySelector(".formulario")
const inputCont = document.querySelector(".input-contenedor")
const listaAgregar = document.querySelector(".lista")
const btnEliminar = document.querySelector(".btn-eliminar")

let tareas = JSON.parse(localStorage.getItem(`tareas`)) || [];

const agregarTarea = (e) => {
    e.preventDefault()
    const nombreTarea = inputCont.value.trim()
    if(!nombreTarea.length){
        alert(`Ingrese una tarea`)
        return
    } else if(tareas.some(tarea => tarea.name.toLowerCase() === nombreTarea.toLowerCase())){
        alert(`Ya existe una tarea con ese nombre`)
        return
    }
    tareas = [... tareas, {name: nombreTarea, tareaId : tareas.length+1}]
    inputCont.value = ""
    renderizarlista(tareas)
    guardarlocalStorage(tareas)
}

const init = ( ) => {
    renderizarlista(tareas)
    formulario.addEventListener(`submit`,agregarTarea)
}

init()

function renderizarlista(tareas){
     listaAgregar.innerHTML = tareas.map(tarea => crearlista(tarea)).join(``)
}

function crearlista(tareas){
    return`<li> ${tareas.name} <img data-Id=${tareas.tareasId} /> </li>`
}

function guardarlocalStorage(listatareas){
    localStorage.setItem(`tareas`, JSON.stringify(listatareas))
}
