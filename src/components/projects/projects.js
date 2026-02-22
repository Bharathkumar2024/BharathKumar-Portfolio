function initProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          // Trigger a small animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.4s cubic-bezier(.16, 1, .3, 1)';
          }, 10);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Hover effect on project thumbs
  projectCards.forEach(card => {
    const thumb = card.querySelector('.project-thumb');
    const overlay = card.querySelector('.thumb-overlay');

    if (!thumb || !overlay) return;

    thumb.addEventListener('mousemove', (e) => {
      const rect = thumb.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 10;
      const moveY = (y - centerY) / 10;

      overlay.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });

    thumb.addEventListener('mouseleave', () => {
      overlay.style.transform = `translate(0, 0) scale(1)`;
    });
  });
}

window.initProjects = initProjects;
