import React from "react";
import "./Home.css";
import githubIcon from "../assets/icons/github--v1.png";
import linkedinIcon from "../assets/icons/linkedin--v2.png";
import instagramIcon from "../assets/icons/instagram-new--v2.png";
import bannerImage from "../assets/bannerImage.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="content" >
        <h1>Hi, I am Aditi Arya.</h1>
        <h2>Aspiring Software Engineer</h2>
        <p>
        I'm a second-year engineering student with a passion for web development. I enjoy designing and developing modern web applications, focusing on user experience, performance, and clean code. I love learning new technologies and applying them to solve real-world problems.
        </p>
        
        <div className="social-links">
          <a href="https://github.com/aditiarya37" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/aditiarya37" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/aditi_arya37" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <a href="https://drive.google.com/file/d/1afwEzxK9imoivhO5AwS6VjRqS4oH_n0w/view?usp=sharing" target="_blank" className="resume-btn">
          Resume
        </a>
      </div>

      <div className="image-container">
        <img src={bannerImage} />
      </div>
    </div>
  );
};

export default Home;
