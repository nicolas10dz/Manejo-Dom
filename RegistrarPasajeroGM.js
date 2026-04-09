document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector(".encuesta");
    const checkbox = document.getElementById("terminos");

    const inputs = {
        nombre: document.getElementById("nombre"),
        apellido: document.getElementById("apellido"),
        email: document.getElementById("email"),
        telefono: document.getElementById("telefono"),
        password: document.getElementById("password"),
    };

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();


        if (!checkbox.checked) {
            alert("Debes aceptar los términos");
            return; 
        }


        const datos = {
            nombre: inputs.nombre.value,
            apellido: inputs.apellido.value,
            email: inputs.email.value,
            telefono: inputs.telefono.value,
            password: inputs.password.value,
        };

        localStorage.setItem("usuario", JSON.stringify(datos));
        console.log("Datos guardados:", datos);
        alert("Registro exitoso 🚀");

        formulario.reset();
        window.location.href = "/UnionConductores/usuario/index.html";
        
    });
});