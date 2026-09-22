// ============================================
// ShopVibe — Professional E-Commerce JS
// ============================================

// ---------- SVG ICON LIBRARY ----------
const ICONS = {
  sneaker: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18l1-4h20l1 4"/><path d="M4 14V8a2 2 0 012-2h12a2 2 0 012 2v6"/><path d="M10 6V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2"/><path d="M18 6V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v2"/></svg>`,
  watch: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83"/></svg>`,
  bag: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
  headphones: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>`,
  shirt: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>`,
  sunglasses: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5l2-3h6l2 3h5"/><circle cx="7" cy="14" r="3"/><circle cx="17" cy="14" r="3"/></svg>`,
  pants: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2l-1 6v14h14V8l-1-6"/><path d="M6 2h12"/><path d="M12 22v-6"/><line x1="6" y1="22" x2="6" y2="8"/><line x1="18" y1="22" x2="18" y2="8"/></svg>`,
  shorts: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12l-1 6H7L6 2z"/><path d="M7 8v12l5-4 5 4V8"/><line x1="12" y1="2" x2="12" y2="8"/></svg>`,
  speaker: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>`,
  fitness: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 6h4"/><path d="M12 14v2"/><path d="M10 14h4"/></svg>`,
  tote: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2l-1 6v14h14V8l-1-6"/><path d="M9 10h6"/><path d="M12 10v4"/></svg>`,
};

const categoryIcons = {
  sneakers: ICONS.sneaker,
  watches: ICONS.watch,
  bags: ICONS.bag,
  electronics: ICONS.headphones,
  clothing: ICONS.shirt,
  accessories: ICONS.sunglasses,
};

const productIcons = {
  sneakers: [ICONS.sneaker],
  watches: [ICONS.watch],
  bags: [ICONS.bag, ICONS.tote],
  electronics: [ICONS.headphones, ICONS.speaker, ICONS.fitness],
  clothing: [ICONS.shirt, ICONS.pants, ICONS.shorts],
  accessories: [ICONS.sunglasses, ICONS.watch],
};

