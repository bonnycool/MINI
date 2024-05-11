import React from 'react';
import SuperNavbar from '../Components/supernavbar'; // Import the navbar component
import Header from '../Components/header';
import Box1Image from '../Assests/imagesroni/blockchain1.jpg';
import Box2Image from '../Assests/imagesroni/cyber1.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/ai1.jpg';

const AdminHome = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* Section A: Navbar on the left side */}
            <SuperNavbar className="w-full lg:w-1/5" />

            {/* Main content area */}
            <div className="flex-1 p-4 lg:ml-8">
                {/* Header component */}
                <Header />

                {/* Middle and right content areas */}
                <div className="flex flex-col lg:flex-row justify-center lg:mt-16">
                    {/* Section B (middle section with two buttons) */}
                    <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 lg:ml-8 items-center w-full lg:w-1/2">
                        {/* Button 1: Blockchain Club */}
                        <button
                            className="w-full lg:w-72 h-72 lg:h-96 mb-10 lg:mb-0 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box1Image})` }}
                            onClick={() => window.location.href = '/admin-blockchain'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Blockchain Club</span>
                        </button>

                        {/* Button 2: Cyber Security Club */}
                        <button
                            className="w-full lg:w-72 h-72 lg:h-96 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box2Image})` }}
                            onClick={() => window.location.href = '/admin-cyber'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Cyber Security Club</span>
                        </button>
                    </div>

                    {/* Section C (right section with two buttons) */}
                    <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 items-center w-full lg:w-1/2 lg:ml-8">
                        {/* Button 3: Open Source Club */}
                        <button
                            className="w-full lg:w-72 h-72 lg:h-96 mb-10 lg:mb-0 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box3Image})` }}
                            onClick={() => window.location.href = '/admin-opensource'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Open Source Club</span>
                        </button>

                        {/* Button 4: AI Club */}
                        <button
                            className="w-full lg:w-72 h-72 lg:h-96 bg-cover bg-center rounded-lg hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box4Image})` }}
                            onClick={() => window.location.href = '/admin-ai'}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <span className="text-white font-bold text-2xl lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">AI Club</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
