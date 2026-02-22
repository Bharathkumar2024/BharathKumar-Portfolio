/* ============================================================
   reveal.js — Scroll Reveal Animation
   Adds .visible class when element enters the viewport
============================================================ */

function initReveal() {
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
}

// Run initially
initReveal();

// Export to window so it can be re-triggered after fragment loads
window.initReveal = initReveal;

// Re-run whenever a fragment might have loaded
window.addEventListener('load', initReveal);
window.addEventListener('scroll_reveal_refresh', initReveal);
