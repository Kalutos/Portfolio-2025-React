"use client";

import React, { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "story">(
    "experience"
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
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 50, category: "frontend" },
    { name: "TypeScript", level: 35, category: "frontend" },
    { name: "React", level: 35, category: "frontend" },
    { name: "Next.js", level: 35, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },
    { name: "Node.js", level: 50, category: "backend" },
    { name: "Express", level: 50, category: "backend" },
    { name: "MongoDB", level: 40, category: "backend" },
    { name: "Git/GitHub", level: 65, category: "tools" },
    { name: "VS Code", level: 80, category: "tools" },
    { name: "Figma", level: 25, category: "tools" },
  ];

  const experiences = [
    {
      period: "2023 - Présent",
      title: "MystiCode",
      company: "TheMystiCodeCollectif",
      description:
        "Création d' un site de formation en C, apprendre à créer une IA capable de relever les erreurs et à les corrigers et se former à de nouveau framework.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
      ],
    },
    {
      period: "2025 - Présent",
      title: "Portfolio UX/UI Designer",
      company: "",
      description:
        "Création d'un site vitrine d'un portfolio de designer UX/UI.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      period: "2025 - Présent",
      title: "Mon portfolio",
      company: "",
      description:
        "Création d' un portfolio full-stack, me former à React et au côtés sombre du backend pour pouvoir générer un dashboard personnaliser me permettant de rajouter de futur expérience sans avoir à retoucher au code de mon site.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
      ],
    },
    {
      period: "2025 - Présent",
      title: "Portfolio photographe",
      company: "",
      description: "Book d'un photographe amateur.",
      technologies: ["Php", "MySQL"],
    },
  ];

  const achievements = [
    "🏆 3+ années d'expérience en développement web",
    "🚀 15+ projets livrés avec succès",
    "💡 Expertise en React et écosystème moderne",
    "🎯 Bon communiquant",
    "🌍 Distanciel ou hybride, en groupe ou seul",
  ];

  const SkillBar: React.FC<{ skill: Skill; index: number }> = ({
    skill,
    index,
  }) => (
    <div className="mb-4" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#ccd6f6] font-medium text-sm sm:text-base">
          {skill.name}
        </span>
        <span className="text-[#64ffda] text-xs sm:text-sm font-mono">
          {skill.level}%
        </span>
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
      className="relative min-h-screen bg-[#0a192f] flex items-center justify-center overflow-hidden 
                 py-12 sm:py-16 lg:py-20 xl:py-24"
    >
      {/* Container avec marges cohérentes avec Hero */}
      <div
        className="container relative z-10 mx-auto 
                      px-4 sm:px-6 lg:px-12 xl:px-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ccd6f6] mb-4">
              <span className="text-[#64ffda] font-mono text-base sm:text-lg lg:text-xl mr-2">
                01.
              </span>
              À propos de moi
            </h2>
            <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-[#64ffda] to-transparent mx-auto" />
          </div>

          {/* Layout responsive simplifié */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Colonne gauche : Photo + Points forts */}
            <div
              className={`lg:col-span-1 transition-all duration-800 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                {/* Photo */}
                <div className="relative group">
                  <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#64ffda]/20 to-[#112240]">
                    <div className="absolute inset-4 bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-lg flex items-center justify-center">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                        <span className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl">
                          👨‍💻
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#64ffda]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Points forts */}
                <div className="bg-[#112240]/50 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-[#64ffda]/20">
                  <h3 className="text-[#64ffda] font-semibold mb-4 text-lg sm:text-xl">
                    Points forts
                  </h3>
                  <ul className="space-y-2.5">
                    {achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-[#8892b0] text-sm sm:text-base flex items-start"
                      >
                        <span className="mr-2 flex-shrink-0">
                          {achievement.split(" ")[0]}
                        </span>
                        <span className="leading-relaxed">
                          {achievement.split(" ").slice(1).join(" ")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Colonne droite : Contenu principal avec onglets */}
            <div
              className={`lg:col-span-2 transition-all duration-800 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Navigation des onglets */}
              <div className="flex border-b border-[#112240] mb-8 overflow-x-auto">
                {[
                  {
                    id: "experience",
                    label: "Expérience",
                    icon: "💼",
                    shortLabel: "Exp",
                  },

                  {
                    id: "skills",
                    label: "Compétences",
                    icon: "🛠️",
                    shortLabel: "Skills",
                  },
                  {
                    id: "story",
                    label: "Mon Histoire",
                    icon: "📖",
                    shortLabel: "Histoire",
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-mono text-sm sm:text-base transition-all duration-300 border-b-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-[#64ffda] border-[#64ffda]"
                        : "text-[#8892b0] border-transparent hover:text-[#ccd6f6] hover:border-[#8892b0]"
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                  </button>
                ))}
              </div>

              {/* Contenu des onglets */}
              <div className="min-h-[400px]">
                {/* Onglet Expérience */}
                {activeTab === "experience" && (
                  <div className="space-y-6 sm:space-y-8 animate-fade-in">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-8 pb-8 border-l-2 border-[#64ffda]/30 last:border-l-0 last:pb-0"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-[#64ffda] rounded-full" />

                        <div className="bg-[#112240]/30 rounded-lg p-5 sm:p-6 hover:bg-[#112240]/50 transition-colors duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                            <h3 className="text-[#ccd6f6] text-lg sm:text-xl font-semibold">
                              {exp.title}
                            </h3>
                            <span className="text-[#64ffda] font-mono text-sm flex-shrink-0">
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-[#64ffda] font-medium mb-3 text-base">
                            {exp.company}
                          </p>
                          <p className="text-[#8892b0] mb-4 leading-relaxed text-sm sm:text-base">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] text-xs sm:text-sm rounded-full border border-[#64ffda]/20"
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

                {/* Onglet Histoire */}
                {activeTab === "story" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-[#8892b0] text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                        Bienvenue sur mon portfolio ! Je suis Arthur,
                        développeur web full-stack junior passionné, basé en
                        région parisienne.
                      </p>

                      <p className="text-[#8892b0] text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                        Avant de me reconvertir dans le développement, j&apos;ai
                        travaillé plusieurs années dans la restauration et la
                        vente. Ces environnements exigeants m&apos;ont appris à
                        être rigoureux, réactif, organisé et à garder mon
                        sang-froid même sous pression. J&apos;y ai développé un
                        vrai sens du service, une excellente communication,
                        ainsi qu&apos;une solide capacité à comprendre les
                        besoins des autres. Des compétences que j&apos;applique
                        aujourd&apos;hui dans mes projets tech.
                      </p>

                      <p className="text-[#8892b0] text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                        J&apos;ai toujours aimé construire, démonter, comprendre
                        comment les choses fonctionnent. Fan de LEGO, je pouvais
                        passer des heures à assembler des structures, imaginer
                        des systèmes et trouver comment les améliorer. Cette
                        curiosité naturelle ne m&apos;a jamais quitté : elle est
                        aujourd&apos;hui au cœur de ma manière d&apos;apprendre
                        et de coder.
                      </p>

                      <p className="text-[#8892b0] text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                        Ma reconversion vers le développement est née de cette
                        même envie de comprendre et de construire. Après mes
                        premières lignes de code, j&apos;ai su que c&apos;était
                        une voie faite pour moi. Aujourd&apos;hui, je travaille
                        principalement avec React, Typescript, Node.js et
                        Express, et j&apos;aime concevoir des interfaces
                        modernes, intuitives et performantes.
                      </p>

                      <p className="text-[#8892b0] text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                        Déterminé et résilient, j&apos;aborde chaque projet
                        comme une occasion de progresser, de résoudre de vrais
                        problèmes et de créer quelque chose d&apos;utile. Et
                        lorsque je ne code pas, je continue souvent
                        d&apos;explorer les tendances du web,
                        d&apos;expérimenter de nouvelles technologies ou
                        d&apos;améliorer mes projets personnels.
                      </p>

                      <p className="text-[#8892b0] text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                        Pour moi, coder, c&apos;est construire : comprendre,
                        assembler, ajuster — jusqu&apos;à créer une expérience
                        qui tient debout et fait sens.
                      </p>

                      <div className="bg-[#112240]/30 border-l-4 border-[#64ffda] pl-6 py-4 rounded-r-lg">
                        <p className="text-[#ccd6f6] italic text-sm sm:text-base lg:text-lg">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
