import React, { useState, useEffect, useRef } from 'react';
import Homenavbar from '../Components/homenavabr'; // Import the navbar component
import Userheader from '../Components/userheader';
import Box1Image from '../Assests/imagesroni/blockchain1.jpg';
import Box2Image from '../Assests/imagesroni/cyber1.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/ai1.jpg';

const Home = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    useEffect(() => {
        // Function to close navbar when clicking outside
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeNavbar();
            }
        };

        // Add event listener to handle clicks outside the navbar
        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="flex">
            {/* Toggle Navbar Button (Mobile) */}
            <div className="fixed top-20 left-4 z-50 md:hidden">
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>

            {/* Desktop Navbar Section */}
            <div className="hidden md:block">
                <Homenavbar isOpen={true} /> {/* Always open on desktop */}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-4 ml-8">
                {/* Header component */}
                <Userheader />

                {/* Mobile Navbar Section (Overlapped) */}
                <div className={`fixed top-0 left-0 h-full w-1/5 bg-gray-900 text-white p-4 z-50 transform transition-transform ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`} ref={navbarRef}>
                    {/* Close button (only in mobile version when navbar is open) */}
                    {isNavbarOpen && (
                        <button
                            className="absolute top-10 right-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            onClick={closeNavbar}
                        >
                            Close
                        </button>
                    )}

                    {/* Branding/logo */}
                    <div className="flex items-center mb-14">
                        <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
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

                {/* Middle and Right Content Areas */}
                <div className="flex justify-center mt-16">
                    {/* Section B (Middle Section with Two Buttons) */}
                    <div className="flex flex-col mt-5 ml-60 items-center w-1/3">
                        {/* Button 1: Blockchain Club */}
                        <button
                            className="w-full h-72 mb-10 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box1Image})` }}
                            onClick={() => window.location.href = '/blockchain'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Blockchain Club</span>
                        </button>

                        {/* Button 2: Cyber Security Club */}
                        <button
                            className="w-full h-72 mb-10 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box2Image})` }}
                            onClick={() => window.location.href = '/cybersecurity'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Cyber Security Club</span>
                        </button>
                    </div>

                    {/* Section C (Right Section with Two Buttons) */}
                    <div className="flex padding-50px flex-col mt-5 items-center w-1/3 ml-8">
                        {/* Button 3: Open Source Club */}
                        <button
                            className="w-full h-72 mb-10 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box3Image})` }}
                            onClick={() => window.location.href = '/opensource'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Open Source Club</span>
                        </button>

                        {/* Button 4: AI Club */}
                        <button
                            className="w-full h-72 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box4Image})` }}
                            onClick={() => window.location.href = '/aiclub'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">AI Club</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
