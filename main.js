
// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const featuredPropertiesGrid = document.getElementById('featured-properties');
const currentYearSpan = document.getElementById('current-year');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

// Render featured properties
function renderFeaturedProperties() {
    const featuredProperties = getFeaturedProperties();
    
    featuredPropertiesGrid.innerHTML = featuredProperties.map(property => `
        <div class="property-card">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}">
                <div class="property-type">${property.type}</div>
                ${property.isNew ? '<div class="property-badge">New</div>' : ''}
                <div class="property-price">${formatPrice(property.price)}</div>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-address">${property.address}</p>
                <div class="property-stats">
                    <span>${property.bedrooms} Beds</span>
                    <span>${property.bathrooms} Baths</span>
                    <span>${property.squareFootage.toLocaleString()} sq ft</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProperties();
    
    // Add scroll animations
    const animatedElements = document.querySelectorAll('.section-header, .property-card, .about-content, .stats-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => observer.observe(el));
});
