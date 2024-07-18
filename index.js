let currentSlide = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll(".carousel-item");
  const totalSlides = items.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  document.querySelector(".carousel-inner").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}
