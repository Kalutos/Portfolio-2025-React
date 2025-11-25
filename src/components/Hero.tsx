"use client";

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    "Développeur full-stack junior",
    "React, Typescript, Node.js, Express",
    "Résilient & déterminé",
  ];

  // Animation de frappe pour les titres
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Pause puis passage au titre suivant
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText("");
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTitleIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-[#0a192f] overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-3 sm:mb-4 font-bold text-4xl mt-16 sm:mt-20 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight animate-slide-up">
              <span className="block sm:inline bg-gradient-to-r from-[#ccd6f6] to-[#64ffda] bg-clip-text text-transparent">
                Arthur Selva
              </span>
            </h1>

            <div className="flex items-center justify-center mb-6 sm:mb-8 min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem]">
              <h2 className="text-center font-bold text-[#8892b0] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <span className="inline-block pr-1 border-r-2 border-[#64ffda] animate-blink">
                  {displayText}
                </span>
              </h2>
            </div>

            <div className="mb-8 sm:mb-12 lg:mb-16">
              <p className="mx-auto max-w-2xl text-[#8892b0] text-base sm:text-lg md:text-xl leading-relaxed">
                En région parisienne, je développe des applications web modernes
                avec React, Typescript et Node.js. J’aime comprendre les
                besoins, simplifier les parcours et créer des expériences
                vraiment agréables à utiliser.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16">
              <button
                onClick={() => scrollToSection("projects")}
                className="group w-full sm:w-auto min-w-[200px] sm:min-w-[220px] lg:min-w-[240px] 
                     px-6 sm:px-8 py-3 sm:py-4 
                     bg-transparent border-2 border-[#64ffda] rounded-lg 
                     text-[#64ffda] font-mono text-sm sm:text-base lg:text-lg
                     transition-all duration-300 transform 
                     hover:bg-[#64ffda]/10 hover:scale-105 hover:shadow-lg hover:shadow-[#64ffda]/25"
              >
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  Voir mes projets →
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group w-full sm:w-auto min-w-[200px] sm:min-w-[220px] lg:min-w-[240px] 
                     px-6 sm:px-8 py-3 sm:py-4 
                     bg-[#64ffda] rounded-lg 
                     text-[#0a192f] font-mono font-semibold text-sm sm:text-base lg:text-lg text-center
                     transition-all duration-300 transform 
                     hover:bg-[#64ffda]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#64ffda]/25"
              >
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  Me contacter
                </span>
              </button>
            </div>

            <div className="flex justify-center gap-6 sm:gap-8">
              {[
                {
                  href: "https://github.com/Kalutos",
                  label: "GitHub",
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                },
                {
                  href: "https://www.linkedin.com/in/arthurselvafichepain/",
                  label: "LinkedIn",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#8892b0] transition-all duration-300 transform 
                       hover:text-[#64ffda] hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
