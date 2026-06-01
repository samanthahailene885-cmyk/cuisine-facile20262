(function () {
    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function renderRecettesGrid() {
        const grid = document.getElementById('recettesGrid');
        if (!grid || typeof RECETTES_DATA === 'undefined') return;

        const order = typeof RECETTES_LIST_ORDER !== 'undefined'
            ? RECETTES_LIST_ORDER
            : Object.keys(RECETTES_DATA);

        grid.innerHTML = order.map(function (slug) {
            const recipe = RECETTES_DATA[slug];
            if (!recipe) return '';

            const productCount = typeof getRecipeProductsCount === 'function'
                ? getRecipeProductsCount(recipe)
                : (recipe.shopProducts ? recipe.shopProducts.length : 0);
            const productsLabel = typeof formatRecipeProductsLabel === 'function'
                ? formatRecipeProductsLabel(productCount)
                : productCount + ' produits';

            const tagsHtml = (recipe.cardTags || []).map(function (tag) {
                return '<span class="recette-tag">' + escapeHtml(tag) + '</span>';
            }).join('');

            return '<article class="recette-card">' +
                '<div class="recette-card-image">' +
                '<img src="' + escapeHtml(recipe.image) + '" alt="' + escapeHtml(recipe.title) + '">' +
                '<span class="recette-badge recette-badge--products">' +
                '<i class="fas fa-shopping-cart" aria-hidden="true"></i> ' + escapeHtml(productsLabel) +
                '</span>' +
                '<span class="recette-badge recette-badge--level">' + escapeHtml(recipe.difficulty) + '</span>' +
                '</div>' +
                '<div class="recette-card-body">' +
                '<h2 class="recette-card-title">' + escapeHtml(recipe.title) + '</h2>' +
                '<p class="recette-card-desc">' + escapeHtml(recipe.cardDesc || '') + '</p>' +
                '<div class="recette-card-meta">' +
                '<span><i class="far fa-clock" aria-hidden="true"></i> ' + escapeHtml(recipe.time) + '</span>' +
                '<span><i class="fas fa-user-friends" aria-hidden="true"></i> ' + escapeHtml(recipe.portions) + '</span>' +
                '</div>' +
                '<div class="recette-ingredients">' +
                '<p class="recette-ingredients-label">Ingrédients principaux:</p>' +
                '<div class="recette-tags">' + tagsHtml + '</div>' +
                '</div>' +
                '<a href="recette.html?id=' + encodeURIComponent(slug) + '" class="recette-btn">Voir la recette</a>' +
                '</div>' +
                '</article>';
        }).join('');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderRecettesGrid);
    } else {
        renderRecettesGrid();
    }
})();
