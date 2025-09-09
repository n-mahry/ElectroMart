let cart = [];

async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();

    const container = document.getElementById('products');
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>💰 $${product.price}</strong></p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
          🛒 Add to Cart
        </button>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: $${total}`;

  // Enable checkout if cart not empty
  checkoutBtn.disabled = cart.length === 0;
}

function checkout() {
  if (cart.length === 0) return;

  alert("✅ Thank you for your purchase! Your order has been placed.");
  cart = [];
  renderCart();
}

window.onload = loadProducts;
