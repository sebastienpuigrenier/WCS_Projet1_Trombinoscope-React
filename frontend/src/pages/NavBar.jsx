import React from "react";

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
          <a href="./index.html">Accueil</a>
        </li>
        <li>
          <a href="./apropos.html">A propos</a>
        </li>
        <li>
          <a href="./equipe.html">L&apos;équipe</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
