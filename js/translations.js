/**
 * Comprehensive Bilingual Translation Dictionary (FR / EN)
 * Fares METIDJI - Senior DevOps & Full-Stack Cloud Engineer
 * Refined, authentic, and trust-building tone for Freelance Platforms (Codeur.com, Upwork, Malt)
 */

const translations = {
  fr: {
    // Meta & Header
    meta_title: "Fares METIDJI | Ingénieur DevOps & Développeur Full-Stack Freelance",
    meta_desc: "Consultant DevOps & Développeur Full-Stack Freelance (5+ ans d'exp). Accompagnement de startups, PMEs et équipes tech : APIs FastAPI/Node, interfaces React et infrastructures Docker/Kubernetes fiables.",
    
    // Navbar
    nav_home: "Accueil",
    nav_approach: "Méthode Freelance",
    nav_services: "Prestations",
    nav_projects: "Réalisations",
    nav_terminal: "Terminal Live",
    nav_skills: "Compétences",
    nav_experience: "Références",
    nav_contact: "Contact Freelance",
    nav_status_badge: "Disponible pour nouvelles missions Freelance",
    nav_cta: "Me contacter",
    
    // Hero Section
    hero_greeting: "Bonjour, je suis",
    hero_name: "Fares METIDJI",
    hero_role_prefix: "Ingénieur Freelance spécialisé en",
    hero_roles: [
      "DevOps & Industrialisation Cloud (Docker, Kubernetes, CI/CD)",
      "Développement Full-Stack (Python, FastAPI, TypeScript, React)",
      "Automatisation, Scrapers de Données & Intégration d'APIs",
      "Diagnostic & Maintien en Condition Opérationnelle (MCO)"
    ],
    hero_pitch: "Consultant DevOps & Développeur Full-Stack avec 5+ ans d'expérience (Conseil Départemental, Publicis, Vocalcom, Orange). J'accompagne les entreprises, startups et agences au forfait ou en régie pour concevoir des applications solides et automatiser leurs déploiements Cloud.",
    hero_cta_projects: "Explorer mes réalisations",
    hero_cta_contact: "Me confier une mission",
    hero_stats_exp: "Ans d'expérience",
    hero_stats_apps: "Applications livrées",
    hero_stats_uptime: "Disponibilité & Uptime",
    hero_stats_satisfaction: "Engagements & Délais",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "Ma Méthode d'Accompagnement Freelance",
    pillars_subtitle: "Un partenariat technique fluide, transparent et axé sur la livraison concrète de valeur.",
    pillar1_title: "Cadrage Clair & Autonomie 100%",
    pillar1_desc: "Analyse pragmatique de votre besoin, code typé et documenté, pour que votre équipe reste parfaitement autonome sans dépendance technique.",
    pillar2_title: "Livrables Clés en Main & DevOps",
    pillar2_desc: "Applications conteneurisées (Docker), scripts de déploiement automatisés et reverse proxies sécurisés prêts pour la production.",
    pillar3_title: "Flexibilité & Sécurité Contractuelle",
    pillar3_desc: "Intervention au forfait ou au TJM, en direct ou via plateformes sécurisées (Codeur.com, Malt, Upwork). Réactivité et points d'étape réguliers.",

    // Services
    services_title: "Prestations & Modes d'Intervention",
    services_subtitle: "Missions au forfait ou en renfort d'équipe (TJM) adaptées à vos objectifs.",
    service_fullstack_title: "Développement Web & APIs",
    service_fullstack_desc: "Création de backends rapides (FastAPI, Fastify, Node.js), d'interfaces web réactives (React, TypeScript) et d'applications mobiles (React Native).",
    service_fullstack_tag: "Full-Stack Web",
    service_devops_title: "DevOps & Déploiements Cloud",
    service_devops_desc: "Mise en place de pipelines CI/CD (GitLab CI, GitHub Actions), conteneurisation Docker, orchestration Kubernetes et configuration de serveurs Linux/AWS.",
    service_devops_tag: "DevOps & Cloud",
    service_automation_title: "Automatisation & Web Scraping",
    service_automation_desc: "Développement de scripts d'automatisation sur-mesure, extracteurs de données asynchrones, pipelines ETL et webhooks d'alertes.",
    service_automation_tag: "Automation",
    service_audit_title: "Audit, MCO & Résolution d'Incidents",
    service_audit_desc: "Diagnostic de bugs critiques en production, optimisation des performances, monitoring Prometheus/Grafana et sécurisation d'environnements.",
    service_audit_tag: "Support & Audit",

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
    meta_title: "Fares METIDJI | Senior DevOps & Full-Stack Freelance Engineer",
    meta_desc: "Freelance DevOps Consultant & Full-Stack Developer (5+ years exp). Helping startups, tech teams, and agencies build resilient web/mobile apps and automate production Cloud infrastructure.",
    
    // Navbar
    nav_home: "Home",
    nav_approach: "Freelance Approach",
    nav_services: "Services",
    nav_projects: "Case Studies",
    nav_terminal: "Live CLI",
    nav_skills: "Skills",
    nav_experience: "Track Record",
    nav_contact: "Hire Me",
    nav_status_badge: "Available for Freelance & Remote Contracts",
    nav_cta: "Hire Me",

    // Hero Section
    hero_greeting: "Hello, I am",
    hero_name: "Fares METIDJI",
    hero_role_prefix: "Freelance Engineer specialized in",
    hero_roles: [
      "DevOps & Cloud Automation (Docker, Kubernetes, CI/CD)",
      "Full-Stack Development (Python, FastAPI, TypeScript, React)",
      "Automation, Data Scrapers & API Integrations",
      "Production Troubleshooting & Reliability (MCO)"
    ],
    hero_pitch: "Senior DevOps Consultant & Full-Stack Developer with 5+ years of experience (Conseil Départemental, Publicis, Vocalcom, Orange). I partner with startups, scale-ups, and tech leads on fixed-price milestones or daily consulting to build dependable systems.",
    hero_cta_projects: "Explore My Work",
    hero_cta_contact: "Start a Collaboration",
    hero_stats_exp: "Years Experience",
    hero_stats_apps: "Applications Delivered",
    hero_stats_uptime: "Reliability & Uptime",
    hero_stats_satisfaction: "Milestones & Delivery",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "How We Collaborate",
    pillars_subtitle: "A pragmatic technical partnership focused on clean code, security, and continuous delivery.",
    pillar1_title: "Clear Scoping & 100% Autonomy",
    pillar1_desc: "Strictly typed, modular, and well-documented code so your team stays completely independent without technical lock-in.",
    pillar2_title: "Production-Ready DevOps Deliverables",
    pillar2_desc: "Docker containerization, automated CI/CD workflows, and secured reverse proxies built for zero-downtime operations.",
    pillar3_title: "Flexibility & Seamless Invoicing",
    pillar3_desc: "Fixed-price project scopes or daily rate (TJM) consulting. Direct contractual agreements or via Upwork, Malt, and Codeur.com.",

    // Services
    services_title: "Freelance Services & Expertise",
    services_subtitle: "Tailored to your roadmap, whether on fixed deliverables or engineering reinforcement.",
    service_fullstack_title: "Web & API Development",
    service_fullstack_desc: "High-performance backends (FastAPI, Fastify, Node.js), responsive web frontends (React, TypeScript), and mobile applications (React Native).",
    service_fullstack_tag: "Full-Stack Web",
    service_devops_title: "DevOps & Cloud Automation",
    service_devops_desc: "Automated CI/CD pipelines (GitLab CI, GitHub Actions), Docker containerization, Kubernetes clusters, and Linux/AWS architecture.",
    service_devops_tag: "DevOps & Cloud",
    service_automation_title: "Automation & Data Scraping",
    service_automation_desc: "Custom asynchronous data scrapers, automated ETL processing pipelines, and multi-channel alerting webhooks.",
    service_automation_tag: "Automation",
    service_audit_title: "Audit, MCO & Incident Troubleshooting",
    service_audit_desc: "Production issue diagnostics, performance profiling, Prometheus/Grafana monitoring, and environment security hardening.",
    service_audit_tag: "Support & Audit",

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
