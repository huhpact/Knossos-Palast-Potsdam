// Menu Page JavaScript

class MenuManager {
    constructor() {
        this.currentMenu = 'hauptspeisekarte';
        this.currentFilter = 'all';
        this.expandedItem = null;
        this.searchTerm = '';
        this.menuData = this.initializeMenuData();
        this.init();
    }

    init() {
        this.setupMenuTabs();
        this.setupFilters();
        this.setupSearch();
        this.setupBackToTop();
        this.setupScrollAnimations();
        this.renderMenu();
    }

    initializeMenuData() {
        return {
            hauptspeisekarte: {
                'Aperitif': [
                    {
                        number: '160',
                        name: 'Martini Blanco',
                        price: '6,50',
                        description: 'Klassischer italienischer Wermut mit frischen Kräutern und Zitrusnoten',
                        image: '/images/martini-blanco.png',
                        labels: ['Farbstoffe', 'Alkohol'],
                        vegetarian: true,
                        vegan: true
                    },
                    {
                        number: '162',
                        name: 'Campari (Orange & Soda)',
                        price: '8,50',
                        description: 'Erfrischender Aperitif mit bitteren Kräuternoten, serviert mit Orangensaft und Soda',
                        image: '/images/campari-orange-soda.png',
                        labels: ['Farbstoffe', 'Alkohol'],
                        vegetarian: true,
                        vegan: true
                    },
										{
                        number: '163',
                        name: 'Prosecco',
                        price: '5,90',
                        description: 'Spritziger italienischer Schaumwein mit feinen Perlen',
                        image: '/images/prosecco.png',
                        labels: ['Alkohol'],
                        vegetarian: true,
                        vegan: true
                    },
										{
                        number: '164',
                        name: 'Aperol Spritz',
                        price: '9,90',
                        description: 'Erfrischender Cocktail aus Aperol, Prosecco und Soda, garniert mit einer Orangenscheibe',
                        image: '/images/aperol.png',
                        labels: ['Alkohol'],
                        vegetarian: true,
                        vegan: true
                    },
										{
                        number: '165',
                        name: 'Lillet Rosé Wild Berry',
                        price: '9,90',
                        description: 'Fruchtiger Aperitif mit Lillet Rosé, frischen Beeren und einem Hauch von Minze',
                        image: '/images/lillet-rose.png',
                        labels: ['Alkohol'],
                        vegetarian: true,
                        vegan: true
                    },
										{
                        number: '166',
                        name: 'Hugo',
                        price: '9,90',
                        description: 'Erfrischender Cocktail aus Prosecco, Holunderblütensirup, Minze und Limette',
                        image: '/images/hugo.png',
                        labels: ['Alkohol'],
                        vegetarian: true,
                        vegan: true
                    }
                ],
                'Kalte Vorspeisen': [
                    {
                        number: '1',
                        name: 'Zaziki',
                        price: '6.90',
                        description: 'Hausgemachter griechischer Joghurt mit Gurken, Knoblauch und Olivenöl',
                        image: '/images/zaziki.png',
                        labels: ['glutenhaltig', 'Milch, Laktose'],
                        vegetarian: true,
                        vegan: false
                    },
                    {
                        number: '2',
                        name: 'Dreierlei griechische Dips',
                        price: '10,90',
                        description: 'Eine Auswahl unserer besten Dips',
                        image: '/images/griechische-dips.jpg',
                        labels: ['Konservierungsstoffe', 'aufgetaute Fischprodukte', 'glutenhaltig', 'Soja', 'Milch, Laktose'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '3',
                        name: 'Oliven & Peperoni',
                        price: '9,10',
                        description: 'Eine Auswahl an griechischen Oliven und Peperoni, dazu Oregano und Olivenöl',
                        image: '/images/oliven-peperoni.png',
                        labels: ['Fisch', 'Eier'],
                        vegetarian: false,
                        vegan: false
                    },
										{
                        number: '4',
                        name: 'Olympos Vorspeisenplatte',
                        price: '19,90',
                        description: 'Eine kleine Auswahl unserer kalten Vorspeisen',
                        image: '/images/olympos.png',
                        labels: ['Konservierungsstoffe', 'Antioxidationsmittel', 'Eisen-II-gluconat', 'aufgetaute Fischprodukte', 'glutenhaltig', 'Soja', 'Milch', 'Schwefeldioxid'],
                        vegetarian: false,
                        vegan: false
                    }
                ],
                'Warme Vorspeisen': [
                    {
                        number: '7',
                        name: 'Peperoni gegrillt',
                        price: '9.90',
                        description: 'Gegrillte Peperoni mit Knoblauchsauce und Kräuterbutter',
                        image: '/images/peperoni-gegrillt.png',
                        labels: ['Konservierungsstoffe', 'Antioxidationsmittel', 'Schwefeldioxid'],
                        vegetarian: true,
                        vegan: false
                    },
                    {
                        number: '8',
                        name: 'Gefüllte Florinis',
                        price: '13,50',
                        description: 'Die berühmte Paprikaschote aus Florina, gefüllt mit Fetakäse',
                        image: '/images/florinis.jpg',
                        labels: ['Konservierungsstoffe', 'Süßungsmittel'],
                        vegetarian: true,
                        vegan: false
                    },
										{
                        number: '9',
                        name: 'Dicke Bohnen',
                        price: '13,50',
                        description: 'Griechische dicke Bohnen überbacken mit Fetakäse',
                        image: '/images/bohnen.avif',
                        labels: ['Antioxidationsmittel', 'Soja'],
                        vegetarian: true,
                        vegan: false
                    },
										{
                        number: '10',
                        name: 'Tiropitakia & Spanakopitakia',
                        price: '13,90',
                        description: 'Kleine gefüllte Blätterteigtaschen mit Feta und Spinat, dazu Zaziki',
                        image: '/images/katerinas.jpg',
                        labels: ['glutenhaltig', 'Milch'],
                        vegetarian: true,
                        vegan: false
                    },
										{
                        number: '11',
                        name: 'Auberginen & Zucchini',
                        price: '14,50',
                        description: 'Gebratene Auberginen und Zucchini mit Knoblauch-Joghurt-Sauce und Zaziki',
                        image: '/images/auberginen.png',
                        labels: ['glutenhaltig', 'Milch'],
                        vegetarian: true,
                        vegan: false
                    },
                ],
                'Gyros und Grillspezialitäten': [
                    {
                        number: '50',
                        name: 'Gyros Pita',
                        price: '12.90',
                        description: 'Traditionelles Gyros mit Tzatziki, Zwiebeln und Pommes im Pita-Brot',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Milch', 'Schweinefleisch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '51',
                        name: 'Souvlaki Schwein',
                        price: '16.80',
                        description: 'Gegrillte Schweinefleischspieße mit griechischen Kartoffeln und Salat',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Schweinefleisch'],
                        vegetarian: false,
                        vegan: false
                    }
                ],
                'Traditionelle griechische Küche': [
                    {
                        number: '70',
                        name: 'Moussaka',
                        price: '18.90',
                        description: 'Geschichteter Auflauf mit Auberginen, Hackfleisch und Béchamel-Sauce',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Milch', 'Eier', 'Rindfleisch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '71',
                        name: 'Pastitsio',
                        price: '17.50',
                        description: 'Griechischer Nudelauflauf mit Hackfleisch und Käse überbacken',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Milch', 'Eier', 'Rindfleisch'],
                        vegetarian: false,
                        vegan: false
                    }
                ],
                'Desserts': [
                    {
                        number: '90',
                        name: 'Baklava',
                        price: '6.50',
                        description: 'Traditionelles Blätterteiggebäck mit Nüssen und Honig',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Nüsse', 'Eier'],
                        vegetarian: true,
                        vegan: false
                    },
                    {
                        number: '91',
                        name: 'Galaktoboureko',
                        price: '7.20',
                        description: 'Blätterteig mit Grießpudding und Zitronensirup',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Milch', 'Eier'],
                        vegetarian: true,
                        vegan: false
                    }
                ]
            },
            kinderkarte: {
                'Kinderkarte': [
                    {
                        number: 'K1',
                        name: 'Kinder Gyros',
                        price: '8.90',
                        description: 'Kleine Portion Gyros mit Pommes und Tzatziki',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Milch', 'Schweinefleisch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: 'K2',
                        name: 'Kinder Schnitzel',
                        price: '9.50',
                        description: 'Paniertes Schnitzel mit Pommes und Ketchup',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Eier', 'Schweinefleisch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: 'K3',
                        name: 'Kinder Nudeln',
                        price: '7.80',
                        description: 'Nudeln mit Tomatensauce und geriebenem Käse',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Gluten', 'Milch'],
                        vegetarian: true,
                        vegan: false
                    }
                ]
            },
            eiskarte: {
                'Eis': [
                    {
                        number: 'E1',
                        name: 'Vanilleeis',
                        price: '4.50',
                        description: 'Cremiges Vanilleeis mit echter Vanille',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Milch', 'Eier'],
                        vegetarian: true,
                        vegan: false
                    },
                    {
                        number: 'E2',
                        name: 'Schokoladeneis',
                        price: '4.50',
                        description: 'Reichhaltiges Schokoladeneis mit echter Schokolade',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Milch', 'Eier'],
                        vegetarian: true,
                        vegan: false
                    }
                ],
                'Dessert': [
                    {
                        number: 'D1',
                        name: 'Eiskaffee',
                        price: '6.80',
                        description: 'Kalter Kaffee mit Vanilleeis und Sahne',
                        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Milch', 'Koffein'],
                        vegetarian: true,
                        vegan: false
                    }
                ]
            },
            highlightkarte: {
                'Vorspeisen & Salate': [
                    {
                        number: 'H1',
                        name: 'Knossos Mezze Platte',
                        price: '24.90',
                        description: 'Auswahl unserer besten Vorspeisen für 2 Personen',
                        image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Milch', 'Nüsse', 'Fisch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: 'H2',
                        name: 'Griechischer Bauernsalat XXL',
                        price: '16.80',
                        description: 'Großer Salat mit Feta, Oliven, Tomaten und Gurken',
                        image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Milch'],
                        vegetarian: true,
                        vegan: false
                    }
                ],
                'Fisch und Fleischspezialitäten': [
                    {
                        number: 'H10',
                        name: 'Dorade Royal',
                        price: '28.90',
                        description: 'Ganze Dorade vom Grill mit Olivenöl und Zitrone',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Fisch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: 'H11',
                        name: 'Lammkeule für 2 Personen',
                        price: '45.90',
                        description: 'Langsam geschmorte Lammkeule mit Kräutern der Provence',
                        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        labels: ['Lammfleisch'],
                        vegetarian: false,
                        vegan: false
                    }
                ]
            }
        };
    }

    setupMenuTabs() {
        const tabs = document.querySelectorAll('.menu-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const menuType = tab.getAttribute('data-menu');
                this.switchMenu(menuType);
            });
        });
    }

    setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('menu-search');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterItems();
        });
    }

    setupBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe categories as they're created
        this.observeCategories = (categories) => {
            categories.forEach(category => observer.observe(category));
        };
    }

    switchMenu(menuType) {
        // Update active tab
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-menu="${menuType}"]`).classList.add('active');

        // Update active section
        document.querySelectorAll('.menu-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(menuType).classList.add('active');

        this.currentMenu = menuType;
        this.renderMenu();
    }

    setFilter(filter) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

        this.currentFilter = filter;
        this.filterItems();
    }

    renderMenu() {
        const container = document.getElementById(`${this.currentMenu}-content`);
        const menuData = this.menuData[this.currentMenu];
        
        container.innerHTML = '';

        Object.entries(menuData).forEach(([categoryName, items]) => {
            const categoryElement = this.createCategoryElement(categoryName, items);
            container.appendChild(categoryElement);
        });

        // Setup scroll animations for new categories
        const categories = container.querySelectorAll('.menu-category');
        this.observeCategories(categories);

        // Setup item interactions
        this.setupItemInteractions();
        this.filterItems();
    }

    createCategoryElement(categoryName, items) {
        const category = document.createElement('div');
        category.className = 'menu-category';
        
        const iconMap = {
            'Aperitif': 'fas fa-wine-glass',
            'Kalte Vorspeisen': 'fas fa-snowflake',
            'Warme Vorspeisen': 'fas fa-fire',
            'Käse Spezialitäten': 'fas fa-cheese',
            'Vorspeisen aus dem Meer': 'fas fa-fish',
            'Suppen': 'fas fa-bowl-hot',
            'Salate': 'fas fa-leaf',
            'Gyros und Grillspezialitäten': 'fas fa-fire-flame-curved',
            'Gemischte Fleischplatten vom grill': 'fas fa-drumstick-bite',
            'Schnitzel': 'fas fa-cutlery',
            'Traditionelle griechische Küche': 'fas fa-home',
            'Pfännchen-Spezialitäten': 'fas fa-pot',
            'Überbackenes': 'fas fa-cheese',
            'Fischspezialitäten': 'fas fa-fish',
            'Beilagen': 'fas fa-plate-wheat',
            'Saucen': 'fas fa-bottle-droplet',
            'Desserts': 'fas fa-cake-candles',
            'Weissweine': 'fas fa-wine-bottle',
            'Roséweine': 'fas fa-wine-bottle',
            'Rotweine': 'fas fa-wine-bottle',
            'Kaffee und Tee': 'fas fa-mug-hot',
            'Alkoholfreie Getränke': 'fas fa-glass-water',
            'Säfte': 'fas fa-glass-citrus',
            'Fassbier': 'fas fa-beer-mug-empty',
            'Flaschenbier': 'fas fa-beer',
            'Longdrinks': 'fas fa-martini-glass',
            'Spirituosen': 'fas fa-whiskey-glass',
            'Schorlen': 'fas fa-glass-water-droplet',
            'Flaschen-Weissweine': 'fas fa-wine-bottle',
            'Flaschen-Roséweine': 'fas fa-wine-bottle',
            'Flaschenrotweine': 'fas fa-wine-bottle',
            'Kinderkarte': 'fas fa-child',
            'Eis': 'fas fa-ice-cream',
            'Dessert': 'fas fa-cake',
            'Vorspeisen & Salate': 'fas fa-salad',
            'Fisch und Fleischspezialitäten': 'fas fa-fish'
        };

        category.innerHTML = `
            <div class="category-header">
                <div class="category-icon">
                    <i class="${iconMap[categoryName] || 'fas fa-utensils'}"></i>
                </div>
                <h3 class="category-title">${categoryName}</h3>
            </div>
            <div class="menu-items">
                ${items.map(item => this.createItemElement(item)).join('')}
            </div>
        `;

        return category;
    }

    createItemElement(item) {
        const badges = [];
        if (item.vegetarian) badges.push('<span class="item-badge vegetarian" title="Vegetarisch"><i class="fas fa-leaf"></i></span>');
        if (item.vegan) badges.push('<span class="item-badge vegan" title="Vegan"><i class="fas fa-seedling"></i></span>');

        const labels = item.labels.map(label => `<span class="item-label">${label}</span>`).join('');

        return `
            <div class="menu-item" data-vegetarian="${item.vegetarian}" data-vegan="${item.vegan}" data-name="${item.name.toLowerCase()}">
                <div class="menu-item-header">
                    <div class="menu-item-info">
                        <div class="item-number">${item.number}</div>
                        <div class="item-details">
                            <div class="item-name">
                                ${item.name}
                                <div class="item-badges">${badges.join('')}</div>
                            </div>
                        </div>
                    </div>
                    <div class="item-price">${item.price}€</div>
                    <i class="fas fa-chevron-down expand-icon"></i>
                </div>
                <div class="menu-item-content">
                    <div class="item-content-inner">
                        <div class="item-text">
                            <div class="item-description">${item.description}</div>
                            <div class="item-labels">${labels}</div>
                        </div>
                        <div class="item-image">
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    setupItemInteractions() {
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            const header = item.querySelector('.menu-item-header');
            header.addEventListener('click', () => {
                this.toggleItem(item);
            });
        });
    }

    toggleItem(item) {
        const isExpanded = item.classList.contains('expanded');
        
        // Close currently expanded item
        if (this.expandedItem && this.expandedItem !== item) {
            this.expandedItem.classList.remove('expanded');
        }

        // Toggle current item
        if (isExpanded) {
            item.classList.remove('expanded');
            this.expandedItem = null;
        } else {
            item.classList.add('expanded');
            this.expandedItem = item;
        }
    }

    filterItems() {
        const items = document.querySelectorAll('.menu-item');
        
        items.forEach(item => {
            const isVegetarian = item.getAttribute('data-vegetarian') === 'true';
            const isVegan = item.getAttribute('data-vegan') === 'true';
            const itemName = item.getAttribute('data-name');
            
            let showItem = true;

            // Filter by dietary preference
            if (this.currentFilter === 'vegetarian' && !isVegetarian) {
                showItem = false;
            } else if (this.currentFilter === 'vegan' && !isVegan) {
                showItem = false;
            }

            // Filter by search term
            if (this.searchTerm && !itemName.includes(this.searchTerm)) {
                showItem = false;
            }

            if (showItem) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
                if (item.classList.contains('expanded')) {
                    item.classList.remove('expanded');
                    if (this.expandedItem === item) {
                        this.expandedItem = null;
                    }
                }
            }
        });
    }
}

// Initialize menu manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MenuManager();
});