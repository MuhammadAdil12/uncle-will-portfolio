const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector("[data-slides]");
let currentIndex = 0;
let slideshowInterval;

function goToSlide(index) {
  const activeSlide = slides.querySelector("[data-active]");
  activeSlide.removeAttribute("data-active");
  slides.children[index].setAttribute("data-active", "true");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + slides.children.length) % slides.children.length;
  goToSlide(currentIndex);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.carouselButton === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
  });
});

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

startSlideshow();

carousel.addEventListener("mouseenter", () => {
  clearInterval(slideshowInterval);
});

carousel.addEventListener("mouseleave", () => {
  startSlideshow();
});