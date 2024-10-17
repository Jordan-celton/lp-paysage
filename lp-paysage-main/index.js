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

// Fonction pour vérifier la visibilité des éléments
function checkVisibility() {
  const sections = document.querySelectorAll(".hidden"); // Sélectionne les éléments cachés
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top; // Position de l'élément

    // Vérifie si le haut de la section est visible
    if (sectionTop < window.innerHeight && sectionTop >= 0) {
      if (!section.classList.contains("visible")) {
        // Vérifie si déjà visible
        setTimeout(() => {
          section.classList.add("visible"); // Ajoute la classe visible
          section.classList.remove("hidden"); // Enlève la classe hidden
        }, 300); // Délai de 300 ms avant d'afficher la section
      }
    }
  });
}

// Vérifie la visibilité lors du défilement
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkVisibility();
      ticking = false; // Réinitialise le ticking
    });
    ticking = true; // Indique que la fonction est en cours d'exécution
  }
});

// Vérifie la visibilité au chargement de la page
document.addEventListener("DOMContentLoaded", checkVisibility);
