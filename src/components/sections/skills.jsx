import React from "react";
import { useState } from "react";
import "../../styles/skillStyles.scss";
import { Slide } from "react-awesome-reveal";
import { Roll } from "react-awesome-reveal";
import { technlogiesNames } from "../../assets/utils/data";
const Skills = () => {
  const [icons] = useState(() => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
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
              En tant que développeur web fullstack, je suis constamment en
              train d'apprendre de nouvelles compétences pour suivre les
              dernières avancées du secteur. Mon expertise couvre une variété de
              technologies, notamment les langages de programmation front-end
              tels que HTML, CSS et JavaScript, ainsi que des frameworks tels
              que Vue.js et React.js. Pour le développement back-end, j'ai de
              l'expérience avec des langages de programmation tels que PHP et
              Node.js, ainsi que des frameworks tels que Laravel et Express. En
              plus de cela, je suis également compétent dans l'utilisation de
              bases de données telles que MySQL et MongoDB. Si vous avez des
              questions sur mes compétences ou si vous souhaitez en savoir plus
              sur mon expérience, n'hésitez pas à me contacter.
            </p>
          </Slide>
        </div>
        <div className="skillsContainer">
          {icons.map((img, key) => (
            <Roll left key={key}>
              <div className="skill text-center ">
                <img
                  className="img-skill img img-fluid w-75 h-75 p-3"
                  src={img}
                  alt=""
                />
              <h6 className="text-center">{technlogiesNames[key]}</h6>
              </div>
            </Roll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
