//(1) Callback 

//Repeat(n)

const nombre1 = "Mauri"
console.log(nombre1.repeat(3)) // repite n cantidad de veces

//ChartAt (solos strings)

console.log(nombre1.charAt(0)) // nos indica un numero de indice y nos devuelve que letra esta en ese indice.

//Map(Callback)

const numeros1 = [1,2,3,4,5,6]
const numerodoble = numeros1.map((item)=>item*2)
console.log(numerodoble)

//Filter, devuelve un nuevo array sin modificar el orginial

const filtrado = numeros1.filter((item) => item > 3)
console.log(filtrado)

const palabras= ["argentina","brasil","bariloche","uruguay","paraguay"]
const filtrado1 = palabras.filter((item) =>  item.includes(`guay`))
console.log(filtrado1)

//find

const numeros2 = [1,2,3,4,5,6]
const find = numeros2.find((item) => item > 2) // devuelve solo el primer valor que cumpla la condicion
console.log(find)

//forEach

const numeros3 = [1,2,3,4,5,6]
numeros3.forEach((item)=> console.log(item))

//reduce

const numeros4 = [10,20,30]
console.log(numeros4.reduce((a,b)=> a + b)) // utiliza un acumulador para reducir un array

//sort

const numeros5 =[2,4,8,7,6,3,12,28,47] // ordena los numeros de un array
console.log(numeros5.sort(function(a,b){return a -b })) // se agrega esta funcion para que no comprometa numeros con mismo indice al comienzo

//every

console.log(numeros5.every((item) => item > 1 ))// funcion comparativa donde todos los elementos de un array deben cumplir para true, sino sera false

//some 

console.log(numeros5.some((item)=>item>40))//funcion comparativa donde al menos 1 de los elementos de un array deben cumplir para true, sino sera false
