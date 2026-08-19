/**
 * Interactive DevOps & Cloud Terminal CLI
 * Fares METIDJI Portfolio
 */

(function () {
  const terminalBody = document.getElementById("terminal-output");
  const terminalInput = document.getElementById("terminal-input");
  const terminalForm = document.getElementById("terminal-form");
  const commandChips = document.querySelectorAll(".terminal-chip");

  if (!terminalBody || !terminalInput || !terminalForm) return;

  let commandHistory = [];
  let historyIndex = -1;

  const COMMANDS = {
    help: {
      desc: "Affiche la liste des commandes disponibles",
      exec: () => {
        const lang = window.currentLang || "fr";
        return lang === "fr"
          ? `
<span class="term-cyan">COMMANDES DISPONIBLES :</span>
  <span class="term-green">help</span>            - Affiche ce menu d'aide
  <span class="term-green">whoami</span>          - Présentation rapide et identité technique
  <span class="term-green">skills</span>          - Matrice complète des compétences & stack
  <span class="term-green">projects</span>        - Liste des réalisations & études de cas
  <span class="term-green">deploy --prod</span>   - Simulation d'un déploiement CI/CD Zero-Downtime
  <span class="term-green">status</span>          - État des services et télémétrie système
  <span class="term-green">hire</span>            - Modalités de collaboration Freelance / Régie
  <span class="term-green">cat cv.txt</span>      - Résumé du CV (Formations, Postes, Certifs)
  <span class="term-green">contact</span>         - Coordonnées directes & lien vers le formulaire
  <span class="term-green">clear</span>           - Nettoie l'écran du terminal
`
          : `
<span class="term-cyan">AVAILABLE COMMANDS:</span>
  <span class="term-green">help</span>            - Display this help menu
  <span class="term-green">whoami</span>          - Brief background and engineering identity
  <span class="term-green">skills</span>          - Full technical skills matrix & stack
  <span class="term-green">projects</span>        - List of featured case studies & projects
  <span class="term-green">deploy --prod</span>   - Simulate a Zero-Downtime CI/CD container rollout
  <span class="term-green">status</span>          - System status telemetry & healthcheck
  <span class="term-green">hire</span>            - Freelance & contract engagement details
  <span class="term-green">cat cv.txt</span>      - Display concise text resume & degrees
  <span class="term-green">contact</span>         - Direct contact info & jump to contact form
  <span class="term-green">clear</span>           - Clear terminal buffer
`;
      }
    },

    whoami: {
      desc: "Présentation de Fares",
      exec: () => {
        const lang = window.currentLang || "fr";
        return lang === "fr"
          ? `
<span class="term-bold term-cyan">Fares METIDJI</span> | Ingénieur DevOps & Développeur Full-Stack Cloud
----------------------------------------------------------------------
• <span class="term-yellow">Expérience :</span> 5+ ans en intégration applicative, MCO et cloud
• <span class="term-yellow">Entreprises :</span> Conseil départemental des Yvelines, Publicis Groupe, Vocalcom, Orange
• <span class="term-yellow">Formation :</span> Master 2 Informatique & Ingénierie des Systèmes (CY Cergy Paris Université)
• <span class="term-yellow">Positionnement :</span> Développement Full-Stack (React, TypeScript, Python, FastAPI) + DevOps (Docker, K8s, CI/CD, AWS)
• <span class="term-cyan">Modalités :</span> Full Remote & Déplacements ponctuels (Forfait ou Régie)
`
          : `
<span class="term-bold term-cyan">Fares METIDJI</span> | DevOps Engineer & Full-Stack Cloud Developer
----------------------------------------------------------------------
• <span class="term-yellow">Experience:</span> 5+ years in application integration, production MCO & cloud architecture
• <span class="term-yellow">Companies:</span> Conseil départemental des Yvelines, Publicis Groupe, Vocalcom, Orange
• <span class="term-yellow">Education:</span> Master's Degree in Computer Science & Complex Systems (CY Cergy Paris University)
• <span class="term-yellow">Core Focus:</span> Full-Stack Web/Mobile (React, TypeScript, Python, FastAPI) + Cloud DevOps (Docker, K8s, CI/CD, AWS)
• <span class="term-cyan">Mobility:</span> Full Remote & Occasional Travel (Fixed-Price or Daily Rate)
`;
      }
    },

    skills: {
      desc: "Affiche les compétences",
      exec: () => {
        return `
<span class="term-cyan">┌───────────────────────┬───────────────────────────────────────────────┐</span>
<span class="term-cyan">│ DOMAINE               │ TECHNOLOGIES & OUTILS MAÎTRISÉS               │</span>
<span class="term-cyan">├───────────────────────┼───────────────────────────────────────────────┤</span>
│ <span class="term-yellow">Cloud & DevOps</span>        │ Docker, Kubernetes, GitLab CI, Jenkins, AWS, │
│                       │ Ansible, ArgoCD, Traefik, Linux (RHEL/Debian) │
├───────────────────────┼───────────────────────────────────────────────┤
│ <span class="term-yellow">Backend & APIs</span>        │ Python (FastAPI/Flask), TypeScript (Fastify,  │
│                       │ Node.js), RESTful APIs, AsyncIO, Webhooks     │
├───────────────────────┼───────────────────────────────────────────────┤
│ <span class="term-yellow">Frontend & Mobile</span>     │ React, TypeScript, React Native (Expo), Redux,│
│                       │ HTML5, Modern CSS3/Glassmorphism, Tailwind    │
├───────────────────────┼───────────────────────────────────────────────┤
│ <span class="term-yellow">Bases & Caching</span>       │ PostgreSQL, MariaDB, Oracle Database, MySQL,  │
│                       │ Redis / Dragonfly, SQLite, Drizzle ORM        │
├───────────────────────┼───────────────────────────────────────────────┤
│ <span class="term-yellow">Monitoring & Observ.</span>  │ Prometheus, Grafana, Nagios, PRTG, SolarWinds,│
│                       │ Troubleshooting N3, Incident Management       │
<span class="term-cyan">└───────────────────────┴───────────────────────────────────────────────┘</span>
`;
      }
    },

    projects: {
      desc: "Liste des projets",
      exec: () => {
        const lang = window.currentLang || "fr";
        return lang === "fr"
          ? `
<span class="term-cyan">RÉALISATIONS MAJEURES (Consultez la section Réalisations pour les détails) :</span>

1. <span class="term-green">RemoteRadar AI</span> [Full-Stack SaaS / IA]
   - Scraping 30+ sources, scoring IA Gemini Pro, génération CV PDF temps réel.
   - <em>Stack: FastAPI, Python, Docker, AsyncIO, Webhooks</em>

2. <span class="term-green">ScanCraft / NutriSense</span> [Mobile Offline-First / Cloud API]
   - Scanner mobile ML Kit, architecture offline-first SQLite, Fastify + PostgreSQL + Redis.
   - <em>Stack: React Native, Expo, TypeScript, Drizzle, Redis, Docker</em>

3. <span class="term-green">PortaPulse Monitor</span> [DevOps / IoT / Microservices]
   - Surveillance de stock multi-boutiques, webhooks Discord/Telegram, cluster Raspberry Pi.
   - <em>Stack: Python, Traefik, Docker Compose, Linux, Glassmorphism UI</em>

4. <span class="term-green">MediaFlow Engine</span> [Automatisation & Batch Processing]
   - Pipeline de génération et compositing vidéo multi-pistes automatisé.
   - <em>Stack: Python, FFmpeg, MoviePy, Pillow, Audio DSP</em>

5. <span class="term-green">DataInsight ETL</span> [Data Engineering & Parsing PDF]
   - Ingestion et extraction de 50,000+ publications officielles complexes vers PostgreSQL.
   - <em>Stack: Python, pdfminer.six, pdfrw, PostgreSQL, Regex Engine</em>

6. <span class="term-green">Infrastructure Entreprise & MCO</span> [DevOps Grands Comptes]
   - 150+ applications déployées et supervisées en haute disponibilité.
   - <em>Stack: Kubernetes, GitLab CI, Ansible, Prometheus, Grafana</em>
`
          : `
<span class="term-cyan">FEATURED CASE STUDIES (Scroll down to Projects section for interactive view):</span>

1. <span class="term-green">RemoteRadar AI</span> [Full-Stack SaaS / AI]
   - Multi-source scraper (30+ platforms), Gemini Pro AI scoring, real-time PDF CV engine.
   - <em>Stack: FastAPI, Python, Docker, AsyncIO, Webhooks</em>

2. <span class="term-green">ScanCraft / NutriSense</span> [Mobile Offline-First / Cloud API]
   - ML Kit camera scanner, local SQLite offline persistence, Fastify + PostgreSQL + Redis cache.
   - <em>Stack: React Native, Expo, TypeScript, Drizzle, Redis, Docker</em>

3. <span class="term-green">PortaPulse Monitor</span> [DevOps / IoT / Microservices]
   - Real-time stock monitor, multi-channel webhook dispatcher, Raspberry Pi edge cluster.
   - <em>Stack: Python, Traefik, Docker Compose, Linux, Glassmorphism UI</em>

4. <span class="term-green">MediaFlow Engine</span> [Automation & Batch Compositing]
   - Headless automated video orchestration and multi-layer rendering pipeline.
   - <em>Stack: Python, FFmpeg, MoviePy, Pillow, Audio DSP</em>

5. <span class="term-green">DataInsight ETL</span> [Data Engineering & PDF Parser]
   - Automated ingestion of 50,000+ complex public records into normalized PostgreSQL models.
   - <em>Stack: Python, pdfminer.six, pdfrw, PostgreSQL, Regex Engine</em>

6. <span class="term-green">Enterprise DevSecOps & MCO</span> [Enterprise Tier-1 DevOps]
   - 150+ mission-critical applications deployed and maintained with 99.9% uptime SLA.
   - <em>Stack: Kubernetes, GitLab CI, Trivy, Ansible, Prometheus, Grafana</em>
`;
      }
    },

    status: {
      desc: "Statut des services",
      exec: () => {
        return `
<span class="term-cyan">SYSTEM HEALTHCHECK & METRICS :</span>
  [<span class="term-green">OK</span>] Core Engine .......... Running (Node.js & Python 3.12)
  [<span class="term-green">OK</span>] Docker Daemon ........ Active (Containers: 8 running, 0 failed)
  [<span class="term-green">OK</span>] Kubernetes Cluster ... Ready (Nodes: Healthy, Pods: 100% running)
  [<span class="term-green">OK</span>] PostgreSQL & Redis ... Connected (Latency: 0.8ms)
  [<span class="term-green">OK</span>] Traefik Reverse Proxy . HTTPS TLS 1.3 Active (Auto-SSL Valid)
  [<span class="term-green">OK</span>] Production SLA ....... 99.99% Uptime
  [<span class="term-green">OK</span>] Freelance Availability 🟢 Immediate (Capacity: 100%)
`;
      }
    },

    hire: {
      desc: "Recruter Fares",
      exec: () => {
        const lang = window.currentLang || "fr";
        return lang === "fr"
          ? `
<span class="term-bold term-green">COLLABORATION & MODALITÉS D'INTERVENTION :</span>
----------------------------------------------------------------------
• <span class="term-yellow">Types d'engagement :</span> Forfait clé en main (Sprint MVP / CI-CD) ou Régie (TJM)
• <span class="term-yellow">Facturation :</span> Devis détaillé, contrat clair & facturation conforme
• <span class="term-yellow">Garanties :</span> Code documenté, zéro dette technique, support post-livraison
• <span class="term-yellow">Localisation :</span> Full Remote (France / International) & déplacements ponctuels

👉 Tapez <span class="term-green">contact</span> pour ouvrir le formulaire ou contactez-moi :
   📧 Email : <span class="term-cyan">fares.metidji@outlook.fr</span>
   📱 Téléphone : <span class="term-cyan">+33 7 62 46 83 12</span>
`
          : `
<span class="term-bold term-green">COLLABORATION & ENGAGEMENT MODES :</span>
----------------------------------------------------------------------
• <span class="term-yellow">Contract Types:</span> Fixed-price deliverables (Sprint MVP / CI-CD) or Daily Rate (TJM)
• <span class="term-yellow">Billing:</span> Transparent SOW, corporate invoices & milestones compliance
• <span class="term-yellow">Guarantees:</span> Fully documented code, automated CI/CD, post-delivery warranty
• <span class="term-yellow">Location:</span> Full Remote (Worldwide) & occasional on-site travels in France

👉 Type <span class="term-green">contact</span> to open the inquiry form or reach out directly:
   📧 Email: <span class="term-cyan">fares.metidji@outlook.fr</span>
   📱 Phone: <span class="term-cyan">+33 7 62 46 83 12</span>
`;
      }
    },

    "cat cv.txt": {
      desc: "Affiche le CV",
      exec: () => {
        return `
<span class="term-cyan">======================= CURRICULUM VITAE =======================</span>
<span class="term-bold">FARES METIDJI</span> - Ingénieur DevSecOps & Développeur Full-Stack
Paris, France | fares.metidji@outlook.fr | +33 7 62 46 83 12
LinkedIn: linkedin.com/in/faresmetidji
PDF: <a href="assets/cv/CV_Fares_METIDJI_DevOps.pdf" target="_blank" class="term-cyan" style="text-decoration: underline;">Télécharger CV_Fares_METIDJI_DevOps.pdf 📄</a>

<span class="term-yellow">[EXPÉRIENCES CLÉS]</span>
• 01/2025 - Présent : Ingénieur Intégration & DevOps @ Conseil départemental des Yvelines
• 01/2024 - 01/2025 : Ingénieur Systèmes & Production @ Publicis Groupe
• 09/2021 - 01/2024 : Ingénieur Systèmes Cloud SaaS @ Vocalcom (AWS)
• 09/2019 - 09/2021 : Ingénieur Systèmes & Réseaux VoIP @ Orange

<span class="term-yellow">[FORMATION]</span>
• Master 2 Informatique & Ingénierie des Systèmes (Réseaux & Sécurité) - CY Cergy Paris Univ.
• Licence 3 Informatique - CY Cergy Paris Université

<span class="term-yellow">[LANGUES]</span>
• Français (Bilingue) | Anglais (Fluent) | Arabe (Bilingue)
<span class="term-cyan">================================================================</span>
`;
      }
    },

    contact: {
      desc: "Ouvre la section contact",
      exec: () => {
        setTimeout(() => {
          const contactEl = document.getElementById("contact");
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: "smooth" });
            const nameInput = document.getElementById("contact-name");
            if (nameInput) nameInput.focus();
          }
        }, 400);
        return `<span class="term-green">Redirection vers la section Contact... Préparez votre message !</span>`;
      }
    },

    clear: {
      desc: "Nettoie le terminal",
      exec: () => {
        terminalBody.innerHTML = "";
        return "";
      }
    },

    sudo: {
      desc: "Privilèges root",
      exec: () => {
        return `<span class="term-yellow">👑 Permission accordée : Fares dispose des privilèges root sur l'ensemble de la chaîne Dev + DevOps !</span>`;
      }
    }
  };

  // Async multi-step deploy simulation
  async function runDeploySimulation() {
    printLine("user@fares-devops:~$ deploy --prod", "term-cmd");
    printLine("<span class=\"term-yellow\">🚀 Déclenchement du pipeline CI/CD automatisé vers la production...</span>");

    const steps = [
      "1/5 [CI] Exécution des tests unitaires et intégration (Vitest & PyTest) ... <span class='term-green'>PASSED (100% coverage)</span>",
      "2/5 [BUILD] Compilation de l'image Docker multi-stage & Scan Trivy ... <span class='term-green'>0 Vulnerability</span>",
      "3/5 [REGISTRY] Signature et push de l'image vers le Container Registry ... <span class='term-green'>SUCCESS</span>",
      "4/5 [K8S] Rolling Update du cluster Kubernetes (Zero-Downtime) ... <span class='term-green'>ALL PODS READY</span>",
      "5/5 [HEALTHCHECK] Test HTTP 200 via Traefik Reverse Proxy ... <span class='term-green'>RESPONSE 200 OK (<15ms)</span>"
    ];

    for (let step of steps) {
      await new Promise((r) => setTimeout(r, 450));
      printLine(step);
    }

    printLine("<span class='term-bold term-green'>🎉 Mise en production terminée avec succès ! 0 downtime constaté.</span>");
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function printLine(htmlContent, className = "") {
    if (!htmlContent) return;
    const div = document.createElement("div");
    div.className = `term-line ${className}`;
    div.innerHTML = htmlContent;
    terminalBody.appendChild(div);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function handleCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    if (cmd === "deploy" || cmd === "deploy --prod") {
      runDeploySimulation();
      return;
    }

    printLine(`user@fares-devops:~$ ${escapeHtml(cmd)}`, "term-cmd");

    const lowerCmd = cmd.toLowerCase();
    if (COMMANDS[lowerCmd]) {
      const output = COMMANDS[lowerCmd].exec();
      if (output) printLine(output);
    } else {
      printLine(
        `<span class="term-red">Commande non reconnue : '${escapeHtml(cmd)}'. Tapez '<span class="term-green">help</span>' pour voir les commandes disponibles.</span>`
      );
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[m];
    });
  }

  // Form submission
  terminalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = terminalInput.value;
    terminalInput.value = "";
    handleCommand(val);
  });

  // History navigation with Arrow keys
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex] || "";
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex] || "";
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = terminalInput.value.trim().toLowerCase();
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(current));
      if (match) terminalInput.value = match;
    }
  });

  // Command chips click
  commandChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd") || chip.textContent.trim();
      terminalInput.value = cmd;
      handleCommand(cmd);
      terminalInput.value = "";
    });
  });

  // Focus terminal input when clicking inside terminal window
  const terminalWindow = document.querySelector(".terminal-window");
  if (terminalWindow) {
    terminalWindow.addEventListener("click", () => {
      terminalInput.focus();
    });
  }

  // Initial welcome message
  printLine(
    `<span class="term-cyan">Système DevOps Fares METIDJI [Version 2.5.0]</span>`
  );
  printLine(
    `<span class="term-gray">Tapez '<span class="term-green">help</span>' pour afficher la liste des commandes ou cliquez sur les boutons ci-dessus.</span>`
  );
})();
