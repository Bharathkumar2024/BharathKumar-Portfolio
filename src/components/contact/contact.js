/* ============================================================
   contact.js — EmailJS Integration
   Sends messages directly to bharathkumarj037@gmail.com
============================================================ */

const EMAILJS_PUBLIC_KEY = 'zQgnWh-KQAWleq5T-';
const EMAILJS_SERVICE_ID = 'service_fh3he7h';
const EMAILJS_TEMPLATE_ID = 'template_cky7lcb';

function initContact() {
  // Initialise EmailJS with your public key
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const submitBtn = document.getElementById('submit-btn');
  if (!submitBtn) return;

  const fields = {
    name: document.getElementById('form-name'),
    email: document.getElementById('form-email'),
    subject: document.getElementById('form-subject'),
    message: document.getElementById('form-message'),
  };

  /* ---- Floating label focus effects ---- */
  Object.values(fields).forEach(el => {
    if (!el) return;
    el.addEventListener('focus', () => el.classList.add('focused'));
    el.addEventListener('blur', () => el.classList.remove('focused'));
  });

  /* ---- Submit ---- */
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const name = fields.name?.value.trim() || '';
    const email = fields.email?.value.trim() || '';
    const subject = fields.subject?.value.trim() || '';
    const message = fields.message?.value.trim() || '';

    // Basic validation
    if (!name || !email || !message) {
      showToast('⚠️ Please fill in Name, Email & Message.', 'warn');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('📧 Please enter a valid email address.', 'warn');
      return;
    }

    // Button → loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

    try {
      // Send via EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        subject: subject || 'New Portfolio Message',
        message: message,
        reply_to: email,
      });

      // Success state
      submitBtn.classList.add('sent');
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
      showToast('🎉 Message delivered to Bharathkumar! He\'ll reply soon.', 'success');

      // Clear fields
      Object.values(fields).forEach(el => { if (el) el.value = ''; });

      // Reset button after 4 s
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.classList.remove('sent');
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      }, 4000);

    } catch (err) {
      console.error('EmailJS error:', err);
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      showToast('❌ Failed to send. Please try emailing directly: bharathkumarj037@gmail.com', 'error');
    }
  });
}

/* ---- Toast Notification ---- */
function showToast(msg, type = 'success') {
  // Remove existing toast if any
  const old = document.getElementById('contact-toast');
  if (old) old.remove();

  const colors = {
    success: { bg: 'rgba(0,200,100,0.12)', border: 'rgba(0,200,100,0.4)', icon: '✅' },
    warn: { bg: 'rgba(255,200,0,0.10)', border: 'rgba(255,200,0,0.4)', icon: '⚠️' },
    error: { bg: 'rgba(255,45,107,0.10)', border: 'rgba(255,45,107,0.4)', icon: '❌' },
  };
  const c = colors[type] || colors.success;

  const toast = document.createElement('div');
  toast.id = 'contact-toast';
  toast.style.cssText = `
        position: fixed;
        bottom: 2.5rem;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: ${c.bg};
        border: 1px solid ${c.border};
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        color: #fff;
        padding: 0.85rem 1.6rem;
        border-radius: 99px;
        font-family: 'Sora', sans-serif;
        font-size: 0.88rem;
        font-weight: 500;
        z-index: 99999;
        opacity: 0;
        transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
        white-space: nowrap;
        box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        pointer-events: none;
        max-width: 90vw;
        text-align: center;
    `;
  toast.textContent = msg;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  // Auto-dismiss after 5 s
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

window.initContact = initContact;
