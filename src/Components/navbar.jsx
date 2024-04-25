import React from 'react';

const Navbar = ({ isOpen = false }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-1/5 bg-gray-900 text-white p-4 z-50 ${isOpen ? 'block' : 'hidden'} md:block`}>
            {/* Branding/logo */}
            <div className="flex items-center mb-14">
                <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold">GITSCONNECT</span>
            </div>
            
            {/* Navigation links */}
            <ul className="space-y-4">
                <li>
                    <a href="home" className="block p-2 hover:bg-blue-800 rounded">Home</a>
                </li>
                <li>
                    <a href="/clubcalendar" className="block p-2 hover:bg-blue-800 rounded">Calendar</a>
                </li>
                <li>
                    <a href="/about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                </li>
                <li>
                    <a href="/contact" className="block p-2 hover:bg-blue-800 rounded">Contact</a>
                </li>
                <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScel_fNqqR_S7B0bW4Ua9tu07K--P_KyqmGLEz4AQSG9zi46Q/viewform?usp=sf_link" className="block p-2 hover:bg-blue-800 rounded">Join</a>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </div>
    );
};

export default Navbar;