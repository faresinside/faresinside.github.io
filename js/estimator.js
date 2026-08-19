/**
 * Interactive Freelance Project & Budget Estimator
 * Fares METIDJI Portfolio
 */

(function () {
  const form = document.getElementById("estimator-form");
  if (!form) return;

  const resultTimeline = document.getElementById("est-result-timeline");
  const resultBudget = document.getElementById("est-result-budget");
  const resultArch = document.getElementById("est-result-arch");
  const btnSendToContact = document.getElementById("est-btn-send");

  // Config matrices
  const BASE_CONFIGS = {
    saas: {
      mvp: { days: 10, budgetMin: 2200, budgetMax: 3500, archFr: "React / Vite + FastAPI (Python) + PostgreSQL + Docker Compose", archEn: "React / Vite + FastAPI (Python) + PostgreSQL + Docker Compose" },
      standard: { days: 20, budgetMin: 4200, budgetMax: 6800, archFr: "Next.js / React TS + Fastify / FastAPI + PostgreSQL + Redis + Docker + CI/CD", archEn: "Next.js / React TS + Fastify / FastAPI + PostgreSQL + Redis + Docker + CI/CD" },
      scale: { days: 40, budgetMin: 8500, budgetMax: 14000, archFr: "Microservices (FastAPI/Node) + React TS + Kubernetes + PostgreSQL Cluster + Redis + Prometheus", archEn: "Microservices (FastAPI/Node) + React TS + Kubernetes + PostgreSQL Cluster + Redis + Prometheus" }
    },
    devops: {
      mvp: { days: 5, budgetMin: 1200, budgetMax: 2000, archFr: "Dockerisation complète + Pipeline GitLab CI / GitHub Actions + Auto-Deploy VPS", archEn: "Complete Dockerization + GitLab CI / GitHub Actions + Auto VPS Deploy" },
      standard: { days: 12, budgetMin: 2800, budgetMax: 4500, archFr: "Kubernetes (K8s) / Docker Swarm + Traefik Reverse Proxy (SSL) + Ansible + CI/CD", archEn: "Kubernetes / Docker Swarm + Traefik Reverse Proxy (SSL) + Ansible + CI/CD" },
      scale: { days: 25, budgetMin: 5500, budgetMax: 9500, archFr: "Infrastructure as Code (Terraform) + AWS / Azure Multi-Zone + K8s + Grafana Stack", archEn: "Infrastructure as Code (Terraform) + Multi-Region Cloud + K8s + Grafana Stack" }
    },
    scraping: {
      mvp: { days: 6, budgetMin: 1400, budgetMax: 2400, archFr: "Python AsyncIO / Playwright + SQLite + Webhooks Discord/Telegram + Cron Docker", archEn: "Python AsyncIO / Playwright + SQLite + Webhooks Discord/Telegram + Cron Docker" },
      standard: { days: 14, budgetMin: 3000, budgetMax: 5000, archFr: "Scraper Distribué Multi-Sources + Détection Anti-Bot + Gemini AI LLM + Fastify API", archEn: "Distributed Multi-Source Scraper + Anti-Bot Bypasses + Gemini AI LLM + Fastify API" },
      scale: { days: 30, budgetMin: 6500, budgetMax: 11000, archFr: "Pipeline ETL Haute Volumétrie + Queue Celery / Redis + PostgreSQL Lake + Dashboard Web", archEn: "High-Volume ETL Pipeline + Celery / Redis Queue + PostgreSQL Lake + Web Dashboard" }
    },
    mobile: {
      mvp: { days: 12, budgetMin: 2600, budgetMax: 4200, archFr: "React Native (Expo) + Stockage Local SQLite (Offline-First) + REST API", archEn: "React Native (Expo) + Local SQLite Storage (Offline-First) + REST API" },
      standard: { days: 22, budgetMin: 4800, budgetMax: 7800, archFr: "React Native Expo + ML Kit Vision / Caméra + Fastify Backend + PostgreSQL + Redis", archEn: "React Native Expo + ML Kit Vision / Camera + Fastify Backend + PostgreSQL + Redis" },
      scale: { days: 45, budgetMin: 9500, budgetMax: 16000, archFr: "Application Mobile Cross-Platform + Sync Temps Réel WebSockets + In-App Subscriptions", archEn: "Cross-Platform Mobile App + Real-Time WebSockets Sync + In-App Subscriptions" }
    },
    audit: {
      mvp: { days: 4, budgetMin: 950, budgetMax: 1600, archFr: "Audit de Sécurité Serveur + Optimisation Docker & Reverse Proxy + Rapport d'Action", archEn: "Server Security Audit + Docker & Reverse Proxy Optimization + Action Plan" },
      standard: { days: 8, budgetMin: 1900, budgetMax: 3200, archFr: "Audit de Performance & Latence + Setup Prometheus / Grafana + Résolution N3", archEn: "Performance & Latency Audit + Prometheus / Grafana Telemetry + N3 Triage" },
      scale: { days: 18, budgetMin: 4200, budgetMax: 7000, archFr: "Refonte Complète Résilience MCO + Disaster Recovery Plan + Formation Équipes", archEn: "Full MCO Resilience Refactor + Disaster Recovery Plan + Team Enablement" }
    }
  };

  const ADDONS = {
    auth: { days: 2, price: 350, labelFr: "Authentification JWT / OAuth", labelEn: "JWT / OAuth Auth" },
    payment: { days: 3, price: 450, labelFr: "Paiement Stripe / In-App", labelEn: "Stripe / In-App Payments" },
    cicd: { days: 2, price: 400, labelFr: "Pipeline CI/CD Automatisé", labelEn: "Automated CI/CD Pipeline" },
    monitoring: { days: 2, price: 350, labelFr: "Observabilité Prometheus/Grafana", labelEn: "Prometheus/Grafana Metrics" },
    ai: { days: 3, price: 600, labelFr: "Intégration IA / LLM (Gemini/OpenAI)", labelEn: "AI / LLM Integration" }
  };

  function calculate() {
    const lang = window.currentLang || "fr";

    const typeRadio = form.querySelector('input[name="project_type"]:checked');
    const compRadio = form.querySelector('input[name="complexity"]:checked');
    const urgRadio = form.querySelector('input[name="urgency"]:checked');
    const optCheckboxes = form.querySelectorAll('input[name="options"]:checked');

    const projectType = typeRadio ? typeRadio.value : "saas";
    const complexity = compRadio ? compRadio.value : "standard";
    const urgency = urgRadio ? urgRadio.value : "normal";

    const base = (BASE_CONFIGS[projectType] && BASE_CONFIGS[projectType][complexity])
      ? BASE_CONFIGS[projectType][complexity]
      : BASE_CONFIGS.saas.standard;

    let totalDays = base.days;
    let minPrice = base.budgetMin;
    let maxPrice = base.budgetMax;
    let activeAddons = [];

    optCheckboxes.forEach((cb) => {
      const addon = ADDONS[cb.value];
      if (addon) {
        totalDays += addon.days;
        minPrice += addon.price;
        maxPrice += addon.price * 1.3;
        activeAddons.push(lang === "fr" ? addon.labelFr : addon.labelEn);
      }
    });

    if (urgency === "fast") {
      minPrice = Math.round(minPrice * 1.2);
      maxPrice = Math.round(maxPrice * 1.2);
    }

    // Format output
    let timelineStr = "";
    if (totalDays <= 7) {
      timelineStr = lang === "fr" ? `~${totalDays} jours ouvrés (Sprint Rapide)` : `~${totalDays} business days (Fast Sprint)`;
    } else if (totalDays <= 15) {
      timelineStr = lang === "fr" ? `2 à 3 semaines` : `2 to 3 weeks`;
    } else if (totalDays <= 30) {
      timelineStr = lang === "fr" ? `3 à 5 semaines` : `3 to 5 weeks`;
    } else {
      timelineStr = lang === "fr" ? `6 à 8 semaines+` : `6 to 8 weeks+`;
    }

    const budgetStr = `${minPrice.toLocaleString()} € – ${Math.round(maxPrice).toLocaleString()} € <span class="est-tjm-hint">(${lang === "fr" ? "ou TJM indicatif ~400€-500€/j" : "or indicative daily rate ~400€-500€/day"})</span>`;
    const archStr = lang === "fr" ? base.archFr : base.archEn;

    if (resultTimeline) resultTimeline.innerHTML = timelineStr;
    if (resultBudget) resultBudget.innerHTML = budgetStr;
    if (resultArch) resultArch.innerHTML = archStr;

    return {
      projectType,
      complexity,
      urgency,
      timelineStr,
      budgetStr: `${minPrice.toLocaleString()} € - ${Math.round(maxPrice).toLocaleString()} €`,
      archStr,
      activeAddons
    };
  }

  // Event listeners on form inputs
  form.addEventListener("change", calculate);

  // Transfer estimate to contact form
  if (btnSendToContact) {
    btnSendToContact.addEventListener("click", () => {
      const data = calculate();
      const lang = window.currentLang || "fr";

      const contactSection = document.getElementById("contact");
      const serviceSelect = document.getElementById("contact-service");
      const budgetInput = document.getElementById("contact-budget");
      const messageTextarea = document.getElementById("contact-message");

      if (serviceSelect) {
        if (data.projectType === "saas") serviceSelect.value = "dev";
        else if (data.projectType === "devops" || data.projectType === "audit") serviceSelect.value = "ops";
        else if (data.projectType === "scraping") serviceSelect.value = "auto";
        else serviceSelect.value = "other";
      }

      if (budgetInput) {
        budgetInput.value = data.budgetStr;
      }

      if (messageTextarea) {
        const prepMsg = lang === "fr"
          ? `Bonjour Fares,\n\nJe souhaite discuter du projet suivant :\n- Type : ${data.projectType.toUpperCase()} (${data.complexity.toUpperCase()})\n- Délai estimé : ${data.timelineStr}\n- Budget estimé : ${data.budgetStr}\n- Architecture suggérée : ${data.archStr}\n- Modules : ${data.activeAddons.join(", ") || "Aucun module additionnel"}\n\nVoici les détails complémentaires de notre besoin : `
          : `Hello Fares,\n\nI would like to discuss the following project:\n- Scope: ${data.projectType.toUpperCase()} (${data.complexity.toUpperCase()})\n- Estimated timeline: ${data.timelineStr}\n- Estimated budget: ${data.budgetStr}\n- Suggested Architecture: ${data.archStr}\n- Add-ons: ${data.activeAddons.join(", ") || "None"}\n\nHere are additional details regarding our project: `;

        messageTextarea.value = prepMsg;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        if (messageTextarea) messageTextarea.focus();
      }
    });
  }

  // Initial calculation
  calculate();
  window.recalculateEstimator = calculate;
})();
