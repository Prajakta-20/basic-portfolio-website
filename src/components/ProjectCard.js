import React from 'react'

function ProjectCard(props) {
    const { title, excerpt, imageURL } = props.project;

    return (
        <div className="card shadow h-100">
            <img src={imageURL} alt="project1" className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">
                    {title}
                </h4>
                <p className="card-text"> {excerpt} </p>
                <a href="/" className="stretched-link"> </a>
            </div>
        </div>
    )
}

export default ProjectCard;