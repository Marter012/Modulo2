const productsData = [
    {
      id: 1,
      name: 'Golden Messi',
      bid: 6.89,
      user: 'thetroncous',
      category: 'futbol',
      userImg: './Img/user.png',
      cardImg: './Img/products/goldenmessi.png',
    },
    {
      id: 2,
      name: 'Diego Maradona',
      bid: 5.89,
      user: 'kirik8',
      category: 'futbol',
      userImg: './Img/user.png',
      cardImg: './Img/products/diego.png',
    },
    {
      id: 3,
      name: 'L10nel Messi',
      bid: 4.89,
      user: 'FD10S',
      category: 'futbol',
      userImg: './Img/user.png',
      cardImg: './Img/products/beardedmessi.png',
    },
    {
      id: 4,
      name: 'M. Schumacher',
      bid: 3.67,
      user: 'Urastream',
      category: 'autos',
      userImg: './Img/user.png',
      cardImg: './Img/products/schumacher.png',
    },
    {
      id: 5,
      name: 'Fernando Alonso',
      bid: 4.52,
      user: 'Gulineta',
      category: 'autos',
      userImg: './Img/user.png',
      cardImg: './Img/products/alonso.png',
    },
    {
      id: 6,
      name: 'Dominic Toretto',
      bid: 7.33,
      user: 'HardBena',
      category: 'autos',
      userImg: './Img/user.png',
      cardImg: './Img/products/toretto.png',
    },
    {
      id: 7,
      name: 'Donald Trump',
      bid: 2.2,
      user: 'ThingyCake',
      category: 'politicos',
      userImg: './Img/user.png',
      cardImg: './Img/products/trump.png',
    },
    {
      id: 8,
      name: 'Xi Jinping',
      bid: 1.12,
      user: 'NickyG',
      category: 'politicos',
      userImg: './Img/user.png',
      cardImg: './Img/products/jinping.png',
    },
    {
      id: 9,
      name: 'Vladimir Putin',
      bid: 0.5,
      user: 'ThingyBit',
      category: 'politicos',
      userImg: './Img/user.png',
      cardImg: './Img/products/putin.png',
    },
    {
      id: 10,
      name: 'Michael Jackson',
      bid: 8.35,
      user: 'LilKenny',
      category: 'musica',
      userImg: './Img/user.png',
      cardImg: './Img/products/jackson.png',
    },
    {
      id: 11,
      name: 'Bruno Mars',
      bid: 8.65,
      user: 'Sharkenetta',
      category: 'musica',
      userImg: './Img/user.png',
      cardImg: './Img/products/mars.png',
    },
    {
      id: 12,
      name: 'Bad Bunny',
      bid: 9.29,
      user: 'MG9',
      category: 'musica',
      userImg: './Img/user.png',
      cardImg: './Img/products/bunny.png',
    },
    {
      id: 13,
      name: 'Keanu Reeves',
      bid: 8.27,
      user: 'MrMoustache',
      category: 'peliculas',
      userImg: './Img/user.png',
      cardImg: './Img/products/reeves.png',
    },
    {
      id: 14,
      name: 'Jason Stathan',
      bid: 5.55,
      user: 'PasquSaw',
      category: 'peliculas',
      userImg: './Img/user.png',
      cardImg: './Img/products/stathan.png',
    },
    {
      id: 15,
      name: 'Angelina Jolie',
      bid: 7.46,
      user: 'CamiCrow',
      category: 'peliculas',
      userImg: './Img/user.png',
      cardImg: './Img/products/jolie.png',
    },
  ];
  
  // Para hacer la paginacion de Ver Más
  // Usamos el array de productos y lo dividimos en arrays de size elementos
  const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0 ; i < productsData.length ; i+= size){
        dividedProducts.push(productsData.slice(i,i+size))
    }
    return dividedProducts;
  }
  // Funcion para dividir los productos en arrays de 6 y manejar la paginacion
  const productsController = {
    dividedProducts : splitProducts(6),
    nextProductIndex : 1,
    productsLimit : splitProducts(6).length,
  }

//   console.log(productsController)