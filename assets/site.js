(() => {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const button = document.querySelector('.menu-btn');
  const nav = document.querySelector('#navigation');
  const header = document.querySelector('.site-header');
  const motionButton = document.querySelector('.motion-toggle');
  let savedMotion = null;
  try { savedMotion = localStorage.getItem('luethi-motion'); } catch { /* Storage can be unavailable. */ }
  let paused = reduced.matches || savedMotion === 'off';
  let frame = 0;

  function updateScroll() {
    frame = 0;
    header.classList.toggle('is-scrolled', scrollY > 30);
  }
  function setMotion(value, remember = false) {
    paused = value || reduced.matches;
    root.classList.toggle('motion-off', paused);
    root.style.scrollBehavior = paused ? 'auto' : '';
    if (motionButton) {
      motionButton.textContent = reduced.matches ? 'Bewegung reduziert' : paused ? 'Animationen aktivieren' : 'Animationen pausieren';
      motionButton.disabled = reduced.matches;
      motionButton.setAttribute('aria-pressed', String(paused));
    }
    if (remember) {
      try { localStorage.setItem('luethi-motion', paused ? 'off' : 'on'); } catch { /* Optional preference only. */ }
    }
    updateScroll();
  }
  root.classList.add('js-nav');
  setMotion(paused);
  const menuLabel = button.querySelector('.menu-label');
  const close = () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); if (menuLabel) menuLabel.textContent = 'Menü'; };
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    if (menuLabel) menuLabel.textContent = open ? 'Schliessen' : 'Menü';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) { close(); button.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) close(); });
  matchMedia('(min-width: 761px)').addEventListener('change', close);
  motionButton?.addEventListener('click', () => setMotion(!paused, true));
  reduced.addEventListener('change', event => setMotion(event.matches));
  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(updateScroll); }, { passive: true });

  if ('IntersectionObserver' in window) {
    const targets = new Map();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        targets.get(entry.target).forEach(element => element.classList.add('visible'));
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 });
    document.querySelectorAll('.reveal, .image-reveal').forEach(element => {
      // Observe an unclipped wrapper, otherwise a completely masked image can
      // have zero intersection forever and never receive its reveal class.
      const target = element.closest('.image-trigger') || element;
      const list = targets.get(target) || [];
      list.push(element);
      targets.set(target, list);
      observer.observe(target);
    });
    root.classList.add('js-motion');
  }

  // The team is a native horizontal portrait strip on small screens. Every
  // portrait remains a real link; controls supplement touch and keyboard use.
  const deck = document.querySelector('.portrait-deck');
  if (deck) {
    const cards = [...deck.querySelectorAll('.portrait-card')];
    const previous = document.querySelector('.portrait-back');
    const next = document.querySelector('.portrait-next');
    const position = document.querySelector('.portrait-position');
    let selected = 0;
    let portraitFrame = 0;
    const updatePortraits = () => {
      portraitFrame = 0;
      const start = deck.getBoundingClientRect().left + 20;
      selected = cards.reduce((closest, card, index) =>
        Math.abs(card.getBoundingClientRect().left - start) <
        Math.abs(cards[closest].getBoundingClientRect().left - start) ? index : closest, 0);
      position.textContent = `${String(selected + 1).padStart(2, '0')} — ${String(cards.length).padStart(2, '0')}`;
      previous.disabled = deck.scrollLeft < 2;
      next.disabled = deck.scrollLeft >= deck.scrollWidth - deck.clientWidth - 2;
    };
    const movePortrait = direction => {
      const target = cards[Math.max(0, Math.min(cards.length - 1, selected + direction))];
      deck.scrollBy({ left: target.getBoundingClientRect().left - deck.getBoundingClientRect().left - 20, behavior: paused ? 'instant' : 'smooth' });
    };
    previous.addEventListener('click', () => movePortrait(-1));
    next.addEventListener('click', () => movePortrait(1));
    deck.addEventListener('scroll', () => {
      if (!portraitFrame) portraitFrame = requestAnimationFrame(updatePortraits);
    }, { passive: true });
    addEventListener('resize', updatePortraits);
    updatePortraits();
  }

})();

// Gallery links work as original image links when JavaScript is disabled.
(() => {
  const links = [...document.querySelectorAll('[data-gallery]')];
  if (!links.length || !('HTMLDialogElement' in window)) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-dialog';
  dialog.setAttribute('aria-label', 'Salonbild vergrössert');
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'gallery-close';
  closeButton.textContent = 'Schliessen ×';
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.src = links[0].href;
  image.alt = links[0].querySelector('img').alt;
  const caption = document.createElement('figcaption');
  figure.append(image, caption);
  const controls = document.createElement('div');
  controls.className = 'gallery-nav';
  const previous = document.createElement('button');
  previous.type = 'button'; previous.textContent = 'Zurück';
  previous.setAttribute('aria-label', 'Vorheriges Bild');
  const next = document.createElement('button');
  next.type = 'button'; next.textContent = 'Weiter';
  next.setAttribute('aria-label', 'Nächstes Bild');
  const count = document.createElement('span');
  count.setAttribute('aria-live', 'polite');
  controls.append(previous, count, next);
  dialog.append(closeButton, figure, controls);
  document.body.append(dialog);
  let previousOverflow = '';
  let trigger;
  let index = 0;
  const show = value => {
    index = (value + links.length) % links.length;
    image.src = links[index].href;
    image.alt = links[index].querySelector('img').alt;
    caption.textContent = links[index].dataset.caption;
    count.textContent = `${index + 1} / ${links.length}`;
  };
  links.forEach((link, i) => link.addEventListener('click', event => {
    event.preventDefault(); trigger = link; show(i);
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
  }));
  previous.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(index - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(index + 1); }
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    trigger?.focus();
  });
})();
