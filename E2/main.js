// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

const Pizzas = [
    {
        id: 1,
        nombre: "Muzza",
        ingredientes: [`muzza`,`salsa`],
        precio: 600,
    },
    {
        id: 2,
        nombre: "Roquefort",
        ingredientes: ["roquefort","salsa","queso"],
        precio: 800,
    },
    {
        id: 3,
        nombre: "Calabreza",
        ingredientes: ["albahaca","salsa","queso"],
        precio: 800,
    },
    {
        id: 4,
        nombre: "Palmito",
        ingredientes: ["Palmitos","salsa","queso"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "Fuggaseta",
        ingredientes: ["cebolla","salsa","queso"],
        precio: 1000,
    },
    {
        id: 6,
        nombre: "Especial",
        ingredientes: ["jamon","morron","huevo","salsa","queso"],
        precio: 1500,
    }
]

// // 🔥 Crear una iteración del array que imprima en consola:
// // a) Las pizzas que tengan un id impar.
// // b) ¿Hay alguna pizza que valga menos de $600?
// // c) Los nombres de todos las pizzas.
// // d) Los precios de las pizzas.
// // e) El nombre de cada pizza con su respectivo precio.

// // Cada respuesta debe ser, como siempre, usuario friendly. 
// // Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// // Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// // Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

// const Impar = () => Pizzas.filter((Pizzas) => Pizzas.id % 2 == 1)
// console.log(Impar())

// const menosde600 = () => Pizzas.filter((Pizzas) => Pizzas.precio <= 600) ? console.log(`Si hay pizzas que valgan menos de $600`)
// : console.log(`No hay pizzas que valgan menos de $600`)
// menosde600()

// const nombresPizza = Pizzas.map(({nombre}) => nombre)
// console.log(nombresPizza)

// const preciosPizza = Pizzas.map(({precio}) => precio)
// console.log(preciosPizza)

// const imprimenombre = Pizzas.forEach(({nombre,precio}) => console.log(`La pizza con ${nombre} cuesta $${precio}`))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

const nombre = document.getElementById(`nombre`)
const precio = document.getElementById(`precio`)
const NumberInput = document.getElementById(`NumberInput`)
const btn = document.getElementById(`btn`)

const generar = () =>{
    let InputValor = NumberInput.value;    
    let filtrado = Pizzas.filter((pizza) => pizza.id == InputValor)    
    for(i = 0 ; i < Pizzas.length; i++){
        console.log(filtrado)
        if(InputValor == Pizzas[i].id ) {
            nombre.innerHTML = `${filtrado[0].nombre} `
            precio.innerHTML = `${filtrado[0].precio} `
            break
        }else{
            nombre.innerHTML = `Ingrese otro numero`
            precio.innerHTML= `El numero ingresado no corresponde a una pizza`
        }
    }
    
}


const pulsar = () => {
    btn.addEventListener(`click`,generar)
}
pulsar()



