// Basic form handler for the waitlist/newsletter form.  This script simply
// prevents page reload and gives feedback to the user.  To connect
// submissions to Google Sheets or an email provider, replace the fetch
// request with your own endpoint (e.g. Formspree, Getform.io, or a
// simple Google Apps Script web app).
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlist-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      if (!email) return;
      // Example: send to a dummy endpoint. Replace with your own.
      try {
        await fetch('https://example.com/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        form.reset();
        alert('Thank you! You will hear from us soon.');
      } catch (err) {
        console.error(err);
        alert('There was an error sending your request. Please try again later.');
      }
    });
  }
});
