// Filtro de Alebrijes
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Cambiar botón activo
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
            if (filter === 'todos' || card.getAttribute('data-cat') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Manejo de formulario de visita
const form = document.getElementById('booking-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por tu interés. Casa Montecino revisará tu solicitud y te contactará por correo.');
        form.reset();
    });
}