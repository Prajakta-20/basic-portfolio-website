import React from 'react'
import ProjectCard from './ProjectCard';
// import project1 from "../img/project1.jpg"

function ProjectSection() {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            excerpt: "This is my project about...",
            imageURL: require("../img/project1.jpg"),
        },
        {
            id: 2,
            title: "Project 2",
            excerpt: "This is my project about...",
            imageURL: require("../img/project2.jpg"),
        },
        {
            id: 3,
            title: "Project 3",
            excerpt: "This is my project about...",
            imageURL: require("../img/project3.jpg"),
        }
    ];

    return (
        <div className="container text-center my-5">
            <h1 className="font-weight-light">
                My <span className="text-info">Projects</span>
            </h1>

            <div className="lead">
                I build products, just like this website
            </div>

            <div className="row my-5 pt-3">
                {
                    projects.map((project) => (
                        <div key={project.id} className="col-12 col-md-4 my-2">
                            <ProjectCard
                                // title={project.title}
                                // excerpt={project.excerpt}
                                // imageURL={project.imageURL}
                                project={project}
                            />
                        </div>
                    ))
                }

            </div>

            <div className="my-5">
                <a href="/" className="text-dark" style={{ textAlign: "right" }}>
                    <h5>
                        See my Projects <i className="fa-solid fa-arrow-right align-middle"></i>
                    </h5>
                </a>
            </div>
        </div>
    )
}

export default ProjectSection;