# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

project-root/
├── frontend/ # Projet frontend React (initialisé avec Vite)
│ ├── public/ # Assets publics
│ │ └── favicon.svg # Exemple : icône du site
│ ├── src/ # Code source React
│ │ ├── assets/ # Ressources
│ │ │ ├── css #
│ │ │ ├── img #
│ │ │ ├── js #
│ │ │ └── fontawesome # Typo : icône du site
│ │ ├── components/ # Composants React réutilisables
│ │ │ ├── Header.jsx # Header
│ │ │ ├── Header.css # CSS Header
│ │ │ ├── Footer.jsx # Footer
│ │ │ ├── Footer.css # CSS Footer
│ │ │ ├── Description.jsx # Section : 1er Section
│ │ │ ├── Description.css # Section : CSS 1er Section
│ │ │ ├── About.jsx # Section : 2e Section
│ │ │ ├── About.css # Section : CSS 2e Section
│ │ │ ├── Course.jsx # Section : 3e Section
│ │ │ ├── Course.css # Section : CSS 3e Section
│ │ │ ├── Banner.jsx # Section : 4e Section
│ │ │ ├── Banner.css # Section : CSS 4e Section
│ │ │ ├── Portfolio.jsx# Section : 5e Section
│ │ │ ├── Portfolio.css # Section : CSS 5e Section
│ │ │ ├── Widget.jsx # Section : Widget
│ │ │ └── Widget.css # Section : CSS Widget
│ │ ├── pages/ # Pages principales
│ │ │ └── Home.jsx # page principale
│ │ ├── App.jsx # Point d'entrée React
│ │ ├── main.jsx # Entrée principale pour Vite
│ ├── index.html # Template HTML principal
│ ├── package.json # Dépendances frontend
│ ├── vite.config.js # Configuration de Vite
│ └── yarn.lock # Fichier lock pour Yarn
│
├── backend ...
│
