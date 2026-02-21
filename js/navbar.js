/* ============================================================
   navbar.js — View Switching, Active Links, Mobile Menu
============================================================ */
const nav = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const ham = document.getElementById('ham');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');
const backTop = document.getElementById('back-top'); // Redundant in tabbed mode but keeping for stability

// Initialize Home as active
document.getElementById('home').classList.add('active-view');

function switchView(targetId) {
  const targetSection = document.getElementById(targetId);
  if (!targetSection) return;

  const glitch = document.getElementById('glitch-overlay');
  if (glitch) {
    glitch.classList.remove('glitch-flash');
    void glitch.offsetWidth; // trigger reflow
    glitch.classList.add('glitch-flash');
  }

  // Remove active class from all sections
  sections.forEach(s => s.classList.remove('active-view'));

  // Add active class to target section
  targetSection.classList.add('active-view');

  // Trigger reveal animations for all elements in the new view
  const revealInView = targetSection.querySelectorAll('.reveal');
  revealInView.forEach(el => el.classList.add('visible'));

  // Update navbar links
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + targetId);
  });
}

// Intercept nav clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    if (document.getElementById(targetId)) {
      e.preventDefault();
      switchView(targetId);
      closeMobile();
    }
  });
});

// Mobile nav interactions
ham.addEventListener('click', () => {
  mobileNav.classList.add('open');
  ham.classList.add('open');
});

mobileClose.addEventListener('click', () => closeMobile());

function closeMobile() {
  mobileNav.classList.remove('open');
  ham.classList.remove('open');
}

window.closeMobile = closeMobile;

// Initial state
switchView('home');
