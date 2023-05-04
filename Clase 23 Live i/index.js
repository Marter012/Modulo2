//Contenedor de productos
const products = document.querySelector(`.products-container`);
const productCart = document.querySelector(`.cart-container`);
const total = document.querySelector(`.total`);
const categories = document.querySelector(`.categories`);
//HTML collection de todas la categorias.
const categoriesList = document.querySelectorAll(`.category`); 
const btnLoad = document.querySelector(`.btn-load`);
const buyBtn = document.querySelector(`.btn-buy`);
const cartBtn = document.querySelector(`.cart-label`);
const barsBtn = document.querySelector(`.menu-label`);
const cartMenu = document.querySelector(`.cart`);
const barsMenu = document.querySelector(`.navbar-list`);
const overlay = document.querySelector(`.overlay`);
const deleteBtn = document.querySelector(`.btn-delete`);
const successModal= document.querySelector(`.add-modal`);


//Setear el array para el carro.
let cart = JSON.parse(localStorage.getItem(`cart`)) || [];

//Funcion para guardar en el localStorage.
const saveLocalStorage = cartList => {
    localStorage.setItem(`cart`,JSON.stringify(cartList))
}


const renderProduct = product => {
    const {id,name,bid,user,userImg,cardImg} = product
    return `
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">
            <!-- top -->
            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>
            <!-- mid -->
            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>
            <!-- bot -->
            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="./Img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>
    `
}
//Funcion para renderizar los productos divididos con valor predefinido.
const renderDividedProducts = (index = 0) =>{
    products.innerHTML += productsController.dividedProducts[index].map(renderProduct).join("");
};

const renderFilteredProducts = (category) =>{
    const productList = productsData.filter((product) => product.category == category);
    products.innerHTML = productList.map((renderProduct)).join("");
}

//Funcion para renderizar los productos, recibe index y category con valores predefinidos.
const renderProducts = (index = 0,category = undefined) => {
    if(!category){
        renderDividedProducts(index);
        return
    }
    renderFilteredProducts(category)
}
//Logica de filtros
const changeShowMoreBtnState = category => {
    if(!category){
        btnLoad.classList.remove(`hidden`)
        return
    }
    btnLoad.classList.add(`hidden`)
}

const changeBtnActiveState = (selectedCategory) => {
    const categories = [... categoriesList];
    categories.forEach((categoryBtn) => {
        if(categoryBtn.dataset.category !== selectedCategory){
            categoryBtn.classList.remove(`active`)
            return
        }
        categoryBtn.classList.add(`active`)
    })
};

const changeFilterState = e => {
    const selectedCategory = e.target.dataset.category;
    changeBtnActiveState(selectedCategory);
    changeShowMoreBtnState(selectedCategory);
}

//Funcion para aplicar el filtro por categorias
const applyFilter = (e) => {
    if(!e.target.classList.contains(`category`)) return;
    changeFilterState(e);
    if(!e.target.dataset.category){
        products.innerHTML = "";
        renderProducts();
    }else{
        renderProducts(0,e.target.dataset.category)
        productsController.nextProductIndex = 1;
    }
}

//Funcion para chequear si estamos en el ultimo array de array de productos
const isLastIndexOf = () => productsController.nextProductIndex == productsController.productsLimit;

//Funcion para cargar mas productos
const ShowMoreProducts = () => {
    renderProducts(productsController.nextProductIndex)
    productsController.nextProductIndex++;
    if(isLastIndexOf()){
        btnLoad.classList.add(`hidden`)
    }
}

//Menu interface
//Logica para abrir y cerrar el carrito y mostrar el overlay

const toogleMenu = () => {
    barsMenu.classList.toggle(`open-menu`);
    if(cartMenu.classList.contains(`open-cart`)){
        cartMenu.classList.remove(`open-cart`)
        return
    }
    overlay.classList.toggle(`show-overlay`)
}
const toggleCart = () => {
    cartMenu.classList.toggle(`open-cart`);
    if(barsMenu.classList.contains(`open-menu`)){
        barsMenu.classList.remove(`open-menu`)
        return
    }
    overlay.classList.toggle(`show-overlay`)
}

//Funcion para cerrar menu y carrito si scrolleamos
const closeOnScroll = () => {
    if(!barsMenu.classList.contains(`open-menu`)&&
    !cartMenu.classList.contains(`open-cart`))return;
    barsMenu.classList.remove(`open-menu`);
    cartMenu.classList.remove(`open-cart`);
    overlay.classList.remove(`show-overlay`)
}

const closeOnClick = (e) => {
    if(!e.target.classList.contains(`navbar-link`))return;
    barsMenu.classList.remove(`open-menu`);
    overlay.classList.remove(`show-overlay`)
}


const closeOnOverlayClick = () => {
    barsMenu.classList.remove(`open-menu`);
    cartMenu.classList.remove(`open-cart`);
    overlay.classList.remove(`show-overlay`);
};

//Logica del carrito

