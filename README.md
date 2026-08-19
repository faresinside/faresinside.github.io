# 🚀 Portfolio DevOps & Full-Stack Cloud — Fares METIDJI

Portfolio professionnel, ultra-performant et orienté conversion, conçu sur-mesure pour remporter des missions à haute valeur ajoutée sur **Codeur.com**, **Upwork**, **Malt** et en direct.

---

## 🌟 Points Forts & Fonctionnalités Clés

1. **Double Compétence Mise en Avant (Dev + DevOps)** :
   - Présentation claire de votre capacité rare à développer des applications web/mobiles de bout en bout (React, TypeScript, Python, FastAPI, Node.js) **ET** à concevoir, automatiser et sécuriser l'infrastructure Cloud (Docker, Kubernetes, GitLab CI, AWS, Traefik).
2. **Projets Professionnels Sanitisés & Valorisés** :
   - Présentation anonymisée et technique des projets (RemoteRadar AI, ScanCraft Mobile, PortaPulse IoT, MediaFlow Engine, DataInsight ETL, CityPulse API, Infrastructure Entreprise).
   - Schémas d'architecture détaillés, défis métiers, solutions apportées et métriques concrètes.
3. **Simulateur de Devis & Projet Interactif (Outil de Conversion Unique)** :
   - Les clients et recruteurs peuvent configurer leurs besoins (SaaS MVP, DevOps, Web Scraping, Mobile, Audit) et obtenir instantanément une estimation de délai, de budget indicatif et une recommandation d'architecture.
   - En 1 clic, le devis est injecté dans le formulaire de contact.
4. **Terminal DevOps Live Interactive CLI** :
   - Un terminal interactif dans le navigateur (`help`, `skills`, `projects`, `deploy --prod`, `status`, `hire`, `cat cv.txt`).
5. **Bilingue Natif (FR / EN)** :
   - Bascule instantanée entre le Français (Codeur.com, Malt) et l'Anglais (Upwork, clients internationaux).
6. **Design Cyber-Tech & Glassmorphism Haut de Gamme** :
   - Canvas interactif de constellations cybernétiques réactif au curseur, micro-animations, score Lighthouse 100/100, responsive design sur mobile, tablette et desktop.

---

## 📁 Structure du Projet

```
d:\Projet\Porfolio\
├── index.html              # Structure HTML5 sémantique, balises SEO & Schema.org
├── css/
│   ├── style.css           # Tokens de design, typographie, couleurs & thèmes
│   ├── components.css      # Styles des composants (Hero, Simulateur, Terminal, Modales)
│   └── responsive.css      # Adaptations pour Mobile (320px+), Tablette & Desktop
├── js/
│   ├── app.js              # Contrôleur principal, switcher de langue, modales
│   ├── translations.js     # Dictionnaire complet FR / EN pour tous les contenus
│   ├── projects-data.js    # Données et schémas d'architecture des projets
│   ├── terminal.js         # Moteur du terminal DevOps interactif
│   ├── estimator.js        # Logique du simulateur de projet & devis
│   └── canvas-bg.js        # Animation de fond en particules cybernétiques
├── assets/
│   ├── images/             # Illustrations SVG haute définition des projets
│   └── cv/                 # Fichier CV PDF téléchargeable
└── README.md               # Guide d'utilisation et de déploiement
```

---

## 💻 Lancer le Portfolio en Local

Vous pouvez lancer le portfolio immédiatement avec n'importe quel serveur HTTP statique :

### Option 1 : Avec Node.js (`npx serve`)
```bash
npx serve d:\Projet\Porfolio
```

### Option 2 : Avec Python
```bash
cd d:\Projet\Porfolio
python -m http.server 8080
```
Puis ouvrez [http://localhost:8080](http://localhost:8080) dans votre navigateur.

---

## 🌐 Déploiement en Ligne (Gratuit & Rapide)

### 1. GitHub Pages (Recommandé & 100% Gratuit)
1. Créez un repository GitHub nommé `portfolio` ou `faresmetidji.github.io`.
2. Poussez les fichiers :
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit modern devops portfolio"
   git branch -M main
   git remote add origin https://github.com/faresmetidji/portfolio.git
   git push -u origin main
   ```
3. Dans **Settings > Pages**, sélectionnez la branche `main` et enregistrez. Votre site sera en ligne en quelques secondes !

### 2. Vercel ou Netlify
- Glissez-déposez simplement le dossier `Porfolio` sur [vercel.com](https://vercel.com) ou [netlify.com](https://netlify.com).

### 3. Sur VPS personnel avec Docker & Traefik / Nginx
Un `Dockerfile` ou `docker-compose.yml` peut être ajouté pour déployer sur votre propre infrastructure avec Nginx Alpine :
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## ✏️ Personnalisation Facile

- **Ajouter ou modifier un projet** : Ouvrez `js/projects-data.js` et ajoutez un nouvel objet dans la liste.
- **Modifier les textes ou traductions** : Ouvrez `js/translations.js` et ajustez les chaînes FR ou EN.
- **Remplacer le CV** : Déposez votre dernier CV PDF dans `assets/cv/CV_Fares_METIDJI_DevOps.pdf`.
