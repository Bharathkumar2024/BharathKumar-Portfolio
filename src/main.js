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

// 3. Global Scripts (Non-blocking)
import './components/common/cursor.js';
import './components/common/reveal.js';

// 4. Component Scripts (Import when needed)
import './components/navbar/navbar.js';
import './components/hero/particles.js';
import './components/hero/hero.js';
import './components/projects/projects.js';
import './components/achievements/counters.js';
import './components/contact/contact.js';
import './components/chat/chat.js';

console.log('🚀 Portfolio System Modularized & Running');
