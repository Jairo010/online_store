function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function highlightLink(link) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
}
