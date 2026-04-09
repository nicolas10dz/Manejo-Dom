const API_KEY = "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";

async function preguntar() {
    const input = document.getElementById("pregunta");
    const pregunta = input.value.trim();

    if (!pregunta) return;

    const contenedor = document.getElementById("respuesta");

    contenedor.innerHTML += `
<div class="mensaje usuario">
    ${pregunta}
</div>
`;

    const loading = document.createElement("div");
loading.classList.add("mensaje", "ia");
loading.innerHTML = "Escribiendo...";
    contenedor.appendChild(loading);

    input.value = "";

    try {
        const response = await fetch("http://localhost:3000/preguntar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pregunta: pregunta
    })
});

const data = await response.json();
console.log(JSON.stringify(data, null, 2)); // 👈 ESTE

contenedor.innerHTML += `
<div class="mensaje ia">
    ${data.respuesta}
</div>
`;

    } catch (error) {
        loading.remove();
        contenedor.innerHTML += `<div><b>Error:</b> ${error.message}</div>`;
    }


}

document.getElementById("pregunta").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        preguntar();
    }
});