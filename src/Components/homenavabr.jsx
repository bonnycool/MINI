import React from 'react';

const Homenavbar = ({ isOpen = false, toggleNavbar }) => {
    const handleToggle = () => {
        toggleNavbar(!isOpen); // Toggle isOpen state
    };

    return (
        <div className={`fixed top-3 left-0 h-full w-1/5 bg-gray-900 text-white p-4 z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:block`}>
            {/* Close button (only in mobile version when navbar is open) */}
            {isOpen && (
                <button
                    className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 md:hidden z-50"
                    onClick={handleToggle} // Call handleToggle function on click
                >
                    Close
                </button>
            )}

            {/* Branding/logo */}
            <div className="flex items-center mb-14">
                {/* Insert your logo or branding here */}
                <span className="text-xl font-bold">GITSCONNECT</span>
            </div>

            {/* Navigation links */}
            <ul className="space-y-7">
                <li>
                    <a href="/home" className="block p-2 hover:bg-blue-800 rounded">Home</a>
                </li>
                <li>
                    <a href="/club-calendar" className="block p-2 hover:bg-blue-800 rounded">Calendar</a>
                </li>
                <li>
                    <a href="/about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                </li>
                <li>
                    <a href="/contact" className="block p-2 hover:bg-blue-800 rounded">Contact</a>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </div>
    );
};

export default Homenavbar;
