import baba from "../assets/images/baba.png";
import html from "../assets/images/html.png";
import sall from "../assets/images/sall.png";
import shop from "../assets/images/shop.png";

function Projects() {
  const projects = [
    { image: baba, title: "Projet Baba" },
    { image: html, title: "Site HTML" },
    { image: sall, title: "Portfolio Sall" },
    { image: shop, title: "E-commerce" },
  ];

  return (
    <div className="projects">
      <h2>Mes projets</h2>

      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <p>{proj.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;