// Load header and footer components
(function() {
    // Determine base path based on current location
    const isInPages = window.location.pathname.includes('/pages/') || window.location.href.includes('/pages/');
    const basePath = isInPages ? '../' : '';

    // Function to adjust links in HTML content
    function adjustLinks(htmlContent) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');

        // Adjust image sources
        const images = doc.querySelectorAll('img[src]');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                img.setAttribute('src', basePath + src);
            }
        });

        // Adjust links
        const links = doc.querySelectorAll('a[href]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('#')) {
                if (isInPages) {
                    if (href === 'index.html') {
                        link.setAttribute('href', '../index.html');
                    } else if (href.endsWith('.html') && !href.includes('/')) {
                        link.setAttribute('href', href); // already in pages/
                    }
                } else {
                    if (href !== 'index.html' && href.endsWith('.html') && !href.includes('/')) {
                        link.setAttribute('href', 'pages/' + href);
                    }
                }
            }
        });

        return doc.body.innerHTML;
    }

    // Function to initialize mobile menu toggle
    function initializeMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    // Load header
    fetch(basePath + 'components/header.html?v=' + Date.now())
        .then(response => response.text())
        .then(data => {
            const adjustedData = adjustLinks(data);
            document.getElementById('header-placeholder').innerHTML = adjustedData;
            initializeMobileMenu(); // Initialize menu after loading header
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch(basePath + 'components/footer.html?v=' + Date.now())
        .then(response => response.text())
        .then(data => {
            const adjustedData = adjustLinks(data);
            document.getElementById('footer-placeholder').innerHTML = adjustedData;
        })
        .catch(error => console.error('Error loading footer:', error));
})();