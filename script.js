// Navbar

const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.list-icon');
const backBtn = document.querySelector('.back-icon');

function showBackButton() {
    backBtn.classList.add('show');
    menuBtn.classList.add('hidden');

    navbar.classList.add('change');
    menu.classList.add('change');
}

function showMenuButton() {
    menuBtn.classList.remove('hidden');
    backBtn.classList.remove('show');

    navbar.classList.remove('change');
    menu.classList.remove('change');
}

menuBtn.addEventListener('click', showBackButton);
backBtn.addEventListener('click', showMenuButton);

// Section 3

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 80,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});
