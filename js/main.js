document.addEventListener('DOMContentLoaded', () => {
  //
  // 1. SHOW CONTACTS TOGGLE
  //
  const sidebar     = document.querySelector('.sidebar');
  const contactBtn  = document.querySelector('[data-sidebar-btn]');
  if (sidebar && contactBtn) {
    // initial state
    contactBtn.setAttribute('aria-expanded', 'false');
    contactBtn.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('active');
      // accesibilities
      contactBtn.setAttribute('aria-expanded', String(isOpen));
      // icon toggle
      const icon = contactBtn.querySelector('ion-icon');
      if (icon) icon.name = isOpen ? 'chevron-up' : 'chevron-down';
    });
  }

  //
  // 2. PAGE NAVIGATION
  //
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages    = document.querySelectorAll('article[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // cancel default link behavior
      const target = link.dataset.navLink;
      // show/hide sections
      pages.forEach(page => {
        page.classList.toggle('active', page.dataset.page === target);
      });
      // active state for links
      navLinks.forEach(n => n.classList.toggle('active', n === link));
    });
  });

  // first page active
  if (navLinks.length && pages.length) {
    navLinks[0].classList.add('active');
    pages.forEach((page, i) => page.classList.toggle('active', i === 0));
  }
});
