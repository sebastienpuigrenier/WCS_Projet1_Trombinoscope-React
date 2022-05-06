import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";

import membres from "../assets/membres.json";

function FicheMembre(props) {
  let membre = "";
  if (useParams().membre !== undefined) {
    membre = useParams().membre;
  } else {
    membre = props.value.memberId; {/* eslint-disable-line */}
  }

  const infoMembre = membres.filter((e) => e.id === membre)[0];

  return (
    <div>
      <div className="carousel">
        <input type="radio" name="position" />
        <input type="radio" name="position" checked />
        <input type="radio" name="position" />
        <div id="carousel">
          {/* <!-- première carte--> */}
          <div className="item">
            <div className="descriptif">
              <h2 id="titre2">Hobbies</h2>
              <p>{infoMembre.hobbys}</p>
              <h2 id="titre2">Pourquoi j&#39;ai voulu être développeur web?</h2>
              <p>{infoMembre.why}</p>
            </div>
          </div>
          {/* <!-- deuxième carte --> */}
          <div className="item" id="id">
            <div className="profil-container">
              <div className="photo-profil">
                <img
                  src={infoMembre.photo}
                  alt={`${infoMembre.prenom} ${infoMembre.nom}`}
                />
              </div>
            </div>
            <div className="main-profil">
              <div className="descriptif">
                <h1 id="identity">
                  {infoMembre.prenom} {infoMembre.nom}
                </h1>
              </div>
            </div>
          </div>
          {/* <!-- troisième carte--> */}
          <div className="item">
            <div className="button">
              <div>
                <div>
                  <a href={infoMembre.github} target="_blank" rel="noreferrer">
                    <div className="fas">
                      <FaGithubSquare />
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href={infoMembre.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="fas">
                      <FaLinkedin />
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${infoMembre.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="fas">
                      <FaEnvelope />
                    </div>
                  </a>
                </div>
                <div>
                  <Link to="/">
                    <div className="fas">
                      <RiArrowGoBackLine />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheMembre;
