const logoSlider = document.querySelector('.logo-slider');
const logoSliderContainer = document.querySelector('.logo-slider-container');
const slideWidth = logoSliderContainer.offsetWidth;
let currentPosition = 0;
const scrollSpeed = 1; // Adjust the scrolling speed

function scrollLogos() {
    currentPosition -= scrollSpeed;
    logoSlider.style.transform = `translateX(${currentPosition}px)`;

    if (currentPosition < -slideWidth) {
        currentPosition = logoSlider.offsetWidth;
    }

    requestAnimationFrame(scrollLogos);
}

scrollLogos();
