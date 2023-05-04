const producto = [
    {
        ud : 1,
        nombre : "Remera Nike",
        precio : 5000,
        colores : ["Blanca","Negro","Azul"]
    },
    {
        ud : 2,
        nombre : "Pantalón Gucci",
        precio : 12000,
        colores : ["Gris","Negro"]
    },
    {
        ud : 3,
        nombre : "Vestido Merkeva",
        precio : 11000,
        colores : ["Rojo","Blanco","Violeta"]
    },
    {
        ud : 4,
        nombre : "Zapatillas Deportivas Adidas",
        precio : 9500,
        colores : ["Blanca","Rojo","Azul"]
    },
    {
        ud : 5,
        nombre : "Teclado Redragon",
        precio : 7500,
        colores : ["Blanca","Negro"]
    },
    {
        ud : 6,
        nombre : "Camperon del Milan del Duki",
        precio : 55000,
        colores : ["Negro"]
    },
]

/*
Imprimir por consola (por cada producto) : "El producto *nombre* sale $ precio " 

Filtrar
A) Filtrar los productos mayores a 10 lucas y devolverlos en un array nuevo.
B)Filtrar/Incluir todos los productos disponibles en negro (cuidado con las mayusculas)
C)Repetir los ejercicios anteriores pero parametrizar precio y color (funcion)

Mapear
A)Usar destructuring para traer los nombres de los productos en un nuevo array
B)Hacer una funcion que devuelva un nuevo array con los productos
actuales pero que aquellos que valgan mas de 10000 tengan un descuento del 50%

Existe o no 
A) Indicar si existe algun producto que este disponible en mas de 3 colores o mas.
La respuesta mostrada debe ser user friendly
B)Indicar si todos los productos tienen mas de 1 color

Ordenar productos de mayor a menor por precio
*/

const imprimerProductoPorPrecio = () => producto.forEach(
    (producto) => console.log(`El producto ${producto.nombre} sale $${producto.precio}`))

imprimerProductoPorPrecio()

//Filtrar

//A)
const FiltradoA = producto.filter((producto) => producto.precio > 10000)
console.log(FiltradoA)
//B)
const FiltradoB = producto.filter((producto) => producto.colores.includes("Negro"))
console.log(FiltradoB)
//C)
const MayoresA = (precio) =>producto.filter((producto) => producto.precio > precio)
console.log(MayoresA(0))
const ColorDis = (color) => producto.filter((producto) => producto.colores.includes(color))
console.log(ColorDis("Rojo"))

//Mapear

//A)
const nombreProductos = producto.map(({nombre}) => nombre)
console.log(nombreProductos)
//B)
//Opcion con Ternarios
const Masde10 = producto.map((producto) => producto.precio > 10000 ? {... producto, precio : producto.precio * 0.5} : producto
)
console.log(Masde10)

//Existe o no

//A)
const Colormas3 = () => producto.some((producto) => producto.colores.length >= 3) 
? console.log("Existe algun producto con mas de 3 colores")
: console.log("No existen productos con mas de 3 colores")
Colormas3()
//B)
const Masde1 = () => producto.every((producto) => producto.length > 1) 
? console.log("Todos los productos tienen mas de 1 color")
: console.log("No todos los productos tiene mas de 1 color")
Masde1()

//ORDENAR

const ordenar = producto.sort((a,b) => a.precio - b.precio)
console.log(ordenar)