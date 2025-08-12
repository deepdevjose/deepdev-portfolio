document.addEventListener('DOMContentLoaded', () => {
  //
  // 1. SHOW CONTACTS TOGGLE
  //
  const sidebar     = document.querySelector('.sidebar');
  const contactBtn  = document.querySelector('[data-sidebar-btn]');
  
  if (sidebar && contactBtn) {
    // initial state
    contactBtn.setAttribute('aria-expanded', 'false');
    
    const toggleContacts = () => {
      const isOpen = sidebar.classList.toggle('active');
      // Accessibility improvements
      contactBtn.setAttribute('aria-expanded', String(isOpen));
      
      // Update icon
      const icon = contactBtn.querySelector('ion-icon');
      if (icon) {
        icon.name = isOpen ? 'chevron-up' : 'chevron-down';
      }
      
      // Focus management
      if (isOpen) {
        // Focus first link when opened
        const firstLink = sidebar.querySelector('.contact-link, .social-link');
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 100);
        }
      }
    };
    
    // Mouse and keyboard events
    contactBtn.addEventListener('click', toggleContacts);
    contactBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleContacts();
      }
    });
  }

  //
  // 2. PAGE NAVIGATION WITH ACCESSIBILITY
  //
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages    = document.querySelectorAll('article[data-page]');

  navLinks.forEach((link, index) => {
    
    const handleNavigation = (e) => {
      e.preventDefault();
      const target = link.dataset.navLink;
      
      // Show/hide sections
      pages.forEach(page => {
        const isActive = page.dataset.page === target;
        page.classList.toggle('active', isActive);
        
        // Update ARIA hidden state for better screen reader experience
        page.setAttribute('aria-hidden', String(!isActive));
      });
      
      // Update active state for links and ARIA pressed
      navLinks.forEach(n => {
        const isActive = n === link;
        n.classList.toggle('active', isActive);
        n.setAttribute('aria-pressed', String(isActive));
      });
      
      // Announce page change to screen readers
      const statusEl = document.getElementById('nav-status');
      if (statusEl) {
        statusEl.textContent = `${target.charAt(0).toUpperCase() + target.slice(1)} section is now active`;
      }
      
      // Focus management - move focus to the active page heading
      setTimeout(() => {
        const activeHeading = document.querySelector(`article[data-page="${target}"] h2`);
        if (activeHeading) {
          activeHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
          activeHeading.focus();
        }
      }, 100);
    };

    // Mouse and keyboard events
    link.addEventListener('click', handleNavigation);
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNavigation(e);
      }
      // Arrow key navigation
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (index + 1) % navLinks.length;
        navLinks[nextIndex].focus();
      }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
        navLinks[prevIndex].focus();
      }
    });
  });

  // Initialize first page as active with proper ARIA states
  if (navLinks.length && pages.length) {
    navLinks[0].classList.add('active');
    navLinks[0].setAttribute('aria-pressed', 'true');
    
    pages.forEach((page, i) => {
      const isActive = i === 0;
      page.classList.toggle('active', isActive);
      page.setAttribute('aria-hidden', String(!isActive));
    });
  }

  //
  // 3. PORTFOLIO FILTERS WITH ACCESSIBILITY
  //
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const projectItems = document.querySelectorAll('[data-filter-item]');
  const projectList = document.getElementById('project-list');

  filterBtns.forEach((btn, index) => {
    const handleFilter = (e) => {
      const filterValue = btn.textContent.trim().toLowerCase();
      let visibleCount = 0;

      // Update button states
      filterBtns.forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });

      // Filter projects
      projectItems.forEach(item => {
        const category = item.dataset.category;
        const shouldShow = filterValue === 'all' || 
                          category.includes(filterValue) || 
                          filterValue.includes(category.split(' ')[0]);
        
        item.style.display = shouldShow ? 'block' : 'none';
        item.setAttribute('aria-hidden', String(!shouldShow));
        
        if (shouldShow) visibleCount++;
      });

      // Announce filter results
      if (projectList) {
        const message = `${visibleCount} project${visibleCount !== 1 ? 's' : ''} shown for ${filterValue === 'all' ? 'all categories' : filterValue}`;
        projectList.setAttribute('aria-label', message);
      }
    };

    btn.addEventListener('click', handleFilter);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleFilter(e);
      }
      // Arrow key navigation for filters
      else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (index + 1) % filterBtns.length;
        filterBtns[nextIndex].focus();
      }
      else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (index - 1 + filterBtns.length) % filterBtns.length;
        filterBtns[prevIndex].focus();
      }
    });
  });

  //
  // 4. FORM VALIDATION WITH ACCESSIBILITY
  //
  const form = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn = document.querySelector('[data-form-btn]');

  if (form && formInputs.length) {
    const validateInput = (input) => {
      const errorEl = document.getElementById(`${input.id}-error`);
      let isValid = true;
      let errorMessage = '';

      if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        errorMessage = `${input.placeholder} is required`;
      } else if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
      }

      // Update ARIA and visual state
      input.setAttribute('aria-invalid', String(!isValid));
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.classList.toggle('show', !isValid);
      }

      return isValid;
    };

    const updateFormState = () => {
      const allValid = Array.from(formInputs).every(validateInput);
      if (formBtn) {
        formBtn.disabled = !allValid;
        formBtn.setAttribute('aria-disabled', String(!allValid));
      }
    };

    // Real-time validation
    formInputs.forEach(input => {
      input.addEventListener('blur', () => validateInput(input));
      input.addEventListener('input', updateFormState);
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const allValid = Array.from(formInputs).every(validateInput);
      const statusEl = document.getElementById('form-status');
      
      if (allValid) {
        if (statusEl) {
          statusEl.textContent = 'Message sent successfully!';
        }
        // Here you would typically send the form data
        setTimeout(() => {
          form.reset();
          updateFormState();
          if (statusEl) statusEl.textContent = '';
        }, 3000);
      } else {
        if (statusEl) {
          statusEl.textContent = 'Please correct the errors above';
        }
        // Focus first invalid field
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }

  //
  // 5. MOBILE SELECT DROPDOWN
  //
  const selectBtn = document.querySelector('[data-select]');
  const selectList = document.querySelector('.select-list');
  const selectItems = document.querySelectorAll('[data-select-item]');

  if (selectBtn && selectList) {
    selectBtn.addEventListener('click', () => {
      const isOpen = selectList.classList.toggle('active');
      selectBtn.setAttribute('aria-expanded', String(isOpen));
    });

    selectItems.forEach(item => {
      item.addEventListener('click', () => {
        const value = item.textContent.trim();
        const valueEl = selectBtn.querySelector('[data-select-value]');
        if (valueEl) valueEl.textContent = value;
        
        selectList.classList.remove('active');
        selectBtn.setAttribute('aria-expanded', 'false');
        selectBtn.focus();
        
        // Trigger filter
        const correspondingBtn = Array.from(filterBtns)
          .find(btn => btn.textContent.trim().toLowerCase() === value.toLowerCase());
        if (correspondingBtn) correspondingBtn.click();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!selectBtn.contains(e.target) && !selectList.contains(e.target)) {
        selectList.classList.remove('active');
        selectBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Keyboard support
    selectBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        selectList.classList.add('active');
        selectBtn.setAttribute('aria-expanded', 'true');
        selectItems[0]?.focus();
      }
    });
  }
});

// Add status element for screen reader announcements
const statusElement = document.createElement('div');
statusElement.id = 'nav-status';
statusElement.className = 'sr-only';
statusElement.setAttribute('role', 'status');
statusElement.setAttribute('aria-live', 'polite');
document.body.appendChild(statusElement);
