console.log('GS War Wagon top-level site loaded.');
(function(){
    document.querySelectorAll('img').forEach(function(img){
        if(!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
        if(!img.hasAttribute('decoding')) img.setAttribute('decoding','async');
    });
})();

// Mobile menu toggle
(function(){
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
            }
        });
    }
})();
