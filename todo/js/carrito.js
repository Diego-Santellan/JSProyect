//Variables
let allContainerCart =  document.querySelector('#catalogo');
let containerBuyCart = document.querySelector('#cart');
let priceTotal = document.querySelector('.price-total');

//Genero una variable y le pido los objetos guardados en localStorage
let busyThings = JSON.parse(localStorage.getItem("busyThings")) || [];
let totalCard = 0;
//Reviso si hay algun elemto guardado en localStorage
if(busyThings.length > 0){
    loadHTML();
}


//  ****** FUNCIONES ******  //

// Funcion escuchar click
loaddEventListeners();
function loaddEventListeners(){

    allContainerCart.addEventListener('click', addProduct);
    containerBuyCart .addEventListener('click', deteleProduct);
}


// Funcion agregar producto
function addProduct(e){
    e.preventDefault();

    if(e.target.classList.contains('btn-add-cart')){ 
        const selectProducto = e.target.parentElement;
        reactTheContent(selectProducto);
        msjs("Se actulizo el contenido del carrito");
    }

}


// Funcion eliminar producto
function deteleProduct(e){

    if(e.target.classList.contains('deteleProduct')){
        const deleteId = e.target.getAttribute('data-id');

        busyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);

                msjs("El producto fue eliminado exitosamente");

            }
            loadHTML();
        });
        busyThings = busyThings.filter(Producto => Producto.id !== deleteId);

        loadHTML();
    }

}


// Funcion leer el contenido
function reactTheContent(Producto){

    const infoProduct ={

        image: Producto.querySelector('div img').src,
        title: Producto.querySelector('.title').textContent,
        price: Producto.querySelector('.precio').textContent,
        id: Producto.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);
    

    const exist = busyThings.some(Producto => Producto.id === infoProduct.id);
    if(exist){
        const pro = busyThings.map(Producto => {
            if(Producto.id === infoProduct.id){
                Producto.amount++;
                return Producto;
            }else{
                return Producto;
            }
        });
        busyThings = [... pro];
       
    }else{

        busyThings = [... busyThings, infoProduct];
    }

    loadHTML();
}


// Funcion para mostrar en el carrito
function loadHTML(){
    clearHTML();
    busyThings.forEach(Producto => {
        const {image, title, price, id, amount} = Producto;
        const row = document.createElement('div');
        row.classList.add('.articulo');
        row.innerHTML=`
                 
            <div class="d-flex">
                <div class="col-3 d-flex align-items-center p-2 border-bottom">
                    <img src="${image}" width="80"/> 
                </div>
                <div class="col-3 align-items-center p-2 px-5 border-bottom">
                    <h5>${title}</h5>
                    <p>$${price}</p>
                </div>
                <div class="col-3 align-items-center justify-content-end p-2 px-5 border-bottom">
                    <p class="mx-3">${amount}</p>
                </div>
                <span class="deteleProduct" data-id="${id}">X</span>
            </div>
            
        `;
        containerBuyCart.appendChild(row);
        totalCard = totalCard + parseInt(price);
    }); 
    //Actualizacion precio total
    priceTotal.innerHTML = Math.round(totalCard);
    //Guardar objetos en localStorage
    localStorage.setItem("busyThings", JSON.stringify(busyThings));

}

function clearHTML(){
    containerBuyCart.innerHTML =``;
}
