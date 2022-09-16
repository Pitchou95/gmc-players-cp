import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';

const Section = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
      <LightSpeed right>

        <h1>Laraibi Mehdi</h1>
        </LightSpeed>
        <LightSpeed left>

        <p>
          FullStack Developer, Freelancer
        </p>
        </LightSpeed>
      </div>
    </section>
  );
};

export default Section;
