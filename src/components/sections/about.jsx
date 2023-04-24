import React from "react";
import profileImg from "../../assets/img/profile-img.jpg";
import "../../styles/about.scss";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row d-flex  flex-lg-row flex-md-column">
          <div
            className="col-lg-8 pt-4 pt-lg-0 content d-flex justify-content-center flex-column "
            data-aos="fade-left"
          >
            <div className="section-title">
              <h2>About</h2>
              <Slide right>
                <p>
                  Je suis un développeur web full-stack passionné et
                  expérimenté, spécialisé dans la conception et la réalisation
                  de projets de haute qualité en utilisant des technologies
                  front-end et back-end. Je suis toujours à la recherche de
                  nouveaux défis pour améliorer mes compétences et aider les
                  clients à atteindre leurs objectifs. N'hésitez pas à me
                  contacter pour discuter de votre projet..
                </p>
              </Slide>
            </div>
          </div>
          <div
            className="col-lg-4 d-flex justify-content-center"
            data-aos="fade-right"
          >
            <img
              src={profileImg}
              className="img-fluid"
              style={{
                borderRadius: "50%",
                border: "#e0a800 solid 3px",
                boxShadow: "2px 2px 2px 2px #e0a800",
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
