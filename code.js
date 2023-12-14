function addToDisplay(value) {
    // Agregamos el valor del botón presionado a la pantalla de entrada
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        // Evaluamos la expresión en la pantalla de entrada y mostramos el resultado en la pantalla de salida
        var result= eval(document.getElementById('display').value);
        document.getElementById('outputDisplay').value = result;
    } catch (error) {
        // En caso de error, mostramos "Error" en la pantalla de salida
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplays() {
    // Limpiamos ambas pantallas
    document.getElementById('display').value = '';
}