//Funcionalidad del boton ENCARGOS AL POR MAYOR

const popupBtn = document.querySelector('.popup-btn');
const contenidoPopup = document.querySelector('.contenido-popup');
const cerrarPopup = document.querySelector('.cerrar-popup');

popupBtn.onclick = () => {
    contenidoPopup.classList.add('active');
}

cerrarPopup.onclick = () => {
    contenidoPopup.classList.remove('active');
}

//Pedido para clientes al mayoreo

class Pedido{
    constructor(modelo ,cantidad){
        this.nombre = nombre;
        this.cedula = cedula;
        this.modelo  = modelo ;
        this.cantidad = cantidad;
    }
}

const arrayPedidos = [];

const encargos = document.getElementById("encargos");

    encargos.addEventListener("submit", (e)=>{
        e.preventDefault();
        const nombre = document.getElementById("nombre");
        const cedula = document.getElementById("cedula");
        const modelo  = document.getElementById("modelo ");
        const cantidad = document.getElementById("cantidad");

        console.log("El nombre del cliente es: " + nombre.value);
        console.log("La cedula del cliente es: " + cedula.value);
        console.log("El modelo  solicitado es: " + modelo .value);
        console.log("La cantidad solicitada del modelo  es de: " + cantidad.value);

        encargos.reset();
     
    })

const pedido = new Pedido(nombre.value, cedula.value, modelo .value, cantidad.value);
arrayPedidos.push(pedido);

console.log(arrayPedidos);

//btn envio-pedido mensaje de registro exitoso

const btnthx = document.getElementById("btnthx");

btnthx.onclick = ()=>{
    alert("Tu pedido fue registrado exitosamente!");
}

//funcion carrito

const PRODUCTOS_LIST = [
    {id: 1, nombre: 'modelo 19', precio: 1500, image: '../img/Dioxy/Dioxy19.jpeg'},
    {id: 2, nombre: 'modelo 20', precio: 1500, image: '../img/Dioxy/Dioxy20.jpeg'},
    {id: 3, nombre: 'modelo 21', precio: 1500, image: '../img/Dioxy/Dioxy21.jpeg'},
    {id: 4, nombre: 'modelo 22', precio: 1500, image: '../img/Dioxy/Dioxy22.jpeg'},
    {id: 5, nombre: 'modelo 23', precio: 1500, image: '../img/Dioxy/Dioxy23.jpeg'},
    {id: 6, nombre: 'modelo 24', precio: 1500, image: '../img/Dioxy/Dioxy24.jpeg'},
    {id: 7, nombre: 'modelo 25', precio: 1500, image: '../img/Dioxy/Dioxy25.jpeg'},
    {id: 8, nombre: 'modelo 26', precio: 1500, image: '../img/Dioxy/Dioxy26.jpeg'},
    {id: 9, nombre: 'modelo 27', precio: 1500, image: '../img/Dioxy/Dioxy27.jpeg'},
    {id: 10, nombre: 'modelo 28', precio: 1500, image: '../img/Dioxy/Dioxy28.jpeg'},
    {id: 11, nombre: 'modelo 29', precio: 1500, image: '../img/Dioxy/Dioxy29.jpeg'},
    {id: 12, nombre: 'modelo 30', precio: 1500, image: '../img/Dioxy/Dioxy30.jpeg'},
    {id: 13, nombre: 'modelo 31', precio: 1500, image: '../img/Dioxy/Dioxy31.jpeg'},
    {id: 14, nombre: 'modelo 32', precio: 1500, image: '../img/Dioxy/Dioxy32.jpeg'},
    {id: 15, nombre: 'modelo 33', precio: 1500, image: '../img/Dioxy/Dioxy33.jpeg'},
    {id: 16, nombre: 'modelo 34', precio: 1500, image: '../img/Dioxy/Dioxy34.jpeg'},
    {id: 17, nombre: 'modelo 35', precio: 1500, image: '../img/Dioxy/Dioxy35.jpeg'},
    {id: 18, nombre: 'modelo 36', precio: 1500, image: '../img/Dioxy/Dioxy36.jpeg'},
];

let CARRITO = [];

function renderizarProductos() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    PRODUCTOS_LIST.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.image}" alt="${producto.nombre}">
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        carritoElement.appendChild(card);
    });

    cargarCarritoDesdeLocalStorage(); 
}

function agregarAlCarrito(idProducto) {
    const productoExistente = CARRITO.find(producto => producto.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        const productoSeleccionado = PRODUCTOS_LIST.find(producto => producto.id === idProducto);

        if (productoSeleccionado) {
            CARRITO.push({ ...productoSeleccionado, cantidad: 1 });
        }
    }

    actualizarCarrito();
    guardarCarritoEnLocalStorage(); 
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('total');
    carritoElement.innerHTML = '';

    CARRITO.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.image}" alt="${producto.nombre}">
            <p>Precio: $${producto.precio.toFixed(0)}</p>
            <div class="cantidad">
                <button onclick="cambiarCantidad(${producto.id}, '-')">-</button>
                <span class="valor">${producto.cantidad}</span>
                <button onclick="cambiarCantidad(${producto.id}, '+')">+</button>
            </div>
            <button onclick="borrarItemCarrito(${producto.id})">Quitar del carrito</button>
        `;
        carritoElement.appendChild(card);
    });

    sumarTotal();

    const botonPedido = document.getElementById('botonPedido');
    botonPedido.style.display = CARRITO.length > 0 ? 'block' : 'none';
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify({ productos: CARRITO }));
    console.log('Carrito guardado en localStorage:', CARRITO);
}

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');

    if (carritoGuardado) {
        const carritoParseado = JSON.parse(carritoGuardado) || [];
        CARRITO = carritoParseado.productos || [];
        actualizarCarrito();
    }
}

function cambiarCantidad(idProducto, operacion) {
    const index = CARRITO.findIndex(producto => producto.id === idProducto);

    if (index !== -1) {
        switch (operacion) {
            case '+':
                CARRITO[index].cantidad++;
                break;
            case '-':
                CARRITO[index].cantidad--;

                if (CARRITO[index].cantidad <= 0) {
                    CARRITO.splice(index, 1);
                }
                break;
            default:
                break;
        }
    }

    actualizarCarrito();
    guardarCarritoEnLocalStorage();  
}

function sumarTotal() {
    const totalElement = document.getElementById('final');
    const total = CARRITO.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    totalElement.innerHTML = `<div>Total: $${total.toFixed(0)}</div>`;
}

function borrarItemCarrito(idProducto) {
    const index = CARRITO.findIndex(producto => producto.id === idProducto);

    if (index !== -1) {
        CARRITO.splice(index, 1);
        actualizarCarrito();
        guardarCarritoEnLocalStorage();  
    }
}

function hacerPedido() {
    alert('¡Pedido realizado con éxito!');
    guardarCarritoEnLocalStorage();
    limpiarCarrito();
}

function guardarPedidoEnLocalStorage() {
    const pedido = { productos: CARRITO, fecha: new Date().toLocaleString() };
    localStorage.setItem('pedido', JSON.stringify(pedido));
}

function limpiarCarrito() {
    CARRITO = [];
    actualizarCarrito();
}

window.addEventListener('load', () => {
    cargarCarritoDesdeLocalStorage();
    renderizarProductos();
});

renderizarProductos();


//proximamente json con storage