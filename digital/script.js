// =======================================================
// Data Produk LENGKAP 
// =======================================================
const products = [
    { id: 1, name: "Caliburn G2 - Uwell", category: "devices", price: 345000, image: "1.jpg", description: "Dimensi: 110 x 22 x 13 mm", colors: [{ name: "Hitam", stock: 25 }, { name: "Merah", stock: 15 }]},
    { id: 2, name: "Caliburn A3 - Uwell", category: "devices", price: 475000, image: "2.jpg", description: "Dimensi: 109 x 21 x 12 mm", colors: [{ name: "Ungu", stock: 40 }, { name: "Biru", stock: 15 }, { name: "Hitam", stock: 25 }]},
    { id: 3, name: "Caliburn X - Uwell", category: "devices", price: 210000, image: "3.jpg", description: "Dimensi: 107 x 28 x 15 mm", colors: [{ name: "Biru", stock: 10 }, { name: "Biru Tua", stock: 10 }]}, 
    { id: 4, name: "Drag X - Voopoo", category: "devices", price: 175000, image: "4.jpg", description: "Dimensi: 95 x 32.5 x 28 mm", colors: [{ name: "Hijau Army", stock: 42 }, { name: "Pink", stock: 25 }, { name: "Merah", stock: 10 }]},
    { id: 5, name: "Drag S - Voopoo", category: "devices", price: 235000, image: "5.jpg", description: "Dimensi: 87 x 33 x 28 mm", colors: [{ name: "Coklat", stock: 42 }, { name: "Hitam", stock: 47 }]},
    { id: 6, name: "Drag Nano 2 - Voopoo", category: "devices", price: 375000, image: "6.jpg", description: "Dimensi: 72 x 44 x 15 mm", colors: [{ name: "Abu-abu", stock: 63 }, { name: "Pink", stock: 27 }]},
    { id: 7, name: "Argus Z - Voopoo", category: "devices", price: 450000, image: "7.jpg", description: "Dimensi: 91 x 27 x 14 mm", colors: [{ name: "Merah", stock: 14 }, { name: "Biru", stock: 7 }, { name: "Hijau", stock: 4 }]},
    { id: 8, name: "Argus P1 - Voopoo", category: "devices", price: 220000, image: "8.jpg", description: "Dimensi: 74.6 x 46.7 x 17.4 mm", colors: [{ name: "Pink", stock: 9 }, { name: "Ungu", stock: 7 }, { name: "Biru", stock: 12 }, { name: "Hijau Army", stock: 9 }]},
    { id: 9, name: "Xlim Pro 2 - Oxva", category: "devices", price: 320000, image: "9.jpg", description: "Dimensi: 111 x 25 x 14.3 mm", colors: [{ name: "Ungu", stock: 37 }, { name: "Biru", stock: 19 }]}, 
    { id: 10, name: "Xlim SE 2 - Oxva", category: "devices", price: 140000, image: "10.jpg", description: "Dimensi: 111 x 24 x 14 mm", colors: [{ name: "Pink", stock: 65 }, { name: "Merah", stock: 30 }, { name: "Putih", stock: 15 }]},
    { id: 11, name: "Xlim Go - Oxva", category: "devices", price: 170000, image: "11.jpg", description: "Dimensi: 113.7 x 26 x 14.6 mm", colors: [{ name: "Merah Tua", stock: 30 }, { name: "Biru", stock: 40 }]},
    { id: 12, name: "Xlim SQ Pro - Oxva", category: "devices", price: 245000, image: "12.jpg", description: "Dimensi: 77 x 54.4 x 20.4 mm", colors: [{ name: "Hitam", stock: 32 }, { name: "Abu-abu", stock: 45 }, { name: "Ungu", stock: 10 }]},
    { id: 13, name: "Oneo - Oxva", category: "devices", price: 340000, image: "13.jpg", description: "Dimensi: 113.4 x 26 x 14 mm", colors: [{ name: "Merah", stock: 82 }, { name: "Putih", stock: 30 }, { name: "Biru", stock: 20 }]},
    { id: 14, name: "Origin Plus - Oxva", category: "devices", price: 290000, image: "14.jpg", description: "Dimensi: 112.7 x 23.8 x 14 mm", colors: [{ name: "Hijau Army", stock: 11 }, { name: "Hitam", stock: 20 }]},
    { id: 15, name: "Origin Slim - Oxva", category: "devices", price: 275000, image: "15.jpg", description: "Dimensi: 109 x 22.2 x 11 mm", colors: [{ name: "Ungu", stock: 45 }, { name: "Pink", stock: 25 }]},
    { id: 16, name: "Unibox Mod - Oxva", category: "devices", price: 400000, image: "16.jpg", description: "Dimensi: 97 x 21.8 x 13 mm", colors: [{ name: "Pink", stock: 29 }, { name: "Hitam", stock: 35 }, { name: "Putih", stock: 15 }]},
    { id: 17, name: "Idian X Pod Mod - Oxva", category: "devices", price: 299000, image: "17.jpg", description: "Dimensi: 65.8 x 47 x 14 mm", colors: [{ name: "Abu-abu", stock: 18 }, { name: "Coklat", stock: 10 }, { name: "Hitam", stock: 12 }]},
    { id: 18, name: "Idian 80W Mod - Oxva", category: "devices", price: 285000, image: "18.jpg", description: "Dimensi: 121.4 x 32 x 10 mm", colors: [{ name: "Hitam", stock: 31 }, { name: "Pink", stock: 11 }, { name: "Biru Muda", stock: 8 }]},
    { id: 19, name: "Xlim V3 - Oxva", category: "devices", price: 290000, image: "19.jpg", description: "Dimensi: 77 x 54.4 x 20.4 mm", colors: [{ name: "Kuning", stock: 40 }, { name: "Merah Tua", stock: 31 }]},
    { id: 20, name: "Xlim V2 - Oxva", category: "devices", price: 310000, image: "20.jpg", description: "Dimensi: 75 x 48.9 x 18.6 mm", colors: [{ name: "Merah", stock: 36 }, { name: "Hijau Tua", stock: 16 }]},
    { id: 21, name: "Xlim C - Oxva", category: "devices", price: 285000, image: "21.jpg", description: "Dimensi: 68.5 x 47 x 20.4 mm", colors: [{ name: "Putih", stock: 27 }, { name: "Coklat", stock: 22 }, { name: "Abu-abu", stock: 10 }]},
    { id: 22, name: "RPM 25W - Smok", category: "devices", price: 210000, image: "22.jpg", description: "Dimensi: 110 x 23 x 20 mm", colors: [{ name: "Hitam", stock: 34 }, { name: "Coklat", stock: 65 }]},
    { id: 23, name: "RPM 40 - Smok", category: "devices", price: 190000, image: "23.jpg", description: "Dimensi: 99 x 25 x 25 mm", colors: [{ name: "Putih", stock: 12 }, { name: "Hijau", stock: 20 }]},
    { id: 24, name: "RPM 85 - Smok", category: "devices", price: 289000, image: "24.jpg", description: "Dimensi: 128.5 x 29 x 36 mm", colors: [{ name: "Coklat", stock: 17 }, { name: "Hitam", stock: 15 }]},
    { id: 25, name: "Wenax K1 - Geekvape", category: "devices", price: 340000, image: "25.jpg", description: "Dimensi: 114.6 x 21.6 x 11.5 mm", colors: [{ name: "Putih", stock: 19 }, { name: "Hijau", stock: 12 }]},
    { id: 26, name: "Wenax Stylus - Geekvape", category: "devices", price: 385000, image: "26.jpg", description: "Dimensi: 112 x 19 x 18 mm", colors: [{ name: "Hitam", stock: 9 }, { name: "Pink", stock: 5 }]},
    { id: 27, name: "Infinity - RELX", category: "devices", price: 320000, image: "27.jpg", description: "Dimensi: 112 x 23 x 10 mm", colors: [{ name: "Putih", stock: 13 }, { name: "Merah", stock: 8 }]},
    { id: 28, name: "Essential - RELX", category: "devices", price: 355000, image: "28.jpg", description: "Dimensi: 112 x 23 x 9 mm", colors: [{ name: "Ungu", stock: 17 }, { name: "Abu-abu", stock: 9 }]},
    { id: 29, name: "Luxe XR - Vaporesso", category: "devices", price: 180000, image: "29.jpg", description: "Dimensi: 98 x 21.6 x 21.2 mm", colors: [{ name: "Biru", stock: 26 }, { name: "Biru Tua", stock: 41 }]},
    { id: 30, name: "Luxe QS - Vaporesso", category: "devices", price: 195000, image: "30.jpg", description: "Dimensi: 91.9 x 26 x 16.5 mm", colors: [{ name: "Hijau Army", stock: 35 }, { name: "Putih", stock: 20 }]}
];

