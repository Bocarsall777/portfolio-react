import baba from "../assets/images/baba.png";
import html from "../assets/images/html.png";
import sall from "../assets/images/sall.png";
import shop from "../assets/images/shop.png";

function Projects() {
  const projects = [
    { image: baba, title: "Montage photoshop" },
    { image: html, title: "Portofolio" },
    { image: sall, title: "projet Laravel" },
    { image: shop, title: "projet React" },
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