// ---------- PRODUCT DATA ----------
const products = [
  { id: 1, name: "Air Max Pulse", category: "sneakers", price: 189, oldPrice: 229, badge: "Trending", badgeType: "", rating: 4.9, reviews: 342, desc: "Revolutionary air cushioning with a sleek design for all-day comfort and unmatched style.", sizes: ["7", "8", "9", "10", "11"] },
  { id: 2, name: "Classic Leather Watch", category: "watches", price: 299, oldPrice: null, badge: "New", badgeType: "new", rating: 4.8, reviews: 218, desc: "Swiss-made movement with genuine leather strap and sapphire crystal glass.", sizes: ["One Size"] },
  { id: 3, name: "Urban Backpack Pro", category: "bags", price: 129, oldPrice: 159, badge: "Sale", badgeType: "sale", rating: 4.7, reviews: 189, desc: "Water-resistant backpack with laptop compartment and anti-theft design.", sizes: ["One Size"] },
  { id: 4, name: "Studio Pro Headphones", category: "electronics", price: 349, oldPrice: 399, badge: "Sale", badgeType: "sale", rating: 4.9, reviews: 567, desc: "Active noise cancellation with 40-hour battery life and premium Hi-Fi sound.", sizes: ["One Size"] },
  { id: 5, name: "Minimalist Cotton Tee", category: "clothing", price: 49, oldPrice: null, badge: "New", badgeType: "new", rating: 4.6, reviews: 423, desc: "100% organic cotton, pre-shrunk with a relaxed modern fit.", sizes: ["S", "M", "L", "XL"] },
  { id: 6, name: "Polarized Aviator Shades", category: "accessories", price: 159, oldPrice: 199, badge: "Sale", badgeType: "sale", rating: 4.8, reviews: 298, desc: "UV400 protection with lightweight titanium frame and scratch-resistant lenses.", sizes: ["One Size"] },
  { id: 7, name: "Runner Elite V2", category: "sneakers", price: 165, oldPrice: null, badge: "New", badgeType: "new", rating: 4.7, reviews: 156, desc: "Engineered mesh upper with responsive foam for explosive performance.", sizes: ["7", "8", "9", "10", "11", "12"] },
  { id: 8, name: "Chrono Titanium", category: "watches", price: 499, oldPrice: 599, badge: "Sale", badgeType: "sale", rating: 4.9, reviews: 134, desc: "Titanium case with automatic movement and exhibition case back.", sizes: ["One Size"] },
  { id: 9, name: "Canvas Weekender", category: "bags", price: 89, oldPrice: null, badge: "", badgeType: "", rating: 4.5, reviews: 201, desc: "Heavy-duty canvas with leather accents. Perfect for short trips.", sizes: ["One Size"] },
  { id: 10, name: "Wireless Earbuds Pro", category: "electronics", price: 199, oldPrice: 249, badge: "Sale", badgeType: "sale", rating: 4.8, reviews: 892, desc: "Active noise cancellation with spatial audio and 30-hour total battery.", sizes: ["One Size"] },
  { id: 11, name: "Premium Hoodie", category: "clothing", price: 89, oldPrice: null, badge: "Trending", badgeType: "", rating: 4.7, reviews: 345, desc: "French terry cotton with brushed interior for ultimate comfort.", sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 12, name: "Minimalist Watch Band", category: "accessories", price: 45, oldPrice: 59, badge: "Sale", badgeType: "sale", rating: 4.6, reviews: 178, desc: "Silicone sport band with quick-release pins. Fits most watch brands.", sizes: ["38mm", "42mm", "44mm", "49mm"] },
  { id: 13, name: "High-Top Classic", category: "sneakers", price: 110, oldPrice: null, badge: "", badgeType: "", rating: 4.8, reviews: 673, desc: "Iconic high-top silhouette with vulcanized rubber sole.", sizes: ["7", "8", "9", "10", "11"] },
  { id: 14, name: "Leather Crossbody", category: "bags", price: 199, oldPrice: 259, badge: "Sale", badgeType: "sale", rating: 4.9, reviews: 267, desc: "Full-grain leather with adjustable strap and brass hardware.", sizes: ["One Size"] },
  { id: 15, name: "Smart Fitness Band", category: "electronics", price: 79, oldPrice: null, badge: "New", badgeType: "new", rating: 4.5, reviews: 445, desc: "Heart rate, SpO2, sleep tracking with 14-day battery life.", sizes: ["One Size"] },
  { id: 16, name: "Slim Fit Chinos", category: "clothing", price: 69, oldPrice: 89, badge: "Sale", badgeType: "sale", rating: 4.6, reviews: 312, desc: "Stretch twill fabric with a tailored slim fit and wrinkle-free finish.", sizes: ["28", "30", "32", "34", "36"] },
  { id: 17, name: "Canvas Tote Bag", category: "bags", price: 39, oldPrice: null, badge: "New", badgeType: "new", rating: 4.4, reviews: 156, desc: "Heavy-duty canvas with reinforced handles and inner pocket.", sizes: ["One Size"] },
  { id: 18, name: "Sport Sunglasses", category: "accessories", price: 129, oldPrice: null, badge: "", badgeType: "", rating: 4.7, reviews: 203, desc: "Impact-resistant lenses with hydrophobic coating and rubber nose pads.", sizes: ["One Size"] },
  { id: 19, name: "Running Shorts", category: "clothing", price: 45, oldPrice: null, badge: "New", badgeType: "new", rating: 4.5, reviews: 234, desc: "Lightweight woven fabric with built-in liner and zippered pocket.", sizes: ["S", "M", "L", "XL"] },
  { id: 20, name: "Bluetooth Speaker", category: "electronics", price: 129, oldPrice: 169, badge: "Sale", badgeType: "sale", rating: 4.8, reviews: 567, desc: "360-degree sound with IP67 waterproof rating and 20-hour battery.", sizes: ["One Size"] },
];

// ---------- HELPER ----------
function getProductIcon(product) {
  const icons = productIcons[product.category] || Object.values(productIcons).flat();
  return icons[product.id % icons.length];
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '<span class="star-full">' + '★'.repeat(full) + '</span>' +
         (half ? '<span class="star-half">★</span>' : '') +
         '<span class="star-empty">' + '☆'.repeat(5 - full - half) + '</span>';
}

