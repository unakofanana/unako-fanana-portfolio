// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Greeting / Portfolio Loaded Log
console.log("Unako Fanana Portfolio Loaded Successfully.");