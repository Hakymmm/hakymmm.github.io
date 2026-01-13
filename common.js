// Common functionality for all pages
(function() {
    'use strict';
    
    // Mark body as loaded for fade-in effect
    if (document.body) {
        document.body.classList.add('loaded');
    }
    
    // Set active navigation based on current page
    function setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNavigation);
    } else {
        setActiveNavigation();
    }
})();
