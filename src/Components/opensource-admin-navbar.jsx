import React, { useState } from 'react';

const OSAdminNavbar = ({ isOpenProp = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenProp); // State to manage navbar visibility on mobile

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Hamburger menu button (visible on mobile) */}
            <button
                className="fixed top-16 left-0 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 md:hidden z-50"
                onClick={handleToggle}
            >
                <div className="space-y-1">
                    <div className="w-5 h-0.5 bg-white"></div>
                    <div className="w-5 h-0.5 bg-white"></div>
                    <div className="w-5 h-0.5 bg-white"></div>
                </div>
            </button>

            <div className={`fixed top-0 left-0 h-full w-1/5 bg-gray-900 text-white p-0 z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}>
                {/* Branding/logo */}
                <div className="flex items-center mb-14">
                    <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                    <span className="text-xl font-bold">GITSCONNECT</span>
                </div>

                {/* Close button (visible on mobile when navbar is open) */}
                <button
                    className="fixed top-16 left-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 md:hidden"
                    onClick={handleToggle}
                >
                    Close
                </button>

                {/* Navigation links */}
                <ul className="space-y-4 mt-16">
                    <li>
                        <a href="/admin-opensource" className="block p-2 hover:bg-blue-800 rounded">Home</a>
                    </li>
                    <li>
                        <a href="/admin-open-duty-leave" className="block p-2 hover:bg-blue-800 rounded">Attendance</a>
                    </li>
                    <li>
                        <a href="/admin-calendar" className="block p-2 hover:bg-blue-800 rounded">Calendar</a>
                    </li>
                    <li>
                        <a href="/admin-duty-leave" className="block p-2 hover:bg-blue-800 rounded">Duty Leave Status</a>
                    </li>
                    <li>
                        <a href="/admin-about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                    </li>
                    <li>
                        <a href="/admin-club-members" className="block p-2 hover:bg-blue-800 rounded">Club Members</a>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </div>
    );
};

export default OSAdminNavbar;
