import React from "react";

function Apropos() {
  return (
    <>
      <div className="our-tutor-card">
        <img
          className="window-button"
          src="../../src/assets/img/close-button.png"
          alt="Myself, Public domain, via Wikimedia Commons"
        />
        <div className="tutor-img">
          <img
            src="../../src/assets/img/our-tutor.jpeg"
            alt="Notre formateur bien aimé"
          />
        </div>
        <div className="tutor-links">
          <div>
            <a
              href="https://www.linkedin.com/in/anthony-gorski/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/GorskiAnthony/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="our-tutor-subcard">
          <div>
            <p>
              {`Marseillais d'origine, Anthony est notre formateur JavaScript à la Wild Code School. Concepteur Développeur d'application à son compte depuis octobre 2019, Anthony exerce son activité de formateur depuis octobre 2020, d'abord au Greta puis à Openclassrooms en tant que tuteur et pour la première fois en 2022 à la Wild Code School.`}
            </p>
          </div>
          <div className="paragraph">
            <p>
              {`D'après son profil Linkedin, Anthony aime les échecs, l'astronomie et le web, bien sûr.`}
            </p>
          </div>
        </div>
      </div>
      <section className="project">
        <div className="sub-content">
          <div className="sub-content-title">
            <h2>Notre premier projet</h2>
          </div>
          <div className="sub-content-img">
            <img
              src="../../src/assets/img/icon-project.png"
              alt="project icon - Project by Komkrit Noenpoempisut from NounProject.com"
            />
          </div>
          <div className="sub-content-paragraph">
            <p>
              Ce trombinoscope est un projet &#34;pédagogique&#34; réalisé par
              &nbsp;une équipe d&#39;étudiants à la Wild Code School. Le but de
              &nbsp;ce projet est de mettre en pratique les éléments
              &nbsp;d&#39;apprentissages vus pendant ces trois premières
              &nbsp;semaines de cours sur le cursus développement web.
            </p>
            <p>
              Tous étudiant à distance dans notre promotion, nous ne disposons
              &nbsp;pas des moyens traditionnels pour faire connaissance. Aussi,
              &nbsp;à travers ce trombinoscope, nous voulons permettre aux
              &nbsp;membres de notre groupe de mieux se connaître. Nous avons
              &nbsp;donc collecté un certain nombres d&#39;informations auprès
              &nbsp;de nos camarades de cours afin de les mettre en forme sur
              &nbsp;cette plateforme, certes basique aujourd&#39;hui, mais qui
              &nbsp;pourrait donner lieu à l&#39;avenir à des fonctionnalités
              &nbsp;plus évoluées.
            </p>
          </div>
        </div>
      </section>
      <section className="requirements">
        <div className="sub-content">
          <div className="sub-content-title" id="specific-title">
            <h2>Les critères d&#39;évaluation / attentes du prescripteur</h2>
          </div>
          <div className="sub-content-img" id="specific-image">
            <img
              src="../../src/assets/img/icon-requirements.png"
              alt="requirement icon - Requirement by Kukuh Wachyu Bias from NounProject.com"
            />
          </div>
          <div className="sub-content-paragraph" id="specific-paragraph">
            <div>
              <p>Ce projet sera évalué sur plusieurs critères:</p>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    {`l'utilisation des technologies de base en vue de réaliser un site web statique`}
                  </p>
                </li>
                <li>
                  <p>
                    {`Un site contenant entre 4 à 6 pages, conçu avec une approche "mobile first"`}
                  </p>
                </li>
                <li>
                  <p>
                    {`la cohérence de l'interface utilisateur (polices, couleur, éléments de mise en page)`}
                  </p>
                </li>
                <li>
                  <p>la clarté et la validité du code</p>
                </li>
                <li>
                  <p>
                    {`l'utilisation de ressources dans le respect des droits d'auteur`}
                  </p>
                </li>
                <li>
                  <p>
                    {`l'affichage d'une page d'erreur 404 avec une redirection automatique`}
                  </p>
                </li>
                <li>
                  <p>
                    {`mise en place d'un flux de production collaboratif avec une bonne gestion des versions et contributions (commit)`}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="tools">
        <div className="sub-content">
          <div className="sub-content-title">
            <h2>Les outils</h2>
          </div>
          <div className="sub-content-img">
            <img
              src="../../src/assets/img/icon-tools.png"
              alt="tools icon - Tools by Vectorstall from NounProject.com"
              id="tools"
            />
          </div>
          <div className="sub-content-paragraph">
            <div>
              <p>
                {`Au cours de ces trois premières semaines d'apprentissage, nous avons vu les bases du développement web (HTML, CSS, Javascript) et de la gestion des flux de production grâce à Git et Github.`}
              </p>
            </div>
            <div className="paragraph">
              <p>Les outils que nous utilisons sont donc:</p>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    Microsoft Visual Studio Code pour la production du code
                    &nbsp;HTML, CSS et JS
                  </p>
                </li>
                <li>
                  <p>{`l'inspecteur web de nos navigateurs`}</p>
                </li>
                <li>
                  <p>
                    {`Git pour la gestion du versioning et Github pour la gestion des contribution individuelles des membres de l'équipe`}
                  </p>
                </li>
                <li>
                  <p>
                    {`Trello pour la gestion de projet (méthode Kanban) et l'évaluation des tâches à mener`}
                  </p>
                </li>
                <li>
                  <p>Discord pour les réunion et travail en équipe</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apropos;
