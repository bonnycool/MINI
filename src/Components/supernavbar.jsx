import React from 'react';

const SuperNavbar = ({ isOpen = false }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-1/4 bg-gray-700 text-white p-4 z-50 ${isOpen ? 'block' : 'hidden'} md:block`}>
            {/* Navigation links */}
            <ul className="space-y-4">
                <li>
                    <a href="/home" className="block p-2 hover:bg-blue-800 rounded">Home</a>
                </li>
                <li>
                    <a href="/about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                </li>
                <li>
                    <a href="/contact" className="block p-2 hover:bg-blue-800 rounded">Contact</a>
                </li>
                <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScel_fNqqR_S7B0bW4Ua9tu07K--P_KyqmGLEz4AQSG9zi46Q/viewform?usp=sf_link" className="block p-2 hover:bg-blue-800 rounded">Create Club</a>
                </li>
                
                {/* Add more navigation links as needed */}
            </ul>
        </div>
    );
};

export default SuperNavbar;