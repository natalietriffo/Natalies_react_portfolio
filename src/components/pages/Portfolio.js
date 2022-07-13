import React from "react";
import Project from '../Project';

const projects = [{ name: "Fully Booked", link: "https://fully-booked-2022.herokuapp.com/", image: "https://user-images.githubusercontent.com/97486569/168444445-ad5530cc-ad94-4f35-8dc8-ef0fe7901ef0.png", tech: ["Handlebars", "SQL", "Bootstrap", "node.js", "Express"] }]

function Portfolio() {
    return (
        <>
            <h2 className="font-bold text-slate-200 justify-center text-3xl flex flex-row mb-3 border-b pb-2">Portfolio</h2>
            <div className="md:flex md:flex-row md:flex-wrap justify-around">
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </>
    )
}

export default Portfolio