import React from 'react';
import Homenavbar from '../Components/homenavabr'; // Import the navbar component
import Userheader from '../Components/userheader';
import Box1Image from '../Assests/imagesroni/blockchain1.jpg';
import Box2Image from '../Assests/imagesroni/cyber1.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/ai1.jpg';

const Home = () => {
    return (
        <div className="flex">
            {/* Section A: Navbar on the left side */}
            <Homenavbar className="w-1/5" />

            {/* Main content area */}
            <div className="flex-1 p-4 ml-8">
                {/* Header component */}
                <Userheader />

                {/* Middle and right content areas */}
                <div className="flex justify-center mt-16">
                    {/* Section B (middle section with two buttons) */}
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

                    {/* Section C (right section with two buttons) */}
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
