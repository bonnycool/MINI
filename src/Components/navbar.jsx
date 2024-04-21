import React from 'react';
import saintgitsLogo from '../Assests/IMAGES/saintgitslogo.png'; // Import the logo image

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-1/4 bg-gray-600 text-white p-4 flex flex-col justify-between">
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
                    <a href="/join" className="block p-2 hover:bg-blue-800 rounded">Join</a>
                </li>
                {/* Add more navigation links as needed */}
            </ul>

            {/* Logo at the bottom */}
            <div className="mt-auto">
                <img
                    src={saintgitsLogo}
                    alt="Saintgits Logo"
                    className="w-124 h-24 mx-auto"
                />
            </div>
        </div>
    );
};

export default Navbar;
