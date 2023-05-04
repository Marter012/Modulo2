//Nos traemos los elementos necesarios

const cardsContainer = document.getElementById(`cards-container`);

const form = document.getElementById(`form`);

//Definimos la agenda
let agenda = JSON.parse(localStorage.getItem(`agenda`)) || [];

//TODO : hacer funcion para el localStorage
const saveLocalStorage = ( ) => {
    localStorage.setItem(`agenda`, JSON.stringify(agenda))
}

//Funcion que nos va a devolver la agenda con el estado actual
const saveData = () => {
    agenda = [
        ... agenda,{
            id : agenda.length +1,
            name : nameInput.value,
            surname : surnameInput.value,
            phone : phoneInput.value,
            email : emailInput.value,
            date : formatDate(dateInput.value),
            time : hourInput.value,
            quantity : getRadioValue(radioInputs),
            extras : getCheckedOptions(checkboxInputs),
            about : aboutInput.value,
        },
    ];
}

//Funcion para crear la Card de turno.

const renderTurn = (turn) => {
    const {id,name,surname,phone,email,date,time,quantity,extras} = turn
    return `
    <div class="card ${setCardBackground(quantity)}">
        <div class="card__left">
            <h2 class="card__title">Orden: N${id} - ${name} ${surname} </h2>
            <p class="card__qty">${quantity} </p>
            <p class="card__extras">Extra: ${extras} </p>
            <div class="tags">
              <span class="card__hour ${setTimeBackground(quantity)} ">${time} HS</span>
              <span class="card__date ${setDataBackground(quantity)} ">${date} </span>
            </div>
        </div>
        <div class="card__right">
        <a href="https://plataforma.nucba.io/c/javascript-d69d92/ ${email} target=""_blank "><i class="fa-solid fa-envelope"></i></a>
        <a href="www.google.com" ${phone} target="_blank" ><i class="fa-solid fa-phone-flip"></i></a>  
            
            <img src=${setCardImg(quantity)} class="card__img lupa-img ${setCardImgClass(quantity)} " alt=""/>
        </div>
    </div>`
}

//Funccion de la logica para renderizar
const renderAgenda = () => {
    cardsContainer.innerHTML = agenda.map((turn) => renderTurn(turn)).join(``);
}

//Funcion para el submit del form
const submitForm = (e) => {
    e.preventDefault();
    if(isValidForm()){
        saveData()
        alert(`El turno se cargo correctamente`)
        form.reset();
        saveLocalStorage();
        renderAgenda();
        setDateIntervals();
    }
};


//Funciona para colocar los listener y  estar mas organizados

const init = () => {
    renderAgenda();
    window.addEventListener(`DOMContentLoaded`, setDateIntervals)
    form.addEventListener(`submit`,submitForm)
};
 
init();