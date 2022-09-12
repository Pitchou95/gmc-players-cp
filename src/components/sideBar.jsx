import React from "react";
import profileImg from "../assets/img/profile-img.jpg";
import { FiTwitter, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
import {
  BsHouseDoor,
  BsPerson,
  BsFillFileCodeFill,
  BsLayersHalf,BsEnvelopeOpen
} from "react-icons/bs";
const Sidebar = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={profileImg} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="index.html">Laraibi Mehdi</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/LaraibiM"
              className="twitter"
            >
              <FiTwitter />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/mehdi.laraibi.94/"
              className="facebook"
            >
              <FiFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mehdi-laraibi-33703ab6/"
              className="linkedin"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/Laraibi"
              className="gitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li className="active">
              <a href="index.html">
                <i>
                  <BsHouseDoor />
                </i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i>
                  <BsPerson />
                </i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <i>
                  <BsFillFileCodeFill />
                </i>
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i>
                  <BsLayersHalf />
                </i>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i>
                  <BsEnvelopeOpen/>
                </i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Sidebar;