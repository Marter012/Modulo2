const pedirPokemon = async (buscarValor) => {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const res = await fetch(baseUrl  + buscarValor)
    const data = res.json();
    return data;
}