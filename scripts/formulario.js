document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value.trim();
            
            // Simulación de envío de formulario
            // Normalmente aquí iría una llamada a un servidor
            console.log('Formulario enviado:', { nombre, email, telefono, asunto, mensaje });
            
            // Mostrar notificación de éxito
            mostrarNotificacion('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
            
            // Resetear el formulario
            contactForm.reset();
        });
    }
    
    // Función para mostrar notificaciones
    function mostrarNotificacion(mensaje, tipo = 'info') {
        // Verificar si ya existe la función en carrito.js
        if (typeof window.mostrarNotificacion === 'function') {
            window.mostrarNotificacion(mensaje, tipo);
        } else {
            // Implementación de respaldo por si no existe la función
            const notificacion = document.createElement('div');
            notificacion.className = `notificacion ${tipo}`;
            notificacion.textContent = mensaje;
            
            document.body.appendChild(notificacion);
            
            // Mostrar la notificación
            setTimeout(() => {
                notificacion.classList.add('mostrar');
            }, 10);
            
            // Ocultar y eliminar después de 3 segundos
            setTimeout(() => {
                notificacion.classList.remove('mostrar');
                setTimeout(() => {
                    notificacion.remove();
                }, 300);
            }, 3000);
        }
    }
}); 