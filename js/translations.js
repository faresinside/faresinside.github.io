/**
 * Comprehensive Bilingual Translation Dictionary (FR / EN)
 * Fares METIDJI - Senior DevOps & Full-Stack Cloud Engineer
 * Refined, authentic, and trust-building tone for Freelance Platforms (Codeur.com, Upwork, Malt)
 */

const translations = {
  fr: {
    // Meta & Header
    meta_title: "Fares METIDJI | Ingénieur DevSecOps & Développeur Full-Stack IA",
    meta_desc: "Consultant DevSecOps & Développeur Full-Stack Freelance (5+ ans d'exp, Master 2 Sécurité). Intégration d'IA (LLMs/RAG), backends FastAPI/React et infrastructures Cloud sécurisées (Docker/K8s/CI-CD).",
    
    // Navbar
    nav_home: "Accueil",
    nav_approach: "Méthode",
    nav_services: "Prestations",
    nav_projects: "Réalisations",
    nav_skills: "Compétences",
    nav_experience: "Références",
    nav_contact: "Contact",
    nav_status_badge: "Disponible pour missions Freelance & Régie",
    nav_cta: "Me contacter",
    
    // Hero Section
    hero_greeting: "Bonjour, je suis",
    hero_name: "Fares METIDJI",
    hero_role_prefix: "Ingénieur Freelance spécialisé en",
    hero_roles: [
      "DevSecOps & Sécurité Cloud (Docker, Kubernetes, Trivy, CI/CD)",
      "Intégration d'IA & Architectures RAG (LLMs, FastAPI, pgvector, Ollama)",
      "Développement Full-Stack (Python 3.12, TypeScript, React, Fastify)",
      "Diagnostic, MCO & Résolution d'Incidents de Production (N3)"
    ],
    hero_pitch: "Ingénieur avec 5+ ans d'expérience en entreprise (Conseil Départemental, Publicis, Vocalcom, Orange) et diplômé d'un Master 2 en Réseaux & Sécurité. J'aide les startups et équipes tech à concevoir des applications web/IA performantes et à industrialiser leurs infrastructures Cloud avec les standards DevSecOps.",
    hero_cta_projects: "Explorer mes réalisations",
    hero_cta_contact: "Me confier une mission",
    hero_stats_exp: "Ans d'expérience",
    hero_stats_apps: "Applications livrées",
    hero_stats_uptime: "Disponibilité & Uptime",
    hero_stats_satisfaction: "Engagements & Délais",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "Ma Méthode d'Accompagnement Freelance",
    pillars_subtitle: "Un partenariat technique fluide, axé sur l'intégration d'IA pragmatique, la sécurité DevSecOps et le code maintenable.",
    pillar1_title: "Architecture IA & Code Propre",
    pillar1_desc: "Conception d'APIs performantes (FastAPI, TypeScript), intégration de LLMs (OpenAI, Gemini, Ollama) et architectures RAG avec vector database pour enrichir vos produits.",
    pillar2_title: "Culture DevSecOps & Fiabilité",
    pillar2_desc: "Conteneurisation Docker durcie, scans de vulnérabilités (Trivy), gestion des secrets et pipelines CI/CD automatisés pour des mises en production sereines.",
    pillar3_title: "Flexibilité & Sécurité Contractuelle",
    pillar3_desc: "Intervention au forfait (livrables clés en main) ou au TJM (renfort d'équipe). Facturation claire, réactivité sous 24h et points d'étape réguliers.",

    // Services
    services_title: "Prestations & Domaines d'Intervention",
    services_subtitle: "Des expertises pointues pour accélérer votre développement produit et sécuriser vos déploiements.",
    service_fullstack_title: "Développement Web & Solutions IA",
    service_fullstack_desc: "Création d'APIs rapides (FastAPI, Fastify, Node.js), interfaces web réactives (React, TypeScript) et intégration de modèles d'IA (LLMs, RAG, Agents).",
    service_fullstack_tag: "Full-Stack & IA",
    service_devops_title: "DevSecOps & Déploiements Cloud",
    service_devops_desc: "Pipelines CI/CD sécurisés (GitLab CI, GitHub Actions), conteneurisation Docker, clusters Kubernetes durcis, scans de vulnérabilités et configuration AWS/Linux.",
    service_devops_tag: "DevSecOps & Cloud",
    service_automation_title: "Automatisation & Pipelines ETL",
    service_automation_desc: "Développement de scrapers de données asynchrones, pipelines d'ingestion et d'analyse automatisée par IA, et webhooks d'alertes en temps réel.",
    service_automation_tag: "Automation & Data",
    service_audit_title: "Audit de Sécurité, MCO & Support N3",
    service_audit_desc: "Audit de durcissement (Hardening), résolution d'incidents critiques en production, supervision (Prometheus/Grafana) et optimisation des coûts Cloud.",
    service_audit_tag: "Sécurité & MCO",

    // Projects Section
    projects_title: "Projets & Études de Cas",
    projects_subtitle: "Exemples concrets d'architectures techniques, d'intégrations IA et de déploiements sécurisés.",
    projects_filter_all: "Tous les Projets",
    projects_filter_ai: "IA & LLMs",
    projects_filter_devops: "DevSecOps & Cloud",
    projects_filter_fullstack: "Web & SaaS",
    projects_filter_automation: "Automatisation",
    projects_filter_mobile: "Mobile",
    projects_btn_arch: "Voir l'architecture",
    projects_btn_github: "Code / GitHub",

    // Modal Architecture
    modal_title_arch: "Architecture & Détails Techniques",
    modal_problem: "Objectif & Contexte",
    modal_solution: "Solution & Conception Technique",
    modal_stack: "Technologies Utilisées",
    modal_diagram: "Schéma d'Architecture",
    modal_close: "Fermer",

    // Interactive Terminal
    terminal_badge: "Terminal Interactif",
    terminal_title: "Aperçu Technique en Ligne de Commande",
    terminal_subtitle: "Pour explorer mon profil et mes compétences via une interface CLI interactive.",
    terminal_prompt_text: "Commandes suggérées :",
    terminal_chip_help: "help",
    terminal_chip_skills: "skills",
    terminal_chip_projects: "projects",
    terminal_chip_deploy: "deploy --prod",
    terminal_chip_status: "status",
    terminal_chip_hire: "hire",
    terminal_chip_clear: "clear",

    // Skills Section
    skills_title: "Compétences Techniques",
    skills_subtitle: "Technologies et outils utilisés au quotidien sur des projets réels.",
    skills_cat_devops: "DevOps, Conteneurs & Cloud",
    skills_cat_backend: "Backend, APIs & Langages",
    skills_cat_frontend: "Frontend & Mobile",
    skills_cat_db: "Bases de Données & Caching",
    skills_cat_monitoring: "Monitoring & Systèmes",

    // Experience Section
    experience_title: "Expériences Professionnelles",
    experience_subtitle: "Un parcours solide au sein d'environnements d'entreprise et d'institutions publiques.",
    exp1_date: "01/2025 – Présent",
    exp1_role: "Ingénieur Intégration & DevOps",
    exp1_company: "Conseil départemental des Yvelines",
    exp1_desc: "Intégration applicative et déploiement de plus de 150 applications métiers sur serveurs Linux et Windows. Maintenance et automatisation des pipelines GitLab CI, scripts Ansible/Python/PowerShell. Administration d'environnements Docker et Kubernetes. Support N3 et gestion de bases de données relationnelles.",
    exp2_date: "01/2024 – 01/2025",
    exp2_role: "Ingénieur Systèmes & Production",
    exp2_company: "Publicis Groupe",
    exp2_desc: "Maintien en condition opérationnelle d'infrastructures Linux et Windows. Résolution d'incidents critiques en production, supervision et automatisation de tâches via Bash et PowerShell.",
    exp3_date: "09/2021 – 01/2024",
    exp3_role: "Ingénieur Systèmes Cloud & On-Premise",
    exp3_company: "Vocalcom",
    exp3_desc: "Déploiement et intégration de la solution Hermès chez les clients. Administration et maintenance de la plateforme SaaS Vocalcom sur AWS (Linux/Windows) et support N3.",
    exp4_date: "09/2019 – 09/2021",
    exp4_role: "Ingénieur Systèmes & Réseaux VoIP",
    exp4_company: "Orange",
    exp4_desc: "Administration de la plateforme de téléphonie d'entreprise Cisco EVITA et support opérationnel des infrastructures réseau.",

    // Education & Diplomas
    education_title: "Formation Universitaire",
    edu1_degree: "Master 2 Informatique & Ingénierie des Systèmes Complexes",
    edu1_spec: "Spécialité Réseaux & Sécurité (RS)",
    edu1_school: "CY Cergy Paris Université (2019 – 2021)",
    edu2_degree: "Licence 3 Informatique",
    edu2_school: "CY Cergy Paris Université (2017 – 2019)",

    // Client FAQ
    faq_title: "Questions Fréquentes",
    faq_subtitle: "Quelques réponses pour préparer au mieux notre échange.",
    faq1_q: "Comment démarre une collaboration ?",
    faq1_a: "Nous commençons par un échange pour comprendre vos attentes, les contraintes techniques et les délais. Je vous propose ensuite un découpage clair des étapes avec des livrables concrets.",
    faq2_q: "Quel est votre mode de facturation ?",
    faq2_a: "Selon la nature du projet : au forfait pour les périmètres bien définis, ou au temps passé (TJM) pour les missions de conseil, DevOps continu ou développement itératif.",
    faq3_q: "Comment se déroule la contractualisation et la facturation ?",
    faq3_a: "Nous cadrons le projet avec un devis détaillé et un contrat clair (au forfait avec jalons de livraison ou au temps passé TJM). Facturation professionnelle avec mentions légales et modalités de règlement transparentes.",
    faq4_q: "Assurez-vous un suivi après la livraison ?",
    faq4_a: "Oui, je prévois systématiquement une documentation claire, des scripts de déploiement automatisés et une période de suivi pour garantir une transition fluide.",

    // Contact Section
    contact_title: "Me Contacter",
    contact_subtitle: "Vous avez un projet ou une question technique ? Échangeons simplement sur vos besoins.",
    contact_badge: "Disponible pour de nouvelles missions",
    contact_email_label: "Email :",
    contact_phone_label: "Téléphone :",
    contact_location_label: "Localisation :",
    contact_location_val: "Paris, France (Disponible en Full Remote & Déplacements ponctuels en France)",
    contact_btn_copy_email: "Copier l'email",
    contact_btn_copy_phone: "Copier le numéro",
    contact_form_name: "Votre Nom / Société :",
    contact_form_email: "Votre Email :",
    contact_form_service: "Type de mission :",
    contact_form_service_opt_dev: "Développement Web / Backend / API",
    contact_form_service_opt_ops: "DevOps, CI/CD & Déploiement Cloud",
    contact_form_service_opt_auto: "Automatisation & Web Scraping",
    contact_form_service_opt_other: "Autre / Conseil Technique",
    contact_form_budget: "Budget indicatif / TJM souhaité :",
    contact_form_message: "Votre message :",
    contact_form_placeholder_msg: "Présentez brièvement votre projet, les technologies envisagées ou vos délais...",
    contact_form_submit: "Envoyer le message ✉️",
    contact_form_success: "Merci ! Votre message a été préparé.",
    
    // Footer & Actions
    footer_rights: "Fares METIDJI. Développeur Full-Stack & Ingénieur DevOps.",
    toast_copied: "Copié dans le presse-papiers !",
    back_to_top: "Haut de page"
  },

  en: {
    // Meta & Header
    meta_title: "Fares METIDJI | DevSecOps Engineer & Full-Stack AI Developer",
    meta_desc: "Freelance DevSecOps Consultant & Full-Stack Developer (5+ years exp, Master 2 in Networks & Security). AI & LLM Integrations, FastAPI/React backends, and hardened Cloud infrastructure (Docker/K8s/CI-CD).",
    
    // Navbar
    nav_home: "Home",
    nav_approach: "Method",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_status_badge: "Available for Freelance & Remote Contracts",
    nav_cta: "Contact Me",

    // Hero Section
    hero_greeting: "Hello, I am",
    hero_name: "Fares METIDJI",
    hero_role_prefix: "Freelance Engineer specialized in",
    hero_roles: [
      "DevSecOps & Cloud Hardening (Docker, Kubernetes, Trivy, CI/CD)",
      "AI & LLM Integration / RAG (FastAPI, pgvector, Ollama, LangChain)",
      "Full-Stack Development (Python 3.12, TypeScript, React, Fastify)",
      "Production Troubleshooting, MCO & Tier-3 Support"
    ],
    hero_pitch: "Engineer with 5+ years of enterprise experience (Conseil Départemental, Publicis, Vocalcom, Orange) and a Master's Degree in Networks & Cybersecurity. I help startups and tech teams build resilient web & AI applications and automate their Cloud infrastructure using modern DevSecOps practices.",
    hero_cta_projects: "Explore My Work",
    hero_cta_contact: "Start a Collaboration",
    hero_stats_exp: "Years Experience",
    hero_stats_apps: "Applications Delivered",
    hero_stats_uptime: "Reliability & Uptime",
    hero_stats_satisfaction: "Milestones & Delivery",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "How We Collaborate",
    pillars_subtitle: "A pragmatic technical partnership focused on AI integration, DevSecOps security, and maintainable code.",
    pillar1_title: "AI Architecture & Clean Code",
    pillar1_desc: "High-performance APIs (FastAPI, TypeScript), LLM integrations (OpenAI, Gemini, Ollama), and RAG vector search pipelines to empower your digital products.",
    pillar2_title: "DevSecOps & Production Reliability",
    pillar2_desc: "Hardened Docker containers, vulnerability scanning (Trivy), automated secrets management, and robust CI/CD pipelines for smooth zero-downtime releases.",
    pillar3_title: "Flexibility & Seamless Invoicing",
    pillar3_desc: "Fixed-price project scopes (turnkey deliverables) or daily rate (TJM) consulting. Transparent billing, 24h response time, and regular progress updates.",

    // Services
    services_title: "Freelance Services & Expertise",
    services_subtitle: "Specialized engineering to accelerate your roadmap and secure your Cloud deployments.",
    service_fullstack_title: "Web Development & AI Solutions",
    service_fullstack_desc: "High-performance backends (FastAPI, Fastify, Node.js), responsive frontends (React, TypeScript), and AI model integration (LLMs, RAG, Agents).",
    service_fullstack_tag: "Full-Stack & AI",
    service_devops_title: "DevSecOps & Cloud Hardening",
    service_devops_desc: "Automated CI/CD security pipelines (GitLab CI, GitHub Actions), hardened Docker/Kubernetes clusters, vulnerability scans, and Linux/AWS configuration.",
    service_devops_tag: "DevSecOps & Cloud",
    service_automation_title: "Automation & ETL Pipelines",
    service_automation_desc: "Custom asynchronous data scrapers, automated ingestion & AI-driven text analysis pipelines, and multi-channel alerting webhooks.",
    service_automation_tag: "Automation & Data",
    service_audit_title: "Security Auditing, MCO & Tier-3 Support",
    service_audit_desc: "Production issue diagnostics, infrastructure hardening, Prometheus/Grafana observability, and Cloud cost optimization.",
    service_audit_tag: "Security & MCO",

    // Projects Section
    projects_title: "Featured Projects & Case Studies",
    projects_subtitle: "Concrete examples of technical architectures, AI integrations, and hardened Cloud systems.",
    projects_filter_all: "All Projects",
    projects_filter_ai: "AI & LLMs",
    projects_filter_devops: "DevSecOps & Cloud",
    projects_filter_fullstack: "Web & SaaS",
    projects_filter_automation: "Automation",
    projects_filter_mobile: "Mobile",
    projects_btn_arch: "View Architecture",
    projects_btn_github: "Code / GitHub",

    // Modal Architecture
    modal_title_arch: "Architecture & Technical Deep Dive",
    modal_problem: "Goal & Context",
    modal_solution: "Engineering Solution & Design",
    modal_stack: "Core Stack & Libraries",
    modal_diagram: "Architecture Blueprint",
    modal_close: "Close",

    // Interactive Terminal
    terminal_badge: "Interactive Terminal",
    terminal_title: "Command-Line Technical Overview",
    terminal_subtitle: "Explore my profile and technical credentials through an interactive CLI interface.",
    terminal_prompt_text: "Suggested commands:",
    terminal_chip_help: "help",
    terminal_chip_skills: "skills",
    terminal_chip_projects: "projects",
    terminal_chip_deploy: "deploy --prod",
    terminal_chip_status: "status",
    terminal_chip_hire: "hire",
    terminal_chip_clear: "clear",

    // Skills Section
    skills_title: "Technical Skills",
    skills_subtitle: "Technologies and tools used daily across real-world systems.",
    skills_cat_devops: "DevOps, Containers & Cloud",
    skills_cat_backend: "Backend, APIs & Languages",
    skills_cat_frontend: "Frontend & Mobile",
    skills_cat_db: "Databases & Caching",
    skills_cat_monitoring: "Monitoring & Systems",

    // Experience Section
    experience_title: "Work Experience",
    experience_subtitle: "Proven track record across corporate enterprises and public institutions.",
    exp1_date: "01/2025 – Present",
    exp1_role: "DevOps & Systems Integration Engineer",
    exp1_company: "Conseil départemental des Yvelines",
    exp1_desc: "Application integration and deployment across 150+ critical enterprise services on Linux and Windows. Maintained and automated GitLab CI pipelines and Ansible/Python/PowerShell scripts. Managed Docker and Kubernetes clusters, N3 incident troubleshooting, and database administration.",
    exp2_date: "01/2024 – 01/2025",
    exp2_role: "Systems & Production Engineer",
    exp2_company: "Publicis Groupe",
    exp2_desc: "Production maintenance and operational continuity of Linux and Windows hybrid infrastructure. Tier-3 critical incident triage, platform monitoring, and automation via Bash and PowerShell.",
    exp3_date: "09/2021 – 01/2024",
    exp3_role: "Cloud & Systems Engineer",
    exp3_company: "Vocalcom",
    exp3_desc: "Deployment of Hermes solution for enterprise clients. Managed and maintained the Vocalcom SaaS platform on AWS (Linux/Windows) and handled Tier-3 production escalations.",
    exp4_date: "09/2019 – 09/2021",
    exp4_role: "Systems & VoIP Network Engineer",
    exp4_company: "Orange",
    exp4_desc: "Administration of Cisco EVITA enterprise telephony infrastructure and operational support for VoIP network infrastructure.",

    // Education & Diplomas
    education_title: "Academic Background",
    edu1_degree: "Master's Degree in Computer Science & Complex Systems Engineering",
    edu1_spec: "Networks & Cybersecurity Specialization",
    edu1_school: "CY Cergy Paris University (2019 – 2021)",
    edu2_degree: "Bachelor's Degree in Computer Science",
    edu2_school: "CY Cergy Paris University (2017 – 2019)",

    // Client FAQ
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Helpful details to prepare our project kickoff.",
    faq1_q: "How do we start a collaboration?",
    faq1_a: "We begin with a brief scoping discussion to clarify your goals, technical constraints, and timeline. I then provide a clear breakdown of milestones with concrete deliverables.",
    faq2_q: "What is your pricing structure?",
    faq2_a: "Depending on your project: fixed-price milestones for well-defined scopes, or daily rate (TJM) for ongoing DevOps consulting and iterative development.",
    faq3_q: "How do contracting and invoicing work?",
    faq3_a: "We define a clear agreement and scope (either fixed-price deliverables or daily consulting rate). Standard corporate invoices are issued with transparent payment milestones and full business compliance.",
    faq4_q: "Do you provide post-delivery support?",
    faq4_a: "Yes, I provide clear documentation, automated deployment scripts, and a follow-up warranty window to ensure a smooth transition.",

    // Contact Section
    contact_title: "Contact Me",
    contact_subtitle: "Have a project or technical question? Let's discuss your requirements.",
    contact_badge: "Available for New Projects",
    contact_email_label: "Email:",
    contact_phone_label: "Phone:",
    contact_location_label: "Location:",
    contact_location_val: "Paris, France (Available for Full Remote & Occasional Travel across France)",
    contact_btn_copy_email: "Copy Email",
    contact_btn_copy_phone: "Copy Phone",
    contact_form_name: "Your Name / Company:",
    contact_form_email: "Your Email Address:",
    contact_form_service: "Project Scope:",
    contact_form_service_opt_dev: "Web / Backend / API Development",
    contact_form_service_opt_ops: "DevOps, CI/CD & Cloud Deployments",
    contact_form_service_opt_auto: "Automation & Web Scraping",
    contact_form_service_opt_other: "Other / Technical Consulting",
    contact_form_budget: "Estimated Budget / Daily Rate:",
    contact_form_message: "Your Message:",
    contact_form_placeholder_msg: "Briefly describe your project, preferred technologies, or expected timeline...",
    contact_form_submit: "Send Message ✉️",
    contact_form_success: "Thank you! Your message has been prepared.",
    
    // Footer & Actions
    footer_rights: "Fares METIDJI. Full-Stack Developer & DevOps Engineer.",
    toast_copied: "Copied to clipboard!",
    back_to_top: "Back to top"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
