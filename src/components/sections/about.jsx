import React from "react";
import { BsChevronRight } from "react-icons/bs";
import profileImg from "../../assets/img/profile-img.jpg";
import "../../styles/about.scss";
import { TypeAnimation } from "react-type-animation";
import audio from "../../assets/utils/type-writing-6834.mp3";
import { useEffect } from "react";
import {Slide} from "react-awesome-reveal";
import {Fade} from "react-awesome-reveal";
import {Flip} from "react-awesome-reveal";

const About = () => {
  const dob = new Date("08/10/1992");
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  // const typing = new Audio(audio);
  // typing.loop = true;
  // typing.autoplay = true;
  // useEffect(() => {
  //   // typing.play();
  // }, []);
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <Slide right>
            <TypeAnimation
              sequence={[
                `Passionné par les possibilités de développement offertes par la
              technologie et l'outil informatique, j'ai consacré mon cursus et ma
              carrière professionnels dans la compréhension des mécanismes de cet
              univers et à la participation à son développement.`,
                ,
                200,
              ]}
              wrapper="p"
              speed={75}
            />
          </Slide>
        </div>

        <div className="row d-flex  flex-lg-row flex-md-column-reverse">
          <div
            className="col-lg-8 pt-4 pt-lg-0 content d-flex justify-content-center flex-column "
            data-aos="fade-left"
          >
            <h3 className="">UI/UX Designer &amp; Web Developer.</h3>
            <div className="row ">
              <div className="col-lg-6 d-flex justify-content-center">
                <Fade right big cascade>
                  <ul className="w-100">
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">Birthday:</strong> 10 August
                      1992
                    </li>
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">Website:</strong>{" "}
                      <a href="https://laraibi.tech">laraibi.tech</a>
                    </li>
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">Phone:</strong> +212 649 814
                      109
                    </li>
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">City:</strong> City :
                      Casablanca, Morocco
                    </li>
                  </ul>
                </Fade>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <Fade right big cascade>
                  <ul className="w-100">
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">Age:</strong> {age}
                    </li>
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">Degree:</strong> Master
                    </li>
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">PhEmailone:</strong>{" "}
                      meh.laraibi@gmail.com
                    </li>
                    <li>
                      <i>
                        <BsChevronRight />
                      </i>
                      <strong className="myLabel">Freelance:</strong> Available
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center" data-aos="fade-right">
            <Flip right>
              <img
                src={profileImg}
                className="img-fluid "
                style={{
                  borderRadius: "50%",
                  border: "#e0a800 solid 3px",
                  boxShadow: "2px 2px 2px 2px #e0a800",
                }}
                alt=""
              />
            </Flip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
