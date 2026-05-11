document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================
       Navbar Scroll Effect
       ========================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================
       Mobile Menu Toggle
       ========================================== */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    /* ==========================================
       Intersection Observer for Animations
       ========================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.fade-in-up, .slide-in-left, .slide-in-right, .hover-up, .zoom-in'
    );

    animateElements.forEach(el => observer.observe(el));

    /* ==========================================
       Price Calculator
       ========================================== */
    const areaInput = document.getElementById('area');
    const estimateValue = document.getElementById('estimateValue');

    if (areaInput && estimateValue) {
        areaInput.addEventListener('input', () => {
            const area = parseInt(areaInput.value);
            if (!area || area <= 0) {
                estimateValue.textContent = 'unesite površinu';
                return;
            }
            const price = Math.max(2500, area * 25);
            estimateValue.textContent = `od ${price.toLocaleString('sr-RS')} RSD`;
        });
    }

    /* ==========================================
       Form Submission Simulation
       ========================================== */
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show success message
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});
