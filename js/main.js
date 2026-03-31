/* =============================================
   NAV — hamburger toggle
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close menu when a link is clicked
navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* =============================================
   NAV — active link on scroll
   ============================================= */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__link');

const activeSectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '64px'} 0px -60% 0px` });

sections.forEach(s => activeSectionObserver.observe(s));

/* =============================================
   SCROLL REVEAL — fade-in sections
   ============================================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
