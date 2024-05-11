import React, { useState } from 'react';

const AdminNavbar = ({ isOpen = false }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative bg-gray-900 text-white">
            <div className="absolute top-0 right-0 z-50 md:hidden">
                {/* Display the button only on mobile devices */}
                <button
                    className="p-4 focus:outline-none text-black"
                    onClick={toggleMobileMenu}
                >
                    {/* You can use an icon or any symbol for the button */}
                    &#9776;
                </button>
            </div>
            {/* Always display the navbar */}
            <div className="hidden md:block">
                {/* Branding/logo */}
                <div className="flex items-center mb-14">
                    <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                    <span className="text-xl font-bold">GITSCONNECT</span>
                </div>

                {/* Navigation links */}
                <ul className="space-y-4 md:flex md:space-x-4 md:ml-auto">
                    <li>
                        <a href="/admin-calendar" className="block p-2 hover:bg-blue-800 rounded">Calendar</a>
                    </li>

                    <li>
                        <a href="/admin-duty-leave" className="block p-2 hover:bg-blue-800 rounded">Duty Leave Status</a>
                    </li>
                    <li>
                        <a href="/admin-about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
            {/* Render the dropdown menu conditionally based on isMobileMenuOpen state */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    {/* Branding/logo */}
                    <div className="flex items-center mb-14">
                        <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                        <span className="text-xl font-bold">GITSCONNECT</span>
                    </div>

                    {/* Navigation links */}
                    <ul className="space-y-4">
                        <li>
                            <a href="/admin-calendar" className="block p-2 hover:bg-blue-800 rounded">Calendar</a>
                        </li>

                        <li>
                            <a href="/admin-duty-leave" className="block p-2 hover:bg-blue-800 rounded">Duty Leave Status</a>
                        </li>
                        <li>
                            <a href="/admin-about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AdminNavbar;
