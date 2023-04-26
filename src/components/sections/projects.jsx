import React, { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import projetsList from "../../assets/utils/data";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "better-react-carousel";
import Badge from "react-bootstrap/Badge";
import { BsCodeSlash, BsPlay } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles/portfolio.scss";

import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  const portfolio = projetsList;
  const [projectToShowIndex, setProjectToShowIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setProjectToShowIndex(-1);
    setShowModal(false);
  };
  const handleShowModal = (projectIndex) => {
    setProjectToShowIndex(projectIndex);
    setShowModal(true);
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <Slide right>
            <p>
              Vous trouverez ci-dessous quelques exemples de mes réalisations
              les plus récentes, qui illustrent mes compétences en matière de
              développement frontend et backend. J'ai travaillé sur des projets
              variés, allant des sites e-commerce aux applications web
              complexes, en passant par les sites de contenu statique et
              dynamique sans oublier l'univers du mobile avec les techologies
              Hybride. Je suis constamment à la recherche de nouvelles
              technologies et de nouvelles techniques pour améliorer mon
              travail.
            </p>
          </Slide>
        </div>

        <div className="row d-flex flex-row justify-content-around align-items-center">
          {portfolio.map((project, key) => (
            <div key={`portfo-${key}`} className="col-lg-4 col-md-6 mt-5">
              <div className="portfolio-item ">
                <div className="row">
                  <div className="col-8 d-flex  align-items-center">
                    <h5 className="text-center"> {project.name}</h5>
                  </div>
                  <div className="col-4">
                    <Zoom bottom>
                      <a
                        onClick={() => handleShowModal(key)}
                        href="#"
                        title="More Details"
                        className="btn btn-info w-100"
                      >
                        <i>
                          <BiShowAlt />
                        </i>
                      </a>
                    </Zoom>
                  </div>
                </div>
                <div className="portfolio-wrap text-center">
                  <img src={project.img} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal ? (
        <Modal
          style={{ zIndex: 9999 }}
          size="xl"
          centered
          show={showModal}
          onHide={handleCloseModal}
        >
          <Modal.Header className="d-flex flex-column justify-content-center align-self-center text-center">
            <Modal.Title className=" projectTitle text-center bold w-100 ">
              {projetsList[projectToShowIndex].name}
            </Modal.Title>
            <p>{projetsList[projectToShowIndex].title}</p>
          </Modal.Header>

          <Modal.Body>
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <h6
                  className="text-center"
                  style={{ fontWeight: "bold", color: "#e0a800" }}
                >
                  Descritpion du projet :
                </h6>
                <p
                  style={{
                    backgroundColor: "#6c80a7",
                    borderRadius: "5px",
                    boxShadow: "2px 2px 2px 2px #e0a800",

                    color: "white",
                    padding: "8px 30px",
                    fontFamily: "Courier New, Courier, monospace",
                    fontSize: "14px",
                    lineHeight: "2em",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: projetsList[
                      projectToShowIndex
                    ].description.replaceAll("\n", "<li/>"),
                  }}
                >
                  {/* {`${.replaceAll(
                    "\n",
                    "<br/>"
                  )}`} */}
                </p>
              </div>
              <div className="col-md-4 col-sm-12">
                <h6
                  className="text-center"
                  style={{ fontWeight: "bold", color: "#e0a800" }}
                >
                  Technologies :
                </h6>

                <div className="">
                  {projetsList[projectToShowIndex].tags.map((tag, key) => (
                    <Badge
                      bg="info"
                      pill
                      text="light"
                      id="myBadge"
                      className="p-2 m-1"
                      key={key}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Carousel cols={3} rows={1} gap={10} loop showDots autoPlay>
              {projetsList[projectToShowIndex].galerie().map((img, index) => (
                <Carousel.Item key={index}>
                  <img width="100%" src={img} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>

          <Modal.Footer style={{ fontSize: "20px" }}>
            <Button
              variant="warning"
              href={projetsList[projectToShowIndex].gitHub}
              target="_blank"
              rel="noreferrer"
            >
              <BsCodeSlash className="mr-2 mb-1" />
              Code
            </Button>
            <Button
              style={{ backgroundColor: "#6c80a7", border: "#6c80a7" }}
              href={projetsList[projectToShowIndex].link}
              target="_blank"
              rel="noreferrer"
            >
              <BsPlay className="mr-2 mb-1" />
              Demo
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              <AiOutlineClose className="mr-2 mb-1" />
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </section>
  );
};

export default Projects;
