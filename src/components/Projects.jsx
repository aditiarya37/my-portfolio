import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Gamified Fintech Platform",
    description: "A financial technology platform integrating gamification elements to enhance user engagement and financial literacy. It includes interactive challenges, reward-based learning, budget management tools, and API integration for paper trading, allowing users to simulate real-world trading scenarios.",
    tools: ["React.js", "Node.js", "MongoDB", "Express", "API Integration"],
  },
  {
    title: "Blood Shortage Survey & Dashboard",
    description: "A user-friendly platform to report blood shortages in different regions. It collects, stores, and analyzes data to identify critical blood supply needs. The insights are displayed on an interactive dashboard to assist healthcare organizations, blood banks, and donors in ensuring timely blood availability.",
    tools: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Automated Bus Scheduling & Route Management System",
    description: "A prototype for efficient bus scheduling and route management, developed for the Smart India Hackathon. Features include real-time tracking, automated scheduling, and optimized route planning to reduce delays and improve public transportation efficiency.",
    tools: ["React.js", "Node.js"],
  },
  {
    title: "Myntra Clone",
    description: "A static clone of Myntra.com, focusing on replicating the visual design and layout of the homepage and product listing pages. Key features include a structured navigation bar, a detailed product grid, and styled components to match the original site closely.",
    tools: ["HTML", "CSS"],
    link: "https://aditiarya37.github.io/Myntra-Clone/", // Replace with actual link
  },
  {
    title: "CUIMS Clone",
    description: "A clone of the Chandigarh University Information Management System (CUIMS) website using HTML and CSS. This project showcases web design skills with a functional navbar, footer, and dashboard layout.",
    tools: ["HTML", "CSS"],
    link: "https://aditiarya37.github.io/cuims-clone/", // Replace with actual link
  }
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className="tool">{tool}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
