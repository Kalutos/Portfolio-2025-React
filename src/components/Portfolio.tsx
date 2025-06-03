"use client";

import React from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "web" | "mobile" | "design";
}

interface PortfolioProps {
  className?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ className = "" }) => {
  // Données d'exemple - à remplacer par vos vrais projets
  const projects: Project[] = [
    {
      id: 1,
      title: "API Location de vélo",
      description:
        "Application e-commerce complète avec panier, paiement et gestion d'utilisateurs. Interface moderne et responsive.",
      image: "/images/ecommerce-project.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      githubUrl: "https://github.com/username/ecommerce-project",
      liveUrl: "https://ecommerce-demo.vercel.app",
      category: "web",
    },
    {
      id: 2,
      title: "API Borne de commande",
      description:
        "Tableau de bord interactif avec graphiques et métriques en temps réel. Intégration d'APIs et visualisation de données.",
      image: "/images/dashboard-project.jpg",
      technologies: ["React", "TypeScript", "Chart.js", "Bootstrap", "Node.js"],
      githubUrl: "https://github.com/username/dashboard-project",
      liveUrl: "https://analytics-dashboard.vercel.app",
      category: "web",
    },
    {
      id: 3,
      title: "LeBainCode",
      description:
        "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
      image: "/images/mobile-app.jpg",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
      githubUrl: "https://github.com/username/mobile-app",
      category: "mobile",
    },
    {
      id: 4,
      title: "BlueBuddy",
      description:
        "Application e-commerce complète avec panier, paiement et gestion d'utilisateurs. Interface moderne et responsive.",
      image: "/images/ecommerce-project.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      githubUrl: "https://github.com/username/ecommerce-project",
      liveUrl: "https://ecommerce-demo.vercel.app",
      category: "web",
    },
    {
      id: 5,
      title: "Serveur de jeux privée",
      description:
        "Tableau de bord interactif avec graphiques et métriques en temps réel. Intégration d'APIs et visualisation de données.",
      image: "/images/dashboard-project.jpg",
      technologies: ["React", "TypeScript", "Chart.js", "Bootstrap", "Node.js"],
      githubUrl: "https://github.com/username/dashboard-project",
      liveUrl: "https://analytics-dashboard.vercel.app",
      category: "web",
    },
  ];

  const [activeFilter, setActiveFilter] = React.useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filterButtons = [
    { key: "all", label: "Tous" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "design", label: "Design" },
  ];

  return (
    <section id="portfolio" className={`py-16 bg-[#0a192f] ${className}`}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#a8b2d1] mb-4">
            Mon Portfolio
          </h2>
          <p className="text-lg text-[#a8b2d1] max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents, alliant créativité
            et expertise technique
          </p>
        </div>

        {/* Filtres */}
        <div className="hidden flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            {filterButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => setActiveFilter(button.key)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeFilter === button.key
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image du projet */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                      >
                        Voir le site
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun projet trouvé pour cette catégorie.
            </p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Intéressé par mon travail ?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Discutons de votre projet
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
