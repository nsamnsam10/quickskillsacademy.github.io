document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navMenu.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (
        !menuBtn.contains(e.target) &&
        !navMenu.contains(e.target) &&
        navMenu.classList.contains("open")
      ) {
        menuBtn.classList.remove("active");
        navMenu.classList.remove("open");
      }
    });
  }

  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const scrollBtn = document.createElement("button");
  scrollBtn.className = "scroll-to-top";
  scrollBtn.innerHTML = "↑";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email");
      const telefoon = document.getElementById("telefoon");

      let isValid = true;

      if (email && !email.value.includes("@")) {
        email.classList.add("error");
        isValid = false;
      } else if (email) {
        email.classList.remove("error");
      }

      if (telefoon && telefoon.value.length < 10) {
        telefoon.classList.add("error");
        isValid = false;
      } else if (telefoon) {
        telefoon.classList.remove("error");
      }

      if (isValid) {
        console.log("Formulier succesvol ingediend");
        form.reset();
      }
    });
  }

  const registratieForm = document.querySelector(".registratie-formulier");
  if (registratieForm) {
    registratieForm.addEventListener("submit", function (e) {
      const naamSpeler = document.getElementById("naam-speler")?.value.trim();
      const geboortedatum = document
        .getElementById("geboortedatum")
        ?.value.trim();
      const club = document.getElementById("club")?.value.trim();
      const contactpersoon = document
        .getElementById("contactpersoon")
        ?.value.trim();
      const telefoon = document.getElementById("telefoonnummer")?.value.trim();
      const email = document.getElementById("email")?.value.trim();

      if (
        !naamSpeler ||
        !geboortedatum ||
        !club ||
        !contactpersoon ||
        !telefoon ||
        !email
      ) {
        alert("Vul alstublieft alle verplichte velden in.");
        e.preventDefault();
        return;
      }

      const telefoonRegEx = /^[0-9]{10,15}$/;
      if (!telefoonRegEx.test(telefoon)) {
        alert("Vul een geldig telefoonnummer in (tussen 10 en 15 cijfers).");
        e.preventDefault();
        return;
      }

      const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegEx.test(email)) {
        alert("Vul een geldig e-mailadres in.");
        e.preventDefault();
        return;
      }
    });
  }

  document
    .querySelectorAll(".form-group input, .form-group textarea")
    .forEach((input) => {
      input.addEventListener("input", function () {
        if (this.value.length > 0) {
          this.classList.remove("error");
        }
      });
    });

  if (typeof google !== "undefined" && google.translate) {
    new google.translate.TranslateElement(
      {
        pageLanguage: "nl",
        includedLanguages: "nl,en,fr,es",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  }
});

const scrollToTopBtn = document.querySelector(".scroll-to-top");

function checkScroll() {
  if (
    document.documentElement.scrollTop + window.innerHeight >=
    document.documentElement.scrollHeight - 10
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", checkScroll);

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
