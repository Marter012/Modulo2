//Funcion para formatear la fecha que nos devuelve el input de tipo date.

//Usamos 
//1.Split => "2022-08-29" y lo transforma a ["2022","08","29"]
//2.Reverse => ["2022","08","29"] y lo transforma a ["29","08","2022"]
//3.Join : ["29","08","2022"] y lo transforma a "29/08/2022"
const formatDate = (date) => {
  const splitDate = date.split(`-`).reverse().join(`/`)
  return splitDate;
}

//Funcion para obtener el value seleccionado de los input de tipo radio.

const getRadioValue = (inputs) => {
  const checkedInput = [... inputs].find((input) => input.checked);
  return checkedInput.value
}

//Funcion para obtener los values de los inputs de tipo checkbox

const getCheckedOptions = (inputs) => {
  const checkOptions = [... inputs].filter((input)=>input.checked).map((opt) => opt.value)
  return checkOptions
}

//Formato para las cards
//Funcion para setear el color segun la cantidad de personas
const setCardBackground = (quantity) => {
    return quantity == `Más de 10` 
    ? "violet-card"
    : quantity == `Entre 5 y 10`
    ? `red-card`
    : `black-card`
}

//Funcion para setear el color del spam de horario.

const setTimeBackground = (quantity) => {
  return quantity == `Menos de 5` 
  ? `red-card` : `back-card`
}

//Funcion para setear el color de fondo del spam de date

const setDataBackground = (quantity) => {
  return quantity == `Más de 10` ? `red-card` : `violet-card`
}

//Funcion para setear la imagen que va a acompañar las card segun las personas

const setCardImg = quantity => {
  return quantity == `Más de 10` 
  ? `./img/server.png`
  : quantity == `Entre 5 y 10`
  ? `./img/laptop.png`
  : `./img/lupa.png`
}

//Funcion para setear la clase de la imagen que acompaña la card

const setCardImgClass = (quantity) => {
    return quantity == `Más de 10` 
    ? `server-img`
    : quantity == `Entre 5 y 10`
    ? `laptop-img`
    : `lupa-img`
}

//Manejo de fechas
const getNextDay = () => {
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)  
  return tomorrow
}

//Funcion para formatear el numero de fecha
const padTo2Digits = num => {
  return num.toString().padStart(2,`0`)
}

//Funcion para que en base a una fecha obtengamos año,mes y dia 
const getTomorrowDate = () =>{
  let year = getNextDay().getFullYear()  
  let month =  getNextDay().getMonth()+1
  let day = getNextDay().getDate()
  return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`;
};

const setDateIntervals = ( ) => {
  dateInput.value = getTomorrowDate();
  dateInput.min = getTomorrowDate();
  dateInput.max = getNextDay().getFullYear() + `-12-31`
}


//Checkeamos las validaciones

//Funciones para checkear campo vacio

const IsEmpty = value => !value.length;

//Chequeamos si el email es valido
const isEmailValid = email =>{
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return re.test(email)
}

//Chequeamos si el celular es valido(10 num)
const isPhoneValid = phone => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
};

// Chequeamos si la fecha es valida
const isValidDate = date =>{
    const currentDate = new Date()
    const turnDate = new Date(date)
    return date.length && currentDate < turnDate
}

//Funciones para mostrar errores

const ShowError = (input,message) =>{
    const formField = input.parentElement;
    formField.classList.add(`error`);
    const error = formField.querySelector(`small`)
    error.textContent = message
}

const ClearError = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    const error = formField.querySelector('small');
    error.textContent = '';
};
