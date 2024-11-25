import React from "react";
import "../App.css";

const About = () => {
  return (
    <>
      <section id="about-anchor">
        <h2>
          <i className="fa-regular fa-comment"></i>A propos de moi
        </h2>
        <p className="about-txt">
          Salut ! Je m’appelle Arthur Selva et j’adore créer des choses qui
          restent sur internet. Mon interet pour le développement web a commencé
          en 2007 au travers du Site du Zéro avec lequel j’ai commencé mes
          premières ébauches HTML & CSS Depuis mon bac A.M.A option
          communication visuelle plurimédia, et après un changement de vie, je
          développe mes compétences en continue grâce à des M.O.O.C. et cours
          particuliers. <br />
          <br />
          Mon objectif principale est d’ apprendre et partager différents
          langages informatiques afin de concentrer mes résultats sur des
          produits accessibles et centré sur l’humain pour une variété de
          clients.
        </p>
      </section>
    </>
  );
};

export default About;
