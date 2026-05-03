import { useParams } from "react-router-dom";
import baba from "../assets/images/baba.png";
import html from "../assets/images/html.png";
import sall from "../assets/images/sall.png";
import shop from "../assets/images/shop.png";
import isep from "../assets/images/isep.png";

function ProjectDetails() {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      image: baba,
      title: "Montage photoshop",
      desc: "Création de designs et montages avec Photoshop.",
      tech: ["Photoshop"],
    },
    {
      id: 2,
      image: html,
      title: "Portfolio",
      desc: "Création de mon portfolio avec HTML, CSS .",
      tech: ["HTML", "CSS", ],
    },
    {
      id: 3,
      image: sall,
      title: "Projet Laravel",
      desc: "Développement d’une application web avec Laravel.",
      tech: ["Laravel", "PHP", "CSS"],
    },
    {
      id: 4,
      image: shop,
      title: "Projet React",
      desc: "Application web moderne développée avec React.",
      tech: ["React", "JavaScript" , "Css"],
    },



     {
      id: 5,
      image: isep,
      title: "Projet Figma",
      desc: "Un projet Figma pensé avec créativité, simplicité et expérience utilisateur.",

      tech: ["figma"],
    },


    



    

  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div className="project-details">
      <h2>{project.title}</h2>

      <img src={project.image} alt={project.title} />

      <p>{project.desc}</p>

      <h3>Technologies utilisées</h3>
      <ul>
        {project.tech.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetails;