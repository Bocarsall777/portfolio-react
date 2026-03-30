import React from "react";
import ninhoImage from "../assets/images/ninho.jpeg"; // Vérifie bien le chemin

const About = () => {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${ninhoImage})` }} // On utilise la variable importée
    >
      <div className="overlay">
        <h2>À propos de moi</h2>
        <p>
          Je suis <strong>BocarDev</strong>, développeur web passionné. Je crée des projets modernes et performants avec <strong>React, JavaScript, HTML, CSS</strong>.  
          J’aime résoudre des problèmes, apprendre de nouvelles technologies et construire des interfaces intuitives et responsives.
        </p>

        <h3>Compétences</h3>
        <ul>
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
          <li>UI/UX basics</li>
        </ul>

        <h3>Loisirs</h3>
        <ul>
          <li>Lecture et veille tech</li>
          <li>Jeux vidéo et gaming</li>
          <li>Sports (football, musculation)</li>
          <li>Écouter du rap</li>
          <li>Regarder des mangas</li>
          <li>Design et créativité</li>
        </ul>
      </div>
    </section>
  );
};

export default About;