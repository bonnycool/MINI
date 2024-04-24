import React from 'react';

const Supernavbar = ({ isOpen = false }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-1/5 bg-gray-700 text-white p-4 z-50 ${isOpen ? 'block' : 'hidden'} md:block`}>
            {/* Navigation links */}
            <ul className="space-y-7">
                <li>
                    <a href="/None" className="block p-2 hover:bg-blue-800 rounded">None</a>
                </li>
                <li>
                    <a href="/" className="block p-2 hover:bg-blue-800 rounded">Home</a>
                </li>
                <li>
                    <a href="/about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                </li>
                <li>
                    <a href="/contact" className="block p-2 hover:bg-blue-800 rounded">Contact</a>
                </li>
                <li>
                    <a href="/join" className="block p-2 hover:bg-blue-800 rounded">Create club</a>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </div>
    );
};

export default Supernavbar;
