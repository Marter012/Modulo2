//Traer los elemtnos necesarios de html
const tbody = document.querySelector(`.tbody`);
const prevBIN = document.querySelector(`.left`);
const nextBIN = document.querySelector(`.right`);
const pageNumber = document.querySelector(`.page-number`);
const form = document.querySelector(`.form`);
const searchInput = document.querySelector(`.input-search`);
const top100 = document.querySelector(`.top-btn`);
const btnContainer = document.querySelector(`.pagination`);

const nFormatter = (num, digits) => {
    const symbol = [
        {value : 1 , symbol: ``},
        {value : 1e3 , symbol: `K`},
        {value : 1e6 , symbol: `M`},
        {value : 1e9 , symbol: `MM`},
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = symbol.slice().reverse().find(item => {return num >= item.value})
    return item ? (num / item.value).toFixed(digits).replace(rx,`$1`) + item.symbol : `0`
}

const renderCoin = (coin) => {
    const {rank, market_cap_usd,name,symbol,price_usd,volume24,percent_change_24h,percent_change_7d} = coin;
    return `
        <tr>
            <td>#${rank} </td>
            <td class="coin-title">${name} (${symbol})</td>
            <td>$${price_usd} </td>
            <td>$${nFormatter(market_cap_usd)} </td>
            <td>$${formatearNumero(volume24)} </td>
            <td><span class="${percent_change_24h < 0 ? `down` : `up`} ">${percent_change_24h} %</span></td>
            <td><span class="${percent_change_7d < 0 ? `down` : `up`}">${percent_change_7d}%</span></td>
        </tr>
    `
};

const renderCoins = (coins,current) => {
    if(!coins.length){
        tbody.innerHTML = `<h1>No se encontraros resultados, intentelo nuevamente</h1>`
        top100.classList.remove(`hidden`);
        btnContainer.classList.add(`hidden`);
        form.reset();
        return;
    }
    btnContainer.classList.remove(`hidden`);
    tbody.innerHTML= coins[current].map(renderCoin).join(``);
};

const resetCount = coins => {
    prev = coins.prev;
    current = coins.current;
    next = coins.next;
    total = coins.total;
    results= coins.results;
}

//Funcion para agregar o sacar clases de btn

const diseablePreviousBTN = prev => {
    if(prev == null){
        prevBIN.classList.add(`disabled`);
    }else{
        prevBIN.classList.remove(`disabled`)
    }
}

const diseableNextBTN = (next,total) => {
    if(next == total){
        nextBIN.classList.add(`disabled`);
    }else{
        nextBIN.classList.remove(`disabled`)
    }
}

//Funcion para formatear los numeros y hacerlos mas legibles.
const formatearNumero = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `.`);
}

const loadCoins = async (e) => {
    e.preventDefault();
    const searchedValue = searchInput.value.trim();
    let coins = await requestCoins(searchedValue);
    resetCount(coins)


    if(searchedValue){
        top100.classList.remove(`hidden`);
        form.reset();
    }else{
        top100.classList.add(`hidden`)
    }

    pageNumber.innerHTML = current + 1;
    renderCoins(results,current);
    diseablePreviousBTN(prev);
    diseableNextBTN(next,total);

    //Logica del boton next

    nextBIN.addEventListener(`click`, (e) => {
        e.stopImmediatePropagation();
        if(next == total) return;
        prev = current;
        current += 1;
        next += 1;
        renderCoins(results,current);
        pageNumber.innerHTML = current + 1;
        diseablePreviousBTN(prev);
        diseableNextBTN(next,total);
    })

    //Logica del boton prev

    prevBIN.addEventListener(`click`,(e)=> {
        e.stopImmediatePropagation();
        if(prev == null) return;
        current -= 1;
        prev = prev == 0 ? null : prev -1;
        next -= 1        
        pageNumber.innerHTML = current + 1;
        renderCoins(results,current);
        diseablePreviousBTN(prev);
        diseableNextBTN(next,total);
    })
};



//Funcion inicializadora

const inti = () => {
    window.addEventListener(`DOMContentLoaded`, loadCoins)
    form.addEventListener(`submit`,loadCoins)
    top100.addEventListener(`click`,loadCoins);
};

inti();