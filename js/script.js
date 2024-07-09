// script.js

document.querySelectorAll('.mostrarDedicatoria').forEach(boton => {
    boton.addEventListener('click', () => {
        const dedicatoria = boton.nextElementSibling;

        // Alternar la visibilidad de la dedicatoria
        if (dedicatoria.style.display === "none" || dedicatoria.style.display === "") {
            dedicatoria.style.display = "block";
        } else {
            dedicatoria.style.display = "none";
        }
    });
});




menuDesplegable = document.querySelector(".iconoMenu");
menuDesplegable.onclick = function () {
    desplegar = document.querySelector("nav");
    desplegar.classList.toggle("desplegar")
}



