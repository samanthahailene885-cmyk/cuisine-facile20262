(function () {
    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function formatPriceFcfa(amount) {
        return amount.toLocaleString('fr-FR') + ' FCFA';
    }

    function resolveShopProduct(p) {
        if (typeof PRODUCT_LIST !== 'undefined' && Array.isArray(PRODUCT_LIST)) {
            const found = PRODUCT_LIST.find(function (item) {
                return item.fullName === p.name;
            });
            if (found) {
                const id = typeof slugifyProductName === 'function'
                    ? slugifyProductName(found.fullName)
                    : p.productId;
                return {
                    id: id,
                    name: found.fullName,
                    image: found.image,
                    price: found.price,
                    link: typeof getProductPageUrl === 'function'
                        ? getProductPageUrl(id)
                        : 'product.html?p=' + encodeURIComponent(id),
                    rating: p.rating || '★★★★☆'
                };
            }
        }
        const id = p.productId || 'product';
        return {
            id: id,
            name: p.name,
            image: p.image,
            price: p.price,
            link: typeof getProductPageUrl === 'function'
                ? getProductPageUrl(id)
                : 'product.html?p=' + encodeURIComponent(id),
            rating: p.rating || '★★★★☆'
        };
    }

    function addProductToCart(product) {
        if (typeof getCart !== 'function' || typeof saveCart !== 'function') {
            return false;
        }
        const cart = getCart();
        const existing = cart.find(function (item) {
            return item.id === product.id;
        });
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1
            });
        }
        saveCart(cart);
        if (typeof updateCartUI === 'function') {
            updateCartUI();
        }
        return true;
    }

    function bindShopAddButtons() {
        document.querySelectorAll('.recette-shop-add').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const product = {
                    id: btn.dataset.productId,
                    name: btn.dataset.productName,
                    image: btn.dataset.productImage,
                    price: parseInt(btn.dataset.productPrice, 10) || 0
                };
                if (!product.id || !product.name) return;

                const added = addProductToCart(product);
                if (!added) return;

                window.location.href = 'cart.html';
            });
        });
    }

    function initRecettePage() {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('id') || 'sauce-arachide';
        const recipe = typeof RECETTES_DATA !== 'undefined' ? RECETTES_DATA[slug] : null;

        if (!recipe) {
            window.location.replace('recettes.html');
            return;
        }

        document.title = recipe.title + ' - CuisineFacile.africa';

        const setText = function (id, text) {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };

        setText('recetteTitle', recipe.title);
        setText('recetteCategory', recipe.category);
        setText('recetteDesc', recipe.description);
        setText('recetteTime', recipe.time);
        setText('recettePortions', recipe.portions);
        setText('recetteDifficulty', recipe.difficulty);
        setText('recetteDifficultyBadge', recipe.difficulty);
        setText('recetteTip', recipe.tip);

        const heroImg = document.getElementById('recetteHeroImg');
        if (heroImg) {
            heroImg.src = recipe.image;
            heroImg.alt = recipe.title;
            heroImg.onerror = function () {
                this.onerror = null;
                this.src = 'img/Sauce graine pure 350g.png';
            };
        }

        const ingredientsList = document.getElementById('recetteIngredientsList');
        if (ingredientsList) {
            ingredientsList.innerHTML = recipe.ingredients.map(function (item) {
                const badge = item.available
                    ? '<span class="recette-detail-available">Disponible chez nous</span>'
                    : '';
                return '<li class="recette-detail-ingredient">' +
                    '<i class="fas fa-check recette-detail-check" aria-hidden="true"></i>' +
                    '<span>' + escapeHtml(item.text) + badge + '</span>' +
                    '</li>';
            }).join('');
        }

        const stepsList = document.getElementById('recetteStepsList');
        if (stepsList) {
            stepsList.innerHTML = recipe.steps.map(function (step, i) {
                return '<li class="recette-detail-step">' +
                    '<span class="recette-detail-step-num">' + (i + 1) + '</span>' +
                    '<p>' + escapeHtml(step) + '</p>' +
                    '</li>';
            }).join('');
        }

        const shopList = document.getElementById('recetteShopProducts');
        if (shopList && recipe.shopProducts) {
            shopList.innerHTML = recipe.shopProducts.map(function (p) {
                const resolved = resolveShopProduct(p);
                return '<article class="recette-shop-item">' +
                    '<a href="' + escapeHtml(resolved.link) + '" class="recette-shop-item-img">' +
                    '<img src="' + escapeHtml(resolved.image) + '" alt="' + escapeHtml(resolved.name) + '">' +
                    '</a>' +
                    '<div class="recette-shop-item-info">' +
                    '<a href="' + escapeHtml(resolved.link) + '" class="recette-shop-item-name">' + escapeHtml(resolved.name) + '</a>' +
                    '<span class="recette-shop-item-stars">' + resolved.rating + '</span>' +
                    '<span class="recette-shop-item-price">' + formatPriceFcfa(resolved.price) + '</span>' +
                    '<button type="button" class="recette-shop-add" ' +
                    'data-product-id="' + escapeHtml(resolved.id) + '" ' +
                    'data-product-name="' + escapeHtml(resolved.name) + '" ' +
                    'data-product-image="' + escapeHtml(resolved.image) + '" ' +
                    'data-product-price="' + resolved.price + '">' +
                    '<i class="fas fa-shopping-cart" aria-hidden="true"></i> Ajouter</button>' +
                    '</div>' +
                    '</article>';
            }).join('');
            bindShopAddButtons();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRecettePage);
    } else {
        initRecettePage();
    }
})();
