/* ============================================================
   particles.js — Hero Canvas Particle Field
============================================================ */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return setTimeout(initParticles, 100);

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    const section = canvas.parentElement;
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() { this.reset(); }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.08;
      this.color = Math.random() > 0.7 ? '#ff2d6b' : '#ffffff';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width ||
        this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  // Create 80 particles (Optimized from 120 for smoother performance)
  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function animateParticles() {
    // Performance optimization: only animate if home section is likely visible
    if (document.getElementById('home').classList.contains('active-view')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

initParticles();
