import React from "react";
import Project from "../components/project.jsx";

const project1 = {
    title: "Project 1",
    image: "Capture.PNG"
};


export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <Project title={project1.title} image={project1.image} />
        </div>
    );
}