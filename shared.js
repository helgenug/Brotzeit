/* shared.js — Nav, Footer, Reveal, Burger für alle Brotzeit-Seiten */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('main-nav');
  if (nav) {
    // Unterseiten: Nav sofort dunkel (kein transparenter Start über dunklem Teaser nötig)
    if (document.body.dataset.page !== 'home') {
      nav.classList.add('nav-solid');
    }
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '');
    if (href === currentPath || (href !== '' && currentPath.startsWith(href))) {
      a.classList.add('active');
    }
  });

  /* ── BURGER MENU ── */
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── REVEAL ON SCROLL ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }

});
