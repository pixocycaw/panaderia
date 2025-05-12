document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del carrito
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Inicializar contador del carrito desde localStorage
    let itemsInCart = localStorage.getItem('cartItems') ? parseInt(localStorage.getItem('cartItems')) : 0;
    cartCount.textContent = itemsInCart;
    
    // Manejador de clics en botones de añadir al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Incrementar contador del carrito
            itemsInCart++;
            cartCount.textContent = itemsInCart;
            
            // Guardar en localStorage
            localStorage.setItem('cartItems', itemsInCart);
            
            // Animación de feedback visual
            button.classList.add('added');
            setTimeout(() => {
                button.classList.remove('added');
            }, 500);
            
            // Obtener información del producto
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productImage = productCard.querySelector('img').src;
            
            // Guardar el producto seleccionado en localStorage
            guardarProductoEnCarrito(productName, productImage);
            
            // Mostrar mensaje de confirmación
            mostrarConfirmacion(productName);
        });
    });
    
    function guardarProductoEnCarrito(nombre, imagen) {
        // Obtener elementos existentes del carrito o inicializar array vacío
        const cartItems = localStorage.getItem('cartProducts') 
            ? JSON.parse(localStorage.getItem('cartProducts')) 
            : [];
        
        // Añadir nuevo elemento
        cartItems.push({
            nombre: nombre,
            imagen: imagen,
            timestamp: new Date().toISOString()
        });
        
        // Guardar de vuelta en localStorage
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }
    
    function mostrarConfirmacion(nombreProducto) {
        // Crear un elemento de mensaje temporal
        const mensaje = document.createElement('div');
        mensaje.classList.add('cart-confirmation');
        mensaje.textContent = `¡${nombreProducto} añadido al carrito!`;
        
        // Añadir al body
        document.body.appendChild(mensaje);
        
        // Eliminar después de la animación
        setTimeout(() => {
            mensaje.classList.add('show');
            
            setTimeout(() => {
                mensaje.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(mensaje);
                }, 300);
            }, 2000);
        }, 10);
    }
}); 