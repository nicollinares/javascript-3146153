//1. captura de variables
const pantalla = document.querySelector("#imagen") //para capturar en pantalla
const btn1 = document.querySelector("#boton-1") //para capturar en pantalla
const btn2 = document.querySelector("#boton-2") //para capturar en pantalla
const btn3 = document.querySelector("#boton-3") //para capturar en pantalla

//2. funciones
function blancoynegro () {
    console.log("imagen modificada")
    pantalla.style.filter = "grayscale(100%)"
/*     btn1.style.background = "blueviolet"
    btn1.style.color = "white"
    btn1.style.heigth = "200px"
    btn1.style.borderRadius = "50%" */
}

//3. evento
function desenfocar () {
    console.log("imagen desenfocada")
    pantalla.style.filter = "blur(5px)"
}


//4. funcion zoom y rotar
function zoomyrotar () {
    console.log("imagen con zoom y rotada")
    pantalla.style.transform = "rotate(45deg) scale(1.5)"
    pantalla.style.transition = "transform 0.5s ease-in-out"
}


//5. eventos 
btn1.addEventListener("click", blancoynegro )
btn2.addEventListener("click", desenfocar )
btn3.addEventListener("click", zoomyrotar)