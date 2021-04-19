const boton = document.querySelector("#boton-menu");
const menu = document.querySelector("#menu");
const botonMas = document.getElementById("btnMas");
const carrtio = document.getElementById("agCarrito");
//const contenido = document.getElementById('contenido');
//const botonMas = document.getElementById('btn-menos');
// const cantidad = document.getElementById('cantidad');
let inicio = 1;

boton.addEventListener('click', (e) => {
    menu.classList.toggle('hidden')
    console.log('me diste clik');
})


function aumentar(e) {
    let cantidad = document.getElementById('cantidad').value = ++ inicio;
   // console.log(cantidad);
}

function disminuir(e) {
    let cantidad = document.getElementById('cantidad').value;
    if(cantidad > 0){
        let cantidad = document.getElementById('cantidad').value = -- inicio;

    }
    //console.log(cantidad);
}

