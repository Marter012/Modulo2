// //This - hace referencia al objeto en si.
// const user = {
//     name: `Nelson`,
//     age : 27,
//     showUser(){
//         console.log(this)
//         return`Holis`
//     },
// }
// console.log(user)

// console.log(user.showUser())

//(2)
class Pelicula {
    //Por clase solo podemos tener 1 solo constructor
    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }
    //No hay un limite de metodos para crear en las clases.
    reproducir(){
        return `La peli ${this.nombre} esta ao vivo, el ida es ${this.id}`
    }

}

const PeliculaClase =  new Pelicula(`Spiderman`,1)
// console.log(PeliculaClase);

const PeliculaClase2 = new Pelicula(`LQTR`,2)
// console.log(PeliculaClase2);

//(3)Herencia - podemos utilizar metodos y parametros de otra clase.

class Serie extends Pelicula{
    constructor(nombre,id,capitulo){
        //SUPER nos permite usar parametros obtenidos de herencia
        super(nombre,id)

        this.capitulo = capitulo;
    };
    reproducirCapitulo(){
        return `Reproduciendo capitulo ${this.capitulo} de la serie ${this.nombre}`
    }
}

const serieUno = new Serie(`suits`,2,15)
// console.log(serieUno)
// console.log(serieUno.reproducirCapitulo())

//(4)PROTOYPES

class Persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.displayName = function () {
            return `${this.nombre} ${this.apellido}`; 
        }
    }    
}
const lionel = new Persona (`lionel`, `messi`)
// console.log(lionel.nombre)
//actualizamos el nombre
lionel.nombre = "leo";
// console.log(lionel.nombre)
//llamamos el metodo
// console.log(lionel.displayName())

//creamos un nuevo metodo solo para la instancia lionel(al usar el dot Notation)
lionel.saludar = function(){
    return `Hola soy ${this.nombre} ${this.apellido}`;
}
// console.log(lionel.saludar())

//Crear una nueva persona
const cristiano = new Persona (`Cristiano`,`Ronaldo`)
//llamando el metodo 
// console.log(cristiano.displayName());

//Creamos un prototype para crear un metodo y poder usarlo cada persona.

Persona.prototype.saludar = function(){
    return `Hola soy ${this.nombre} ${this.apellido}`
}
// console.log(lionel.saludar())
// console.log(cristiano.saludar())

// //Tipos de datos primitivos
// console.log(typeof `holis`)
// console.log(typeof 152)
// console.log(typeof false)
// //
// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof new Date)
// console.log(typeof new RegExp())

//Creamos un metodo dentro del prototype de String, por ende podemos usarlo en cualquier string.
String.prototype.findletter = function (letter){
    return this.indexOf(letter);
};

// console.log(`holis`.findletter(`o`))

//Creamos un metodo para arrays dentro del prototype de arrays.
Array.prototype.getLastItem = function(){
    return this[this.length -1];
}
console.log([1,2,3,1,4].getLastItem())

//CALL - APPLY - BIND
const usuario = {
    name : `pepe`,
};
const producto = {
    name : `Jostick`,
};

function showInfo(pedidos,cuotas) {
    return `${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas`
}

console.log(showInfo(1,2))
//(5)CALL

//Cuando ejecutamos call usamos 2 parametros elprimero el objeto 
// y el segundo los metodos/parametros del metodo.
//PIDE SEPARADO POR ",""
console.log(showInfo.call(usuario,1,12))

//(6)APPLY 

//Cuando hacemos uso de apply tenemos que
// pasar los parametros por medio de un array
//PIDE SEPARADO [ ] POR ","

console.log(showInfo.apply(usuario,[1,12]))

//(7)BIND
//Asocia un objeto al This.
const nuevaFuncion = showInfo.bind(usuario);
console.log(nuevaFuncion(17,1))