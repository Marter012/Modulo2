//Traernos las cosas necesarias del html.

const caja= document.getElementById(`caja`);
const loader = document.querySelector(`.pokeballs-container`);
const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

//Definimos la variable de isFetching para activarla cando estemos 
//haciendo una llamada y un objeto que va almacenar la siguiente llamda 
//de la api.
let isFetching = false;
const nextURL = {
    next : null,
}

//Funcion para renderizar el pokemon
const renderPokemon = pokemon => {
    const {id,name,sprites,height,weight,types} = pokemon;
    return`
    <div class="poke">
        <img src="${sprites.other.home.front_default}" alt="name">
        <h2>${name.toUpperCase()} </h2>
        <span class="exp">EXP: ${pokemon.base_experience} </span>
        <div class="tipo-poke">
            ${types.map(tipo => {
                return`<spam class="${tipo.type.name} poke__type">${tipo.type.name} </spam>`
            })}
        </div>
        <p class="id-poke">#${id} </p>
        <p class="heigth-poke">#${height/10}m</p>
        <p class="weigth-poke">#${weight/10}kg</p>
    </div>
    `
}   

//Funcion para renderizar las cards
const RenderPokemonList = pokelist => {
    const cards = pokelist.map(pokemon => {
        return renderPokemon(pokemon);
    }).join("")
    caja.innerHTML += cards;
} 
    


//Crear la funcion para traer la data de los pokemones
const fetchPokemons = async () => {
    try {
        const res = await fetch(`${baseUrl}?offset=0&limit=8`);
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

//
const loadAndPrint = pokemonlist => {
    loader.classList.add(`show`);
    setTimeout(() => {
        loader.classList.remove(`show`);
        RenderPokemonList(pokemonlist);
        isFetching = false;
    }, 1000);
}

const init = () => {
    window.addEventListener(`DOMContentLoaded`, async() => {
        let {next,results} = await fetchPokemons();
        
        nextURL.next = next;
        
        const URLS = results.map(pokemon => pokemon.url);
        console.log(URLS);

        const infoPokemones = await Promise.all(
            URLS.map(async url => {
                const nextPokemons = await fetch(url);
                return await nextPokemons.json();
                })
            );
            RenderPokemonList(infoPokemones);
    });
    //Cuando scrolleemos 
    //  1. Traernos de elemento document,documentElement (devuelve el elemento 
    //que este en el elemento raiz del documento.)
    //ScrollTop : ver MDN.
    //ClientHeight : ver MDN.
    //ScrollHeight : ver MDN.
    //  2.Creamos una variable bottom, que indica si estamos al final o no de la paguina
    //si la suma entre el valor entre el desplazamiento hacia arraiba y la suma con el
    //vierport es mayor o igual a la altura del conenido -1(puede varirar segun cuando 
    //querramos que se haga el fetch)
    //  3.
    window.addEventListener(`scroll`, async () => {
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement;

        const bottom = scrollTop + clientHeight >= scrollHeight - 1;

        if(bottom && !isFetching){
            isFetching = true;
            console.log(`Llamamos a la api`)
            const nextPokemons = await fetch(nextURL.next);
            const {next,results} = await nextPokemons.json();
            nextURL.next = next;
            const URLS = results.map(pokemon => pokemon.url);
            console.log(URLS);

            const infoPokemons = await Promise.all(
                URLS.map(async url => {
                    const nextPokemons = await fetch(url);
                    return await nextPokemons.json();
                })
            );
            loadAndPrint(infoPokemons)
        }
    })
};

init();