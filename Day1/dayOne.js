document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let numberA = document.getElementById('numberInputA').value;
    let numberB = document.getElementById('numberInputB').value;
    let typeSelectA = document.getElementById('typeSelectA').value;
    let typeSelectB = document.getElementById('typeSelectB').value;
    let resultA, resultB;

    switch (typeSelectA) {
        case 'string':
            resultA = String(numberA);
            break;
        case 'int':
            resultA = parseInt(numberA);
            break;
        default:
            resultA = numberA;
    }

    switch (typeSelectB) {
        case 'string':
            resultB = String(numberB);
            break;
        case 'int':
            resultB = parseInt(numberB);
            break;
        default:
            resultB = numberB;
    }

    console.log('Result A:', resultA);
    console.log('Result B:', resultB);

    let message = `Result A: ${resultA}\nResult B: ${resultB}\n`;

    if (resultA == resultB) {
        message += 'Result A and Result B have the same value (==)\n';
    } else {
        message += 'Result A and Result B do not have the same value (==)\n';
    }

    if (resultA === resultB) {
        message += 'Result A and Result B have the same value and type (===)\n';
    } else {
        message += 'Result A and Result B do not have the same value and type (===)\n';
    }

    console.log(message);
    alert(message);
});


