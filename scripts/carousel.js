document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const productCards = document.querySelectorAll('.product-card');
    
    let currentPosition = 0;
    const cardWidth = productCards[0].offsetWidth;
    const gap = 32; // 2rem gap between cards
    const cardsPerView = Math.floor(carouselTrack.offsetWidth / (cardWidth + gap));
    const maxPosition = productCards.length - cardsPerView;

    // Initialize carousel
    updateCarouselButtons();

    // Event listeners for buttons
    btnLeft.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateCarouselPosition();
        }
    });

    btnRight.addEventListener('click', () => {
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateCarouselPosition();
        }
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentPosition < maxPosition) {
                // Swipe left
                currentPosition++;
            } else if (diff < 0 && currentPosition > 0) {
                // Swipe right
                currentPosition--;
            }
            updateCarouselPosition();
        }
    }

    function updateCarouselPosition() {
        const offset = currentPosition * (cardWidth + gap);
        carouselTrack.style.transform = `translateX(-${offset}px)`;
        updateCarouselButtons();
    }

    function updateCarouselButtons() {
        btnLeft.style.opacity = currentPosition === 0 ? '0.5' : '1';
        btnLeft.style.cursor = currentPosition === 0 ? 'not-allowed' : 'pointer';
        
        btnRight.style.opacity = currentPosition === maxPosition ? '0.5' : '1';
        btnRight.style.cursor = currentPosition === maxPosition ? 'not-allowed' : 'pointer';
    }

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newCardWidth = productCards[0].offsetWidth;
            const newCardsPerView = Math.floor(carouselTrack.offsetWidth / (newCardWidth + gap));
            const newMaxPosition = productCards.length - newCardsPerView;
            
            if (currentPosition > newMaxPosition) {
                currentPosition = newMaxPosition;
            }
            
            updateCarouselPosition();
        }, 250);
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let itemsInCart = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            itemsInCart++;
            cartCount.textContent = itemsInCart;
            
            // Add animation
            button.classList.add('added');
            setTimeout(() => {
                button.classList.remove('added');
            }, 1000);
        });
    });
});
