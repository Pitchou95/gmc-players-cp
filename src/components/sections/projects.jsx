import React from "react";
import portfolio_1 from  "../../assets/img/portfolio/portfolio-1.jpg"
import portfolio_2 from  "../../assets/img/portfolio/portfolio-2.jpg"
import portfolio_3 from  "../../assets/img/portfolio/portfolio-3.png"
import portfolio_4 from  "../../assets/img/portfolio/portfolio-4.svg"
const Projects = () => {
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
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio_1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details_1.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-CRM">
            <div className="portfolio-wrap">
              <img
                src={portfolio_2}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-2.jpg"
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details_2.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio_3}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-3.png"
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details_3.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-CRM">
            <div className="portfolio-wrap">
              <img
                src={portfolio_4}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-4.svg"
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details_4.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