let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const openCartModalBtn = document.getElementById('openCartModal'); 
const cartModal = document.getElementById('cartModal');
const closeBtn = document.getElementById('closeCartModal'); 
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const removeAllBtn = document.querySelector('.remove-all-btn'); 

const productDetailModal = document.getElementById('productDetailModal');
const productDetailContent = document.getElementById('productDetailContent');


// =======================================================
// UTILITY FUNCTIONS
// =======================================================

function saveCartToLocalStorage() {
    localStorage.setItem('nebulaVapeCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('nebulaVapeCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

function getProductImagePath(imageFileName) {
    const imageBaseUrl = 'assets/images/'; 
    return `${imageBaseUrl}${imageFileName}`;
}

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function getStockByColor(productId, colorName) {
    const product = products.find(p => p.id === productId);
    if (product && product.colors) {
        const colorData = product.colors.find(c => c.name === colorName);
        return colorData ? colorData.stock : 0;
    }
    return 0;
}

// =======================================================
// CART LOGIC
// =======================================================

// Fungsi Lama: Tidak digunakan lagi karena diganti addToCartWithQuantity
/*
window.handleAddToCart = function(productId, selectedColor) {
    // ... (logic lama)
}
*/

window.removeFromCart = function(productId, selectedColor) {
    cart = cart.filter(item => !(item.id === productId && item.selectedColor === selectedColor));
    
    saveCartToLocalStorage();
    updateCart(); 
    updateCartCount();
}

window.removeAllFromCart = function() {
    if (cart.length === 0) {
        showNotification("Keranjang Anda sudah kosong.");
        return;
    }

    if (confirm("Apakah Anda yakin ingin menghapus SEMUA item dari keranjang?")) {
        cart = [];
        saveCartToLocalStorage();
        updateCart();
        updateCartCount();
        showNotification("Semua item berhasil dihapus dari keranjang.");
        if (cartModal) {
            cartModal.classList.remove('active'); 
        }
    }
}


function updateCart() {
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    const checkoutContainer = document.querySelector('.checkout-form-container');
    const modalFooter = document.querySelector('.modal-footer');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--text-light);">Keranjang kosong. Tambahkan produk dulu!</p>';
        totalPrice.textContent = formatRupiah(0);
        
        if (checkoutContainer) checkoutContainer.style.display = 'none';
        if (modalFooter) modalFooter.style.display = 'none';

        updateCartCount(); 
        return;
    }

    if (checkoutContainer) checkoutContainer.style.display = 'block';
    if (modalFooter) modalFooter.style.display = 'flex'; 

    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const colorDisplay = item.selectedColor ? ` - ${item.selectedColor}` : ''; 
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-details">
                <span class="item-name">${item.name}${colorDisplay}</span>
                <p style="font-size: 0.8em; color: var(--text-light);">${formatRupiah(item.price)} x ${item.quantity}</p>
            </div>
            <div class="item-actions">
                <span class="item-price" style="font-weight: bold;">${formatRupiah(itemTotal)}</span>
                <button onclick="removeFromCart(${item.id}, '${item.selectedColor.replace(/'/g, "\\'")}')" class="remove-item-btn" style="background: none; border: none; color: var(--remove-btn-bg); margin-left: 10px; cursor: pointer;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    totalPrice.textContent = formatRupiah(total);
    updateCartCount();
}

