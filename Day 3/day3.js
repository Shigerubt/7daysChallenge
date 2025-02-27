<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Decisiones de Aprendizaje</title>
</head>
<body>
    <h1>Juego de Decisiones de Aprendizaje</h1>
    <div id="content">
        <label for="area">¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?</label>
        <select id="area">
            <option value="">Selecciona una opción</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
        </select>
        <button onclick="nextQuestion()">Siguiente</button>
    </div>

    <script>
        function nextQuestion() {
            const area = document.getElementById('area').value;
            const content = document.getElementById('content');

            if (area === "Front-End") {
                content.innerHTML = `
                    <label for="frontEndChoice">¿Quieres aprender React o aprender Vue?</label>
                    <select id="frontEndChoice">
                        <option value="">Selecciona una opción</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <button onclick="specializationQuestion()">Siguiente</button>
                `;
            } else if (area === "Back-End") {
                content.innerHTML = `
                    <label for="backEndChoice">¿Quieres aprender C# o aprender Java?</label>
                    <select id="backEndChoice">
                        <option value="">Selecciona una opción</option>
                        <option value="C#">C#</option>
                        <option value="Java">Java</option>
                    </select>
                    <button onclick="specializationQuestion()">Siguiente</button>
                `;
            } else {
                alert("Opción no válida. Por favor, elige una opción válida.");
            }
        }

        function specializationQuestion() {
            const content = document.getElementById('content');
            content.innerHTML = `
                <label for="specialization">¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack?</label>
                <select id="specialization">
                    <option value="">Selecciona una opción</option>
                    <option value="especializarme">especializarme</option>
                    <option value="Fullstack">Fullstack</option>
                </select>
                <button onclick="moreTechnologiesQuestion()">Siguiente</button>
            `;
        }

        function moreTechnologiesQuestion() {
            const content = document.getElementById('content');
            content.innerHTML = `
                <label for="technology">¿En qué tecnologías te gustaría especializarte o conocer?</label>
                <input type="text" id="technology">
                <button onclick="addTechnology()">Añadir</button>
                <div id="technologiesList"></div>
                <button onclick="finish()">Finalizar</button>
            `;
        }

        function addTechnology() {
            const technology = document.getElementById('technology').value;
            const technologiesList = document.getElementById('technologiesList');
            const newTechnology = document.createElement('p');
            newTechnology.textContent = `¡Genial! Es interesante aprender sobre ${technology}.`;
            technologiesList.appendChild(newTechnology);
            document.getElementById('technology').value = '';
        }

        function finish() {
            alert("¡Gracias por participar en el juego de decisiones de aprendizaje en programación!");
        }
    </script>
</body>
</html>