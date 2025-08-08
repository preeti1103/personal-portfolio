// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.experience-item, .project-card, .education-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.experience-item, .project-card, .education-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Run once on page load
window.addEventListener('load', animateOnScroll);

// Toggle Show More Projects
document.addEventListener('DOMContentLoaded', function () {
    const extraProjectCards = document.querySelectorAll('.extra-project-card');
    const toggleBtn = document.getElementById('toggle-projects-btn');

    toggleBtn.addEventListener('click', () => {
        const isHidden = extraProjectCards[0].style.display === 'none';

        extraProjectCards.forEach(card => {
            card.style.display = isHidden ? 'block' : 'none';
        });

        toggleBtn.textContent = isHidden ? 'Show Less' : 'Show More';
    });
});
