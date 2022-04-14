import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <div>
        <button className="nav-btn" aria-label="open navigation" type="button">
          <span className="hamburger" />
        </button>

        <a href="./index.html">
          <img
            src="../../src/assets/img/logo_outsiders.png"
            alt="logo {Out}Siders"
            className="nav-logo"
          />
        </a>
      </div>

      <ul className="nav__list">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Apropos">A propos</Link>
        </li>
        <li>
          <Link to="/equipe">L&apos;équipe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
