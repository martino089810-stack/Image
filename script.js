// ==========================================
// ELEMENTOS
// ==========================================

const boton = document.getElementById("btnMostrar");

const imagen = document.getElementById("imagen");

const audio = document.getElementById("audio");


// ==========================================
// BOTÓN
// ==========================================

boton.addEventListener("click", function(){

    // Mostrar imagen
    imagen.style.display = "block";

    // Reiniciar audio
    audio.currentTime = 0;

    // Reproducir audio
    audio.play();

});