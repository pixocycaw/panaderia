document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const track = document.querySelector('.carousel-track');
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
    const cards = Array.from(document.querySelectorAll('.product-card'));
    
    function setupInfiniteCarousel() {
        // Clonar productos para desplazamiento infinito
        const firstSetClone = cards.map(card => card.cloneNode(true));
        const lastSetClone = cards.map(card => card.cloneNode(true));
        
        firstSetClone.forEach(clone => track.appendChild(clone));
        lastSetClone.reverse().forEach(clone => track.insertBefore(clone, track.firstChild));
        
        return cards.length;
    }
    
    const originalSetSize = setupInfiniteCarousel();
    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // Espacio entre tarjetas
    
    // Variables de posición
    let currentIndex = originalSetSize;
    let isMoving = false;
    
    function centerCarousel(animate = false) {
        // Centrar el carrusel inicialmente
        const containerWidth = track.parentElement.offsetWidth;
        const visibleCards = Math.floor(containerWidth / (cardWidth + gap));
        const middlePoint = Math.floor(originalSetSize / 2);
        
        currentIndex = originalSetSize + middlePoint - Math.floor(visibleCards / 2);
        moveCarousel(animate);
    }
    
    function moveCarousel(animate = true) {
        // Mover el carrusel a la posición actual
        const position = -currentIndex * (cardWidth + gap);
        
        track.style.transition = animate ? 'transform 0.3s ease' : 'none';
        track.style.transform = `translateX(${position}px)`;
        
        isMoving = animate;
    }
    
    track.addEventListener('transitionend', () => {
        isMoving = false;
        
        // Reiniciar posición para efecto infinito
        if (currentIndex >= originalSetSize * 2) {
            currentIndex = currentIndex - originalSetSize;
            moveCarousel(false);
        }
        else if (currentIndex < originalSetSize) {
            currentIndex = currentIndex + originalSetSize;
            moveCarousel(false);
        }
    });
    
    // Controladores de botones
    leftBtn.addEventListener('click', () => {
        if (isMoving) return;
        currentIndex--;
        moveCarousel();
    });
    
    rightBtn.addEventListener('click', () => {
        if (isMoving) return;
        currentIndex++;
        moveCarousel();
    });
    
    // Soporte para gestos táctiles
    let touchStart = 0;
    let touchEnd = 0;
    
    track.addEventListener('touchstart', e => {
        touchStart = e.changedTouches[0].clientX;
    });
    
    track.addEventListener('touchend', e => {
        touchEnd = e.changedTouches[0].clientX;
        
        if (Math.abs(touchStart - touchEnd) > 50) {
            if (touchStart > touchEnd) {
                // Deslizar a la izquierda
                if (!isMoving) {
                    currentIndex++;
                    moveCarousel();
                }
            } else {
                // Deslizar a la derecha
                if (!isMoving) {
                    currentIndex--;
                    moveCarousel();
                }
            }
        }
    });
    
    // Ajustar al cambiar tamaño de ventana
    window.addEventListener('resize', () => {
        centerCarousel(false);
    });
    
    // Funcionalidad de carrito (modificada para usar localStorage)
    const cartCount = document.querySelector('.cart-count');
    let itemsInCart = localStorage.getItem('cartItems') ? parseInt(localStorage.getItem('cartItems')) : 0;
    cartCount.textContent = itemsInCart;
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            itemsInCart++;
            cartCount.textContent = itemsInCart;
            
            // Save to localStorage
            localStorage.setItem('cartItems', itemsInCart);
            
            // Animation
            button.classList.add('added');
            setTimeout(() => button.classList.remove('added'), 500);
            
            // Get product information
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productImage = productCard.querySelector('img').src;
            
            // Save product to cart
            saveProductToCart(productName, productImage);
        });
    });
    
    function saveProductToCart(name, image) {
        // Get existing cart items or initialize empty array
        const cartItems = localStorage.getItem('cartProducts') 
            ? JSON.parse(localStorage.getItem('cartProducts')) 
            : [];
        
        // Add new item
        cartItems.push({
            name: name,
            image: image,
            timestamp: new Date().toISOString()
        });
        
        // Save back to localStorage
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }
    
    // Inicializar el carrusel
    centerCarousel();
});
