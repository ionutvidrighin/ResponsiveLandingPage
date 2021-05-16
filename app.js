const mobileNav = document.querySelector('.mobile-menu');
const linksMenu = document.querySelector('.menu-section');
const logo = document.querySelector('.logo');

mobileNav.addEventListener('click', () => {
    linksMenu.classList.toggle('toggle-menu');
    linksMenu.style.transition = 'transform 1s ease';
    logo.classList.toggle('toggle-logo');
    logo.style.transition = 'opacity .5s ease';
})