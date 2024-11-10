import React from "react";
import Project from "../components/project.jsx";

import "../styles/portfolio.css";
import ListItem from "../components/listItem.jsx";

const project1 = {
    title: "Project 1",
    image: "src/assets/Capture.PNG",
};

const project2 = {
    title: "Project 2",
    image: "src/assets/Capture.PNG",
};

const project3 = {
    title: "Project 3",
    image: "src/assets/Capture.PNG",
};

const project4 = {
    title: "Project 4",
    image: "src/assets/Capture.PNG",
};


export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <ListItem>
            <Project class="card" title={project1.title} image={project1.image} />
            <Project class="card" title={project2.title} image={project2.image} />
            <Project class="card" title={project3.title} image={project3.image} />
            <Project class="card" title={project4.title} image={project4.image} />
            </ListItem>
        </div>
    );
}