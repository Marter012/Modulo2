/* (1)Manipulacion del Dom I


El funcionamiento se basa en asignarle una funcion a un evento.
Puede asignarsele desde JS o buscando al elemento y asignandoselo.
Si se trabaja en HTML se le asigna "on" mientras que en JS no se le asigna.

(2)EVENTOS 

→onblur

→onchange

→onclick

→indlclick

→onfocus

→onkeydown

→onkeypress

→onkeyup

→onload

*/


//(E) Ejemplos con HTML

//(a) AddEventListener desde JS
// 1. LLamar al elemento
// 2. A ese elemento pasarle un escuchador de evento.
const alerth3 = document.getElementById(`alerth3`);
console.log(alerth3)
alerth3.addEventListener(`click`,()=> {alert(`Escuchando un evento desde JS`)})

//(b)Focus / Blur , seleccionar o deseleccionar
const inputblur = document.getElementById(`inputblur`)
console.log(inputblur)

inputblur.addEventListener(`focus`,focusfunction)
inputblur.addEventListener(`blur`,blurfunction)

//Al seleccionar ^focus^ el input cumple una funcion
function focusfunction(){
    inputblur.style.backgroundColor = "yellow"
    console.log(`Hiciste foco en el input`)
}
//Al deseleccionar ^blur^ el input cumple una funcion
function blurfunction(){
    inputblur.style.backgroundColor = ``
    console.log(`Hiciste blur en el input`)
}

//(c)Change, cambia el tipo de valor dentro del input (pasa la info desde el html, a la consola)

const inputchange = document.getElementById(`inputchange`)
inputchange.addEventListener(`change`,alertchange)
function alertchange(){
    alert(`Cambio mi value`)
}

//(d)Mostrar y ocultar img con style

const img = document.getElementById(`img`)
const hide = document.getElementById(`hide`)
const show = document.getElementById(`show`)

//Agregar escuchadores
hide.addEventListener(`click`,() => {
    img.style.display = `none`
})
show.addEventListener(`click`,() => {
    img.style.display = `block`
})

//(d)Mostrar y ocultar img, cambia el tipo de mostrar / ocultar agregando y sobre pisando una clase ya brevemente escrita
const imgtoggle = document.getElementById(`imgtoggle`)
const btntoggle = document.getElementById(`toggle`)

btntoggle.addEventListener(`click`,()=>{
    imgtoggle.classList.toggle(`show`)
})

//(e)Evento keyboard
const keyboard = document.getElementById(`keyboard`)

//si mantengo apretada la tecla se imprime KEYDOWN
// keyboard.addEventListener(`keydown`, (e)=> {
//     console.log(e)
// })
//si mantengo no se imprime, solo imrpime cuando se suelta la tecla KEYUP
// keyboard.addEventListener(`keyup`, (e)=> {
//     console.log(e)
// })
//Nos permite usar codigos de teclas
// keyboard.addEventListener(`keydown`,(e)=>{
//     console.log(e)
//     if (e.keyCode === 68){
//         alert(`No podes usar esa tecla`)
//         e.preventDefault() // permite no escribir la tecla al teclear junto con la alert
//     }
// })

//Contador

const resultado = document.getElementById(`resultado`)
const btnaumentar = document.querySelector(`.btn-aumentar`)
const btndisminuir = document.querySelector(`.btn-disminuir`)
const btnreset = document.querySelector(`.btn-reset`)

let contador = 0;

btnaumentar.addEventListener(`click`,()=>{
    contador++;
    resultado.innerHTML = contador
})
btndisminuir.addEventListener(`click`,()=>{
    contador--;
    resultado.innerHTML = contador
})
btnreset.addEventListener(`click`,()=>{
    contador = 0
    resultado.innerHTML = contador
})