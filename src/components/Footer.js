import React from "react";
import githubLogo from "../assets/GitHub-Mark-Light-64px.png";
import linkedInLogo from "../assets/LI-In-Bug.png";



function Footer() {
    return (
        <footer className="flex flex-row justify-center p-3 bg-green-600">
            
            <a className="m-3" href="https://github.com/natalietriffo" target="_blank">
                <img src={githubLogo} alt="GitHub Logo"></img>
            </a>
            <a className="m-3" href="https://www.linkedin.com/in/natalie-triffo-186a6319a/" target="_blank">
                <img className="max-h-16" src={linkedInLogo} alt="LinkedIn Logo"></img>
            </a>
            
        </footer>
    )
}

export default Footer