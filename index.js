let currentSlide = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll(".carousel-item");
  const totalSlides = items.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  document.querySelector(".carousel-inner").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = card.closest("a").href;
  });
});
