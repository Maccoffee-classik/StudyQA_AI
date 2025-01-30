document.addEventListener("DOMContentLoaded", () => {
    // БУРГЕР
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");
    const headerButtons = document.querySelector(".header__buttons");
    const headerLogoImgMobile = document.querySelector(".header__logo-img-mobile");

    if (burger && nav && headerButtons && headerLogoImgMobile) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("active");
            burger.classList.toggle("active");
            headerButtons.classList.toggle("active");
            headerLogoImgMobile.classList.toggle("active");
        });
    }








    // СлайДЕР С ИЗОБРАЖЕНИЯМИ
    let currentIndex = 0;
    const images = document.querySelector('.slider-images');
    const texts = document.querySelectorAll('.slider-texts div');
    const dots = document.querySelectorAll('.dot');
    const slideCount = texts ? texts.length : 0;
    const intervalTime = 5000;

    function updateSlider() {
        const isMobile = window.innerWidth <= 1024;
        if (images && texts.length && dots.length) {
            const translateValue = isMobile
                ? `translateX(-${currentIndex * 100}%)`
                : `translateY(-${currentIndex * 100}%)`;

            images.style.transform = translateValue;
            texts.forEach((text, index) => text.classList.toggle('active', index === currentIndex));
            dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
        }
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    if (dots.length) {
        dots.forEach((dot, index) => dot.addEventListener('click', () => goToSlide(index)));
    }

    setInterval(nextSlide, intervalTime);
    window.addEventListener('resize', updateSlider);

    // Слайдер для карточек (Pricing)
    let currentSlide = 0;
    let autoSlideInterval;
    const slideInterval = 5000;
    const slides = document.querySelectorAll(".pricing-card");
    const pricingDots = document.querySelectorAll(".pricing-dot");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });

        pricingDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentSlide = index;
    }

    function nextPricingSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function goToPricingSlide(index) {
        showSlide(index);
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextPricingSlide, slideInterval);
    }

    function initPricingSlider() {
        if (window.innerWidth < 1024) {
            showSlide(currentSlide);
            autoSlideInterval = setInterval(nextPricingSlide, slideInterval);
        } else {
            clearInterval(autoSlideInterval);
            slides.forEach(slide => (slide.style.display = "flex"));
            pricingDots.forEach(dot => dot.classList.remove("active"));
        }
    }

    if (pricingDots.length) {
        pricingDots.forEach((dot, index) => dot.addEventListener("click", () => goToPricingSlide(index)));
    }




    window.addEventListener("resize", initPricingSlider);
    initPricingSlider();


        const faqItems = document.querySelectorAll(".faq-content-li");

        faqItems.forEach((item) => {
            const title = item.querySelector(".faq-title");

            title.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        });









});

