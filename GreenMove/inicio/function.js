const botones = document.querySelectorAll(".buttons_conductor, .buttons_pasajero");
const continuar = document.querySelector(".continuar");

let urlDestino = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        if (boton.classList.contains("active")) {
            boton.classList.remove("active");
            urlDestino = "";
        } else {
            botones.forEach(b => b.classList.remove("active"));
            boton.classList.add("active");

            if (boton.classList.contains("buttons_pasajero")) {
                urlDestino = "/UnionConductores/usuario/index.html";
            } else {
                urlDestino = "/UnionConductores/GreenMoveLoginConductor/index.html";
            }
        }

        const haySeleccion = document.querySelector(".active");

        if (haySeleccion) {
            continuar.classList.add("activo");
        } else {
            continuar.classList.remove("activo");
        }
    });
});

continuar.addEventListener("click", () => {
    if (!continuar.classList.contains("activo")) return;

    window.location.href = urlDestino;
});