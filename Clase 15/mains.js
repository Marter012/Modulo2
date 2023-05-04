// 1.Hacer un menu (navbar) que contenga un logo, el icono de menu y adentro 4 enlaces que esten ocultos. Hacer
// un addEventListener al menu para desplegar los 4 elementos.

// 2.Validacion de forms,
// hacer un form que tenga email y contraseña y que valide que el email se un email y la contraseña tenga minuscula,
// mayuscula y un numero. se da error, renderizar en el html el texto con un error. Ej, email inavalid / La contraseña 
// tiene que tenes una mayuscula, minuscula y un numero.

// 3.Hacer un input y un boton de enviar.Crear una funcion para pintar en el html lo que escribimos en el input 
// cuando apretemos el boton de enviar. Y que con los datos presistan en el local Storage.

// 4.Tenemos el siguiente array de objetos, renderizar cada objeto en una card.

//Ejerccio (1)

// {//Ejercicio de Validacion (2)

// const emailInput = document.getElementById(`email`)
// const passwordInput = document.getElementById(`password`)
// const validForm = document.getElementById(`valid-form`)


// const isEmpty = value => !value.length;

// const isEmailValid = email => {
//     const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//     return re.test(email)
// }
// const isPasswordSecuere = pass =>{
//     const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
//     return re.test(pass)
// }

// const checkEmail = () => {
//     let valid = false;
//     const emailValue = emailInput.value.trim();
//     if(isEmpty(emailValue)){
//         alert(`El campo esta vacio`)    
//     }else if(!isEmailValid(emailValue)){
//         alert(`El email es invalido`)
//     }else{
//         valid = true
//     }
//     return valid
// }

// const checkPass = () =>{
//     let valid = false;
//     const passValue = passwordInput.value
//     if(isEmpty(passValue)){
//         alert(`El campo de contraseña esta vacio`)
//     }else if (isPasswordSecuere(passValue)){
//         alert(`La contraseña no es valida`)
//     }else{
//         valid = true
//     }
//     return valid
// }


// validForm.addEventListener(`submit`, e =>{
//     e.preventDefault();
//     let isEmailValid = checkEmail();
//     let isPassValid = checkPass();
//     let isFormValid = isEmailValid && isPassValid
//     if( isFormValid){
//         validForm.reset()
//         alert(`Se envio el formulario`)
//     }
// })
// }

// {//Eejerccio (3)

// const inputText = document.getElementById(`inputText`);
// const caja = document.getElementById(`caja`);
// const form = document.getElementById(`form`);

// let items = JSON.parse(localStorage.getItem(`items`)) || [];

// const saveLocal = items => {
//     localStorage.setItem(`items`,JSON.stringify(items));
// }

// const createHtml = items =>{
//     const html = items.map((item)=> {return `<p>${item} </p>`}).join(``);
//     caja.innerHTML = html;
// }

// const init = () =>{
//     form.addEventListener(`submit`,e=>{
//         e.preventDefault();
//         let item = inputText.value;
//         inputText.value =``;
//         items = [... items, item];
//         saveLocal(items);
//         createHtml(items);
//     })
//     document.addEventListener(`DOMContentLoaded`,createHtml(items))
// }
// init()

// }

{//Ejercicio(4)
let peliculas = [
    {
      id: 1,
      titulo: 'El señor de los anillos: La comunidad del anillo',
      descripcion:
        'Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.',
      director: 'Peter Jackson',
      anio: 2001,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX720_.jpg',
    },
    {
      id: 2,
      titulo: 'Volver al futuro',
      descripcion:
        'Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo, inventado por su gran amigo, el excéntrico científico Doc Brown.',
      director: 'Robert Zemeckis',
      anio: 1985,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BYjQxMTIyMWUtMmMyMS00MGNmLTkzNzktOTM2YzMyZmRjYTYzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
      id: 3,
      titulo: 'Harry Potter y la piedra filosofal',
      descripcion:
        'Un niño huérfano se inscribe en una escuela de magia y hechicería, donde aprende la verdad sobre sí mismo, su familia y el terrible mal que acecha al mundo mágico.',
      director: 'Chris Columbus',
      anio: 2001,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMzFiZjhjODUtMWJhZi00ZDk5LThjY2ItZjNjYjc0OGVjY2FmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
      id: 4,
      titulo: 'Spiderman',
      descripcion:
        'Al ser mordido por una araña modificada genéticamente, un chico de instituto tímido y estudioso adquiere habilidades de araña que al final tendrá que usar para luchar contra el mal como un superhéroe tras una tragedia familiar.',
      director: 'Sam Raimin',
      anio: 2002,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX511_.jpg',
    },
    {
      id: 5,
      titulo: 'Fight Club',
      descripcion:
        'Un oficinista insomne y un desentendido fabricante de jabones forman un club de lucha clandestino que se convierte en mucho más.',
      director: 'David Fincher',
      anio: 1999,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BNzJhZjg3MWQtNDk1Zi00ZjMzLWI1ZjUtNmE2MDg0ZDU4MzZlXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
    },
    {
      id: 6,
      titulo: 'El Origen',
      descripcion:
        'A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea de implantar una idea en la mente de un jefe de una gran empresa.',
      director: 'Christopher "EL REY" Nolan',
      anio: 2010,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMTUzMzUyOTktNmYyNS00YTA1LWIxNmQtMGIzZDYxZGI3OTliXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
  ];
  
const cards = document.querySelector(`.contenedor`)

const renderCard = pelicula =>{
    const {titulo,descripcion,director,anio,imagen} = pelicula
    return `
    <div class="contenedor">
    <img src= "${imagen}" alt ="" class="img-peli" >
    <h3>${titulo} </h3>
    <p>${descripcion} </p>
    <p>${director}</p>
    <p>${anio}</p>
    </div>
    `
}

const renderCards = peliculas => {
    cards.innerHTML = peliculas.map(renderCard).join(``)
}

renderCards(peliculas)
}
