// ============================================
// CuisineFacile.africa - JavaScript
// ============================================

/** Référentiel officiel des coopératives (tableau partenaires CuisineFacile) */
const COOPERATIVE_CATALOG = {
    'scoops-bene-wende': {
        name: 'Scoops Béné wende',
        city: 'Séguéla',
        products: []
    },
    'scoops-caeg': {
        name: 'Scoops CAEG',
        city: 'Guéssabo',
        products: []
    },
    'femmes-entreprenantes': {
        name: 'Femmes Entreprenantes du Lôh-Djiboua',
        city: 'Divo',
        products: []
    },
    'pecheurs-sud': {
        name: 'Société Coopérative Simplifiée des pêcheurs artisanaux du Sud',
        city: 'Abidjan',
        products: []
    },
    'al-bari': {
        name: 'Al bari',
        city: 'Divo',
        products: []
    },
    'scoopan-mba': {
        name: 'Coop CA Scoopan-MBA',
        city: "M'Batto",
        products: []
    },
    'femmes-unies': {
        name: 'CMATPHACI Femmes Unies',
        city: 'Abidjan',
        products: []
    },
    'mamatchiva': {
        name: 'Mamatchiva',
        city: 'Daloa',
        products: []
    },
    'scoop-prokab': {
        name: 'Scoop Prokab',
        city: 'Bouna',
        products: []
    },
    'vivriers-san-pedro': {
        name: 'Société Coopérative des Vivriers de San Pedro',
        city: 'San Pedro',
        products: []
    },
    'coop-ecapar': {
        name: 'Coop CA-Ecapar',
        city: 'Soubré-Méagui',
        products: []
    },
    'coop-attieke': {
        name: 'Coop attiéké',
        city: 'Abidjan-Abobo',
        products: []
    },
    'gbinmin': {
        name: 'Gbinmin',
        city: 'Kasséré',
        products: []
    }
};

// ============================================
// Catalogue produits (fiche produit dynamique)
// ============================================

function slugifyProductName(name) {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/['']/g, '-')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const PRODUCT_LIST = [
    { fullName: 'Sauce graine pure 350g', name: 'Sauce graine pure', image: 'img/Sauce graine pure 350g.png', price: 3500, format: 'Bocal stérilisé 350g · prête à consommer', category: 'Sauces et bases', fairPct: 60, coopId: 'vivriers-san-pedro', rating: '4,8', reviews: 36 },
    { fullName: "Pâte d'arachide pure 350g", name: "Pâte d'arachide pure", image: "img/Pâte d'arachide pure 350g.png", price: 3000, format: 'Bocal verre 350g', category: 'Karité-arachide', fairPct: 55, coopId: 'scoop-prokab', rating: '4,6', reviews: 28 },
    { fullName: 'Sauce arachide prête 350g', name: 'Sauce arachide prête', image: 'img/Sauce arachide prête 350g.png', price: 3200, format: 'Bocal stérilisé 350g', category: 'Sauces et bases', fairPct: 55, coopId: 'scoop-prokab', rating: '4,7', reviews: 31 },
    { fullName: 'Attiéké premium Agbodjama 500g', name: 'Attiéké premium Agbodjama', image: 'img/Attiéké premium Agbodjama 500g.png', price: 2500, format: 'Sous-vide 500g', category: 'Féculents', fairPct: 55, coopId: 'coop-attieke', rating: '4,8', reviews: 42 },
    { fullName: 'Soumbara en poudre 80g', name: 'Soumbara en poudre', image: 'img/Soumbara en poudre 80g.png', price: 1800, format: 'Sachet ou pot 80g', category: 'Épices', fairPct: 65, coopId: 'scoops-bene-wende', rating: '4,6', reviews: 22 },
    { fullName: 'Kankankan premium 100g', name: 'Kankankan premium', image: 'img/Kankankan premium 100g.png', price: 2200, format: 'Pot verre 100g', category: 'Épices', fairPct: 65, coopId: 'scoopan-mba', rating: '4,7', reviews: 19 },
    { fullName: 'Sauce pistache déshydratée 80g', name: 'Sauce pistache déshydratée', image: 'img/Sauce pistache déshydratée 80g.png', price: 1500, format: 'Sachet 4 pers. 80g', category: 'Sauces et bases', fairPct: 65, coopId: 'mamatchiva', rating: '4,7', reviews: 18 },
    { fullName: 'Mélange kedjenou 80g', name: 'Mélange kedjenou', image: 'img/Soumbara en poudre 80g.png', price: 1800, format: 'Pot verre 80g', category: 'Épices', fairPct: 65, coopId: 'mamatchiva', rating: '4,7', reviews: 15 },
    { fullName: 'Mélange poisson braisé 80g', name: 'Mélange poisson braisé', image: 'img/Mélange poisson braisé 80g.png', price: 1800, format: 'Pot verre 80g', category: 'Épices', fairPct: 65, coopId: 'pecheurs-sud', rating: '4,7', reviews: 14 },
    { fullName: 'Akpi moulu 60g', name: 'Akpi moulu', image: 'img/Akpi moulu 60g.png', price: 1500, format: 'Sachet ou pot 60g', category: 'Épices', fairPct: 60, coopId: 'scoops-caeg', rating: '4,7', reviews: 20 },
    { fullName: 'Préparation bissap pur 80g', name: 'Préparation bissap pur', image: 'img/Préparation bissap pur 80g.png', price: 1800, format: 'Sachet kraft 80g', category: 'Boissons', fairPct: 65, coopId: 'scoops-bene-wende', rating: '4,6', reviews: 25 },
    { fullName: 'Infusion gingembre-citron 60g', name: 'Infusion gingembre-citron', image: 'img/Infusion gingembre-citron.png', price: 1800, format: 'Sachet kraft 60g', category: 'Boissons', fairPct: 65, coopId: 'coop-ecapar', rating: '4,6', reviews: 17 },
    { fullName: 'Infusion kinkéliba 50g', name: 'Infusion kinkéliba', image: 'img/Infusion kinkéliba 50g.png', price: 2000, format: 'Sachet kraft 50g', category: 'Boissons', fairPct: 65, coopId: 'scoops-bene-wende', rating: '4,7', reviews: 21 },
    { fullName: 'Tamarin instantané 100g', name: 'Tamarin instantané', image: 'img/Tamarin instantané 100g.png', price: 1500, format: 'Sachet kraft 100g', category: 'Boissons', fairPct: 60, coopId: 'scoops-bene-wende', rating: '4,7', reviews: 16 },
    { fullName: 'Bouye/baobab en poudre 100g', name: 'Bouye/baobab en poudre', image: 'img/baobab en poudre 100g.png', price: 2200, format: 'Sachet kraft 100g', category: 'Boissons', fairPct: 70, coopId: 'scoops-bene-wende', rating: '4,8', reviews: 23 },
    { fullName: 'Tablette chocolat single-origin 70g', name: 'Tablette chocolat single-origin', image: 'img/Tablette chocolat single-origin 70g.png', price: 3800, format: 'Étui carton 70g', category: 'Karité-arachide', fairPct: 40, coopId: 'vivriers-san-pedro', rating: '4,9', reviews: 38 },
    { fullName: 'Beurre de karité alimentaire 250g', name: 'Beurre de karité alimentaire', image: 'img/Beurre de karité alimentaire 250g.png', price: 4500, format: 'Pot verre 250g', category: 'Karité-arachide', fairPct: 55, coopId: 'gbinmin', rating: '4,8', reviews: 33 },
    { fullName: 'Miel de campagne 250g', name: 'Miel de campagne', image: 'img/Miel de campagne 250g.png', price: 3500, format: 'Pot verre 250g', category: 'Karité-arachide', fairPct: 50, coopId: 'scoops-bene-wende', rating: '4,8', reviews: 27 },
    { fullName: 'Confiture bissap-gingembre 220g', name: 'Confiture bissap-gingembre', image: 'img/Confiture bissap-gingembre 220g.png', price: 3200, format: 'Pot verre 220g', category: 'Karité-arachide', fairPct: 60, coopId: 'scoop-prokab', rating: '4,9', reviews: 29 },
    { fullName: 'Coffret découverte (3 produits + livret)', name: 'Coffret découverte', image: 'img/img8.jpg', price: 12000, format: 'Boîte carton · 3 produits + livret', category: 'Coffrets', fairPct: 55, coopId: 'scoops-bene-wende', rating: '4,8', reviews: 12 }
];

