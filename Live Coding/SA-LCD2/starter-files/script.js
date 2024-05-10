const API_ENDPOINT = 'https://yesno.wtf/api';

// Función para hacer una solicitud al API y mostrar la respuesta
async function fetchAnswer() {
    const question = document.getElementById('input').value.trim();

    // Verificar si la pregunta está vacía
    if (!question) {
        document.getElementById('error').innerText = 'Ingresa una pregunta.';
        return;
    }

    // Limpiar cualquier mensaje de error anterior
    document.getElementById('error').innerText = '';

    try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            throw new Error('algo salió mal');
        }

        const data = await response.json();
        document.getElementById('answer').innerText = data.answer;

        // Limpiar la pregunta y la respuesta después de 5 segundos
        setTimeout(() => {
            document.getElementById('input').value = ''; // Limpiar el input
            document.getElementById('answer').innerText = ''; // Limpiar la respuesta
        }, 5000);
    } catch (error) {
        console.error('Algo salió mal, error:', error);
        document.getElementById('answer').innerText = 'Hubo un error.';
    }
}

// Agregar un eventListener al botón para llamar a fetchAnswer cuando se haga click
document.getElementById('button').addEventListener('click', fetchAnswer);

// Función para manejar el evento de presionar Enter en el input
function handleKeyEnter(event) {
    if (event.key === 'Enter') {
        fetchAnswer();
    }
}
