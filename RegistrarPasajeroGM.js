document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector(".encuesta");
    const checkbox = document.getElementById("terminos");
    
    // Es mejor seleccionar por ID o Name para evitar errores de índice
    const inputs = {
        nombre: document.getElementById("nombre"),
        apellido: document.getElementById("apellido"),
        email: document.getElementById("email"),
        telefono: document.getElementById("telefono"),
        password: document.getElementById("password"),
    };

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        // 1. Validar Checkbox (Ahora sí se ejecuta al hacer click)
        if (!checkbox.checked) {
            alert("Debes aceptar los términos");
            return; // Detiene la ejecución aquí si no está marcado
        }

        // 2. Capturar datos
        const datos = {
            nombre: inputs.nombre.value,
            apellido: inputs.apellido.value,
            email: inputs.email.value,
            telefono: inputs.telefono.value,
            password: inputs.password.value,
        };

        // 3. Guardar y Notificar
        localStorage.setItem("usuario", JSON.stringify(datos));
        console.log("Datos guardados:", datos);
        alert("Registro exitoso 🚀");

        formulario.reset();
    });
});