import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Developpeur full stack, je participe aux differents aspects du
            developpement de votre projet, depuis son analyse, conception
            jusqu'a son deploiement finale.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Formation et cursus</h3>
            <div className="resume-item">
              <h4>
                Licence Professionnelle (Bac +3): systèmes d’information &
                ingénierie décisionnelle
              </h4>
              <h5>2013 - 2014</h5>
              <p>
                <em>
                  <a href="http://www.fsts.ac.ma/">
                    Faculté des sciences et techniques
                  </a>
                  Settat, Maroc
                </em>
              </p>
              <p>
                Etudes approfondies sur les techniques de développement
                informatique & administration de bases de données à
                l’université.
              </p>
            </div>
            <div className="resume-item">
              <h4>Technicien spéciqlisé en développement informatique</h4>
              <h5>2010 - 2012</h5>
              <p>
                <em>
                  <a href="https://www.ofppt.ma/fr/etablissements/institut-specialise-de-gestion-et-dinformatique-casablanca">
                    Isgi Casablanca
                  </a>
                </em>
              </p>
              <p>
                <em>Mention assez bien</em> Initiation aux fondation du dommaine
                de developpement et creation des applications , algorithmes,
                methodes d'analyse, infrastructures ...
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Experience Professionnelle</h3>
            <div className="resume-item">
              <h4>WFM Manager / Developpeur FullStack</h4>
              <h5>2015 - Present</h5>
              <p>
                <em>Group Intelcia, Casablanca, Maroc </em>
              </p>
              <ul>
                <li>
                  Mise en place d'un system de gestion de la chaine des donnees
                  du departement planification et prevision permettant la
                  strturaction des donnes, l'automotatisation de l'alimentation
                  des des donnes ainsi que leurs presentation a travers un CRM
                  base sur Laravel/Mysql.
                </li>
                <li>
                  Assurer en parallele la mission de planification des projets
                  de production GRC a grande echelle : parc de plus 5000
                  collaborateurs.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>FullStack Web Developpeur </h4>
              <h5>2014 - present</h5>
              <p>
                <em>Auto-Entrepreneur/Freelancer Casablanca, Maroc</em>
              </p>
              <ul>
                <li>
                  Developpement, conception de solutions informatiques sur
                  mesure s'adaptant aux besoin des clients.
                </li>
                <li>
                  Maintennance des projets deja en production ainsi que leurs
                  evolutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
