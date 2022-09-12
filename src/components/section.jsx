import React from "react";

const Section = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Laraibi Mehdi</h1>
        <p>
          I'm
          <span
            className="typed"
            data-typed-items="FullStack Developer, Freelancer "
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Section;
