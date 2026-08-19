/**
 * Comprehensive Bilingual Translation Dictionary (FR / EN)
 * Fares METIDJI - Senior DevOps & Full-Stack Cloud Engineer
 * Refined, authentic, and trust-building tone for Freelance Platforms (Codeur.com, Upwork, Malt)
 */

const translations = {
  fr: {
    // Meta & Header
    meta_title: "Fares METIDJI | Ingénieur DevOps & Développeur Full-Stack Cloud",
    meta_desc: "Portfolio de Fares METIDJI, Ingénieur DevOps & Développeur Full-Stack (5+ ans d'expérience). Conception d'applications web/mobiles et automatisation d'infrastructures Cloud fiables.",
    
    // Navbar
    nav_home: "Accueil",
    nav_approach: "Méthode",
    nav_services: "Services",
    nav_projects: "Réalisations",
    nav_terminal: "Terminal Live",
    nav_skills: "Compétences",
    nav_experience: "Parcours",
    nav_contact: "Contact",
    nav_status_badge: "Disponible pour missions Freelance & Régie",
    nav_cta: "Échanger sur un projet",
    
    // Hero Section
    hero_greeting: "Bonjour, je suis",
    hero_name: "Fares METIDJI",
    hero_role_prefix: "Spécialisé en",
    hero_roles: [
      "DevOps & Infrastructure Cloud (Docker, Kubernetes, CI/CD)",
      "Développement Full-Stack (TypeScript, Python, React, FastAPI)",
      "Automatisation, Web Scraping & Intégration d'APIs",
      "Maintenance & Résolution d'Incidents de Production (N3)"
    ],
    hero_pitch: "Ingénieur avec plus de 5 ans d'expérience en entreprise (Conseil Départemental, Publicis, Vocalcom, Orange). J'aide les équipes et les porteurs de projet à concevoir des applications fiables et à automatiser leur mise en production avec rigueur et transparence.",
    hero_cta_projects: "Voir mes réalisations",
    hero_cta_contact: "Me contacter directement",
    hero_cta_cv: "Consulter mon CV",
    hero_stats_exp: "Ans d'expérience",
    hero_stats_apps: "Applications en production",
    hero_stats_uptime: "Disponibilité & Fiabilité",
    hero_stats_satisfaction: "Engagements respectés",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "Comment Nous Travaillons Ensemble",
    pillars_subtitle: "Une approche pragmatique, axée sur la qualité du code, la sécurité et la communication continue.",
    pillar1_title: "Code Propre & Maintenable",
    pillar1_desc: "Développement typé (TypeScript, Python 3.12), architecture modulaire, tests automatisés et documentation claire pour que vous restiez 100% autonome sur votre projet.",
    pillar2_title: "Culture DevOps & Fiabilité",
    pillar2_desc: "Conteneurisation Docker, pipelines CI/CD automatisés, reverse proxies sécurisés et monitoring pour des déploiements sereins et sans coupure de service.",
    pillar3_title: "Transparence & Échanges Réguliers",
    pillar3_desc: "Communication claire, points d'avancement réguliers, respect strict des délais et accompagnement bienveillant tout au long de la mission.",

    // Services
    services_title: "Domaines d'Intervention",
    services_subtitle: "Des prestations adaptées à vos besoins, au forfait ou en régie (TJM).",
    service_fullstack_title: "Développement Web & APIs",
    service_fullstack_desc: "Conception de backends performants (FastAPI, Fastify, Node.js), d'interfaces web réactives (React, TypeScript) et d'applications mobiles (React Native).",
    service_fullstack_tag: "Full-Stack",
    service_devops_title: "DevOps & Déploiements Cloud",
    service_devops_desc: "Mise en place de pipelines CI/CD (GitLab CI, GitHub Actions), conteneurisation Docker, orchestration Kubernetes et configuration de serveurs Linux/AWS.",
    service_devops_tag: "DevOps & Cloud",
    service_automation_title: "Automatisation & Web Scraping",
    service_automation_desc: "Développement de scripts d'automatisation, extracteurs de données asynchrones, pipelines ETL et notifications automatiques (Webhooks, Telegram, Discord).",
    service_automation_tag: "Automation",
    service_audit_title: "Maintenance & Résolution d'Incidents",
    service_audit_desc: "Diagnostic d'erreurs en production, optimisation des performances, mise en place de monitoring (Prometheus/Grafana) et sécurisation d'environnements.",
    service_audit_tag: "Support & MCO",

    // Projects Section
    projects_title: "Projets & Études de Cas",
    projects_subtitle: "Exemples concrets d'architectures techniques et de solutions développées.",
    projects_filter_all: "Tous les Projets",
    projects_filter_fullstack: "Web & SaaS",
    projects_filter_devops: "DevOps & Cloud",
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
    faq3_q: "Pouvons-nous passer par Codeur.com, Upwork ou Malt ?",
    faq3_a: "Oui, sans aucun problème. Nous pouvons collaborer via la plateforme de votre choix (Upwork, Codeur.com, Malt) ou en direct par contrat de prestation.",
    faq4_q: "Assurez-vous un suivi après la livraison ?",
    faq4_a: "Oui, je prévois systématiquement une documentation claire, des scripts de déploiement automatisés et une période de suivi pour garantir une transition fluide.",

    // Contact Section
    contact_title: "Me Contacter",
    contact_subtitle: "Vous avez un projet ou une question technique ? Échangeons simplement sur vos besoins.",
    contact_badge: "Disponible pour de nouvelles missions",
    contact_email_label: "Email :",
    contact_phone_label: "Téléphone :",
    contact_location_label: "Localisation :",
    contact_location_val: "Paris, France (Disponible en Full Remote & Déplacements ponctuels IDF)",
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
    meta_title: "Fares METIDJI | DevOps Engineer & Full-Stack Cloud Developer",
    meta_desc: "Portfolio of Fares METIDJI, DevOps Engineer & Full-Stack Developer (5+ years exp). Building resilient web/mobile applications and automating reliable Cloud infrastructure.",
    
    // Navbar
    nav_home: "Home",
    nav_approach: "Approach",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_terminal: "Live CLI",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_status_badge: "Available for Freelance & Remote Contracts",
    nav_cta: "Discuss a Project",

    // Hero Section
    hero_greeting: "Hello, I am",
    hero_name: "Fares METIDJI",
    hero_role_prefix: "Specialized in",
    hero_roles: [
      "DevOps & Cloud Infrastructure (Docker, Kubernetes, CI/CD)",
      "Full-Stack Development (TypeScript, Python, React, FastAPI)",
      "Automation, Web Scraping & API Integrations",
      "Production Troubleshooting & Reliability (Tier-3 Support)"
    ],
    hero_pitch: "Engineer with 5+ years of enterprise experience (Conseil Départemental, Publicis, Vocalcom, Orange). I help tech teams and founders build dependable applications and automate their production deployments with rigor and transparency.",
    hero_cta_projects: "View My Work",
    hero_cta_contact: "Contact Me Directly",
    hero_cta_cv: "View Resume",
    hero_stats_exp: "Years Experience",
    hero_stats_apps: "Apps in Production",
    hero_stats_uptime: "Reliability & Uptime",
    hero_stats_satisfaction: "Milestones Delivered",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "How We Work Together",
    pillars_subtitle: "A pragmatic approach focused on clean code, security, and continuous communication.",
    pillar1_title: "Clean & Maintainable Code",
    pillar1_desc: "Strictly typed code (TypeScript, Python 3.12), modular architecture, automated test suites, and clear documentation so your team stays completely autonomous.",
    pillar2_title: "DevOps & Production Reliability",
    pillar2_desc: "Docker containerization, automated CI/CD pipelines, secured reverse proxies, and monitoring to ensure smooth, zero-downtime deployments.",
    pillar3_title: "Clear Communication & Transparency",
    pillar3_desc: "Regular progress updates, transparent timelines, and dedicated support throughout the engagement.",

    // Services
    services_title: "Services & Expertise",
    services_subtitle: "Tailored to your needs, whether on fixed-price milestones or daily rate consulting.",
    service_fullstack_title: "Web & API Development",
    service_fullstack_desc: "High-performance backends (FastAPI, Fastify, Node.js), responsive web frontends (React, TypeScript), and cross-platform mobile apps (React Native).",
    service_fullstack_tag: "Full-Stack",
    service_devops_title: "DevOps & Cloud Deployments",
    service_devops_desc: "Automated CI/CD pipelines (GitLab CI, GitHub Actions), Docker containerization, Kubernetes orchestration, and Linux/AWS server configuration.",
    service_devops_tag: "DevOps & Cloud",
    service_automation_title: "Automation & Web Scraping",
    service_automation_desc: "Custom automation scripts, asynchronous web scrapers, data processing ETL pipelines, and automated alerts (Webhooks, Telegram, Discord).",
    service_automation_tag: "Automation",
    service_audit_title: "Maintenance & Troubleshooting",
    service_audit_desc: "Production incident diagnosis, performance optimization, monitoring setup (Prometheus/Grafana), and environment security hardening.",
    service_audit_tag: "Support & MCO",

    // Projects Section
    projects_title: "Featured Projects & Case Studies",
    projects_subtitle: "Concrete examples of technical architectures and software solutions.",
    projects_filter_all: "All Projects",
    projects_filter_fullstack: "Web & SaaS",
    projects_filter_devops: "DevOps & Cloud",
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
    faq3_q: "Can we work via Codeur.com, Upwork, or Malt?",
    faq3_a: "Yes, absolutely. We can collaborate through your preferred platform (Upwork, Codeur.com, Malt) or via direct business invoicing.",
    faq4_q: "Do you provide post-delivery support?",
    faq4_a: "Yes, I provide clear documentation, automated deployment scripts, and a follow-up warranty window to ensure a smooth transition.",

    // Contact Section
    contact_title: "Contact Me",
    contact_subtitle: "Have a project or technical question? Let's discuss your requirements.",
    contact_badge: "Available for New Projects",
    contact_email_label: "Email:",
    contact_phone_label: "Phone:",
    contact_location_label: "Location:",
    contact_location_val: "Paris, France (Available for Full Remote & Local Meetings in Paris)",
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
