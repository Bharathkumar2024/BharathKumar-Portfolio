/* ============================================================
   main.js — Global Entry Point
============================================================ */

// 1. Global Styles
import './components/common/variables.css';
import './components/common/base.css';
import './components/common/responsive.css';

// 2. Component Styles
import './components/navbar/navbar.css';
import './components/hero/hero.css';
import './components/about/about.css';
import './components/skills/skills.css';
import './components/education/experience.css';
import './components/projects/projects.css';
import './components/achievements/achievements.css';
import './components/contact/contact.css';
import './components/footer/footer.css';
import './components/chat/chat.css';

// 3. HTML Fragments (Vite ?raw imports — inlined at build time)
import navbarHtml from './components/navbar/navbar.html?raw';
import heroHtml from './components/hero/hero.html?raw';
import aboutHtml from './components/about/about.html?raw';
import skillsHtml from './components/skills/skills.html?raw';
import educationHtml from './components/education/education.html?raw';
import projectsHtml from './components/projects/projects.html?raw';
import achievementsHtml from './components/achievements/achievements.html?raw';
import contactHtml from './components/contact/contact.html?raw';
import footerHtml from './components/footer/footer.html?raw';
import chatHtml from './components/chat/chat.html?raw';

// 4. Global Scripts
import './components/common/cursor.js';
import './components/common/reveal.js';

// 5. Component Scripts
import './components/navbar/navbar.js';
import './components/hero/particles.js';
import './components/hero/hero.js';
import './components/projects/projects.js';
import './components/achievements/counters.js';
import './components/contact/contact.js';
import './components/chat/chat.js';

// 6. Inject HTML fragments into DOM and initialize
function injectAndInit() {
   const fragments = [
      ['nav-hook', navbarHtml],
      ['hero-hook', heroHtml],
      ['about-hook', aboutHtml],
      ['skills-hook', skillsHtml],
      ['education-hook', educationHtml],
      ['projects-hook', projectsHtml],
      ['achievements-hook', achievementsHtml],
      ['contact-hook', contactHtml],
      ['footer-hook', footerHtml],
      ['chat-hook', chatHtml],
   ];

   fragments.forEach(([id, html]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
   });

   console.log('✨ All fragments injected');

   // Initialize all components
   if (window.initNavbar) window.initNavbar();
   if (window.initReveal) window.initReveal();
   if (window.initCounters) window.initCounters();
   if (window.initContact) window.initContact();
   if (window.initBKChat) window.initBKChat();
   window.dispatchEvent(new Event('content_loaded'));
}

// Wait for DOM then inject
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', injectAndInit);
} else {
   injectAndInit();
}

console.log('🚀 Portfolio System Modularized & Running');
