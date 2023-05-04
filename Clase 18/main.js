//XMLhttpRequest a Fetch
// XML es un objeto de JavaScript que fue reemplazado por el metodo fetch.
// Soli ser un codigo no tan legible y practico por lo cual surge fetch, basado 
// en promesas realizando peticiones.

// fetch devolvera una promesa que sera aceptada cuando reciba una
//  respuesta y solo rechazada si hay un fallo.

//Ejemplo de fetch

// fetch(`https://pokeapi.co/api/v2/pokemon/`)
//     //convertimos las respuesta de la api a formato json
//     .then(response => response.json())
//     //consoleamos ese json
//     .then(data => console.log(data))
//     //catch para que ingrese en caso de error
//     .catch(error=> console.log(`Ups :${error} `))

//PROMESASA
// llegaron en 2016 para solucionar lo que era el callback hell 
// en 2017 llega 

//ASYNC / AWAIT
//Async ante una funcion significa solamente una cosa, devolvera una promesa.
//Await hace que JavaScrip suspende la funcion hasta que se resuelva la promesa.


// const miFetch = async () => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
//     const data = await response.json();
//     console.log(data);
// }

// miFetch();

//TRY/CATCH
//La declaracion tye señala un bloque de instrucciones a intentar, y especifica
//si la respuesta se reproduce sin excepsion.(catch)

const miFetch = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await response.json();        
        console.log(data);
    } catch (error) {
        //si hay un error de carga activa el catch.
        alert(error)
    }
    
}

miFetch();
// Distintos tipos de peticiones, GET (Que es la que estamos 
// usando en este momento), POST (Subir), DELETE, PUT(Editar).