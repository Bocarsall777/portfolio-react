import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="nav">
      {/* Logo à gauche */}
      <h1 className="logo">BocarDev</h1>

      {/* Liens centrés */}
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/conpetences">Compétences</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="menu_lien">
        {/* About à droite */}
      <Link to="/about" className="about-button">
        About
      </Link>

      {/* Burger pour mobile */}
      <div className="burger" onClick={() => setOpenMenu(!openMenu)}>
        ☰
      </div>
      </div>

      {/* Menu mobile */}
      {openMenu && (
        <div className="mobile-menu show">
          <Link to="/" onClick={() => setOpenMenu(false)}>Accueil</Link>
          <Link to="/conpetences" onClick={() => setOpenMenu(false)}>Compétences</Link>
          <Link to="/projets" onClick={() => setOpenMenu(false)}>Projets</Link>
          <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;