PRODUCT_LIST.forEach(function(product) {
    const coop = COOPERATIVE_CATALOG[product.coopId];
    product.coop = coop ? coop.name : '';
    if (coop) coop.products.push(product.fullName);
});

const PRODUCT_CATALOG = {};
PRODUCT_LIST.forEach(function(product) {
    PRODUCT_CATALOG[slugifyProductName(product.fullName)] = product;
});

const CATEGORY_CATALOG = {
    sauces: {
        label: 'Sauces',
        productCategories: ['Sauces et bases']
    },
    epices: {
        label: 'Épices',
        productCategories: ['Épices']
    },
    boissons: {
        label: 'Boissons',
        productCategories: ['Boissons']
    },
    'karite-arachide': {
        label: 'Karité-arachide',
        productCategories: ['Karité-arachide']
    },
    feculents: {
        label: 'Féculents',
        productCategories: ['Féculents']
    }
};

function productCategoryToSlug(productCategory) {
    for (const slug of Object.keys(CATEGORY_CATALOG)) {
        if (CATEGORY_CATALOG[slug].productCategories.indexOf(productCategory) !== -1) {
            return slug;
        }
    }
    return '';
}

function countProductsInCategory(slug) {
    const cat = CATEGORY_CATALOG[slug];
    if (!cat) return 0;
    return PRODUCT_LIST.filter(function(p) {
        return cat.productCategories.indexOf(p.category) !== -1;
    }).length;
}

function getProductPageUrl(fullNameOrSlug) {
    const slug = PRODUCT_CATALOG[fullNameOrSlug]
        ? fullNameOrSlug
        : slugifyProductName(fullNameOrSlug);
    if (!PRODUCT_CATALOG[slug]) return 'product.html';
    return 'product.html?p=' + encodeURIComponent(slug);
}

function formatProductPrice(price) {
    return price.toLocaleString('fr-FR') + ' F';
}

