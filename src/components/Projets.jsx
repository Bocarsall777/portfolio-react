import { Link } from "react-router-dom";
import baba from "../assets/images/baba.png";
import html from "../assets/images/html.png";
import sall from "../assets/images/sall.png";
import shop from "../assets/images/shop.png";
import isep from "../assets/images/isep.png";

function Projects() {
  const projects = [
    { id: 1, image: baba, title: "Montage photoshop" },
    { id: 2, image: html, title: "Portfolio" },
    { id: 3, image: sall, title: "Projet Laravel" },
    { id: 4, image: shop, title: "Projet React" },
    { id: 5, image: isep, title: "Projet Figma" },
  ];

  return (
    <div className="projects">
      <h2>Mes projets</h2>

      <div className="projects-container">
        {projects.map((proj) => (
          <Link to={`/project/${proj.id}`} key={proj.id}>
            <div className="project-card">
              <img src={proj.image} alt={proj.title} />
              <p>{proj.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;