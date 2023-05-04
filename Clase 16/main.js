/*
CallStack
La pila de llamadas es una estructura dinamica de datos
que almacena informacion sobre las subrutinas de una aplicacion
Funciona segun el principio de LIFO, el ultimo en entrar es el primer en salir.

Memory Heap
Es una estructura desorganizada, donde estamos uardando nuestro valores
de las variables y funciones.

Event Loop
se encargar de consultar el estado de Stack, si este mismo esta vacio
va a proceder a pasar o agendar lo que haya guardado en el
Task Queue para que empiece a ejecutarse.


*/

const buttunSubmit = document.getElementById(`submit`)
const allsNames = document.getElementById(`allsNames`)

//Crear array

let names = [`Nelson`,`Messi`,`Facu`,`Andres`,`Ignacio`,`Fer`]



//funcion para simular la base y el pick ramdon del nombre
const nameSelector = ( ) => {
    //Retonra una promesa
    return new Promise((resolve,reject)=>{
        //Si queremos devolver un valor OK, usamos resolve.
        // resolve(`Ta todo bien`)
        setTimeout(() => {
            //Hagamos que nos devuelva un numero ramdon
            let selectedName = null;
            let randomNumber = Math.floor(Math.random()*5)
            selectedName = names[randomNumber]
            // resolve(selectedName)
            if (selectedName) {
                resolve(selectedName)
            }else{
                reject(`No hay nombres en el indice ${randomNumber} `)
            }
        }, 3000);
    })
}

//Hacer funcion que se comunique con la base de datos Nombres y me imprima
//un nombre al azar.

const onClick = async () =>{
    try {
        const nameValue = await nameSelector()
        // console.log(nameValue)
        const tagH4 = document.createElement(`h4`)
        tagH4.innerHTML = nameValue
        allsNames.appendChild(tagH4)
    } catch (error) {
        alert(error)
    }
    
}

buttunSubmit.addEventListener(`click`,onClick);
