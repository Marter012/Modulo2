const form = document.querySelector(`#form`)
const inputUsuario = document.querySelector(`#usuario`)
const inputContraseña = document.querySelector(`#contraseña`)
const inputEmail = document.querySelector(`#email`)
const inputTel = document.querySelector(`#tel`)

// console.log(form)
// console.log(inputUsuario)
// console.log(inputContraseña)
// console.log(inputEmail)
// console.log(inputTel)

const checkUsuario = () => {
    let validacion = false
    const min = 3
    const max = 25
    const usuario = inputUsuario.value.trim()
    if(!vacio(usuario)){
        MostrarError(inputUsuario,`Obligatorio`)
    }else if (!largo(usuario.length,min,max)){
        MostrarError(inputUsuario,`Tiene que tener entre ${min} y ${max} caracteres`)
    }else{
        MostrarExito(inputUsuario)
        validacion = true
    }
    return validacion
}

const checkContraseña = () => {
    let validacion = false;
    const contraseña = inputContraseña.value.trim()
    if(!vacio(contraseña)){
        MostrarError(inputContraseña,`Obligatorio`)
    } else if(!segura(contraseña)){
        MostrarError(inputContraseña,`Su contraseña no es segura`)
    }else{
        MostrarExito(inputContraseña)
        validacion = true
    }
    return validacion
}
const checkEmail = () => {
    let validacion = false
    const email = inputEmail.value.trim()
    if(!vacio(email)){
        MostrarError(inputEmail,`Obligatorio`)
    }else if(!EmailValido(email)){
        MostrarError(inputEmail,`Email invalido`)
    }else{
        MostrarExito(inputEmail) 
        validacion = true
    }
    return validacion
}
const checkTel = () => {
    let validacion = false
    const tel = inputTel.value.trim()
    if(!TelValido(tel)){
        MostrarError(inputTel,`Telefono no valido`)
    }else{
        MostrarExito(inputTel)
        validacion = true
    }
    return validacion
}


const vacio = valor => valor == "" ? false : true;
const largo = (length,min,max) => length < min || length > max ? false : true;
const segura = contra => {
 const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
 return re.test(contra)
}
const EmailValido = email => {
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return re.test(email)
}
const TelValido = tel => {
    const re = /^[0-9]{10}$/;
    return re.test(tel)
}




const MostrarError = (input,mensaje) =>{
    const contenedorForm = input.parentElement;
    contenedorForm.classList.remove(`Exito`)
    contenedorForm.classList.add(`Error`)
    const error = contenedorForm.querySelector(`small`)
    error.textContent = mensaje
}

const MostrarExito = input => {
    const contenedorForm = input.parentElement;
    contenedorForm.classList.remove(`Error`)
    contenedorForm.classList.add(`Exito`)
    const error = contenedorForm.querySelector(`small`)
    error.textContent = ""
}

form.addEventListener(`submit`, e =>{
    e.preventDefault()
    let EsValidoUsuario = checkUsuario();
    let EsValidoContraseña = checkContraseña();
    let EsValidoEmail = checkEmail();
    let EsValidoTel = checkTel();

    let FormularioValido = EsValidoUsuario && EsValidoContraseña && EsValidoEmail && EsValidoTel
    if(FormularioValido){
        form.submit()
        alert(`Cuenta creada con exito`)
    }
})

const debounce = (fn, delay = 500) => {
    let timeoutId
    return (... args) => {
        if(timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(null,args)
        }, delay);
    }
}

form.addEventListener(`input`,
    debounce(e => {
        switch(e.target.id){
            case `usuario` :
                    checkUsuario();
                    break;
            case `contraseña`:
                    checkContraseña();
                    break;
            case `email`:
                    checkEmail();
                    break;
            case `tel`:
                    checkTel();
            break;
        }
}))