import React from "react";
import "./Contact.css";
import "./Form-ctt.jsx";

const Contact = () => {
  return (
    <section className="#" id="contact-anchor">
      <h2>
        <i className="fa-solid fa-envelope"></i>Entrer en contact
      </h2>

      <p>
        Que vous ayez une question ou que vous souhaitiez simplement dire
        bonjour, ma boîte de réception est toujours ouverte. Je ferai de mon
        mieux pour vous répondre dans les plus bref délais !
      </p>
      <Form-ctt />
    </section>
  );
};

export default Contact;
