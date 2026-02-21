/* ============================================================
   counters.js — Animated Number Counters
   Targets elements with [data-target] attribute
============================================================ */
function animateCounter(el) {
  const target   = +el.dataset.target;
  const duration = target > 1000 ? 2000 : 1200;
  const stepTime = 16; // ~60fps
  const steps    = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    // Format: large numbers → K+, small numbers → just digits with +
    if (target >= 1000) {
      el.textContent = (current / 1000).toFixed(1) + 'K+';
    } else if (target > 10) {
      el.textContent = Math.floor(current) + '+';
    } else {
      el.textContent = Math.floor(current) + '+';
    }
  }, stepTime);
}

// Achievement section counters (ach-num)
const achCounters = document.querySelectorAll('.ach-num[data-target]');
const achObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      achObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
achCounters.forEach(c => achObserver.observe(c));

// About section counters (stat-num)
const statCounters = document.querySelectorAll('.stat-num[data-target]');
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statCounters.forEach(c => statObserver.observe(c));
