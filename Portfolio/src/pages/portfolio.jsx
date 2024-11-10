import React from "react";
import Project from "../components/project.jsx";

import "../styles/portfolio.css";

const project1 = {
    title: "Project 1",
    image: "src/assets/Capture.PNG",
};

const project2 = {
    title: "Project 2",
    image: "src/assets/Capture.PNG",
};


export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <Project class="card" title={project1.title} image={project1.image} />
            <Project class="card" title={project2.title} image={project2.image} />
        </div>
    );
}