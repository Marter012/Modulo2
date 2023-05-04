const requestCoins = async (value) => {
    const baseURL = `https://api.coinlore.net/api/tickers/?start=0&limit=100`
    const res = await fetch(baseURL);
    const json = await res.json();
    const data = json.data;

    const results = value 
        ? divideArray(data.filter(coin => coin.name.toLowerCase().includes(value.toLowerCase())
                ),10
            )
        :divideArray(data,10);
            
    console.log(results)
        //Retornamos un objeto con 
        //Results: con los resultados
        //total: el largo del array
        //current : el elemento actual de larray que renderizamos.
        //prev : paginacion previa.
        //next : paginacion siguiente.
    return {
        results : results,
        total : results.length,
        current : 0,
        prev : null,
        next: 1,
        
    }
}

function divideArray (arr,size){
    //Declaramos un array vacio.
    let chunk = [];
    for( let i = 0; i< arr.length ; i += size){
        //push al array vacio, entrando desde lel indice del loop
        chunk.push(arr.slice(i, i + size))
    }
    return chunk;
}
