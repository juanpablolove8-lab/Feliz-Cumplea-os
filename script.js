const botonEntrar = document.getElementById("botonEntrar");

function mostrarSeccion(nombre) {

    document.querySelectorAll(".seccion").forEach(function(seccion) {
        seccion.style.display = "none";
    });

    document.getElementById(nombre).style.display = "block";
}