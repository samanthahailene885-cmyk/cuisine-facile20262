const RECETTES_DATA = {
    'sauce-arachide': {
        slug: 'sauce-arachide',
        title: 'Sauce Arachide',
        category: 'Sauces',
        image: 'img/sauce arachide.png',
        time: '95 min',
        price: '3 000 FCFA',
        portions: '6 pers.',
        difficulty: 'Moyen',
        productsCount: 2,
        description: 'Une sauce onctueuse et riche à base de pâte d\'arachide, parfumée aux épices et garnie de viande, poisson fumé et légumes. Un classique de la cuisine ivoirienne.',
        cardDesc: 'Sauce crémeuse à l\'arachide, viande de bœuf et poisson fumé, mijotée longuement aux légumes et épices...',
        cardTags: ['Pâte d\'arachide CuisineFacile', 'Sauce arachide prête', 'Poisson fumé'],
        ingredients: [
            { text: '500 g de viande de bœuf', available: false },
            { text: '4 poissons fumés (capitaine)', available: false },
            { text: '500 g de pâte d\'arachide', available: true, product: 'Pâte d\'arachide pure 350g' },
            { text: '2 oignons', available: false },
            { text: '3 tomates fraîches', available: false },
            { text: '1 cuillère à soupe de tomate concentrée', available: false },
            { text: '1 cuillère à café de poudre de poisson fumé', available: true, product: 'Soumbara en poudre 80g' },
            { text: '4 piments frais', available: false },
            { text: '5 gombos frais', available: false },
            { text: 'Sel', available: false }
        ],
        steps: [
            'Couper la viande de bœuf en morceaux et nettoyer les poissons fumés. Réserver.',
            'Dans une grande marmite, faire revenir la viande dans un peu d\'huile avec les oignons émincés jusqu\'à coloration.',
            'Ajouter les tomates fraîches coupées en dés, la tomate concentrée, les piments et le gombo. Bien mélanger.',
            'Verser un verre d\'eau, saler légèrement et laisser mijoter à feu moyen pendant 30 minutes.',
            'Délayer la pâte d\'arachide dans un bol d\'eau tiède pour obtenir une crème lisse, sans grumeaux.',
            'Incorporer progressivement la pâte d\'arachide à la préparation en remuant constamment.',
            'Écraser partiellement les légumes dans la sauce pour épaissir et homogénéiser. Laisser cuire encore 20 minutes.',
            'Rectifier l\'assaisonnement et servir bien chaud avec du riz blanc ou du foutou banane plantain.'
        ],
        tip: 'Pour une sauce plus onctueuse, ajoutez la pâte d\'arachide hors du feu puis remettez à mijoter doucement. Évitez l\'ébullition forte qui peut faire tourner la sauce.',
        shopProducts: [
            { productId: 'pate-d-arachide-pure-350g', name: 'Pâte d\'arachide pure 350g', price: 3000, image: 'img/Pâte d\'arachide pure 350g.png', rating: '★★★★☆' },
            { productId: 'sauce-arachide-prete-350g', name: 'Sauce arachide prête 350g', price: 3200, image: 'img/Sauce arachide prête 350g.png', rating: '★★★★☆' }
        ]
    },
    'sauce-graine': {
        slug: 'sauce-graine',
        title: 'La Sauce Graine',
        category: 'Sauces',
        image: 'img/sauce graine.jpg',
        time: '45 min',
        price: '5 000 FCFA',
        portions: '6 pers.',
        difficulty: 'Moyen',
        productsCount: 2,
        description: 'Ce plat peut se faire avec le riz, le foutou (banane ou igname). On n\'a pas besoin de grandes choses pour cette sauce. Ces ingrédients constituent le standard.',
        cardDesc: 'Sauce riche et onctueuse à base de graines de palme, poisson fumé et viande, parfumée aux feuilles de kablè...',
        cardTags: ['Sauce graine pure CuisineFacile', 'Graines de palme', 'Poisson fumé'],
        ingredients: [
            { text: 'Graine de palme', available: true, product: 'Sauce graine pure 350g' },
            { text: 'Oignon', available: false },
            { text: 'Tomate', available: false },
            { text: 'Ail (optionnel)', available: false },
            { text: 'Poisson mangni', available: false },
            { text: 'Kplo (peau de bœuf) ou viande', available: false },
            { text: 'Crabes (optionnel)', available: false },
            { text: 'Escargot (optionnel)', available: false },
            { text: 'Feuilles de kablè (ça donne un petit parfum)', available: false },
            { text: 'Épices', available: true, product: 'Soumbara en poudre 80g' }
        ],
        steps: [
            'Laver et cuire les graines de palme. Écraser pour extraire la pulpe rouge, puis passer au tamis pour obtenir la crème de graine.',
            'Faire revenir les oignons et les tomates dans l\'huile de palme jusqu\'à compote.',
            'Ajouter le poisson mangni, la viande ou le kplo coupés en morceaux. Laisser dorer quelques minutes.',
            'Verser la crème de graine et mélanger soigneusement. Ajouter un verre d\'eau tiède.',
            'Incorporer les feuilles de kablè, les épices et le piment. Saler avec modération.',
            'Laisser mijoter à feu doux 30 à 35 minutes en remuant régulièrement pour éviter que la sauce n\'attache.',
            'Ajouter les crabes ou escargots en fin de cuisson si vous en utilisez. Goûter et rectifier l\'assaisonnement.',
            'Servir bien chaud avec du riz blanc, du foutou banane ou du foutou igname.'
        ],
        tip: 'Pour gagner du temps, utilisez notre sauce graine pure CuisineFacile : il suffit de la réchauffer et d\'ajouter votre viande ou poisson pour un résultat authentique en moins de 20 minutes.',
        shopProducts: [
            { productId: 'sauce-graine-pure-350g', name: 'Sauce graine pure 350g', price: 3500, image: 'img/Sauce graine pure 350g.png', rating: '★★★★☆' },
            { productId: 'soumbara-en-poudre-80g', name: 'Soumbara en poudre 80g', price: 1800, image: 'img/Soumbara en poudre 80g.png', rating: '★★★★☆' }
        ]
    },
    'sauce-pistache': {
        slug: 'sauce-pistache',
        title: 'La Sauce Pistache',
        category: 'Sauces',
        image: 'img/sauce pistache.jpg',
        time: '45 min',
        price: '5 000 FCFA',
        portions: '6 pers.',
        difficulty: 'Facile',
        productsCount: 2,
        description: 'Une sauce traditionnelle à base de pistache pilée, parfumée aux oignons, tomates et épices, accompagnée de viande ou de poisson.',
        cardDesc: 'Pistache pilée mijotée avec oignons, tomates et épices, servie avec viande ou poisson selon la tradition...',
        cardTags: ['Sauce pistache déshydratée', 'Piment artisanal', 'Épices'],
        ingredients: [
            { text: 'Pistache pilée, écrasée ou broyée à la machine', available: true, product: 'Sauce pistache déshydratée 80g' },
            { text: 'Oignon', available: false },
            { text: 'Tomate', available: false },
            { text: 'Ail (optionnel)', available: false },
            { text: 'Viande ou poisson', available: false },
            { text: 'Épices', available: true, product: 'Mélange kedjenou 80g' },
            { text: 'Piment frais', available: false }
        ],
        steps: [
            'Piler ou broyer finement la pistache jusqu\'à obtenir une poudre homogène.',
            'Faire revenir les oignons émincés dans l\'huile jusqu\'à transparence. Ajouter l\'ail si utilisé.',
            'Incorporer les tomates coupées et laisser compoter quelques minutes.',
            'Ajouter la viande ou le poisson coupé en morceaux. Faire dorer légèrement.',
            'Saupoudrer la pistache pilée et les épices. Mélanger pour enrober tous les ingrédients.',
            'Verser un verre d\'eau, ajouter le piment et saler. Couvrir et laisser mijoter 35 à 40 minutes.',
            'Remuer de temps en temps et ajuster la consistance avec un peu d\'eau si nécessaire.',
            'Servir chaud avec riz, foutou ou banane plantain selon vos goûts.'
        ],
        tip: 'La pistache doit être finement broyée pour éviter les grumeaux. Vous pouvez utiliser notre sauce pistache déshydratée CuisineFacile pour gagner du temps tout en gardant le goût authentique.',
        shopProducts: [
            { productId: 'sauce-pistache-deshydratee-80g', name: 'Sauce pistache déshydratée 80g', price: 1500, image: 'img/Sauce pistache déshydratée 80g.png', rating: '★★★★☆' },
            { productId: 'melange-kedjenou-80g', name: 'Mélange kedjenou 80g', price: 1800, image: 'img/Mélange kedjenou 80g.png', rating: '★★★★☆' }
        ]
    },
    'tchep-senegalais': {
        slug: 'tchep-senegalais',
        title: 'Tchep Sénégalais',
        category: 'Plats complets',
        image: 'img/tchep.jpg',
        time: '240 min',
        price: '10 000 FCFA',
        portions: '8 pers.',
        difficulty: 'Difficile',
        productsCount: 2,
        description: 'Le riz au poisson sénégalais par excellence : riz parfumé, poisson frit, légumes variés et marinade aux herbes fraîches.',
        cardDesc: 'Riz cassé parfumé au poisson frit, légumes et marinade aux herbes : le plat festif de la cuisine ouest-africaine...',
        cardTags: ['Riz parfumé', 'Poisson frais', 'Épices & aromates'],
        ingredients: [
            { text: '1 kg de poisson frais', available: false },
            { text: '1 kg de riz cassé de jasmin', available: false },
            { text: 'Ail', available: false },
            { text: 'Persil', available: false },
            { text: 'Piments', available: false },
            { text: 'Légumes (potiron, aubergine, chou, carotte, manioc)', available: false },
            { text: 'Tomates fraîches', available: false },
            { text: 'Concentré de tomate', available: false },
            { text: 'Oignon', available: false },
            { text: 'Sel, feuille de laurier', available: false },
            { text: 'Gombo', available: false },
            { text: 'Feuilles de sorrel', available: false },
            { text: 'Cube bouillon', available: false },
            { text: 'Huile', available: false }
        ],
        steps: [
            'Piler ail, persil et piments pour obtenir la marinade. Inciser le poisson et l\'enrober. Laisser reposer 30 minutes.',
            'Frire le poisson jusqu\'à belle coloration dorée. Réserver sur du papier absorbant.',
            'Dans la même huile, faire revenir les oignons, puis ajouter tomates fraîches et concentré de tomate.',
            'Incorporer les légumes coupés en gros morceaux : potiron, aubergine, chou, carotte et manioc.',
            'Verser de l\'eau, ajouter le cube bouillon, le laurier et le gombo. Laisser mijoter 45 minutes.',
            'Retirer poisson et légumes. Cuire le riz dans le bouillon parfumé jusqu\'à absorption complète.',
            'Disposer le riz en plateau, garnir de poisson frit et de légumes autour. Arroser de sauce restante.',
            'Servir immédiatement, accompagné de piment et de feuilles de sorrel si désiré.'
        ],
        tip: 'Le secret d\'un bon tchep est le bouillon : ne jetez pas l\'huile de friture, elle parfume le riz. Cuisez le riz à couvert et à feu doux pour un grain bien séparé.',
        shopProducts: [
            { productId: 'soumbara-en-poudre-80g', name: 'Soumbara en poudre 80g', price: 1800, image: 'img/Soumbara en poudre 80g.png', rating: '★★★★☆' },
            { productId: 'melange-poisson-braise-80g', name: 'Mélange poisson braisé 80g', price: 1800, image: 'img/Mélange poisson braisé 80g.png', rating: '★★★★☆' }
        ]
    }
};

/** Ordre d'affichage sur recettes.html */
const RECETTES_LIST_ORDER = [
    'sauce-graine',
    'sauce-arachide',
    'sauce-pistache',
    'tchep-senegalais'
];

function getRecipeProductsCount(recipe) {
    if (!recipe || !Array.isArray(recipe.shopProducts)) return 0;
    return recipe.shopProducts.length;
}

function formatRecipeProductsLabel(count) {
    return count + (count > 1 ? ' produits' : ' produit');
}

RECETTES_LIST_ORDER.forEach(function (slug) {
    const recipe = RECETTES_DATA[slug];
    if (recipe) {
        recipe.productsCount = getRecipeProductsCount(recipe);
    }
});
