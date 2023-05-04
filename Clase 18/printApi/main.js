//API
// Interfas de programacion de aplicaciones.

const caja = document.getElementById(`caja`);
//Guardamos en una variable una url base.
const baseUrl = `https://reqres.in/api`;

//Creamos la funcion encargada de counicarse con la api

//Funcion para retornar el html de la card.
const renderUser = user =>{
    const{email , first_name , last_name , avatar} = user
    return `
    <div class="card">
        <img src="${avatar}" alt="${first_name}">
        <h2>${first_name} ${last_name} </h2>
        <p>${email} </p>
    </div>
    `
}

//Funcion de logica para imprimir
const renderUsers = users => {
    caja.innerHTML = users.map(user => renderUser(user)).join("")
}
const getUsers = async() => {
    try{
        //hacemos el fetch de la url
        const res = await fetch(`${baseUrl}/users?page=1`);
        //Transformar la respuesta en Json
        const json = await res.json()
        // console.log(json.data)
        const data = json.data;
        //Imprimir
        renderUsers(data)
    } catch (error) {
        console.error(`UPS :${error}`)
    }

}

getUsers()