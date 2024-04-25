import React from 'react';
import Homenavbar from '../Components/homenavabr'; // Import the navbar component
import Header from '../Components/header';
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
                <Header />

                {/* Middle and right content areas */}
                <div className="flex justify-center mt-16">
                    {/* Section B (middle section with two buttons) */}
                    <div className="flex flex-col mt-5 ml-60 items-center w-1/3">
                        {/* Button 1: Blockchain Club */}
                        <button
                            className="w-full h-60 ml-10 mb-10 bg-cover bg-center rounded-lg hover:opacity-80"
                            style={{ backgroundImage: `url(${Box1Image})` }}
                            onClick={() => window.location.href = '/blockchain'}
                        >
                            <span className="text-white font-bold text-2xl">Blockchain Club</span>
                        </button>

                        {/* Button 2: Cyber Security Club */}
                        <button
                            className="w-full h-60 ml-10 bg-cover bg-center rounded-lg hover:opacity-80"
                            style={{ backgroundImage: `url(${Box2Image})` }}
                            onClick={() => window.location.href = '/cybersecurity'}
                        >
                            <span className="text-white font-bold text-2xl">Cyber Security Club</span>
                        </button>
                    </div>

                    {/* Section C (right section with two buttons) */}
                    <div className="flex flex-col mt-5 items-center w-1/3 ml-8">
                        {/* Button 3: Open Source Club */}
                        <button
                            className="w-full h-60 mb-10 ml-20 bg-cover bg-center rounded-lg hover:opacity-80"
                            style={{ backgroundImage: `url(${Box3Image})` }}
                            onClick={() => window.location.href = '/opensource'}
                        >
                            <span className="text-white font-bold text-2xl">Open Source Club</span>
                        </button>

                        {/* Button 4: AI Club */}
                        <button
                            className="w-full h-60 bg-cover bg-center ml-20 rounded-lg hover:opacity-80"
                            style={{ backgroundImage: `url(${Box4Image})` }}
                            onClick={() => window.location.href = '/aiclub'}
                        >
                            <span className="text-white font-bold text-2xl">AI Club</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
