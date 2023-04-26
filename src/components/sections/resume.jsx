import React from "react";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const Resume = () => {
  // const typing = new Audio(audio);
  // typing.loop = true;
  // // typing.autoplay = true;
  // useEffect(() => {
  //   // typing.play();
  // }, []);
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <Slide right>
            <p>
              Developpeur full stack, je participe aux differents aspects du
              developpement de votre projet, depuis son analyse, conception
              jusqu'a son deploiement finale.
            </p>
          </Slide>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Formation et cursus</h3>
            <Fade bottom>
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
                {/* <p>
                  Etudes approfondies sur les techniques de développement
                  informatique & administration de bases de données à
                  l’université.
                </p> */}
              </div>
            </Fade>
            <Fade bottom>
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
                {/* <p>
                  <em>Mention assez bien</em> Initiation aux fondation du
                  dommaine de developpement et creation des applications ,
                  algorithmes, methodes d'analyse, infrastructures ...
                </p> */}
              </div>
            </Fade>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Experience Professionnelle</h3>
            <Fade bottom>
              <div className="resume-item">
                <h4>WFM Manager / Developpeur FullStack</h4>
                <h5>2015 - 2022</h5>
                <p>
                  <em>Group Intelcia, Casablanca, Maroc </em>
                </p>
                <p>
                  J'ai analysé, géré et surveillé en temps réel les KPI de
                  production, créé des tableaux de bord et des rapports, et
                  planifié les activités de production en fonction des
                  indicateurs contractuels et des commandes pour optimiser la
                  performance de production. J'ai également maintenu et
                  développé la base de données CRM du département, ce qui m'a
                  permis d'affiner mes compétences en programmation et en
                  gestion de données. Mon engagement en faveur de l'excellence
                  opérationnelle et de la gestion efficace des KPI de production
                  a contribué de manière significative aux performances globales
                  de l'entreprise.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="resume-item">
                <h4>FULLSTACK ENGINEER Independant </h4>
                <h5>2014 - present</h5>
                <p>
                  <em>Auto-Entrepreneur/Freelancer Casablanca, Maroc</em>
                </p>
                <p>
                  J'ai conçu et développé des projets web de bout en bout, géré
                  la planification et la création d'interfaces utilisateur
                  conviviales et réactives. J'ai également travaillé en étroite
                  collaboration avec l'équipe pour assurer une intégration
                  harmonieuse des front-end et back-end
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
