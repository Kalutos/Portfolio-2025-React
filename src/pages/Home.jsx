import React from "react";
import "../App.css";
// import RepoBanner from "../components/RepoBanner";
// import RepoList from "../components/RepoList";
import FormCtt from "../components/FormCtt";

//IMPORT IMG

import bannerimg from "../assets/img/banner-img.jpg";
// PROJET IMG
import imgtripadvisor from "../assets/img/tripadvisor.png";
import imgairbnb from "../assets/img/airbnb.png";
import imgdeliveroo from "../assets/img/deliveroo.png";
// SKILLS IMG
import skilljs from "../assets/img/js-icn.png";
import skillrct from "../assets/img/react-icn.png";
import skillmgdb from "../assets/img/mgdb-icn.png";
import skillhtml from "../assets/img/html-icn.png";
import skillcss from "../assets/img/css-icn.png";
import skillbtstp from "../assets/img/btstp-icn.png";
import skillcms from "../assets/img/cms-icn.png";
import skillgit from "../assets/img/git-icn.png";
import skillnode from "../assets/img/node-icn.png";

const Home = () => {
  document.querySelectorAll(".btn-crs").forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetId = event.target.getAttribute("data-target");

      document.querySelectorAll(".crs-b").forEach((section) => {
        section.style.display = "none";
      });
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "flex";
      }
    });
  });

  return (
    <main>
      <div className="aside-left">
        <a
          href="https://www.facebook.com/arthur.selva/"
          className="icn-lnk"
          target="_blank"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.github.com/Kalutos"
          className="icn-lnk"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arthurselvafichepain/"
          className="icn-lnk"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:arthurslfpro@gmail.com"
          className="icn-lnk"
          target="_blank"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>

      <div className="aside-main">
        {/* HOME AREA  */}
        <div className="section" id="home-anchor">
          <div className="home-ctn">
            <div className="home-h">
              <h1>
                <span className="home-h1">Arthur Selva</span>
                <span className="home-h2">
                  Développeur Full Stack en région parisienne
                </span>
              </h1>
              <p>Votre activité numérique n’a pas de secret pour moi !</p>
            </div>
            <img src={bannerimg} className="home-img" alt="" />
          </div>
        </div>
        {/* RCT-PROJECT AREA  */}
        <div className="section" id="rctp-anchor">
          <h2>
            <i className="fa-solid fa-medal"></i>Projets préférés
          </h2>

          <div className="rctp-ctn">
            <div className="rctp-folder">
              <figure className="rctp-fig">
                <img src={imgdeliveroo} className="rctp-fig-img" alt="" />
                <figcaption className="rctp-figc">
                  <h3>Deliveroo</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sagittis tellus eu mi varius accumsan a eu dolor. Curabitur
                    tempor lacus ac purus efficitur, sit amet dignissim elit
                    mattis. Etiam eget lacus eget mi consectetur rutrum. Donec
                    aliquet nisi ut nisi pretium, quis ornare ex ornare. Sed
                    varius dolor a odio faucibus blandit
                  </p>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                  </ul>
                  <h4>Ce que j'ai aimé</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sagittis tellus eu mi varius accumsan a eu dolor. Curabitur
                    tempor lacus ac purus efficitur, sit amet dignissim elit
                    mattis. Etiam eget lacus eget mi consectetur rutrum. Donec
                    aliquet nisi ut nisi pretium, quis ornare ex ornare. Sed
                    varius dolor a odio faucibus blandit
                  </p>
                </figcaption>
              </figure>

              <figure className="rctp-fig">
                <img src={imgairbnb} className="rctp-fig-img" alt="" />
                <figcaption className="rctp-figc">
                  <h3>AirBnb</h3>
                  <p>
                    Curabitur et iaculis magna. Sed hendrerit lorem at interdum
                    vehicula. Phasellus quis rutrum sapien. Praesent et justo ut
                    erat dignissim auctor non vitae tellus. Cras maximus arcu at
                    lectus tempus, non tristique libero consectetur. Nunc et est
                    ac diam tincidunt bibendum ac sed nunc.
                  </p>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                  </ul>
                  <h4>Ce que j'ai aimé</h4>
                  <p>
                    Morbi pretium, dui ut porta fermentum, neque quam tristique
                    arcu, a aliquam mauris ipsum in magna. Donec eget dapibus
                    dui. Donec vehicula, nunc eleifend vulputate imperdiet,
                    lectus augue aliquet ipsum,
                  </p>
                </figcaption>
              </figure>

              <figure className="rctp-fig">
                <img src={imgtripadvisor} className="rctp-fig-img" alt="" />
                <figcaption className="rctp-figc">
                  <h3>TripAdvisor</h3>
                  <p>
                    Cras maximus arcu at lectus tempus, non tristique libero
                    consectetur. Nunc et est ac diam tincidunt bibendum ac sed
                    nunc. Morbi pretium, dui ut porta fermentum, neque quam
                    tristique arcu, a aliquam mauris ipsum in magna.
                  </p>
                  <ul>
                    <li>Php</li>
                    <li>Laravel</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                  </ul>
                  <h4>Ce que j'ai aimé</h4>
                  <p>
                    Morbi pretium, dui ut porta fermentum, neque quam tristique
                    arcu, a aliquam mauris ipsum in magna. Cras maximus arcu at
                    lectus tempus, non tristique libero consectetur. Nunc et est
                    ac diam tincidunt bibendum ac sed nunc.
                  </p>
                </figcaption>
              </figure>
            </div>
            <a href="#portfolio-anchor">
              <button className="btn-w">VOIR TOUS LES PROJETS</button>
            </a>
          </div>
        </div>
        {/* PROFIL AREA  */}
        <div className="section" id="pfl-anchor">
          <h2>
            <i className="fa-regular fa-comment fa-flip-horizontal"></i>Mon
            profil
          </h2>
          <div className="pfl-ctn">
            <p>
              Passionné de legos et langages informatiques je me suis reconverti
              dans le numérique en 2020 J’ai commencé en sautant dans la piscine
              de l’Ecole 42 pour le challenge, puis j’ai décidé de me former
              avec Open classNameeroom vers un diplôme de Développeur Web et
              plus récemment j’ai intégré le bootcamp Le Réacteur en juillet
              2024 dans lequel j’ai pu consolider ces acquis et travailler sur
              d’autres domaines (yyyy, zzzz, qqqqq). Je suis à l’aise avec xxx
              et souhaite développer mes compétences sur xxx
            </p>

            <h3>Compétences</h3>

            <div className="pfl-lskl">
              <h3>Front-end</h3>
              <div className="pfl-bskl">
                <figure className="pfl-fig">
                  <img src={skillhtml} alt="HTML 5" />
                  <figcaption className="pfl-figc">
                    <p>Html 5</p>
                  </figcaption>
                </figure>
                <figure className="pfl-fig">
                  <img src={skillcss} alt="CSS 3" />
                  <figcaption className="pfl-figc">
                    <p>Css 3</p>
                  </figcaption>
                </figure>
                <figure className="pfl-fig">
                  <img src={skilljs} alt="JavaScript" />
                  <figcaption className="pfl-figc">
                    <p>JavaScript</p>
                  </figcaption>
                </figure>
                <figure className="pfl-fig">
                  <img src={skillrct} alt="React" />
                  <figcaption className="pfl-figc">
                    <p>React</p>
                  </figcaption>
                </figure>
              </div>

              <h3>Back-end</h3>
              <div className="pfl-bskl">
                <figure className="pfl-fig">
                  <img src={skillnode} alt="NodeJs" />
                  <figcaption className="pfl-figc">
                    <p>NodeJs</p>
                  </figcaption>
                </figure>
                <figure className="pfl-fig">
                  <img src={skillmgdb} alt="MongoDB" />
                  <figcaption className="pfl-figc">
                    <p>MongoDB</p>
                  </figcaption>
                </figure>
              </div>

              <h3>Framework</h3>
              <div className="pfl-bskl">
                <figure className="pfl-fig">
                  <img src={skillgit} alt="Git" />
                  <figcaption className="pfl-figc">
                    <p></p>
                  </figcaption>
                </figure>
                <figure className="pfl-fig">
                  <img src={skillbtstp} alt="BootStraap" />
                  <figcaption className="pfl-figc">
                    <p>BootStraap</p>
                  </figcaption>
                </figure>
                <figure className="pfl-fig">
                  <img src="" alt="TailWind Css" />
                  <figcaption className="pfl-figc">
                    <p>TailWind Css</p>
                  </figcaption>
                </figure>
              </div>

              <h3>CMS</h3>
              <div className="pfl-bskl">
                <figure className="pfl-fig">
                  <img src={skillcms} alt="WordPress" />
                  <figcaption className="pfl-figc">
                    <p>WordPress</p>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="pfl-cv">
              <p>Pour plus de détails, consultez et téléchargez mon CV </p>
              <a href="#">
                <button className="btn-d">CV WEB DEV ARTHUR SELVA</button>
              </a>
            </div>
          </div>
        </div>
        {/* BOOK AREA */}
        <div className="section" id="book-anchor">
          <h2>
            <i className="fa-solid fa-folder-plus"></i>Portfolio
          </h2>
          <div className="book-ctn">
            <figure className="book-fig">
              <img src="" alt="Roi du Burger" />
              <figcaption className="book-figc">
                <h3>App Borne commandes</h3>
                <p>
                  Pellentesque finibus, elit id malesuada maximus, leo erat
                  euismod nulla, sed bibendum nunc velit eget mauris. Fusce
                  consectetur tellus lacus, eu mattis tortor viverra vitae
                </p>
                <ul>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>JavaScript</li>
                </ul>
              </figcaption>
            </figure>
            <figure className="book-fig">
              <img src={imgtripadvisor} alt="TripAdvisor" />
              <figcaption className="book-figc">
                <h3>TripAdvisor</h3>
                <p>
                  {" "}
                  In malesuada dolor vitae congue fringilla. Donec imperdiet
                  pretium mi, et consectetur dui mattis aliquet. Morbi ipsum
                  erat, imperdiet eget felis at, gravida pretium tortor.{" "}
                </p>
                <ul>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>JavaScript</li>
                </ul>
              </figcaption>
            </figure>
            <figure className="book-fig">
              <img src={imgdeliveroo} alt="Deliveroo" />
              <figcaption className="book-figc">
                <h3>Deliveroo</h3>
                <p>
                  {" "}
                  Pellentesque nec eros nec diam sollicitudin lobortis et sit
                  amet mauris. Praesent diam leo, sodales quis rutrum quis,
                  faucibus in urna. Aliquam elementum pretium arcu non
                  tincidunt.
                </p>
                <ul>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>JavaScript</li>
                </ul>
              </figcaption>
            </figure>
            <figure className="book-fig">
              <img src={imgairbnb} alt="AirBnb" />
              <figcaption className="book-figc">
                <h3>AirBnb</h3>
                <p>
                  Aenean dui purus, dignissim a venenatis a, imperdiet eu
                  lectus. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas.
                </p>
                <ul>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>JavaScript</li>
                </ul>
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ARCHIVE AREA */}
        <div className="section" id="archive-anchor">
          <h2>
            <i className="fa-solid fa-folder-plus"></i>Archives
          </h2>

          <div className="acv-ctn">
            <div className="acv-fdr">
              <div className="acvf-h">
                <h3>Projet Full-Stack</h3>
                <div className="acvf-lnk">
                  <a className="icn-lnk" href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a className="icn-lnk" href="#">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>
              <div className="acvf-b">
                <h4>Site de jeux vidéos</h4>
                <p>
                  Pellentesque finibus, elit id malesuada maximus, leo erat
                  euismod nulla, sed bibendum nunc velit eget mauris. Fusce
                  consectetur tellus lacus, eu mattis tortor viverra vitae. In
                  malesuada dolor vitae congue fringilla. Donec imperdiet
                  pretium mi, et consectetur dui mattis aliquet.{" "}
                </p>
                <ul>
                  <span>Requêtes</span>
                  <li>Gestion de BDD</li>
                  <li>Structure MVC Php</li>
                  <li>
                    Gestions de plusieurs réseaux sociaux pour augmenter le taux
                    de visiteur/joueurs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT AREA */}
        <div className="section" id="contact-anchor">
          <h2>
            <i className="fa-solid fa-envelope"></i>Contact
          </h2>
          <div className="ctt-ctn">
            <FormCtt />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
