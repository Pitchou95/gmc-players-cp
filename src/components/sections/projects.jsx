import React, { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import projetsList from "../../assets/utils/data";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Projects = () => {
  const portfolio = projetsList;
  // console.log(portfolio[0].galerie());
  // const [protfollios] = useState(() => {
  //   let arr = [];
  //   for (let i = 0; i < 4; i++) {
  //     arr[i] = require("../../assets/img/portfolio/1 (1).png");
  //     //   console.log(i);
  //   }
  //   return arr;
  // });

  const [hoveredPortfollio, setHoveredPortfollio] = useState(-1);
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
          <p>
            voici des echantillioons de projets vitrines developpes par mes
            soins demontsrant les differents de mes competences.
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-CRM">CRM</li>
              <li data-filter=".filter-mobile">E-Commerce</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfolio.map((project, key) => (
            <div
              key={`portfo-${key}`}
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              onMouseMove={() => setHoveredPortfollio(key)}
              onMouseLeave={() => setHoveredPortfollio(-1)}
            >
              <div className="portfolio-wrap">
                <img src={project.img} className="img-fluid" alt="" />
                <p
                  style={{
                    display: `${hoveredPortfollio == key ? "block" : "none"}`,
                    textAlign: "center",
                    position: "absolute",
                    top: 15,
                    color: "#1D8BBE",
                    fontSize: "22px",
                  }}
                >
                  {project.title}
                </p>
                <div className="portfolio-links">
                  <a
                    onClick={() => handleShowModal(key)}
                    href="#"
                    title="More Details"
                  >
                    <i>
                      <BiShowAlt />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal ? (
        <Modal  size="lg" centered show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{projetsList[projectToShowIndex].title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{projetsList[projectToShowIndex].description}</p>
            <ul>
              {projetsList[projectToShowIndex].tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </section>
  );
};

export default Projects;
