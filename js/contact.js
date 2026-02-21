/* ============================================================
   contact.js — Contact Form Feedback
============================================================ */
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  // Basic validation
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      input.style.borderColor = 'var(--accent)';
      input.style.boxShadow   = '0 0 0 3px rgba(255, 45, 107, 0.15)';
      setTimeout(() => {
        input.style.borderColor = '';
        input.style.boxShadow   = '';
      }, 2000);
    }
  });

  if (!allFilled) return;

  // Show success state
  submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
  submitBtn.classList.add('sent');
  submitBtn.disabled = true;

  // Reset after 3 seconds
  setTimeout(() => {
    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    submitBtn.classList.remove('sent');
    submitBtn.disabled = false;
    inputs.forEach(input => input.value = '');
  }, 3000);
});
