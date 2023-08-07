class GestionarProductos{

    //Cargar productos a la pagina 
    addToDOM(productos){
        
        const catalogo = document.querySelector("#catalogo");
        catalogo.innerHTML = "";

        if(productos.length === 0){

            this.mostrarMensaje('No se a encontrado el producto buscado');
            return false

        }else{

            
            productos.forEach( (Producto) => {
    
                let articulo = document.createElement('div');
                articulo.setAttribute('id', 'row_'+Producto.id);    
               
        
                articulo.innerHTML = `  
                                <div class="articulo">
                                    
                                        <div class="p-3">
                                            <img src="${Producto.image}" alt="Producto">
                                        </div>
                                        
                                        <div>
                                            <h3 class="title">${Producto.nombre}</h3>               
                                        </div>
    
                                        <div>
                                            <p>$<b class="precio">${(Producto.precio * 1.21 * 1.4).toFixed(2)}</b></p>
                                        </div>

                                        <a href="" data-id="${Producto.id}" class="btn-add-cart btn btn-warning m-3">Agregar al carrito</a>
                                    
                                </div>`;
                catalogo.appendChild(articulo);
    
            });    

        }

    }
    

    iniciar(){
      let productos;
        fetch(URL2)

        .then(respuesta => respuesta.json())
        .then(resultado =>{
            // console.log(res);

            productos = resultado.productos;
            // this.precioFinal(resultado.productos.precio);
            let productoDes = productos.filter(prod => prod.destacado == 1);
            
            this.addToDOM(productoDes);
            
        })

        
        // Arrcglo de productos
        // productos.push(new Producto("lomboard", 14000,"./todo/image/lomboard.1.png",1,1));
        // productos.push(new Producto("lomboard", 14000,"./todo/image/lomboard.2.png",2,1));
        // productos.push(new Producto("lomboard", 14000,"./todo/image/lomboard.3.png",3,1));
        // productos.push(new Producto("penny", 3000,"./todo/image/penny1x.png",4,1));
        // productos.push(new Producto("penny", 3000,"./todo/image/penny2.png",5,1));
        // productos.push(new Producto("penny", 3000,"./todo/image/penny3.png",6,1));
        // productos.push(new Producto("skate", 9600,"./todo/image/skate1.png",7,1));
        // productos.push(new Producto("skate", 9600,"./todo/image/skate2.png",8,1));
        // productos.push(new Producto("skate", 9600,"./todo/image/skate3.png",9,1));
        // productos.push(new Producto("medias", 300,"./todo/image/mediasMyM.png",10,1));
        // productos.push(new Producto("medias", 300,"./todo/image/mediasNike.png",11,1));
        // productos.push(new Producto("medias", 300,"./todo/image/mediasStarWars.png",12,1));
        // productos.push(new Producto("medias", 300,"./todo/image/mediasStarWars2.png",13,1));
        // productos.push(new Producto("medias", 300,"./todo/image/mediasStarWars3.png",14,1));
        // productos.push(new Producto("medias", 300,"./todo/image/mediasVans.png",15,1));
        // productos.push(new Producto("buzo", 3500,"./todo/image/buzoAngel.png",16,1));
        // productos.push(new Producto("buzo", 3500,"./todo/image/buzoBarderos.png",17,1));
        // productos.push(new Producto("buzo", 3500,"./todo/image/buzoFire.png",18,1));
        // productos.push(new Producto("buzo", 3500,"./todo/image/buzoHappy.png",19,1));
        // productos.push(new Producto("buzo", 3500,"./todo/image/buzoPokemon.png",20,1));
        // productos.push(new Producto("buzo", 3500,"./todo/image/buzoRebels.png",21,1));
        // productos.push(new Producto("casco", 3500,"./todo/image/cascoCaballero.png",22,1));
        // productos.push(new Producto("casco", 3500,"./todo/image/cascoNegro.png",23,1));
        // productos.push(new Producto("casco", 3500,"./todo/image/cascoOneal.png",24,1));

    
        // productos.forEach(Producto =>{
        //     Producto.precioFinal();
        //     this.addToDOM(productos);
            
        // })
        
    }


}





































































/*

    addCart(infoProducto){
        const existe = carrito.some(Producto => Producto.id === infoProducto.id);

        if(existe){

            const productos = carrito.map(produto => {
                if(Producto.id === Producto.id){
                    produto.cantidad++;
                    return produto;
                }else{
                    return produto;
                }
            })
            carrito = productos;
            
            msjs("se actulizo la cantidad de tu producto");
            


        }else{

            carrito.push(infoProducto);
            msjs("Se agrego el producto exitosamente");
        }

        this.mostrarCarrito();
    }

    mostrarCarrito(){

        let detalleCarrito = document.querySelector("#cart");
        detalleCarrito.innerHTML = "";

        
        carrito.forEach((producto)=>{
            const row = document.createElement("div");
            row.classList.add("row");               


            row.innerHTML =`
                    <div class="articuloCarrito row">
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${producto.img}" width="80"/> 
                        </div>
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                           <h3>${producto.nombre}</h3>
                        </div>
                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                           <p>${producto.precio}</p>
                        </div>
                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                           <p>${producto.cantidad}</p>
                        </div>
                    </div>
                   
            `;

            detalleCarrito.appendChild(row);

            
        });
           
        const row = document.createElement("div");
        row.classList.add("row");   
        row.innerHTML =`<div class="col-3  align-items-center justify-content-end border-bottom">
                        <div class="p-5">
                            <p>Total: <b></b></p>
                        </div>
                        <div>
                            <input type="button" onclick="respuestaClick();" value="Vaciar carrito" />
                        </div>
                        </div>
                    `;
        detalleCarrito.appendChild(row);

    }
*/
    
   



    
