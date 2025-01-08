import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cookie">
        <a href="" className="icn-lnk">
          <i className="fa-solid fa-cookie"></i>
        </a>
      </div>

      <div className="footer-middle">
        <div className="footer-icn">
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
        </div>
        <p>Produit par Arthur Selva</p>
      </div>
      <div className="footer-anchor">
        <a href="#home-anchor" className="icn-lnk">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
