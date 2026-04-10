document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.querySelector(".encuesta");
    const checkbox = document.getElementById("terminos");
    const inputs = document.getElementsByTagName("input");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const datos = {
            nombre: inputs[0].value,
            apellido: inputs[1].value,
            email: inputs[2].value,
            telefono: inputs[3].value,
            password: inputs[4].value,
            placa: inputs[5].value,
        };

        if (!checkbox.checked) {
            alert("Debes aceptar los términos");
            return;
        }

        // ✅ Guardar datos
        localStorage.setItem("usuario", JSON.stringify(datos));

        console.log("Datos guardados:", datos);
        alert("Registro exitoso 🚀");

        formulario.reset();

        // ✅ Redirigir al login
        window.location.href = "../GreenMoveLoginConductor/index.html";
    });

});