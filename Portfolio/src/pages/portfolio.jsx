import React from "react";
import Project from "../components/project.jsx";

import "../styles/portfolio.css";

const projects = [
    { title: "Weather Dashboard", image: "src/assets/Capture.PNG", url:"https://github.com/MavMMSZ/weather-dashboard" },
    { title: "Employee Tracker", image: "src/assets/tracker.PNG", url:"https://github.com/MavMMSZ/employee-tracker" },
    { title: "README Generator", image: "src/assets/readme.PNG", url:"https://github.com/MavMMSZ/readMeGenerator" },
    { title: "Vacation Calculator", image: "src/assets/calc.PNG", url:"https://github.com/HarrisCH258/Vacation-Budget-Calculator" },
    { title: "Vehicle Builder", image: "src/assets/builder.PNG", url:"https://github.com/MavMMSZ/vehicle-builder" },
    { title: "React Portfolio", image: "src/assets/react.PNG", url:"https://github.com/MavMMSZ/react-portfolio" },
];

export default function Portfolio() {
    return (
        <div class='port'>
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
}