function initProductDetailPage() {
    if (!document.body.classList.contains('page-product')) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('p');
    const product = slug && PRODUCT_CATALOG[slug]
        ? PRODUCT_CATALOG[slug]
        : PRODUCT_LIST[0];

    document.title = product.name + ' - CuisineFacile.africa';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = product.name + ' — ' + product.format + '. Transformé par ' + product.coop + '.';
    }

    const breadcrumbCat = document.querySelector('.pdp-breadcrumb a:nth-of-type(2)');
    const breadcrumbCurrent = document.querySelector('.pdp-breadcrumb-current');
    if (breadcrumbCat) breadcrumbCat.textContent = product.category;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

    const mainImage = document.getElementById('pdpMainImage');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }

    document.querySelectorAll('.gallery-thumbnails .thumbnail img').forEach(function(thumb) {
        thumb.src = product.image;
        thumb.alt = product.name;
    });

    const categoryBadge = document.querySelector('.pdp-category-badge');
    const title = document.querySelector('.pdp-title');
    const subtitle = document.querySelector('.pdp-subtitle');
    const priceEl = document.querySelector('.pdp-price');
    const ratingStars = document.querySelector('.pdp-stars');
    const ratingText = document.querySelector('.pdp-rating-text');

    if (categoryBadge) categoryBadge.textContent = product.category;
    if (title) title.textContent = product.name;
    if (subtitle) subtitle.textContent = product.format;
    if (priceEl) priceEl.textContent = formatProductPrice(product.price);
    if (ratingText) ratingText.textContent = product.rating + ' · ' + product.reviews + ' avis';

    const fairAmount = Math.round(product.price * product.fairPct / 100);
    const fairAmountEl = document.querySelector('.pdp-fair-amount');
    const fairBar = document.querySelector('.pdp-fair-banner .producer-fair-bar span');
    const fairLabels = document.querySelectorAll('.pdp-fair-banner .producer-fair-labels span');

    if (fairAmountEl) {
        fairAmountEl.textContent = formatProductPrice(fairAmount);
    }
    if (fairBar) {
        fairBar.style.width = product.fairPct + '%';
    }
    if (fairLabels.length >= 2) {
        fairLabels[0].textContent = 'Productrice ' + product.fairPct + '%';
        fairLabels[1].textContent = 'Logistique & marque ' + (100 - product.fairPct) + '%';
    }

    const fairBannerText = document.querySelector('.pdp-fair-banner-text');
    if (fairBannerText) {
        fairBannerText.innerHTML = '<i class="fas fa-heart" aria-hidden="true"></i> Sur ce produit, <strong class="pdp-fair-amount">' +
            formatProductPrice(fairAmount) + '</strong> reviennent à la coopérative <strong>' + product.coop + '</strong>.';
    }

    const coopMeta = product.coopId ? COOPERATIVE_CATALOG[product.coopId] : null;
    const producerLocation = document.querySelector('.pdp-producer-location');
    if (producerLocation && coopMeta) {
        producerLocation.innerHTML = '<i class="fas fa-map-marker-alt" aria-hidden="true"></i> ' +
            product.coop + ' — ' + coopMeta.city;
    }
    const producerLink = document.querySelector('.pdp-producer-link');
    if (producerLink) {
        producerLink.textContent = 'Voir toutes nos coopératives →';
        producerLink.setAttribute('href', 'producers.html');
    }

    // Prix dynamique selon quantité sur la fiche produit
    const quantityInput = document.querySelector('.pdp-quantity .quantity-input');
    const quantityMinus = document.querySelector('.pdp-quantity .quantity-btn:first-child');
    const quantityPlus = document.querySelector('.pdp-quantity .quantity-btn:last-child');
    const addToCartBtn = document.querySelector('.btn-pdp-add-cart');
    const productSlug = slug && PRODUCT_CATALOG[slug]
        ? slug
        : slugifyProductName(product.fullName);

    function getQuantity() {
        if (!quantityInput) return 1;
        const value = parseInt(quantityInput.value, 10);
        if (!Number.isFinite(value) || value < 1) return 1;
        return value;
    }

    function updateProductTotalPrice() {
        if (!priceEl) return;
        const qty = getQuantity();
        priceEl.textContent = formatProductPrice(product.price * qty);
    }

    if (quantityInput) {
        quantityInput.addEventListener('input', updateProductTotalPrice);
        quantityInput.addEventListener('change', function() {
            const qty = getQuantity();
            quantityInput.value = String(qty);
            updateProductTotalPrice();
        });
    }
    if (quantityMinus) quantityMinus.addEventListener('click', updateProductTotalPrice);
    if (quantityPlus) quantityPlus.addEventListener('click', updateProductTotalPrice);

    if (addToCartBtn) {
        addToCartBtn.dataset.productId = productSlug;
        addToCartBtn.dataset.productName = product.fullName;
        addToCartBtn.dataset.productImage = product.image || '';
        addToCartBtn.dataset.productPrice = String(product.price);
    }

    updateProductTotalPrice();
}

function syncProductCardFromCatalog(card) {
    const nameEl = card.querySelector('.product-name');
    if (!nameEl) return null;
    const fullName = nameEl.textContent.trim();
    const product = PRODUCT_LIST.find(function(p) { return p.fullName === fullName; });
    if (!product) return null;

    card.dataset.category = productCategoryToSlug(product.category);
    if (product.coopId) {
        card.dataset.cooperative = product.coopId;
    }
    const coopEl = card.querySelector('.product-coop');
    if (coopEl) {
        coopEl.textContent = product.coop;
    }
    const img = card.querySelector('.product-image img');
    if (img && product.image) {
        img.src = product.image;
        img.alt = product.fullName;
    }
    return product;
}

function tagShopProductCards() {
    document.querySelectorAll('#shopProductsGrid .product-card').forEach(syncProductCardFromCatalog);
}

