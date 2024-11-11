import React from "react";
import Project from "../components/project.jsx";

import "../styles/portfolio.css";

const projects = [
    { title: "Project 1", image: "src/assets/Capture.PNG" },
    { title: "Project 2", image: "src/assets/Capture.PNG" },
    { title: "Project 3", image: "src/assets/Capture.PNG" },
    { title: "Project 4", image: "src/assets/Capture.PNG" },
    { title: "Project 5", image: "src/assets/Capture.PNG" },
    { title: "Project 6", image: "src/assets/Capture.PNG" },
];

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} />
                ))}
            </div>
        </div>
    );
}