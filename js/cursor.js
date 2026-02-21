/* ============================================================
   cursor.js — Custom Pink Cursor
============================================================ */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Cursor snaps instantly
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';

  // Ring follows with lag
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scale cursor on hover over interactive elements
const interactiveSelectors = 'a, button, .skill-pill, .project-card, .stat-card, .ach-card, .contact-card, .exp-card';
document.querySelectorAll(interactiveSelectors).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
    ring.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    ring.style.opacity = '1';
  });
});
