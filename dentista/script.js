/* ============================================================
   DENTISTA — LANDING PAGE PREMIUM
   script.js — Lógica e Interatividade
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Aplica tokens CSS do config ──────────────────────────────
  function applyTheme(cfg) {
    const r = document.documentElement;
    r.style.setProperty('--primary',       cfg.PRIMARY_COLOR   || '#0a6fa8');
    r.style.setProperty('--accent',        cfg.ACCENT_COLOR    || '#00b4d8');
    r.style.setProperty('--text',          cfg.TEXT_COLOR      || '#1a2e3b');
    r.style.setProperty('--bg',            cfg.BG_COLOR        || '#ffffff');
  }
  if (typeof DENTIST_CONFIG !== 'undefined') applyTheme(DENTIST_CONFIG);

  // ── Injeta dados globais no DOM ───────────────────────────────
  function injectConfig() {
    if (typeof DENTIST_CONFIG === 'undefined') return;
    const C = DENTIST_CONFIG;

    // SEO / meta
    document.title = C.SEO.title;
    setMeta('description', C.SEO.description);
    setMeta('keywords', C.SEO.keywords);

    // Troca todos os [DATA-*] spans
    document.querySelectorAll('[data-config]').forEach(el => {
      const key = el.dataset.config;
      if (C[key] !== undefined) el.textContent = C[key];
    });
    document.querySelectorAll('[data-href]').forEach(el => {
      const key = el.dataset.href;
      if (C[key]) el.href = C[key];
    });
    document.querySelectorAll('[data-src]').forEach(el => {
      const key = el.dataset.src;
      if (C[key]) el.src = C[key];
    });

    // Whatsapp links
    const waUrl = `https://wa.me/${C.WHATSAPP}?text=Ol%C3%A1%21+Conheci+a+cl%C3%ADnica+pelo+site+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o.`;
    document.querySelectorAll('[data-wa]').forEach(el => { el.href = waUrl; });

    const waFormUrl = `https://wa.me/${C.WHATSAPP}?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+odontol%C3%B3gica.`;
    document.querySelectorAll('[data-wa-form]').forEach(el => { el.href = waFormUrl; });
  }

  function setMeta(name, content) {
    let m = document.querySelector(`meta[name="${name}"]`);
    if (!m) { m = document.createElement('meta'); m.name = name; document.head.appendChild(m); }
    m.content = content;
  }

  injectConfig();

  // ── Navbar scroll ─────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Hamburger menu ────────────────────────────────────────────
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });

  // ── Smooth scroll ─────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Scroll-triggered fade-in ──────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  // ── Counter animation ─────────────────────────────────────────
  function animateCounter(el, target) {
    const duration = 1800;
    const start = performance.now();
    const isString = isNaN(parseFloat(target.replace(/[^0-9.]/g, '')));
    if (isString) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');
    const decimals = (target.includes('.')) ? 1 : 0;

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = (num * ease).toFixed(decimals);
      el.textContent = current.replace('.', ',') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number[data-target]').forEach(el => {
          animateCounter(el, el.dataset.target);
        });
        statsObs.unobserve(entry.target);
      }
    });
  }, { threshold: .3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) statsObs.observe(statsSection);

  // ── Render Treatments ─────────────────────────────────────────
  function renderTreatments() {
    const container = document.getElementById('treatments-grid');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const treatments = DENTIST_CONFIG.TREATMENTS || [];
    const C = DENTIST_CONFIG;

    container.innerHTML = treatments.map((t, i) => `
      <div class="treatment-card fade-in-up delay-${(i % 4) + 1}" data-treatment="${t.id}">
        <span class="treatment-icon">${t.icon}</span>
        <h3 class="treatment-name">${t.name}</h3>
        <p class="treatment-desc">${t.description}</p>
        <ul class="treatment-benefits">
          ${t.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <button class="treatment-btn" onclick="openTreatmentModal('${t.id}')">
          Saiba mais <span>→</span>
        </button>
      </div>
    `).join('');

    // Re-observe new elements
    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // ── Treatment Modal ───────────────────────────────────────────
  window.openTreatmentModal = function(id) {
    if (typeof DENTIST_CONFIG === 'undefined') return;
    const t = DENTIST_CONFIG.TREATMENTS.find(x => x.id === id);
    if (!t) return;

    document.getElementById('modal-icon').textContent     = t.icon;
    document.getElementById('modal-name').textContent     = t.name;
    document.getElementById('modal-desc').textContent     = t.description;
    document.getElementById('modal-for').textContent      = t.forWhom || 'Indicado para quem deseja ' + t.description.toLowerCase().replace(/\.$/, '') + '.';
    document.getElementById('modal-how').textContent      = t.howItWorks || 'O tratamento é realizado por profissional especializado com tecnologia moderna e mínimo desconforto.';
    document.getElementById('modal-benefits').innerHTML   = t.benefits.map(b => `<div class="modal-benefit">${b}</div>`).join('');

    const bookBtn = document.getElementById('modal-book-btn');
    if (bookBtn && DENTIST_CONFIG.BOOKING_URL && DENTIST_CONFIG.BOOKING_URL !== '[LINK_AGENDAMENTO]') {
      bookBtn.href = DENTIST_CONFIG.BOOKING_URL;
    }

    document.getElementById('treatment-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  document.getElementById('modal-close')?.addEventListener('click', closeTreatmentModal);
  document.getElementById('treatment-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeTreatmentModal();
  });

  function closeTreatmentModal() {
    document.getElementById('treatment-modal').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Gallery ───────────────────────────────────────────────────
  function renderGallery(filter = 'all') {
    const container = document.getElementById('gallery-grid');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const photos = DENTIST_CONFIG.CLINIC_PHOTOS || [];

    const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter);

    container.innerHTML = filtered.map((p, i) => `
      <div class="gallery-item fade-in-up" data-category="${p.category}" onclick="openLightbox('${p.src}')">
        <img src="${p.src}" alt="${p.caption}" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-item-caption">${p.caption}</span>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // Gallery filter buttons
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  // ── Lightbox ──────────────────────────────────────────────────
  window.openLightbox = function(src) {
    const lb  = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target !== document.getElementById('lightbox-img')) {
      document.getElementById('lightbox').classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.getElementById('lightbox-close')?.addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  });

  // ── Before/After slider ───────────────────────────────────────
  function initBASliders() {
    document.querySelectorAll('.ba-slider').forEach(slider => {
      const handle = slider.querySelector('.ba-handle');
      const after  = slider.querySelector('.ba-after');
      let dragging = false;

      function setPosition(x) {
        const rect = slider.getBoundingClientRect();
        let pct = ((x - rect.left) / rect.width) * 100;
        pct = Math.max(5, Math.min(95, pct));
        after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
        handle.style.left    = pct + '%';
      }

      handle.addEventListener('mousedown', () => dragging = true);
      document.addEventListener('mouseup', () => dragging = false);
      document.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });

      handle.addEventListener('touchstart', () => dragging = true, { passive: true });
      document.addEventListener('touchend', () => dragging = false);
      document.addEventListener('touchmove', e => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
    });
  }

  // ── Render Before/After ───────────────────────────────────────
  function renderBeforeAfter() {
    const container = document.getElementById('ba-container');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const cases = DENTIST_CONFIG.BEFORE_AFTER || [];

    if (cases.length === 0) {
      container.innerHTML = `
        <div class="before-after-empty fade-in-up">
          <h3>📸 Casos Clínicos</h3>
          <p>Os casos clínicos de antes e depois serão exibidos aqui após o cadastro das imagens com autorização do paciente, conforme as normas profissionais aplicáveis.</p>
        </div>
      `;
      observer.observe(container.firstElementChild);
      return;
    }

    container.innerHTML = cases.map(c => `
      <div class="ba-slider fade-in-up">
        <img src="${c.before}" alt="Antes — ${c.treatment}">
        <div class="ba-after">
          <img src="${c.after}" alt="Depois — ${c.treatment}">
        </div>
        <div class="ba-handle"></div>
      </div>
      <div class="ba-labels">
        <span class="ba-label before">Antes</span>
        <span class="ba-label after">Depois — ${c.treatment}</span>
      </div>
      <p style="text-align:center;color:var(--text-light);font-size:.85rem;margin-top:6px">${c.description}</p>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    initBASliders();
  }

  // ── Render Team ───────────────────────────────────────────────
  function renderTeam() {
    const container = document.getElementById('team-grid');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const team = DENTIST_CONFIG.TEAM || [];

    container.innerHTML = team.map((m, i) => `
      <div class="team-card fade-in-up delay-${i + 1}">
        <div class="team-card-photo">
          <img src="${m.photo}" alt="${m.name}" loading="lazy">
        </div>
        <div class="team-card-info">
          <p class="team-card-name">${m.name}</p>
          <p class="team-card-role">${m.role}</p>
          <p class="team-card-specialty">${m.specialty}</p>
          ${m.cro ? `<p class="team-card-cro">${m.cro}</p>` : ''}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // ── Render Testimonials ───────────────────────────────────────
  function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const list = DENTIST_CONFIG.TESTIMONIALS || [];

    if (list.length === 0) {
      container.innerHTML = `
        <div class="testimonials-empty">
          <p>⭐ Os depoimentos reais dos pacientes serão exibidos aqui após o cadastro com autorização.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map((t, i) => `
      <div class="testimonial-card fade-in-up delay-${(i % 3) + 1}">
        <div class="testimonial-stars">${'★'.repeat(t.rating || 5)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.name.charAt(0)}</div>
          <div>
            <p class="testimonial-name">${t.name}</p>
            <p class="testimonial-treatment">${t.treatment || ''}</p>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // ── Render Hours ──────────────────────────────────────────────
  function renderHours() {
    const container = document.getElementById('hours-grid');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const hours = DENTIST_CONFIG.OPENING_HOURS || [];

    container.innerHTML = hours.map(h => `
      <div class="hours-card ${h.open ? 'open' : ''} fade-in-up">
        <p class="hours-day">${h.day.substring(0,3)}</p>
        <p class="hours-time">${h.hours}</p>
        <span class="hours-badge ${h.open ? 'aberto' : 'fechado'}">${h.open ? 'Aberto' : 'Fechado'}</span>
      </div>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // ── Render Payment ────────────────────────────────────────────
  function renderPayment() {
    const container = document.getElementById('payment-grid');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const methods = DENTIST_CONFIG.PAYMENT_METHODS || [];

    container.innerHTML = methods.map(m => `
      <div class="payment-badge fade-in-up">
        <span class="pay-icon">${m.icon}</span>
        <span>${m.label}</span>
      </div>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // ── Render Differentials ──────────────────────────────────────
  function renderDifferentials() {
    const container = document.getElementById('differentials-grid');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const list = DENTIST_CONFIG.DIFFERENTIALS || [];

    container.innerHTML = list.map((d, i) => `
      <div class="differential-card fade-in-up delay-${(i % 3) + 1}">
        <div class="differential-icon">${d.icon}</div>
        <h3 class="differential-title">${d.title}</h3>
        <p class="differential-desc">${d.desc}</p>
      </div>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  // ── Render FAQ ────────────────────────────────────────────────
  function renderFAQ() {
    const container = document.getElementById('faq-list');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const faqs = DENTIST_CONFIG.FAQ || [];

    container.innerHTML = faqs.map((f, i) => `
      <div class="faq-item fade-in-up">
        <div class="faq-question" onclick="toggleFAQ(this)">
          <span class="faq-question-text">${f.question}</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">${f.answer}</div>
      </div>
    `).join('');

    container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  }

  window.toggleFAQ = function(el) {
    const item = el.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  };

  // ── Render Map ────────────────────────────────────────────────
  function renderMap() {
    const container = document.getElementById('map-container');
    if (!container || typeof DENTIST_CONFIG === 'undefined') return;
    const url = DENTIST_CONFIG.GOOGLE_MAPS_URL;

    if (url && !url.includes('[')) {
      container.innerHTML = `<iframe src="${url}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização da clínica no Google Maps"></iframe>`;
    } else {
      container.innerHTML = `
        <div class="map-placeholder">
          <div class="map-icon">📍</div>
          <p>O mapa será exibido após inserir o link do Google Maps no arquivo config.js</p>
        </div>
      `;
    }
  }

  // ── Agendamento form ──────────────────────────────────────────
  function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;

    // Populate treatment select
    const sel = form.querySelector('[name="tratamento"]');
    if (sel && typeof DENTIST_CONFIG !== 'undefined') {
      DENTIST_CONFIG.TREATMENTS.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        sel.appendChild(opt);
      });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const nome      = data.get('nome') || '';
      const tratament = sel ? sel.options[sel.selectedIndex]?.text : data.get('tratamento');
      const msg = `Olá! Me chamo ${nome} e gostaria de agendar uma consulta${tratament ? ' para ' + tratament : ''}. Poderia me informar a disponibilidade?`;

      const waNum  = (DENTIST_CONFIG?.WHATSAPP || '').replace(/\D/g,'');
      const waLink = `https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`;
      window.open(waLink, '_blank');
    });
  }

  // ── Run all ───────────────────────────────────────────────────
  renderTreatments();
  renderGallery();
  renderBeforeAfter();
  renderTeam();
  renderTestimonials();
  renderHours();
  renderPayment();
  renderDifferentials();
  renderFAQ();
  renderMap();
  initBookingForm();

  // ── ESC key to close modals ───────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('treatment-modal')?.classList.remove('open');
      document.getElementById('lightbox')?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

});
