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
        { label: "Latence scoring IA", value: "<500ms" },
        { label: "Génération CV PDF", value: "Temps réel" },
        { label: "Flux automatisé", value: "100%" }
      ],
      en: [
        { label: "Sources Aggregated", value: "30+" },
        { label: "AI Match Latency", value: "<500ms" },
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
    id: "scancraft-mobile",
    category: "mobile",
    categories: ["mobile", "backend", "fullstack"],
    featured: true,
    badges: ["React Native", "Expo", "TypeScript", "Fastify", "PostgreSQL", "Drizzle ORM", "Redis", "ML Kit", "Docker"],
    metrics: {
      fr: [
        { label: "Temps réponse cache", value: "<10ms" },
        { label: "Architecture", value: "Offline-First" },
        { label: "Typage de bout en bout", value: "100% Strict" },
        { label: "Déploiement", value: "Docker / Caddy" }
      ],
      en: [
        { label: "Cache Response Time", value: "<10ms" },
        { label: "Architecture", value: "Offline-First" },
        { label: "End-to-End Typing", value: "100% Strict" },
        { label: "Deployment", value: "Docker / Caddy" }
      ]
    },
    title: {
      fr: "ScanCraft / NutriSense — App Mobile Offline-First & API Microservices",
      en: "ScanCraft — Offline-First Mobile Scanner & Ingredient API"
    },
    subtitle: {
      fr: "Application mobile React Native avec vision ML Kit, stockage local SQLite, synchronisation backend Fastify/PostgreSQL et cache Redis Dragonfly.",
      en: "React Native mobile app with ML Kit computer vision, local SQLite storage, Fastify/PostgreSQL backend sync, and Redis Dragonfly caching."
    },
    summary: {
      fr: "Application mobile et API cloud haute performance dédiée à l'analyse instantanée de produits et à la détection d'ingrédients par scan optique (code-barres et OCR). Conçue pour une disponibilité absolue même sans connexion internet grâce à un système offline-first natif.",
      en: "High-performance mobile application and cloud microservices platform for real-time product intelligence, barcode scanning, and optical ingredient analysis. Engineered for 100% offline availability with local SQLite persistence and ultra-fast backend sync."
    },
    architecture: {
      fr: {
        problem: "Les utilisateurs dans les supermarchés ont souvent une mauvaise couverture réseau 4G/5G, rendant les applications classiques dépendantes du cloud lentes ou inutilisables.",
        solution: "Architecture 'Offline-First' : persistance locale SQLite sur le device mobile, scan instantané par caméra avec ML Kit embarqué, et synchronisation ultra-rapide avec une API Fastify/PostgreSQL optimisée par un cache Redis Dragonfly sous reverse proxy Caddy HTTPS.",
        stack: ["React Native (Expo SDK 51+)", "TypeScript Strict (Frontend & Backend)", "Redux Toolkit & Expo-SQLite", "Google ML Kit (Camera Vision)", "Fastify Node.js API", "PostgreSQL 16 & Drizzle ORM", "Redis / Dragonfly Cache", "Caddy Server (SSL Auto)", "Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|               MOBILE DEVICE (REACT NATIVE / EXPO)           |
|  - Camera ML Kit Scanner (Real-Time Vision)                 |
|  - Local SQLite Database (Offline-First Storage)            |
|  - Redux State & Internationalization (i18n)                |
+------------------------------+------------------------------+
                               | (Sync / HTTPS REST API)
                               v
+-------------------------------------------------------------+
|             CADDY REVERSE PROXY (HTTPS / AUTO-SSL)          |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                FASTIFY NODE.JS / TYPESCRIPT API             |
|  - Sub-millisecond routing & validation (Zod / TypeBox)     |
|  - Rate-limiting & Token Security                           |
+---------------+------------------------------+---------------+
                |                              |
                v                              v
+------------------------------+  +---------------------------+
|    REDIS / DRAGONFLY CACHE   |  |   POSTGRESQL + DRIZZLE    |
|    (Hot product Lookups)     |  |   (Master Product Data)   |
+------------------------------+  +---------------------------+`
      },
      en: {
        problem: "Retail and supermarket environments frequently suffer from poor cell reception, causing cloud-reliant mobile apps to stall or fail completely.",
        solution: "Built a true 'Offline-First' architecture: on-device SQLite persistence, instant on-device ML Kit barcode recognition, and asynchronous sync with an ultra-lightweight Fastify backend backed by Dragonfly/Redis caching and Caddy SSL.",
        stack: ["React Native (Expo SDK 51+)", "Strict TypeScript (Fullstack)", "Redux Toolkit & Expo-SQLite", "Google ML Kit (Computer Vision)", "Fastify Node.js API", "PostgreSQL 16 & Drizzle ORM", "Redis / Dragonfly In-Memory Cache", "Caddy Server (Auto SSL)", "Docker Compose"],
        diagram: `
+-------------------------------------------------------------+
|               MOBILE DEVICE (REACT NATIVE / EXPO)           |
|  - Camera ML Kit Scanner (Real-Time Vision)                 |
|  - Local SQLite Database (Offline-First Storage)            |
|  - Redux State & Internationalization (i18n)                |
+------------------------------+------------------------------+
                               | (Sync / HTTPS REST API)
                               v
+-------------------------------------------------------------+
|             CADDY REVERSE PROXY (HTTPS / AUTO-SSL)          |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                FASTIFY NODE.JS / TYPESCRIPT API             |
|  - Sub-millisecond routing & validation (Zod / TypeBox)     |
|  - Rate-limiting & Token Security                           |
+---------------+------------------------------+---------------+
                |                              |
                v                              v
+------------------------------+  +---------------------------+
|    REDIS / DRAGONFLY CACHE   |  |   POSTGRESQL + DRIZZLE    |
|    (Hot product Lookups)     |  |   (Master Product Data)   |
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
        { label: "Disponibilité Edge", value: "99.99%" },
        { label: "Diffusion Alertes", value: "<1s" },
        { label: "Interface Web", value: "Glassmorphism" }
      ],
      en: [
        { label: "Detection Cycle", value: "30s" },
        { label: "Edge Cluster Uptime", value: "99.99%" },
        { label: "Alert Dispatch", value: "<1s" },
        { label: "Web Interface", value: "Glassmorphism" }
      ]
    },
    title: {
      fr: "PortaPulse — Microservice de Surveillance de Stocks & Alerting IoT",
      en: "PortaPulse — Real-Time IoT Stock Monitor & Multi-Channel Alerting"
    },
    subtitle: {
      fr: "Système de scraping haute fréquence, dispatch d'alertes Webhooks multicanales et dashboard de supervision déployé sur Raspberry Pi avec Traefik.",
      en: "High-frequency scraping engine, multi-channel webhook alerting, and glassmorphism monitoring dashboard containerized on Raspberry Pi edge hardware with Traefik."
    },
    summary: {
      fr: "Microservice événementiel développé pour surveiller en continu la disponibilité d'équipements e-commerce critiques auprès de 6+ distributeurs majeurs avec contournement d'anti-bot, dispatch instantané d'alertes (Discord, Telegram, Ntfy) et dashboard de monitoring en direct.",
      en: "Event-driven microservice engineered to continuously monitor critical e-commerce inventory across 6+ major distributors with anti-bot heuristics, instantaneous multi-channel push alerting (Discord, Telegram, Ntfy), and a real-time web dashboard."
    },
    architecture: {
      fr: {
        problem: "Les ruptures de stock sur des équipements saisonniers sous haute demande nécessitent une réactivité à la seconde sans bloquer les adresses IP par rate-limiting.",
        solution: "Moteur Python léger avec requêtes asynchrones aléatoires, en-têtes dynamiques, gestion de session, diffusion instantanée d'alertes via Webhooks et interface Web sécurisée par Traefik sous domaine dédié.",
        stack: ["Python (Requests / BeautifulSoup4 / Regex)", "Traefik v3 (Reverse Proxy + Let's Encrypt)", "Docker & Docker Compose", "Raspberry Pi Edge Linux Server", "Discord / Telegram / Ntfy Webhooks", "Vanilla CSS Glassmorphism Dashboard"],
        diagram: `
+-------------------------------------------------------------+
|                DISTRIBUTEURS E-COMMERCE (6+)                |
|  (Optimea, Boulanger, Castorama, Amazon, Darty, Leroy)      |
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
|  (Official Outlets, Amazon, Darty, Boulanger, etc.)         |
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
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-portasplit.svg"
  },
  {
    id: "mediaflow-pipeline",
    category: "automation",
    categories: ["automation", "backend"],
    featured: false,
    badges: ["Python", "FFmpeg", "MoviePy", "Pillow", "Audio DSP", "Batch Processing"],
    metrics: {
      fr: [
        { label: "Vitesse d'export", value: "10x vs Manuel" },
        { label: "Automatisation", value: "100% CLI Headless" },
        { label: "Compositing", value: "Multi-Calques" },
        { label: "Stabilité rendu", value: "Zero Artefact" }
      ],
      en: [
        { label: "Render Speed", value: "10x vs Manual" },
        { label: "Automation", value: "100% Headless CLI" },
        { label: "Compositing", value: "Multi-Layer" },
        { label: "Render Quality", value: "Zero Artifact" }
      ]
    },
    title: {
      fr: "MediaFlow — Pipeline d'Orchestration & Génération Multimédia Automatisée",
      en: "MediaFlow — Automated Batch Video & Multimedia Compositing Pipeline"
    },
    subtitle: {
      fr: "Moteur de rendu vidéo headless générant dynamiquement des assets multimédias haute définition avec sous-titrage synchronisé et mixage audio.",
      en: "Headless video rendering engine dynamically producing high-definition multimedia assets with synchronized subtitles and audio mixing."
    },
    summary: {
      fr: "Architecture de traitement de flux multimédia en Python orchestrant FFmpeg, MoviePy et Pillow. Permet de transformer des métadonnées et sources brutes en capsules vidéo prêtes pour la diffusion avec calques dynamiques, formes d'onde audio et encodage GPU/CPU optimisé.",
      en: "Python multimedia processing pipeline orchestrating FFmpeg, MoviePy, and Pillow. Ingests raw structured metadata and assets to generate broadcast-ready video content with dynamic motion graphics, synchronized waveform audio, and hardware-accelerated encoding."
    },
    architecture: {
      fr: {
        problem: "La production manuelle de contenus vidéo récurrents demande des heures d'édition et génère des erreurs de synchronisation sous-titres/audio.",
        solution: "Création d'un pipeline batch automatisé : calcul précis de la timeline, génération vectorielle des visuels, compositing multi-pistes et encodage par lots sans intervention humaine.",
        stack: ["Python 3.12", "FFmpeg (Hardware-accelerated libx264 / aac)", "MoviePy (Timeline & Track orchestration)", "Pillow (Vector & Typography rendering)", "Audio DSP (Waveform synchronization)"],
        diagram: `
+-------------------------------------------------------------+
|            INPUT ASSETS (Metadata, Audio, Fonts, SVG)       |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                 MEDIAFLOW ORCHESTRATION CORE                |
|  - Parseur de métadonnées & découpage temporel              |
|  - Générateur d'overlays visuels dynamiques (Pillow)        |
|  - Synchronisation audio-texte et courbes d'onde            |
|  - Moteur de compositing multi-calques (MoviePy)            |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|             FFMPEG OPTIMIZED ENCODING PIPELINE              |
|  - Fast 2-pass encoding / H.264 MP4 High Profile            |
|  - Sortie automatique vers répertoires horodatés            |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Manual production of repetitive video assets consumes excessive editing hours and introduces audio/subtitle synchronization errors.",
        solution: "Engineered an automated batch pipeline: precise timeline calculation, programmatic vector overlays, multi-track compositing, and scheduled zero-touch rendering.",
        stack: ["Python 3.12", "FFmpeg (Hardware accelerated)", "MoviePy (Timeline orchestration)", "Pillow (Typography & Vector rendering)", "Audio DSP synchronization"],
        diagram: `
+-------------------------------------------------------------+
|            INPUT ASSETS (Metadata, Audio, Fonts, SVG)       |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                 MEDIAFLOW ORCHESTRATION CORE                |
|  - Metadata parsing & timeline chunking                     |
|  - Dynamic visual overlay generation (Pillow)               |
|  - Audio-to-text waveform synchronization                   |
|  - Multi-layer compositing engine (MoviePy)                 |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|             FFMPEG OPTIMIZED ENCODING PIPELINE              |
|  - High-performance H.264 MP4 export                        |
|  - Automated artifact delivery & scheduled queue            |
+-------------------------------------------------------------+`
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
    badges: ["Python", "PDFMiner", "PostgreSQL", "ETL", "Regex OCR", "Data Analytics"],
    metrics: {
      fr: [
        { label: "Fiches traitées", value: "50,000+" },
        { label: "Précision d'extraction", value: "99.8%" },
        { label: "Pipeline ETL", value: "Automatisé" },
        { label: "Stockage", value: "PostgreSQL" }
      ],
      en: [
        { label: "Records Processed", value: "50,000+" },
        { label: "Extraction Accuracy", value: "99.8%" },
        { label: "ETL Pipeline", value: "Automated" },
        { label: "Database", value: "PostgreSQL" }
      ]
    },
    title: {
      fr: "DataInsight ETL — Pipeline d'Extraction & Analyse de Données Publiques",
      en: "DataInsight ETL — High-Throughput Public Gazette Parsing & Analytics"
    },
    subtitle: {
      fr: "Pipeline d'ingestion et de parsing de publications officielles PDF complexes avec nettoyage de données, modélisation SQL et tableaux de bord analytiques.",
      en: "High-volume data ingestion and parsing pipeline transforming complex public legal PDF publications into queryable SQL models and statistical dashboards."
    },
    summary: {
      fr: "Solution complète d'ingestion de données publiques non structurées (fichiers PDF volumineux, typographie variable). Le pipeline télécharge automatiquement les publications, applique un OCR structurel et des expressions régulières robustes, injecte les résultats dans PostgreSQL et génère des métriques statistiques fiables.",
      en: "Enterprise-grade data pipeline for unstructured public records. Automatically fetches government releases, executes structural text parsing and robust regex validation, populates a normalized PostgreSQL database, and computes longitudinal trend analytics."
    },
    architecture: {
      fr: {
        problem: "Les publications officielles publiques sont publiées sous forme de PDF massifs non structurés, rendant impossible toute recherche ou analyse statistique automatisée.",
        solution: "Développement d'un parseur résilient basé sur pdfminer.six et pdfrw avec tolérance aux variations typographiques, pipeline ETL automatisé et stockage relationnel optimisé pour les requêtes analytiques.",
        stack: ["Python (pdfminer.six, pdfrw, regex)", "PostgreSQL 16", "BeautifulSoup4 & Requests (Scraping)", "Pandas (Agrégation & Stats)", "Matplotlib & Chart.js"],
        diagram: `
+-------------------------------------------------------------+
|                 PUBLIC OPEN DATA REPOSITORIES               |
|                 (Massive Unstructured PDFs)                 |
+------------------------------+------------------------------+
                               | (Automated Daily Ingestion)
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
|                 NORMALIZED POSTGRESQL LAKE                  |
|  - Indexed schema for sub-second demographic queries        |
|  - Automated statistical rollups & export API               |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Official publications are released as massive unstructured PDF files, making automated search, indexing, and statistical modeling impossible.",
        solution: "Built a fault-tolerant parsing engine using pdfminer.six and custom regex tokenizers, coupled with an automated ETL pipeline and optimized PostgreSQL analytical schemas.",
        stack: ["Python (pdfminer.six, pdfrw)", "PostgreSQL 16", "BeautifulSoup4 (Ingestion)", "Pandas (Data manipulation)", "Analytics Engine"],
        diagram: `
+-------------------------------------------------------------+
|                 PUBLIC OPEN DATA REPOSITORIES               |
|                 (Massive Unstructured PDFs)                 |
+------------------------------+------------------------------+
                               | (Automated Daily Ingestion)
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
|                 NORMALIZED POSTGRESQL LAKE                  |
|  - Indexed schema for sub-second demographic queries        |
|  - Automated statistical rollups & export API               |
+-------------------------------------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-datainsight.svg"
  },
  {
    id: "parispulse-geo-api",
    category: "backend",
    categories: ["backend", "fullstack"],
    featured: false,
    badges: ["FastAPI", "Python", "Docker", "REST API", "In-Memory Cache", "Jinja2"],
    metrics: {
      fr: [
        { label: "Latence API", value: "<5ms" },
        { label: "Architecture Cache", value: "In-Memory TTL" },
        { label: "Conteneurisation", value: "Docker Ready" },
        { label: "Disponibilité", value: "99.99%" }
      ],
      en: [
        { label: "API Response Time", value: "<5ms" },
        { label: "Cache Layer", value: "In-Memory TTL" },
        { label: "Containerization", value: "Docker Ready" },
        { label: "Availability", value: "99.99%" }
      ]
    },
    title: {
      fr: "CityPulse — Microservice Géospatial & Événements Haute Cadence",
      en: "CityPulse — High-Performance Geospatial & Event Microservice"
    },
    subtitle: {
      fr: "Microservice FastAPI conteneurisé avec cache in-memory TTL, agrégation d'APIs Open Data géolocalisées et interface responsive.",
      en: "Containerized FastAPI microservice featuring zero-dependency in-memory TTL caching, open geospatial data aggregation, and a responsive web UI."
    },
    summary: {
      fr: "Service backend haute vélocité agrégeant les événements culturels, flux métropolitains et données sportives en temps réel. Optimisé par un cache mémoire avec invalidation automatique (TTL) réduisant la charge des APIs tierces et garantissant une réponse sous les 5ms.",
      en: "High-velocity backend service consolidating cultural events, metropolitan points of interest, and live sports fixtures. Leverages an optimized in-memory TTL cache to eliminate third-party API rate limits and achieve sub-5ms response times."
    },
    architecture: {
      fr: {
        problem: "Les APIs publiques d'open data urbaines subissent des limites de requêtes sévères et des latences élevées pouvant dégrader l'expérience utilisateur.",
        solution: "Implémentation d'une couche de cache in-memory thread-safe avec invalidation par TTL, couplée à une API FastAPI asynchrone et un déploiement conteneurisé sous Docker.",
        stack: ["FastAPI (Python)", "Jinja2 Templates & Static Web UI", "Docker & Docker Compose", "Thread-Safe In-Memory TTL Cache Engine", "Open Data RESTful APIs"],
        diagram: `
+-------------------------------------------------------------+
|              UPSTREAM PUBLIC OPEN DATA APIS                 |
|             (Municipal Events, Sports Feeds)                |
+------------------------------+------------------------------+
                               ^ (TTL-Cached Queries)
                               |
+-------------------------------------------------------------+
|               FASTAPI DOCKERIZED MICROSERVICE               |
|  - Asynchronous HTTP Client with Error Fallbacks            |
|  - Zero-Dependency In-Memory TTL Cache Layer                |
|  - Fast JSON Serializer & Jinja2 Template Views             |
+------------------------------+------------------------------+
                               | (Sub-5ms Response)
                               v
+-------------------------------------------------------------+
|                  CLIENTS & WEB DASHBOARDS                   |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Public urban open data APIs impose strict rate limits and unpredictable latencies that degrade frontend user experience.",
        solution: "Engineered a thread-safe in-memory caching engine with automatic TTL invalidation, wrapped in an asynchronous FastAPI service and packaged as a Docker microservice.",
        stack: ["FastAPI (Python)", "Jinja2 & Static Frontend", "Docker & Compose", "In-Memory TTL Caching Engine", "REST Open Data Services"],
        diagram: `
+-------------------------------------------------------------+
|              UPSTREAM PUBLIC OPEN DATA APIS                 |
|             (Municipal Events, Sports Feeds)                |
+------------------------------+------------------------------+
                               ^ (TTL-Cached Queries)
                               |
+-------------------------------------------------------------+
|               FASTAPI DOCKERIZED MICROSERVICE               |
|  - Asynchronous HTTP Client with Error Fallbacks            |
|  - Zero-Dependency In-Memory TTL Cache Layer                |
|  - Fast JSON Serializer & Jinja2 Template Views             |
+------------------------------+------------------------------+
                               | (Sub-5ms Response)
                               v
+-------------------------------------------------------------+
|                  CLIENTS & WEB DASHBOARDS                   |
+-------------------------------------------------------------+`
      }
    },
    demoUrl: null,
    githubUrl: "https://github.com/faresmetidji",
    image: "assets/images/project-citypulse.svg"
  },
  {
    id: "enterprise-devops-infra",
    category: "devops",
    categories: ["devops", "cloud", "backend"],
    featured: true,
    badges: ["Kubernetes", "Docker", "GitLab CI", "Ansible", "AWS", "Prometheus", "Grafana", "Linux RHEL"],
    metrics: {
      fr: [
        { label: "Apps en production", value: "150+" },
        { label: "Déploiements manuels", value: "-60%" },
        { label: "Disponibilité SLA", value: "99.9%" },
        { label: "Support N3", value: "Expert" }
      ],
      en: [
        { label: "Production Apps", value: "150+" },
        { label: "Manual Deploy Overhead", value: "-60%" },
        { label: "Service SLA", value: "99.9%" },
        { label: "Tier 3 Incident Mgmt", value: "Expert" }
      ]
    },
    title: {
      fr: "Infrastructure Cloud, DevOps & Observabilité — 150+ Applications Métier",
      en: "Enterprise DevOps & Cloud Observability — 150+ Mission-Critical Apps"
    },
    subtitle: {
      fr: "Industrialisation CI/CD (GitLab CI, Ansible, Docker, K8s), maintien en condition opérationnelle (MCO) et observabilité Prometheus/Grafana.",
      en: "End-to-end CI/CD industrialization (GitLab CI, Ansible, Docker, Kubernetes), 24/7 high availability, and Prometheus/Grafana observability."
    },
    summary: {
      fr: "Plus de 5 ans d'expérience au service de grands comptes et institutions publiques (Conseil Départemental des Yvelines, Publicis Groupe, Vocalcom, Orange). Automatisation complète des déploiements, administration de clusters Kubernetes/Docker, gestion de bases de données (PostgreSQL, Oracle, MySQL) et résolution d'incidents critiques N3.",
      en: "Over 5 years of proven enterprise experience supporting Tier-1 clients and public institutions (Conseil Départemental, Publicis Groupe, Vocalcom, Orange). Led end-to-end deployment automation, Kubernetes/Docker cluster administration, relational database tuning, and N3 incident resolution."
    },
    architecture: {
      fr: {
        problem: "Gérer 150+ applications hétérogènes avec des déploiements manuels risqués, des fenêtres de mise en production complexes et un manque de visibilité en temps réel.",
        solution: "Mise en place de pipelines GitLab CI/Jenkins standardisés avec playbooks Ansible, conteneurisation Docker/Kubernetes, ordonnancement automatisé et supervision unifiée avec Prometheus, Grafana et alertes dynamiques.",
        stack: ["Kubernetes & Docker Compose", "GitLab CI / Jenkins / ArgoCD", "Ansible Playbooks & Automation", "AWS Cloud & VMware vSphere", "Linux (RHEL, Debian, CentOS) & Windows Server", "PostgreSQL, Oracle Database, MariaDB", "Prometheus, Grafana, Nagios, SolarWinds", "Apache Tomcat, Apache HTTP, IIS, Traefik"],
        diagram: `
+-------------------------------------------------------------+
|                 DEVELOPMENT & GIT REPOSITORIES              |
|  (GitLab / Git Workflows / Trunk-Based Development)         |
+------------------------------+------------------------------+
                               | (Git Push / Tag Trigger)
                               v
+-------------------------------------------------------------+
|               CI/CD AUTOMATION & TESTING PIPELINE           |
|  - GitLab CI / Jenkins Runners: Unit & Integration Tests    |
|  - Docker Multi-Stage Image Build & Container Security Scan |
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
|  - Grafana Unified Dashboards & SLA Real-Time Alerts        |
+-------------------------------------------------------------+`
      },
      en: {
        problem: "Managing 150+ legacy and modern applications with manual, risky deployments, long maintenance windows, and fragmented observability.",
        solution: "Engineered standardized GitLab CI/Jenkins pipelines paired with idempotent Ansible playbooks, container orchestration, zero-downtime rolling updates, and full-stack Prometheus/Grafana telemetry.",
        stack: ["Kubernetes & Docker Compose", "GitLab CI / Jenkins / ArgoCD", "Ansible Automation", "AWS Cloud & VMware vSphere", "Linux (RHEL, Debian) & Windows Server", "PostgreSQL, Oracle Database, MariaDB", "Prometheus, Grafana, Nagios, SolarWinds", "Tomcat, Apache HTTP, Traefik"],
        diagram: `
+-------------------------------------------------------------+
|                 DEVELOPMENT & GIT REPOSITORIES              |
|  (GitLab / Git Workflows / Feature Branches)                |
+------------------------------+------------------------------+
                               | (Git Push / Tag Trigger)
                               v
+-------------------------------------------------------------+
|               CI/CD AUTOMATION & TESTING PIPELINE           |
|  - GitLab CI / Jenkins Runners: Automated Tests & Builds    |
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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
