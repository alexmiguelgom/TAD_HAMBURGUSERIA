document.addEventListener('DOMContentLoaded', function() {
    const fechaInput = document.getElementById('fecha');
    const now = new Date();
    const openingTime = new Date();
    const closingTime = new Date();
    
    openingTime.setHours(12, 0, 0, 0); // 12:00 PM
    closingTime.setHours(22, 30, 0, 0); // 10:30 PM (30 minutes before closing)

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
});

function initMap() {
    var location = {lat: 37.3555, lng: -5.9322};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}