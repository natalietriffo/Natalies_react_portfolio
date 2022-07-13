import React from "react";

const navTitles = ["about me", "my portfolio", "contact me"];

function Header({ currentPage, handlePageChange }) {
    return (
        <header className="md:p-5 flex flex-row flex-wrap md:flex-nowrap md:justify-between bg-green-600">
            <h1 className="hidden md:flex mx-8 text-slate-200 text-5xl pb-3">Natalie Triffo</h1>
            <nav className="pb-2">
                <h1 className="md:hidden mx-8 text-slate-200 text-4xl pb-3">Natalie Triffo</h1>
               
                <ul className="md:flex md:flex-row flex-wrap md:flex-nowrap justify-around" id="mobile-menu">
                    {navTitles.map((title, index) => (
                        <li className={`${currentPage === title ? "bg-green-500 text-slate-100" : "bg-green-600 text-slate-200"} mx-3 p-2 hover:cursor-pointer`} key={index} onClick={() => handlePageChange(title)}>{title}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header