/* ============================================================
   hero.js — Typing Effect & Hero Interactions
============================================================ */

let typingStarted = false;

function initHeroTyping() {
    if (typingStarted) return;

    const nameEl = document.querySelector('.hero-name span.highlight');
    if (!nameEl) {
        // If the fragment isn't loaded yet, try again shortly
        return setTimeout(initHeroTyping, 100);
    }

    typingStarted = true;
    const text = "Bharathkumar";
    nameEl.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            nameEl.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            // Done typing
            nameEl.style.borderRight = "none";
            triggerPopEffects();
        }
    }

    // Small delay before starting
    setTimeout(type, 800);
}

function triggerPopEffects() {
    const elements = [
        '.hero-role',
        '.hero-bio',
        '.hero-meta',
        '.hero-btns',
        '.hero-socials'
    ];

    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (el) {
            setTimeout(() => {
                el.classList.add('pop-visible');
            }, index * 150);
        }
    });
}

// Re-run whenever a fragment might have loaded
window.addEventListener('load', initHeroTyping);
// Also listen for a custom event if fragments are loaded manually
window.addEventListener('content_loaded', initHeroTyping);
