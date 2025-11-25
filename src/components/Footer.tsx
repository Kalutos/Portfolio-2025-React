import React from "react";
import Link from "next/link";

interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Kalutos",
      label: "GitHub",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      href: "https://linkedin.com/in/arthurselvafichepain",
      label: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#112240] text-[#a8b2d1]">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section À propos */}
          <div>
            <h3 className="text-xl text-[#64FFDA] font-bold mb-4">
              Mon Portfolio
            </h3>
            <p className="text-[#ccd6f6] mb-4">
              Développeur Front-End passionné par la création d&apos;expériences
              web modernes et interactives avec React, Next.js et les dernières
              technologies.
            </p>
            <p className="text-gray-400 text-sm">
              Disponible pour de nouveaux projets et collaborations.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl text-[#64FFDA] font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#ccd6f6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux et contact */}
          <div>
            <h3 className="text-xl text-[#64FFDA] font-bold mb-4">Me suivre</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#64FFDA] transition-colors"
                  aria-label={social.label}
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-[#ccd6f6] text-sm">
              N&apos;hésitez pas à me contacter pour discuter de vos projets !
            </p>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Mon Portfolio. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
