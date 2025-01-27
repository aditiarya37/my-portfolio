import React from "react";
import "./About.css";
import cIcon from "../assets/icons/C-logo.svg";
import cppIcon from "../assets/icons/cpp-logo.png";
import javaIcon from "../assets/icons/java-logo.png";
import reactIcon from "../assets/icons/react-logo.svg";
import javascriptIcon from "../assets/icons/javascript-logo.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss-logo.svg";
import bootstrapIcon from "../assets/icons/bootstrap-logo.svg";
import pythonIcon from "../assets/icons/python-logo.png";
import htmlIcon from "../assets/icons/html5-logo.svg";
import cssIcon from "../assets/icons/css3-logo.svg";
import gitIcon from "../assets/icons/git-logo.svg";
import mysqlIcon from "../assets/icons/mysql-logo.png";

const About = () => {
  return (
    <div className="about" id="about">

      <div className="tech-tools">
        <h1>Technologies and Tools</h1>
        {/* <p>
          I use a combination of cutting-edge technologies and reliable open-source software 
          to build interactive and scalable applications.
        </p> */}

        <div className="tech-icons">
          <div className="icon-card"><img src={cIcon}/><span>C Language</span></div>
          <div className="icon-card"><img src={cppIcon}/><span>C++</span></div>
          <div className="icon-card"><img src={javaIcon}/><span>Java</span></div>
          <div className="icon-card"><img src={reactIcon}/><span>ReactJS</span></div>
          <div className="icon-card"><img src={javascriptIcon}/><span>JavaScript</span></div>
          <div className="icon-card"><img src={tailwindcssIcon}/><span>Tailwind CSS</span></div>
          <div className="icon-card"><img src={bootstrapIcon}/><span>Bootstrap</span></div>
          <div className="icon-card"><img src={pythonIcon}/><span>Python</span></div>
          <div className="icon-card"><img src={htmlIcon}/><span>HTML</span></div>
          <div className="icon-card"><img src={cssIcon}/><span>CSS</span></div>
          <div className="icon-card"><img src={mysqlIcon}/><span>MySQL</span></div>
          <div className="icon-card"><img src={gitIcon}/><span>Git</span></div>
        </div>
      </div>
    </div>
  );
};

export default About;
