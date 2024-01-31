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


fetch('https://worldtimeapi.org/api/timezone/America/Montevideo')
  .then(response => response.json())
  .then(data => {
    const infoContainer = document.getElementById('infoContainer');

    const infoString = `
      <p>Fecha y hora: ${data.datetime}</p>
      <p>Zona horaria: ${data.timezone}</p>
      <p>Offset UTC: ${data.utc_offset}</p>
    `;

    infoContainer.innerHTML = infoString;
  })
  .catch(error => console.error('Error al obtener datos:', error));

  window.onload = function() {
  }
  