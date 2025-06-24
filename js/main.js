class CookieManager {
    constructor() {
        this.cookieName = 'knossos_cookie_preferences';
        this.acceptedCookieName = 'knossos_cookies_accepted';
        this.init();
    }

    init() {
        if (!this.getCookie(this.acceptedCookieName)) {
            this.showCookieBanner();
        }
        this.setupEventListeners();
    }

    showCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            setTimeout(() => {
                banner.classList.add('show');
            }, 1500);
        }
    }

    hideCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.remove('show');
        }
    }

    setupEventListeners() {
        const essentialBtn = document.getElementById('cookie-essential');
        const analyticsBtn = document.getElementById('cookie-analytics');
        const allBtn = document.getElementById('cookie-all');
        const settingsLink = document.getElementById('cookie-settings');

        if (essentialBtn) {
            essentialBtn.addEventListener('click', () => {
                this.setCookiePreferences({ essential: true, analytics: false, marketing: false });
                this.hideCookieBanner();
            });
        }

        if (analyticsBtn) {
            analyticsBtn.addEventListener('click', () => {
                this.setCookiePreferences({ essential: true, analytics: true, marketing: false });
                this.hideCookieBanner();
                this.loadAnalytics();
            });
        }

        if (allBtn) {
            allBtn.addEventListener('click', () => {
                this.setCookiePreferences({ essential: true, analytics: true, marketing: true });
                this.hideCookieBanner();
                this.loadAnalytics();
                this.loadMarketing();
            });
        }

        if (settingsLink) {
            settingsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showCookieBanner();
            });
        }
    }

    setCookiePreferences(preferences) {
        this.setCookie(this.acceptedCookieName, 'true', 365);
        this.setCookie(this.cookieName, JSON.stringify(preferences), 365);
    }

    getCookiePreferences() {
        const prefs = this.getCookie(this.cookieName);
        return prefs ? JSON.parse(prefs) : null;
    }

    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    loadAnalytics() {
        console.log('Analytics loaded');
    }

    loadMarketing() {
        console.log('Marketing tools loaded');
    }
}

class NavigationManager {
    constructor() {
        this.header = document.getElementById('header');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.logo = document.getElementById('logo');
        this.mobileNavOverlay = document.getElementById('mobile-nav-overlay');
        this.mobileNavSidebar = document.getElementById('mobile-nav-sidebar');
        this.mobileNavClose = document.getElementById('mobile-nav-close');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-links .nav-link');
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupActiveStates();
        this.setupLogoAnimation();
    }

    setupScrollEffects() {
        let lastScrollTop = 0;
        const scrollThreshold = 100;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > scrollThreshold) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }

            lastScrollTop = scrollTop;
        });
    }

    setupMobileMenu() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.openMobileNav();
            });
        }

        if (this.mobileNavClose) {
            this.mobileNavClose.addEventListener('click', () => {
                this.closeMobileNav();
            });
        }

        if (this.mobileNavOverlay) {
            this.mobileNavOverlay.addEventListener('click', () => {
                this.closeMobileNav();
            });
        }

        // Close mobile nav when clicking on links
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileNav();
            });
        });
    }

    openMobileNav() {
        this.hamburger.classList.add('active');
        this.mobileNavOverlay.classList.add('active');
        this.mobileNavSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMobileNav() {
        this.hamburger.classList.remove('active');
        this.mobileNavOverlay.classList.remove('active');
        this.mobileNavSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    setupSmoothScrolling() {
        const allNavLinks = [...this.navLinks, ...this.mobileNavLinks];
        
        allNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    setupActiveStates() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    this.mobileNavLinks.forEach(link => link.classList.remove('active'));
                    
                    const activeLink = document.querySelector(`.nav-link[href="/${sectionId}.html"]`);
                    const activeMobileLink = document.querySelector(`.mobile-nav-links .nav-link[href="/${sectionId}.html"]`);

                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                    if (activeMobileLink) {
                        activeMobileLink.classList.add('active');
                    }
                }
            });
        });
    }

    setupLogoAnimation() {
        if (this.logo) {
            this.logo.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}

class HeroSlideshow {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.currentSlide = 0;
        this.slideInterval = 5000;
        this.init();
    }

    init() {
        if (this.slides.length > 1) {
            this.startSlideshow();
        }
    }

    startSlideshow() {
        setInterval(() => {
            this.nextSlide();
        }, this.slideInterval);
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
    }
}

