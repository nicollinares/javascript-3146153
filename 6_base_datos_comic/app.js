const tituloComic = document.querySelector(".titulo-comic");
const descripcionComic = document.querySelector(".descripcion-comic");
const imgComic = document.querySelector(".img-comic");
const listaCaps = document.querySelector(".lista-caps");

//Mostrar informacion del la base de datos en la página
tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.descripcion


//Imprimir informacion de los capitulos
comic.capitulos.forEach(cap => {
    const li = document.createElement("li");
    li.innerHTML = `
     <img src="${cap.imgPortada}" width="150" alt="">
     <p>${cap.nombreCap}</p>
     `
    listaCaps.appendChild(li)
});