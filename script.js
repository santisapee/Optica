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
