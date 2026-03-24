import React from "react";
import bocar from "../assets/images/bocar.jpeg";

function Competences() {
  return (
    <div className="section">

  
      <h1 className="title">Mes compétences</h1>

      
      <div className="container">

        
        <div className="left">
          <img src={bocar} alt="BocarDev" />
        </div>

        
        <div className="right">

          <div className="card">
            <h3>Développeur Frontend</h3>
            <p>
              Je développe des interfaces modernes avec React, HTML et CSS.
              <br />
              <strong>Niveau : Intermédiaire</strong>
            </p>
          </div>

          <div className="card">
            <h3>Développeur Backend</h3>
            <p>
              Je maîtrise les bases du backend avec Node.js et Express.
              <br />
              <strong>Niveau : Débutant à intermédiaire</strong>
            </p>
          </div>

          <div className="card">
            <h3>Passionné par l'UI/UX</h3>
            <p>
              Je conçois des interfaces simples et attractives.
              <br />
              <strong>Niveau : Intermédiaire</strong>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Competences;