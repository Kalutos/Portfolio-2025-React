import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <section className="#" id="portfolio-anchor">
        <h2>
          <i className="fa-solid fa-folder-plus"></i>Autres projets
        </h2>

        <div className="ap-ctn">
          {/* BOOK N°3 AREA */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Book n°3</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Full-Stack</p>
                <div>
                  <p>Début : Nov 2024</p>
                  <p>Fin : Déc 2024</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>Portfolio actuel</p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Inscription/Connexion</li>
                  <li>Modification du profil user</li>
                  <li>Affichage de cartes</li>
                  <li>Géolocalisation</li>
                  <li>Accès à la galerie d'images</li>
                  <li>Accès à l'appareil photo</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>HTML5</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                  <li>Node.Js</li>
                </ul>
              </div>
            </div>
          </div>
          {/* LEREACTEUR 4/4 AREA */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Airbnb Mobile</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Full-Stack</p>
                <div>
                  <p>Début : Août 2024</p>
                  <p>Fin : non prévus</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>4e projet réalisé au sein de l' école LeReacteur.</p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Inscription/Connexion</li>
                  <li>Modification du profil user</li>
                  <li>Affichage de cartes</li>
                  <li>Géolocalisation</li>
                  <li>Accès à la galerie d'images</li>
                  <li>Accès à l'appareil photo</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>ReactNative</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                  <li>Node.Js</li>
                </ul>
              </div>
            </div>
          </div>
          {/* LEREACTEUR 3/4 AREA */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Vinted Web</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Full-Stack</p>
                <div>
                  <p>Début : Août 2024</p>
                  <p>Fin : non prévus</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>3e projet réalisé au sein de l' école LeReacteur.</p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Inscription/Connexion</li>
                  <li>Récupération de données</li>
                  <li>Publication d'annonces</li>
                  <li>Barre de recherche</li>
                  <li>Païement</li>
                  <li>Upload de photos</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>React</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                  <li>Node.Js</li>
                </ul>
              </div>
            </div>
          </div>
          {/* LEREACTEUR 2/4 AREA */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Deliveroo Web</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Frontend</p>
                <div>
                  <p>Début : Août 2024</p>
                  <p>Fin : non prévus</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Projet réalisé à l' école LeReacteur, premier projet d'
                  initiation au framework React et rajout des connaissances de
                  MongoDB et Nodejs pour la gestion de données.
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Récupération de données</li>
                  <li>Panier de commande</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>React</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                  <li>Node.Js</li>
                </ul>
              </div>
            </div>
          </div>
          {/* LEREACTEUR 1/4 AREA */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>TripAdvisor</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Frontend</p>
                <div>
                  <p>Début : Août 2024</p>
                  <p>Fin : Décembre 2024</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Projet réalisé à l' école LeReacteur, premier projet d'
                  initiation au framework React
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Envoi automatisé de mails</li>
                  <li>Carousel de photos</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>React</li>
                  <li>SCSS</li>
                  <li>Javascript</li>
                  <li>Node.Js</li>
                </ul>
              </div>
            </div>
          </div>
          {/* OCR-PWD 4/4 AREA */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Blog Écrivain</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd-OCR n°4</p>
                <div>
                  <p>Début : Nov 2020</p>
                  <p>Fin : Mars 2021</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Quatrième et dernier projet de la formation OpenclassNameroom
                  le diplôme Web dev Junior. Je dois créer un site d'un écrivain
                  en Php
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Inscription/Connexion</li>
                  <li>Modification du profil utilisateur</li>
                  <li>Ajout d'un commentaire</li>
                  <li>Réaction +/-</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>Php</li>
                  <li>MySQL</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* OCR-PWD 3/4 ARE */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>API Location vélo</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd-OCR n°3</p>
                <div>
                  <p>Début : Août2020</p>
                  <p>Fin : Oct 2020</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Troisième projet de la formation OpenclassNameroom le diplôme
                  Web dev Junior. Je dois créer une API de carte de vélo. HTML
                  5, CSS 3, Javascript pour ce projet.
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Inscription/Connexion</li>
                  <li>Modification du profil utilisateur</li>
                  <li>Ajout d'un commentaire</li>
                  <li>Réaction +/-</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>Html 5</li>
                  <li>CSS 3</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* OCR-PWD 2/4 ARE */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Ireki</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd-OCR n°2</p>
                <div>
                  <p>Début : Avr 2020</p>
                  <p>Fin : Juin 2020</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Deuxième projet de la formation OpenclassNameroom le diplôme
                  Web dev Junior. Je dois proposer une maquette du site de
                  l'office de tourisme à ireki. Je dois utiliser l'extension
                  Gutenberg pour faire la maquette.
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Aucun builder/framework CMS</li>
                  <li>Utilisation de Gutenberg requise</li>
                  <li>Site de 5 pages</li>
                  <li>Tableau activités responsive</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>Wordpress</li>
                  <li>Guthenberg</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* OCR-PWD 1/4 ARE */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Webagency</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd-OCR n°1</p>
                <div>
                  <p>Début : Fév 2020</p>
                  <p>Fin : Mars 2020</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Premier projet sur la plateforme OpenclassNameroom pour la
                  formation Web développeur Junior. Pour ce projet un "client"
                  nous transmet une maquette qu'on doit reproduire en suivant
                  quelques consignes.
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Envoi automatisé de mails</li>
                  <li>Carousel de photos</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ENSMV AREA */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>ENSMV</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Frontend</p>
                <div>
                  <p>Début : Sept 2015</p>
                  <p>Fin : Août 2017</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Réalisation d'une maquette sur Photoshop et création d'un
                  prototype de site pour l'école.
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Envoi automatisé de mails</li>
                  <li>Carousel de photos</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* PORTFOLIO 2017 */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Pwd Frontend</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Projet Frontend</p>
                <div>
                  <p>Début : Sept 2015</p>
                  <p>Fin : Août 2017</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Création d'un second site portfolio suite à mon entrée au
                  Campus fonderie de l'image.
                </p>
              </div>
              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Envoi automatisé de mails</li>
                  <li>Carousel de photos</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* SITE WEB CAMPUS */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>PWD-CFI</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Frontend</p>
                <div>
                  <p>Début : Sept 2015</p>
                  <p>Fin : Août 2017</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Site web réalisé lors de mon Bac A.M.A au Campus Fonderie de
                  l'image
                </p>
              </div>

              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Envoi automatisé de mails</li>
                  <li>Carousel de photos</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* PORTFOLIO 2015 */}
          <div className="ap-b">
            <div className="apb-h">
              <h3>Book n°1</h3>
              <div className="apbh-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="apb-b">
              <div className="apbb-h">
                <p>Pwd Frontend</p>
                <div>
                  <p>Début : 2015</p>
                  <p>Fin : 2015</p>
                </div>
              </div>

              <div className="apbb-b">
                <p>
                  Le tout premier portfolio créée en 2015 sur Sublime Text en
                  HTML5 et CSS 3 après être tombé sur le site maintenant fermé
                  "Le site du zéro" pour devenir "OpenclassNameroom" plus tard.
                </p>
              </div>

              <div className="apbb-f">
                <ul className="custom-list">
                  Requêtes :<li>Envoi automatisé de mails</li>
                  <li>Carousel de photos</li>
                </ul>
                <ul className="custom-list">
                  Outils :<li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
