document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    const images = project.querySelectorAll(".image-container img");
    const prevBtn = project.querySelector(".prev");
    const nextBtn = project.querySelector(".next");

    let currentIndex = 0;

    function showImage(index) {
      images.forEach((image, idx) => {
        if (idx === index) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }

    // Afficher la première image au chargement
    showImage(currentIndex);

    prevBtn.addEventListener("click", function () {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      showImage(currentIndex);
    });
  });
});
