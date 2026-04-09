document.addEventListener("DOMContentLoaded", function() {

    const boton = document.getElementById("btnentrar");

    boton.addEventListener("click", function() {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 📦 Obtener datos guardados
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

        if (!usuarioGuardado) {
            alert("No hay usuarios registrados ❌");
            return;
        }

        // 🔍 Validar (puedes usar nombre o email)
        if (
            (username === usuarioGuardado.nombre || username === usuarioGuardado.email) &&
            password === usuarioGuardado.password
        ) {
            alert("Inicio de sesión exitoso ✅");

            // 👉 aquí puedes redirigir a otra página
            // window.location.href = "dashboard.html";

        } else {
            alert("Datos incorrectos ❌");
        }

    });

});