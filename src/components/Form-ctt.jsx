import React from "react";
import { useState } from "react";
import "./Form-ctt.css";

const Formulaire = () => {
  return (
    <>
      <form
        action="/votre-action"
        method="post"
        className="form-ctn"
        id="contactForm"
      >
        <div className="form-ask">
          <div className="form-ipt">
            <label className="form-lbl" for="nom">
              Nom* :
            </label>
            <input
              type="text"
              className="form-aswr"
              id="nom"
              name="nom"
              required
            />
          </div>

          <div className="form-ipt">
            <label className="form-lbl" for="prenom">
              Prénom* :
            </label>
            <input
              type="text"
              className="form-aswr"
              id="prenom"
              name="prenom"
              required
            />
          </div>

          <div className="form-ipt">
            <label className="form-lbl" for="email">
              Email* :
            </label>
            <input
              name="email"
              className="form-aswr"
              id="email"
              type="email"
              autocomplete="off"
              required
            />
          </div>

          <div className="form-ipt">
            <label className="form-lbl" for="telephone">
              Mobile* :
            </label>
            <input
              type="tel"
              className="form-aswr"
              id="telephone"
              name="telephone"
              required
            />
          </div>

          <div className="form-ipt">
            <label className="form-lbl" for="objet">
              Objet* :
            </label>
            <input
              type="text"
              className="form-aswr"
              id="objet"
              name="objet"
              required
            />
          </div>

          <div className="form-ipt">
            <label className="form-lbl" for="message">
              Mess.* :
            </label>
            <textarea
              id="message"
              className="form-aswr"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        <div className="form-ifs">
          <div className="form-ifs-t">
            <p>arthurslfpro@gmail.com</p>
            <p>06.59.77.11.44</p>
            <p>95700 Roissy en France</p>
          </div>

          <div className="form-ifs-icn">
            <a
              href="https://www.codepen.io/aselvaf"
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
          </div>
        </div>

        <div className="check-answer">
          <div className="privacy-data">
            <input
              type="checkbox"
              className="cross-ipt"
              id="accept"
              name="accept"
              required
            />
            <label for="accept">
              En soumettant ce formulaire, j'accepte que mes données
              personnelles soient utilisées pour me recontacter. Aucun autre
              traitement ne sera effectué avec mes informations. Pour connaître
              et exercer vos droits, veuillez consultez la Politique de
              confidentialité.
            </label>
          </div>

          <div className="form-box-btn">
            <a href="mailto:selva.arthur@gmail.com">
              <button type="submit" title="mail" className="form-btn">
                Envoyer
              </button>
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulaire;
