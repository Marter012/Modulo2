//Traer elementos del html

const form = document.getElementById(`form`)
const nameInput = document.querySelector(`#username`)
const emailInput = document.querySelector(`#email`)
const passInput = document.querySelector(`#password`)
const telInput = document.querySelector(`#telefono`)

//Chequear Nombre de usuario
const checkUsername = () =>{
    let valid = false
    const min = 3;
    const max = 25;
    const username = nameInput.value.trim()
    //si el campo esta vacio, mostrar error, llamando a la funcion showError
    if(!isEmpty(username)){
        showError(nameInput,`El nombre es obligatorio`)
    } else if (!isBetween(username.length,min,max)){
        showError(nameInput,`El nombre debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccesse(nameInput)
        valid = true
    }
    return valid
}

//Chequear el Email
const checkEmail = () => {
    let valid = false
    const emailValue = emailInput.value.trim()
    if(!isEmpty(emailValue)){
        showError(emailInput,`El email es obligatorio`)
    }else if(!isEmailvalid(emailValue)){
        showError(emailInput,`El Email no es valido`)
    }else{
        showSuccesse(emailInput);
        valid = true
    }
    return valid
}

//Chequar Contraseña
const checkPass = () => {
    let valid = false
    const password = passInput.value.trim()
    if(!isEmpty(password)){
        showError(passInput,`La contraseña es obligatoria`)
    }else if (!isPassSecura(password)){
        showError(passInput,`La contraseña no es segura`)
    }else{
        showSuccesse(passInput)
        valid = true
    }
    return valid
}

//Chequear telefono
const checkTel = () => {
    let valid = false
    const telValue = telInput.value.trim()
    if(!isTelValido(telValue)){
        showError(telInput,`El telefono no es valido`)
    }else{
        showSuccesse(telInput)
        valid = true
    }
    return valid
}

//Funcion para verificar si se requiere un campo, true con campo vacio.
const isEmpty = value => value == "" ? false : true;

//Funcion para verificar si la longitud del campo esta dentro de un min y max.
const isBetween = (length,min,max) =>    length < min || length > max ? false : true;

//Funcion para validar el Email, devuelve true o false
const isEmailvalid = email => {
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    return re.test(email)
}

//Chequear contraseña, minimo 8 caracteresm minuscula,mayuscula y simbolo.
const isPassSecura = pass => {
    const re =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return re.test(pass)
}

//Chequear telefono
const isTelValido = tel => {
    const re = /^[0-9]{10}$/;
    return re.test(tel)
}

//Funcion para mostrar un error, recibe el input y el mensaje de error.
const showError = (input,message) => {
    const formField = input.parentElement;
    formField.classList.remove(`success`)
    formField.classList.add(`error`)
    const error = formField.querySelector(`small`)
    error.textContent = message;
}

//Funcion para mostrar exito, recibe el input
const showSuccesse = input => {
    const formField = input.parentElement;
    formField.classList.remove(`error`);
    formField.classList.add(`success`)
    const error = formField.querySelector(`small`)
    error.textContent = "";
}

//Event listener para enviar y chequear que tdo sea valido
form.addEventListener(`submit`, e => {
    
    //guardar estado en variables
    let isUsernamevalid = checkUsername();
    let isEmailvalid = checkEmail();
    let isPassValid = checkPass();
    let isTelValid = checkTel();

    console.log(isUsernamevalid,isEmailvalid,isPassValid,isTelValid)
    //Vamo a guardar todos los estados en una sola variable
    let isFormValid = isUsernamevalid && isEmailvalid && isPassValid && isTelValid;
    //Si todos los campos son vlaidos, enviamos el formulario.
    if (isFormValid){
        form.submit()
        alert(`Exito`)
    }
})

//Debonce

const debounce = (fn, delay = 500)=>{
    let timeoutId;
    return (... args)=> {
        //Cancelar el timer anterior
        if(timeoutId) clearTimeout(timeoutId)
        //Setear un nuevo timer
        timeoutId = setTimeout(() => {
            fn.apply(null,args);
        },delay);
    }
}

//Agregar un addEventlinster 
form.addEventListener(`input`,
    debounce(e => {
        switch(e.target.id){
            case `username` :
                checkUsername();
                break;
            case `email`:
                checkEmail();
                break;
            case `password`:
                checkPass();
                break;
            case `tel`:
                checkTel();
            break;
    }
}))