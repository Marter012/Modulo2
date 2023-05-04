//// Declarar y Ejecutar [RETURN CORTA LA LECTURA DE UN BLOQUE]

////(1) Largo
// function sumar(){
//     let num1=5;
//     let num2=18;
//     return "El resultado es: " + (num1 + num2)
// }
// console.log(sumar())

////(2) Corto / Simplificado

// function sumar (num1,num2){
//     return "El resultado es: " + (num1 + num2)
// }
// console.log(sumar(1,4))

////(3)

// function sumarnumeros(a,b){
//     if (a === 4 || b === 4){
//         return console.log("Algun numero es 4")
//     }
//     return a + b
// }

// console.log(sumarnumeros(2,4))

////(4) Funcion Flecha
//// Funcion anonima = cuando se define sin nombre y la funcion se va almacenar en la memoria,
//// y el uso mas comun es asignarle a una variable.

// const saludar = (nombre) => {
//     console.log(`Hola ${nombre}`)
// }
// saludar ("Nelson")

//// Con 1 parametro y una expresion 
// let hola = parametro => "Hola"
// console.log(hola())

//// Con 2 parametros y una expresion 
// let hola1 = (parametro1,parametro2) => "Hola"
// console.log(hola())

//// Si tiene mas de 1 expresion deberia usarse console.log o return

////(5) Funciona Recurisva
//// Funciona Recurisva es aquella que se llama asi misma hasta que se termine de coodear.

// let i = 0 
// let cuentraAtras = numero => {
//     if (numero === 0){
//         return
//     }
//     console.log(numero);
//     return cuentraAtras(numero-1)
// }
// cuentraAtras(5)

// const duplicar = num => {
//     num = num + num
//     console.log(num)
//     if(num > 100){
//         return 
//     }
//     return duplicar(num)
// }
// duplicar(4)

////(6) Callback
//// Callback es una funcion que se manda como argumento a otra funcion.

////Ejemplo 1
// const alertHola = nombre => {
//     return alert(`Hola ${nombre}`)
// }

// const consoleHola = nombre =>{
//     return console.log(`Hola ${nombre}`)
// }

// const procesarEntrada = callback =>{
//     const nombre = prompt(`Por favor ingresa tu nombre`);

//     callback(nombre)
// }

// procesarEntrada(consoleHola)
////Ejemplo 2
// const saludar = nombre => {
//     console.log(`Hola ${nombre}`)
// }

// const perocesarSaludo = funcion =>{
//     const nombre = prompt(`Pone tu nombre`)

//     funcion(nombre)
// }

// perocesarSaludo(saludar)