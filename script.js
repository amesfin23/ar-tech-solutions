// ===============================
// A&R Tech Solutions
// Version 2.1
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const yearElement = document.querySelector("#current-year");

// Mobile Navigation
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("is-open");

    const expanded =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      !expanded
    );
  });
}

// Close menu after selecting a page
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Footer Year
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ======================================
// Scroll Reveal Animation
// ======================================

const animatedItems = document.querySelectorAll(
  ".service-card, .project-card, .process-grid article, .about-grid, .contact-grid"
);

animatedItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition =
    "opacity .7s ease, transform .7s ease";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  }
);

animatedItems.forEach((item) => {
  observer.observe(item);
});

// ======================================
// Navbar Shadow
// ======================================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 30) {
    header.style.boxShadow =
      "0 12px 35px rgba(13,34,56,.10)";
  } else {
    header.style.boxShadow =
      "0 8px 30px rgba(13,34,56,.03)";
  }
});

// ======================================
// Active Navigation Link
// ======================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }
  });
});