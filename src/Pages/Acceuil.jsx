import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Competences from "../components/Competences";
import Contact from "../components/Contact";
import Projets from "../components/Projets"

function Acceuil() {
  return (
    <div>
      
      <Hero />
      <Competences />
      <Projets />
      <Contact />
      
    </div>
  );
}

export default Acceuil;