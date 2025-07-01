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
                        labels: ['glutenhaltig', 'Milch', 'Schalenfrüchte'],
                        vegetarian: true,
                        vegan: false
                    },
										{
                        number: '12',
                        name: 'Gefüllte Champignons',
                        price: '14,50',
                        description: 'Champignons gefüllt mit Spinat und mit Fetakäse überbacken',
                        image: '/images/champignons.png',
                        labels: ['Milch'],
                        vegetarian: true,
                        vegan: false
                    },
										{
                        number: '13',
                        name: 'Ilios - Vorspeisen',
                        price: '21,90',
                        description: 'Eine große Auswahl unserer warmen Vorspeisen',
                        image: '/images/Ilios.png',
                        labels: ['Konservierungsstoffe', 'Antioxidationsmittel', 'Süßungsmittel', 'glutenhaltig', 'Soja', 'Milch', 'Sellerie'],
                        vegetarian: true,
                        vegan: false
                    },
                ],
                 'Käse-Spezialitäten': [
                    {
                        number: '15',
                        name: 'Chtipiti',
                        price: '11,90',
                        description: 'Fetakäse mit scharfer Paprika serviert',
                        image: '/images/chtipiti.png',
                        labels: ['Milch'],
                        vegetarian: true,
                        vegan: false
                    },
                    {
                        number: '16',
                        name: 'Halloumi',
                        price: '13,90',
                        description: 'gegrillter Käse aus Zypern, serviert mit Tomaten & Olivenöl',
                        image: '/images/halloumi.png',
                        labels: ['Konservierungsstoffe', 'Süßungsmittel', 'Milch'],
                        vegetarian: true,
                        vegan: false
                    },
                     {
                        number: '17',
                        name: 'Fetakäse im Ofen',
                        price: '14,50',
                        description: 'original griechischer Fetakäse mit Zwiebeln, Cherrytomaten, Peperoni und Olivenöl, im Ofen überbacken',
                        image: '/images/gegr-feta.png',
                        labels: ['Milch'],
                        vegetarian: true,
                        vegan: false
                    },
                     {
                        number: '18',
                        name: 'Ziegenkäse',
                        price: '13,90',
                        description: 'Ziegenkäse im Blätterteig mit Honig und Sesam verfeinert',
                        image: '/images/ziegenkaese.png',
                        labels: ['glutenhaltig', 'Milch', 'Sesamsamen'],
                        vegetarian: true,
                        vegan: false
                    },
                ],
                 'Vorspeisen aus dem Meer': [
                    {
                        number: '20',
                        name: 'Kalamariringe',
                        price: '15,50',
                        description: 'gebratene Kalamariringe mit Zitronen-Knoblauchsauce, dazu Zaziki',
                        image: '/images/kalamariringe.png',
                        labels: ['aufgetaute Fischprodukte', 'glutenhaltig', 'Schalenfrüchte', 'Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '21',
                        name: 'Oktopus gegrillt',
                        price: '19,50',
                        description: 'gegrillter Oktopus mit Zitronen-Knoblauchsauce und hausgemachtem Brot',
                        image: '/images/oktopus.png',
                        labels: ['aufgetaute Fischprodukte', 'glutenhaltig', 'Schalenfrüchte', 'Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                     {
                        number: '23',
                        name: 'Knoblauchbrot',
                        price: '5,90',
                        description: 'Knoblauchbrot nach Art des Hauses',
                        image: '/images/knoblauchbrot.png',
                        labels: ['glutenhaltig'],
                        vegetarian: true,
                        vegan: true
                    },
                    {
                        number: '24',
                        name: 'Pitabrot',
                        price: '4,90',
                        description: 'deftiges Fladenbrot vom Grill',
                        image: '/images/Pita.png',
                        labels: ['glutenhaltig'],
                        vegetarian: true,
                        vegan: true
                    },
                    {
                        number: '25',
                        name: 'Pitabrot mit Feta',
                        price: '7,50',
                        description: 'deftiges Fladenbrot vom Grill mit Fetakäse',
                        image: '/images/gpita-feta.png',
                        labels: ['glutenhaltig', 'Milch'],
                        vegetarian: true,
                        vegan: false
                    }
                ],

                 'Suppen': [
                    {
                        number: '27',
                        name: 'Tomatensuppe',
                        price: '6,90',
                        description: 'Griechische Tomatensuppe mit frischen Kräutern und Gemüse',
                        image: '/images/tomatensuppe.jpg',
                        labels: ['Konservierungsstoffe', 'glutenhaltig'],
                        vegetarian: true,
                        vegan: true
                    },
                    {
                        number: '28',
                        name: 'Bohnensuppe',
                        price: '6,90',
                        description: 'Griechische Bohnensuppe mit frischen Kräutern und Gemüse',
                        image: '/images/bohnensuppe.jpg',
                        labels: ['Antioxidationsmittel', 'glutenhaltig', 'Soja'],
                        vegetarian: true,
                        vegan: true
                    },
                     {
                        number: '29',
                        name: 'Zwiebelsuppe',
                        price: '6,90',
                        description: 'Griechische Zwiebelsuppe mit Käse überbacken',
                        image: '/images/zwiebelsuppe.jpg',
                        labels: ['Antioxidationsmittel', 'glutenhaltig', 'Soja'],
                        vegetarian: true,
                        vegan: true
                    }
                ],
                 'Salate': [
                    {
                        number: '30',
                        name: 'Choriatiki Salat',
                        price: '16,50',
                        description: 'original griechischer Bauernsalat mit Tomaten, Gurken, Paprika, Feta, Oliven, Olivenöl, serviert mit Brot',
                        image: '/images/choriatiki.jpg',
                        labels: ['Farbstoffe', 'Konservierungsstoffe', 'Süßungsmittel', 'glutenhaltig', 'Milch', 'Senf'],
                        vegetarian: true,
                        vegan: false
                    },
                    {
                        number: '31',
                        name: 'Greek-Duett-Salat',
                        price: '24,90',
                        description: 'frischer Saisonsalat mit Lammspieß vom Grill, Ziegenkäse in Blätterteig, Tomaten, Gurken und Paprika an hausgemachtem Dressing und Brot',
                        image: '/images/greek-duet.jpg',
                        labels: ['Farbstoffe', 'Konservierungsstoffe', 'Süßungsmittel', 'glutenhaltig', 'Milch', 'Senf'],
                        vegetarian: false,
                        vegan: false
                    },
                     {
                        number: '32',
                        name: 'Iraklio Salat',
                        price: '24,90',
                        description: 'frischer Saisonsalat mit gegrilltem Lachsfilet, Tomaten, Gurke und Paprika an hausgemachtem Dressing und Brot',
                        image: '/images/iraklio.jpg',
                        labels: ['Konservierungsstoffe', 'Süßungsmittel', 'glutenhaltig', 'Senf'],
                        vegetarian: false,
                        vegan: false
                    },
                     {
                        number: '33',
                        name: 'Salat des Hauses',
                        price: '20,90',
                        description: 'frischer Saisonsalat mit gegrilltem Hühnerfilet, Tomaten, Gurke und Paprika an hausgemachtem Dressing und Brot',
                        image: '/images/salat-haus.jpg',
                        labels: ['Konservierungsstoffe', 'Süßungsmittel', 'glutenhaltig', 'Senf'],
                        vegetarian: false,
                        vegan: false
                    }
                ],
                'Gyros und Grillspezialitäten': [
                    {
                        number: '40',
                        name: 'Gyros-Klassik',
                        price: '20,90',
                        description: 'geschnetzeltes Schweinefleisch, serviert mit Zaziki und Knoblauchkartoffeln',
                        image: '/images/gyros-klassik.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '41',
                        name: 'Gyros Klassik - kleine Portion',
                        price: '16,90',
                        description: 'geschnetzeltes Schweinefleisch, serviert mit Zaziki und Knoblauchkartoffeln',
                        image: '/images/gyros-klassik.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
					{
                        number: '42',
                        name: 'Bifteki',
                        price: '22,90',
                        description: 'Würzig gegrillte Hacksteaks mit original griechischem Fetakäse gefüllt, dazu Rosmarinkartoffeln, mit Knoblauch',
                        image: '/images/bifteki.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '43',
                        name: 'Bifteki - kleine Portion',
                        price: '17,90',
                        description: 'Würzig gegrillte Hacksteaks mit original griechischem Fetakäse gefüllt, dazu Rosmarinkartoffeln, mit Knoblauch',
                        image: '/images/bifteki.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '44',
                        name: 'Souvlaki',
                        price: '22,50',
                        description: 'Zwei gegrillte Schweinefleisch-Spieße mit Fetakäse, dazu Rosmarinkartoffeln, mit Knoblauch',
                        image: '/images/souvlaki.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '45',
                        name: 'Souvlaki - kleine Portion',
                        price: '17,90',
                        description: 'Zwei gegrillte Schweinefleisch-Spieße mit Fetakäse, dazu Rosmarinkartoffeln, mit Knoblauch',
                        image: '/images/souvlaki.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                     {
                        number: '46',
                        name: 'Hähnchenbrustfilet',
                        price: '22,90',
                        description: 'Hähnchenbrustfilet vom Grill, serviert mit Zaziki, griechischen Reisnudeln & Kräuterbutter',
                        image: '/images/haenchenbrust.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                     {
                        number: '47',
                        name: 'Hähnchenbrustfilet - kleine Portion',
                        price: '17,50',
                        description: 'Hähnchenbrustfilet vom Grill, serviert mit Zaziki, griechischen Reisnudeln & Kräuterbutter',
                        image: '/images/haenchenbrust.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                     {
                        number: '48',
                        name: 'Kalbsleber',
                        price: '27,50',
                        description: 'gegrillte Kalbsleber mit gerösteten Zwiebeln, Backkartoffeln und Apfelscheiben, mit Knoblauch',
                        image: '/images/kalbsleber.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '49',
                        name: 'Schweinemedaillions',
                        price: '26,90',
                        description: 'Zarte Schweinemedaillions vom Grill mit Metaxasauce und Rosmarinkartoffeln, mit Knoblauch',
                        image: '/images/schweinemedaillions.png',
                        labels: ['Milch', 'Farbstoffe', 'glutenhaltig'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '52',
                        name: 'Fileto Gemisto',
                        price: '26,90',
                        description: 'Hähnchenbrustfilet gefüllt mit Spinat, dazu Fetakäse, Champignonsauce und Rosmarinkartoffeln, mit Knoblauch',
                        image: '/images/fileto.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },

                ],
                'Gemischte Fleischplatten vom Grill': [
                    {
                        number: '56',
                        name: 'Chania Teller',
                        price: '22,90',
                        description: 'Gyros, Souvlaki, Zaziki und Knoblauchkartoffeln',
                        image: '/images/chania.jpg',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '57',
                        name: 'Grill Teller',
                        price: '24,50',
                        description: 'Gyros, Souvlaki, Suzuki, Knoblauchkartoffeln und Zaziki',
                        image: '/images/grill-teller.jpg',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                    {
                        number: '58',
                        name: 'Lasithi Teller',
                        price: '23,90',
                        description: 'Gyros, Bifteki gefüllt mit original griechischem Fetakäse, Zaziki und griechischen Reisnudeln',
                        image: '/images/lasithi.jpg',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                     {
                        number: '59',
                        name: 'Metsovo Piato',
                        price: '25,50',
                        description: 'Gyros, Hähnchenbrustfilet, Kalbsleber, Zaziki und Rosmarinkartoffeln',
                        image: '/images/metsovo.png',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
                      {
                        number: '60',
                        name: 'Amnissos Teller',
                        price: '26,50',
                        description: 'Gyros, Schweinefiletmedaillons, Hähnchenbrustfilet, Zaziki und Rosmarinkartoffeln',
                        image: '/images/amnissos.jpg',
                        labels: ['Milch'],
                        vegetarian: false,
                        vegan: false
                    },
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

        this.observeCategories = (categories) => {
            categories.forEach(category => observer.observe(category));
        };
    }

    switchMenu(menuType) {
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-menu="${menuType}"]`).classList.add('active');

        document.querySelectorAll('.menu-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(menuType).classList.add('active');

        this.currentMenu = menuType;
        this.renderMenu();
    }

    setFilter(filter) {
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

        const categories = container.querySelectorAll('.menu-category');
        this.observeCategories(categories);

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
            'Käse-Spezialitäten': 'fas fa-cheese',
            'Vorspeisen aus dem Meer': 'fas fa-fish',
            'Suppen': 'fa-solid fa-bowl-food',
            'Salate': 'fas fa-leaf',
            'Gyros und Grillspezialitäten': 'fas fa-fire-flame-curved',
            'Gemischte Fleischplatten vom Grill': 'fas fa-drumstick-bite',
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
   
        if (this.expandedItem && this.expandedItem !== item) {
            this.expandedItem.classList.remove('expanded');
        }

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

            if (this.currentFilter === 'vegetarian' && !isVegetarian) {
                showItem = false;
            } else if (this.currentFilter === 'vegan' && !isVegan) {
                showItem = false;
            }

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

document.addEventListener('DOMContentLoaded', () => {
    new MenuManager();
});