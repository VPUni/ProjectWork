// Navbar scroll
const navbar = document.querySelector(".navbar");
window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  },
  { passive: true },
);

// Burger menu
const burger = document.getElementById("burger-btn");
const nav = document.getElementById("main-nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
// Close on nav link click (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});
// Close on outside click
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// Scroll reveal (IntersectionObserver)
const revealEls = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right",
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
);
revealEls.forEach((el) => observer.observe(el));
