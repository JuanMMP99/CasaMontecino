// Manejo del formulario de visita
document.getElementById('visit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí podrías integrar un servicio de correo o simplemente mostrar un mensaje
    alert('¡Gracias por tu interés, Casa Montecino te espera! Nos pondremos en contacto pronto para confirmar tu cita.');
    
    this.reset(); // Limpiar el formulario
});

// Efecto de cambio de color en la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 5%';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '20px 5%';
        navbar.style.boxShadow = 'none';
    }
});