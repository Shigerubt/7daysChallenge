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
            const contentDiv = document.getElementById('content');

            if (area === "Front-End") {
                contentDiv.innerHTML = `
                    <label for="frontend">¿Qué tecnología te gustaría aprender?</label>
                    <select id="frontend">
                        <option value="">Selecciona una opción</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <button onclick="showResult()">Siguiente</button>
                `;
            } else if (area === "Back-End") {
                contentDiv.innerHTML = `
                    <label for="backend">¿Qué tecnología te gustaría aprender?</label>
                    <select id="backend">
                        <option value="">Selecciona una opción</option>
                        <option value="Node.js">Node.js</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                    </select>
                    <button onclick="showResult()">Siguiente</button>
                `;
            } else {
                alert("Por favor, selecciona un área.");
            }
        }

        function showResult() {
            const area = document.getElementById('area').value;
            let technology;

            if (area === "Front-End") {
                technology = document.getElementById('frontend').value;
            } else if (area === "Back-End") {
                technology = document.getElementById('backend').value;
            }

            if (technology) {
                document.getElementById('content').innerHTML = `
                    <h2>Has elegido ${area} con ${technology}</h2>
                `;
            } else {
                alert("Por favor, selecciona una tecnología.");
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