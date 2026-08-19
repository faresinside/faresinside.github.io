/**
 * Projects Data - Fares METIDJI Portfolio
 * Professional, sanitized and metrics-driven showcases for High-Value Freelance Contracts
 */

const projectsData = [
  {
    id: "remoteradar-ai",
    category: "fullstack",
    categories: ["fullstack", "ai", "automation"],
    featured: true,
    badges: ["FastAPI", "Python", "Gemini AI", "Docker", "Web Scraping", "Webhooks"],
    metrics: {
      fr: [
        { label: "Sources analysées", value: "30+" },
        { label: "Fréquence de veille", value: "Toutes les 2h" },
        { label: "Génération CV PDF", value: "Temps réel" },
        { label: "Flux automatisé", value: "100%" }
      ],
      en: [
        { label: "Sources Aggregated", value: "30+" },
        { label: "Watch Frequency", value: "Every 2h" },
        { label: "Dynamic PDF CV", value: "Real-Time" },
        { label: "Automated Flow", value: "100%" }
      ]
    },
    title: {
      fr: "RemoteRadar AI — Agrégateur Intelligent & Scoring d'Opportunités par IA",
      en: "RemoteRadar AI — Intelligent Job Aggregator & AI Match Engine"
    },
    subtitle: {
      fr: "Plateforme SaaS complète avec scraping asynchrone, évaluation sémantique LLM, génération dynamique de CV PDF et alertes Webhooks multicanales.",
      en: "End-to-end SaaS platform featuring asynchronous multi-source scraping, LLM semantic scoring, dynamic PDF generation, and multi-channel webhook alerts."
    },
    summary: {
      fr: "Système automatisé complet de veille de marché et d'analyse d'offres. Il interroge plus de 30 plateformes et ATS, extrait les données structurées, évalue la pertinence technique via LLM (Gemini Pro), génère des dossiers de candidature sur-mesure (PDF/HTML) et envoie des notifications instantanées.",
      en: "Comprehensive automated market intelligence and job matching platform. Queries 30+ job boards and ATS platforms, parses structured data, evaluates semantic match using Gemini Pro LLM, compiles tailored PDF application kits, and dispatches real-time alerts."
    },
    architecture: {
      fr: {
        problem: "Les opportunités freelance et contrats à fort TJM partent en moins d'une heure. La veille manuelle sur des dizaines de plateformes est chronophage et inefficace.",
        solution: "Création d'un moteur asynchrone Python FastAPI avec workers périodiques (toutes les 2h), analyse sémantique par IA, moteur de rendu PDF Weasyprint/HTML et tableau de bord de suivi Kanban.",
        stack: ["FastAPI (Python 3.12)", "Google Gemini Pro API", "AsyncIO / Aiohttp", "SQLite / PostgreSQL", "Weasyprint & Jinja2 (Moteur CV)", "Webhooks Discord / Telegram", "Docker & Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|                     SOURCES & SCRAPERS                      |
|  (30+ Plateformes, ATS Boards, Greenhouse, Lever, etc.)     |
+------------------------------+------------------------------+
                               | (Async Polling - 2h Interval)
                               v
+-------------------------------------------------------------+
|               FASTAPI BACKEND & DATA PIPELINE               |
|  - Ingestion, Dédoublonnage & Nettoyage                     |
|  - Moteur de Scoring Sémantique (Google Gemini Pro LLM)     |
|  - Moteur de Synthèse CV PDF & Lettres Sur-Mesure           |
|  - Base de Données Relationnelle (SQLAlchemy ORM)           |
+------------------------------+------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
|   WEB DASHBOARD UI    |             |  DISPATCH WEBHOOKS    |
|   (Kanban / Analytics)|             |  (Telegram / Discord) |
+-----------------------+             +-----------------------+`
      },
      en: {
        problem: "High-value freelance opportunities get filled within hours. Manually browsing dozens of platforms is time-consuming and inefficient.",
        solution: "Built an asynchronous Python FastAPI engine with periodic workers (2h cadence), LLM semantic evaluation, automated custom PDF generation, and an interactive Kanban dashboard.",
        stack: ["FastAPI (Python 3.12)", "Google Gemini Pro API", "AsyncIO / Aiohttp", "SQLite / PostgreSQL", "Weasyprint & Jinja2 (CV Engine)", "Discord / Telegram Webhooks", "Docker & Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|                     SOURCES & SCRAPERS                      |
|  (30+ Job Boards, ATS Platforms, Greenhouse, Lever, etc.)   |
+------------------------------+------------------------------+
                               | (Async Polling - 2h Interval)
                               v
+-------------------------------------------------------------+
|               FASTAPI BACKEND & DATA PIPELINE               |
|  - Ingestion, Deduplication & Normalization                 |
|  - Semantic AI Match Engine (Google Gemini Pro LLM)         |
|  - Dynamic Tailored PDF CV & Proposal Engine                |
|  - Relational Database (SQLAlchemy ORM)                     |
+------------------------------+------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
|   WEB DASHBOARD UI    |             |  WEBHOOK DISPATCH     |
|   (Kanban / Analytics)|             |  (Telegram / Discord) |
+-----------------------+             +-----------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-remoteradar.svg"
  },
  {
    id: "smart-cast-scheduler",
    category: "fullstack",
    categories: ["fullstack", "devops", "automation"],
    featured: true,
    badges: ["FastAPI", "React", "Docker", "APScheduler", "SQLite", "i18n RTL", "Open Source"],
    metrics: {
      fr: [
        { label: "Emplacements calendaires", value: "~10 000" },
        { label: "Déploiement", value: "Docker / Raspberry Pi" },
        { label: "Langues supportées", value: "FR / EN / AR (RTL)" },
        { label: "Licence", value: "Open Source (MIT)" }
      ],
      en: [
        { label: "Calendar Locations", value: "~10,000" },
        { label: "Deployment", value: "Docker / Raspberry Pi" },
        { label: "Supported Languages", value: "FR / EN / AR (RTL)" },
        { label: "License", value: "Open Source (MIT)" }
      ]
    },
    title: {
      fr: "Smart Cast Scheduler — Automatisation Domotique IoT & Diffusion Programmée",
      en: "Smart Cast Scheduler — Scheduled IoT Home Automation & Device Broadcast Engine"
    },
    subtitle: {
      fr: "Application auto-hébergée qui déclenche la diffusion audio sur des appareils connectés (Google Home / Chromecast) à des horaires précis calculés à partir d'un calendrier de données, avec interface web multilingue (FR/EN/AR, support RTL complet).",
      en: "Self-hosted app that triggers audio broadcast on connected devices (Google Home / Chromecast) at precise scheduled times computed from a calendar dataset, with a multilingual web UI (FR/EN/AR, full RTL support)."
    },
    summary: {
      fr: "Projet open source (dépôt GitHub public, licence MIT) : backend FastAPI avec scheduler interne (APScheduler) qui recalcule les horaires du jour au démarrage et déclenche automatiquement la diffusion sur les appareils connectés découverts par mDNS sur le réseau local. Frontend React/Vite servant une interface de configuration complète (sélection parmi ~10 000 emplacements, gestion multi-appareils, calendrier mensuel), 100% auto-hébergée et sans dépendance à une API externe au runtime.",
      en: "Open-source project (public GitHub repo, MIT license): FastAPI backend with an internal scheduler (APScheduler) that recomputes the day's schedule on startup and automatically triggers broadcast on connected devices discovered via mDNS on the local network. React/Vite frontend serving a full configuration UI (location picker across ~10,000 entries, multi-device management, monthly calendar), fully self-hosted with zero runtime dependency on external APIs."
    },
    architecture: {
      fr: {
        problem: "Déclencher fiablement une diffusion audio sur des appareils connectés à des horaires calculés dynamiquement, sans dépendre d'un service cloud tiers au runtime, avec découverte automatique des appareils sur le réseau local — un vrai défi réseau (mDNS derrière Docker) et de robustesse (redémarrages, changements d'horaires).",
        solution: "Backend FastAPI + scheduler interne (APScheduler) qui reprogramme les déclenchements du jour au démarrage ; découverte des appareils connectés par mDNS (conteneur Docker en `network_mode: host`, indispensable car le bridge Docker par défaut bloque la découverte mDNS) et diffusion pilotée en subprocess ; données calendaires 100% statiques et pré-générées (aucun appel réseau au runtime) ; frontend React/Vite multilingue avec support RTL complet.",
        stack: ["FastAPI (Python)", "React & Vite (Frontend)", "APScheduler (Scheduler Interne)", "SQLite", "Docker (network_mode: host + mDNS)", "i18n FR/EN/AR (RTL)", "GitHub Public + Licence MIT"],
        diagram: `
+-------------------------------------------------------------+
|                 SERVEUR AUTO-HÉBERGÉ (Docker)                |
|                                                               |
|  +----------------------+       +------------------------+  |
|  |  FRONTEND REACT/VITE |------>|   BACKEND FASTAPI       |  |
|  |  (Build statique)    |       |   - Config & Réglages   |  |
|  +----------------------+       |   - Données calendaires |  |
|                                  |     statiques (JSON)   |  |
|                                  +-----------+------------+  |
|                                              |                |
|                          +-------------------+------------+  |
|                          |   SCHEDULER (APScheduler)      |  |
|                          |   - Recalcule les horaires du  |  |
|                          |     jour au démarrage          |  |
|                          +-------------------+------------+  |
+------------------------------------------------|-------------+
                                                   | (mDNS + subprocess)
                                                   v
                                   +--------------------------------+
                                   |   APPAREILS CONNECTÉS DU RÉSEAU |
                                   |   (Google Home / Chromecast)    |
                                   +--------------------------------+`
      },
      en: {
        problem: "Reliably trigger audio broadcast on connected devices at dynamically computed schedules, without a runtime dependency on a third-party cloud service, with automatic device discovery on the local network — a real networking challenge (mDNS behind Docker) and a robustness one (restarts, schedule changes).",
        solution: "FastAPI backend + internal scheduler (APScheduler) that recomputes the day's triggers on startup; connected-device discovery via mDNS (Docker container in `network_mode: host`, required since Docker's default bridge network blocks mDNS discovery) and subprocess-driven broadcast; 100% static, pre-generated calendar data (zero network calls at runtime); multilingual React/Vite frontend with full RTL support.",
        stack: ["FastAPI (Python)", "React & Vite (Frontend)", "APScheduler (Internal Scheduler)", "SQLite", "Docker (network_mode: host + mDNS)", "i18n FR/EN/AR (RTL)", "Public GitHub Repo + MIT License"],
        diagram: `
+-------------------------------------------------------------+
|                 SELF-HOSTED SERVER (Docker)                  |
|                                                               |
|  +----------------------+       +------------------------+  |
|  |  REACT/VITE FRONTEND |------>|   FASTAPI BACKEND       |  |
|  |  (Static Build)      |       |   - Config & Settings   |  |
|  +----------------------+       |   - Static calendar     |  |
|                                  |     data (JSON)         |  |
|                                  +-----------+------------+  |
|                                              |                |
|                          +-------------------+------------+  |
|                          |   SCHEDULER (APScheduler)      |  |
|                          |   - Recomputes the day's       |  |
|                          |     triggers on startup        |  |
|                          +-------------------+------------+  |
+------------------------------------------------|-------------+
                                                   | (mDNS + subprocess)
                                                   v
                                   +--------------------------------+
                                   |   CONNECTED DEVICES ON NETWORK  |
                                   |   (Google Home / Chromecast)    |
                                   +--------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-devops.svg"
  },
  {
    id: "scancraft-mobile",
    category: "mobile",
    categories: ["mobile", "fullstack", "ai"],
    featured: true,
    badges: ["React Native", "Expo", "TypeScript", "Fastify", "PostgreSQL", "Drizzle ORM", "Redis", "LLM Classification", "Docker"],
    metrics: {
      fr: [
        { label: "Fonctionne", value: "Même Hors-Ligne" },
        { label: "Résultat produit", value: "Instantané" },
        { label: "Temps réponse cache", value: "<10ms" },
        { label: "Typage de bout en bout", value: "100% Strict" }
      ],
      en: [
        { label: "Works", value: "Even Offline" },
        { label: "Product Result", value: "Instant" },
        { label: "Cache Response Time", value: "<10ms" },
        { label: "End-to-End Typing", value: "100% Strict" }
      ]
    },
    title: {
      fr: "ScanCraft — App Mobile Offline-First de Scan & Analyse de Produits",
      en: "ScanCraft — Offline-First Mobile Product Scanner & Ingredient Intelligence App"
    },
    subtitle: {
      fr: "Application mobile React Native pour scanner un produit (code-barres / OCR) et obtenir instantanément une analyse détaillée de sa composition (additifs, allergènes, certifications) via un pipeline de classification par IA.",
      en: "React Native mobile app that scans a product (barcode / OCR) and instantly returns a detailed composition analysis (additives, allergens, certifications) powered by an AI classification pipeline."
    },
    summary: {
      fr: "Application mobile et API cloud dédiées à la transparence produit : scan instantané par caméra, extraction et classification automatique des ingrédients via un pipeline LLM, et restitution claire du résultat et des certifications associées. Architecture Offline-First pensée pour une disponibilité quasi totale même en zone de faible couverture réseau.",
      en: "Mobile application and cloud API dedicated to product transparency: instant camera scanning, automatic ingredient extraction and classification through an LLM pipeline, and clear result/certification reporting. Offline-First architecture engineered for near-full availability even in low-connectivity retail environments."
    },
    architecture: {
      fr: {
        problem: "Les utilisateurs veulent vérifier la composition d'un produit directement en magasin, où la couverture réseau 4G/5G est souvent mauvaise, tandis que les données d'ingrédients (additifs, allergènes, certifications) sont éparses et hétérogènes.",
        solution: "Architecture mobile Offline-First avec cache local, scan caméra (code-barres + OCR), backend Fastify/PostgreSQL (Drizzle ORM) avec cache Redis pour les lookups produits fréquents, et pipeline de classification des ingrédients par LLM pour normaliser des données hétérogènes en un résultat clair et fiable.",
        stack: ["React Native (Expo)", "TypeScript Strict (Frontend & Backend)", "Fastify Node.js API", "PostgreSQL & Drizzle ORM", "Redis (ioredis) Cache", "Pipeline de Classification d'Ingrédients par LLM", "Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|               MOBILE DEVICE (REACT NATIVE / EXPO)           |
|  - Scanner Caméra (Code-barres / OCR)                        |
|  - Cache Local (Offline-First)                                |
|  - État & Internationalisation (i18n)                        |
+------------------------------+------------------------------+
                               | (Sync / HTTPS REST API)
                               v
+-------------------------------------------------------------+
|                FASTIFY NODE.JS / TYPESCRIPT API             |
|  - Routing & validation typée (Zod / TypeBox)                |
|  - Pipeline de classification d'ingrédients (LLM)            |
+---------------+------------------------------+---------------+
                |                              |
                v                              v
+------------------------------+  +---------------------------+
|      REDIS (IOREDIS) CACHE   |  |   POSTGRESQL + DRIZZLE    |
|      (Hot product Lookups)   |  |   (Master Product Data)   |
+------------------------------+  +---------------------------+`
      },
      en: {
        problem: "Users want to check a product's composition directly in-store, where cell reception is often poor, while ingredient data (additives, allergens, certifications) remains scattered and inconsistent across sources.",
        solution: "Built an Offline-First mobile architecture: local caching, camera-based scanning (barcode + OCR), a Fastify/PostgreSQL backend (Drizzle ORM) backed by Redis caching for frequent product lookups, and an LLM-based ingredient classification pipeline to normalize heterogeneous data into a clear, reliable result.",
        stack: ["React Native (Expo)", "Strict TypeScript (Fullstack)", "Fastify Node.js API", "PostgreSQL 16 & Drizzle ORM", "Redis (ioredis) Cache", "LLM Ingredient Classification Pipeline", "Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|               MOBILE DEVICE (REACT NATIVE / EXPO)           |
|  - Camera Scanner (Barcode / OCR)                            |
|  - Local Cache (Offline-First)                                |
|  - State & Internationalization (i18n)                       |
+------------------------------+------------------------------+
                               | (Sync / HTTPS REST API)
                               v
+-------------------------------------------------------------+
|                FASTIFY NODE.JS / TYPESCRIPT API             |
|  - Typed routing & validation (Zod / TypeBox)                |
|  - LLM Ingredient Classification Pipeline                    |
+---------------+------------------------------+---------------+
                |                              |
                v                              v
+------------------------------+  +---------------------------+
|      REDIS (IOREDIS) CACHE   |  |   POSTGRESQL + DRIZZLE    |
|      (Hot product Lookups)   |  |   (Master Product Data)   |
+------------------------------+  +---------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-scancraft.svg"
  },
  {
    id: "portasplit-monitor",
    category: "devops",
    categories: ["devops", "automation", "backend"],
    featured: true,
    badges: ["Python", "Docker", "Traefik", "Raspberry Pi", "Webhooks", "Glassmorphism UI"],
    metrics: {
      fr: [
        { label: "Cycle de détection", value: "30s" },
        { label: "Fonctionnement", value: "24/7 Autonome" },
        { label: "Diffusion Alertes", value: "<1s" },
        { label: "Interface Web", value: "Glassmorphism" }
      ],
      en: [
        { label: "Detection Cycle", value: "30s" },
        { label: "Operation", value: "24/7 Autonomous" },
        { label: "Alert Dispatch", value: "<1s" },
        { label: "Web Interface", value: "Glassmorphism" }
      ]
    },
    title: {
      fr: "PortaPulse — Microservice de Surveillance de Stocks & Alerting Multicanal",
      en: "PortaPulse — Real-Time Stock Monitor & Multi-Channel Alerting"
    },
    subtitle: {
      fr: "Système de scraping haute fréquence avec alertes multicanales (Discord, Telegram, Ntfy) dès qu'un produit redevient disponible, et dashboard de suivi consultable en HTTPS depuis n'importe quel appareil, auto-hébergé sur Raspberry Pi.",
      en: "High-frequency scraping engine with multi-channel alerts (Discord, Telegram, Ntfy) as soon as a product is back in stock, plus a monitoring dashboard accessible over HTTPS from any device, self-hosted on a Raspberry Pi."
    },
    summary: {
      fr: "Microservice événementiel développé pour surveiller en continu la disponibilité d'un équipement précis auprès de 6+ distributeurs majeurs, avec contournement d'anti-bot, dispatch instantané d'alertes (Discord, Telegram, Ntfy) et dashboard de monitoring en direct.",
      en: "Event-driven microservice engineered to continuously monitor a specific product's availability across 6+ major distributors with anti-bot heuristics, instantaneous multi-channel push alerting (Discord, Telegram, Ntfy), and a real-time web dashboard."
    },
    architecture: {
      fr: {
        problem: "Les ruptures de stock sur des équipements saisonniers sous haute demande nécessitent une réactivité à la seconde sans bloquer les adresses IP par rate-limiting.",
        solution: "Moteur Python léger avec requêtes asynchrones aléatoires, en-têtes dynamiques, gestion de session, diffusion instantanée d'alertes via Webhooks et interface Web sécurisée par Traefik sous domaine dédié.",
        stack: ["Python (Requests / BeautifulSoup4 / Regex)", "Traefik v3 (Reverse Proxy + Let's Encrypt)", "Docker & Docker Compose", "Raspberry Pi Edge Linux Server", "Discord / Telegram / Ntfy Webhooks", "Vanilla CSS Glassmorphism Dashboard"],
        diagram: `
+-------------------------------------------------------------+
|                DISTRIBUTEURS E-COMMERCE (6+)                |
|  (Sites Officiels, Grandes Surfaces Spécialisées, etc.)     |
+------------------------------+------------------------------+
                               ^ (30s Polling Loop + Anti-Bot)
                               |
+-------------------------------------------------------------+
|             RASPBERRY PI / LINUX EDGE CLUSTER               |
|                                                             |
|   +----------------------------------------------------+    |
|   |         DOCKER CONTAINER: MONITORING ENGINE        |    |
|   |  - HTTP Scraping, HTML Parsing & Availability Calc |    |
|   |  - State Machine & Deduplication Lock              |    |
|   |  - Multi-Channel Webhook Dispatcher                |    |
|   +--------------------------+-------------------------+    |
|                              |                              |
|   +--------------------------v-------------------------+    |
|   |         TRAEFIK REVERSE PROXY (HTTPS SSL)          |    |
|   |  - Glassmorphism Web Status Dashboard (Port 443)  |    |
|   +----------------------------------------------------+    |
+------------------------------+------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
|    DISCORD SERVER     |             |    MOBILE PUSH NTFY   |
| (Interactive Embeds)  |             |  (Instant Notification|
+-----------------------+             +-----------------------+`
      },
      en: {
        problem: "High-demand seasonal hardware sells out within seconds, requiring sub-minute detection without triggering anti-scraping rate limits.",
        solution: "Lightweight Python service with randomized asynchronous requests, dynamic headers, session rotation, instant webhook broadcast, and an SSL-secured Glassmorphism dashboard on edge hardware.",
        stack: ["Python (Requests / BeautifulSoup4)", "Traefik v3 (Reverse Proxy + Auto SSL)", "Docker & Docker Compose", "Raspberry Pi Edge Cluster", "Discord / Telegram / Ntfy Webhooks", "Glassmorphism UI"],
        diagram: `
+-------------------------------------------------------------+
|                E-COMMERCE DISTRIBUTORS (6+)                 |
|  (Official Outlets, Specialized Retailers, etc.)             |
+------------------------------+------------------------------+
                               ^ (30s Polling Loop + Anti-Bot)
                               |
+-------------------------------------------------------------+
|             RASPBERRY PI / LINUX EDGE CLUSTER               |
|                                                             |
|   +----------------------------------------------------+    |
|   |         DOCKER CONTAINER: MONITORING ENGINE        |    |
|   |  - HTTP Scraping, HTML Parsing & Availability Calc |    |
|   |  - State Machine & Deduplication Lock              |    |
|   |  - Multi-Channel Webhook Dispatcher                |    |
|   +--------------------------+-------------------------+    |
|                              |                              |
|   +--------------------------v-------------------------+    |
|   |         TRAEFIK REVERSE PROXY (HTTPS SSL)          |    |
|   |  - Glassmorphism Web Status Dashboard (Port 443)  |    |
|   +----------------------------------------------------+    |
+------------------------------+------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
|    DISCORD SERVER     |             |    MOBILE PUSH NTFY   |
| (Interactive Embeds)  |             |  (Instant Notification|
+-----------------------+             +-----------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresinside/stock-monitor-service",
    isPublicRepo: true,
    image: "assets/images/project-portasplit.svg"
  },
  {
    id: "enterprise-devops-infra",
    category: "devops",
    categories: ["devops", "cloud", "backend"],
    featured: true,
    badges: ["DevSecOps", "Kubernetes", "Docker", "GitLab CI", "Trivy Scan", "Ansible", "AWS", "Prometheus", "Grafana"],
    metrics: {
      fr: [
        { label: "Apps en production", value: "150+" },
        { label: "Haute Disponibilité", value: "Multi-Sites" },
        { label: "Support N3 & Sécurité", value: "Expert" },
        { label: "Supervision", value: "24/7" }
      ],
      en: [
        { label: "Production Apps", value: "150+" },
        { label: "High Availability", value: "Multi-Site" },
        { label: "Tier 3 & Security", value: "Expert" },
        { label: "Monitoring", value: "24/7" }
      ]
    },
    title: {
      fr: "DevSecOps, Industrialisation Cloud & Observabilité — 150+ Applications Métier",
      en: "Enterprise DevSecOps & Cloud Observability — 150+ Mission-Critical Apps"
    },
    subtitle: {
      fr: "Industrialisation CI/CD sécurisée (GitLab CI, Trivy, Ansible, Docker, K8s), maintien en condition opérationnelle (MCO) et observabilité Prometheus/Grafana.",
      en: "End-to-end secured CI/CD (GitLab CI, Trivy, Ansible, Docker, Kubernetes), 24/7 high availability, and Prometheus/Grafana observability."
    },
    summary: {
      fr: "Plus de 5 ans d'expérience au service de grands comptes et institutions publiques. Automatisation complète des déploiements, administration de clusters Kubernetes/Docker, durcissement de sécurité (scans de vulnérabilités Trivy/SonarQube), gestion de bases de données et résolution d'incidents critiques N3.",
      en: "Over 5 years of proven enterprise experience supporting Tier-1 clients and public institutions. Led deployment automation, Kubernetes/Docker cluster security hardening (Trivy/SonarQube vulnerability scans), relational database tuning, and N3 incident resolution."
    },
    architecture: {
      fr: {
        problem: "Gérer 150+ applications hétérogènes avec des déploiements manuels risqués, des fenêtres de mise en production complexes et des exigences strictes de sécurité.",
        solution: "Mise en place de pipelines GitLab CI standardisés avec scans de sécurité (Trivy/SAST), playbooks Ansible idempotents, conteneurisation Docker/Kubernetes durcie et supervision unifiée avec Prometheus, Grafana et alertes dynamiques.",
        stack: ["Kubernetes & Docker Compose", "GitLab CI / Jenkins / ArgoCD", "Trivy & SonarQube (Security Scans)", "Ansible Playbooks & Automation", "AWS Cloud & VMware vSphere", "Linux (RHEL, Debian) Hardening", "PostgreSQL, Oracle Database, MariaDB", "Prometheus, Grafana, Nagios, SolarWinds", "Apache Tomcat, Traefik, Nginx"],
        diagram: `
+-------------------------------------------------------------+
|                 DEVELOPMENT & GIT REPOSITORIES              |
|  (GitLab / Git Workflows / Trunk-Based Development)         |
+------------------------------+------------------------------+
                               | (Git Push / Tag Trigger)
                               v
+-------------------------------------------------------------+
|           DEVSECOPS CI/CD AUTOMATION & TESTING PIPELINE     |
|  - GitLab CI / Jenkins Runners: Unit & Integration Tests    |
|  - SAST & Container Vulnerability Scans (Trivy / SonarQube) |
|  - Docker Multi-Stage Image Build & Container Hardening     |
|  - Artifact Packaging & Registry Push                       |
+------------------------------+------------------------------+
                               | (Automated Rollout via Ansible / ArgoCD)
                               v
+-------------------------------------------------------------+
|             HIGH-AVAILABILITY PRODUCTION CLUSTER            |
|  - Kubernetes / Docker Cluster (Zero-Downtime Rolling MEP)  |
|  - Tomcat WAR Servers & Reverse Proxies (Traefik / Nginx)   |
|  - Database Clustering (PostgreSQL / Oracle / MariaDB)      |
+------------------------------+------------------------------+
                               | (Metrics & Logs Ingestion)
                               v
+-------------------------------------------------------------+
|            OBSERVABILITY & INCIDENT MANAGEMENT (N3)         |
|  - Prometheus Time-Series Scrapes & Log Aggregation         |
|  - Grafana Unified Dashboards & Real-Time Alerts            |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Managing 150+ legacy and modern applications with manual, risky deployments, long maintenance windows, and strict compliance/security requirements.",
        solution: "Engineered standardized GitLab CI pipelines with integrated security scanning (Trivy/SAST), paired with idempotent Ansible playbooks, container hardening, zero-downtime rolling updates, and full-stack Prometheus/Grafana telemetry.",
        stack: ["Kubernetes & Docker Compose", "GitLab CI / Jenkins / ArgoCD", "Trivy & SonarQube (Security Scans)", "Ansible Automation", "AWS Cloud & VMware vSphere", "Linux (RHEL, Debian) Hardening", "PostgreSQL, Oracle Database, MariaDB", "Prometheus, Grafana, Nagios, SolarWinds", "Tomcat, Apache HTTP, Traefik"],
        diagram: `
+-------------------------------------------------------------+
|                 DEVELOPMENT & GIT REPOSITORIES              |
|  (GitLab / Git Workflows / Feature Branches)                |
+------------------------------+------------------------------+
                               | (Git Push / Tag Trigger)
                               v
+-------------------------------------------------------------+
|           DEVSECOPS CI/CD AUTOMATION & TESTING PIPELINE     |
|  - GitLab CI / Jenkins Runners: Automated Tests & Builds    |
|  - SAST & Container Vulnerability Scanning (Trivy)          |
|  - Docker Container Security & Base Image Hardening         |
|  - Artifact Packaging & Container Registry Dispatch         |
+------------------------------+------------------------------+
                               | (Automated Rollout via Ansible / ArgoCD)
                               v
+-------------------------------------------------------------+
|             HIGH-AVAILABILITY PRODUCTION CLUSTER            |
|  - Kubernetes / Docker Environments (Rolling Deployments)   |
|  - Application Servers (Tomcat WAR, IIS, Traefik)           |
|  - Clustered Databases (PostgreSQL / Oracle / MariaDB)      |
+------------------------------+------------------------------+
                               | (Metrics & Logs Ingestion)
                               v
+-------------------------------------------------------------+
|            OBSERVABILITY & INCIDENT MANAGEMENT (N3)         |
|  - Prometheus Metrics Exporters & Log Analysis              |
|  - Grafana Centralized Dashboards & Predictive Alerts       |
+-------------------------------------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-devops.svg"
  },
  {
    id: "intrasys-ai-hub",
    category: "ai",
    categories: ["ai", "automation"],
    featured: false,
    badges: ["Python", "Ollama", "LLM Local", "Automatisation", "Confidentialité"],
    metrics: {
      fr: [
        { label: "Confidentialité données", value: "100% Local" },
        { label: "Coût d'inférence", value: "Zéro API Cloud" },
        { label: "Cas d'usage", value: "Matching & Rédaction" },
        { label: "Intégration", value: "CLI & Dashboard Web" }
      ],
      en: [
        { label: "Data Privacy", value: "100% Local" },
        { label: "Inference Cost", value: "Zero Cloud API" },
        { label: "Use Case", value: "Matching & Drafting" },
        { label: "Integration", value: "CLI & Web Dashboard" }
      ]
    },
    title: {
      fr: "Assistant IA Local — Analyse de Candidatures & Rédaction Assistée (Ollama)",
      en: "Local AI Assistant — Application Analysis & Drafting Assistant (Ollama)"
    },
    subtitle: {
      fr: "Module d'intelligence artificielle 100% local (Ollama) intégré à un outil de veille emploi : évalue la pertinence d'une offre par rapport à un CV, rédige une lettre de motivation et suggère des reformulations, sans jamais envoyer de donnée vers un service cloud.",
      en: "A fully local AI module (Ollama) plugged into a job-search tool: scores a job posting against a CV, drafts a cover letter and suggests rewording — all without ever sending data to a cloud service."
    },
    summary: {
      fr: "Brique d'IA locale conçue pour respecter la confidentialité des données personnelles (CV, lettres de motivation). Utilise un modèle Ollama exécuté en local pour évaluer une offre, générer une lettre de motivation, un message de candidature court et des suggestions de reformulation du CV, directement intégrée dans le tableau de bord d'un outil de veille.",
      en: "A local-first AI building block designed to keep personal data (CV, cover letters) private. Runs an Ollama model locally to evaluate a job posting, draft a cover letter, a short application message and CV rewording suggestions — integrated directly into a job-tracking dashboard."
    },
    architecture: {
      fr: {
        problem: "Les outils IA de candidature basés sur des APIs cloud impliquent d'envoyer son CV et ses données personnelles à des tiers, ce qui pose un problème de confidentialité pour un usage personnel répété.",
        solution: "Intégration d'un modèle Ollama exécuté localement directement dans le flux de veille emploi : évaluation offre/CV, génération de lettre de motivation et de message de candidature, suggestions de reformulation — le tout sans dépendance à un service cloud.",
        stack: ["Python", "Ollama (Inférence LLM Locale)", "Prompt Engineering", "Intégration CLI & Dashboard Web", "SQLite"],
        diagram: `
+-------------------------------------------------------------+
|         OFFRE D'EMPLOI (texte) + CV (Markdown local)         |
+------------------------------+------------------------------+
                               v
+-------------------------------------------------------------+
|              MOTEUR OLLAMA LOCAL (100% On-Device)            |
|  - Évaluation de pertinence offre / profil                  |
|  - Génération lettre de motivation & message court          |
|  - Suggestions de reformulation CV                          |
+------------------------------+------------------------------+
                               v
+-------------------------------------------------------------+
|         BROUILLONS LOCAUX (jamais envoyés au cloud)          |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "AI application assistants built on cloud APIs require sending your CV and personal data to third parties — a real privacy concern for repeated personal use.",
        solution: "Integrated a locally-run Ollama model directly into the job-tracking flow: job/CV relevance scoring, cover letter and application message generation, CV rewording suggestions — with zero dependency on a cloud service.",
        stack: ["Python", "Ollama (Local LLM Inference)", "Prompt Engineering", "CLI & Web Dashboard Integration", "SQLite"],
        diagram: `
+-------------------------------------------------------------+
|         JOB POSTING (text) + CV (local Markdown)             |
+------------------------------+------------------------------+
                               v
+-------------------------------------------------------------+
|              LOCAL OLLAMA ENGINE (100% On-Device)            |
|  - Job / profile relevance scoring                          |
|  - Cover letter & short application message generation      |
|  - CV rewording suggestions                                  |
+------------------------------+------------------------------+
                               v
+-------------------------------------------------------------+
|         LOCAL DRAFTS (never sent to the cloud)                |
+-------------------------------------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-remoteradar.svg"
  },
  {
    id: "mediaflow-pipeline",
    category: "automation",
    categories: ["automation", "backend"],
    featured: false,
    badges: ["Python", "Flask", "FFmpeg", "MoviePy", "Pillow", "SQLite"],
    metrics: {
      fr: [
        { label: "Vitesse d'export", value: "10x vs Manuel" },
        { label: "Stabilité rendu", value: "Zero Artefact" },
        { label: "Interfaces", value: "Flask (Curation + Dashboard)" },
        { label: "Compositing", value: "Multi-Calques" }
      ],
      en: [
        { label: "Render Speed", value: "10x vs Manual" },
        { label: "Render Quality", value: "Zero Artifact" },
        { label: "Interfaces", value: "Flask (Curation + Dashboard)" },
        { label: "Compositing", value: "Multi-Layer" }
      ]
    },
    title: {
      fr: "MediaFlow — Pipeline de Génération Automatisée de Vidéos Courtes",
      en: "MediaFlow — Automated Short-Form Video Generation Pipeline"
    },
    subtitle: {
      fr: "Pipeline Python de composition vidéo automatisée : synchronisation audio/texte, habillage graphique et export optimisé, piloté par une interface de curation et un tableau de bord locaux.",
      en: "Python video-compositing pipeline with automated audio/text synchronization, graphic overlays and optimized export, driven by a local curation UI and dashboard."
    },
    summary: {
      fr: "Système de production automatisée de courtes vidéos verticales (formats réseaux sociaux) à partir d'un contenu texte source : sélection éditoriale, synchronisation audio/texte mot-à-mot, génération de calques graphiques (Pillow), compositing multi-pistes (MoviePy) et export optimisé (FFmpeg). Deux interfaces web locales (Flask) pilotent la curation et la génération avec aperçu.",
      en: "Automated production system for short vertical videos (social formats) from source text content: editorial selection, word-level audio/text synchronization, graphic overlay generation (Pillow), multi-track compositing (MoviePy) and optimized export (FFmpeg). Two local Flask web interfaces drive curation and preview-based generation."
    },
    architecture: {
      fr: {
        problem: "La production manuelle de contenus vidéo courts récurrents (texte + audio + habillage) demande des heures d'édition et génère des erreurs de synchronisation.",
        solution: "Pipeline Python bout en bout : sélection du contenu du jour, synchronisation audio/texte mot-à-mot, génération programmatique de calques graphiques (Pillow), compositing multi-pistes (MoviePy) et export optimisé (FFmpeg), piloté par deux interfaces Flask locales (curation et génération avec aperçu verrouillé).",
        stack: ["Python 3.12", "Flask (Interfaces de Curation & Dashboard)", "FFmpeg (Encodage optimisé)", "MoviePy (Compositing multi-pistes)", "Pillow (Rendu graphique & typographie)", "SQLite"],
        diagram: `
+-------------------------------------------------------------+
|            INPUT ASSETS (Métadonnées, Audio, Fonts)         |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                 MEDIAFLOW ORCHESTRATION CORE                |
|  - Parseur de métadonnées & découpage temporel              |
|  - Générateur d'overlays visuels dynamiques (Pillow)        |
|  - Synchronisation audio-texte mot-à-mot                    |
|  - Moteur de compositing multi-calques (MoviePy)            |
+------------------------------+------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
| FLASK CURATION & DASH |             | FFMPEG ENCODING        |
| (Aperçu, Sélection)   |             | PIPELINE (Export MP4)  |
+-----------------------+             +-----------------------+`
      },
      en: {
        problem: "Manual production of repetitive short video assets (text + audio + graphics) consumes excessive editing hours and introduces synchronization errors.",
        solution: "End-to-end Python pipeline: daily content selection, word-level audio/text synchronization, programmatic graphic overlay generation (Pillow), multi-track compositing (MoviePy) and optimized export (FFmpeg), driven by two local Flask interfaces (curation and preview-locked generation).",
        stack: ["Python 3.12", "Flask (Curation & Dashboard Interfaces)", "FFmpeg (Optimized Encoding)", "MoviePy (Multi-track Compositing)", "Pillow (Typography & Graphic Rendering)", "SQLite"],
        diagram: `
+-------------------------------------------------------------+
|            INPUT ASSETS (Metadata, Audio, Fonts)             |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                 MEDIAFLOW ORCHESTRATION CORE                |
|  - Metadata parsing & timeline chunking                     |
|  - Dynamic visual overlay generation (Pillow)                |
|  - Word-level audio-to-text synchronization                  |
|  - Multi-layer compositing engine (MoviePy)                  |
+------------------------------+------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
| FLASK CURATION & DASH |             | FFMPEG ENCODING        |
| (Preview, Selection)  |             | PIPELINE (MP4 Export)  |
+-----------------------+             +-----------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-mediaflow.svg"
  },
  {
    id: "opengov-data-insight",
    category: "backend",
    categories: ["backend", "automation", "devops"],
    featured: false,
    badges: ["Python", "PDFMiner", "PostgreSQL", "ETL", "Regex Parsing", "Data Analytics"],
    metrics: {
      fr: [
        { label: "Volume traité", value: "Publications à grande échelle" },
        { label: "Pipeline ETL", value: "100% Automatisé" },
        { label: "Tolérance typographique", value: "Élevée" },
        { label: "Stockage", value: "PostgreSQL" }
      ],
      en: [
        { label: "Processing Volume", value: "Large-Scale Publications" },
        { label: "ETL Pipeline", value: "100% Automated" },
        { label: "Typographic Tolerance", value: "High" },
        { label: "Database", value: "PostgreSQL" }
      ]
    },
    title: {
      fr: "DataInsight ETL — Pipeline d'Extraction & Analyse de Données Publiques",
      en: "DataInsight ETL — Public Gazette Parsing & Analytics Pipeline"
    },
    subtitle: {
      fr: "Pipeline d'ingestion et de parsing de publications officielles PDF complexes avec nettoyage de données, modélisation SQL et tableaux de bord analytiques.",
      en: "Data ingestion and parsing pipeline transforming complex public legal PDF publications into queryable SQL models and statistical dashboards."
    },
    summary: {
      fr: "Solution d'ingestion de données publiques non structurées (fichiers PDF volumineux, typographie variable). Le pipeline télécharge automatiquement les publications, applique un parsing structurel et des expressions régulières robustes, injecte les résultats dans PostgreSQL et génère des métriques statistiques.",
      en: "Data pipeline for unstructured public records. Automatically fetches government releases, executes structural text parsing and robust regex validation, populates a normalized PostgreSQL database, and computes trend analytics."
    },
    architecture: {
      fr: {
        problem: "Les publications officielles publiques sont publiées sous forme de PDF volumineux et non structurés, rendant difficile toute recherche ou analyse statistique automatisée.",
        solution: "Développement d'un parseur résilient basé sur pdfminer.six et pdfrw avec tolérance aux variations typographiques, pipeline ETL automatisé et stockage relationnel optimisé pour les requêtes analytiques.",
        stack: ["Python (pdfminer.six, pdfrw, regex)", "PostgreSQL 16", "BeautifulSoup4 & Requests (Scraping)", "Pandas (Agrégation & Stats)", "Matplotlib & Chart.js"],
        diagram: `
+-------------------------------------------------------------+
|                 PUBLIC OPEN DATA REPOSITORIES               |
|                 (PDFs Volumineux & Non Structurés)           |
+------------------------------+------------------------------+
                               | (Ingestion Automatisée)
                               v
+-------------------------------------------------------------+
|                 PDF STRUCTURAL PARSING ENGINE               |
|  - Layout analysis & text block extraction (pdfminer.six)   |
|  - Fault-tolerant Regex tokenizer & validation rules        |
|  - Deduplication & anomaly scoring                          |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                 NORMALIZED POSTGRESQL STORE                 |
|  - Schéma indexé pour requêtes analytiques rapides          |
|  - Agrégats statistiques automatisés & export API            |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Official publications are released as large unstructured PDF files, making automated search, indexing, and statistical modeling difficult.",
        solution: "Built a fault-tolerant parsing engine using pdfminer.six and custom regex tokenizers, coupled with an automated ETL pipeline and optimized PostgreSQL analytical schemas.",
        stack: ["Python (pdfminer.six, pdfrw)", "PostgreSQL 16", "BeautifulSoup4 (Ingestion)", "Pandas (Data manipulation)", "Analytics Engine"],
        diagram: `
+-------------------------------------------------------------+
|                 PUBLIC OPEN DATA REPOSITORIES               |
|                 (Large Unstructured PDFs)                    |
+------------------------------+------------------------------+
                               | (Automated Ingestion)
                               v
+-------------------------------------------------------------+
|                 PDF STRUCTURAL PARSING ENGINE               |
|  - Layout analysis & text block extraction (pdfminer.six)   |
|  - Fault-tolerant Regex tokenizer & validation rules        |
|  - Deduplication & anomaly scoring                          |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                 NORMALIZED POSTGRESQL STORE                 |
|  - Indexed schema for fast analytical queries                |
|  - Automated statistical rollups & export API                |
+-------------------------------------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-datainsight.svg"
  },
  {
    id: "paris-explorer",
    category: "fullstack",
    categories: ["fullstack", "backend"],
    featured: false,
    badges: ["FastAPI", "Python", "JavaScript", "Docker", "LocalStorage", "Open Data API"],
    metrics: {
      fr: [
        { label: "Lieux référencés", value: "30+" },
        { label: "Source événements", value: "Open Data Paris (Live)" },
        { label: "Persistance", value: "LocalStorage" },
        { label: "Déploiement", value: "Docker" }
      ],
      en: [
        { label: "Curated Spots", value: "30+" },
        { label: "Events Source", value: "Paris Open Data (Live)" },
        { label: "Persistence", value: "LocalStorage" },
        { label: "Deployment", value: "Docker" }
      ]
    },
    title: {
      fr: "Le Grand Tour de Paris — Carnet de Découverte & Événements en Direct",
      en: "Paris Explorer — Discovery Journal & Live Events"
    },
    subtitle: {
      fr: "Application web personnelle : carnet de visite des lieux secrets de Paris avec suivi de progression et notes en local, complété par les événements culturels du moment via l'API Open Data de la ville.",
      en: "Personal web app: a visit journal for Paris' hidden spots with local progress tracking and notes, complemented by live cultural events pulled from the city's Open Data API."
    },
    summary: {
      fr: "Petite application FastAPI + JavaScript vanilla : une sélection curatée de dizaines de lieux secrets par arrondissement (adresse, métro, astuce), un suivi de visite/favoris/notes sauvegardé en local (aucun compte, aucune base de données), et un flux d'événements culturels parisiens interrogé en direct sur l'API Open Data de la ville avec cache mémoire de 5 minutes.",
      en: "A small FastAPI + vanilla JavaScript app: a curated selection of dozens of hidden Paris spots per district (address, nearest metro, tip), local visit/favorites/notes tracking (no account, no database), and a live Paris cultural events feed queried from the city's Open Data API with a 5-minute in-memory cache."
    },
    architecture: {
      fr: {
        problem: "Garder une trace personnelle des lieux visités et des envies à Paris, sans dépendre d'un compte ou d'un service tiers, tout en gardant un aperçu des événements du moment.",
        solution: "Frontend JavaScript vanilla piloté par un jeu de données curaté (lieux secrets par arrondissement) avec persistance `localStorage` (visites, favoris, notes, dates), et backend FastAPI léger qui interroge l'API Open Data de Paris pour les événements culturels avec un cache mémoire à courte durée de vie (5 min) pour limiter les appels.",
        stack: ["FastAPI (Python)", "Jinja2 Templates", "JavaScript Vanilla (Frontend)", "LocalStorage (Persistance Client)", "API Open Data Paris (Événements)", "Docker & Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|              FRONTEND (JavaScript Vanilla)                  |
|  - Carnet de lieux secrets (jeu de données curaté)           |
|  - Suivi visites / favoris / notes (LocalStorage)            |
+------------------------------+------------------------------+
                               | (Fetch Événements)
                               v
+-------------------------------------------------------------+
|               BACKEND FASTAPI (Python)                      |
|  - Cache mémoire 5 min (TTL)                                 |
|  - Appel API Open Data Paris (événements culturels live)     |
|  - Agenda sportif parisien (liste statique)                  |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Keep a personal record of visited spots and wishlist items in Paris, without relying on an account or third-party service, while still surfacing current local events.",
        solution: "Vanilla JavaScript frontend driven by a curated dataset (hidden spots per district) with `localStorage` persistence (visits, favorites, notes, dates), and a lightweight FastAPI backend that queries the Paris Open Data API for cultural events, using a short-lived in-memory cache (5 min) to limit calls.",
        stack: ["FastAPI (Python)", "Jinja2 Templates", "Vanilla JavaScript (Frontend)", "LocalStorage (Client Persistence)", "Paris Open Data API (Events)", "Docker & Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|              FRONTEND (Vanilla JavaScript)                  |
|  - Curated hidden-spots journal (dataset-driven)             |
|  - Visit / favorites / notes tracking (LocalStorage)         |
+------------------------------+------------------------------+
                               | (Fetch Events)
                               v
+-------------------------------------------------------------+
|               FASTAPI BACKEND (Python)                      |
|  - 5-min In-Memory Cache (TTL)                               |
|  - Paris Open Data API call (live cultural events)           |
|  - Static Paris sports agenda                                |
+-------------------------------------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresinside/paris-explorer",
    isPublicRepo: true,
    image: "assets/images/project-citypulse.svg"
  },
  {
    id: "talent-match-radar-case",
    category: "automation",
    categories: ["automation", "backend", "ai"],
    featured: false,
    badges: ["Python", "Web Scraping", "Scoring IA", "Docker", "Traefik", "Raspberry Pi", "Notifications"],
    metrics: {
      fr: [
        { label: "Sources surveillées", value: "Multi-Sites" },
        { label: "Fréquence de veille", value: "Automatisée" },
        { label: "Alertes", value: "Temps réel" },
        { label: "Déploiement", value: "Docker / Raspberry Pi" }
      ],
      en: [
        { label: "Monitored Sources", value: "Multi-Site" },
        { label: "Watch Frequency", value: "Automated" },
        { label: "Alerts", value: "Real-Time" },
        { label: "Deployment", value: "Docker / Raspberry Pi" }
      ]
    },
    title: {
      fr: "Talent Match Radar — Veille & Matching Emploi Automatisé (Projet Client)",
      en: "Talent Match Radar — Automated Job Discovery & Matching (Client Project)"
    },
    subtitle: {
      fr: "Outil sur-mesure de veille et de matching emploi pour un secteur spécialisé (santé / recherche clinique) : scraping automatisé d'offres, scoring de pertinence, notifications instantanées, déployé sur Raspberry Pi.",
      en: "Bespoke job discovery and matching tool for a specialized field (healthcare / clinical research): automated job scraping, relevance scoring, instant notifications, deployed on a Raspberry Pi."
    },
    summary: {
      fr: "Développement d'un outil de veille sur-mesure pour accompagner la recherche d'emploi d'un profil spécialisé : scrapers dédiés à des sites d'offres et d'entreprises ciblées du secteur, moteur de scoring pour évaluer la pertinence de chaque offre par rapport au profil, système de notification automatique et base de données locale de suivi des candidatures. Déployé en autonomie sur Raspberry Pi, avec un tableau de suivi consultable en HTTPS depuis n'importe quel appareil (Traefik).",
      en: "Built a bespoke monitoring tool to support the job search of a specialized profile: dedicated scrapers for targeted job boards and sector companies, a scoring engine to evaluate each posting's relevance against the profile, automatic notifications, and a local application-tracking database. Deployed autonomously on a Raspberry Pi, with an HTTPS tracking dashboard reachable from any device (Traefik)."
    },
    architecture: {
      fr: {
        problem: "Surveiller en continu plusieurs sources d'offres et listes d'entreprises ciblées dans un secteur de niche, sans y passer des heures chaque jour, avec un suivi consultable facilement depuis n'importe quel appareil.",
        solution: "Mise en place de scrapers dédiés, d'un moteur de matching/scoring et d'un système de notification automatique, packagés et déployés en autonomie sur un serveur personnel (Raspberry Pi, Docker Compose) ; le tableau de suivi des candidatures est exposé en HTTPS via Traefik pour rester consultable depuis un téléphone, sans intervention manuelle au quotidien.",
        stack: ["Python", "Scrapers Dédiés (Requests / BeautifulSoup)", "Moteur de Scoring & Matching", "SQLite", "Docker & Docker Compose", "Traefik (Reverse Proxy)", "Raspberry Pi (Déploiement Edge)", "Notifications Automatiques"],
        diagram: `
+-------------------------------------------------------------+
|         SOURCES D'OFFRES & LISTES D'ENTREPRISES CIBLÉES      |
+------------------------------+------------------------------+
                               | (Scraping Automatisé)
                               v
+-------------------------------------------------------------+
|               MOTEUR DE MATCHING & SCORING                  |
|  - Évaluation de pertinence par rapport au profil           |
|  - Déduplication & suivi en base locale                     |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|              RASPBERRY PI (Docker Compose)                  |
|  - Notifications automatiques instantanées                  |
|  - Tableau de suivi HTTPS via Traefik (accès mobile)         |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Continuously monitoring several job boards and targeted company lists in a niche sector, without spending hours on it every day, with tracking easily reachable from any device.",
        solution: "Built dedicated scrapers, a matching/scoring engine and an automatic notification system, packaged and deployed autonomously on a personal server (Raspberry Pi, Docker Compose); the application-tracking dashboard is exposed over HTTPS via Traefik so it stays reachable from a phone, with no day-to-day manual intervention.",
        stack: ["Python", "Dedicated Scrapers (Requests / BeautifulSoup)", "Matching & Scoring Engine", "SQLite", "Docker & Docker Compose", "Traefik (Reverse Proxy)", "Raspberry Pi (Edge Deployment)", "Automatic Notifications"],
        diagram: `
+-------------------------------------------------------------+
|         TARGETED JOB BOARDS & COMPANY WATCHLISTS            |
+------------------------------+------------------------------+
                               | (Automated Scraping)
                               v
+-------------------------------------------------------------+
|                MATCHING & SCORING ENGINE                    |
|  - Relevance evaluation against the candidate profile       |
|  - Deduplication & local tracking database                  |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                RASPBERRY PI (Docker Compose)                |
|  - Instant automatic notifications                          |
|  - HTTPS tracking dashboard via Traefik (mobile access)      |
+-------------------------------------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-remoteradar.svg"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
