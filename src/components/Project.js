import React from "react";



function Project({ project }) {
    return (
        
        <div className="max-w-sm md:min-w-[20rem] rounded overflow-hidden shadow-lg mb-3 border border-gray-300 md:mx-3">
            <img className="w-fit" src={project.image} alt="Display" />
            <div className="px-6 py-4">
                <div className="font-bold text-slate-200 text-xl mb-2">
                    {project.name}
                </div>
                <a href={project.link} className="text-slate-300 text-base hover:text-slate-600 cursor-pointer">
                    {project.link}
                </a>
            </div>
            <div className="px-6 py-4">
                
                {project.tech.map((tech, index) => {
                    return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">{tech}</span>
                })}
            </div>
        </div>
    )
}

export default Project