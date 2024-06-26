
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'white';
        this.style.color = '#333';
    });
    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'transparent';
        this.style.color = 'white';
    });
});
