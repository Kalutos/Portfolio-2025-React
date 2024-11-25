import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Gestion du clic extérieur pour fermer le menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <a href="#home-anchor">
          <img src="img/logo.png" alt="logo-site" />
        </a>
      </div>
      <div
        className="menu-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        ref={toggleRef}
        aria-expanded={isMenuOpen}
        aria-label="Menu"
        tabIndex="0"
      >
        ☰
      </div>
      <nav className={`menu ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
        <a className="btn-menu" href="#about-anchor">
          <i className="fa-regular fa-comment"></i>À propos
        </a>
        <a className="btn-menu" href="#course-anchor">
          <i className="fa-solid fa-medal"></i>Mon parcours
        </a>
        <a className="btn-menu" href="#experience-anchor">
          <i className="fa-solid fa-folder"></i>Expériences
        </a>
        <a className="btn-menu" href="#work-anchor">
          <i className="fa-solid fa-folder-plus"></i>Portfolio
        </a>
        <a className="btn-menu" href="#contact-anchor">
          <i className="fa-solid fa-envelope"></i>Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
