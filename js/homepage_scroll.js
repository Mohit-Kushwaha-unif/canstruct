// script.js
let currentSlide = 0;

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  const reviewBoxes = document.querySelectorAll('.review-box');
  if (n >= reviewBoxes.length) {
    currentSlide = 0;
  }
  if (n < 0) {
    currentSlide = reviewBoxes.length - 3;
  }
  reviewBoxes.forEach((box) => {
    box.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  });
}

// Auto-play the slideshow
setInterval(() => {
  changeSlide(1);
}, 2000); // Change slide every 3 seconds
