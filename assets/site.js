(() => {
  document.documentElement.classList.add('js-nav');
  const button = document.querySelector('.menu-btn');
  const nav = document.querySelector('#navigation');
  const close = () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); };
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) { close(); button.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) close(); });
  matchMedia('(min-width: 761px)').addEventListener('change', close);
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    document.documentElement.classList.add('js-motion');
  }
})();

// With JavaScript disabled, gallery links still open the original local image.
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
  dialog.append(closeButton, figure);
  document.body.append(dialog);
  let previousOverflow = '';
  let trigger;
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    trigger = link;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    caption.textContent = link.dataset.caption;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
  }));
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    trigger?.focus();
  });
})();
