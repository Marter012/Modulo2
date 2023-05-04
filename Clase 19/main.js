//traernos todos los elementos del html

const form = document.getElementById(`form`);
const cityInput = document.querySelector(`.search-input`);
const cardContainer = document.querySelector(`.card-container`);
const waitMsg = document.querySelector(`.wait`);

//Guardar el array de las ciudades 
let cities = JSON.parse(localStorage.getItem(`cities`)) || [] 

//Funcion para guardar en el localStorage

const savelocalStorage =  citiesList =>{
    localStorage.setItem(`cities`, JSON.stringify(citiesList))
};


//Funcion para convertir Kelvin  CELSIUS

const convertCelsius = kelvin =>{
    let celsius = Math.round(kelvin - 273.15)
    return celsius
}

//Funcion para renderizar html

const renderCity = city => {
    const imageName = city.weather[0].icon;
    return `
        <div class="card-clima animate">
            <i class="fa-solid fa-x close" data-id="${city.id}"></i>
            <div class="clima-info">
              <h2 class="info-title">${city.name} </h2>
              <p class="info-subtitle">${city.weather[0].description} </p>
              <div class="info-temp">
                <span class="temp">${convertCelsius(city.main.temp)}º</span>
                <span class="st">${convertCelsius(city.main.feels_like)}º ST</span>
              </div>
            </div>
            <div class="clima-img">
              <img src=" https://openweathermap.org/img/wn/${imageName}@2x.png" alt="" />
            </div>
            <div class="clima-temp">
              <div class="clima-max-min">
                <span class="clima-max"
                  ><i class="fa-solid fa-arrow-up-long"></i>Max: ${convertCelsius(city.main.temp_max)} </span
                >
                <span class="clima-min"
                  ><i class="fa-solid fa-arrow-down-long"></i>Min: ${convertCelsius(city.main.temp_min)}</span
                >
              </div>
              <span class="clima-humedad">${city.main.humidity} Humedad</span>
            </div>
          </div>
    `
}

//Funcion para la logica de renderizacion

const renderCitiesList = citiesList => {
    cardContainer.innerHTML = citiesList.map(city => renderCity(city)).join("")
}

//Funcion buscar ciudad

const searchCity = async e => {
    e.preventDefault();
    const searchedCity = cityInput.value.trim();
    //Crear alerta si esta vacio
    if(searchedCity == ""){
        alert(`Por favor ingresa una ciudad.`)
        return;
    }

    //vamos a pasarle el valor del input a la funcion requesCity
    const fetchedCity = await requestCity(searchedCity);

    // ALERTA SI NO EXISTE LA CIUDAD. / Verificar que la ciudad no se repita.
    if(!fetchedCity.id){
        alert(`La ciudad ingresada no existe`)
        form.reset();
        return;
    }else if (cities.some(city => city.id === fetchedCity.id)){
        alert(`Ya estamos mostrando el clima de esa ciudad`)
        form.reset();
        return
    }

    
    console.log(fetchedCity)
    cities = [fetchedCity, ... cities];
    renderCitiesList(cities);
    savelocalStorage(cities);
    hideWaitMsg(cities);
    form.reset()
};

//Funcion para ocultar el ingrese una ciudad

const hideWaitMsg = citiesList => {
    if(citiesList.length !== 0){
        waitMsg.classList.add(`hidden`)
        return;
    }
    waitMsg.classList.remove(`hidden`)
}

//Funcion para eliminar la ciudad

const removeCity = e => {
    if(!e.target.classList.contains(`close`))return;
    const filterId = Number(e.target.dataset.id);
    if(window.confirm(`¿Estas seguro que queres eliminar esta card de clima?`)){
        cities = cities.filter(city => city.id !== filterId)
        renderCitiesList(cities);
        savelocalStorage(cities);
        hideWaitMsg(cities);
    }

}

//Funcion general para llamar todo

const init = () => {
    renderCitiesList(cities);
    hideWaitMsg(cities);
    form.addEventListener(`submit`, searchCity);
    cardContainer.addEventListener(`click`,removeCity)
};

init();