const renderCartProduct = cartProduct => {
    const {id,img,name,bid,quantity} = cartProduct;
    return `
    <div class="cart-item">
        <img src=${img} alt="Nft del carrito" />
        <div class="item-info">
            <h3 class="item-title">${name}</h3>
            <p class="item-bid">Current bid</p>
            <span class="item-price">${bid} ETH</span>
        </div>
        <div class="item-handler">
            <span class="quantity-handler down" data-id=${id}>-</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler up" data-id=${id}>+</span>
        </div>
    </div>
    `;
};

const renderCart = () => {
    if(!cart.length){
        productCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`
        return;
    }
    productCart.innerHTML = cart.map(renderCartProduct).join("");

}

const getCartTotal = () => {
    return cart.reduce((acc,cur) => acc + Number(cur.bid) * cur.quantity ,0)
};

const showTotal = () => {
    total.innerHTML =`${getCartTotal().toFixed(2)} eTH`;
}

const disableBtn = (btn) => {
    if(!cart.length){
        btn.classList.add(`disabled`)
    }else{
        btn.classList.remove(`disable`)
    }
}

const createProductData = (id,name,bid,img) =>{
    return {id, name ,bid, img}
}

const isExistingCartProduct = product => {
    return cart.find(item =>  item.id == product.id);
}

const addUnitToProduct = product => {
    cart = cart.map((cartProduct) => {
        return cartProduct.id == product.id 
        ? {... cartProduct,quantity : cartProduct.quantity +1}
        : cartProduct;
    });
};

const createCartPorduct = product => {
    cart = [... cart,{... product,quantity : 1}]
}

const showSuccesModal = msg => {
    successModal.classList.add(`active-modal`);
    successModal.textContent = msg;
    setTimeout(() => {
        successModal.classList.remove(`active-modal`)
    }, 1500);
}

const checkCartState = () => {
    saveLocalStorage(cart)
    renderCart(cart);
    showTotal(cart);
    disableBtn(deleteBtn);
    disableBtn(buyBtn);
};

const addProduct = e =>{
    if(!e.target.classList.contains(`btn-add`))return;
    const {id,name,bid,img} = e.target.dataset;
    const product = createProductData(id,name,bid,img)
    if(isExistingCartProduct(product)){
        addUnitToProduct(product);
        showSuccesModal(`Se agregó una unidad del producto al carrito`)
    }else{
        createCartPorduct(product);
        showSuccesModal(`El producto se ha agregado al carrito.`)
    }
    checkCartState();
};

const removeProductFromCart = (existingProduct) => {
    cart = cart.filter(producto => producto.id !== existingProduct.id)
    checkCartState();
}

const substracProductUnit = (existingProduct) => {
    cart = cart.map(product => {
        return product.id === existingProduct.id 
        ? {... product, quantity: Number(product.quantity) - 1}
        : product;
    })
}

const handleMinusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id);
    if ( existingCartProduct.quantity === 1) {
        if(window.confirm(`Desea eliminar el producto?`)){
            removeProductFromCart(existingCartProduct);
        }
        return
    }
    substracProductUnit(existingCartProduct);
} ;

const handlePlusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id);
    addUnitToProduct(existingCartProduct);
};
 
const handleQuantity = (e) => {
    if(e.target.classList.contains(`down`)){
        handleMinusBtnEvent(e.target.dataset.id)
    }else if(e.target.classList.contains(`up`)){
        handlePlusBtnEvent(e.target.dataset.id)
    }
    checkCartState();
}

const resetCartItems = () => {
    cart = [];
    checkCartState();
}

const completeCartAction = (confirmgMsg,SuccessMsg) => {
    if(!cart.length) return;
    if(window.confirm(confirmgMsg));
    resetCartItems();
    alert(SuccessMsg);
}
const completeBuy = () => {
    completeCartAction(`¿Desea completar su compra?`,`¡Gracias por su compra!`)
};

const deleteCart = () => {
    completeCartAction(`¿Desea vaciar el carrito?`,`¡El carrito se ha vaciado!`)
};

//Funcion para inicializar

const init = () => {
    renderProducts();
    categories.addEventListener(`click`,applyFilter)
    btnLoad.addEventListener(`click`, ShowMoreProducts)
    cartBtn.addEventListener(`click`,toggleCart);
    barsBtn.addEventListener(`click`,toogleMenu);
    window.addEventListener(`scroll`,closeOnScroll);
    barsMenu.addEventListener(`click`, closeOnClick);
    overlay.addEventListener(`click`, closeOnOverlayClick)
    document.addEventListener(`DOMContentLoaded`, renderCart)
    document.addEventListener(`DOMContentLoaded`, showTotal)
    products.addEventListener(`click`,addProduct)
    productCart.addEventListener(`click`,handleQuantity)
    disableBtn(deleteBtn);
    disableBtn(buyBtn);
    buyBtn.addEventListener(`click`,completeBuy);
    deleteBtn.addEventListener(`click`,deleteCart);
};

init();