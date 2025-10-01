// Aquí estoy trayendo el contenedor con el id "capitulo-principal". 
// Básicamente es donde quiero que se muestre la información del capítulo que se seleccione.
let capituloPrincipal = document.getElementById("capitulo-principal");

// También traigo el contenedor con el id "capitulos-grid". 
// Ese es el espacio donde van a aparecer todas las tarjetas con los capítulos.
let grid = document.getElementById("capitulos-grid");

// Limpio el grid por si de pronto ya tenía algo escrito en el HTML.
// De esta forma me aseguro de que empiece vacío antes de generar las tarjetas.
grid.innerHTML = "";

//  Generar tarjetas de capítulos 

// Aquí hago un bucle que recorre todos los capítulos que tengo en mi objeto "comic".
for (let i = 0; i < comic.capitulos.length; i++) {
  
  // Guardo el capítulo actual en la variable "cap" para poder trabajar con él más fácil.
  let cap = comic.capitulos[i];

  // Creo un div nuevo, que será la tarjeta del capítulo. 
  // Todavía no aparece en la página porque apenas lo estoy creando en memoria.
  let tarjeta = document.createElement("div");

  // A esa tarjeta le asigno la clase "capitulo", que ya tengo definida en el CSS para darle estilo.
  tarjeta.className = "capitulo";

  // Ahora dentro de esa tarjeta le meto el contenido HTML: 
  // la imagen de portada, el título con su número y el nombre, y una descripción breve.
  tarjeta.innerHTML =
    "<img src='" + cap.imgPortada + "' alt='Capítulo " + cap.id + "'>" +
    "<h3>Capítulo " + cap.id + ": " + cap.nombreCap + "</h3>" +
    "<p>" + cap.descripcion + "</p>";

  // Evento de clic en la tarjeta
  // Aquí digo que cuando alguien haga clic en esa tarjeta:
  tarjeta.onclick = function () {
    // Quiero que en el contenedor principal se muestre la información completa de ese capítulo.
    // Eso incluye el título, la portada, la descripción y además un botón para reproducirlo.
    capituloPrincipal.innerHTML =
      "<h3>Capítulo " + cap.id + ": " + cap.nombreCap + "</h3>" +
      "<img src='" + cap.imgPortada + "' alt='" + cap.nombreCap + "'>" +
      "<p>" + cap.descripcion + "</p>" +
      "<button onclick=\"reproducirVideo(" + cap.id + ")\">▶ Reproducir</button>";
  };

  // Finalmente, ya con la tarjeta lista, la agrego al grid para que se vea en la página. lo que hace es llamar a lo que esta en el contenedor grid, el appenchild sirve agregar este elemento dentro de este otro.
  grid.appendChild(tarjeta);
}

// Mostrar el primer capítulo al cargar 

// Aquí reviso si efectivamente el cómic tiene capítulos.
if (comic.capitulos.length > 0) {
  // Si los tiene, agarro el primero de la lista.
  let primerCap = comic.capitulos[0];

  // Y muestro la información de ese primer capítulo en el contenedor principal
  // apenas cargue la página, para que no quede vacío.
  capituloPrincipal.innerHTML =
    "<h3>Capítulo " + primerCap.id + ": " + primerCap.nombreCap + "</h3>" +
    "<img src='" + primerCap.imgPortada + "' alt='" + primerCap.nombreCap + "'>" +
    "<p>" + primerCap.descripcion + "</p>" +
    "<button onclick=\"reproducirVideo(" + primerCap.id + ")\">▶ Reproducir</button>";
}

//Función para reproducir capítulo 

// Y por último, esta función lo que hace es redirigir al usuario a otra página llamada "video.html",
// llevándose el id del capítulo como parámetro en la URL. 
// Así en esa página se puede cargar el capítulo correcto.
function reproducirVideo(idCapitulo) {
  window.location.href = `video.html?id=${idCapitulo}`;
}