function initShopFilters() {
    const grid = document.getElementById('shopProductsGrid');
    if (!grid) return;

    tagShopProductCards();

    const productCards = grid.querySelectorAll('.product-card');
    if (!productCards.length) return;

    const params = new URLSearchParams(window.location.search);
    const cooperativeId = params.get('cooperative');
    const urlCategory = params.get('category');

    const coopData = cooperativeId ? COOPERATIVE_CATALOG[cooperativeId] : null;
    const banner = document.getElementById('shopCoopBanner');
    const bannerLabel = banner ? banner.querySelector('.shop-coop-banner-label') : null;
    const bannerTitle = document.getElementById('shopCoopBannerTitle');
    const bannerProducts = document.getElementById('shopCoopBannerProducts');
    const resultsCount = document.getElementById('resultsCount');
    const emptyMessage = document.getElementById('shopEmptyMessage');
    const resetBtn = document.getElementById('resetFiltersBtn');
    const pageSubtitle = document.querySelector('.products-section .section-subtitle');
    const categoryCheckboxes = document.querySelectorAll('.filter-label input[data-category]');

    function getActiveCategoriesFromCheckboxes() {
        return Array.from(categoryCheckboxes)
            .filter(function(cb) { return cb.checked; })
            .map(function(cb) { return cb.dataset.category; });
    }

    function updateResultsCount(visibleCount, categories) {
        if (!resultsCount) return;
        const label = visibleCount > 1 ? 'produits' : 'produit';
        const parts = [visibleCount + ' ' + label];
        if (categories.length === 1 && CATEGORY_CATALOG[categories[0]]) {
            parts.push(CATEGORY_CATALOG[categories[0]].label);
        } else if (coopData) {
            parts.push(coopData.name);
        }
        resultsCount.textContent = parts.join(' — ');
    }

    function updateBanner(categories) {
        if (!banner) return;
        const showBanner = Boolean(coopData) || categories.length === 1;
        banner.hidden = !showBanner;
        if (!showBanner) return;

        if (categories.length === 1 && CATEGORY_CATALOG[categories[0]] && !coopData) {
            const cat = CATEGORY_CATALOG[categories[0]];
            if (bannerLabel) bannerLabel.textContent = 'Catégorie';
            if (bannerTitle) bannerTitle.textContent = cat.label;
            if (bannerProducts) {
                const names = PRODUCT_LIST
                    .filter(function(p) { return cat.productCategories.indexOf(p.category) !== -1; })
                    .map(function(p) { return p.name; });
                bannerProducts.textContent = names.join(' · ');
            }
            if (pageSubtitle) pageSubtitle.textContent = 'Produits de la catégorie « ' + cat.label + ' »';
        } else if (coopData) {
            if (bannerLabel) bannerLabel.textContent = 'Produits de';
            if (bannerTitle) bannerTitle.textContent = coopData.name;
            if (bannerProducts) bannerProducts.textContent = coopData.products.join(' · ');
            if (pageSubtitle) pageSubtitle.textContent = 'Produits fabriqués par ' + coopData.name;
        }
    }

    function applyFilters() {
        let visibleCount = 0;
        const categories = getActiveCategoriesFromCheckboxes();

        productCards.forEach(function(card) {
            const matchCoop = !cooperativeId || card.dataset.cooperative === cooperativeId;
            const matchCat = !categories.length || categories.indexOf(card.dataset.category) !== -1;
            const show = matchCoop && matchCat;
            card.style.display = show ? '' : 'none';
            if (show) visibleCount += 1;
        });

        if (emptyMessage) {
            emptyMessage.hidden = visibleCount > 0;
            if (categories.length === 1 && CATEGORY_CATALOG[categories[0]]) {
                emptyMessage.textContent = 'Aucun produit dans la catégorie « ' +
                    CATEGORY_CATALOG[categories[0]].label + ' ».';
            } else if (coopData) {
                emptyMessage.textContent = 'Aucun produit trouvé pour cette coopérative.';
            } else {
                emptyMessage.textContent = 'Aucun produit ne correspond à vos filtres.';
            }
        }

        updateResultsCount(visibleCount, categories);
        updateBanner(categories);
    }

    if (urlCategory && CATEGORY_CATALOG[urlCategory]) {
        categoryCheckboxes.forEach(function(cb) {
            cb.checked = cb.dataset.category === urlCategory;
        });
    }

    applyFilters();

    categoryCheckboxes.forEach(function(cb) {
        cb.addEventListener('change', function() {
            const selected = getActiveCategoriesFromCheckboxes();
            const url = new URL(window.location.href);
            if (selected.length === 1) {
                url.searchParams.set('category', selected[0]);
            } else {
                url.searchParams.delete('category');
            }
            window.history.replaceState({}, '', url.pathname + url.search);
            applyFilters();
        });
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            window.location.href = 'shop.html';
        });
    }
}

function initHomeCategories() {
    document.querySelectorAll('.category-card[data-category]').forEach(function(card) {
        const slug = card.dataset.category;
        const count = countProductsInCategory(slug);
        const countEl = card.querySelector('.category-count');
        if (countEl) {
            countEl.textContent = count + (count > 1 ? ' produits' : ' produit');
        }
    });
}

const CART_FREE_SHIPPING_THRESHOLD = 10000;
const CART_SHIPPING_FEE = 1500;

function formatCartPrice(amount) {
    return amount.toLocaleString('fr-FR') + ' FCFA';
}

