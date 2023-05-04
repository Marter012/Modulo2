////(1)FUNCIONES

// function saludar (){
//  console.log("Hola, soy una funcion")
// }
// saludar()

////(2)PARAMETROS

/* variables dentro de la funcion ej "nombre" */
// function saludar(nombre){
//     console.log(`hola ${nombre}`)
// }
// saludar(`nelson`)

// function descripcion (nombre,edad,carrera = "nada"){
//     console.log(`Hola ${nombre}, tenes ${edad} años y estudias ${carrera}`)
// }
// descripcion("mauri",24,)

////(3)RETURN

// function sumar(a,b){
//     return a + b
// }
// console.log(sumar(5,5))

////(4)CICLOS -- BUCLES

// let nuevoArray = ["auto","moto","camioneta"]
// console.log(nuevoArray)
// console.log(nuevoArray.length)

////▼BREAK , corta el bucle cuando se cumple.

////▼CONTINUE, saltea la posicion cuando se cumple.

////▼WHILE(solo se itera se se cumple la funcion)
// let i = 0
// while(i < 10){
//     console.log(`el numero que estamos iterando es ${i}`)
//     i++
// }

////▼DO WHILE (se itera 1 vez como minimo)
// let i = 10 
// do{
//     console.log(`el numero iterado es ${i}`)
//     i++
// } while(i<10)

////COMPROBAR SI ES ARRAY O NO.
// let array = ["hola",20,"Nucba"]
// let string = "holis"
// console.log(Array.isArray(string))

//// EJERCICIO
// var bloque = [1,2,3,4,5,6,7,8,9,10]
// for(i = 0 ; i < bloque.length ; i++){
//     console.log(bloque[i])
// }

// for(i = 0 ; i < 5 ; i++){
//     console.log(bloque[i])
// }
// for(i = 4 ; i < bloque.length ; i++){
//     console.log(bloque[i])
// }
// for(i = 0 ; i < bloque.length;i++){
//     if(i !=3 ){
//         console.log(bloque[i])
//     }
// }

var numero = prompt("Ingrese un numero")

for (i = 0 ; i < 11 ; i++){
    resultado = numero * i
    console.log(`El ${numero} multiplicado por ${i} es igual a ${resultado}`)
}