class AnimationController {
    constructor() {
        this.animatedElements = [];
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.addAnimationClasses();
        this.setupDelayedAnimations();
    }

    addAnimationClasses() {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, sectionIndex) => {
            const elements = section.querySelectorAll('h2, h3, h4, p, .btn-primary, .btn-secondary, .menu-category-card, .gallery-item, .stat-item, .info-card, .text-block');
            elements.forEach((element, elementIndex) => {
                const animationClass = this.getAnimationClass(sectionIndex, elementIndex);
                element.classList.add(animationClass);
                this.animatedElements.push(element);
            });
        });
    }

    getAnimationClass(sectionIndex, elementIndex) {
        const animations = ['fade-in', 'slide-in-left', 'slide-in-right', 'scale-in', 'rotate-in', 'flip-in'];
        return animations[(sectionIndex + elementIndex) % animations.length];
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        const observeElements = () => {
            this.animatedElements.forEach(element => {
                if (!element.classList.contains('observed')) {
                    observer.observe(element);
                    element.classList.add('observed');
                }
            });
        };

        setTimeout(observeElements, 100);
    }

    setupDelayedAnimations() {
        const delayedElements = document.querySelectorAll('[data-delay]');
        delayedElements.forEach(element => {
            const delay = parseInt(element.getAttribute('data-delay'));
            element.style.animationDelay = `${delay}ms`;
        });
    }
}

class GutscheinManager {
    constructor() {
        this.amountDisplay = document.getElementById('gutschein-amount');
        this.amountOptions = document.querySelectorAll('.amount-option');
        this.init();
    }

    init() {
        this.setupAmountSelection();
    }

    setupAmountSelection() {
        this.amountOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.amountOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                const amount = option.getAttribute('data-amount');
                
                if (amount === 'custom') {
                    this.handleCustomAmount();
                } else {
                    this.updateAmountDisplay(amount + '€');
                }
            });
        });
    }

    handleCustomAmount() {
        const customAmount = prompt('Bitte geben Sie den gewünschten Betrag ein (nur Zahl):', '75');
        if (customAmount && !isNaN(customAmount) && customAmount > 0) {
            this.updateAmountDisplay(customAmount + '€');
        } else {
            this.amountOptions.forEach(opt => opt.classList.remove('active'));
            this.amountOptions[1].classList.add('active'); 
            this.updateAmountDisplay('50€');
        }
    }

    updateAmountDisplay(amount) {
        if (this.amountDisplay) {
            this.amountDisplay.textContent = amount;

            this.amountDisplay.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.amountDisplay.style.transform = 'scale(1)';
            }, 200);
        }
    }
}

class ReservationManager {
    constructor() {
        this.widgetContainer = document.getElementById('reservation-widget');
        this.init();
    }

    init() {
        this.setupReservationWidget();
    }

    setupReservationWidget() {
        if (typeof window.DishReservation !== 'undefined') {
            try {
                window.DishReservation.init({
                    container: '#reservation-widget',
                    restaurantId: 'knossos-palast',
                    language: 'de',
                    theme: {
                        primaryColor: '#1B365D',
                        secondaryColor: '#B8860B',
                        backgroundColor: '#FFFFFF',
                        textColor: '#2D3748',
                        borderRadius: '12px'
                    },
                    onSuccess: (reservation) => {
                        console.log('Reservation successful:', reservation);
                        this.showSuccessMessage();
                    },
                    onError: (error) => {
                        console.error('Reservation error:', error);
                        this.showErrorMessage();
                    }
                });
            } catch (error) {
                console.error('Error initializing reservation widget:', error);
                this.showFallbackWidget();
            }
        } else {
            setTimeout(() => {
                if (typeof window.DishReservation === 'undefined') {
                    this.showFallbackWidget();
                } else {
                    this.setupReservationWidget();
                }
            }, 3000);
        }
    }

