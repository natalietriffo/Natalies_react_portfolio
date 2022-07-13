import React from "react";
import Project from '../Project';

const projects = [{ name: "Fully Booked", link: "https://fully-booked-2022.herokuapp.com/", image: "https://user-images.githubusercontent.com/97486569/168444445-ad5530cc-ad94-4f35-8dc8-ef0fe7901ef0.png", tech: ["Handlebars", "SQL", "Bootstrap", "node.js", "Express"] }, { name: "Chowhounds", link: "https://t4-chowhounds.github.io/chowhounds/", image: "https://user-images.githubusercontent.com/97486569/159129690-c3df9105-dfcf-4e35-a3b8-8c023a428335.png", tech: ["HTML", "Javascript", "CSS"] }, { name: "Weather Dashboard", link: "https://natalietriffo.github.io/weather_homework/", image: "https://user-images.githubusercontent.com/97486569/165647614-1dec9593-175e-4a48-a21e-7a0e63d9efcf.png", tech: ["HTML", "Bootstrap", "Javascript"] }, { name: "Note Taker", link: "https://github.com/natalietriffo/note_taker_homework", image: "https://user-images.githubusercontent.com/97486569/166587328-db2831e0-772d-4f40-9e4c-55d24fc2940a.png", tech: ["HTML", "CSS", "Javascript"] },];

function Portfolio() {
    return (
        <>
            <h2 className="font-bold text-slate-200 justify-center text-3xl flex flex-row mb-3 border-b pb-2">My Projects</h2>
            <div className="md:flex md:flex-row md:flex-wrap justify-around">
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </>
    )
}

export default Portfolio