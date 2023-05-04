// // //(1)Closures
// // // Una funcion devuelve otra funcion y le pasa la informacion de scope para poder usarla dentro de la nueva funcion


// // const multiplicarpor = num1 => {
// //     let x = num1 
// //     return function (otronum){
// //         return x * otronum
// //     }
// // }

// // const unavar = multiplicarpor(5)

// // console.log(unavar(5))


// //(2) Objetos
// //es una colleccion de datos relacionados constan de variables y funciones, denominadas propiedades y metodos.

// //Objeto literal, ingresando cada objeto nosotros mismos.
// let auto = {
//     marca : "Fiat",
//     modelo : "Uno",
//     año : 2022,
//     combustible : "Nafta",
//     seguro : true,
//     color : {

//     }
// }
// console.log(auto.año) 

// //(3)Clases y Constructores

// class Auto {
//     constructor(marca,modelo,año,seguro){
//         this.marca = marca,
//         this.modelo = modelo,
//         this.año = año,
//         this.seguro = seguro
//     }
// }

// let Auto1 = new Auto("Fiat","Uno",2002,true)
// let Auto2 = new Auto("Audi","Uno",2002,true)

// console.log(Auto1)
// console.log(Auto2)

// //Ejemplo con metodos

// class Autos{
//     constructor(marca,modelo,año,seguro){
//         this.marca = marca,
//         this.modelo = modelo,
//         this.año = año,
//         this.seguro = seguro
//     }
//     arrancar = function () {
//         return "El auto arranco";
//     }
//     getmarca = () => {
//        return this.marca
//     }
// }

// let autos1 = new Autos("Fiat","Uno",2002,true)
// let autos2 = new Autos("Peugeot",206,2015,true)

// console.log(autos1.arrancar())
// console.log(autos2.marca) //devolvemos el valor por medio de la propiedad
// console.log(autos2.getmarca()) // devolvemos el valor por medio del metodo

// //Resumen
// /*
// clases = se definen las caracteristicas del objeto
// objeto = instancia de esa clase
// propiedades = caracteristicas que tiene el objeto.
// metodos = capacidad que el objeto.
// constructor = metodo que llamamos a la hora de crear instancias.
// this = si es dentro de una funcion se refiere a si misma, y si es dentro de un objeto se refiere al objeto.
//  */

// //Ejemplo robot

// class Robot {
//     constructor(color, posicionx, posiciony){
//         this.color = color
//         this.posicionx = posicionx
//         this.posiciony = posiciony
//     }
//     desplazar = function(x,y) {
//         (this.posicionx = x), (this.posiciony = y)
//     }
//     posicion = function(){
//         console.log(`El robot ${this.color} esta en X : ${this.posicionx} y en Y : ${this.posiciony}`)
//     }
// }

// let robot1 = new Robot("Azul", 20 , 40) // se crea
// let robot2 = new Robot("Rojo", 10 , 50)

// console.log(robot1) 
// robot1.posicion()

// robot1.desplazar(50,50) // se mueve
// robot1.posicion() // se imrime