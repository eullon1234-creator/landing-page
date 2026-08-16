/* ── script.js — Landing Page Coringa — Interações & Animações ── */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── INJEÇÃO DE CONFIGURAÇÃO ─────────────────────────────────── */
  applyConfig();

  /* ─── NAVBAR SCROLL ───────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ─── HAMBURGER MENU ──────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });

  /* ─── SMOOTH SCROLL ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  /* ─── ANIMATE ON SCROLL ───────────────────────────────────────── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  /* ─── FAQ ACCORDION ───────────────────────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // fecha todos
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      // abre clicado
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ─── COUNTER ANIMATION ───────────────────────────────────────── */
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = formatNumber(target) + suffix;
        clearInterval(timer);
      } else {
        el.textContent = formatNumber(Math.floor(current)) + suffix;
      }
    }, 25);
  }

  function formatNumber(n) {
    if (n >= 1000) return '+' + (n / 1000).toFixed(1).replace('.0', '') + 'mil';
    return n.toString();
  }

  const trustObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          const val = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, val, suffix);
        });
        trustObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const trustBar = document.getElementById('trust-bar');
  if (trustBar) trustObserver.observe(trustBar);

  /* ─── PROGRESS BAR TOPO ───────────────────────────────────────── */
  const progressBar = document.createElement('div');
  progressBar.id = 'progress-bar';
  progressBar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
    background: linear-gradient(to right, #6C63FF, #00D4AA);
    width: 0%; transition: width 0.1s linear;
  `;
  document.body.prepend(progressBar);
  window.addEventListener('scroll', () => {
    const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPct + '%';
  }, { passive: true });

  /* ─── MICRO-RIPPLE NOS BOTÕES ─────────────────────────────────── */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect   = this.getBoundingClientRect();
      ripple.style.cssText = `
        position: absolute; border-radius: 50%;
        width: 100px; height: 100px;
        background: rgba(255,255,255,0.18);
        left: ${e.clientX - rect.left - 50}px;
        top:  ${e.clientY - rect.top  - 50}px;
        transform: scale(0); animation: ripple-anim 0.6s linear;
        pointer-events: none;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // CSS para ripple
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `@keyframes ripple-anim { to { transform:scale(4); opacity:0; } }`;
  document.head.appendChild(rippleStyle);

  /* ─── WHATSAPP LINK ───────────────────────────────────────────── */
  const wappLinks = document.querySelectorAll('.wapp-link');
  if (window.CONFIG) {
    wappLinks.forEach(el => el.setAttribute('href', window.CONFIG.WHATSAPP_LINK));
  }
});

/* ─── APLICAR CONFIG ────────────────────────────────────────────── */
function applyConfig() {
  if (!window.CONFIG) return;
  const C = window.CONFIG;

  // Título e meta
  document.title = C.SEO_TITLE;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', C.SEO_DESCRIPTION);

  // Substituição simples via data-config
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    if (C[key] !== undefined) {
      if (el.tagName === 'A') el.setAttribute('href', C[key]);
      else el.textContent = C[key];
    }
  });

  // Links WhatsApp
  document.querySelectorAll('.wapp-link').forEach(el => {
    el.setAttribute('href', C.WHATSAPP_LINK);
  });

  // CSS vars de cor
  const root = document.documentElement;
  root.style.setProperty('--primary', C.PRIMARY_COLOR);
  root.style.setProperty('--secondary', C.SECONDARY_COLOR);
  root.style.setProperty('--accent', C.ACCENT_COLOR);
  root.style.setProperty('--dark', C.DARK_BG);
  root.style.setProperty('--card', C.CARD_BG);
}
