/* ============================================================
   navbar.js — View Switching, BK Loader, Section Pop-Up
============================================================ */

/* ---- Section Labels for pop-up badge ---- */
const SECTION_LABELS = {
  home: '🏠 Home',
  about: '👤 About Me',
  skills: '⚙️  Skills',
  education: '🎓 Education',
  projects: '🚀 Projects',
  achievements: '🏆 Achievements',
  contact: '📬 Contact'
};

function initNavbar() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  const ham = document.getElementById('ham');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');

  if (!ham || !sections.length) return setTimeout(initNavbar, 100);

  /* ---- BK Loader ---- */
  const loader = document.getElementById('bk-loader');

  function showLoader(cb) {
    if (!loader) { cb(); return; }
    // Reset fill animation
    const fill = loader.querySelector('.bk-loader-fill');
    if (fill) {
      fill.style.animation = 'none';
      void fill.offsetWidth; // reflow
      fill.style.animation = '';
    }
    loader.classList.remove('loader-hidden');
    // Wait for the fill bar (0.9s) then hide and call callback
    setTimeout(() => {
      loader.classList.add('loader-hidden');
      setTimeout(cb, 150); // let fade out before switching
    }, 950);
  }

  /* ---- Section Pop-Up Badge ---- */
  let popupTimer = null;
  const popup = (() => {
    let el = document.getElementById('section-popup');
    if (!el) {
      el = document.createElement('div');
      el.id = 'section-popup';
      el.className = 'section-popup';
      el.innerHTML = '<span>///</span><span class="popup-text"></span>';
      document.body.appendChild(el);
    }
    return el;
  })();

  function showSectionPopup(sectionId) {
    const label = SECTION_LABELS[sectionId] || sectionId;
    popup.querySelector('.popup-text').textContent = label;
    popup.classList.add('show');
    clearTimeout(popupTimer);
    popupTimer = setTimeout(() => popup.classList.remove('show'), 2200);
  }

  /* ---- View Switching ---- */
  function switchView(targetId) {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    showLoader(() => {
      // Glitch flash
      const glitch = document.getElementById('glitch-overlay');
      if (glitch) {
        glitch.classList.remove('glitch-flash');
        void glitch.offsetWidth;
        glitch.classList.add('glitch-flash');
      }

      sections.forEach(s => s.classList.remove('active-view'));
      targetSection.classList.add('active-view');

      // Re-trigger reveal for the incoming section
      const revealInView = targetSection.querySelectorAll('.reveal');
      revealInView.forEach(el => el.classList.add('visible'));

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + targetId);
      });

      // Show section badge pop-up
      showSectionPopup(targetId);
    });
  }

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

  // Initial page load: show loader then switch to home
  switchView('home');
}

// Export to window — called from index.html after all fragments are injected
window.initNavbar = initNavbar;
