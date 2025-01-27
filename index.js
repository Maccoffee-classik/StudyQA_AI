
/*БУРГЕР*/
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");
    const headerbuttons = document.querySelector(".header__buttons");
    const headerLogoImg = document.querySelector(".header__logo-img");
    const headerLogoImgMobile = document.querySelector(".header__logo-img-mobile");
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("active");
        headerbuttons.classList.toggle("active");

        headerLogoImgMobile.classList.toggle("active");
    });
});
/*БУРГЕР*/
/*слайдер*/
let currentIndex = 0;
const images = document.querySelector('.slider-images');
const texts = document.querySelectorAll('.slider-texts div');
const dots = document.querySelectorAll('.dot');
const slideCount = texts.length;
const intervalTime = 5000; // 10 seconds

function updateSlider() {
    const isMobile = window.innerWidth <= 1024; // Проверка на мобильный режим
    const translateValue = isMobile
        ? `translateX(-${currentIndex * 100}%)`
        : `translateY(-${currentIndex * 100}%)`;

    images.style.transform = translateValue;
    texts.forEach((text, index) => {
        text.classList.toggle('active', index === currentIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

setInterval(nextSlide, intervalTime);

// Обновление слайдера при изменении размера окна
window.addEventListener('resize', updateSlider);



function showCard(option) {
    const buttons = document.querySelectorAll('.section-plans__button2');
    const cards = document.querySelectorAll('.plan-card');
    buttons.forEach((btn, index) => {
        if (index === option - 1) {
            btn.classList.add('active-button');
        } else {
            btn.classList.remove('active-button');
        }
    });
    cards.forEach((card, index) => {
        if (index === option - 1) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}