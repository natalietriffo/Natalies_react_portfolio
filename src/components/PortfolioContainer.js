import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";



function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('ABOUT');

    const renderPage = () => {
        if (currentPage === 'ABOUT') {
            return <AboutMe />;
        }
        if (currentPage === 'PORTFOLIO') {
            return <Portfolio />;
        }
        if (currentPage === 'CONTACT') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='flex flex-auto flex-col bg-green-300'>
          
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main className='flex-auto container mx-auto border border-green-800 bg-green-700 rounded shadow-lg p-5 m-2'>
                {renderPage()}
            </main>
          
            <Footer />
        </div>
    )
}

export default PortfolioContainer;