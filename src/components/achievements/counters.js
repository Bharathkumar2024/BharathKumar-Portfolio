/* ============================================================
   counters.js — Animated Number Counters + Hackathon Modals
   Targets elements with [data-target] attribute
============================================================ */

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.target.includes('.');
  const duration = target > 1000 ? 2000 : 1200;
  const stepTime = 16; // ~60fps
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    if (isDecimal) {
      el.textContent = current.toFixed(2);
    } else {
      // Format: large numbers → K+, others → with +
      if (target >= 1000) {
        el.textContent = (current / 1000).toFixed(1) + 'K+';
      } else if (target > 10) {
        el.textContent = Math.floor(current) + '+';
      } else {
        el.textContent = Math.floor(current) + '+';
      }
    }
  }, stepTime);
}

function initCounters() {
  const counters = document.querySelectorAll('.ach-num[data-target], .stat-num[data-target]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(c => observer.observe(c));
}

/* ============================================================
   HACKATHON MODAL LOGIC
============================================================ */
function initHackathonModals() {
  // Open modal when clicking a hack-card
  document.querySelectorAll('.hack-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Allow LinkedIn button inside to work without opening modal
      if (e.target.closest('.hack-linkedin-btn')) return;

      const modalId = card.getAttribute('data-modal');
      if (!modalId) return;
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal on close button
  document.querySelectorAll('.hack-modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close modal on overlay click (outside the modal box)
  document.querySelectorAll('.hack-modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

function closeAllModals() {
  document.querySelectorAll('.hack-modal-overlay.open').forEach(m => {
    m.classList.remove('open');
  });
  document.body.style.overflow = '';
}

// Initial run
initCounters();
initHackathonModals();

// Export to window for manual re-triggering after fragment loads
window.initCounters = initCounters;
window.initHackathonModals = initHackathonModals;

// Also listen for fragment loading
window.addEventListener('content_loaded', () => {
  initCounters();
  initHackathonModals();
});
window.addEventListener('load', () => {
  initCounters();
  initHackathonModals();
});
