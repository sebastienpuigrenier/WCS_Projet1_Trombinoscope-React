import React from "react";
import { Link } from "react-dom";
import PropTypes from "prop-types";
import membres from "../assets/membres";
import { alphaOrder, formateurFirst } from "../utilities/functions";

const element = document.querySelectorAll(".accueil-photo");

for (let i = 0; i < element.length; i += 1) {
  element[i].addEventListener("click", () => {
    console.warn("clicked");
  });
}

// Création de la div vignette
function MiniCard({ photo, nom, prenom }) {
  return (
    <div className="background">
      <div className="accueil-photo image-profil">
        <Link to="/users/wildcoder">
          <img src={photo} className="photo-profil" alt={`${prenom} ${nom}`} />
        </Link>
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  photo: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
};

// Création de la grille complète
function MainGrid() {
  membres.sort(alphaOrder);
  formateurFirst();

  return (
    <div className="image">
      {membres.map((person, id) => (
        <MiniCard
          key={id.nom}
          photo={person.photo}
          nom={person.nom}
          prenom={person.photo}
        />
      ))}
    </div>
  );
}

export default MainGrid;
