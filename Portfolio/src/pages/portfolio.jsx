import React from "react";
import Project from "../components/project.jsx";

import "../styles/portfolio.css";

const projects = [
    { title: "Weather Dashboard", image: "src/assets/Capture.PNG" },
    { title: "Employee Tracker", image: "src/assets/tracker.PNG" },
    { title: "README Generator", image: "src/assets/readme.PNG" },
    { title: "Vacation Calculator", image: "src/assets/calc.PNG" },
    { title: "Vehicle Builder", image: "src/assets/builder.PNG" },
    { title: "Park Finder", image: "src/assets/finder.PNG" },
];

export default function Portfolio() {
    return (
        <div class='port'>
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} />
                ))}
            </div>
        </div>
    );
}