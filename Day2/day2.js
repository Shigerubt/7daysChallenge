document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let lenguaje = document.getElementById('lenguaje').value;
    let gustaLenguaje = document.getElementById('gustaLenguaje').value;

    let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    alert(mensaje);

    if (gustaLenguaje === 'si') {
        alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
    } else if (gustaLenguaje === 'no') {
        alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
    }
});