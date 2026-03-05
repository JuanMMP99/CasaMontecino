/* ============================================================
   CASA MONTECINO — components.js
   Header, Footer, WhatsApp FAB, Carrito, Lightbox, Scroll FX
   ============================================================ */

/* ── 1. HEADER ─────────────────────────────────────────── */
function renderHeader(activePage) {
  const pages = [
    { href: 'index.html',     label: 'Inicio' },
    { href: 'alebrijes.html', label: 'Alebrijes' },
    { href: 'galeria.html',   label: 'Galería' },
    { href: 'visitanos.html', label: 'Visítanos' },
  ];

  const links = pages.map(p => `
    <li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>
  `).join('');

  const mobileLinks = pages.map(p => `
    <a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>
  `).join('');

  const showCart = activePage === 'alebrijes.html';

  document.getElementById('site-header').innerHTML = `
    <a href="index.html" class="logo">CASA <span>MONTECINO</span></a>
    <nav>
      <ul class="nav-links">
        ${links}
        ${showCart ? `
        <li>
          <button class="cart-trigger" id="cart-open-btn" aria-label="Cotizador">
            ☰ Cotizador
            <span class="cart-counter" id="cart-counter">0</span>
          </button>
        </li>` : ''}
      </ul>
    </nav>
    <button class="hamburger" id="hamburger-btn" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinks}
      ${showCart ? `<a href="#" id="mobile-cart-btn">☰ Cotizador</a>` : ''}
    </div>
  `;

  // Hamburger toggle
  const ham = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    if (!a.id) a.addEventListener('click', () => {
      ham.classList.remove('open');
      menu.classList.remove('open');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('site-header').classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ── 2. FOOTER ─────────────────────────────────────────── */
function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="logo">CASA <span>MONTECINO</span></span>
        <p>Figuras talladas en madera de copal, pintadas a mano con pigmentos naturales en San Martín Tilcajete, Oaxaca. Cada pieza es única e irrepetible.</p>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="alebrijes.html">Alebrijes</a></li>
          <li><a href="galeria.html">Galería</a></li>
          <li><a href="visitanos.html">Visítanos</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="tel:+529511234567">+52 951 123 4567</a></li>
          <li><a href="mailto:hola@casamontecino.mx">hola@casamontecino.mx</a></li>
          <li><a href="visitanos.html">San Martín Tilcajete, Oax.</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 Casa Montecino — Todos los derechos reservados</span>
      <a href="https://wa.me/529511234567" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  `;
}

/* ── 3. WHATSAPP FAB ───────────────────────────────────── */
function renderWhatsApp(phone = '529511234567', message = 'Hola, me interesa una pieza de Casa Montecino.') {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const fab = document.createElement('a');
  fab.href = url;
  fab.target = '_blank';
  fab.rel = 'noopener';
  fab.className = 'whatsapp-fab';
  fab.setAttribute('aria-label', 'Contactar por WhatsApp');
  fab.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span class="whatsapp-tooltip">¿Tienes dudas?</span>
  `;
  document.body.appendChild(fab);
}

/* ── 4. SCROLL REVEAL ANIMATIONS ──────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/* ── 5. CARRITO / COTIZADOR ───────────────────────────── */
const Cart = (() => {
  let items = [];

  function getTotal() {
    return items.reduce((s, i) => s + i.price, 0);
  }

  function updateCounter() {
    const counter = document.getElementById('cart-counter');
    if (!counter) return;
    counter.textContent = items.length;
    counter.classList.toggle('visible', items.length > 0);
    counter.style.animation = 'none';
    requestAnimationFrame(() => {
      counter.style.animation = 'cartBounce 0.4s ease';
    });
  }

  function renderItems() {
    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty');
    const totalEl = document.getElementById('cart-total-price');
    if (!list) return;

    if (items.length === 0) {
      list.innerHTML = '';
      empty.style.display = 'flex';
      if (totalEl) totalEl.textContent = 'MX$ 0';
      return;
    }
    empty.style.display = 'none';

    list.innerHTML = items.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-img">
          ${item.img
            ? `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;">`
            : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--cream);font-size:0.65rem;color:#bbb;font-family:var(--font-display)">IMG</div>`
          }
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <button class="cart-remove" onclick="Cart.remove(${idx})">✕ quitar</button>
        </div>
        <span class="cart-item-price">MX$${item.price.toLocaleString()}</span>
      </div>
    `).join('');

    if (totalEl) totalEl.textContent = `MX$${getTotal().toLocaleString()}`;
  }

  function add(item) {
    items.push(item);
    updateCounter();
    renderItems();
    open();
  }

  function remove(idx) {
    items.splice(idx, 1);
    updateCounter();
    renderItems();
  }

  function open() {
    document.getElementById('cart-panel')?.classList.add('open');
    document.getElementById('cart-overlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    document.getElementById('cart-panel')?.classList.remove('open');
    document.getElementById('cart-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function getQuoteText() {
    if (!items.length) return '';
    const list = items.map(i => `• ${i.name} — MX$${i.price.toLocaleString()}`).join('\n');
    return `Hola, me gustaría cotizar estas piezas de Casa Montecino:\n\n${list}\n\nTotal estimado: MX$${getTotal().toLocaleString()}`;
  }

  function renderPanel() {
    const panel = document.createElement('div');
    panel.id = 'cart-panel';
    panel.className = 'cart-panel';
    panel.innerHTML = `
      <div class="cart-header">
        <h2>Cotizador</h2>
        <button class="cart-close" id="cart-close-btn" aria-label="Cerrar">✕</button>
      </div>
      <div class="cart-items" id="cart-items-list">
      </div>
      <div class="cart-empty" id="cart-empty">
        <span class="empty-icon">◎</span>
        <p>Aún no has seleccionado piezas.<br>Explora nuestra colección.</p>
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Total estimado</span>
          <strong id="cart-total-price">MX$ 0</strong>
        </div>
        <button class="btn btn-solid cart-btn" id="cart-whatsapp-btn">
          Consultar por WhatsApp
        </button>
        <p class="cart-note">Los precios son orientativos. Confirmamos disponibilidad y envío por mensaje.</p>
      </div>
    `;
    document.body.appendChild(panel);

    const overlay = document.createElement('div');
    overlay.id = 'cart-overlay';
    overlay.className = 'cart-overlay';
    document.body.appendChild(overlay);

    document.getElementById('cart-close-btn').addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.getElementById('cart-whatsapp-btn').addEventListener('click', () => {
      const text = getQuoteText();
      if (!text) return;
      window.open(`https://wa.me/529511234567?text=${encodeURIComponent(text)}`, '_blank');
    });

    // Cart open button in header
    document.addEventListener('click', (e) => {
      if (e.target.closest('#cart-open-btn') || e.target.closest('#mobile-cart-btn')) {
        e.preventDefault();
        open();
      }
    });
  }

  return { add, remove, open, close, renderPanel };
})();

