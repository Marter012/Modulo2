/*
DOM
Es lo que permite interactuar a JS con los diferentes elementos de html de una web, como tambien operar sobre ellos
o modificarlos.
Funciona mediante la trasnformacion del codigo HTML que contiene la estructura de la web, a una representaciones
estructural del documento, en forma de arbol, mediante la cual podemos acceder usando JS y operar sobre los elementos.

Estructura DOM
Cada etiqueta HTML de trasnfroma en un nodo de tipo "Elemento", del nodo raiz solamente pueden derivar los nodos HEAD o BODY.

NODOS
Se definin 13 tipos de nodos, dentro de los mas usados encontramos
-Document : nodo raiz del que derivan todos los demas nodos del arbol.
-Element: representa cada una de las etiquetas XHTML. se trata del unico nodo que puede contener atributos y
derivar otros nodos.
-Attr: Se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, uno por cada par
atributo = valor.
-Text: Nodo que contiene el texto encerrado por una etiqueta HTML.
-Comment: Representa los comentarios incluidos en la pagina HTML.

METODOS BASICO DEL DOM

╚> getElementByid()
Sirve para acceder desde el JS a un elemento de la estructura HTML, utilizando el atributo "ID"

╚> getElementByClassName()
Sirve para acceder desde el JS a un elemento de la estructura HTML, utilizando el atributo "Clase"
Devuelve un array con todas las considencias ya que la CLASS puede repetirse.

╚> getElementByTagName()


╚> queryselector()
Sirve para acceder a los nodos del html, dependiendo de las clases,etiquetas, id, se puede acceder de cualquier elemento o atributo.
Ademas solo devuelve la primer coincidencia del elemento, si no encuentra ninguno devuelve null.

╚> queryselectorAll()
Principalmente devuelve un Nodelist, no es un array pero permite usar metodos de array para recorerlo.
para acceder se usa igual que queryselector, identificando elementos o atributos.

FUNCIONALIDADES DEL BROWSER

╚>setTimeout(function,miliseconds)
Ejecuta una funcion, despues de esperar un numero especifico de milisegundos.

╚>setInterval(function,milisecond)
igual que el setTimeout pero repite la ejecucion de la funcion continuamente.

╚>Location, ejemplo abajo.


*/


// //Ejemplo getElementById
// const logo = document.getElementById(`logo`);
// console.log(logo)
// console.dir(logo)

// //Ejemplo getElementByClassName
// const parrafo = document.getElementsByClassName("parrafo")
// console.log(parrafo[0].innerHTML)

// //Ejemplo getElementByTagName
// const p = document.getElementsByTagName("p")
// console.log(p)
// console.log(p[0].innerHTML)
// /*Convertir en array para poder recorrerlo, sino nos da error ya que "p"
//  es un HTML y "pArray" es un array, forEach recorre array*/
// const pArray = [... p]
// pArray.forEach((item)=> console.log(item))

// //Ejemplo QuerySelector
// const header = document.querySelector(".header")
// console.log(header)
// console.log(header.innerHTML)

// //Ejemplo QuerySelectorAll
// const query = document.querySelectorAll(".parrafo")
// console.log(query)

// //Ejemplo de como agregar texto en una etiqueta P
// const texto = document.getElementById("agregarTexto")
// console.log(texto)
// texto.innerHTML = "<b>Hola estamos</b> agregando texto"
// console.log(texto)

// //Ejemplo setTimeout
// setTimeout(()=> {
//     console.log("Hola")
// },2000);

// //Ejemplo setInterval.
// const repetirsegundo = () => {
//     setInterval(mandar, 2000);
// }
// const mandar = () => {console.log("Pasaron 2 segundos")}
// repetirsegundo()

// //Ejemplo Location : nos permite mostrar direfentes tipos de informacion de lo que nosotros busquemos.
// let url = document.createElement(`a`);
// url.href = `https://www.google.com` // creamos una direccion de referencia pero aun no introducimos texto en la etiqueta "a"
// console.log(url)
// console.log(url.protocol)
// console.log(url.host)

// console.log(window.location.href) // indica el link donde estamos ubicados a nivel web
// window.location = `https://www.google.com`; // ahora nos deriva a google

// EJERCICIO


//Crear un div desde js
const contenedor = document.getElementById("contenedor")
console.log(contenedor)

//crear un elemento con JS
const h2 = document.createElement("h2")
h2.textContent = `Hola estoy creado un elemento desde le JS`
contenedor.appendChild(h2)