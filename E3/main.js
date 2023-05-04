// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

const Pizzas = [
    {
        id: 1,
        nombre: "Muzza",
        ingredientes: [`muzza`,`salsa`],
        img : `https://saboresmendoza.com/wp-content/uploads/2019/09/pizza-de-muzzarella-sabores.jpg`,
        precio: 600,
    },
    {
        id: 2,
        nombre: "Roquefort",
        ingredientes: ["roquefort","salsa","queso"],
        img : `https://img-global.cpcdn.com/recipes/d53d5968c0b16951/1200x630cq70/photo.jpg`,
        precio: 800,
    },
    {
        id: 3,
        nombre: "Calabreza",
        ingredientes: ["albahaca","salsa","queso"],
        img : `https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg`,
        precio: 800,
    },
    {
        id: 4,
        nombre: "Palmito",
        ingredientes: ["Palmitos","salsa","queso"],
        img : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DZbokQ2rEz2x4j0Ekw8ZyWXv62mcyDSfGER0LYypOwuyCx4qVsJWH_Up73wqAqHdeNc&usqp=CAU`,
        precio: 1000,
    },
    {
        id: 5,
        nombre: "Fuggaseta",
        ingredientes: ["cebolla","salsa","queso"],
        img : `https://assets.unileversolutions.com/recipes-v2/210361.jpg?imwidth=1600`,
        precio: 1000,
    },
    {
        id: 6,
        nombre: "Especial",
        ingredientes: ["jamon","morron","huevo","salsa","queso"],
        img : `https://img-global.cpcdn.com/recipes/b745cd75594125a2/680x482cq70/pizza-especial-casera-foto-principal.webp`,
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

// {//Ejercicio 1
//     const Impar = () => Pizzas.filter((Pizzas) => Pizzas.id % 2 == 1)
// console.log(Impar())

// const menosde600 = () => Pizzas.filter((Pizzas) => Pizzas.precio <= 600) ? console.log(`Si hay pizzas que valgan menos de $600`)
// : console.log(`No hay pizzas que valgan menos de $600`)
// menosde600()

// const nombresPizza = Pizzas.map(({nombre}) => nombre)
// console.log(nombresPizza)

// const preciosPizza = Pizzas.map(({precio}) => precio)
// console.log(preciosPizza)

// const imprimenombre = Pizzas.forEach(({nombre,precio}) => console.log(`La pizza con ${nombre} cuesta $${precio}`))
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

// {//Ejercicio 2
// const nombre = document.getElementById(`nombre`)
// const precio = document.getElementById(`precio`)
// const NumberInput = document.getElementById(`NumberInput`)
// const btn = document.getElementById(`btn`)

// const generar = () =>{
//     let InputValor = NumberInput.value;    
//     let filtrado = Pizzas.filter((pizza) => pizza.id == InputValor)    
//     for(i = 0 ; i < Pizzas.length; i++){
//         console.log(filtrado)
//         if(InputValor == Pizzas[i].id ) {
//             nombre.innerHTML = `${filtrado[0].nombre} `
//             precio.innerHTML = `${filtrado[0].precio} `
//             break
//         }else{
//             nombre.innerHTML = `Ingrese otro numero`
//             precio.innerHTML= `El numero ingresado no corresponde a una pizza`
//         }
//     }
    
// }


// const pulsar = () => {
//     btn.addEventListener(`click`,generar)
// }
// pulsar()
// }


// 👉 A cada Pizza, agregarle una imagen. 
// 👉 Guardar el array en el local storage. 
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
// 👉 Debajo del card tiene que haber un input y un botón. 

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// 🆙 En Eduflow, colocar el repositorio de Github, en el cual debe figurar el vercel deployado.

localStorage.setItem('Pizzas', JSON.stringify(Pizzas));

const contenedor = document.getElementById(`contenedor`)
const NumberInput = document.getElementById(`NumberInput`)
const btn = document.getElementById(`btn`)
const error = document.getElementById(`error`)

const generar = () =>{
    let InputValor = NumberInput.value;    
    let filtrado = Pizzas.filter((pizza) => pizza.id == InputValor)    
    for(i = 0 ; i < Pizzas.length; i++){        
        if(InputValor == Pizzas[i].id ) {            
            contenedor.innerHTML=`
            <div>
            <p>"${filtrado[0].nombre}" </p>
            <p>$${filtrado[0].precio} </p>
            <img src="${filtrado[0].img} " alt="">
            <p>Contiene ${filtrado[0].ingredientes}. </p>
            </div>
            `  
            error.innerHTML=``
            break         
        }else{
            error.textContent= `El numero ingresado no corresponde a una pizza`  
            contenedor.innerHTML=``          
        }
    }
    
}


const pulsar = () => {
    btn.addEventListener(`click`,generar)

}
pulsar()
    
    
