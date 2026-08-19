/**
 * Comprehensive Bilingual Translation Dictionary (FR / EN)
 * Fares METIDJI - Senior DevOps & Full-Stack Cloud Engineer
 * Refined, authentic, and trust-building tone for Freelance Platforms (Codeur.com, Upwork, Malt)
 */

const translations = {
  fr: {
    // Meta & Header
    meta_title: "Fares METIDJI | Ingénieur DevOps & Développeur Full-Stack (IA & Cloud)",
    meta_desc: "Ingénieur DevOps & Développeur Full-Stack (5+ ans d'expérience, Master 2). Développement d'APIs FastAPI/Node, interfaces React, intégration d'APIs IA et déploiements Docker/CI-CD.",
    
    // Navbar
    nav_home: "Accueil",
    nav_approach: "Méthode",
    nav_services: "Prestations",
    nav_projects: "Réalisations",
    nav_skills: "Compétences",
    nav_experience: "Références",
    nav_contact: "Contact",
    nav_cta: "Me contacter",
    
    // Hero Section
    hero_greeting: "Bonjour, je suis",
    hero_name: "Fares METIDJI",
    hero_title: "Ingénieur DevOps & Développeur Full-Stack",
    hero_specialties: "Cloud & Conteneurs • Pipelines CI/CD • APIs Python & React • Support & MCO",
    hero_pitch: "Ingénieur diplômé d'un Master 2 en Réseaux & Sécurité avec plus de 5 ans d'expérience en entreprise (Conseil Départemental, Publicis, Vocalcom, Orange). J'accompagne les équipes et porteurs de projet pour développer des applications web/mobiles fiables et automatiser leurs déploiements Cloud.",
    hero_cta_projects: "Voir mes réalisations",
    hero_cta_contact: "Me contacter",
    hero_stats_exp: "Ans d'expérience",
    hero_stats_apps: "Applications gérées / livrées",
    hero_stats_uptime: "Disponibilité & Uptime",
    hero_stats_satisfaction: "Implication & Suivi",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "Engagements & Sérénité Client",
    pillars_subtitle: "Une collaboration pensée pour éliminer les incertitudes, garantir la qualité technique et vous faire gagner du temps.",
    pillar1_title: "Code Documenté & 100% Transférable",
    pillar1_desc: "Développement propre et typé (TypeScript, Python/FastAPI), code commenté et documentation d'architecture. Vous restez 100% propriétaire de votre projet, sans aucune dépendance technique.",
    pillar2_title: "Déploiements Maîtrisés & Zéro Stress",
    pillar2_desc: "Conteneurisation Docker standardisée, pipelines CI/CD reproductibles et vérifications de sécurité pour que vos mises en production se fassent en toute confiance, sans interruption.",
    pillar3_title: "Cadrage Réaliste & Garantie Post-Livraison",
    pillar3_desc: "Un périmètre clair défini ensemble dès le départ, une communication fluide au quotidien et une période de garantie incluse après livraison pour une passation sereine.",

    // Services
    services_title: "Prestations & Compétences",
    services_subtitle: "Des interventions concrètes adaptées à vos besoins techniques et à vos étapes de développement.",
    service_fullstack_title: "Développement Web & APIs",
    service_fullstack_desc: "Conception d'APIs backend (FastAPI, Fastify, Node.js), interfaces web réactives (React, TypeScript) et intégration de services tiers ou modèles IA.",
    service_fullstack_tag: "Web & Backend",
    service_devops_title: "DevOps & Déploiements Cloud",
    service_devops_desc: "Mise en place de pipelines CI/CD (GitLab CI, GitHub Actions), conteneurisation Docker, gestion de serveurs Linux et configuration AWS.",
    service_devops_tag: "DevOps & Cloud",
    service_automation_title: "Automatisation & Traitement de Données",
    service_automation_desc: "Scripts d'extraction de données (scraping), nettoyage et structuration en base relationnelle, alertes automatiques et webhooks.",
    service_automation_tag: "Automatisation",
    service_audit_title: "Maintenance, MCO & Résolution d'Incidents",
    service_audit_desc: "Diagnostic d'anomalies en production, analyse de logs, mise en place de monitoring (Prometheus/Grafana) et support technique.",
    service_audit_tag: "Maintenance & MCO",

    // Projects Section
    projects_title: "Projets & Études de Cas",
    projects_subtitle: "Exemples concrets de solutions techniques développées et documentées.",
    projects_filter_all: "Tous les Projets",
    projects_filter_ai: "IA & LLMs",
    projects_filter_devops: "DevOps & Cloud",
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
    skills_subtitle: "Technologies et outils utilisés au quotidien sur des projets concrets.",
    skills_cat_devops: "DevOps, Conteneurs & Cloud",
    skills_cat_backend: "Backend, APIs & Langages",
    skills_cat_frontend: "Frontend & Mobile",
    skills_cat_db: "Bases de Données & Caching",
    skills_cat_monitoring: "Monitoring & Systèmes",

    // Experience Section
    experience_title: "Expériences Professionnelles",
    experience_subtitle: "Un parcours au sein d'environnements d'entreprise et d'institutions publiques.",
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
    faq_subtitle: "Toutes les réponses pour aborder notre collaboration en toute sérénité.",
    faq1_q: "Comment se passe le premier échange ?",
    faq1_a: "Un échange simple de 20 à 30 minutes sans engagement pour faire le point sur vos objectifs, votre stack actuelle et vos délais. Si le projet correspond à mes compétences, je vous transmets une proposition claire sous 48h.",
    faq2_q: "Quelles sont les garanties sur les délais et le budget ?",
    faq2_a: "Pour un projet au forfait, le devis et les jalons sont fixés à l'avance sans surcoût imprévu. Pour une mission en régie (TJM), vous suivez l'avancement en temps réel avec des bilans d'activité réguliers.",
    faq3_q: "Suis-je propriétaire du code et de l'infrastructure ?",
    faq3_a: "Oui, à 100%. Tout le code source, les configurations Docker/CI-CD et la documentation technique vous sont intégralement transférés au fur et à mesure. Aucune clause obscure ni dépendance technique.",
    faq4_q: "Que se passe-t-il après la livraison finale ?",
    faq4_a: "Chaque livraison inclut une documentation de passation complète et une période de garantie (correction d'anomalies éventuelles et assistance à la prise en main) pour que vous soyez totalement serein.",

    // Contact Section
    contact_title: "Me Contacter",
    contact_subtitle: "Vous avez un projet ou une question technique ? Échangeons simplement et sans engagement.",
    contact_badge: "Échange Direct",
    contact_email_label: "Email :",
    contact_phone_label: "Téléphone :",
    contact_location_label: "Localisation :",
    contact_location_val: "Paris, France (Full Remote & Déplacements ponctuels en France)",
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
    meta_title: "Fares METIDJI | DevOps Engineer & Full-Stack Developer (AI & Cloud)",
    meta_desc: "DevOps Engineer & Full-Stack Developer (5+ years exp, Master's Degree). FastAPI/Node APIs, React interfaces, AI API integrations, and Docker/CI-CD workflows.",
    
    // Navbar
    nav_home: "Home",
    nav_approach: "Method",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_cta: "Contact Me",

    // Hero Section
    hero_greeting: "Hello, I am",
    hero_name: "Fares METIDJI",
    hero_title: "DevOps Engineer & Full-Stack Developer",
    hero_specialties: "Cloud & Containers • CI/CD Pipelines • Python & React APIs • Operational Maintenance (MCO)",
    hero_pitch: "Engineer holding a Master's Degree in Networks & Security with 5+ years of enterprise experience (Conseil Départemental, Publicis, Vocalcom, Orange). I partner with teams and founders to build dependable web/mobile applications and automate Cloud infrastructure.",
    hero_cta_projects: "View My Work",
    hero_cta_contact: "Contact Me",
    hero_stats_exp: "Years Experience",
    hero_stats_apps: "Applications Managed / Delivered",
    hero_stats_uptime: "Reliability & Uptime",
    hero_stats_satisfaction: "Commitment & Follow-up",

    // Value Pillars (Work Philosophy & Trust)
    pillars_title: "Client Commitments & Peace of Mind",
    pillars_subtitle: "A technical partnership designed to eliminate uncertainty, ensure clean delivery, and save you time.",
    pillar1_title: "Documented & 100% Transferable Code",
    pillar1_desc: "Clean typed development (TypeScript, Python/FastAPI), clear comments, and architectural documentation. You retain 100% ownership with zero vendor lock-in.",
    pillar2_title: "Smooth Deployments & Zero Stress",
    pillar2_desc: "Standardized Docker containers, reproducible CI/CD pipelines, and security hygiene to ensure confident zero-downtime releases.",
    pillar3_title: "Clear Scoping & Post-Delivery Warranty",
    pillar3_desc: "A realistic scope defined together upfront, regular progress updates, and an included warranty period after delivery for seamless onboarding.",

    // Services
    services_title: "Services & Capabilities",
    services_subtitle: "Practical engineering assistance tailored to your technical needs and development stage.",
    service_fullstack_title: "Web & API Development",
    service_fullstack_desc: "Backend API design (FastAPI, Fastify, Node.js), responsive web frontends (React, TypeScript), and third-party or AI model integrations.",
    service_fullstack_tag: "Web & Backend",
    service_devops_title: "DevOps & Cloud Deployments",
    service_devops_desc: "Automated CI/CD pipelines (GitLab CI, GitHub Actions), Docker containerization, Linux server management, and AWS setup.",
    service_devops_tag: "DevOps & Cloud",
    service_automation_title: "Automation & Data Processing",
    service_automation_desc: "Data extraction scripts (scraping), relational database normalization, automated alerts, and webhooks.",
    service_automation_tag: "Automation",
    service_audit_title: "Maintenance & Issue Troubleshooting",
    service_audit_desc: "Production anomaly diagnostics, log analysis, monitoring setup (Prometheus/Grafana), and operational technical support.",
    service_audit_tag: "Maintenance & MCO",

    // Projects Section
    projects_title: "Projects & Case Studies",
    projects_subtitle: "Concrete examples of technical solutions developed and documented.",
    projects_filter_all: "All Projects",
    projects_filter_ai: "AI & LLMs",
    projects_filter_devops: "DevOps & Cloud",
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
    faq_subtitle: "Clear answers to approach our collaboration with complete peace of mind.",
    faq1_q: "How does the initial discovery call work?",
    faq1_a: "A straightforward 20-30 minute conversation without obligation to review your goals, tech stack, and timeline. If it matches my expertise, I deliver a clear roadmap proposal within 48h.",
    faq2_q: "What guarantees exist for deadlines and budget?",
    faq2_a: "For fixed-price deliverables, the scope and milestone costs are locked upfront with zero surprise fees. For daily consulting (TJM), you receive continuous visibility and regular activity reports.",
    faq3_q: "Do I own 100% of the code and infra?",
    faq3_a: "Yes, 100%. All source code, Docker/CI-CD configurations, and documentation are fully transferred to you. No proprietary lock-in or technical dependencies.",
    faq4_q: "What happens after final delivery?",
    faq4_a: "Every delivery includes handoff documentation and an included warranty window (bug fixes and onboarding support) so your team operates with complete peace of mind.",

    // Contact Section
    contact_title: "Contact Me",
    contact_subtitle: "Have a project or technical question? Let's discuss your requirements without any obligation.",
    contact_badge: "Direct Contact",
    contact_email_label: "Email:",
    contact_phone_label: "Phone:",
    contact_location_label: "Location:",
    contact_location_val: "Paris, France (Full Remote & Occasional Travel across France)",
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
