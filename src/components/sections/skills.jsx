import React from "react";
import { useState } from "react";
import "../../styles/skillStyles.scss";
import { Slide } from "react-awesome-reveal";
import { Roll } from "react-awesome-reveal";

const Skills = () => {
  const [icons] = useState(() => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = require("../../assets/img/skills-icons/1 (" +
        parseInt(i + 1) +
        ").png");
      //   console.log(i);
    }
    return arr;
  });
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <Slide right>
            <p>
              le Dommaine de la technologie evolue chaque jour, ce qui me pousse
              comme tous les intervennant du dommaine a rester proactif et etre
              autodidacte constamment pur suivre le flux .
            </p>
          </Slide>
        </div>
        <div className="skillsContainer">
          {icons.map((img, key) => (
            <Roll left key={key}>
              <div className="skill">
                <img
                  className="img-skill img img-fluid w-100 h-100 p-3"
                  src={img}
                  alt=""
                />
              </div>
            </Roll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
