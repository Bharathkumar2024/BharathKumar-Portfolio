/* ============================================================
   cursor.js — Custom Pink Dot Cursor (no lagging ring)
============================================================ */
(function () {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  let mouseX = -100, mouseY = -100;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  let cursorScale = 1;

  function animateCursor() {
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${cursorScale})`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Scale cursor on hover over interactive elements
  const interactiveSelectors = 'a, button, .skill-pill, .project-card, .stat-card, .ach-card, .contact-card, .exp-card, .nav-logo';
  document.querySelectorAll(interactiveSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => { cursorScale = 2.5; });
    el.addEventListener('mouseleave', () => { cursorScale = 1; });
  });
})();
