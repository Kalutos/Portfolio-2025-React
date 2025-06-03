"use client";

import React, { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"story" | "skills" | "experience">(
    "story"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (activeTab === "skills") {
            setTimeout(() => setSkillsAnimated(true), 300);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeTab]);

  // Déclencher l'animation des skills quand on change d'onglet
  useEffect(() => {
    if (activeTab === "skills" && isVisible) {
      setSkillsAnimated(false);
      setTimeout(() => setSkillsAnimated(true), 100);
    }
  }, [activeTab, isVisible]);

  const skills: Skill[] = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "React", level: 92, category: "frontend" },
    { name: "Next.js", level: 88, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Express", level: 70, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Figma", level: 80, category: "tools" },
  ];

  const experiences = [
    {
      period: "2023 - Présent",
      title: "Développeur Front-End Senior",
      company: "TechCorp Solutions",
      description:
        "Développement d'applications React complexes, optimisation des performances, et mentorat d'équipe.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      period: "2021 - 2023",
      title: "Développeur Full-Stack",
      company: "StartupLab",
      description:
        "Création de solutions web complètes, de la conception à la mise en production.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      period: "2020 - 2021",
      title: "Développeur Junior",
      company: "WebAgency Pro",
      description:
        "Développement de sites vitrine et e-commerce, maintenance et support client.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  const achievements = [
    "🏆 3+ années d'expérience en développement web",
    "🚀 15+ projets livrés avec succès",
    "💡 Expertise en React et écosystème moderne",
    "🎯 Passionné par l'UX/UI et les performances",
    "🌍 Travail en équipe et méthodologies agiles",
  ];

  const SkillBar: React.FC<{ skill: Skill; index: number }> = ({
    skill,
    index,
  }) => (
    <div className="mb-4" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#ccd6f6] font-medium">{skill.name}</span>
        <span className="text-[#64ffda] text-sm font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-[#112240] rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#64ffda] to-[#64ffda]/80 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: skillsAnimated ? `${skill.level}%` : "0%",
          }}
        />
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-[#0a192f] min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div
            className={`text-center mb-16 transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-4">
              <span className="text-[#64ffda] font-mono text-lg mr-2">02.</span>
              À propos de moi
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#64ffda] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Photo et présentation rapide */}
            <div
              className={`lg:col-span-1 transition-all duration-800 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                {/* Conteneur photo avec effet */}
                <div className="relative w-80 h-80 mx-auto mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-[#64ffda]/20 to-[#112240]">
                  <div className="absolute inset-4 bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                  </div>
                  {/* Overlay avec effet hover */}
                  <div className="absolute inset-0 bg-[#64ffda]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Achievements */}
                <div className="bg-[#112240]/50 backdrop-blur-sm rounded-lg p-6 border border-[#64ffda]/20">
                  <h3 className="text-[#64ffda] font-semibold mb-4">
                    Points forts
                  </h3>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-[#8892b0] text-sm flex items-center"
                      >
                        <span className="mr-2">
                          {achievement.split(" ")[0]}
                        </span>
                        <span>{achievement.split(" ").slice(1).join(" ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contenu principal avec onglets */}
            <div
              className={`lg:col-span-2 transition-all duration-800 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Navigation des onglets */}
              <div className="flex border-b border-[#112240] mb-8">
                {[
                  { id: "story", label: "Mon Histoire", icon: "📖" },
                  { id: "skills", label: "Compétences", icon: "🛠️" },
                  { id: "experience", label: "Expérience", icon: "💼" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-3 font-mono text-sm transition-all duration-300 border-b-2 ${
                      activeTab === tab.id
                        ? "text-[#64ffda] border-[#64ffda]"
                        : "text-[#8892b0] border-transparent hover:text-[#ccd6f6] hover:border-[#8892b0]"
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Contenu des onglets */}
              <div className="min-h-96">
                {/* Onglet Histoire */}
                {activeTab === "story" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-[#8892b0] text-lg leading-relaxed mb-6">
                        Salut ! Je suis un développeur web passionné avec plus
                        de 3 ans d&apos;expérience dans la création
                        d&apos;expériences numériques exceptionnelles. Mon
                        parcours a commencé par la curiosité de comprendre
                        comment fonctionnent les sites web, et s&apos;est
                        transformé en une véritable passion pour le code.
                      </p>

                      <p className="text-[#8892b0] text-lg leading-relaxed mb-6">
                        Spécialisé dans les technologies front-end modernes,
                        j&apos;aime particulièrement travailler avec{" "}
                        <span className="text-[#64ffda]">React</span> et{" "}
                        <span className="text-[#64ffda]">Next.js</span>
                        pour créer des interfaces utilisateur intuitives et
                        performantes. Mon approche combine technique solide et
                        sens artistique pour livrer des solutions qui dépassent
                        les attentes.
                      </p>

                      <p className="text-[#8892b0] text-lg leading-relaxed mb-6">
                        Quand je ne code pas, vous me trouverez probablement en
                        train de découvrir les dernières tendances en
                        développement web, de contribuer à des projets open
                        source, ou de partager mes connaissances avec la
                        communauté des développeurs.
                      </p>

                      <div className="bg-[#112240]/30 border-l-4 border-[#64ffda] pl-6 py-4 rounded-r-lg">
                        <p className="text-[#ccd6f6] italic">
                          &quot;Le code n&apos;est pas seulement ma profession,
                          c&apos;est ma passion. Chaque projet est une
                          opportunité de créer quelque chose d&apos;unique et
                          d&apos;impactant.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Onglet Compétences */}
                {activeTab === "skills" && (
                  <div className="animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-[#ccd6f6] text-xl font-semibold mb-6 flex items-center">
                          <span className="text-[#64ffda] mr-2">⚡</span>
                          Front-End
                        </h3>
                        {skills
                          .filter((skill) => skill.category === "frontend")
                          .map((skill, index) => (
                            <SkillBar
                              key={skill.name}
                              skill={skill}
                              index={index}
                            />
                          ))}
                      </div>

                      <div>
                        <h3 className="text-[#ccd6f6] text-xl font-semibold mb-6 flex items-center">
                          <span className="text-[#64ffda] mr-2">🔧</span>
                          Back-End & Outils
                        </h3>
                        {skills
                          .filter(
                            (skill) =>
                              skill.category === "backend" ||
                              skill.category === "tools"
                          )
                          .map((skill, index) => (
                            <SkillBar
                              key={skill.name}
                              skill={skill}
                              index={index + 6}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Onglet Expérience */}
                {activeTab === "experience" && (
                  <div className="space-y-8 animate-fade-in">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-8 pb-8 border-l-2 border-[#64ffda]/30 last:border-l-0"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-[#64ffda] rounded-full" />

                        <div className="bg-[#112240]/30 rounded-lg p-6 hover:bg-[#112240]/50 transition-colors duration-300">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-[#ccd6f6] text-xl font-semibold">
                              {exp.title}
                            </h3>
                            <span className="text-[#64ffda] font-mono text-sm">
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-[#64ffda] font-medium mb-3">
                            {exp.company}
                          </p>
                          <p className="text-[#8892b0] mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] text-sm rounded-full border border-[#64ffda]/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
