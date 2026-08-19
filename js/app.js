/**
 * Main Application Logic & Controller
 * Fares METIDJI Portfolio
 */

(function () {
  // Global State
  window.currentLang = localStorage.getItem("preferred_lang") || "fr";
  let activeFilter = "all";
  let activeModalProject = null;

  // DOM Elements
  const langButtons = document.querySelectorAll(".lang-btn");
  const navbar = document.querySelector(".navbar");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const projectsGrid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const modalBackdrop = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const toastMsg = document.getElementById("toast-notification");
  const backToTopBtn = document.getElementById("back-to-top");
  const contactForm = document.getElementById("contact-form");
  const copyButtons = document.querySelectorAll(".btn-copy");
  const heroRoleText = document.getElementById("hero-role-text");

  /* ==========================================================================
     1. INTERNATIONALIZATION (FR / EN)
     ========================================================================== */
  function applyLanguage(lang) {
    window.currentLang = lang;
    localStorage.setItem("preferred_lang", lang);
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations.fr;

    // Update document title & meta tags
    document.title = dict.meta_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta_desc);

    // Update text in elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update switcher active states
    langButtons.forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Re-render project cards in the new language
    renderProjects();

    // If modal is open, re-render modal
    if (activeModalProject) {
      openModal(activeModalProject);
    }

    // Reset Typewriter immediately for new language
    if (typeof restartTypewriter === "function") {
      restartTypewriter();
    }
  }

  // Language Switcher Events
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang !== window.currentLang) {
        applyLanguage(selectedLang);
      }
    });
  });

  /* ==========================================================================
     2. DYNAMIC HERO TYPEWRITER ANIMATION
     ========================================================================== */
  let typeIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimer = null;

  function typeWriter() {
    if (!heroRoleText) return;
    const dict = translations[window.currentLang] || translations.fr;
    const roles = dict.hero_roles;
    const currentRole = roles[typeIndex % roles.length];

    if (isDeleting) {
      charIndex--;
      heroRoleText.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      heroRoleText.textContent = currentRole.substring(0, charIndex);
    }

    let speed = isDeleting ? 30 : 65;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typeIndex++;
      speed = 400; // Pause before typing next
    }

    typeTimer = setTimeout(typeWriter, speed);
  }

  function restartTypewriter() {
    clearTimeout(typeTimer);
    charIndex = 0;
    isDeleting = false;
    typeWriter();
  }

  /* ==========================================================================
     3. PROJECTS RENDERING & FILTERING
     ========================================================================== */
  function renderProjects() {
    if (!projectsGrid || !projectsData) return;
    const lang = window.currentLang || "fr";
    const dict = translations[lang] || translations.fr;

    projectsGrid.innerHTML = "";

    const filtered = projectsData.filter((p) => {
      if (activeFilter === "all") return true;
      return p.category === activeFilter || (p.categories && p.categories.includes(activeFilter));
    });

    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card glass-panel reveal-init";
      card.setAttribute("data-id", p.id);

      const title = p.title[lang] || p.title.fr;
      const subtitle = p.subtitle[lang] || p.subtitle.fr;
      const metricsList = p.metrics[lang] || p.metrics.fr;

      let badgesHtml = p.badges
        .map((b) => `<span class="tech-badge">${b}</span>`)
        .join("");

      let metricsHtml = metricsList
        .slice(0, 2)
        .map(
          (m) => `
          <div class="metric-box">
            <span class="metric-val">${m.value}</span>
            <span class="metric-lbl">${m.label}</span>
          </div>`
        )
        .join("");

      card.innerHTML = `
        <div class="project-img-wrap">
          <img src="${p.image}" alt="${title}" loading="lazy" />
        </div>
        <div class="project-body">
          <div class="project-badges">${badgesHtml}</div>
          <h3 class="project-title">${title}</h3>
          <p class="project-desc">${subtitle}</p>
          <div class="project-metrics-row">${metricsHtml}</div>
          <div class="project-footer-actions">
            <button class="btn btn-outline btn-sm btn-view-arch" data-id="${p.id}">
              <span>⚙️ ${dict.projects_btn_arch}</span>
            </button>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <span>🐙 ${dict.projects_btn_github}</span>
            </a>
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Attach click listener to Architecture buttons
    document.querySelectorAll(".btn-view-arch").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = btn.getAttribute("data-id");
        const found = projectsData.find((proj) => proj.id === id);
        if (found) openModal(found);
      });
    });

    // Trigger reveal observer
    initScrollReveal();
  }

  // Filter Pills Event
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      renderProjects();
    });
  });

  /* ==========================================================================
     4. ARCHITECTURE MODAL
     ========================================================================== */
  function openModal(project) {
    activeModalProject = project;
    const lang = window.currentLang || "fr";
    const dict = translations[lang] || translations.fr;
    const arch = project.architecture[lang] || project.architecture.fr;

    const titleEl = document.getElementById("modal-project-title");
    const problemEl = document.getElementById("modal-project-problem");
    const solutionEl = document.getElementById("modal-project-solution");
    const stackEl = document.getElementById("modal-project-stack");
    const diagramEl = document.getElementById("modal-project-diagram");

    if (titleEl) titleEl.textContent = project.title[lang] || project.title.fr;
    if (problemEl) problemEl.textContent = arch.problem;
    if (solutionEl) solutionEl.textContent = arch.solution;

    if (stackEl) {
      stackEl.innerHTML = arch.stack
        .map((s) => `<span class="tech-badge">${s}</span>`)
        .join("");
    }

    if (diagramEl) {
      diagramEl.textContent = arch.diagram.trim();
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal() {
    activeModalProject = null;
    if (modalBackdrop) {
      modalBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("active")) {
      closeModal();
    }
  });

  /* ==========================================================================
     5. TOAST NOTIFICATION & CLIPBOARD UTILS
     ========================================================================== */
  function showToast(text) {
    if (!toastMsg) return;
    toastMsg.textContent = text;
    toastMsg.classList.add("show");
    setTimeout(() => {
      toastMsg.classList.remove("show");
    }, 3000);
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const lang = window.currentLang || "fr";
        const msg = (translations[lang] || translations.fr).toast_copied;
        showToast(msg);
      });
    });
  });

  /* ==========================================================================
     6. CLIENT FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
        faqItems.forEach((f) => f.classList.remove("active"));
        if (!isOpen) {
          item.classList.add("active");
        }
      });
    }
  });

  /* ==========================================================================
     7. CONTACT FORM SUBMISSION
     ========================================================================== */
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = window.currentLang || "fr";
      const dict = translations[lang] || translations.fr;

      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const service = document.getElementById("contact-service").value;
      const budget = document.getElementById("contact-budget").value;
      const message = document.getElementById("contact-message").value;

      const mailtoLink = `mailto:fares.metidji@outlook.fr?subject=${encodeURIComponent(
        `[Mission Freelance] Demande de ${name} (${service})`
      )}&body=${encodeURIComponent(
        `Nom / Entreprise : ${name}\nEmail : ${email}\nPrestation : ${service}\nBudget indicatif : ${budget}\n\nMessage :\n${message}`
      )}`;

      window.open(mailtoLink, "_blank");
      showToast(dict.contact_form_success);
      contactForm.reset();
    });
  }

  /* ==========================================================================
     8. SCROLL EFFECTS & NAVBAR
     ========================================================================== */
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Sticky navbar glass styling
    if (navbar) {
      if (scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 500) backToTopBtn.classList.add("show");
      else backToTopBtn.classList.remove("show");
    }

    // Active link highlighting
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile drawer toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
      });
    });
  }

  /* ==========================================================================
     9. SCROLL REVEAL OBSERVER
     ========================================================================== */
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-init").forEach((el) => observer.observe(el));
  }

  /* ==========================================================================
     INITIALIZATION
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(window.currentLang);
    typeWriter();
    initScrollReveal();
  });
})();
