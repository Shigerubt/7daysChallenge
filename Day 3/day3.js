let userName = '';
let selectedArea = '';
let selectedFramework = '';
let selectedSpecialization = '';
let selectedTechnologies = [];

function askArea() {
    userName = document.getElementById('name').value;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <label for="area">Hola ${userName}, ¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?</label>
        <select id="area">
            <option value="">Selecciona una opción</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
        </select>
        <button onclick="nextQuestion()">Siguiente</button>
    `;
}

function nextQuestion() {
    console.log("nextQuestion function called");

    selectedArea = document.getElementById('area').value;
    const contentDiv = document.getElementById('content');

    if (selectedArea === "Front-End") {
        contentDiv.innerHTML = `
            <label for="frontend">¿Qué framework de Front-End te gustaría aprender, ${userName}?</label>
            <select id="frontend">
                <option value="">Selecciona una opción</option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="Angular">Angular</option>
            </select>
            <button onclick="specializationQuestion()">Siguiente</button>
        `;
    } else if (selectedArea === "Back-End") {
        contentDiv.innerHTML = `
            <label for="backend">¿Qué framework de Back-End te gustaría aprender, ${userName}?</label>
            <select id="backend">
                <option value="">Selecciona una opción</option>
                <option value="Node.js">Node.js</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
            </select>
            <button onclick="specializationQuestion()">Siguiente</button>
        `;
    } else {
        alert("Por favor, selecciona un área.");
    }
}

function specializationQuestion() {
    console.log("specializationQuestion function called");

    if (selectedArea === "Front-End") {
        selectedFramework = document.getElementById('frontend').value;
    } else if (selectedArea === "Back-End") {
        selectedFramework = document.getElementById('backend').value;
    }

    const content = document.getElementById('content');
    content.innerHTML = `
        <label for="specialization">¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack, ${userName}?</label>
        <select id="specialization">
            <option value="">Selecciona una opción</option>
            <option value="especializarme">especializarme</option>
            <option value="Fullstack">Fullstack</option>
        </select>
        <button onclick="moreTechnologiesQuestion()">Siguiente</button>
    `;
}

function moreTechnologiesQuestion() {
    console.log("moreTechnologiesQuestion function called");

    selectedSpecialization = document.getElementById('specialization').value;

    const content = document.getElementById('content');
    content.innerHTML = `
        <label for="technology">¿En qué tecnologías te gustaría especializarte o conocer, ${userName}?</label>
        <input type="text" id="technology">
        <button onclick="addTechnology()">Añadir</button>
        <div id="technologiesList"></div>
        <button onclick="finish()">Finalizar</button>
    `;
}

function addTechnology() {
    console.log("addTechnology function called");

    const technology = document.getElementById('technology').value;
    selectedTechnologies.push(technology);

    const technologiesList = document.getElementById('technologiesList');
    const newTechnology = document.createElement('p');
    newTechnology.textContent = `¡Genial! Es interesante aprender sobre ${technology}.`;
    technologiesList.appendChild(newTechnology);
    document.getElementById('technology').value = '';
}

function finish() {
    console.log("finish function called");

    const technologiesList = selectedTechnologies.join(', ');
    const message = `
        ¡Gracias por participar en el juego de decisiones de aprendizaje en programación, ${userName}!
        Te comprometes a aprender sobre las siguientes tecnologías:
        - Área: ${selectedArea}
        - Framework: ${selectedFramework}
        - Especialización: ${selectedSpecialization}
        - Tecnologías: ${technologiesList}
    `;
    alert(message);
}