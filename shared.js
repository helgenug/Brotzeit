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

    /* Absicherung: Falls der Observer nicht anspringt (z. B. eingebettete
       Vorschau, sehr alte Browser), alles Sichtbare nach kurzer Zeit zeigen —
       Inhalte dürfen niemals dauerhaft versteckt bleiben. */
    const zeigeSichtbare = () => {
      const vh = Math.max(window.innerHeight, document.documentElement.clientHeight, 700);
      revealEls.forEach(el => {
        if (!el.classList.contains('visible')) {
          const r = el.getBoundingClientRect();
          if (r.top < vh + 40 && r.bottom > -40) {
            el.classList.add('visible');
            observer.unobserve(el);
          }
        }
      });
    };
    window.addEventListener('load', () => setTimeout(zeigeSichtbare, 400));
    window.addEventListener('scroll', zeigeSichtbare, { passive: true });
  }

  /* ── COOKIE-CONSENT + GOOGLE ANALYTICS ──
     Google Analytics lädt NUR nach aktiver Zustimmung (Art. 6 Abs. 1 lit. a
     DSGVO) — kein Vorab-Laden, kein "berechtigtes Interesse" als Grundlage.
     Entscheidung wird in localStorage gemerkt; über den "Cookie-
     Einstellungen"-Link im Footer lässt sie sich jederzeit ändern. */
  const GA_MESSUNG_ID = 'G-YXNDRDD78N';
  const COOKIE_CONSENT_KEY = 'brotzeit-cookie-consent'; // 'accepted' | 'declined'

  const ladeGoogleAnalytics = () => {
    if (window.__gaGeladen) return;
    window.__gaGeladen = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MESSUNG_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_MESSUNG_ID);
  };

  const cookieBanner = document.getElementById('cookie-banner');
  const zeigeCookieBanner = () => { if (cookieBanner) cookieBanner.hidden = false; };
  const versteckeCookieBanner = () => { if (cookieBanner) cookieBanner.hidden = true; };

  const bestehendeEntscheidung = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (bestehendeEntscheidung === 'accepted') {
    ladeGoogleAnalytics();
  } else if (bestehendeEntscheidung !== 'declined') {
    zeigeCookieBanner();
  }

  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');
  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      ladeGoogleAnalytics();
      versteckeCookieBanner();
    });
  }
  if (cookieDecline) {
    cookieDecline.addEventListener('click', () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
      versteckeCookieBanner();
    });
  }
  document.querySelectorAll('.cookie-settings-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      zeigeCookieBanner();
    });
  });

});
