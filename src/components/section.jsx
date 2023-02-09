import React from "react";
import {Hinge} from "react-awesome-reveal";
import {Flip} from "react-awesome-reveal";

const Section = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <Flip right>
          <h1>Laraibi Mehdi</h1>
        </Flip>
        <Flip left>
          <p>FullStack Developer, Freelancer</p>
        </Flip>
      </div>
    </section>
  );
};

export default Section;
