// Sample eBook data
const ebooks = [
    { id: 1, title: "Bhagavad Gita", price: 9.99 },
    { id: 2, title: "Krishna: The Supreme Personality of Godhead", price: 12.99 },
    // Add more eBook data as needed
];

// Display eBooks
const ebookContainer = document.getElementById('ebookContainer');
ebooks.forEach(ebook => {
    const ebookElement = document.createElement('div');
    ebookElement.classList.add('ebook');
    ebookElement.innerHTML = `<h3>${ebook.title}</h3><p>Price: $${ebook.price}</p>
                              <button onclick="addToCart(${ebook.id})">Add to Cart</button>`;
    ebookContainer.appendChild(ebookElement);
});

// Shopping Cart
const cartItems = [];
const cartList = document.getElementById('cartItems');

function addToCart(ebookId) {
    const ebook = ebooks.find(ebook => ebook.id === ebookId);
    cartItems.push(ebook);
    renderCart();
}

function renderCart() {
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${item.title} - $${item.price}`;
        cartList.appendChild(cartItem);
    });
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cartItems.length = 0; // Clear the cart
    renderCart();
});
