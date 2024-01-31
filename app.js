//api para implementar en proyecto

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then(response => response.json())
.then(comentarios => {

    const comentariosContainer = document.getElementById('comments');


    comentarios.forEach(comentario => {
        const comentarioElement = document.createElement('div');
        comentarioElement.innerHTML = `
            <h3>${comentario.name}</h3>
            <p>${comentario.email}</p>
            <p>${comentario.body}</p>
            <hr>
        `;
        comentariosContainer.appendChild(comentarioElement);
    });
})
.catch(error => console.error('Error al obtener comentarios:', error));

//tiemporeal

// Hacer la solicitud a la API
fetch('http://worldtimeapi.org/api/timezone/America/Montevideo')
  .then(response => response.json())
  .then(data => {
    // Acceder al contenedor
    const infoContainer = document.getElementById('infoContainer');

    // Crear un string con la información que deseas mostrar
    const infoString = `
      <p>Fecha y hora: ${data.datetime}</p>
      <p>Zona horaria: ${data.timezone}</p>
      <p>Offset UTC: ${data.utc_offset}</p>
    `;

    // Insertar el string en el contenedor
    infoContainer.innerHTML = infoString;
  })
  .catch(error => console.error('Error al obtener datos:', error));

  window.onload = function() {
    // Tu código aquí
  }
  