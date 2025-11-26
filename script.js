
const milkTeaVariants = [
    { id: 1, name: 'Classic Milk Tea', price: 0.00, description: 'NONE', image: 'images/classic.jpg' },
    { id: 2, name: 'Taro Milk Tea', price: 0.00, description: 'NONE', image: 'images/taro.jpg' },
    { id: 3, name: 'Matcha Milk Tea', price: 0.00, description: 'NONE', image: 'images/matcha.jpg' },
    { id: 4, name: 'Thai Milk Tea', price: 0.00, description: 'NONE', image: 'images/thai.jpg' },
    { id: 5, name: 'Brown Sugar Milk Tea', price: 0.00, description: 'NONE', image: 'images/brownsugar.jpg' },
    { id: 6, name: 'Wintermelon Milk Tea', price: 0.00, description: 'NONE', image: 'images/wintermelon.jpg' }
];

let currentSlide = 0;
let cart = [];

function initCarousel() {
    const carousel = document.getElementById('carousel');
    const dotsContainer = document.getElementById('dots');
    
    milkTeaVariants.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="carousel-img">
            <h3>${item.name}</h3>
            <div class="price">$${item.price.toFixed(2)}</div>
            <p>${item.description}</p>
        `;
        carousel.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });

    startAutoSlide();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % milkTeaVariants.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + milkTeaVariants.length) % milkTeaVariants.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function startAutoSlide() {
    setInterval(nextSlide, 4000);
}

function initMenu() {
    const menuGrid = document.getElementById('menuGrid');
    
    milkTeaVariants.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-img">
            <h3>${item.name}</h3>
            <div class="price">$${item.price.toFixed(2)}</div>
            <p>${item.description}</p>
            <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuGrid.appendChild(menuItem);
    });
}

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageName).classList.add('active');
}

function addToCart(itemId) {
    const item = milkTeaVariants.find(i => i.id === itemId);
    cart.push(item);
    updateCart();
    alert(`${item.name} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="color: #666; text-align: center; padding: 2rem;">Your cart is empty</p>';
        cartTotal.textContent = 'Total: $0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <strong>${item.name}</strong><br>
                <span>$${item.price.toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
}

window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        cartModal.classList.remove('active');
    }
}

initCarousel();
initMenu();
