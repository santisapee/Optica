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

//Publicidad inicio 
Swal.fire({
    title: "¡PROMO APERTURA!",
    text: "LLEVÁ 2 PARES QUE TE GUSTEN SOLO POR $2.100",
    imageUrl: "img/popupimg.jpg",
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: "Custom image"
  });

//Pedido para clientes al mayoreo

class Pedido{
    constructor(modelo,cantidad){
        this.nombre = nombre;
        this.cedula = cedula;
        this.modelo = modelo;
        this.cantidad = cantidad;
    }
}

const arrayPedidos = [];

const encargos = document.getElementById("encargos");

    encargos.addEventListener("submit", (e)=>{
        e.preventDefault();
        const nombre = document.getElementById("nombre");
        const cedula = document.getElementById("cedula");
        const modelo = document.getElementById("modelo");
        const cantidad = document.getElementById("cantidad");

        console.log("El nombre del cliente es: " + nombre.value);
        console.log("La cedula del cliente es: " + cedula.value);
        console.log("El modelo solicitado es: " + modelo.value);
        console.log("La cantidad solicitada del modelo es de: " + cantidad.value);

        encargos.reset();
     
    })

const pedido = new Pedido(nombre.value, cedula.value, modelo.value, cantidad.value);
arrayPedidos.push(pedido);

console.log(arrayPedidos);

//btn envio-pedido mensaje de registro exitoso

const btnthx = document.getElementById("btnthx");

btnthx.onclick = ()=>{
    alert("Tu pedido fue registrado exitosamente!");
}

//funcion carrito en proxesoo

const PRODUCTOS = [
    {id: 1, nombre: 'modelo1', precio: 1500},
    {id: 2, nombre: 'modelo2', precio: 1500},
    {id: 3, nombre: 'modelo3', precio: 1500},
    {id: 4, nombre: 'modelo4', precio: 1500},
    {id: 5, nombre: 'modelo5', precio: 1500},
    {id: 6, nombre: 'modelo6', precio: 1500},
];

const carrito = [];

function renderizarProductos() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    PRODUCTOS.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.image}" alt="">
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        carritoElement.appendChild(card);
    });
}

function agregarAlCarrito(idProducto) {
    const productoExistente = carrito.find(producto => producto.id === idProducto);

    if (productoExistente) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad inicial de 1
        const productoSeleccionado = PRODUCTOS.find(producto => producto.id === idProducto);

        if (productoSeleccionado) {
            carrito.push({ ...productoSeleccionado, cantidad: 1 });
        }
    }

    actualizarCarrito();
}


function actualizarCarrito() {
    const carritoElement = document.getElementById('total');
    carritoElement.innerHTML = '';

    carrito.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
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
}

function cambiarCantidad(idProducto, operacion) {
    const index = carrito.findIndex(producto => producto.id === idProducto);

    if (index !== -1) {
        switch (operacion) {
            case '+':
                carrito[index].cantidad++;
                break;
            case '-':
                carrito[index].cantidad--;

                if (carrito[index].cantidad <= 0) {
                    carrito.splice(index, 1);
                }
                break;
            default:
                break;
        }
    }

    actualizarCarrito();
}

function sumarTotal() {
    const totalElement = document.getElementById('final');
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    totalElement.innerHTML = `<div>Total: $${total.toFixed(0)}</div>`;
}

function borrarItemCarrito(idProducto) {
    const index = carrito.findIndex(producto => producto.id === idProducto);

    if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
    }
}

renderizarProductos();

//hacer el json