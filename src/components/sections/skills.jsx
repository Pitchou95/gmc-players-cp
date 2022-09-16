import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

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
import audio from "../../assets/utils/type-writing-6834.mp3";
import { useEffect } from "react";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";

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
  // const typing = new Audio(audio);
  // typing.loop = true;
  // // typing.autoplay = true;
  // useEffect(() => {
  //   // typing.play();
  // }, []);
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <Slide right>
            <TypeAnimation
              sequence={[
                `le Dommaine de la technologie evolue chaque jour, ce qui me pousse
              comme tous les intervennant du dommaine a rester proactif et etre
              autodidacte constamment pur suivre le flux .`,
                ,
                200,
              ]}
              wrapper="p"
              speed={75}
            />
          </Slide>
        </div>
        <div className="skillsContainer">
          {icons.map((img, key) => (
            <Roll left key={key}>
              <div className="skill" >
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
