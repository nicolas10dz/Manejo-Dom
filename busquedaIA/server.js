const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "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";

app.post("/preguntar", async (req, res) => {
    const { pregunta } = req.body;

    try {
        const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: [
                { role: "user", content: pregunta }
            ]
        })
    }
);

        const text = await response.text();

let data;
try {
    data = JSON.parse(text);
} catch {
    return res.json({ error: text }); // 👈 muestra el error real
}

        let respuesta = "Error";

if (data.choices && data.choices.length > 0) {
    respuesta = data.choices[0].message.content;
} else {
    respuesta = JSON.stringify(data);
}

        res.json({ respuesta });

    } catch (error) {
        res.json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});