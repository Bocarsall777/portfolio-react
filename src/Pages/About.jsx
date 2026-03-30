import React from "react";
import ninhoImg from "../assets/images/ninho.jpeg"; // ton image de Ninho
import "../index.css"; // Assure-toi que index.css est bien importé

function About() {
  return (
    <section className="about-section">
      <div>
        <img src={ninhoImg} alt="Ninho" />
      </div>

      <div className="about-right">
        <h1>À propos de moi</h1>
        <p>
          Salut ! Je m'appelle Bocar et je suis développeur passionné par le
          web. J'adore créer des interfaces modernes et intuitives avec React,
          HTML et CSS.
        </p>

         <h2>Compétences</h2>
        <ul>
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
          <li>UI/UX basics</li>
        </ul>

        <h2>Mes loisirs</h2>
        <ul>
         <li>Lecture et veille tech</li>
          <li>Jeux video et Gaming</li>
          <li>Sports(Football, Musculation)</li>
          <li>Écouter de la music🎵</li>
          <li>Regarder des mangas </li>
          <li>Responsive Design </li>
          
        </ul>
      </div>
    </section>
  );
}

export default About;