// Pregunta inicial: Front-End o Back-End
let area = prompt("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End? (Responde con 'Front-End' o 'Back-End')");

if (area === "Front-End") {
    // Pregunta específica para Front-End
    let frontEndChoice = prompt("¿Quieres aprender React o aprender Vue? (Responde con 'React' o 'Vue')");
    alert(`Has elegido aprender ${frontEndChoice} en el área de Front-End.`);
} else if (area === "Back-End") {
    // Pregunta específica para Back-End
    let backEndChoice = prompt("¿Quieres aprender C# o aprender Java? (Responde con 'C#' o 'Java')");
    alert(`Has elegido aprender ${backEndChoice} en el área de Back-End.`);
} else {
    alert("Opción no válida. Por favor, recarga la página y elige una opción válida.");
}

// Pregunta sobre especialización o Fullstack
let specialization = prompt("¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack? (Responde con 'especializarme' o 'Fullstack')");

if (specialization === "especializarme") {
    alert("Has elegido seguir especializándote en el área elegida.");
} else if (specialization === "Fullstack") {
    alert("Has elegido desarrollarte para convertirte en Fullstack.");
} else {
    alert("Opción no válida. Por favor, recarga la página y elige una opción válida.");
}

// Pregunta sobre tecnologías adicionales
let moreTechnologies = true;

while (moreTechnologies) {
    let technology = prompt("¿En qué tecnologías te gustaría especializarte o conocer?");
    alert(`¡Genial! Es interesante aprender sobre ${technology}.`);
    moreTechnologies = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Responde con 'ok' para continuar o cualquier otra cosa para finalizar)") === "ok";
}

alert("¡Gracias por participar en el juego de decisiones de aprendizaje en programación!");