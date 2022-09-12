import React from "react";
import { BsChevronRight } from "react-icons/bs";
import profileImg from "../../assets/img/profile-img.jpg";
const About = () => {
  const dob = new Date("08/10/1992");
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Passionné par les possibilités de développement offertes par la
            technologie et l'outil informatique, j'ai consacré mon cursus et ma
            carrière professionnels dans la compréhension des mécanismes de cet
            univers et à la participation à son développement.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profileImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>Birthday:</strong> 10 August 1992
                  </li>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>Website:</strong>{" "}
                    <a href="https://laraibi.tech">laraibi.tech</a>
                  </li>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>Phone:</strong> +212 649 814 109
                  </li>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>City:</strong> City : Casablanca, Morocco
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>Age:</strong> {age}
                  </li>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>Degree:</strong> Master
                  </li>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>PhEmailone:</strong> meh.laraibi@gmail.com
                  </li>
                  <li>
                    <i>
                      <BsChevronRight />
                    </i>
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
