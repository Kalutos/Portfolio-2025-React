# Portfolio 2025 - Frontend

Portfolio personnel full-stack développé avec Next.js 15, React 19 et TypeScript. Ce projet présente les compétences, expériences et projets d'Arthur Selva, développeur full-stack junior basé en région parisienne.

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Développement](#développement)
- [Déploiement](#déploiement)
- [Architecture](#architecture)
- [Composants](#composants)
- [Configuration](#configuration)
- [Améliorations futures](#améliorations-futures)

## 🎯 Vue d'ensemble

Ce portfolio est une application web moderne et responsive qui présente :
- **Section Hero** : Introduction avec animation de texte typewriter
- **Section À propos** : Présentation personnelle avec onglets (Expérience, Compétences, Histoire)
- **Section Portfolio** : Galerie de projets avec système de filtres
- **Section Contact** : Formulaire de contact et informations de contact
- **Header & Footer** : Navigation et liens sociaux

### Caractéristiques principales

- ✨ **Animations fluides** : Animations au scroll et transitions
- 📱 **Responsive Design** : Optimisé pour tous les écrans (mobile, tablette, desktop)
- 🎨 **Design moderne** : Thème sombre avec palette de couleurs personnalisée
- ⚡ **Performance** : Optimisé avec Next.js 15 et React 19
- 🔒 **TypeScript** : Code typé pour une meilleure maintenabilité

## 🛠 Technologies utilisées

### Core
- **Next.js 15.3.3** : Framework React avec App Router
- **React 19.0.0** : Bibliothèque UI
- **TypeScript 5** : Typage statique
- **Tailwind CSS 4** : Framework CSS utility-first

### Outils de développement
- **ESLint** : Linter pour la qualité du code
- **PostCSS** : Traitement CSS
- **Docker** : Containerisation pour le développement

### Dépendances (non utilisées actuellement)
- Bootstrap 5.3.6
- React Bootstrap 2.10.10

> **Note** : Bootstrap et React Bootstrap sont installés mais ne sont pas utilisés dans le projet. Le projet utilise uniquement Tailwind CSS.

## 📁 Structure du projet

```
Portfolio-2025-front/
├── public/                 # Assets statiques
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                # App Router Next.js
│   │   ├── favicon.ico
│   │   ├── globals.css    # Styles globaux
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Page d'accueil
│   └── components/         # Composants React
│       ├── Aboutme.tsx    # Section À propos
│       ├── Contact.tsx    # Section Contact
│       ├── Footer.tsx     # Pied de page
│       ├── Header.tsx     # En-tête avec navigation
│       ├── Hero.tsx       # Section Hero
│       └── Portfolio.tsx  # Section Portfolio
├── Dockerfile             # Configuration Docker
├── eslint.config.mjs      # Configuration ESLint
├── next.config.ts         # Configuration Next.js
├── package.json           # Dépendances
├── postcss.config.mjs     # Configuration PostCSS
├── tsconfig.json          # Configuration TypeScript
└── README.md              # Documentation
```

## 🚀 Installation

### Prérequis

- Node.js 18+ (recommandé : Node.js 20)
- npm, yarn, pnpm ou bun
- Docker (optionnel, pour le développement en conteneur)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone <url-du-repo>
   cd Portfolio-2025-front
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 💻 Développement

### Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Compile l'application pour la production
npm run start        # Lance le serveur de production

# Qualité de code
npm run lint         # Vérifie le code avec ESLint
```

### Développement avec Docker

Le projet inclut un `Dockerfile` pour le développement en conteneur :

```bash
# Construire l'image
docker build -t portfolio-2025-front .

# Lancer le conteneur
docker run -p 3000:3000 portfolio-2025-front
```

> **Note** : La configuration Next.js inclut le polling de fichiers pour détecter les changements dans Docker (voir `next.config.ts`).

### Hot Reload

Le serveur de développement Next.js inclut le hot reload automatique. Les modifications dans les fichiers sont détectées et rechargées automatiquement.

## 🚢 Déploiement

### Vercel (recommandé)

1. Connecter votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Les déploiements se feront automatiquement à chaque push

### Autres plateformes

Le projet peut être déployé sur :
- **Netlify** : Configuration similaire à Vercel
- **Docker** : Utiliser le Dockerfile fourni
- **Serveur VPS** : Build puis `npm run start`

### Build de production

```bash
npm run build
npm run start
```

## 🏗 Architecture

### App Router (Next.js 15)

Le projet utilise le nouveau App Router de Next.js :
- `src/app/layout.tsx` : Layout racine avec métadonnées et polices
- `src/app/page.tsx` : Page d'accueil qui assemble tous les composants
- `src/app/globals.css` : Styles globaux et animations CSS

### Composants

Tous les composants sont dans `src/components/` et utilisent :
- **TypeScript** pour le typage
- **"use client"** pour les composants interactifs (hooks React)
- **Tailwind CSS** pour le styling

### Palette de couleurs

Le projet utilise une palette de couleurs personnalisée :

```css
--primary-dark: #0A192F      /* Fond principal */
--secondary-dark: #112240     /* Cartes et sections */
--accent-cyan: #64FFDA        /* Couleur d'accent */
--text-light: #CCD6F6         /* Texte principal */
--text-muted: #8892B0         /* Texte secondaire */
--text-subtle: #A8B2D1        /* Texte subtil */
```

## 🧩 Composants

### Header (`Header.tsx`)

**Fonctionnalités** :
- Navigation fixe en haut de page
- Menu hamburger pour mobile
- Liens de navigation vers les sections
- Animation de transition

**Props** : Aucune

**État** :
- `isMenuOpen` : État du menu mobile

### Hero (`Hero.tsx`)

**Fonctionnalités** :
- Animation typewriter pour les titres
- Boutons d'action (Voir projets, Contact)
- Liens sociaux (GitHub, LinkedIn)
- Design responsive avec gradients

**État** :
- `displayText` : Texte actuellement affiché
- `currentIndex` : Index de caractère actuel
- `currentTitleIndex` : Index du titre actuel

**Titres animés** :
- "Développeur full-stack junior"
- "React, Typescript, Node.js, Express"
- "Résilient & déterminé"

### Aboutme (`Aboutme.tsx`)

**Fonctionnalités** :
- Système d'onglets (Expérience, Compétences, Histoire)
- Animation au scroll avec Intersection Observer
- Barres de compétences animées
- Timeline des expériences
- Points forts et réalisations

**Onglets** :
1. **Expérience** : Liste chronologique des projets et expériences
2. **Compétences** : Barres de progression par catégorie (Frontend, Backend, Outils)
3. **Histoire** : Récit personnel et parcours

**État** :
- `activeTab` : Onglet actif
- `isVisible` : Visibilité de la section
- `skillsAnimated` : État d'animation des compétences

### Portfolio (`Portfolio.tsx`)

**Fonctionnalités** :
- Grille de projets responsive
- Système de filtres (Tous, Frontend, Backend, Fullstack)
- Cartes de projets avec hover effects
- Liens GitHub et démo
- Statistiques de projets

**Projets actuels** :
- API Location de vélo
- API Borne de commande
- LeBainCode
- BlueBuddy
- Site & serveur de jeux privée

**État** :
- `activeFilter` : Filtre actif
- `isVisible` : Visibilité de la section
- `projectsAnimated` : État d'animation des projets

### Contact (`Contact.tsx`)

**Fonctionnalités** :
- Formulaire de contact avec validation
- Informations de contact (Email, LinkedIn, GitHub, Localisation)
- Gestion des états de soumission
- Messages de succès/erreur

**État** :
- `formData` : Données du formulaire
- `isSubmitting` : État de soumission
- `submitStatus` : Statut de la soumission (idle/success/error)

> **Note** : Le formulaire utilise actuellement une simulation. Il faut intégrer un service d'envoi d'email (EmailJS, API route, etc.).

### Footer (`Footer.tsx`)

**Fonctionnalités** :
- Liens de navigation rapide
- Liens sociaux
- Mentions légales et confidentialité
- Copyright dynamique

## ⚙️ Configuration

### Next.js (`next.config.ts`)

```typescript
{
  webpack: {
    watchOptions: {
      poll: 1000,              // Polling pour Docker
      aggregateTimeout: 300    // Délai avant recompilation
    }
  }
}
```

### TypeScript (`tsconfig.json`)

- Target : ES2017
- Module : ESNext
- JSX : Preserve
- Paths : `@/*` → `./src/*`

### Tailwind CSS

Le projet utilise Tailwind CSS 4 avec PostCSS. Les styles sont définis dans :
- `src/app/globals.css` : Styles globaux et animations
- Classes inline dans les composants

### ESLint

Configuration ESLint avec `eslint-config-next` pour Next.js.

## 🔮 Améliorations futures

### Fonctionnalités à implémenter

1. **Backend API**
   - [ ] Intégration avec le backend pour le formulaire de contact
   - [ ] Dashboard admin pour gérer les projets
   - [ ] API REST pour les données dynamiques

2. **Formulaire de contact**
   - [ ] Intégration EmailJS ou service d'email
   - [ ] Validation côté serveur
   - [ ] Protection contre le spam (reCAPTCHA)

3. **Portfolio**
   - [ ] Images réelles des projets
   - [ ] Détails de projets (modales)
   - [ ] Filtres avancés (technologies, dates)

4. **Performance**
   - [ ] Optimisation des images (next/image)
   - [ ] Lazy loading des composants
   - [ ] Service Worker pour PWA

5. **SEO**
   - [ ] Métadonnées dynamiques
   - [ ] Sitemap.xml
   - [ ] Schema.org markup

6. **Accessibilité**
   - [ ] ARIA labels complets
   - [ ] Navigation au clavier
   - [ ] Contraste des couleurs

7. **Tests**
   - [ ] Tests unitaires (Jest, React Testing Library)
   - [ ] Tests E2E (Playwright, Cypress)
   - [ ] Tests de performance

8. **Internationalisation**
   - [ ] Support multilingue (FR/EN)
   - [ ] Sélecteur de langue

## 📝 Notes de développement

### Animations

Le projet utilise plusieurs techniques d'animation :
- **CSS Animations** : Définies dans `globals.css`
- **Intersection Observer** : Pour les animations au scroll
- **React Hooks** : `useState`, `useEffect` pour les animations JavaScript

### Responsive Design

Les breakpoints Tailwind utilisés :
- `sm:` : 640px+
- `md:` : 768px+
- `lg:` : 1024px+
- `xl:` : 1280px+

### Performance

- Composants optimisés avec React 19
- Lazy loading des sections
- Animations CSS pour de meilleures performances
- Code splitting automatique avec Next.js

## 🤝 Contribution

Ce projet est un portfolio personnel. Pour toute suggestion ou question, n'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est privé et personnel.

## 👤 Auteur

**Arthur Selva**
- Email : arthurslfpro@gmail.com
- LinkedIn : [@ArthurSelvaFichepain](https://www.linkedin.com/in/arthurselvafichepain/)
- GitHub : [@Kalutos](https://github.com/Kalutos)
- Localisation : Paris, France

---

**Dernière mise à jour** : 2025
