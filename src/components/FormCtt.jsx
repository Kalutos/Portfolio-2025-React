import React, { useState } from "react";
import "./FormCtt.css";

const FormCtt = () => {
  return (
    <>
      <form
        action="/votre-action"
        method="post"
        className="form-ctn"
        id="contactForm"
      >
        <p>
          Que vous ayez une question ou que vous souhaitiez simplement dire
          bonjour, ma boîte de réception est toujours ouverte. Je ferai de mon
          mieux pour vous répondre dans les plus bref délais !
        </p>

        <div className="form-ask">
          <div className="form-cln">
            <div className="form-ipt">
              <label className="form-lbl" htmlFor="nom">
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
              <label className="form-lbl" htmlFor="prenom">
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
          </div>
          <div className="form-cln">
            <div className="form-ipt">
              <label className="form-lbl" htmlFor="email">
                Email* :
              </label>
              <input
                name="email"
                className="form-aswr"
                id="email"
                type="email"
                autoComplete="off"
                required
              />
            </div>

            <div className="form-ipt">
              <label className="form-lbl" htmlFor="telephone">
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
          </div>

          <div className="form-ipt">
            <label className="form-lbl" htmlFor="objet">
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
            <label className="form-lbl" htmlFor="message">
              Message* :
            </label>
            <textarea
              id="message"
              className="form-aswr-t"
              name="message"
              rows="4"
              required
            ></textarea>
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
            <label htmlFor="accept">
              En soumettant ce formulaire, j'accepte que mes données
              personnelles soient utilisées pour me recontacter. Aucun autre
              traitement ne sera effectué avec mes informations. Pour connaître
              et exercer vos droits, veuillez consultez la Politique de
              confidentialité.
            </label>
          </div>

          <div className="form-box-btn">
            <a href="mailto:selva.arthur@gmail.com">
              <button type="submit" title="mail" className="btn">
                Envoyer
              </button>
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCtt;
