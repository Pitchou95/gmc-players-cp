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
import { TypeAnimation } from "react-type-animation";
import audio from "../../assets/utils/type-writing-6834.mp3";
import { useEffect } from "react";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

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
  const typing = new Audio(audio);
  typing.loop = true;
  // typing.autoplay = true;
  useEffect(() => {
    typing.play();
  }, []);
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <Slide right>
            <TypeAnimation
              sequence={[
                `voici des echantillioons de projets vitrines developpes par mes
              soins demontsrant les differents de mes competences.`,
                ,
                200,
                () => {
                  typing.pause();
                  // alert('done')
                },
              ]}
              wrapper="p"
              speed={75}
            />
          </Slide>
        </div>

        <div className="row gx-2">
          <Flip left cascade>
            {portfolio.map((project, key) => (
              <div key={`portfo-${key}`} className="col-lg-3 col-md-6  ">
                <div className="portfolio-item">
                  <div className="row">
                    <div className="col-8 d-flex  align-items-center">
                      <h5 className="text-center"> {project.name}</h5>
                    </div>
                    <div className="col-4">
                      <Zoom bottom >
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
                  <div className="portfolio-wrap">
                    <img src={project.img} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Flip>
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
                    backgroundColor: "#862A8E",
                    borderRadius: "5px",
                    color: "white",
                    padding: "8px 30px",
                    fontFamily: "serif",
                    fontSize: "18px",
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
                  {projetsList[projectToShowIndex].tags.map((tag) => (
                    <Badge
                      bg="info"
                      pill
                      text="light"
                      id="myBadge"
                      className="p-2 m-1"
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
              style={{ backgroundColor: "#862A8E", border: "#862A8E" }}
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
