/* // Selección de elementos
const plantas = document.querySelectorAll('.planta, .planta-1, .planta-2, .planta-3, .planta12');
const girasoles = document.querySelectorAll('.Girasol, .girasol2, .girasol3');
const arveja = document.querySelector('.arveja1');
const zombies = document.querySelectorAll('.zoombie');
const contadorZombies = document.getElementById('contador-zoombies');
const contadorGirasoles = document.getElementById('contador-girasoles');

// Contadores
let totalZombies = 0;
let totalGirasoles = 0;




// Disparar al hacer clic en una planta
plantas.forEach(function(planta) {
  planta.addEventListener('click', function() {
    dispararArvejaDesde(planta);
  });
});

// Sumar puntos al hacer clic en un girasol
girasoles.forEach(function (girasol) {
    
    girasol.addEventListener("click", function () {
        girasol.classList.add("girasol");
        totalGirasoles++;
        contadorGirasoles.textContent = totalGirasoles;
       
    }) 
})

// Disparo de arveja con animación y colisión
function dispararArvejaDesde(planta) {
  const plantaRect = planta.getBoundingClientRect();
  const pantallaRect = document.querySelector('.pantalla').getBoundingClientRect();

  // Posicionar la arveja al lado de la planta

  const top = plantaRect.top - pantallaRect.top + plantaRect.height / 2 - arveja.offsetHeight / 2;
  const left = plantaRect.left - pantallaRect.left + plantaRect.width;


  arveja.style.top = `${top}px`;
  arveja.style.left = `${left}px`;
  arveja.style.display = 'block';
  arveja.classList.add('tiro');

  // Después de la animación (1s), ocultar y verificar colisiones
 setTimeout(function() {
  detectarColision();
  arveja.style.display = 'none';
  arveja.classList.remove('tiro');
}, 1000);
}
// Detectar colisión entre la arveja y los zombies
function detectarColision() {
  var arvejaRect = arveja.getBoundingClientRect();

  zombies.forEach(function(zombie) {
    if (zombie.style.display === 'none') return;

    var zombieRect = zombie.getBoundingClientRect();

    if (
      arvejaRect.left < zombieRect.right &&
      arvejaRect.right > zombieRect.left &&
      arvejaRect.top < zombieRect.bottom &&
      arvejaRect.bottom > zombieRect.top
    ) {
      zombie.style.display = 'none'; // Zombie eliminado
      totalZombies++;
      contadorZombies.textContent = totalZombies;
    }
  });
}
 */



/* const girasol = document.querySelector(".coin")
const zoombies = document.querySelector(".zoombies")
const contadorGirasoles = document.querySelector("#contador-girasoles")
const contadorZoombies = document.querySelector("#contador-zoombies")


let totalGirasoles = 0
let totalZoombies = 0


zoombies.forEach(function(zoombie) {
    zoombie.addEventListener("click", function() {
        zoombie.classList.add("saltar")
        totalzoombie++
        contadorzoombie.textContent = totalxoombie
    })
})
 */
let planta1 = document.querySelector('.planta-1');
let planta2 = document.querySelector('.planta-2');
let planta3 = document.querySelector('.planta-3');
let planta12 = document.querySelector('.planta12');
let girasoles = document.querySelectorAll('.Girasol, .girasol2, .girasol3');
let arveja1 = document.querySelector('.arveja1');
let arveja2 = document.querySelector('.arveja2');
let arveja3 = document.querySelector('.arveja3');
let arveja4 = document.querySelector('.arveja4');
let arveja5 = document.querySelector('.arveja5');
let arveja6 = document.querySelector('.arveja6');
let arveja7 = document.querySelector('.arveja7');
let arveja8 = document.querySelector('.arveja8');
let zoombies = document.querySelectorAll('.zoombie');
let contadorzoombie = document.getElementById('contador-zoombies');
let contadorGirasoles = document.getElementById('contador-girasoles');
let dispararArvejaDesde = document.querySelector('.tiro');

let totalZoombies = 0;
let totalGirasoles = 0;

arveja1.style.display = 'none';
arveja2.style.display = 'none';
arveja3.style.display = 'none';
arveja4.style.display = 'none';
arveja5.style.display = 'none';
arveja6.style.display = 'none';
arveja7.style.display = 'none';
arveja8.style.display = 'none';


  planta1.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja8.style.display = 'block';
   
  })

   planta2.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja2.style.display = 'block';
   
  })

   planta3.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja3.style.display = 'block';
   
  })

  zoombies.forEach(function(zoombie) {
    zoombie.addEventListener("click", function() {
        zoombie.classList.add("saltar")
        console.log('zoombie');
        totalZoombies++
        contadorzoombie.textContent = totalZoombies
    })
})

    




  /*  planta4.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja4.style.display = 'block';
   
  })

   planta5.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja5.style.display = 'block';
   
  })

   planta6.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja6.style.display = 'block';
   
  })
   planta7.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja7.style.display = 'block';
   
  })
   planta7.addEventListener('click', function () {
    console.log('Planta disparada');
    arveja8.style.display = 'block';
   
  })
 */
     
  





/* 
  plantas.forEach(function(planta) {
    planta.addEventListener('click', function() {
      console.log('Planta disparada');
      plantas.forEach(function(planta) {
        planta.classList.add('tiro');
      });
    });
  });

 */



/* plantas.forEach(function(planta) {
  planta.addEventListener('click', function() {
    plantas.classList.add('tiro');
  });
}); */


girasoles.forEach(function (girasol) {

  girasol.addEventListener("click", function () {
    girasol.classList.add("girasol");
    totalGirasoles++;
    contadorGirasoles.textContent = totalGirasoles;

  })
})

