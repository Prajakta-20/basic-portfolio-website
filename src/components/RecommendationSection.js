import React from 'react'
import RecommendationCard from './RecommendationCard';
import { v4 as uuid } from "uuid";

function RecommendationSection() {
    const Recommendation = [
        {
            id: 1,
            name: "Random person 1",
            company: "ABC company",
            designation: "CEO",
            message: "She is good enginner",
        },
        {
            id: 2,
            name: "Random person 2",
            company: "XYZ company",
            designation: "Director",
            message: "She is quick learner",
        },
        {
            id: 3,
            name: "Random person 3",
            company: "ABC company",
            designation: "Manager",
            message: "She is nice person",
        },
        {
            id: 4,
            name: "Random person 4",
            company: "ABC company",
            designation: "SDE",
            message: "She is good enginner",
        }
    ]

    return (
        <div className="container-fluid my-5">
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                {
                    Recommendation.map((recommendation) => (
                        <RecommendationCard key={uuid()} recommendation={recommendation} />
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendationSection;