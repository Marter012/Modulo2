// 👉 Crear un input de tipo number y un botón tal como hicimos en las entregas anteriores.
// 👉 Con el número que se ponga, hacer una llamada a la pokeapi y renderizar una card con 
// los datos del Pokémon encontrado. Lo mínimo que deberá tener la card es el nombre, su tipo 
// principal (pueden intentar poner todos) , su altura y peso (expresada en metros y kilogramos,
//      tendrán que dividir el alto y peso que les llegue por 10), y una de sus imágenes.

// 👉 En caso de que no se encuentre ningún pokemon, renderizar un mensaje de error. En caso de 
// que no se ingrese un número, renderizar otro mensaje de error acorde.

const resultContainer = document.getElementById(`result-container`);
const form = document.getElementById(`form`);
const input = document.querySelector(`.form-input`)

const fetchPokemon = async (number) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
        const data = await res.json()
        return data
    } catch {
        return null
    }
}


const renderPokemon = (pokemon) => {
    const {name,sprites,height,weight,types} = pokemon
    return `
        <div class="poke">
           <img src="${sprites.other.home.front_default} " alt="">
           <h2>Nombre:${name.toUpperCase()} </h2>
           <div>
           ${types.map(tipo => {
            return `<span class="${tipo.type.name}">${tipo.type.name} </span>`
           }).join("")}
            
           </div>
           <p>Altura: ${height /10} </p>
           <p>Peso: ${weight / 100} </p>
        </div>
    `
}

const renderResult = async(pokemon) => {
    const newPokemon = await pokemon
    if(!newPokemon){
        resultContainer.innerHTML = `
        <div class="pokemon-container">
            <i></i>
            <h2 class="error-title">No existe un pokemon con ese numero en la pokedex.</h2>
            <p>Realice nuevamente la busqueda.</p>
        </div>
        `
    }else{
        resultContainer.innerHTML = renderPokemon(newPokemon)
    }
}


const showEmptyError = () => {
    resultContainer.innerHTML = `
        <div class="pokemon-container">
                <i></i>
                <h2 class="error-title">Por favor, ingrese un numero para que podamos buscar al pokemon en la pokedex.</h2>
        </div>
    `;
}


const submitSearch = (e) => {
    e.preventDefault();
    const searchedValue = input.value;
    if(!searchedValue){
        showEmptyError()
        return
    }
    const searchedPokemon = fetchPokemon(Number(searchedValue));
    renderResult(searchedPokemon);
    form.reset()
};

const init = () => {
    form.addEventListener(`submit`,submitSearch)
};

init();