// ---------- STATE ----------
let cart = JSON.parse(localStorage.getItem('shopvibe_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopvibe_wishlist')) || [];
let currentFilter = 'all';
let searchQuery = '';
let modalQty = 1;
let modalProduct = null;

// ---------- DOM ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const navbar = $('#navbar');
const navLinks = $('#navLinks');
const mobileMenuBtn = $('#mobileMenuBtn');
const searchInput = $('#searchInput');
const productsGrid = $('#productsGrid');
const noResults = $('#noResults');
const cartBtn = $('#cartBtn');
const cartSidebar = $('#cartSidebar');
const closeCart = $('#closeCart');
const overlay = $('#overlay');
const cartItemsEl = $('#cartItems');
const cartFooter = $('#cartFooter');
const cartTotal = $('#cartTotal');
const cartCount = $('#cartCount');
const wishlistCount = $('#wishlistCount');
const modalOverlay = $('#modalOverlay');
const modalClose = $('#modalClose');
const toastContainer = $('#toastContainer');
const scrollTopBtn = $('#scrollTop');
const newsletterForm = $('#newsletterForm');

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initCountdown();
  initScrollEffects();
});

// ---------- PRODUCTS ----------
function renderProducts() {
  const filtered = products.filter(p => {
    const matchesFilter = currentFilter === 'all' || p.category === currentFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  productsGrid.innerHTML = filtered.map(p => {
    const isWishlisted = wishlist.includes(p.id);
    const icon = getProductIcon(p);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-image">
          ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : ''}
          <button class="product-wishlist ${isWishlisted ? 'active' : ''}" data-id="${p.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          ${icon}
        </div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">${getStars(p.rating)}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <div class="product-bottom">
            <div class="product-price">
              $${p.price}
              ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ''}
            </div>
            <button class="add-cart-btn" data-id="${p.id}" title="Add to Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach listeners
  productsGrid.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  productsGrid.querySelectorAll('.product-wishlist').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });

  productsGrid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

// ---------- FILTERS ----------
$$('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProducts();
  });
});

// ---------- SEARCH ----------
let searchTimeout;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchQuery = e.target.value;
    renderProducts();
  }, 200);
});

$('#searchBtn').addEventListener('click', () => {
  searchQuery = searchInput.value;
  renderProducts();
});

// ---------- CATEGORIES ----------
$$('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.category;
    currentFilter = cat;
    $$('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === cat);
    });
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------- CART ----------
function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('shopvibe_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const p = products.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  cartCount.textContent = totalItems;
  cartCount.classList.toggle('show', totalItems > 0);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </div>
        <p>Your cart is empty</p>
      </div>`;
    cartFooter.style.display = 'none';
  } else {
    cartItemsEl.innerHTML = cart.map(item => {
      const p = products.find(pr => pr.id === item.id);
      const icon = getProductIcon(p);
      return `
        <div class="cart-item">
          <div class="cart-item-image">${icon}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">$${(p.price * item.qty).toFixed(2)}</div>
            <div class="cart-item-controls">
              <button class="cart-qty-btn" onclick="updateCartQty(${p.id}, -1)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <span class="cart-item-qty">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateCartQty(${p.id}, 1)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <button class="cart-item-remove" onclick="removeFromCart(${p.id})">Remove</button>
            </div>
          </div>
        </div>`;
    }).join('');
    cartFooter.style.display = 'block';
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  }
}

cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', closeCartSidebar);
overlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

$('#checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  showToast('Proceeding to checkout...', 'info');
  closeCartSidebar();
});

// ---------- WISHLIST ----------
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  const index = wishlist.indexOf(productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`${product.name} removed from wishlist`, 'info');
  } else {
    wishlist.push(productId);
    showToast(`${product.name} added to wishlist`, 'success');
  }

  localStorage.setItem('shopvibe_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  wishlistCount.textContent = wishlist.length;
  wishlistCount.classList.toggle('show', wishlist.length > 0);
}

$('#wishlistBtn').addEventListener('click', () => {
  if (wishlist.length === 0) {
    showToast('Your wishlist is empty', 'info');
    return;
  }
  currentFilter = 'all';
  searchQuery = '';
  searchInput.value = '';
  $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));

  const filtered = products.filter(p => wishlist.includes(p.id));
  productsGrid.innerHTML = filtered.map(p => {
    const icon = getProductIcon(p);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-image">
          ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : ''}
          <button class="product-wishlist active" data-id="${p.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          ${icon}
        </div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">${getStars(p.rating)}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <div class="product-bottom">
            <div class="product-price">$${p.price}${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ''}</div>
            <button class="add-cart-btn" data-id="${p.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
        </div>
      </div>`;
  }).join('');

  productsGrid.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  productsGrid.querySelectorAll('.product-wishlist').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });

  productsGrid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });

  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  noResults.style.display = 'none';
});

