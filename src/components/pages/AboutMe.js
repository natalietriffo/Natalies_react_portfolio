import React from "react";
import profilepic from "../../assets/IMG_1575.JPG";

function AboutMe() {
    return (
        <>
            <div className="container m-2 justify-center">
                <h2 className="font-bold text-slate-200 justify-center text-3xl justify-center flex flex-row mb-3 border-b pb-2">About Me</h2>
                
                <div className="flex flex-col items-center justify-around md:flex-row md: justify-end">
                    <div className="relative w-64 h-64 md:min-w-[15%] mb-15"><img className="rounded-full border border-white-100 shadow-sm" src={profilepic} alt="Nataliesselfie" />
                        
                    </div>
                    <div className="px-3 mx-2 text-slate-200 text-lg">
                        <p>Hello! I am Natalie and this is my ReactJs portfolio</p><br />
                        <p>I am currently a student a Northwestern University and I am learning how to become a web developer.</p><br />
                        <p>I just graduated from Oakton Community College with a Assosites in Business. After graduation I choose to continue my education. I applied for the Northwestern Coding Bootcamp. I have learned so much and feel inspired to become to the best developer I can with the knowege that has been given to me!</p><br />
                        <p>Durning this bootcamp I worked full time as a waitress/ bartender. In my free time I spend time with friends and family.</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe