document.addEventListener("DOMContentLoaded", function() {

    const boton = document.getElementById("btnentrar");

    boton.addEventListener("click", function() {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 📦 Obtener usuario guardado
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

        // ❌ Si no hay datos
        if (!usuarioGuardado) {
            alert("No hay usuarios registrados ❌");
            return;
        }

        if (
        (username === usuarioGuardado.email || username === usuarioGuardado.nombre) &&
        password === usuarioGuardado.password
        ) {
        alert("Inicio de sesión exitoso ✅");
        } else {
        alert("Datos incorrectos ❌");
}
        

    });

});

