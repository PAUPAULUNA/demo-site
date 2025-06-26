let cartCount = 0;
const buttons = document.querySelectorAll('.add-to-cart');
const cartDisplay = document.querySelector('.cart-count');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
    });
});
