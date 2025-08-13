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

  //
  // 6. THEME AND LANGUAGE TOGGLES
  //
  const languageToggle = document.getElementById('language-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Language content object
  const content = {
    en: {
      // Navigation
      'about': 'About',
      'resume': 'Resume',
      'portfolio': 'Portfolio', 
      'blog': 'Blog',
      'contact': 'Contact',
      
      // About section
      'about-title': 'About me',
      'about-p1': 'I drive technological innovation by integrating software, hardware, and user experience—combining analytical thinking with practical creativity.',
      'about-p2': 'I lead entrepreneurial projects with an unwavering commitment to excellence, underpinned by five years of hands-on programming expertise.',
      'services-title': 'What I\'m doing',
      'service-1-title': 'Data Analysis & Machine Learning',
      'service-1-text': 'Developing data-driven solutions and building intelligent systems with cutting-edge tools and techniques.',
      'service-2-title': 'Web & Desktop Applications', 
      'service-2-text': 'Designing and deploying sleek, user-friendly websites and standalone Windows executables.',
      'service-3-title': 'Embedded & IoT Prototyping',
      'service-3-text': 'Creating real-world IoT solutions with Arduino, ESP32, and MQTT dashboards for smart automation.',
      
      // Resume section
      'resume-title': 'Resume',
      'education-title': 'Education',
      'skills-title': 'Certifications & Skills',
      'edu-diploma': 'Programming Technician Diploma, CETIS No. 026',
      'edu-diploma-date': '2020-2023',
      'edu-diploma-description': 'Technical diploma focusing on structured programming, OOP, web, and mobile development.',
      'edu-bachelor': 'Bachelor of Engineering in Information and Communication Technologies, ITSOEH',
      'edu-bachelor-date': '2023 – Present',
      'edu-bachelor-description': 'Curriculum focused on artificial intelligence, data analysis, and machine learning projects.',
      
      // Portfolio section
      'portfolio-title': 'Portfolio',
      'filter-all': 'All',
      'filter-data': 'Data Analysis',
      'filter-ml': 'Machine Learning',
      'filter-web': 'Web Development',
      'filter-iot': 'Embedded & IoT',
      
      // Blog section
      'blog-title': 'Blog',
      'blog-1-category': 'Artificial Intelligence',
      'blog-1-title': 'Workshop: AI applied to social networks',
      'blog-1-text': 'I conducted a workshop at CEtis 91, Tula de Allende, Hidalgo, where we trained a neural network for object classification using Python. It was a hands-on and enriching experience for attendees interested in Artificial Intelligence.',
      'blog-2-category': 'Data Visualization',
      'blog-2-title': 'Workshop: Tableau for data visualization',
      'blog-2-text': 'At CEtis 91, I delivered a workshop on Tableau, teaching participants how to create interactive visualizations and effectively analyze data. This workshop provided essential tools for understanding and presenting data.',
      'blog-3-category': 'Programming',
      'blog-3-title': 'Course: Structured programming in C++',
      'blog-3-text': 'This course introduced the fundamentals of structured programming in C++, including concepts like functions, arrays, and structures, with a focus on best programming practices.',
      'blog-4-category': 'Programming',
      'blog-4-title': 'Course: Object-oriented programming in C++',
      'blog-4-text': 'We explored object-oriented programming concepts in C++, from creating classes to inheritance and polymorphism, providing a solid foundation in this paradigm.',
      'blog-5-category': 'Programming',
      'blog-5-title': 'Course: Functional programming in C++',
      'blog-5-text': 'An advanced course where we explored the functional paradigm in C++, using lambdas, higher-order functions, and functional structures to write cleaner and more efficient code.',
      
      // Contact section
      'contact-title': 'Contact',
      'form-title': 'Contact Form',
      'fullname-placeholder': 'Full name',
      'email-placeholder': 'Email Address', 
      'message-placeholder': 'Your Message',
      'send-message': 'Send Message',
      
      // Sidebar
      'show-contacts': 'Show Contacts',
      'email-label': 'E-mail',
      'birthday-label': 'Birthday'
    },
    es: {
      // Navigation
      'about': 'Sobre mí',
      'resume': 'Currículum',
      'portfolio': 'Portafolio',
      'blog': 'Blog',
      'contact': 'Contacto',

      // About section
      'about-title': 'Sobre mí',
      'about-p1': 'Me encanta impulsar la innovación tecnológica uniendo software, hardware y experiencia de usuario, combinando un pensamiento analítico con un toque creativo y práctico.',
      'about-p2': 'Lidero proyectos con mentalidad emprendedora y un compromiso total con la calidad, respaldado por más de cinco años de experiencia real en programación.',
      'services-title': 'Lo que hago',
      'service-1-title': 'Análisis de Datos e Inteligencia Artificial',
      'service-1-text': 'Creo soluciones basadas en datos y desarrollo sistemas inteligentes usando herramientas y técnicas modernas.',
      'service-2-title': 'Aplicaciones Web y de Escritorio',
      'service-2-text': 'Diseño y desarrollo sitios web atractivos y fáciles de usar, así como aplicaciones ejecutables para Windows.',
      'service-3-title': 'Sistemas Embebidos e IoT',
      'service-3-text': 'Desarrollo soluciones IoT funcionales con Arduino, ESP32 y paneles MQTT para automatizar de forma inteligente.',

      // Resume section
      'resume-title': 'Currículum',
      'education-title': 'Formación Académica',
      'skills-title': 'Certificaciones y Habilidades',
      'edu-diploma': 'Técnico en Programación, CETIS No. 026',
      'edu-diploma-date': '2020-2023',
      'edu-diploma-description': 'Formación técnica en programación estructurada, POO, desarrollo web y móvil.',
      'edu-bachelor': 'Ingeniería en Tecnologías de la Información y Comunicaciones, ITSOEH',
      'edu-bachelor-date': '2023 – Presente',
      'edu-bachelor-description': 'Enfoque en inteligencia artificial, análisis de datos y proyectos de machine learning.',

      // Portfolio section
      'portfolio-title': 'Portafolio',
      'filter-all': 'Todos',
      'filter-data': 'Análisis de datos',
      'filter-ml': 'Machine Learning',
      'filter-web': 'Desarrollo web',
      'filter-iot': 'Sistemas embebidos e IoT',

      // Blog section
      'blog-title': 'Blog',

      // Post 1: IA aplic. a redes sociales
      'blog-1-category': 'Inteligencia Artificial',
      'blog-1-title': 'Taller: IA aplicada a redes sociales',
      'blog-1-text': 'Impartí un taller en el CEtis 91 (Tula de Allende, Hgo.) donde entrenamos una red neuronal para clasificar objetos con Python. Fue súper práctico y la banda salió motivada para seguir en IA.',

      // Post 2: Tableau
      'blog-2-category': 'Visualización de datos',
      'blog-2-title': 'Taller: Tableau para visualización de datos',
      'blog-2-text': 'Mostré cómo crear visualizaciones interactivas y dashboards para analizar información y tomar decisiones con datos, de forma clara y directa.',

      // Post 3: C++ estructurado
      'blog-3-category': 'Programación',
      'blog-3-title': 'Curso: Programación estructurada en C++',
      'blog-3-text': 'Vimos lo esencial: funciones, arreglos y estructuras, con buenas prácticas para escribir código claro y mantenible.',

      // Post 4: C++ POO
      'blog-4-category': 'Programación',
      'blog-4-title': 'Curso: Programación orientada a objetos en C++',
      'blog-4-text': 'Trabajamos clases, herencia y polimorfismo con ejemplos prácticos para aterrizar la POO en proyectos reales.',

      // Post 5: C++ funcional
      'blog-5-category': 'Programación',
      'blog-5-title': 'Curso: Programación funcional en C++',
      'blog-5-text': 'Exploramos lambdas y funciones de orden superior para escribir código más limpio y expresivo al estilo funcional.',

      // Contact section
      'contact-title': 'Contacto',
      'form-title': 'Formulario de contacto',
      'fullname-placeholder': 'Nombre completo',
      'email-placeholder': 'Correo electrónico',
      'message-placeholder': 'Escribe tu mensaje',
      'send-message': 'Enviar mensaje',

      // Sidebar
      'show-contacts': 'Mostrar contactos',
      'email-label': 'Correo',
      'birthday-label': 'Fecha de nacimiento'
    }
  };

  // Initialize settings from localStorage
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  const savedLang = localStorage.getItem('portfolio-language') || 'en';
  
  // Apply saved settings
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('data-lang', savedLang);
  
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', savedTheme === 'light');
    const themeIcon = themeToggle.querySelector('ion-icon');
    if (themeIcon) {
      themeIcon.name = savedTheme === 'light' ? 'sunny-outline' : 'moon-outline';
    }
  }
  
  if (languageToggle) {
    languageToggle.setAttribute('aria-pressed', savedLang === 'es');
  }

  // Update content based on language
  const updateContent = (lang) => {
    Object.keys(content[lang]).forEach(key => {
      const elements = document.querySelectorAll(`[data-text="${key}"]`);
      elements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = content[lang][key];
        } else {
          el.textContent = content[lang][key];
        }
      });
    });
  };

  // Theme toggle functionality
  if (themeToggle) {
    const handleThemeToggle = (event) => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Get click position for ripple effect
      const rect = themeToggle.getBoundingClientRect();
      const x = event?.clientX ? ((event.clientX - rect.left) / rect.width) * 100 : 50;
      const y = event?.clientY ? ((event.clientY - rect.top) / rect.height) * 100 : 50;
      
      // Set CSS custom properties for ripple position
      document.documentElement.style.setProperty('--ripple-x', `${x}%`);
      document.documentElement.style.setProperty('--ripple-y', `${y}%`);
      
      // Add transition class for enhanced animation
      document.body.classList.add('theme-transitioning');
      
      // Apply theme change
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      
      themeToggle.setAttribute('aria-pressed', newTheme === 'light');
      
      const themeIcon = themeToggle.querySelector('ion-icon');
      if (themeIcon) {
        themeIcon.style.transform = 'scale(0.8) rotate(180deg)';
        setTimeout(() => {
          themeIcon.name = newTheme === 'light' ? 'sunny-outline' : 'moon-outline';
          themeIcon.style.transform = 'scale(1) rotate(0deg)';
        }, 150);
      }

      // Remove transition class after animation
      setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
      }, 600);

      // Announce theme change
      const statusEl = document.getElementById('nav-status');
      if (statusEl) {
        statusEl.textContent = `Theme switched to ${newTheme} mode`;
      }
    };

    themeToggle.addEventListener('click', handleThemeToggle);
    themeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleThemeToggle(e);
      }
    });
  }

  // Language toggle functionality  
  if (languageToggle) {
    const handleLanguageToggle = () => {
      const currentLang = document.documentElement.getAttribute('data-lang');
      const newLang = currentLang === 'en' ? 'es' : 'en';
      
      document.documentElement.setAttribute('data-lang', newLang);
      document.documentElement.setAttribute('lang', newLang);
      localStorage.setItem('portfolio-language', newLang);
      
      languageToggle.setAttribute('aria-pressed', newLang === 'es');
      
      // Update content with animation
      const allTextElements = document.querySelectorAll('[data-text]');
      allTextElements.forEach(el => {
        el.style.opacity = '0.7';
        el.style.transform = 'translateY(-5px)';
      });

      setTimeout(() => {
        updateContent(newLang);
        allTextElements.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      }, 150);

      // Announce language change
      const statusEl = document.getElementById('nav-status');
      if (statusEl) {
        const langName = newLang === 'es' ? 'Español' : 'English';
        statusEl.textContent = `Language changed to ${langName}`;
      }
    };

    languageToggle.addEventListener('click', handleLanguageToggle);
    languageToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleLanguageToggle();
      }
    });
  }

  // Initialize content on page load
  updateContent(savedLang);
});

// Add status element for screen reader announcements
const statusElement = document.createElement('div');
statusElement.id = 'nav-status';
statusElement.className = 'sr-only';
statusElement.setAttribute('role', 'status');
statusElement.setAttribute('aria-live', 'polite');
document.body.appendChild(statusElement);
