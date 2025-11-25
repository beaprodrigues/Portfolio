// ========== Theme Toggle ==========
function initThemeToggle() {
    const themeButton = document.getElementById('theme-toggle');
    const themeIcon = themeButton.querySelector('.theme-toggle__icon');
    const savedTheme = localStorage.getItem('selected-theme');
    const currentTheme = savedTheme || 'dark';
    
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('uil-moon');
        themeIcon.classList.add('uil-sun');
    }
    
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            themeIcon.classList.remove('uil-moon');
            themeIcon.classList.add('uil-sun');
            localStorage.setItem('selected-theme', 'light');
        } else {
            themeIcon.classList.remove('uil-sun');
            themeIcon.classList.add('uil-moon');
            localStorage.setItem('selected-theme', 'dark');
        }
    });
}

// ========== Scroll Suave ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== Animação Scroll ==========
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ========== Inicializar Swiper ==========
function initSwiper() {
    new Swiper('.portfolio__container', {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 48,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 48,
            }
        }
    });
}

// ========== Inicializar Tudo ==========
window.addEventListener('load', () => {
    initThemeToggle();
    initSmoothScroll();  
    initScrollAnimations();
    initSwiper();
});