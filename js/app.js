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

    // Update aria-labels with data-i18n-aria
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key]) {
        el.setAttribute("aria-label", dict[key]);
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
      openModal(activeModalProject, lastFocusedTrigger);
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
     THEME MANAGEMENT (DARK / LIGHT NORMAL MODE)
     ========================================================================== */
  const themeToggleBtn = document.getElementById("theme-toggle");
  let currentTheme = localStorage.getItem("preferred_theme") || "dark";

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("preferred_theme", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
    if (themeToggleBtn) themeToggleBtn.textContent = theme === "light" ? "🌙" : "☀️";
  }

  // Init theme immediately
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
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
          <img src="${p.image}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='assets/images/project-devops.svg';" />
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
            ${p.isPublicRepo ? `
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <span>🐙 ${dict.projects_btn_github}</span>
            </a>` : ""}
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
        if (found) openModal(found, btn);
      });
    });

    // Observe the freshly created cards only; the shared observer already
    // watches every other .reveal-init element on the page.
    observeReveal(projectsGrid);
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
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderArchNode(node) {
    const title = `<div class="arch-node-title">${escapeHtml(node.title)}</div>`;
    const body = node.items
      ? `<ul class="arch-node-items">${node.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`
      : node.desc
      ? `<p class="arch-node-desc">${escapeHtml(node.desc)}</p>`
      : "";
    return `<div class="arch-node">${title}${body}</div>`;
  }

  function renderArchArrow(label) {
    return `<div class="arch-arrow"><span class="arch-arrow-line"></span>${
      label ? `<span class="arch-arrow-label">${escapeHtml(label)}</span>` : ""
    }<span class="arch-arrow-icon">▼</span></div>`;
  }

  function buildArchDiagram(flow) {
    return flow
      .map((step, i) => {
        const arrow = i > 0 ? renderArchArrow(step.edgeLabel) : "";
        if (step.branch) {
          return `${arrow}<div class="arch-branch-row">${step.branch
            .map((n) => renderArchNode(n))
            .join("")}</div>`;
        }
        return `${arrow}${renderArchNode(step)}`;
      })
      .join("");
  }

  let lastFocusedTrigger = null;

  function getFocusableElements(container) {
    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function openModal(project, triggerEl) {
    activeModalProject = project;
    lastFocusedTrigger = triggerEl || document.activeElement;
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
      diagramEl.innerHTML = buildArchDiagram(arch.flow || []);
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
      if (modalCloseBtn) modalCloseBtn.focus();
    }
  }

  function closeModal() {
    activeModalProject = null;
    if (modalBackdrop) {
      modalBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
    lastFocusedTrigger = null;
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
      return;
    }
    if (e.key === "Tab" && modalBackdrop && modalBackdrop.classList.contains("active")) {
      const modalWindow = modalBackdrop.querySelector(".modal-window");
      const focusable = modalWindow ? getFocusableElements(modalWindow) : [];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
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
      const message = document.getElementById("contact-message").value;

      const mailtoLink = `mailto:fares.metidji@outlook.fr?subject=${encodeURIComponent(
        `[Mission Freelance] Demande de ${name} (${service})`
      )}&body=${encodeURIComponent(
        `Nom / Entreprise : ${name}\nEmail : ${email}\nPrestation : ${service}\n\nMessage :\n${message}`
      )}`;

      window.location.href = mailtoLink;
      showToast(dict.contact_form_success);
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
    function closeMobileMenu() {
      navLinksContainer.classList.remove("open");
      mobileToggle.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navLinksContainer.classList.toggle("open");
      mobileToggle.classList.toggle("open", isOpen);
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close menu when clicking outside navbar
    document.addEventListener("click", (e) => {
      if (navLinksContainer.classList.contains("open") && !navbar.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Reset drawer state on window resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1140 && navLinksContainer.classList.contains("open")) {
        closeMobileMenu();
      }
    });
  }

  /* ==========================================================================
     8b. IN-PAGE ANCHOR SMOOTH SCROLL
     Native fragment navigation doesn't reliably scroll on this page (body's
     overflow-x rule causes an implicit overflow-y that confuses the browser's
     scroll-to-fragment step), so anchor clicks are handled manually here.
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;
      e.preventDefault();
      const navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const targetY = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      history.pushState(null, "", `#${targetId}`);
    });
  });

  /* ==========================================================================
     9. SCROLL REVEAL OBSERVER
     ========================================================================== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  function observeReveal(root) {
    (root || document).querySelectorAll(".reveal-init").forEach((el) => revealObserver.observe(el));
  }

  /* ==========================================================================
     INITIALIZATION
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(window.currentLang);
    observeReveal();
  });
})();
