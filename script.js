document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of dynamic animation or interaction
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.backgroundColor = '#d43f5a';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.backgroundColor = '#e94e77';
    });
});
