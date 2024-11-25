import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <>
      <section id="home-anchor">
        <div className="desc-h">
          <h1>
            <span className="desc-h1">Bienvenue, je suis</span>
            <span className="desc-h2">Arthur Selva.</span>
            <span className="desc-h3">Développeur web junior</span>
          </h1>
        </div>
        <div className="desc-t">
          <p>
            Autodidacte, je suis passionné par le création d’expériences
            numériques. Concrétement ce que j’aime c’est apprendre et partager
            différents langages informatiques afin de concentrer mes résultats
            sur des produits accessibles et centré sur l’humain. Actuellement en
            recherche d'emploi en tant qu'alternant en temps partiel soit 10
            mois en entreprise après les 2 mois de botcamps.
          </p>
          <a href="#portfolio-section">
            <button className="btn">Portfolio</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Description;