function updateCartCount() {
    const cartCounts = document.querySelectorAll('.cart-count'); 
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCounts.forEach(count => {
        count.textContent = totalItems;
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 3000;
        transition: opacity 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// FUNGSI BARU: Tambah ke Keranjang dengan Kuantitas Spesifik
function addToCartWithQuantity(productId, selectedColor, quantity) {
    const product = products.find(p => p.id === productId);
    
    const availableStock = getStockByColor(productId, selectedColor);
    
    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && item.selectedColor === selectedColor
    );
    
    const currentQuantityInCart = existingItemIndex !== -1 ? cart[existingItemIndex].quantity : 0;
    const newTotalQuantity = currentQuantityInCart + quantity;
    
    if (newTotalQuantity > availableStock) {
        showNotification(`Stok ${selectedColor} ${product.name} tidak mencukupi. (Tersedia: ${availableStock})`);
        return;
    }
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            selectedColor: selectedColor
        });
    }
    
    saveCartToLocalStorage();
    updateCartCount();
    showNotification(`${quantity}x ${product.name} (${selectedColor}) added to cart!`);
}


// =======================================================
// RENDER & DISPLAY FUNCTIONS
// =======================================================

// FUNGSI BARU: Merender konten MODAL DETAIL PRODUK
window.openProductDetailModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !productDetailModal) return;

    const isLiquid = product.name.toLowerCase().includes('liquid') || product.name.toLowerCase().includes('cream');
    const selectLabel = isLiquid ? 'Pilih Nic:' : 'Pilih Warna:';
    const selectDefaultText = isLiquid ? 'Pilih Nic' : 'Pilih Warna';
    const imageUrl = getProductImagePath(product.image);

    // KODE PERBAIKAN: Menambahkan Stok ke setiap opsi
    const colorOptions = product.colors.map(color => 
        `<option value="${color.name}">${color.name} (Stok: ${color.stock})</option>`
    ).join('');

    productDetailContent.innerHTML = `
        <div class="modal-header">
            <h3>${product.name}</h3>
            <span class="close-modal close-btn" onclick="closeProductDetailModal()">&times;</span>
        </div>
        
        <div class="product-detail-body">
            <div class="detail-image-wrapper">
                <img src="${imageUrl}" alt="${product.name}" class="detail-image">
            </div>
            
            <div class="detail-info">
                <p class="detail-price">Harga: <span>${formatRupiah(product.price)}</span></p>
                <p class="detail-desc">Dimensi: ${product.description}</p>
                
                <hr style="margin: 15px 0; border-top: 1px solid var(--card-bg);">

                <div class="selector-wrapper">
                    <label for="modal-color-select">${selectLabel}</label>
                    <select id="modal-color-select" class="checkout-input">
                        <option value="" disabled selected>${selectDefaultText}</option>
                        ${colorOptions}
                    </select>
                </div>
                
                <div class="quantity-wrapper" style="margin-bottom: 20px;">
                    <label for="modal-quantity" style="display: block; margin-top: 10px;">Kuantitas:</label>
                    <input type="number" id="modal-quantity" value="1" min="1" max="99" class="checkout-input" style="width: 100px; display: inline-block;">
                </div>


                <button class="cta-btn" onclick="handleAddToCartFromModal(${product.id})">
                    <i class="fas fa-cart-plus"></i> Tambahkan ke Keranjang
                </button>
                
            </div>
        </div>
    `;

    productDetailModal.classList.add('active');
}

