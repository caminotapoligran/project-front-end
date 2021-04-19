//const boton = document.querySelector("#boton-menu");
const contenido = document.getElementById('contenido');
const verProducto = document.getElementById('verProducto');
const carrito = document.getElementById('cant');
const contCompra = document.getElementById('contCompra');
//let cantidad, titulo, precio;
let objetProduct = {};
let arrayProucto = []; 


//url
let URLactual = window.location;

let cant = 0;
let total = 0;
//console.log(URLactual.pathname);




document.addEventListener("DOMContentLoaded", function (e) {
    //obteniendo los datos del json creado
    fetch('js/productos.json').
        then(res => res.json()).
        then(datos => {
            const urlPs = '/public/producto.html';
            cardProdcutos(datos);
            obtenerLocalStorage();
           if(URLactual.pathname === urlPs){
              //  console.log('hola');
                vermas(datos)
           }
        })
});

//insertando productos.html en el vista prodcutos
function cardProdcutos(datos) {
    //console.log(datos);
    const urlPs = '/public/productos.html';
    if(URLactual.pathname === urlPs){
        contenido.innerHTML = '';

        for(let item of datos ){
            //console.log(item);
            contenido.innerHTML += `
                <div class="shadow-lg  border rounded border-gray-900 bg-white roundo">
                    <div>
                        <img src="${item.image}" class="object-contain h-48 w-full"  alt="" srcset="">
                        </div>
                        <div class=" mx-3 my-3">
                        <a href="producto.html?id=${item.id}" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            ${item.titulo}
                        </a>
                        <h4 class="mt-3 text-gray-500">Precio:  $${item.precio}</h4>
                        <p class="mt-3"> 
                            ${item.descripcion}
                        </p>
                    </div>
                    <div class="flex justify-between mt-3">
                        <a id="${item.id}" 
                            href="producto.html?id=${item.id}"                            
                            class="inline-block w-full text-center text-sm px-4 mx-4 py-3 ml-2 my-2 bg-blue-700 leading-none border rounded text-white font-medium border-white hover:border-transparent hover:text-gray-900 hover:bg-blue-500 mt-4 lg:mt-0"> 
                            VER MÁS 
                        </a>
                       

                    </div>
                </div>
            `;
        }
    }

}

function vermas( datos) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var anuncioParam = urlParams.get('id');
    //console.log(anuncioParam);
    verProducto.innerHTML = '';

    for(let item of datos){
        //console.log(item.id);
        if(item.id === Number(anuncioParam)){
            verProducto.innerHTML += `
                <div class="grid sm:divide-x sm:divide-blue-300 sm:grid-cols-4 sm:flex graid-cols-1 bg-white rounded-xl border border-blue-300 " >
                    <!-- imagen -->
                    <div class="sm:w-3/5  mx-3 mt-3 my-3 ">
                        <img src="${item.image}" class="" id="imagen">
                    </div> 
                    <!-- Envio -->
                    <div class="sm:w-2/5      mx-3 mt-3 my-3">
                        <h2 id="titulo" class="text-3xl mt-3 mx-3 font-bold">${item.titulo}</h2>
                        <h4 id="precio" class="text-red-900 mt-3 mx-3 text-xl font-semibold">${item.precio}</h4>
                        <!-- Envio  -->
                        <div class=" flex mt-3 mx-3 border border-green-600 sm:w-3/5">
                            <i class="fas fa-truck-moving mx-3 mt-4 text-green-600 font-bold"></i>
                            <div class="flex-1 space-y-4 py-1">
                                <div class="h-4 bg-light-blue-400 mt-1 rounded w-4/5 text-green-600 font-bold">Envío Gratis</div>
                                <div class="space-y-2">
                                <div class="h-4 bg-light-blue-400 rounded text-green-600 font-normal">
                                    Recíbelo en 7 dias habiles
                                </div>
                                <div class="h-4 bg-light-blue-400 rounded w-5/6"></div>
                                </div>
                            </div>   
                        </div>
                        <!-- Compra segura -->
                        <div class="flex mt-3 mx-3 mb-4 border border-green-600 sm:w-3/5 gril-col">
                        <img src="image/caja.jpg"  class="h-12 w-12 text-green-700" >
                            <div class="flex-1 space-y-4 py-1">
                                <div class="h-4 bg-light-blue-400  rounded w-3/4 text-green-600 font-bold text-sm">
                                    ¡Tus compras están seguras!
                                </div>
                                <div class="space-y-2 mt-3">
                                <div class="h-4 bg-light-blue-400 rounded text-green-600 font-normal pb-8">
                                    *Aplican condiciones
                                </div>
                                </div>
                            </div>   
                        </div>
                        <!-- boton de comprar -->
                        <div class="felx mt-3 mx-3 mb-4  ">
                            <button id="btnMas" onclick="aumentar()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                <i class="fas fa-plus"></i>
                            </button>
                            <input  class="text-center sm:w-10 w-1/4 " type="number" name="cantidad" id="cantidad" min="0" value="1">
                            <button id="btnMenos" onclick="disminuir()" class="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 border border-blue-700 rounded">
                                <i class="fas fa-minus "></i>
                            </button>
                            <button id="agCarrito" onclick="clickAgregarCarrito()"  class="bg-blue-500 mt-1  hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">
                                AGREGAR AL CARRITO
                            </button>
                            
                        </div>
                        <div class="mt-3 ml-3 sm:w-3/5">
                            <h2 class="font-bold text-blue-800 text-xl">Caracteristicas</h2>
                            <p class="mt-3">
                                ${item.descripcion}
                            </p>
                        </div>
                        <input  class="text-center sm:w-10 w-1/4 " type="number" name="cantidad" id="idProduct" value="${item.id}" hidden>
                    </div>          
                </div>

            `;
        }
    }
}


