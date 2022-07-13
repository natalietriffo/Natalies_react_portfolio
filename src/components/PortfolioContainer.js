import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";



function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('about me');

    const renderPage = () => {
        if (currentPage === 'about me') {
            return <AboutMe />;
        }
        if (currentPage === 'my portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'contact me') {
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