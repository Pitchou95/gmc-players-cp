import React from "react";
import { useState } from "react";
// import skillIcon_0 from "/assets/img/skills-icons/html.png"
// import skillIcon_1 from "/assets/img/skills-icons/css3.png"
// import skillIcon_2 from "/assets/img/skills-icons/javascript.png"
// import skillIcon_3 from "/assets/img/skills-icons/jquery.png"
// import skillIcon_4 from "/assets/img/skills-icons/php.png"
// import skillIcon_5 from "/assets/img/skills-icons/mysql.png"
// import skillIcon_6 from "/assets/img/skills-icons/laravel.png"
// import skillIcon_7 from "/assets/img/skills-icons/vue-dot-js.png"
// import skillIcon_8 from "/assets/img/skills-icons/python.png"

// let icons = [];
import "../../styles/skillStyles.scss";
const Skills = () => {
  const [icons] = useState(() => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
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
          <p>
            le Dommaine de la technologie evolue chaque jour, ce qui me pousse
            comme tous les intervennant du dommaine a rester proactif et etre
            autodidacte constamment pur suivre le flux .
          </p>
        </div>
        <div className="row skills-content">
          <ul id="listSkillsImg">
            {icons.map((img, key) => (
              <li key={key}>
                <img className="img-skill" src={img} alt="" />
              </li>
            ))}
            {/* <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li>
            <li>
              <img
                className="img-skill"
                src={}
                alt=""
              />
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