function clickAgregarCarrito(e) {
   const cantidad = document.getElementById('cantidad').value;
   const titulo = document.getElementById('titulo');
   const precio = document.getElementById('precio');
   const foto = document.getElementById('imagen');
   const idProduct = document.getElementById('idProduct').value;
   //console.log(idProduct);
        
    objetProduct = {
        id: Number(idProduct),
        cantidad: Number(cantidad),
        titulo: titulo.innerHTML,
        precio: Number(precio.innerHTML) * Number(cantidad),
        foto: foto.src

    }

    arrayProucto.push(objetProduct);
  //  console.log(arrayProucto);
    agregarlocalStorage(arrayProucto)
}

function agregarlocalStorage(arrayProucto) {
   // console.log(JSON.stringify(arrayProucto));
    localStorage.setItem("producto", JSON.stringify(arrayProucto))
    //let data = JSON.parse(localStora);
    //location.reload();
    //console.log(arrayProucto);
}

function obtenerLocalStorage(e) {
    const local = localStorage.getItem('producto');
    
    if (local == null) {
        arrayProucto = [];
    }else{
        const urlPs = '/public/compra.html';
        let data = JSON.parse(local);
        //console.log(arrayProucto);
        //arrayProucto.push()
        if(URLactual.pathname === urlPs){
            contCompra.innerHTML = '';
        }
        data.forEach(element => {

            cant += element.cantidad;
            total += element.precio;
            
            // console.log(element.foto);
            if(URLactual.pathname === urlPs){
                contCompra.innerHTML += `
                    <div class="sm:flex  grid-cols-1 flex justify-center items-center">
                        <div class="sm:w-3/5 grid-span-auto border mx-3 ml-3 mt-3 rounded  bg-white rounded-xl shadow overflow-hidden">
                            <div class="md:flex">
                                <div class="md:flex-shrink-0">
                                <img class="h-48 w-full transform scale-75 object-cover md:w-48" src="${element.foto}" alt="Man looking at item at a store">
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">Laptop</div>
                                    <a href="producto.html?id=1" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                        ${element.titulo}
                                    </a>
                                    <!-- <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> -->
                                    <p class="mt-2 text-gray-500">
                                    precio ${element.precio}
                                    </p>
                                    <p class="mt-2 text-gray-500">
                                    Cantidad: ${element.cantidad}
                                    </p>
                                    <div class=" mt-8">
                                        <button                         
                                        class="inline-block w-full text-center text-sm px-4 mx-4 py-3 ml-2 my-2 bg-red-700 leading-none border rounded text-white font-medium border-white hover:border-transparent hover:text-gray-900 hover:bg-red-500 mt-4 lg:mt-0"
                                        > 
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        carritoSpan(cant);
        if(URLactual.pathname === urlPs){
           // console.log(total);
            carritoSpan(total);
        }
        
        //console.log(cant);
        let cantidad = cant;
        if (cantidad == 0) {
            carrito.innerHTML = `<span class=" text-center">0</span> `;
        }
        carrito.innerHTML = `<span class=" text-center">${cantidad}</span> `;
       
    }
    
}

function carritoSpan(cant) {
    let cantidad = cant;
    if (cantidad == 0) {
        carrito.innerHTML = `<span class=" text-center">0</span> `;
    }
    carrito.innerHTML = `<span class=" text-center">${cantidad}</span> `;
    
    

      
   
}

function carritoSpan(final) {
    const urlPs = '/public/compra.html';
    if(URLactual.pathname === urlPs){
        const precioTotal =  document.getElementById('total')
        let totall = final;    
        precioTotal.innerHTML = `<span class=" text-center bg-gray-500 w-full text-white align-middle py-2 px-4 rounded font-bold ">TOTAL A PAGAR: $${totall}</span> `;
    }
    //console.log(cant);    
   
}

