"use client";

import React, { useState, useEffect, useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "frontend" | "backend" | "fullstack";
}

interface PortfolioProps {
  className?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ className = "" }) => {
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
      category: "frontend",
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
      category: "frontend",
    },
    {
      id: 3,
      title: "LeBainCode",
      description:
        "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
      image: "/images/mobile-app.jpg",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
      githubUrl: "https://github.com/username/mobile-app",
      category: "fullstack",
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
      category: "fullstack",
    },
    {
      id: 5,
      title: "Site & serveur de jeux privée",
      description:
        "Tableau de bord interactif avec graphiques et métriques en temps réel. Intégration d'APIs et visualisation de données.",
      image: "/images/dashboard-project.jpg",
      technologies: ["React", "TypeScript", "Chart.js", "Bootstrap", "Node.js"],
      githubUrl: "https://github.com/username/dashboard-project",
      liveUrl: "https://analytics-dashboard.vercel.app",
      category: "fullstack",
    },
  ];

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const [projectsAnimated, setProjectsAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filterButtons = [
    { key: "all", label: "Tous", icon: "📁" },
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "fullstack", label: "Fullstack", icon: "🚀" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setProjectsAnimated(true), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setProjectsAnimated(false);
      setTimeout(() => setProjectsAnimated(true), 100);
    }
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`relative min-h-screen bg-[#0a192f] flex items-center justify-center overflow-hidden 
                  py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {/* Container avec padding cohérent */}
      <div
        className="container relative z-10 mx-auto 
                      px-4 sm:px-6 lg:px-12 xl:px-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ccd6f6] mb-4">
              <span className="text-[#64ffda] font-mono text-base sm:text-lg lg:text-xl mr-2">
                02.
              </span>
              Mon Portfolio
            </h2>
            <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-[#64ffda] to-transparent mx-auto" />
            <p className="text-sm sm:text-base lg:text-lg text-[#8892b0] max-w-2xl mx-auto mt-4 px-4">
              Découvrez une sélection de mes projets récents, alliant créativité
              et expertise technique
            </p>
          </div>

          {/* Filtres - Visible sur tous les écrans */}
          <div
            className={`flex justify-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-0 bg-[#112240]/50 backdrop-blur-sm rounded-lg p-1 sm:p-1 shadow-md border border-[#64ffda]/20">
              {filterButtons.map((button) => (
                <button
                  key={button.key}
                  onClick={() => setActiveFilter(button.key)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 rounded-md font-medium text-sm sm:text-base transition-all duration-300 ${
                    activeFilter === button.key
                      ? "bg-[#64ffda] text-[#0a192f] shadow-md"
                      : "text-[#8892b0] hover:text-[#ccd6f6] hover:bg-[#112240]/50"
                  }`}
                >
                  <span className="mr-1.5">{button.icon}</span>
                  <span className="hidden sm:inline">{button.label}</span>
                  <span className="sm:hidden">
                    {button.label === "Fullstack" ? "Full" : button.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Grille de projets - Responsive optimisée */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
                        gap-6 sm:gap-6 lg:gap-8 
                        transition-all duration-800 delay-400 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-[#112240]/30 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden 
                            border border-[#64ffda]/10 hover:border-[#64ffda]/30 hover:shadow-xl 
                            transition-all duration-500 transform hover:-translate-y-2 group ${
                              projectsAnimated
                                ? "animate-fade-in-up"
                                : "opacity-0"
                            }`}
                style={{
                  animationDelay: projectsAnimated ? `${index * 0.1}s` : "0s",
                }}
              >
                {/* Image du projet */}
                <div className="relative h-44 sm:h-48 bg-[#0a192f]/50 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#64ffda]/20 to-[#112240] flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl opacity-50">💻</span>
                  </div>

                  {/* Overlay avec liens */}
                  <div className="absolute inset-0 bg-[#0a192f]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row gap-3 px-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#112240] text-[#64ffda] px-4 py-2 rounded-md text-sm 
                                     hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 
                                     border border-[#64ffda]/30 text-center"
                        >
                          <span className="hidden sm:inline">GitHub</span>
                          <span className="sm:hidden">Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded-md text-sm 
                                     hover:bg-[#64ffda]/80 transition-all duration-300 text-center"
                        >
                          <span className="hidden sm:inline">Voir le site</span>
                          <span className="sm:hidden">Démo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-5 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-semibold text-[#ccd6f6] mb-3 
                                 group-hover:text-[#64ffda] transition-colors duration-300 
                                 line-clamp-2"
                  >
                    {project.title}
                  </h3>

                  <p className="text-[#8892b0] mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies utilisées */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#64ffda]/10 text-[#64ffda] px-2.5 py-1 rounded-full 
                                   text-xs font-medium border border-[#64ffda]/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span
                        className="bg-[#64ffda]/10 text-[#64ffda] px-2.5 py-1 rounded-full 
                                       text-xs font-medium border border-[#64ffda]/20 font-mono"
                      >
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-[#8892b0] text-base sm:text-lg">
                Aucun projet trouvé pour cette catégorie.
              </p>
            </div>
          )}

          {/* Stats en bas (optionnel) */}
          <div
            className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-800 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#64ffda] mb-2">
                  {projects.length}
                </div>
                <div className="text-sm sm:text-base text-[#8892b0]">
                  Projets
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#64ffda] mb-2">
                  {projects.filter((p) => p.category === "fullstack").length}
                </div>
                <div className="text-sm sm:text-base text-[#8892b0]">
                  Fullstack
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#64ffda] mb-2">
                  100%
                </div>
                <div className="text-sm sm:text-base text-[#8892b0]">
                  Passion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
