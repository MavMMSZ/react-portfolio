import React from 'react';

export default function Project(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">View Project</a>
            </div>
        </div>
    );
}