/* ── 6. LIGHTBOX ──────────────────────────────────────── */
const Lightbox = (() => {
  let current = 0;
  let images = [];

  function build() {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `
      <button class="lightbox-close" id="lb-close">✕</button>
      <div class="lightbox-img-wrap" style="position:relative;">
        <button class="lightbox-nav lightbox-prev" id="lb-prev">‹</button>
        <img id="lb-img" src="" alt="">
        <button class="lightbox-nav lightbox-next" id="lb-next">›</button>
      </div>
      <p class="lightbox-caption" id="lb-caption"></p>
    `;
    document.body.appendChild(lb);

    document.getElementById('lb-close').addEventListener('click', close);
    document.getElementById('lb-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('lb-next').addEventListener('click', () => navigate(1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  function open(imgs, idx) {
    images = imgs;
    current = idx;
    show();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    current = (current + dir + images.length) % images.length;
    show();
  }

  function show() {
    const item = images[current];
    const img = document.getElementById('lb-img');
    const cap = document.getElementById('lb-caption');
    img.src = item.src;
    img.alt = item.caption || '';
    cap.textContent = item.caption || '';
    const prevBtn = document.getElementById('lb-prev');
    const nextBtn = document.getElementById('lb-next');
    if (prevBtn) prevBtn.style.display = images.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = images.length > 1 ? 'flex' : 'none';
  }

  return { build, open };
})();
