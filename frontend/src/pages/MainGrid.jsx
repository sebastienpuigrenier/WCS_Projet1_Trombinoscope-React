import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import membres from "../assets/membres.json";
import { alphaOrder, formateurFirst } from "../utilities/functions";

// Création de la div vignette
function MiniCard({ photo, prenom, nom }) {
  const idMember = prenom.charAt(0).toUpperCase();
  const altText = `${prenom} ${nom}`;
  return (
    <div className="background">
      <div className="accueil-photo image-profil">
        <Link to={`/FicheMembre/${idMember}-${nom.toUpperCase()}`}>
          <img src={photo} className="photo-profil" alt={altText} />
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
  console.warn(membres);
  return (
    <div className="image">
      {membres.map((person) => (
        <MiniCard
          key={person.email}
          photo={person.photo}
          nom={person.nom}
          prenom={person.prenom}
        />
      ))}
    </div>
  );
}

export default MainGrid;
