//Nos traemos los elementos necesarios

const nameInput = document.getElementById(`name`)
const surnameInput = document.getElementById(`surname`)
const dateInput = document.getElementById(`date`)
const hourInput = document.getElementById(`hour`)
const emailInput = document.getElementById(`email`)
const phoneInput = document.getElementById(`phone`)
const radioInputs = document.querySelectorAll(`input[name="quantity"]`)
const checkboxInputs = document.querySelectorAll(`input[name="checkbox"]`)
const aboutInput = document.getElementById(`message`)

//En este archivo tendremos todas la validaciones de los inputs.

//Chequear nombre

const CheckTextInput = input =>{
    let valid = false;
    const content = input.value.trim();
    if(IsEmpty(content)){
        ShowError(input,`El nombre es obligatorio`)
    }else {
        ClearError(input)
        valid = true
    }
    return valid
}

//Chequear Email
const CheckEmail = () => {
    let valid = false;
    const emailValue = emailInput.value.trim();
    if(IsEmpty(emailValue)){
        ShowError(emailInput,`El email es obligatorio`)
    }else if (!isEmailValid(emailValue)){
        ShowError(emailInput,`El email es valido`)
    }else{
        ClearError(emailInput)
        valid = true
    }
    return valid
}

//Chequear Telefomo
const CheckPhone = () => {
    let valid = false;
    const phoneValue = phoneInput.value.trim();
    if(!isPhoneValid(phoneValue)){
        ShowError(phoneInput,`El telefono no es valido`)
    }else {
        ClearError(phoneInput);
        valid = true;
    }
    return valid;
}

//Chequear Fecha

const checkDate = () => {
    let valid = false ;
    const dateValue = dateInput.value;
    if(!isValidDate(dateValue)){
        ShowError(dateInput,`La fecha ingresada no es valida`)
    }else {
        ClearError(dateInput);
        valid = true;
    };
    return valid;
}


//Funcion para checkear si el formmulario es valido

const isValidForm = () =>{
    const isValidName = CheckTextInput(nameInput);
    const isValidUsername = CheckTextInput(surnameInput);
    const isValidPhone = CheckPhone();
    const isValidEmail = CheckEmail();
    const isValidDate = checkDate();
    return (isValidName && isValidUsername && isValidPhone&& isValidEmail&& isValidDate)
}
