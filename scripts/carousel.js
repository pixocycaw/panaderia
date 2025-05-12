document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const productCards = document.querySelectorAll('.product-card');
    
    // Apply smoother scrolling styles
    carouselTrack.style.willChange = 'transform';
    carouselTrack.style.backfaceVisibility = 'hidden';
    carouselTrack.style.perspective = '1000px';
    
    // First, get exact copies of the original product cards before modifying the DOM
    const originalCards = Array.from(productCards).map(card => card.cloneNode(true));
    
    // Clone items for infinite scrolling with perfect matching
    function setupInfiniteCarousel() {
        // Clean up any existing clones first to avoid duplications
        const existingItems = Array.from(carouselTrack.children);
        for (let i = productCards.length; i < existingItems.length; i++) {
            carouselTrack.removeChild(existingItems[i]);
        }
        
        // Clone the entire set of cards to ensure perfect matching
        const fullSetClone = originalCards.map(card => card.cloneNode(true));
        const fullSetCloneLeft = originalCards.map(card => card.cloneNode(true));
        
        // Append the full clone set to the end
        fullSetClone.forEach(clone => {
            carouselTrack.appendChild(clone);
        });
        
        // Insert the full clone set at the beginning
        fullSetCloneLeft.reverse().forEach(clone => {
            carouselTrack.insertBefore(clone, carouselTrack.firstChild);
        });
        
        return originalCards.length;
    }
    
    const originalCount = setupInfiniteCarousel();
    
    // Recalculate all the card elements after cloning
    const allCards = document.querySelectorAll('.carousel-track .product-card');
    const cardWidth = allCards[0].offsetWidth;
    const gap = 32; // 2rem gap between cards
    
    // Initialize position - start at the beginning of the first real set
    let currentIndex = originalCount;
    let isAnimating = false;
    let autoScrollInterval = null;
    const scrollDuration = 300; // ms
    
    // Center the carousel initially
    function centerCarouselInitially() {
        const containerWidth = carouselTrack.parentElement.offsetWidth;
        const visibleCards = Math.floor(containerWidth / (cardWidth + gap));
        const middleOfFirstSet = Math.floor(originalCount / 2);
        
        // Position to show items from the middle of the first set
        currentIndex = originalCount + middleOfFirstSet - Math.floor(visibleCards / 2);
        updateCarouselPosition(false);
    }
    
    // Function to update carousel position with optimized animation
    function updateCarouselPosition(animate = true) {
        const translateX = -currentIndex * (cardWidth + gap);
        
        if (animate) {
            isAnimating = true;
            carouselTrack.style.transition = `transform ${scrollDuration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
        } else {
            carouselTrack.style.transition = 'none';
        }
        
        // Use requestAnimationFrame for smoother rendering
        requestAnimationFrame(() => {
            carouselTrack.style.transform = `translateX(${translateX}px)`;
        });
    }
    
    // Check if we need to reset position and do it immediately
    function checkAndResetPosition() {
        // If we've gone too far right (into the cloned section at the end)
        if (currentIndex >= originalCount * 2) {
            // Reset to the equivalent position in the real set
            currentIndex = currentIndex - originalCount;
            updateCarouselPosition(false);
        } 
        // If we've gone too far left (into the cloned section at the beginning)
        else if (currentIndex < originalCount) {
            // Reset to the equivalent position in the real set
            currentIndex = currentIndex + originalCount;
            updateCarouselPosition(false);
        }
        
        isAnimating = false;
    }
    
    // Event listener for the transition end
    carouselTrack.addEventListener('transitionend', () => {
        checkAndResetPosition();
    });
    
    // Left button click handler
    btnLeft.addEventListener('click', () => {
        if (isAnimating) return;
        
        currentIndex--;
        updateCarouselPosition(true);
    });
    
    // Right button click handler
    btnRight.addEventListener('click', () => {
        if (isAnimating) return;
        
        currentIndex++;
        updateCarouselPosition(true);
    });
    
    // Auto-scroll function for continuous smooth movement
    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            if (!isAnimating) {
                currentIndex++;
                updateCarouselPosition(true);
            }
        }, 5000); // Auto-scroll every 5 seconds
    }
    
    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }
    
    // Improved touch handling for mobile
    let touchStartX = 0;
    let touchMoveX = 0;
    let isDragging = false;
    let startTime = 0;
    let startTranslate = 0;
    
    carouselTrack.addEventListener('touchstart', (e) => {
        if (isAnimating) return;
        
        touchStartX = e.touches[0].clientX;
        startTime = Date.now();
        isDragging = true;
        
        // Get current position
        startTranslate = -currentIndex * (cardWidth + gap);
        
        // Disable transitions for direct dragging
        carouselTrack.style.transition = 'none';
    });
    
    carouselTrack.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        touchMoveX = e.touches[0].clientX;
        const diffX = touchMoveX - touchStartX;
        
        // Apply direct transform while dragging for responsive feel
        requestAnimationFrame(() => {
            carouselTrack.style.transform = `translateX(${startTranslate + diffX}px)`;
        });
    });
    
    carouselTrack.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX;
        const timeElapsed = Date.now() - startTime;
        
        // Calculate swipe velocity for "momentum" scrolling
        const velocity = Math.abs(diffX / timeElapsed);
        
        // Threshold and direction detection
        const moveThreshold = cardWidth * 0.2;
        const swipeDirection = diffX > 0 ? -1 : 1; // -1 left, 1 right
        
        // Determine how many cards to move based on swipe velocity and distance
        let cardsToMove = 1;
        if (velocity > 0.5 && Math.abs(diffX) > moveThreshold) {
            cardsToMove = Math.min(3, Math.ceil(velocity * 2)); // Move up to 3 cards for fast swipes
        }
        
        // Apply the move only if the swipe was significant
        if (Math.abs(diffX) > moveThreshold || velocity > 0.5) {
            currentIndex += cardsToMove * swipeDirection;
        }
        
        // Re-enable transitions and update position
        carouselTrack.style.transition = `transform ${scrollDuration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
        updateCarouselPosition(true);
    });
    
    // Prevent dragging on desktop
    carouselTrack.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });
    
    // Handle window resize with debounce for better performance
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalculate dimensions on resize
            const newCardWidth = allCards[0].offsetWidth;
            if (Math.abs(newCardWidth - cardWidth) > 10) {
                location.reload(); // Refresh for major size changes
            } else {
                centerCarouselInitially();
            }
        }, 250);
    });
    
    // Preload images for smoother visual experience
    function preloadImages() {
        allCards.forEach(card => {
            const img = card.querySelector('img');
            if (img && img.src) {
                const preloadImg = new Image();
                preloadImg.src = img.src;
            }
        });
    }
    
    // Initialize the carousel
    preloadImages();
    centerCarouselInitially();
    startAutoScroll();
    
    // Add hover pause for auto-scroll
    carouselTrack.addEventListener('mouseenter', stopAutoScroll);
    carouselTrack.addEventListener('mouseleave', startAutoScroll);
    
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
    
    // Debug function to visualize the current position
    function logCurrentPosition() {
        const visibleCardIndex = currentIndex % originalCount;
        console.log(`Current index: ${currentIndex}, Visible card: ${visibleCardIndex}`);
    }
    
    // You can uncomment this to debug
    // btnLeft.addEventListener('click', logCurrentPosition);
    // btnRight.addEventListener('click', logCurrentPosition);
});
