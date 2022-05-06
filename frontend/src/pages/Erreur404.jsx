import React from "react";
import FicheMembre from "./FicheMembre";
import membres from "../assets/membres.json";

function Erreur404() {
  const randomMember = Math.round(Math.random() * (membres.length - 1));
  const memberId = membres[randomMember].id;
  return (
    <div>
      <div className="Header404">
        <h1>404</h1>
        <h2>{`Vous êtes perdu ?
          Faites la connaissance d'un membre au hasard !`}</h2>
        <a href="./index.html">
          <p>
            {`Sinon, vous pouvez retourner directement à la page
             d'accueil en cliquant ici !`}
          </p>
        </a>
      </div>
      <FicheMembre value={{ memberId }} />
    </div>
  );
}
export default Erreur404;
