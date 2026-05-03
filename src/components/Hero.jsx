import React from "react";
import ninho from "../assets/images/ninho.jpeg";

function Hero() {
  return (
    <div className="hero"> 
    <div className="hero-content">

      <div className="left">
        <h1>
          Bonjour,<br />
          je suis <span>BocarSall</span>
        </h1>

        <p>
          Je suis développeur fullstack. <br />
          Je suis une personne passionnée par l’informatique et les nouvelles technologies.
J’aime apprendre de nouvelles choses et développer mes compétences chaque jour.
Je m’intéresse particulièrement au développement web et à la création d’applications.
Je suis motivé, curieux et déterminé à réussir dans ce domaine.
Mon objectif est de devenir un bon développeur et de réaliser des projets utiles..
        </p>

        <button className="btn">Me contacter</button>
      </div>

      <div className="right">
        <img src={ninho} alt="BocarDev" />
      </div>

    </div>
    </div>
  );
}

export default Hero;