document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for Learn More links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Read More button animation
    const readMoreBtn = document.querySelector('.read-more');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', () => {
            const ourWorkSection = document.querySelector('.our-work');
            ourWorkSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Fade in animations for sections
    const sections = document.querySelectorAll('section');
    const fadeInOptions = {
        threshold: 0.3
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, fadeInOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInObserver.observe(section);
    });
});
