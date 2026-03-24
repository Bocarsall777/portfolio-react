import { Link } from "react-router-dom";
import React from "react";


function Navbar() {
  return (
    
    <nav className="nav">
      <h1 className="logo">BocarDev</h1>
      <div className="lol">
      
      <Link to="/">Accueil</Link>
      <Link to="/Conpetences">Conpetences</Link>


      <Link to="/Projets">Projets</Link>
      

      
      <Link to="/contact">Contact</Link>
    


        
        

        



      </div>
      
      
      
      
      
    </nav>
  );
}

export default Navbar;