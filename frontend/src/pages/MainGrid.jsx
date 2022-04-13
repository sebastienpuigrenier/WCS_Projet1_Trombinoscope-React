import React from "react";
import PropTypes from "prop-types";
import membres from "../assets/membres";
import { alphaOrder, formateurFirst } from "../utilities/functions";

// Création de la div vignette
function MiniCard({ photo, nom, prenom }) {
  return (
    <div className="background">
      <div className="accueil-photo image-profil">
        <img src={photo} className="photo-profil" alt={`${prenom} ${nom}`} />
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
