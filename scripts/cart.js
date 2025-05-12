document.addEventListener('DOMContentLoaded', () => {
    // Cart functionality
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Initialize cart count from localStorage
    let itemsInCart = localStorage.getItem('cartItems') ? parseInt(localStorage.getItem('cartItems')) : 0;
    cartCount.textContent = itemsInCart;
    
    // Add to cart button click handler
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increment cart counter
            itemsInCart++;
            cartCount.textContent = itemsInCart;
            
            // Save cart count to localStorage
            localStorage.setItem('cartItems', itemsInCart);
            
            // Visual feedback animation
            button.classList.add('added');
            setTimeout(() => {
                button.classList.remove('added');
            }, 500);
            
            // Get product information
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productImage = productCard.querySelector('img').src;
            
            // You could save the selected products to localStorage as well
            saveProductToCart(productName, productImage);
            
            // Show confirmation message
            showConfirmation(productName);
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
    
    function showConfirmation(productName) {
        // Create a temporary message element
        const message = document.createElement('div');
        message.classList.add('cart-confirmation');
        message.textContent = `¡${productName} añadido al carrito!`;
        
        // Add to the body
        document.body.appendChild(message);
        
        // Remove after animation
        setTimeout(() => {
            message.classList.add('show');
            
            setTimeout(() => {
                message.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(message);
                }, 300);
            }, 2000);
        }, 10);
    }
}); 