window.closeProductDetailModal = function() {
    if (productDetailModal) productDetailModal.classList.remove('active');
}

window.handleAddToCartFromModal = function(productId) {
    const colorSelector = document.getElementById('modal-color-select');
    const quantityInput = document.getElementById('modal-quantity');
    
    const selectedColor = colorSelector ? colorSelector.value : null;
    const quantity = parseInt(quantityInput ? quantityInput.value : 1);

    if (!selectedColor || selectedColor === "Pilih Warna" || selectedColor === "Pilih Nic") {
        showNotification("Pilih warna/varian terlebih dahulu!");
        return;
    }
    
    if (quantity < 1 || isNaN(quantity)) {
        showNotification("Kuantitas minimal adalah 1.");
        return;
    }

    // Panggil fungsi addToCart utama dengan kuantitas
    addToCartWithQuantity(productId, selectedColor, quantity);

    closeProductDetailModal(); 
}

function displayProducts(productsToShow) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = productsToShow.map(product => {
        const imageUrl = getProductImagePath(product.image);

        return `
        <div class="product-card" id="product-card-${product.id}" onclick="openProductDetailModal(${product.id})">
            <div class="product-image">
                <img src="${imageUrl}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="stock-badge">Stock: ${product.colors[0].stock}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatRupiah(product.price)}</p>
            </div>
        </div>
        `;
    }).join('');
}