function initCartPage() {
    if (!document.body.classList.contains('page-cart')) return;

    const cartList = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const grandTotalEl = document.getElementById('cartGrandTotal');

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function normalizeCartItems(items) {
        if (!Array.isArray(items)) return [];
        return items
            .map(function(item) {
                const quantityRaw = parseInt(item && item.quantity, 10);
                const priceRaw = parseInt(item && item.price, 10);
                const quantity = Number.isFinite(quantityRaw) && quantityRaw > 0 ? quantityRaw : 0;
                const price = Number.isFinite(priceRaw) && priceRaw >= 0 ? priceRaw : 0;
                return {
                    id: item && item.id ? String(item.id) : '',
                    name: item && item.name ? String(item.name) : 'Produit',
                    image: item && item.image ? String(item.image) : 'img/patte.png',
                    quantity: quantity,
                    price: price
                };
            })
            .filter(function(item) {
                return item.id && item.quantity > 0;
            });
    }

    function updateHeaderCartCount(cartItems) {
        const cartCount = document.querySelector('.cart-count');
        if (!cartCount) return;
        const totalQty = cartItems.reduce(function(sum, item) {
            return sum + item.quantity;
        }, 0);
        cartCount.textContent = String(totalQty);
    }

    function updateSummary(cartItems) {
        const subtotal = cartItems.reduce(function(sum, item) {
            return sum + (item.price * item.quantity);
        }, 0);

        const shipping = subtotal === 0 || subtotal >= CART_FREE_SHIPPING_THRESHOLD
            ? 0
            : CART_SHIPPING_FEE;
        const grandTotal = subtotal + shipping;

        if (subtotalEl) subtotalEl.textContent = formatCartPrice(subtotal);
        if (shippingEl) {
            shippingEl.textContent = shipping === 0 && subtotal > 0
                ? 'Gratuite'
                : formatCartPrice(shipping);
        }
        if (grandTotalEl) grandTotalEl.textContent = formatCartPrice(grandTotal);
        updateHeaderCartCount(cartItems);
    }

    function renderCartItems(cartItems) {
        if (!cartList) return;
        cartList.innerHTML = '';

        if (!cartItems.length) {
            const empty = document.createElement('p');
            empty.className = 'cart-empty-message';
            empty.textContent = 'Votre panier est vide. Ajoutez des produits pour commencer.';
            cartList.appendChild(empty);
            updateSummary(cartItems);
            return;
        }

        cartItems.forEach(function(item) {
            const lineTotal = item.price * item.quantity;
            const card = document.createElement('article');
            card.className = 'cart-item-card';
            card.dataset.unitPrice = String(item.price);
            card.dataset.itemId = item.id;
            card.innerHTML = `
                <button type="button" class="cart-item-remove" aria-label="Supprimer"><i class="fas fa-times"></i></button>
                <div class="cart-item-image">
                    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
                </div>
                <div class="cart-item-info">
                    <h2 class="cart-item-name">${escapeHtml(item.name)}</h2>
                    <p class="cart-item-coop">Produit CuisineFacile</p>
                    <p class="cart-item-unit-price">${formatCartPrice(item.price)}</p>
                </div>
                <div class="cart-item-qty">
                    <div class="cart-qty-control">
                        <button type="button" class="cart-qty-btn cart-qty-minus" aria-label="Diminuer">−</button>
                        <span class="cart-qty-value">${item.quantity}</span>
                        <button type="button" class="cart-qty-btn cart-qty-plus" aria-label="Augmenter">+</button>
                    </div>
                </div>
                <p class="cart-item-line-total">${formatCartPrice(lineTotal)}</p>
            `;
            cartList.appendChild(card);
        });

        updateSummary(cartItems);
    }

    function readCart() {
        return normalizeCartItems(getCart());
    }

    function writeCart(items) {
        saveCart(items);
        renderCartItems(items);
    }

    renderCartItems(readCart());

    if (cartList) {
        cartList.addEventListener('click', function(e) {
            const card = e.target.closest('.cart-item-card');
            if (!card) return;

            const itemId = card.dataset.itemId;
            if (!itemId) return;

            const cartItems = readCart();
            const item = cartItems.find(function(entry) { return entry.id === itemId; });
            if (!item) return;

            if (e.target.closest('.cart-qty-minus')) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    writeCart(cartItems);
                }
                return;
            }

            if (e.target.closest('.cart-qty-plus')) {
                item.quantity += 1;
                writeCart(cartItems);
                return;
            }

            if (e.target.closest('.cart-item-remove')) {
                const nextItems = cartItems.filter(function(entry) { return entry.id !== itemId; });
                writeCart(nextItems);
            }
        });
    }

    // Comments section (maquette) - stockées en localStorage
    const commentsForm = document.getElementById('commentsForm');
    const commentNameInput = document.getElementById('commentName');
    const commentMessageInput = document.getElementById('commentMessage');
    const commentRatingSelect = document.getElementById('commentRating');
    const commentsList = document.getElementById('cartCommentsList');
    const commentsEmpty = document.getElementById('cartCommentsEmpty');
    const commentsStatus = document.getElementById('cartCommentsStatus');

    if (commentsForm && commentMessageInput && commentsList) {
        const STORAGE_KEY = 'cuisinefacile_client_comments';

        function getStoredComments() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                const parsed = raw ? JSON.parse(raw) : [];
                return Array.isArray(parsed) ? parsed : [];
            } catch (e) {
                return [];
            }
        }

        function saveComments(comments) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
        }

        function formatCommentDate(isoDate) {
            try {
                return new Date(isoDate).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
            } catch (e) {
                return '';
            }
        }

        function getRatingValue() {
            const raw = commentRatingSelect ? parseInt(commentRatingSelect.value, 10) : 5;
            if (!Number.isFinite(raw)) return 5;
            return Math.max(1, Math.min(5, raw));
        }

        function createStars(rating) {
            const starsWrap = document.createElement('div');
            starsWrap.className = 'cart-comments-stars';

            const safeRating = Math.max(1, Math.min(5, rating));
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('i');
                const filled = i <= safeRating;
                star.className = filled
                    ? 'fas fa-star cart-comment-star cart-comment-star--filled'
                    : 'far fa-star cart-comment-star cart-comment-star--empty';
                starsWrap.appendChild(star);
            }
            return starsWrap;
        }

        function renderComments() {
            const comments = getStoredComments();
            commentsList.innerHTML = '';

            if (!comments.length) {
                if (commentsEmpty) commentsEmpty.hidden = false;
                return;
            }

            if (commentsEmpty) commentsEmpty.hidden = true;

            comments
                .slice(0, 30)
                .forEach(function(c) {
                    const name = (c && typeof c.name === 'string' && c.name.trim())
                        ? c.name.trim()
                        : 'Client';
                    const message = (c && typeof c.message === 'string' && c.message.trim())
                        ? c.message.trim()
                        : '';
                    const rating = c && Number.isFinite(c.rating) ? c.rating : getRatingValue();
                    const createdAt = c && c.createdAt ? c.createdAt : '';

                    const card = document.createElement('article');
                    card.className = 'cart-comment-card';

                    const top = document.createElement('div');
                    top.className = 'cart-comment-top';

                    const avatar = document.createElement('div');
                    avatar.className = 'cart-comment-avatar';
                    avatar.textContent = (name[0] || 'C').toUpperCase();

                    const metaCol = document.createElement('div');
                    metaCol.style.minWidth = '0';

                    const nameEl = document.createElement('div');
                    nameEl.className = 'cart-comment-name';
                    nameEl.textContent = name;

                    top.appendChild(avatar);
                    metaCol.appendChild(nameEl);
                    top.appendChild(metaCol);
                    top.appendChild(createStars(rating));

                    const dateEl = document.createElement('div');
                    dateEl.className = 'cart-comment-date';
                    dateEl.textContent = createdAt ? ('Publié le ' + formatCommentDate(createdAt)) : '';

                    const msgEl = document.createElement('div');
                    msgEl.className = 'cart-comment-message';
                    msgEl.textContent = message;

                    card.appendChild(top);
                    card.appendChild(dateEl);
                    card.appendChild(msgEl);

                    commentsList.appendChild(card);
                });
        }

        renderComments();

        commentsForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!commentMessageInput) return;

            const name = commentNameInput && commentNameInput.value.trim()
                ? commentNameInput.value.trim()
                : 'Client';
            const message = commentMessageInput.value.trim();
            const rating = getRatingValue();

            if (message.length < 3) {
                if (commentsStatus) {
                    commentsStatus.textContent = 'Veuillez écrire un commentaire (au moins 3 caractères).';
                }
                return;
            }

            const current = getStoredComments();
            const next = [
                {
                    id: String(Date.now()),
                    name: name,
                    message: message,
                    rating: rating,
                    createdAt: new Date().toISOString()
                },
                ...current
            ];

            saveComments(next.slice(0, 50));

            // Reset form
            commentMessageInput.value = '';
            if (commentNameInput) commentNameInput.value = '';
            if (commentRatingSelect) commentRatingSelect.value = '5';

            renderComments();

            if (commentsStatus) {
                commentsStatus.textContent = 'Merci pour votre avis !';
                setTimeout(function() {
                    commentsStatus.textContent = '';
                }, 2500);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initProductDetailPage();
    initFlagshipProductCards();
    initShopFilters();
    initHomeCategories();
    initCartPage();
    if (!document.body.classList.contains('page-cart')) {
        updateCartUI();
    }
    // Hero background slider (3 images, 5 seconds each)
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let heroIndex = 0;
        setInterval(function() {
            heroSlides[heroIndex].classList.remove('active');
            heroIndex = (heroIndex + 1) % heroSlides.length;
            heroSlides[heroIndex].classList.add('active');
        }, 5000);
    }

    // Login Modal
    const userBtn = document.querySelector('.user-btn');
    const loginModal = document.getElementById('loginModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (userBtn && loginModal) {
        userBtn.addEventListener('click', function() {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (modalClose && loginModal) {
        modalClose.addEventListener('click', function() {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (modalOverlay && loginModal) {
        modalOverlay.addEventListener('click', function() {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && loginModal && loginModal.classList.contains('active')) {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Open login modal from register page
    const openLoginModalBtn = document.getElementById('openLoginModal');
    if (openLoginModalBtn && loginModal) {
        openLoginModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal when navigating to register
    const registerLinks = document.querySelectorAll('a.register-link[href="register.html"]');
    registerLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Register form validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('register-password');
            const confirm = document.getElementById('confirm-password');
            if (password && confirm && password.value !== confirm.value) {
                confirm.setCustomValidity('Les mots de passe ne correspondent pas.');
                confirm.reportValidity();
                return;
            }
            if (confirm) confirm.setCustomValidity('');
            const btn = registerForm.querySelector('.register-submit-btn');
            if (btn) {
                btn.textContent = 'Compte créé !';
                btn.disabled = true;
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 1500);
            }
        });
        const confirmInput = document.getElementById('confirm-password');
        const passwordInput = document.getElementById('register-password');
        if (confirmInput && passwordInput) {
            confirmInput.addEventListener('input', function() {
                if (this.value !== passwordInput.value) {
                    this.setCustomValidity('Les mots de passe ne correspondent pas.');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks && window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Product Favorite Toggle
    const favoriteButtons = document.querySelectorAll('.product-favorite');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });

    // Quantity Selector
    const quantitySelectors = document.querySelectorAll('.quantity-selector');
    quantitySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.quantity-btn:first-child');
        const plusBtn = selector.querySelector('.quantity-btn:last-child');
        const input = selector.querySelector('.quantity-input');
        
        if (minusBtn && plusBtn && input) {
            minusBtn.addEventListener('click', function() {
                let value = parseInt(input.value);
                if (value > 1) {
                    input.value = value - 1;
                }
            });
            
            plusBtn.addEventListener('click', function() {
                let value = parseInt(input.value);
                input.value = value + 1;
            });
            
            input.addEventListener('change', function() {
                let value = parseInt(this.value);
                if (isNaN(value) || value < 1) {
                    this.value = 1;
                }
            });
        }
    });

    // Tab Navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.textContent.toLowerCase().replace(' ', '-');
            const targetContent = document.querySelector(`.tab-content:nth-child(${Array.from(tabBtns).indexOf(this) + 2})`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Gallery Thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('#pdpMainImage') || document.querySelector('.main-image img');

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const thumbImg = this.querySelector('img');
                if (thumbImg && thumbImg.src) {
                    mainImage.src = thumbImg.src;
                    if (thumbImg.alt) mainImage.alt = thumbImg.alt;
                }
            });
        });
    }

    // Add to Cart Button Animation
    const addCartButtons = document.querySelectorAll('.btn-add-cart, .btn-add-cart-large');
    addCartButtons.forEach(button => {
        const defaultLabel = button.dataset.defaultLabel || 'Ajouter au panier';
        const defaultHtml = button.classList.contains('btn-pdp-add-cart')
            ? `<i class="fas fa-shopping-cart" aria-hidden="true"></i> ${defaultLabel}`
            : defaultLabel;

        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Fiche produit: ajouter avec quantité choisie puis rediriger au panier
            if (this.classList.contains('btn-pdp-add-cart')) {
                const qtyInput = document.querySelector('.pdp-quantity .quantity-input');
                const qtyRaw = qtyInput ? parseInt(qtyInput.value, 10) : 1;
                const quantity = Number.isFinite(qtyRaw) && qtyRaw > 0 ? qtyRaw : 1;
                const productId = this.dataset.productId || 'product';
                const productName = this.dataset.productName || 'Produit';
                const productImage = this.dataset.productImage || '';
                const unitPriceRaw = parseInt(this.dataset.productPrice || '0', 10);
                const unitPrice = Number.isFinite(unitPriceRaw) ? unitPriceRaw : 0;

                const cart = getCart();
                const existingItem = cart.find(function(item) { return item.id === productId; });
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({
                        id: productId,
                        name: productName,
                        image: productImage,
                        price: unitPrice,
                        quantity: quantity
                    });
                }
                saveCart(cart);

                const cartCount = document.querySelector('.cart-count');
                if (cartCount) {
                    const totalItems = cart.reduce(function(sum, item) {
                        return sum + (parseInt(item.quantity, 10) || 0);
                    }, 0);
                    cartCount.textContent = totalItems;
                }

                window.location.href = 'cart.html';
                return;
            }
            
            if (this.classList.contains('btn-pdp-add-cart')) {
                this.innerHTML = 'Ajouté !';
            } else {
                this.textContent = 'Ajouté !';
            }
            this.style.backgroundColor = '#2B663A';
            
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                let count = parseInt(cartCount.textContent, 10) || 0;
                cartCount.textContent = count + 1;
                cartCount.style.animation = 'bounce 0.5s ease';
                setTimeout(() => {
                    cartCount.style.animation = '';
                }, 500);
            }
            
            setTimeout(() => {
                if (this.classList.contains('btn-pdp-add-cart')) {
                    this.innerHTML = defaultHtml;
                } else {
                    this.textContent = defaultLabel;
                }
                this.style.backgroundColor = '';
            }, 2000);
        });
    });

    // Boutique : clic carte + bouton "Voir le produit" → fiche produit
    function navigateToProductCard(card) {
        if (!card) return;
        const id = card.dataset.productId;
        window.location.href = id ? getProductPageUrl(id) : (card.dataset.productLink || 'product.html');
    }

    document.querySelectorAll('.product-card[data-product-link]').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            if (e.target.closest('button, a')) return;
            navigateToProductCard(this);
        });

        const viewButtons = card.querySelectorAll('.btn-view-product, .btn-view-more, .btn-flagship-view');
        viewButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                navigateToProductCard(card);
            });
        });
    });

    // Section productrice (accordéon)
    const storyToggle = document.querySelector('.pdp-story-toggle');
    const producerCard = document.querySelector('.pdp-producer-card');
    const detailsGrid = document.querySelector('.pdp-details-grid');
    if (storyToggle && producerCard) {
        storyToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            producerCard.hidden = expanded;
            if (detailsGrid) detailsGrid.hidden = expanded;
            this.querySelector('i').classList.toggle('fa-chevron-down', !expanded);
            this.querySelector('i').classList.toggle('fa-chevron-up', expanded);
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('.newsletter-input');
            const button = this.querySelector('.newsletter-btn');
            
            if (input && button) {
                button.textContent = 'Inscrit !';
                button.style.backgroundColor = '#2B663A';
                input.value = '';
                
                setTimeout(() => {
                    button.textContent = "S'inscrire";
                    button.style.backgroundColor = '';
                }, 2000);
            }
        });
    }

    // Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
            }
        });
    }

    // Panier legacy (.cart-item) — la page panier utilise initCartPage()
    if (!document.body.classList.contains('page-cart')) {
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const cartItem = this.closest('.cart-item');
                if (cartItem) {
                    cartItem.style.opacity = '0';
                    cartItem.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        cartItem.remove();
                        const cartCount = document.querySelector('.cart-count');
                        if (cartCount) {
                            cartCount.textContent = document.querySelectorAll('.cart-item').length;
                        }
                    }, 300);
                }
            });
        });
    }

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    // In a real application, this would redirect to search results
                    alert('Recherche pour: ' + query);
                }
            }
        });
    }

    // Filtres catégories : gérés par initShopFilters() sur shop.html

    // Sort Select
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            // In a real application, this would sort products
            console.log('Sort changed:', this.value);
        });
    }

    // Pagination
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled && !this.classList.contains('active')) {
                // Remove active class from all buttons
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button (if it's a number)
                if (!this.querySelector('i')) {
                    this.classList.add('active');
                }
                
                // In a real application, this would load the page
                console.log('Page changed:', this.textContent);
            }
        });
    });

    // Breadcrumb Styling
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');
    if (breadcrumbLinks.length > 0) {
        breadcrumbLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.color = '#e07a5f';
            });
            link.addEventListener('mouseleave', function() {
                this.style.color = '';
            });
        });
    }

    // Add CSS animation for cart count bounce
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
    `;
    document.head.appendChild(style);

    // Lazy Loading Images (if browser supports it)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Carte → coopérative (Nos Productrices)
    const mapCityToCoop = {
        'Séguéla': 'coop-seguela',
        'Guéssabo': 'coop-guessabo',
        'Divo': 'coop-divo',
        'Abidjan': 'coop-pecheurs-sud',
        'M\'Batto': 'coop-mbatto',
        'Daloa': 'coop-daloa',
        'Bouna': 'coop-bouna',
        'San Pedro': 'coop-san-pedro',
        'Soubré': 'coop-soubre',
        'Korhogo': 'coop-korhogo',
        'Kasséré': 'coop-kassere'
    };
    document.querySelectorAll('.prod-map-marker, .engagement-map-marker').forEach(marker => {
        marker.addEventListener('click', () => {
            const city = marker.getAttribute('data-city');
            const coopId = mapCityToCoop[city];
            if (!coopId) return;
            const card = document.getElementById(coopId);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
        marker.setAttribute('role', 'button');
        marker.setAttribute('tabindex', '0');
        marker.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                marker.click();
            }
        });
    });

    // Observe product cards and producer cards
    const animatedElements = document.querySelectorAll('.product-card, .producer-card, .producer-profile-card, .flagship-product-card, .prod-coop-card, .prod-pillar-card, .category-card, .quality-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Console message
    console.log('CuisineFacile.africa - Site chargé avec succès');
});

// ============================================
// Cartes produit style phares (accueil + boutique)
// ============================================

const PRODUCT_FAIR_PCT = {
    'Sauce graine pure': 60,
    "Pâte d'arachide": 55,
    'Sauce arachide': 55,
    'Attiéké': 55,
    'Soumbara': 65,
    'Kankankan': 65,
    'Sauce pistache': 65,
    'Mélange kedjenou': 65,
    'Mélange poisson': 65,
    'Akpi': 60,
    'bissap pur': 65,
    'gingembre-citron': 65,
    'kinkéliba': 65,
    'Tamarin': 60,
    'baobab': 70,
    'chocolat': 40,
    'karité': 55,
    'Miel': 50,
    'Confiture': 60,
    'Coffret': 55
};

function getFairPct(productName) {
    if (!productName) return 50;
    for (const [key, val] of Object.entries(PRODUCT_FAIR_PCT)) {
        if (productName.toLowerCase().includes(key.toLowerCase())) return val;
    }
    return 50;
}

function formatCoopBadge(coopText) {
    if (!coopText) return '';
    const text = coopText.trim();
    if (text.length <= 32) return text;
    return text.slice(0, 29) + '…';
}

function extractProductFormat(name) {
    const match = name.match(/(\d+\s*g|Pot verre[^·]*|Bocal[^·]*|Sachet[^·]*|Boîte[^·]*)/i);
    return match ? match[1].trim() : '';
}

function initFlagshipProductCards() {
    document.querySelectorAll('.products-grid--flagship .product-card').forEach(card => {
        if (card.dataset.flagshipInit === '1') return;
        card.dataset.flagshipInit = '1';

        syncProductCardFromCatalog(card);

        const nameEl = card.querySelector('.product-name');
        const productName = nameEl ? nameEl.textContent.trim() : '';
        const fair = card.dataset.fair || String(getFairPct(productName));

        const rating = card.querySelector('.product-rating');
        if (rating && !card.querySelector('.flagship-fair-box')) {
            const box = document.createElement('div');
            box.className = 'flagship-fair-box';
            box.innerHTML = '<p><strong class="flagship-fair-pct">' + fair + '%</strong> revient à la productrice</p>' +
                '<div class="flagship-fair-bar"><span style="width:' + fair + '%"></span></div>';
            rating.replaceWith(box);
        }

        const coop = card.querySelector('.product-coop');
        const imageWrap = card.querySelector('.product-image');
        if (imageWrap && !imageWrap.querySelector('.flagship-coop-badge') && coop) {
            const badge = document.createElement('span');
            badge.className = 'flagship-coop-badge';
            badge.textContent = formatCoopBadge(coop.textContent.trim());
            imageWrap.insertBefore(badge, imageWrap.firstChild);
        }

        if (coop && nameEl) {
            const format = card.dataset.format || extractProductFormat(productName);
            if (format) {
                const sizeEl = document.createElement('p');
                sizeEl.className = 'flagship-product-size';
                sizeEl.textContent = format;
                coop.replaceWith(sizeEl);
            }
        }

        if (nameEl) nameEl.classList.add('flagship-product-name');

        const slug = slugifyProductName(productName);
        if (slug && PRODUCT_CATALOG[slug]) {
            card.dataset.productId = slug;
        }

        const footer = card.querySelector('.product-footer');
        if (footer) {
            footer.classList.add('flagship-product-footer');
            const price = footer.querySelector('.product-price');
            if (price) {
                price.classList.add('flagship-price');
                price.textContent = price.textContent.replace(/\s*FCFA\s*/gi, ' F').trim();
            }
            const productLink = card.dataset.productId
                ? getProductPageUrl(card.dataset.productId)
                : (card.dataset.productLink || 'product.html');
            const btn = footer.querySelector('.btn-add-cart, .btn-view-more, .btn-view-product, a.btn-add-cart');
            if (btn) {
                btn.classList.remove('btn-add-cart');
                btn.classList.add('btn-flagship-view', 'btn-view-product');
                const viewBtn = btn.tagName === 'A' ? document.createElement('button') : btn;
                if (btn.tagName === 'A') {
                    viewBtn.type = 'button';
                    viewBtn.className = 'btn-flagship-view btn-view-product';
                    btn.replaceWith(viewBtn);
                }
                viewBtn.textContent = 'Voir le produit';
                viewBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    window.location.href = productLink;
                });
            }
        }
    });
}

// ============================================
// Utility Functions
// ============================================

// Format price
function formatPrice(price) {
    return price.toLocaleString('fr-FR') + ' FCFA';
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Local Storage for Cart
function saveCart(cart) {
    localStorage.setItem('cuisinefacile_cart', JSON.stringify(cart));
}

function getCart() {
    const cart = localStorage.getItem('cuisinefacile_cart');
    return cart ? JSON.parse(cart) : [];
}

// Add to cart with local storage
function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart(cart);
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    const cart = getCart();
    const cartCount = document.querySelector('.cart-count');
    
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}
