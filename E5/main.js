// Buenas, ¿Cómo están? 🎓

// En Nucba consideramos que era una buena idea tener un segundo modelo de negocio y por eso entre todo el equipo
//  decidimos que la mejor idea era abrir una pizzería.

// Como queremos que todos en Nucba sean parte de este proyecto, hemos decidido que ustedes, los alumnos, podían 
// formar parte de la experiencia y realizar el maquetado de la Landing Page y desarrollar las funcionalidades de este nuevo negocio.🙌

// Para esta entrega, el equipo de diseño de Nucba les preparo las pantallas que queremos para la página de este 
// emprendimiento, y será tarea de ustedes y su equipo replicar el diseño y entregar como producto final la landing 
// page terminada y funcional.

// Les dejamos el link al figma del proyecto del cual podrán sacar los assets necesarios para realizar este trabajo.
// Al ser un trabajo grupal, el plazo que tendrán para realizarlo es de dos semanas, tiempo suficiente para que puedan
//  dividirse las tareas y definan como organizarse y ejecutar este desafío.


// Además, queremos mencionarles que confiamos en ustedes para sacar adelante este proyecto y que disfruten esta nueva 
// experiencia de trabajar en grupo, ya que esta es solo la primera experiencia grupal que tendrán en este rubro y es 
// fundamental que aprendan a acoplarse y organizarse en ese aspecto ya desde esta etapa temprana de su desarrollo como developers.

// Les dejamos el link a una documentación copada en la plataforma de Nucba acerca de trabajo en equipo 👉 Documentación Teamwork.

// ¿Nos vemos en React? 😈

// Los requisitos son:
// 👉 Realizar el maquetado de la página
// 👉 Renderizar HTML desde JS (Crear y renderizar los productos en base a un array de productos).
// 👉 Deberán utilizar localStorage, para persistir datos en el sitio.
// 👉 Los productos deben poder agregarse al carrito de compras y se deben poder manipular las cantidades del producto,
//  borrar productos y actualizar dinámicamente el total de la compra.
// 👉 Deberá poderse confirmar la compra( mediante un alert o, si se animan, haciendo un modal) y luego de confirmarse 
// limpiar el carrito de compras.
// 👉 Los filtros de productos deben ser funcionales (Renderizar solo los productos de esa categoría determinada,
//      mostrar cual es el filtro activo).
// ﻿
// ﻿👉 Una vez que esté finalizado, pueden subirlo a github y compartirlo por discord para mostrarlo al resto de la comunidad. 

// Dentro del repositorio deben crear un readme en el cual figure el nombre y apellido de los que participaron en el desarrollo del mismo.

// 👉 Si tienen dudas, vayan directamente a consultar en el servidor de Discord (recordá las reglas para poder hacer 
//     consultas o participar del canal privado).*

// #HappyCoding 🚀.

/*------------------------------------------------------------------------------------------------------------------------------------*/
const cajaRecomendacion = [
    {   
        img:`./img/3.png`,
        name : "Bennazianna",
        descrip: "La más completa.",
        precio: "3650",
        id:1,
    },
    {   
        img:`./img/4.png`,
        name : "Tronco-Pizza",
        descrip: "Para todo el dia.",
        precio: "870",
        id:2,
    },
    {   
        img:`./img/5.png`,
        name : "Papas||Provenzal",
        descrip: "Van como piña",
        precio: "360",
        id:3,
    }
]

