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

// Section 2

const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    // const increment = 1;
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }

        el.textContent = `${initialValue}+`;
    }, 1);
    // console.log(increaseCount);
};

items.forEach((item) => {
    updateCount(item);
});

// Section 3

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true
    }
});