function renderFeaturedProducts(count = 3) {
    const featuredGrid = document.getElementById('featuredProductsGrid');
    if (!featuredGrid) return;
    
    const featuredProducts = products.slice(0, count);

    featuredGrid.innerHTML = featuredProducts.map(product => {
        const imageUrl = getProductImagePath(product.image);
        
        return `
            <div class="product-card" onclick="openProductDetailModal(${product.id})">
                <div class="product-image">
                    <img src="${imageUrl}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${formatRupiah(product.price)}</p>
                </div>
            </div>
        `;
    }).join('');
}


// =======================================================
// CHECKOUT & INIT
// =======================================================

function processCheckout(event) {
    event.preventDefault();

    const whatsappNumber = '6287764636188'; 

    if (cart.length === 0) {
        showNotification('Keranjang Anda kosong! Tambahkan produk terlebih dahulu.');
        return;
    }

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let orderDetails = cart.map(item => 
        `%0A* ${item.name} (${item.selectedColor}) x ${item.quantity} = ${formatRupiah(item.price * item.quantity)}`
    ).join('');

    const message = `
Halo Nebula Vape!%0A
Saya ingin melakukan konfirmasi pesanan.%0A%0A
*DATA PEMESAN:*%0A
Nama: ${name}%0A
Telepon: ${phone}%0A
Alamat: ${address}%0A%0A
*DETAIL PESANAN:*
${orderDetails}%0A%0A
*TOTAL PEMBAYARAN: ${formatRupiah(total)}*%0A%0A
Mohon konfirmasi ketersediaan dan detail pengiriman. Terima kasih.
    `;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    showNotification(`Mengarahkan Anda ke WhatsApp untuk konfirmasi pesanan...`);
    
    window.open(whatsappUrl, '_blank');
    
    cart = [];
    saveCartToLocalStorage();
    updateCart();
    document.getElementById('checkoutForm').reset();
    if (cartModal) cartModal.classList.remove('active'); 
}

function setupCheckoutForm() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', processCheckout);
    }
}

function setupEventListeners() {
    if (openCartModalBtn) {
        openCartModalBtn.addEventListener('click', () => {
            if (cartModal) {
                cartModal.classList.add('active'); 
                updateCart();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (cartModal) cartModal.classList.remove('active');
        });
    }
    
    if (removeAllBtn) {
        removeAllBtn.addEventListener('click', removeAllFromCart);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            if (cartModal) cartModal.classList.remove('active');
        }
        if (e.target === productDetailModal) {
            if (productDetailModal) productDetailModal.classList.remove('active');
        }
    });
}

function initAboutPage() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }
}

// Initialize app
function init() {
    loadCartFromLocalStorage(); 
    
    setupCheckoutForm(); 

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('header.navbar nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.remove('active');
        if ((currentPage === 'index.html' && linkPage === 'index.html') || 
            (currentPage !== 'index.html' && linkPage === linkPage)) {
            link.classList.add('active');
        }
    });
    
    if (currentPage === 'products.html') {
        displayProducts(products);
    }
    
    if (currentPage === 'index.html' || currentPage === '') {
        renderFeaturedProducts(3); 
    }
    
    setupEventListeners();
    
    if (currentPage === 'about.html') {
        initAboutPage();
    }
    
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', init);