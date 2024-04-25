import React from 'react';
import Navbar from '../Components/navbar'; // Import the navbar component
import Header from '../Components/header';
import Box1Image from '../Assests/imagesroni/blockchain1.jpg';
import Box2Image from '../Assests/imagesroni/cyber1.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/ai1.jpg';

const Interface = () => {
    return (
        <div className="flex">
            {/* Section A: Navbar on the left side */}
            <Navbar className="w-1/4" />

            {/* Main content area */}
            <div className="flex-1 p-4 ml-8">
                {/* Header component */}
                <Header />

                {/* Middle and right content areas */}
                <div className="flex justify-center mt-16">
                    {/* Section B (middle section with two buttons) */}
                    <div className="flex flex-col mt-10 ml-60 items-center w-1/3">
                        {/* Button 1 */}
                        <button
                            className="w-full h-60 mb-4 bg-cover bg-center relative overflow-hidden"
                            style={{ backgroundImage: `url(${Box1Image})` }}
                            onClick={() => console.log('Button 1 clicked!')}
                        >
                            <span className="text-white font-bold text-2xl font-sans absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100 hover:bg-opacity-0">Blockchain Club</span>
                        </button>

                        {/* Button 2 */}
                        <button
                            className="w-full h-60 bg-cover bg-center relative overflow-hidden"
                            style={{ backgroundImage: `url(${Box2Image})` }}
                            onClick={() => console.log('Button 2 clicked!')}
                        >
                            <span className="text-white font-bold text-2xl font-sans absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100 hover:bg-opacity-0">Cyber Security Club</span>
                        </button>
                    </div>

                    {/* Section C (right section with two buttons) */}
                    <div className="flex flex-col mt-10 items-center w-1/3 ml-8">
                        {/* Button 3 */}
                        <button
                            className="w-full h-60 mb-4 bg-cover bg-center relative overflow-hidden"
                            style={{ backgroundImage: `url(${Box3Image})` }}
                            onClick={() => console.log('Button 3 clicked!')}
                        >
                            <span className="text-white font-bold text-2xl font-sans absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100 hover:bg-opacity-0">Open Source Club</span>
                        </button>

                        {/* Button 4 */}
                        <button
                            className="w-full h-60 bg-cover bg-center relative overflow-hidden"
                            style={{ backgroundImage: `url(${Box4Image})` }}
                            onClick={() => console.log('Button 4 clicked!')}
                        >
                            <span className="text-white font-bold text-2xl font-sans absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100 hover:bg-opacity-0">AI Club</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interface;