const cajaCategorias = [
    {
        img: `./img/2.png`,
        p:`Populares`,
        id:4,
    },
    {
        img: `./img/1.png`,
        p:`Pizzas`,
        id:5,
    },
    {
        img: `./img/6.png`,
        p:`Hamburguesas`,
        id:6,
    },
    {
        img: `./img/7.png`,
        p:`Nakupi`,
        id:7,
    },
    {
        img: `./img/8.png`,
        p:`Wraps`,
        id:8,
    },
    {
        img: `./img/9.png`,
        p:`Mexican Food`,
        id:9,
    },{
        img: `./img/10.png`,
        p:`Batidos`,
        id:10,
    }
    
]
const cajaPopulares =[
    {
        img :`./img/11.png`,
        name:`La Mr.Pit`,
        descrip:`Solo para expertos`,
        precio:`350`,
        id:11,
    },
    {
        img :`./img/12.png`,
        name:`¡Q Jamone!`,
        descrip:`C/jamon crudo`,
        precio:`350`,
        id:12,
    },
    {
        img :`./img/13.png`,
        name:`La Charly García`,
        descrip:`¡Basta!`,
        precio:`380`,
        id:13,
    },
    {
        img :`./img/14.png`,
        name:`La Maradona`,
        descrip:`¡Eterna!`,
        precio:`450`,
        id:14,
    },
    {
        img :`./img/15.png`,
        name:`Picantovich`,
        descrip:`Pica 2 veces`,
        precio:`750`,
        id:15,
    },
    {
        img :`./img/16.png`,
        name:`La Hasbulla`,
        descrip:`En honor al 1`,
        precio:`990`,
        id:16,
    },
    {
        img :`./img/17.png`,
        name:`Leo Messi`,
        descrip:`¡De pie señores!`,
        precio:`10`,
        id:17,
    },
    {
        img :`./img/18.png`,
        name:`Nick Gi`,
        descrip:`La que desaparece`,
        precio:`Gratis`,
        id:18,
    }
]
let buys = JSON.parse(localStorage.getItem(`buys`)) ||[];
/*------------------------------------------------------------------------------------------------------------------------------------*/
const Ocultar = () => {
    menu.classList.add(`hidden`)
}
const Mostrar = () => {
    menu.classList.remove(`hidden`)
}
const holis = (cajas,id) => {
    const data=(cajas.filter(caja => caja.id == id))
    buys = [... buys,data[0]]     
    renderMenus(buys); 
    savelocalStorage();
    Mostrar()
}
/*------------------------------------------------------------------------------------------------------------------------------------*/
const renderMenu = (buy) =>{       
    const {img,name,descrip,precio} = buy
    return`
        <div class="cont-recomendacion-div chica">
            <img src="${img} " alt="">
            <ul>
                <li>${name}</li>
                <li>${descrip}</li>
                <li>$${precio}</li>
            </ul>
            <div class="cont-recomendacion icon">
                <i class="fa-solid fa-minus" style="color: #ffffff;"></i>
                <input type="number" value="1" id="">
                <i class="fa-sharp fa-solid fa-plus" style="color: #ffffff;"></i>
            </div>
        </div>
    `
}
const renderMenus = buys => {
    Sumar(buys);
    cajaLista.innerHTML = buys.map(buy => renderMenu(buy)).join("");
    ;
}
const Sumar = buys => {
    let suma1 = 0;
    for(i = 0 ; i < buys.length; i++){
        suma1 = suma1 + Number(buys[i].precio)
    }
    suma.innerHTML = `$${suma1}`;
    total.innerHTML = `$${suma1}`;
}
const savelocalStorage = () =>{
    localStorage.setItem(`buys`, JSON.stringify(buys))
};
/*------------------------------------------------------------------------------------------------------------------------------------*/
const CreateReco = (caja) => {
    const {img,name,descrip,precio,id} = caja;
    return `
            <div class="cont-recomendacion-div">
                <img src="${img} " alt="">
                <ul>
                    <li>${name}</li>
                    <li>${descrip}</li>
                    <li>$${precio}</li>
                </ul>
                <button onclick="holis(cajaRecomendacion,${id})">Agregar</button>
            </div>
    `
}
const RenderReco = cajas => {
    cajaReco.innerHTML = cajas.map(caja => CreateReco(caja)).join("");
}
/*------------------------------------------------------------------------------------------------------------------------------------*/
const CreateCate = (caja) =>{
    const {img,p,id} = caja;
    return `
            <div class="cont-categorias-item imgCate" onclick="holis(cajaCategorias,${id})">            
                <div >
                    <img src="${img}" alt="">
                    <p>${p} </p>
                    <hr>
                </div>
            </div>
    `
}
const RenderCate = cajas => {
    cajaCate.innerHTML = cajas.map(caja=>CreateCate(caja)).join("");
}
/*------------------------------------------------------------------------------------------------------------------------------------*/
const CreatePopu = caja => {
    const {img,name,descrip,precio,id} = caja;
    return`
            <div class="cont-popular-div-caja">
                <img src="${img} " alt="">
                <div class="cont-popular-div-caja-div">
                    <div>
                        <p>${name} </p>
                        <p>${descrip}</p>
                        <p>$${precio}</p>
                    </div>                
                    <button onclick="holis(cajaPopulares,${id})">Agregar</button>
                </div>
            </div>
    `
}
const RenderPopu = cajas => {
    cajaPopu.innerHTML = cajas.map(caja => CreatePopu(caja)).join(``);
}
/*------------------------------------------------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------------------------------------------------*/

const init =  () => {
    RenderReco(cajaRecomendacion);
    RenderCate(cajaCategorias);
    RenderPopu(cajaPopulares); 
    renderMenus(buys);
};

init()
