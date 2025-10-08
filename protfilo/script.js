// ✅ Set current year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// ✅ Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

  /* ---------------------------
     SCROLL REVEAL ANIMATION
  --------------------------- */
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  // Observe all reveal elements
  elements.forEach(el => observer.observe(el));

  // In case user loads page mid-scroll
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('in-view');
    }
  });

  /* ---------------------------
     EMAIL LINK HANDLER
  --------------------------- */
  function openGmailCompose(email, subject, body) {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  }

  const email = 'salmantariq11786@gmail.com';
  const subject = 'Portfolio Inquiry';
  const body = 'Hi Salman, I visited your portfolio and would like to connect.';

  const emailLinks = document.querySelectorAll('#email-link, #email-link-2');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      try {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = mailto;
        document.body.appendChild(iframe);

        // If mailto fails (no default mail app), open Gmail compose
        setTimeout(() => {
          try { document.body.removeChild(iframe); } catch (err) {}
          openGmailCompose(email, subject, body);
        }, 700);
      } catch (err) {
        openGmailCompose(email, subject, body);
      }
    });
  });

  /* ---------------------------
     WHATSAPP LINK HANDLER
  --------------------------- */
  const waLink = document.getElementById('wa-link');
  if (waLink) {
    waLink.addEventListener('click', () => {
      console.log('Opening WhatsApp...');
      // wa.me link handles redirect automatically
    });
  }

});
