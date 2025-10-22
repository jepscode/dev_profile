// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to skills when they come into view
const skills = document.querySelectorAll('.skill');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => {
    skill.style.opacity = 0;
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(skill);
});