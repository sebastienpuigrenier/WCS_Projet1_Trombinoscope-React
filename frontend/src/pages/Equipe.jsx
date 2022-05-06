import React from "react";
import equipe from "../assets/equipe.json";

function Equipe() {
  return (
    <>
      {equipe.map((membre) => {
        return (
          <section className="membre-staff">
            <div className="flex equipe-container">
              <div
                className="portrait-membre"
                style={{
                  backgroundImage: `url(${membre.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="description">
                <h1>
                  {membre.nom} {membre.prenom}
                </h1>
                <h2>{membre.poste}</h2>
                <p>{membre.complement}</p>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Equipe;
