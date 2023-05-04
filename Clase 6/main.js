// //(1)Metodos de strings

// //Length : nos permite ver la cantidad de elementos dentro de un string

// let mistring = "Hola mundo"
// console.log(mistring.length) // = 10

// //Mayusculas y Minusculas

// let miauto = "Fiat"
// console.log(miauto.toUpperCase())//mayuscula
// console.log(miauto.toLowerCase())//minuscula

// //Remplazar 

// let miChocolate = "Milka Negro"
// let resultado = "Blanco"
// console.log(miChocolate.replace("Negro","Blanco")) // Remplaza palabras, en primer parametro es el que se desea cambiar

// //Quitar espacios

// let espacios = "        Hola como estas?"
// console.log(espacios.trim()) // solo quita espacios de comienzo y final

// //Dividir 

// let cambio = "Algodon Dulce"
// console.log(cambio.split(" ")) // divide un string dependiendo el parametro que nosotros queremos con que se divida

// //Detectar tipo de datos

// let array = ["Hola"]
// let color = "Rojo"
// let num = 2

// console.log(typeof array) // objeto
// console.log(typeof color) // string
// console.log(typeof num) // number

// //Incluye (logico)

// let siesta = "Hola mauri"
// console.log(siesta.includes("mauri")) // true
// console.log(siesta.includes("holis")) // false

// // Array
// //Es una caja que contiene distintos tipos de elemtentos con distintos o iguales tipos de datos.

// const caja = [1,2,3,"hola"]

// console.log(caja[0]) // = 1

// //Indexof

// const cajaindex = [1,2,3,4,5,6]
// console.log(cajaindex.indexOf(3)) //= 2  devuelve el indice en el que se encuentra el elemento a buscar pasado como parametro

// //pop

// let cajita = [1,2,3]
// cajita.pop() // elimina el ultimo elemento de un array
// console.log(cajita)

// //shift

// let cajita1 = [1,2,3]
// cajita1.shift() // elimina el primer elemento de un array
// console.log(cajita1)

// //unshift

// let cajon = [1,2,"hola"]
// cajon.unshift("peras") // agrega un elemento al comienzo de un array
// console.log(cajon)

// //Reverse

// cajon.reverse()
// console.log(cajon) // devuelve el array pero dado vuelta, de atras para delante.

// //Replaceall

// let nombre = "Hola soy juana,juana"
// console.log(nombre.replaceAll("juana","Juan")) //metodo para reeplazar todas las concidencias pasadas por el primer parametro.

// //ToString

// let conver = [1,2,3,4,5,"hola"]
// console.log(conver.toString())//Convierte un array en string

// //Join

// console.log(conver.join(" ")) // une elementos de un array agregando en el mismo el parametro pasado.

// //Map

// let numeros = [1,2,3,4,5]
// let mapeado = numeros.map((valor)=> valor + 1)
// console.log(mapeado) // devuelve un nuevo array respetando la condicion que se especifique dentro del map.

// //Push

// numeros.push("Agregado")
// console.log(numeros) // agrega 1 o mas elementos al final de un array

//  //Concat

//  let concatenar = ["hola"]
//  console.log(concatenar.concat("Mundo")) // concatena arrays segun el parametro pasado.

// //Slice

// let nombres = ["pepe","pepito","julian","martin"]
// console.log(nombres.slice(1,4))// devuelve una copia de array entre los indices pasados como parametros, siendo el ultimo indice no tomado en cuenta.

// //find

// const peliculas1 = [
//     {
//         id :1,
//         title : "Volver al futuro",
//         tags: ["ficcion","aventura"],
//     },
//     {
//         id :2,
//         title : "HORTON",
//         tags: ["niños","aventura"]
//     },
//     {
//         id :3,
//         title : "Harry poter",
//         tags: ["magia","aventura"]
//     },
// ]

// console.log(peliculas1.find((item) =>
//     item.id == 1))