import React, { useState } from "react";
import { AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
const Projects = () => {
  const [protfollios] = useState(() => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr[i] = require("../../assets/img/portfolio/1 (" +
        parseInt(i + 1) +
        ").png");
      //   console.log(i);
    }
    return arr;
  });
  const [hoveredPortfollio, setHoveredPortfollio] = useState(-1);
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
          {protfollios.map((pSrc, key) => (
            <div
              key={`portfo-${key}`}
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              onMouseMove={() => setHoveredPortfollio(key)}
              onMouseLeave={() => setHoveredPortfollio(-1)}
            >
              <div className="portfolio-wrap">
                <img src={pSrc} className="img-fluid" alt="" />
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  nostrum fuga temporibus laboriosam animi deleniti repellendus.
                </p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1"
                  >
                    <i>
                      <AiOutlinePlus />
                    </i>
                  </a>
                  <a href="portfolio-details_1.html" title="More Details">
                    <i>
                      <AiOutlineLink />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
