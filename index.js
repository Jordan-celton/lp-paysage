document.addEventListener("DOMContentLoaded", () => {
  // Burger Menu Toggle
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector("nav ul");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }

  // Accordion for Testimonials and FAQ
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (content) {
        header.parentElement.classList.toggle("active");
      }
    });
  });

  // Form Validation and Confirmation
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      if (
        formData.get("name") &&
        formData.get("email") &&
        formData.get("message")
      ) {
        toastr.success("Votre message a été envoyé avec succès !");
        contactForm.reset();
      } else {
        toastr.error("Veuillez remplir tous les champs du formulaire.");
      }
    });
  }
});

var swiper = new Swiper(".swiper-container", {
  loop: true, // Permet un défilement en boucle
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Pagination cliquable
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Défiler automatiquement toutes les 3 secondes
    disableOnInteraction: false,
  },
  effect: "fade", // Ajouter un effet de transition
  fadeEffect: {
    crossFade: true,
  },
});
