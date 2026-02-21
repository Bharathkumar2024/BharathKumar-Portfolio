/* ============================================================
   reveal.js — Scroll Reveal Animation
   Adds .visible class when element enters the viewport
============================================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => revealObserver.observe(el));
