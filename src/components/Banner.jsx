import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="#" id="work-anchor">
        <h2>
          <i className="fa-solid fa-folder-open"></i>Projets récents
        </h2>

        <figure className="rpfig-l">
          <div className="rpfig-img">
            <img src="img/tripadvisor.png" alt="TripAdvisor" />
          </div>

          <figcaption className="rpfigc">
            <div className="rpfigc-h">
              <h3>TripAdvisor</h3>
              <div className="rpfigc-h-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="rpfigc-b">
              <h3>Projet Frontend</h3>
              <ul className="custom-list">
                Requêtes :<li>Envoi automatisé de mails</li>
                <li>Carousel de photos</li>
              </ul>
            </div>

            <div className="rpfigc-f">
              <p>
                Projet réalisé à l'école LeRéacteur, premier projet d'initiation
                au Framework React
              </p>
            </div>
          </figcaption>
        </figure>

        <figure className="rpfig-r">
          <div className="rpfig-img">
            <img src="img/deliveroo.png" alt="TripAdvisor" />
          </div>
          <figcaption className="rpfigc">
            <div className="rpfigc-h">
              <h3>Deliveroo Web</h3>

              <div className="rpfigc-h-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="rpfigc-b">
              <h3>Projet Front-end</h3>
              <ul className="custom-list">
                Requêtes :<li>Récupération de données</li>
                <li>Panier de commande</li>
              </ul>
            </div>

            <div className="rpfigc-f">
              <p>
                Projet réalisé à l'école LeRéacteur, premier projet d'initiation
                au Framework React
              </p>
            </div>
          </figcaption>
        </figure>

        <figure className="rpfig-l">
          <div className="rpfig-img">
            <img src="img/vinted.png" alt="TripAdvisor" />
          </div>
          <figcaption className="rpfigc">
            <div className="rpfigc-h">
              <h3>Vinted Web</h3>

              <div className="rpfigc-h-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="rpfigc-b">
              <h3>Projet Full-Stack</h3>
              <ul className="custom-list">
                Requêtes :<li>Inscription/Connexion</li>
                <li>Récupération de données</li>
                <li>Publication d'annonces</li>
                <li>Barre de recherche</li>
                <li>Païement</li>
                <li>Upload de photos</li>
              </ul>
            </div>

            <div className="rpfigc-f">
              <p>
                Projet réalisé à l'école LeRéacteur, premier projet d'initiation
                au Framework React
              </p>
            </div>
          </figcaption>
        </figure>

        <figure className="rpfig-r">
          <div className="rpfig-img">
            <img src="img/airbnb.png" alt="TripAdvisor" />
          </div>
          <figcaption className="rpfigc">
            <div className="rpfigc-h">
              <h3>Airbnb Mobile</h3>

              <div className="rpfigc-h-l">
                <a className="icn-lnk" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="icn-lnk" href="#">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="rpfigc-b">
              <h3>Projet Full-Stack</h3>
              <ul className="custom-list">
                Requêtes :<li>Inscription/Connexion</li>
                <li>Modification du profil utilisateur</li>
                <li>Affichage de cartes</li>
                <li>Géolocalisation</li>
                <li>Accès à la galerie d'images</li>
                <li>Accès à l'appareil photo</li>
              </ul>
            </div>

            <div className="rpfigc-f">
              <p>
                Projet réalisé à l'école LeRéacteur, premier projet d'initiation
                au Framework React
              </p>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default Banner;
