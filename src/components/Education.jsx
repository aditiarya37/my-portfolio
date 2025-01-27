import React from "react";
import "./Education.css";

const educationData = [
  {
    year: "2023 - Present",
    title: "Bachelor’s Degree (CSE)",
    institution: "Chandigarh University",
    details: "CGPA: 8.17 / 10.0",
  },
  {
    year: "2022 - 2023",
    title: "Class 12th CBSE",
    institution: "Namdev Public School",
    details: "96.5%",
  },
  {
    year: "2020 - 2021",
    title: "Class 10th CBSE",
    institution: "Namdev Public School",
    details: "95.17%",
  },
];

const Education = () => {
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.year}</h3>
            <p><strong>{edu.title}</strong></p>
            {edu.institution && <p>{edu.institution}</p>}
            <p className="education-details">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
