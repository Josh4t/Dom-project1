document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('.total-price');

    cartItems.forEach(item => {
        const minusButton = item.querySelector('.minus');
        const plusButton = item.querySelector('.plus');
        const deleteButton = item.querySelector('.delete');
        const likeButton = item.querySelector('.like');
        const quantitySpan = item.querySelector('.quantity');
        const priceSpan = item.querySelector('.item-price');
        const itemPrice = parseFloat(priceSpan.textContent.replace('$', ''));

        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotalPrice();
            }
        });

        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotalPrice();
        });

        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            totalPrice += price * quantity;
        });
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    updateTotalPrice(); // Initialize total price
});