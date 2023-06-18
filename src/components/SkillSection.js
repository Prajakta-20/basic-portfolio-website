import React from 'react'
import Skill from './Skill';
import { v4 as uuid } from "uuid";

function SkillSection() {
    const skills = [
        {
            id: 1,
            name: "HTML5",
            imageUrl: require("../img/html1.png"),
            starsTotal: 3,
            starsActive: 3,
        },
        {
            id: 2,
            name: "CSS3",
            imageUrl: require("../img/css.png"),
            starsTotal: 3,
            starsActive: 2,
        },
        {
            id: 3,
            name: "Javascript",
            imageUrl: require("../img/JavaScript-icon.png"),
            starsTotal: 3,
            starsActive: 2,
        },
        {
            id: 4,
            name: "Bootstrap",
            imageUrl: require("../img/bootstrap.png"),
            starsTotal: 3,
            starsActive: 2,
        },
        {
            id: 5,
            name: "React",
            imageUrl: require("../img/html1.png"),
            starsTotal: 3,
            starsActive: 3,
        },
        {
            id: 6,
            name: "MySQL",
            imageUrl: require("../img/html1.png"),
            starsTotal: 3,
            starsActive: 3,
        },
        {
            id: 7,
            name: "Python",
            imageUrl: require("../img/html1.png"),
            starsTotal: 3,
            starsActive: 3,
        },
        {
            id: 8,
            name: "Flask",
            imageUrl: require("../img/html1.png"),
            starsTotal: 3,
            starsActive: 3,
        },

    ]

    const finalSkillRow = [];

    for (let i = 0; i < skills.length / 4; i++) {
        let skillRow = skills.slice(i * 4, (i + 1) * 4);
        finalSkillRow.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">
                {
                    skillRow.map((skill) => (
                        <Skill key={uuid()} skill={skill} />
                    ))
                }
            </div>
        );
    }

    return (
        <div className="bg-light bg-100">
            <div className="container text-center py-5">
                <h1 className="font-weight-light">
                    <span className="text-info">Technology</span> stack
                </h1>

                <div className="lead pb-5">
                    I design, develope and deliver with these weapons
                </div>
                {finalSkillRow}
            </div>
        </div>
    );
}

export default SkillSection;