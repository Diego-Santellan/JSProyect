//Variables globales
let carrito =[];
let produtos =[];
let gestor = new GestionarProductos();

const url = './js/stock.js';

const URL2 = './todo/js/db.json';

// Evento disparador al cargcar la pagina
document.addEventListener('DOMContentLoaded', () =>{
    
    gestor.iniciar();
});

//Mensaje disparador
function msjs(msj){
    // Toastify({
    //     text: msj,
    //     duration: 3000,
    //     destination: "https://github.com/apvarun/toastify-js",
    //     newWindow: true,
    //     close: true,
    //     gravity: "bottom", // `top` or `bottom`
    //     position: "right", // `left`, `center` or `right`
    //     stopOnFocus: true, // Prevents dismissing of toast on hover
    //     style: {
    //         background: "linear-gradient(to right, #000, #ffd500)",
    //     },
    //     onClick: function(){} // Callback after click
    // }).showToast();

    Swal.fire({
        title: msj,
        width: 600,
        padding: '3em',
        color: '#204135',
        background: '#fff',
        showConfirmButton: false,
        timer: 1500,
        backdrop: `
        url("./todo/image/alert2.gif")
        left top
        no-repeat
        `
    });
}


// Aviso funcion no disponible
const alerta = document.querySelector ("#btnBusqueda");

alerta.addEventListener('click', (e) => {
    e.preventDefault();
    msjs("Lo sentimos, esta funcion todavia no se encuentra disponible");

})













































/*
//Cargar carrito

function addCarrito( id ) {
    const prod = document.querySelector('#row_'+id);
    let producto = new Producto(   id,
                                prod.querySelector('h3').textContent,
                                
                                prod.querySelector('img').src
                                

                                );

    gestor.addCart( producto );
}  


function respuestaClick(){

    if(true){

        let detalleCarrito = document.querySelector(".articuloCarrito");
        detalleCarrito.innerHTML = ``;
        
        msjs("Se a vaciado el carrito");  
        
        
        
    }else{

        msjs("El carrito ya se encontraba vacio");

    }
  

}
*/
