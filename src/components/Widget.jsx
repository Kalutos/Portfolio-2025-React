import React from "react";
import { useState } from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <>
      (
      <div className="widget-left">
        <a href="http://www.github.com/Kalutos">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="http://www.linkedin.com/in/arthurselvafichepain">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="http://www.facebook.com/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>
      <div className="widget-right">
        <a href="http://www.github.com/Kalutos">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="http://www.linkedin.com/in/arthurselvafichepain">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="http://www.facebook.com/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="mailto:arthurslfpro@gmail.com">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fa-solid fa-question"></i>
        </a>
      </div>
      )
    </>
  );
};

export default Widget;
