const hamburger = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', (e) => {
    const open = mobileMenu.classList.toggle('open');
    mobileMenu.setAttribute('aria-hidden', String(!open));
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== hamburger) {
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ensure hamburger is hidden on tablet/desktop sizes and shown only on small screens
function updateHamburgerVisibility() {
  if (!hamburger) return;
  if (window.innerWidth > 600) {
    hamburger.style.display = 'none';
    // also close mobile menu if open
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
  } else {
    hamburger.style.display = '';
  }
}

window.addEventListener('resize', updateHamburgerVisibility);
window.addEventListener('load', updateHamburgerVisibility);
updateHamburgerVisibility();
