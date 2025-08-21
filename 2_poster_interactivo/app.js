const monedas = document.querySelectorAll(".coin")
const corazones = document.querySelectorAll(".corazon")
const contadorMonedas = document.querySelector("#contador-monedas")
const contadorCorazones = document.querySelector("#contador-corazones")
const audio1 = document.querySelector("#audio-1")
const audio2 = document.querySelector("#audio-2")
const audiofondo = document.querySelector("#audio-fondo")


let totalMonedas = 0
let totalCorazones = 0




monedas.forEach(function(moneda){

    moneda.addEventListener('click', function(){
    moneda.classList.add('saltar')
    totalMonedas++
    contadorMonedas.textContent = totalMonedas
}) 
 
})

corazones.forEach(function(corazon){
    corazon.addEventListener('click', function(){
    corazon.classList.add('saltar')
    totalCorazones++
    contadorCorazones.textContent = totalCorazones
 }) 
})









function reproducirAudio() {
    audio.play()

}

playAudio.addEventListener("click", reproducirAudio)


function pausarAudio() {
    video.pause()
}


stopAudio.addEventListener("click", pausarAudio)

function toggleAudioUno() { 
    if(audio1.paused){ 
    audio1.play()
    playStopMoneda.textContent = "Stop ⏸️"
}else{
    audio1.pause()
    playStopMoneda.textContent = "Play ▶️"
}
}



playStopCorazon .addEventListener("click", toggleAudioUno)



stopVideo.addEventListener("click", pausarVideo)

function toggleAudioDos() { 
    if(audio2.paused){ 
    audio2.play()
    playStopCorazon.textContent = "Stop ⏸️"
}else{
    audio2.pause()
    playStopCorazon.textContent = "Play ▶️"
}
}
playStopCorazon.addEventListener("click", toggleAudioDos)

//Galeria

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const escena1 = document.querySelector('.escena-1');
const escena2 = document.querySelector('.escena-2');
const escena3 = document.querySelector('.escena-3');
let i = 1; 

next.addEventListener('click', function() {
    if(i ===1){
        escena1.classList.add('d-none');
        escena2.classList.remove('d-none');
        i++
    }
    else if(i === 2){
        escena2.classList.add('d-none');
        escena3.classList.remove('d-none');
        i++
    }   
})

