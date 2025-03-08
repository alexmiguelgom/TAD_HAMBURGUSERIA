document.addEventListener('DOMContentLoaded', function() {


    const fechaInput = document.getElementById('fecha');
    const now = new Date();
    const openingTime = new Date();
    const closingTime = new Date();
    
    openingTime.setHours(12, 0, 0, 0); // 12:00 PM
    closingTime.setHours(22, 30, 0, 0); // 10:30 PM (30 minutos antes de cerrar)

    // Set the minimum date and time to now
    fechaInput.min = now.toISOString().slice(0, 16);

    fechaInput.addEventListener('input', function() {
        const selectedDate = new Date(fechaInput.value);
        const selectedTime = selectedDate.getHours() * 60 + selectedDate.getMinutes();
        const openingMinutes = openingTime.getHours() * 60 + openingTime.getMinutes();
        const closingMinutes = closingTime.getHours() * 60 + closingTime.getMinutes();

        if (selectedTime < openingMinutes || selectedTime > closingMinutes) {
            alert('La reserva debe ser dentro del horario de apertura: 12:00 - 22:30');
            fechaInput.value = '';
        }
    });

    const reservarButton = document.querySelector('button[data-bs-target="#confirmModal"]');
    
    reservarButton.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value;
        const personas = document.getElementById('personas').value;
        const preferencia = document.getElementById('preferencia').value;
        

        document.getElementById('confirmNombre').textContent = nombre;
        document.getElementById('confirmEmail').textContent = email;
        document.getElementById('confirmTelefono').textContent = telefono;
        document.getElementById('confirmFecha').textContent = fecha;
        document.getElementById('confirmPersonas').textContent = personas;
        document.getElementById('confirmPreferencia').textContent = preferencia;
    });
});



