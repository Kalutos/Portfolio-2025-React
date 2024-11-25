import React from "react";
import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icn">
        <a href="" className="icn-lnk">
          <i className="fa-solid fa-cookie"></i>
        </a>
        <a href="#home-anchor" className="icn-lnk">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
      <div className="footer-t">
        <p>Imaginé et produit par Arthur Selva</p>
      </div>
    </div>
  );
};

export default Footer;
