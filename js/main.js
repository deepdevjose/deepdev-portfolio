// Page navigation: show/hide content based on navbar clicks

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const sections = document.querySelectorAll('article[data-page]');

  // Attach click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const targetPage = this.textContent.trim().toLowerCase();

      // Show/hide sections
      sections.forEach(section => {
        section.style.display =
          section.getAttribute('data-page') === targetPage ? 'block' : 'none';
      });

      // Update active class on nav links
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Initialize: show first section and set first nav link active
  sections.forEach((section, index) => {
    if (index === 0) {
      section.style.display = 'block';
      navLinks[index].classList.add('active');
    } else {
      section.style.display = 'none';
    }
  });
});