    showFallbackWidget() {
        if (this.widgetContainer) {
            this.widgetContainer.innerHTML = `
                <div class="widget-fallback" style="text-align: center; padding: 2rem;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #B8860B, #8B6914); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.5rem;">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h4 style="color: #1B365D; margin-bottom: 1rem; font-family: 'Skranji', cursive;">Online-Reservierung temporär nicht verfügbar</h4>
                    <p style="color: #718096; margin-bottom: 1.5rem;">Bitte rufen Sie uns direkt an für Ihre Reservierung:</p>
                    <a href="tel:+491234567890" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #1B365D; color: white; padding: 1rem 2rem; border-radius: 12px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
                        <i class="fas fa-phone"></i>
                        <span>+49 123 456 7890</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
        }
    }

    showSuccessMessage() {
        this.showNotification('Reservierung erfolgreich! Sie erhalten eine Bestätigung per E-Mail.', 'success');
    }

    showErrorMessage() {
        this.showNotification('Fehler bei der Reservierung. Bitte versuchen Sie es erneut oder rufen Sie uns an.', 'error');
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; background: ${type === 'success' ? '#38A169' : '#E53E3E'}; color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 10px 15px rgba(0,0,0,0.1); z-index: 1001; max-width: 400px;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
                    <span>${message}</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

class GalleryManager {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.init();
    }

    init() {
        this.setupLightbox();
    }

    setupLightbox() {
        this.galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    this.openLightbox(img.src, img.alt);
                }
            });
        });
    }

    openLightbox(imageSrc, imageAlt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-container">
                <img src="${imageSrc}" alt="${imageAlt}" class="lightbox-image">
                <button class="lightbox-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        this.addLightboxStyles();
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => lightbox.classList.add('show'), 10);

        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => this.closeLightbox(lightbox));
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                this.closeLightbox(lightbox);
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox(lightbox);
            }
        });
    }

    addLightboxStyles() {
        if (!document.getElementById('lightbox-styles')) {
            const style = document.createElement('style');
            style.id = 'lightbox-styles';
            style.textContent = `
                .lightbox-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .lightbox-overlay.show {
                    opacity: 1;
                }
                
                .lightbox-container {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .lightbox-image {
                    max-width: 100%;
                    max-height: 90vh;
                    object-fit: contain;
                    border-radius: 8px;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
                }
                
                .lightbox-close {
                    position: absolute;
                    top: -15px;
                    right: -15px;
                    width: 40px;
                    height: 40px;
                    background: #B8860B;
                    border: none;
                    border-radius: 50%;
                    color: white;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    z-index: 2001;
                }
                
                .lightbox-close:hover {
                    background: #8B6914;
                    transform: scale(1.1);
                }
                
                @media (max-width: 768px) {
                    .lightbox-close {
                        top: 10px;
                        right: 10px;
                        width: 35px;
                        height: 35px;
                        font-size: 0.9rem;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    closeLightbox(lightbox) {
        lightbox.classList.remove('show');
        setTimeout(() => {
            document.body.style.overflow = 'auto';
            lightbox.remove();
        }, 300);
    }
}

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.preloadCriticalImages();
        this.optimizeScrollPerformance();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }

    preloadCriticalImages() {
        const criticalImages = [
            'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920',
            'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920',
            'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = src;
            link.as = 'image';
            document.head.appendChild(link);
        });
    }

    optimizeScrollPerformance() {
        let ticking = false;
        
        function updateScrollEffects() {
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
}

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const offsetTop = target.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function openReservation() {
    const reservationSection = document.querySelector('.reservation');
    if (reservationSection) {
        const offsetTop = reservationSection.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function openGalleryPage() {
    scrollToSection('gallery');
    
    setTimeout(() => {
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; background: #1B365D; color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 10px 15px rgba(0,0,0,0.1); z-index: 1001; max-width: 400px;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-info-circle"></i>
                    <span>Vollständige Galerie wird in Kürze verfügbar sein!</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    new CookieManager();
    new NavigationManager();
    new HeroSlideshow();
    new AnimationController();
    new GutscheinManager();
    new ReservationManager();
    new GalleryManager();
    new PerformanceOptimizer();

    window.scrollToSection = scrollToSection;
    window.openReservation = openReservation;
    window.openGalleryPage = openGalleryPage;

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    console.log('🏛️ Knossos Palast Website initialized successfully');
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}