// ---------- MODAL ----------
function openModal(productId) {
  modalProduct = products.find(p => p.id === productId);
  if (!modalProduct) return;

  modalQty = 1;
  const icon = getProductIcon(modalProduct);

  $('#modalImage').innerHTML = icon;
  $('#modalCategory').textContent = modalProduct.category;
  $('#modalTitle').textContent = modalProduct.name;
  $('#modalRating').innerHTML = `<span class="stars">${getStars(modalProduct.rating)}</span> <span>${modalProduct.rating} (${modalProduct.reviews} reviews)</span>`;
  $('#modalDesc').textContent = modalProduct.desc;
  $('#modalPrice').innerHTML = `$${modalProduct.price}${modalProduct.oldPrice ? `<span class="old-price" style="font-size:0.95rem;color:var(--text-muted);text-decoration:line-through;margin-left:8px;font-weight:400;">$${modalProduct.oldPrice}</span>` : ''}`;
  $('#modalQty').textContent = modalQty;

  const isWishlisted = wishlist.includes(modalProduct.id);
  const modalWishlist = $('#modalWishlist');
  modalWishlist.classList.toggle('active', isWishlisted);

  const sizesContainer = $('#modalSizes');
  sizesContainer.innerHTML = modalProduct.sizes.map((s, i) =>
    `<button class="size-btn ${i === 0 ? 'active' : ''}">${s}</button>`
  ).join('');

  sizesContainer.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sizesContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

$('#modalQtyMinus').addEventListener('click', () => {
  if (modalQty > 1) {
    modalQty--;
    $('#modalQty').textContent = modalQty;
  }
});

$('#modalQtyPlus').addEventListener('click', () => {
  modalQty++;
  $('#modalQty').textContent = modalQty;
});

$('#modalAddToCart').addEventListener('click', () => {
  if (modalProduct) {
    addToCart(modalProduct.id, modalQty);
    closeModal();
  }
});

$('#modalWishlist').addEventListener('click', () => {
  if (modalProduct) {
    toggleWishlist(modalProduct.id);
    const isWishlisted = wishlist.includes(modalProduct.id);
    const modalWishlist = $('#modalWishlist');
    modalWishlist.classList.toggle('active', isWishlisted);
  }
});

// ---------- TOAST ----------
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icons = {
    success: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    error: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    info: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  };

  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span> ${message}`;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ---------- NEWSLETTER ----------
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input').value;
  if (email) {
    showToast('Thanks for subscribing!', 'success');
    newsletterForm.reset();
  }
});

// ---------- COUNTDOWN ----------
function initCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  function update() {
    const now = new Date();
    const diff = endDate - now;
    if (diff <= 0) return;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    $('#days').textContent = String(d).padStart(2, '0');
    $('#hours').textContent = String(h).padStart(2, '0');
    $('#minutes').textContent = String(m).padStart(2, '0');
    $('#seconds').textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ---------- SCROLL EFFECTS ----------
function initScrollEffects() {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    scrollTopBtn.classList.toggle('show', window.scrollY > 500);
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const sections = ['hero', 'products', 'categories', 'deals', 'about'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (!section) return;
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        $$('.nav-link').forEach(l => l.classList.remove('active'));
        $(`.nav-link[href="#${id}"]`)?.classList.add('active');
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  $$('.category-card, .product-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s var(--ease), transform 0.5s var(--ease)';
    observer.observe(el);
  });
}

// ---------- MOBILE MENU ----------
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  mobileMenuBtn.classList.toggle('active');
});

$$('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
  });
});

// ---------- KEYBOARD ----------
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeCartSidebar();
  }
});
